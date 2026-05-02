import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ensureDir, loadManifest, parseArgs, rootDir, updateManifest, writeJson } from './utils.js';

async function evaluateRun(run) {
  const workspaceDir = run.paths.workspaceDir;
  const targetPath = path.join(workspaceDir, run.targetFile);
  const designPath = path.join(workspaceDir, 'DESIGN.md');
  const targetSource = fs.existsSync(targetPath) ? await fsp.readFile(targetPath, 'utf8') : '';
  const designSource = fs.existsSync(designPath) ? await fsp.readFile(designPath, 'utf8') : '';
  const screenshotsDir = path.join(rootDir, 'results', 'screenshots', run.runId);

  const build = spawnSync('npm', ['run', 'build'], {
    cwd: workspaceDir,
    encoding: 'utf8',
  });

  const lint =
    designSource.length > 0
      ? spawnSync('npx', ['@google/design.md', 'lint', 'DESIGN.md'], {
          cwd: workspaceDir,
          encoding: 'utf8',
        })
      : null;

  const designHexes = [...new Set(designSource.match(/#[0-9A-Fa-f]{6}\b/g) || [])];
  const outputHexes = [...new Set(targetSource.match(/#[0-9A-Fa-f]{6}\b/g) || [])];
  const matchedHexes = outputHexes.filter((hex) =>
    designHexes.some((designHex) => designHex.toLowerCase() === hex.toLowerCase())
  );
  const unexpectedHexes = outputHexes.filter(
    (hex) => !designHexes.some((designHex) => designHex.toLowerCase() === hex.toLowerCase())
  );

  const screenshots = ['desktop', 'tablet', 'mobile']
    .map((name) => ({
      name,
      path: path.join(screenshotsDir, `${name}.png`),
      exists: fs.existsSync(path.join(screenshotsDir, `${name}.png`)),
    }));

  const evaluation = {
    runId: run.runId,
    evaluatedAt: new Date().toISOString(),
    checks: {
      targetFileExists: fs.existsSync(targetPath),
      targetFileBytes: targetSource.length,
      buildExitCode: build.status,
      designMdPresent: designSource.length > 0,
      designLintExitCode: lint ? lint.status : null,
      screenshots,
    },
    heuristics: {
      designHexCount: designHexes.length,
      outputHexCount: outputHexes.length,
      matchedDesignHexes: matchedHexes,
      unexpectedOutputHexes: unexpectedHexes,
      usesCssVariables: targetSource.includes('--') || targetSource.includes('var('),
      mentionsDesignSystem: /DESIGN\.md|design system|token/i.test(targetSource),
    },
    build: {
      stdout: build.stdout,
      stderr: build.stderr,
    },
    designLint: lint
      ? {
          stdout: lint.stdout,
          stderr: lint.stderr,
        }
      : null,
  };

  await ensureDir(path.join(rootDir, 'results', 'evaluations'));
  await writeJson(path.join(rootDir, 'results', 'evaluations', `${run.runId}.json`), evaluation);

  await updateManifest(run.runId, {
    status: build.status === 0 ? 'evaluated' : 'build-failed',
    buildExitCode: build.status,
    designLintExitCode: lint ? lint.status : null,
    evaluation: `results/evaluations/${run.runId}.json`,
    updatedAt: new Date().toISOString(),
  });
}

async function main() {
  const args = parseArgs();
  const manifest = await loadManifest();
  const runs = args.run
    ? manifest.filter((entry) => entry.runId === args.run)
    : manifest.filter((entry) => ['generated', 'screenshotted', 'evaluated', 'build-failed'].includes(entry.status));

  if (runs.length === 0) {
    throw new Error(args.run ? `Run not found: ${args.run}` : 'No generated runs found to evaluate.');
  }

  for (const run of runs) {
    console.log(`Evaluating ${run.runId}`);
    await evaluateRun(run);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});

