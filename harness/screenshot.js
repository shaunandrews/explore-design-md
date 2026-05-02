import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';
import { ensureDir, loadManifest, parseArgs, rootDir, updateManifest } from './utils.js';

const viewports = {
  desktop: { width: 1440, height: 1000 },
};

async function waitForServer(url, timeoutMs = 30000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is not ready yet.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function captureRun(run) {
  const workspaceDir = run.paths.workspaceDir;

  if (!fs.existsSync(path.join(workspaceDir, 'node_modules'))) {
    throw new Error(`node_modules missing for ${run.runId}. Run npm install in ${workspaceDir} first.`);
  }

  const port = 4300 + Math.floor(Math.random() * 1000);
  const server = spawn('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', String(port)], {
    cwd: workspaceDir,
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const serverLogPath = path.join(rootDir, 'results', 'transcripts', `${run.runId}.server.txt`);
  server.stdout.on('data', (chunk) => fs.appendFileSync(serverLogPath, chunk));
  server.stderr.on('data', (chunk) => fs.appendFileSync(serverLogPath, chunk));

  const baseUrl = `http://127.0.0.1:${port}`;
  const pageUrl = `${baseUrl}/#/${run.screenRoute}`;
  const screenshotDir = path.join(rootDir, 'results', 'screenshots', run.runId);
  const namedScreenshotDir = path.join(
    rootDir,
    'results',
    'screenshots',
    'by-design',
    safeSegment(run.design),
    safeSegment(run.screen),
    `${safeSegment(run.agent)}__mcp-${safeSegment(run.mcp)}__${run.runId}`
  );

  try {
    await waitForServer(baseUrl);
    await ensureDir(screenshotDir);
    await ensureDir(namedScreenshotDir);

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const screenshots = [];
    const canonicalScreenshots = [];

    for (const [name, viewport] of Object.entries(viewports)) {
      await page.setViewportSize(viewport);
      await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);
      const canonicalPath = path.join(screenshotDir, `${name}.png`);
      const namedPath = path.join(
        namedScreenshotDir,
        `${safeSegment(run.screen)}__${safeSegment(run.design)}__${safeSegment(run.agent)}__mcp-${safeSegment(run.mcp)}__${name}.png`
      );

      await page.screenshot({
        path: canonicalPath,
        fullPage: true,
      });
      await fsp.copyFile(canonicalPath, namedPath);

      screenshots.push(path.relative(rootDir, namedPath));
      canonicalScreenshots.push(path.relative(rootDir, canonicalPath));
    }

    await browser.close();
    await updateManifest(run.runId, {
      status: 'screenshotted',
      screenshots,
      canonicalScreenshots,
      screenshotDir: path.relative(rootDir, namedScreenshotDir),
      canonicalScreenshotDir: path.relative(rootDir, screenshotDir),
      screenshotAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } finally {
    try {
      process.kill(-server.pid, 'SIGTERM');
    } catch {
      server.kill('SIGTERM');
    }
  }
}

function safeSegment(value) {
  return String(value || 'unknown')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function main() {
  const args = parseArgs();
  const manifest = await loadManifest();
  const runs = args.run
    ? manifest.filter((entry) => entry.runId === args.run)
    : manifest.filter((entry) => ['generated', 'evaluated', 'screenshotted'].includes(entry.status));

  if (runs.length === 0) {
    throw new Error(args.run ? `Run not found: ${args.run}` : 'No generated runs found to screenshot.');
  }

  for (const run of runs) {
    console.log(`Screenshotting ${run.runId}`);
    await captureRun(run);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
