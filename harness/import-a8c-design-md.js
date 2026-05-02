import { execFileSync } from 'node:child_process';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { ensureDir, parseArgs, rootDir, writeJson } from './utils.js';

const brandNames = {
  'automattic.design': 'Automattic Design',
  beeper: 'Beeper',
  cloudup: 'Cloudup',
  dayone: 'Day One',
  gravatar: 'Gravatar',
  jetpack: 'Jetpack',
  newspack: 'Newspack',
  parsely: 'Parse.ly',
  pocketcasts: 'Pocket Casts',
  tumblr: 'Tumblr',
  woocommerce: 'WooCommerce',
  'wordpress.com': 'WordPress.com',
  wpvip: 'WPVIP',
};

function slugFor(sourceName) {
  return `a8c-${sourceName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
}

function gitCommit(sourceRoot) {
  try {
    return execFileSync('git', ['-C', sourceRoot, 'rev-parse', '--short', 'HEAD'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

async function copyIfPresent(sourcePath, destinationPath) {
  try {
    await fsp.copyFile(sourcePath, destinationPath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

async function importBrand({ sourceRoot, sourceName, commit }) {
  const sourceDir = path.join(sourceRoot, 'design-md', sourceName);
  const targetSlug = slugFor(sourceName);
  const targetDir = path.join(rootDir, 'design-systems', targetSlug);
  const displayName = brandNames[sourceName] || sourceName;

  await ensureDir(targetDir);
  await copyIfPresent(path.join(sourceDir, 'DESIGN.md'), path.join(targetDir, 'DESIGN.md'));
  await copyIfPresent(path.join(sourceDir, 'BACKLOG.md'), path.join(targetDir, 'BACKLOG.md'));
  await copyIfPresent(path.join(sourceDir, 'preview.html'), path.join(targetDir, 'preview.html'));
  await copyIfPresent(path.join(sourceDir, 'preview-dark.html'), path.join(targetDir, 'preview-dark.html'));

  await writeJson(path.join(targetDir, 'preset.json'), {
    name: `${displayName} DESIGN.md`,
    description: `Imported from Automattic/A8c-design-md design-md/${sourceName}.`,
    includeDesignMd: true,
    dependencies: {},
    devDependencies: {},
    mcpServers: {
      designmd: {
        command: 'npx',
        args: ['designmd-mcp'],
      },
    },
    source: {
      repository: 'github.a8c.com/Automattic/A8c-design-md',
      ref: 'trunk',
      commit,
      path: `design-md/${sourceName}`,
      url: `https://github.a8c.com/Automattic/A8c-design-md/tree/trunk/design-md/${sourceName}`,
    },
  });

  return targetSlug;
}

async function main() {
  const args = parseArgs();
  const sourceRoot = path.resolve(args.source || '/private/tmp/A8c-design-md');
  const designMdRoot = path.join(sourceRoot, 'design-md');
  const entries = await fsp.readdir(designMdRoot, { withFileTypes: true });
  const commit = gitCommit(sourceRoot);
  const imported = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    imported.push(await importBrand({ sourceRoot, sourceName: entry.name, commit }));
  }

  console.log(imported.sort().join('\n'));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
}
