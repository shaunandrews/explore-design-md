import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { execSync, spawn } from 'node:child_process';
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

function reservePort(label) {
  try {
    const output = execSync(`portman request 1 -n ${JSON.stringify(label)} --json`, {
      encoding: 'utf8',
    });
    const parsed = JSON.parse(output);
    const port = Array.isArray(parsed.ports) ? parsed.ports[0] : parsed.port;
    if (Number.isInteger(port)) {
      return port;
    }
  } catch {
    // Fall through to random port.
  }

  return 4300 + Math.floor(Math.random() * 1000);
}

async function captureRun(run) {
  const workspaceDir = run.paths.workspaceDir;

  if (!fs.existsSync(path.join(workspaceDir, 'node_modules'))) {
    throw new Error(`node_modules missing for ${run.runId}. Run npm install in ${workspaceDir} first.`);
  }

  const port = reservePort(`explore-design-md-${run.runId.slice(-12)}`);
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
  const namedScreenshotDir = path.join(rootDir, 'results', 'screenshots', 'by-design');

  try {
    await waitForServer(baseUrl);
    await ensureDir(screenshotDir);
    await ensureDir(namedScreenshotDir);

    const browser = await chromium.launch();
    const page = await browser.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    page.on('pageerror', (error) => {
      pageErrors.push(error.stack || error.message);
    });
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });
    const screenshots = [];
    const canonicalScreenshots = [];
    const consoleErrorsByViewport = {};

    for (const [name, viewport] of Object.entries(viewports)) {
      const pageErrorStart = pageErrors.length;
      const consoleErrorStart = consoleErrors.length;
      await page.setViewportSize(viewport);
      await page.goto(pageUrl, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(500);

      const newPageErrors = pageErrors.slice(pageErrorStart);
      const newConsoleErrors = consoleErrors.slice(consoleErrorStart);
      if (newPageErrors.length > 0) {
        throw new Error(
          [`Runtime error while screenshotting ${run.runId} (${name}):`, ...newPageErrors].join('\n')
        );
      }
      if (newConsoleErrors.length > 0) {
        consoleErrorsByViewport[name] = newConsoleErrors;
        fs.appendFileSync(
          serverLogPath,
          `\n[console errors @ ${name}]\n${newConsoleErrors.join('\n')}\n`
        );
      }

      const bodyText = await page.locator('body').innerText().catch(() => '');
      if (!bodyText.trim()) {
        throw new Error(`Rendered page is empty while screenshotting ${run.runId} (${name}).`);
      }

      const canonicalPath = path.join(screenshotDir, `${name}.png`);
      const namedPath = path.join(
        namedScreenshotDir,
        [
          safeSegment(run.screen),
          safeSegment(run.design),
          safeSegment(run.agent),
          safeSegment(run.mcpLabel || `mcp-${run.mcp}`),
          name,
          shortRunLabel(run.runId),
        ].join('__') + '.png'
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
      consoleErrors: consoleErrorsByViewport,
      updatedAt: new Date().toISOString(),
    });
  } finally {
    await stopServer(server);
  }
}

async function stopServer(server) {
  if (!server || server.killed) return;

  const pid = server.pid;
  try {
    if (pid) {
      process.kill(-pid, 'SIGTERM');
    }
  } catch {
    try {
      server.kill('SIGTERM');
    } catch {
      // already gone
    }
  }

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      try {
        if (pid) process.kill(-pid, 'SIGKILL');
      } catch {
        try { server.kill('SIGKILL'); } catch {}
      }
      resolve();
    }, 3000);
    server.on('close', () => {
      clearTimeout(timer);
      resolve();
    });
  });
}

function safeSegment(value) {
  return String(value || 'unknown')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function shortRunLabel(runId) {
  const parts = String(runId || '').split('__');
  return [parts[0], parts.at(-1)].filter(Boolean).map(safeSegment).join('-') || 'unknown-run';
}

async function main() {
  const args = parseArgs();
  const manifest = await loadManifest();
  const runs = args.run
    ? manifest.filter((entry) => entry.runId === args.run)
    : manifest.filter((entry) => ['generated', 'screenshotted'].includes(entry.status));

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
