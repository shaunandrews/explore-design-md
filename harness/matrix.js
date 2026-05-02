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

function parseConcurrency(value) {
  if (value === undefined) {
    return 1;
  }

  const concurrency = Number.parseInt(value, 10);

  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new Error(`Invalid concurrency value: ${value}`);
  }

  return concurrency;
}

function buildJobs({ agents, screens, designs, mcps, args }) {
  const jobs = [];

  for (const agent of agents) {
    for (const screen of screens) {
      for (const design of designs) {
        for (const mcp of mcps) {
          const runArgs = ['--agent', agent, '--screen', screen, '--design', design, '--mcp', mcp];

          if (args.model) {
            runArgs.push('--model', args.model);
          }

          if (args.mcpProfile) {
            runArgs.push('--mcp-profile', args.mcpProfile);
          }

          if (args.dryRun) {
            runArgs.push('--dry-run');
          }

          jobs.push(runArgs);
        }
      }
    }
  }

  return jobs;
}

async function runJobs(jobs, concurrency) {
  let nextIndex = 0;
  const failures = [];

  async function worker() {
    while (nextIndex < jobs.length) {
      const jobIndex = nextIndex;
      nextIndex += 1;

      try {
        await runChild(jobs[jobIndex]);
      } catch (error) {
        failures.push(error);
      }
    }
  }

  const workerCount = Math.min(concurrency, jobs.length);
  await Promise.all(Array.from({ length: workerCount }, worker));

  if (failures.length > 0) {
    throw new Error(`${failures.length} matrix run(s) failed:\n${failures.map((error) => error.message).join('\n')}`);
  }
}

async function main() {
  const args = parseArgs();
  const allScreens = await listScreens();
  const allDesigns = await listDirectories(path.join(rootDir, 'design-systems'));
  const agents = expand(args.agents || args.agent || 'claude', ['claude', 'codex']);
  const screens = expand(args.screens || args.screen || 'all', allScreens);
  const designs = expand(args.designs || args.design || 'all', allDesigns);
  const mcps = expand(args.mcp || 'off', ['off', 'on']);
  const concurrency = parseConcurrency(args.concurrency || args.parallel);
  const jobs = buildJobs({ agents, screens, designs, mcps, args });

  console.log(`Running ${jobs.length} matrix job(s) with concurrency ${concurrency}`);
  await runJobs(jobs, concurrency);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
