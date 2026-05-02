import fsp from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import {
  compactHash,
  copyDir,
  ensureDir,
  listDirectories,
  mergePackageJson,
  parseArgs,
  pascalCase,
  readIfExists,
  readJson,
  renderClaudeMcpConfig,
  renderCodexConfig,
  rootDir,
  sha256,
  stripNumericPrefix,
  updateManifest,
  utcStamp,
  writeJson,
} from './utils.js';

export async function prepareRun(options) {
  const agent = options.agent || 'claude';
  const screen = options.screen;
  const design = options.design;
  const mcp = options.mcp || 'off';
  const model = options.model || (agent === 'claude' ? 'claude-opus-4-7' : 'default');

  if (!screen || !design) {
    throw new Error('Required options: --screen <slug> --design <slug>');
  }

  if (!['claude', 'codex'].includes(agent)) {
    throw new Error(`Unsupported agent: ${agent}`);
  }

  if (!['on', 'off'].includes(mcp)) {
    throw new Error(`Unsupported --mcp value: ${mcp}. Use "on" or "off".`);
  }

  const screens = await listDirectoriesOrFiles(path.join(rootDir, 'screens'));
  const designs = await listDirectories(path.join(rootDir, 'design-systems'));

  if (!screens.includes(screen)) {
    throw new Error(`Unknown screen "${screen}". Available: ${screens.join(', ')}`);
  }

  if (!designs.includes(design)) {
    throw new Error(`Unknown design "${design}". Available: ${designs.join(', ')}`);
  }

  const screenPath = path.join(rootDir, 'screens', `${screen}.md`);
  const screenPrompt = await fsp.readFile(screenPath, 'utf8');
  const designDir = path.join(rootDir, 'design-systems', design);
  const preset = await readJson(path.join(designDir, 'preset.json'), {});
  const designMd = preset.includeDesignMd === false ? '' : await readIfExists(path.join(designDir, 'DESIGN.md'));
  const agentsAddendum = await readIfExists(path.join(designDir, 'agents-addendum.md'));
  const baseAgent = await fsp.readFile(path.join(rootDir, 'agents', 'base-agent.md'), 'utf8');
  const mcpServers = mcp === 'on' ? preset.mcpServers || {} : {};
  const runId = [
    utcStamp(),
    agent,
    screen,
    design,
    `mcp-${mcp}`,
    compactHash(`${screenPrompt}\n${designMd}\n${JSON.stringify(mcpServers)}`),
  ].join('__');

  const runDir = path.join(rootDir, 'runs', runId);
  const workspaceDir = path.join(runDir, 'workspace');
  const templateDir = path.join(rootDir, 'templates', 'vite-react');

  await copyDir(templateDir, workspaceDir);

  const workspacePackagePath = path.join(workspaceDir, 'package.json');
  const workspacePackage = await readJson(workspacePackagePath);
  await writeJson(workspacePackagePath, mergePackageJson(workspacePackage, preset));

  const screenRoute = stripNumericPrefix(screen);
  const targetComponent = `${pascalCase(screen)}.jsx`;
  const targetFile = `src/screens/${targetComponent}`;

  const mcpNote =
    mcp === 'on' && Object.keys(mcpServers).length > 0
      ? `MCP enabled for this run: ${Object.keys(mcpServers).join(', ')}.`
      : 'No design-system MCP is enabled for this run.';

  const composedAgents = [
    baseAgent.trim(),
    '',
    '## Run-specific context',
    '',
    `- Agent: ${agent}`,
    `- Model: ${model}`,
    `- Screen prompt: ${screen}`,
    `- Target file: ${targetFile}`,
    `- Design system: ${preset.name || design}`,
    `- ${mcpNote}`,
    agentsAddendum.trim(),
  ]
    .filter(Boolean)
    .join('\n');

  await fsp.writeFile(path.join(workspaceDir, 'AGENTS.md'), `${composedAgents}\n`);

  if (designMd) {
    await fsp.writeFile(path.join(workspaceDir, 'DESIGN.md'), designMd);
  }

  await fsp.writeFile(path.join(workspaceDir, '.mcp.json'), `${renderClaudeMcpConfig(mcpServers)}\n`);
  await ensureDir(path.join(workspaceDir, '.codex'));
  await fsp.writeFile(
    path.join(workspaceDir, '.codex', 'config.toml'),
    renderCodexConfig(mcpServers, [rootDir, workspaceDir])
  );
  await fsp.writeFile(
    path.join(workspaceDir, '.gitignore'),
    ['.codex/', 'node_modules/', 'dist/', 'package-lock.json', ''].join('\n')
  );
  initializeWorkspaceGit(workspaceDir);

  const promptHeader = [
    'Before doing anything else, read AGENTS.md and DESIGN.md if it exists.',
    'Follow those files exactly, then complete the task below.',
    '',
    `Target file: ${targetFile}`,
    '',
    '---',
    '',
  ].join('\n');

  const fullPrompt = `${promptHeader}${screenPrompt}`;
  const metadata = {
    runId,
    agent,
    model,
    screen,
    screenRoute,
    targetFile,
    design,
    designName: preset.name || design,
    mcp,
    mcpServers: Object.keys(mcpServers),
    createdAt: new Date().toISOString(),
    paths: {
      runDir,
      workspaceDir,
      transcript: path.join(rootDir, 'results', 'transcripts', `${runId}.txt`),
      evaluation: path.join(rootDir, 'results', 'evaluations', `${runId}.json`),
      screenshots: path.join(rootDir, 'results', 'screenshots', runId),
    },
    hashes: {
      prompt: sha256(screenPrompt),
      design: designMd ? sha256(designMd) : null,
      mcp: sha256(JSON.stringify(mcpServers)),
    },
    machine: {
      platform: os.platform(),
      arch: os.arch(),
      node: process.version,
    },
  };

  await writeJson(path.join(runDir, 'run.json'), metadata);
  await fsp.writeFile(path.join(runDir, 'prompt.md'), fullPrompt);
  await updateManifest(runId, {
    ...metadata,
    status: 'prepared',
    updatedAt: new Date().toISOString(),
  });

  return { ...metadata, fullPrompt };
}

function initializeWorkspaceGit(workspaceDir) {
  runGit(['init', '--quiet'], workspaceDir);
  runGit(['add', '.'], workspaceDir);
  runGit(
    [
      '-c',
      'user.name=explore-design-md',
      '-c',
      'user.email=explore-design-md@example.invalid',
      'commit',
      '--quiet',
      '-m',
      'Baseline generated workspace',
    ],
    workspaceDir
  );
}

function runGit(args, cwd) {
  const result = spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed: ${result.stderr || result.stdout}`);
  }
}

async function listDirectoriesOrFiles(dirPath) {
  const entries = await fsp.readdir(dirPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name.replace(/\.md$/, ''))
    .sort();
}

async function main() {
  const args = parseArgs();
  const metadata = await prepareRun(args);
  console.log(metadata.runId);
  console.log(metadata.paths.workspaceDir);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
