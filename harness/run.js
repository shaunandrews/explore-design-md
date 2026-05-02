import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { prepareRun } from './prepare-run.js';
import { ensureDir, parseArgs, rootDir, updateManifest } from './utils.js';

export async function runExperiment(options) {
  const metadata = await prepareRun(options);
  const transcriptPath = metadata.paths.transcript;

  await ensureDir(path.dirname(transcriptPath));
  await writeTranscriptHeader(transcriptPath, metadata);

  if (options.dryRun) {
    await append(transcriptPath, '\n=== Dry run: agent invocation skipped ===\n');
    await updateManifest(metadata.runId, {
      status: 'dry-run',
      updatedAt: new Date().toISOString(),
    });
    return metadata;
  }

  await updateManifest(metadata.runId, {
    status: 'running',
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const agentResult =
    metadata.agent === 'claude'
      ? await runClaude(metadata, transcriptPath)
      : await runCodex(metadata, transcriptPath);

  await append(transcriptPath, '\n=== Post-agent: npm install ===\n');
  const installResult = await runCommand('npm', ['install', '--silent'], {
    cwd: metadata.paths.workspaceDir,
    transcriptPath,
    env: process.env,
  });

  const status = agentResult.code === 0 ? 'generated' : 'agent-failed';
  await append(transcriptPath, `\n=== Run complete: ${status} ===\n`);

  await updateManifest(metadata.runId, {
    status,
    agentExitCode: agentResult.code,
    npmInstallExitCode: installResult.code,
    finishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  return metadata;
}

async function runClaude(metadata, transcriptPath) {
  const env = { ...process.env };

  if (!env.ANTHROPIC_API_KEY) {
    const tmpKeyPath = '/tmp/geode-claude-key';
    if (fs.existsSync(tmpKeyPath)) {
      env.ANTHROPIC_API_KEY = fs.readFileSync(tmpKeyPath, 'utf8').trim();
    }
  }

  if (!env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is required for Claude runs. Set it in the environment or /tmp/geode-claude-key.');
  }

  return runCommand(
    'claude',
    [
      '--print',
      '--bare',
      '--strict-mcp-config',
      '--mcp-config',
      path.join(metadata.paths.workspaceDir, '.mcp.json'),
      '--add-dir',
      metadata.paths.workspaceDir,
      '--model',
      metadata.model,
      '--permission-mode',
      'bypassPermissions',
      '--output-format',
      'text',
      await fsp.readFile(path.join(metadata.paths.runDir, 'prompt.md'), 'utf8'),
    ],
    {
      cwd: metadata.paths.workspaceDir,
      transcriptPath,
      env,
    }
  );
}

async function runCodex(metadata, transcriptPath) {
  const codexHome = path.join(metadata.paths.workspaceDir, '.codex');
  await ensureDir(codexHome);

  const scopedAuth = path.join(codexHome, 'auth.json');
  const userAuth = path.join(process.env.HOME || '', '.codex', 'auth.json');

  if (!fs.existsSync(scopedAuth) && fs.existsSync(userAuth)) {
    await fsp.symlink(userAuth, scopedAuth);
  }

  if (!fs.existsSync(scopedAuth)) {
    throw new Error('Codex auth not found. Run `codex login` first so ~/.codex/auth.json exists.');
  }

  return runCommand(
    'codex',
    [
      'exec',
      '--skip-git-repo-check',
      '--sandbox',
      'workspace-write',
      '-C',
      metadata.paths.workspaceDir,
      '--add-dir',
      metadata.paths.workspaceDir,
      await fsp.readFile(path.join(metadata.paths.runDir, 'prompt.md'), 'utf8'),
    ],
    {
      cwd: metadata.paths.workspaceDir,
      transcriptPath,
      env: {
        ...process.env,
        CODEX_HOME: codexHome,
        GIT_CEILING_DIRECTORIES: metadata.paths.runDir,
      },
    }
  );
}

async function runCommand(command, args, options) {
  await append(options.transcriptPath, `$ ${[command, ...args.slice(0, -1), args.at(-1)?.length > 300 ? '<prompt>' : args.at(-1)].join(' ')}\n`);

  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    child.stdout.on('data', (chunk) => {
      process.stdout.write(chunk);
      fs.appendFileSync(options.transcriptPath, chunk);
    });

    child.stderr.on('data', (chunk) => {
      process.stderr.write(chunk);
      fs.appendFileSync(options.transcriptPath, chunk);
    });

    child.on('close', (code) => {
      resolve({ code });
    });
  });
}

async function writeTranscriptHeader(transcriptPath, metadata) {
  const header = [
    '=== explore-design-md run ===',
    `Run ID:       ${metadata.runId}`,
    `Agent:        ${metadata.agent}`,
    `Model:        ${metadata.model}`,
    `Screen:       ${metadata.screen}`,
    `Design:       ${metadata.design}`,
    `MCP:          ${metadata.mcp} (${metadata.mcpServers.join(', ') || 'none'})`,
    `Workspace:    ${metadata.paths.workspaceDir}`,
    `Prompt hash:  ${metadata.hashes.prompt}`,
    `Design hash:  ${metadata.hashes.design || 'none'}`,
    `Started UTC:  ${new Date().toISOString()}`,
    '=============================',
    '',
  ].join('\n');

  await fsp.writeFile(transcriptPath, header);
}

async function append(filePath, content) {
  await fsp.appendFile(filePath, content);
}

async function main() {
  const args = parseArgs();
  const metadata = await runExperiment(args);
  console.log(metadata.runId);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exit(1);
  });
}
