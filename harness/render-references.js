import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { ensureDir, parseArgs, rootDir } from './utils.js';

const VIEWPORT = { width: 1440, height: 1000 };

async function renderHtml(htmlPath, pngPath) {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setViewportSize(VIEWPORT);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    await page.screenshot({ path: pngPath, fullPage: true });
  } finally {
    await browser.close();
  }
}

async function renderDesignPack(designSlug) {
  const designDir = path.join(rootDir, 'design-systems', designSlug);
  if (!fs.existsSync(designDir)) {
    throw new Error(`No design pack at ${designDir}`);
  }

  const researchDir = path.join(designDir, 'research');
  await ensureDir(researchDir);

  const previewFiles = (await fsp.readdir(designDir)).filter(
    (name) => name.endsWith('.html') && name.includes('preview')
  );

  if (previewFiles.length === 0) {
    console.log(`No preview*.html files in ${designSlug}; nothing to render.`);
    return;
  }

  for (const file of previewFiles) {
    const htmlPath = path.join(designDir, file);
    const pngName = file.replace(/\.html$/, '.png');
    const pngPath = path.join(researchDir, pngName);
    console.log(`Rendering ${designSlug}/${file} -> research/${pngName}`);
    await renderHtml(htmlPath, pngPath);
  }
}

async function main() {
  const args = parseArgs();
  const target = args.design || args._?.[0];

  if (!target) {
    throw new Error('Usage: npm run render-references -- --design <slug>');
  }

  if (target === 'all') {
    const entries = await fsp.readdir(path.join(rootDir, 'design-systems'), { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        await renderDesignPack(entry.name);
      }
    }
  } else {
    await renderDesignPack(target);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
