import { spawn } from 'node:child_process';
import path from 'node:path';
import { listDirectories, parseArgs, rootDir } from './utils.js';
import fsp from 'node:fs/promises';

async function listScreens() {
  const entries = await fsp.readdir(path.join(rootDir, 'screens'), { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name.replace(/\.md$/, ''))
    .sort();
}

function expand(value, allValues) {
  if (!value || value === 'all') {
    return allValues;
  }

  if (value === 'both') {
    return ['off', 'on'];
  }

  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

async function runChild(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(rootDir, 'harness', 'run.js'), ...args], {
      cwd: rootDir,
      stdio: 'inherit',
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Run failed with exit code ${code}: ${args.join(' ')}`));
      }
    });
  });
}

async function main() {
  const args = parseArgs();
  const allScreens = await listScreens();
  const allDesigns = await listDirectories(path.join(rootDir, 'design-systems'));
  const agents = expand(args.agents || args.agent || 'claude', ['claude', 'codex']);
  const screens = expand(args.screens || args.screen || 'all', allScreens);
  const designs = expand(args.designs || args.design || 'all', allDesigns);
  const mcps = expand(args.mcp || 'off', ['off', 'on']);

  for (const agent of agents) {
    for (const screen of screens) {
      for (const design of designs) {
        for (const mcp of mcps) {
          const runArgs = ['--agent', agent, '--screen', screen, '--design', design, '--mcp', mcp];

          if (args.model) {
            runArgs.push('--model', args.model);
          }

          if (args.dryRun) {
            runArgs.push('--dry-run');
          }

          await runChild(runArgs);
        }
      }
    }
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});

