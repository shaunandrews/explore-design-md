import fsp from 'node:fs/promises';
import path from 'node:path';
import { ensureDir, loadManifest, rootDir } from './utils.js';

function escape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function groupBy(items, key) {
  const groups = new Map();
  for (const item of items) {
    const value = item[key] || 'unknown';
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(item);
  }
  return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function pickShots(run) {
  if (Array.isArray(run.screenshots) && run.screenshots.length > 0) {
    return run.screenshots;
  }
  return [`results/screenshots/${run.runId}/desktop.png`];
}

function viewportName(p) {
  return ['desktop', 'mobile', 'tablet'].find((n) => p.includes(`${n}.png`) || p.includes(`__${n}__`)) || 'shot';
}

function renderTile(run) {
  const shots = pickShots(run).sort((a, b) => {
    const order = { desktop: 0, tablet: 1, mobile: 2 };
    return (order[viewportName(a)] ?? 9) - (order[viewportName(b)] ?? 9);
  });

  const imgs = shots
    .map(
      (p) => `<a class="shot" href="/${escape(p)}" target="_blank">
        <img src="/${escape(p)}" alt="${escape(run.design)} ${viewportName(p)}" loading="lazy" />
        <span class="vp">${escape(viewportName(p))}</span>
      </a>`
    )
    .join('');

  return `<figure class="tile">
    <div class="shots">${imgs}</div>
    <figcaption>
      <strong>${escape(run.design)}</strong>
      <span class="meta">${escape(run.agent)} · ${escape(run.mcpLabel || `mcp-${run.mcp}`)}</span>
    </figcaption>
  </figure>`;
}

function renderHtml(runs) {
  const byScreen = groupBy(runs, 'screen');
  const sections = byScreen
    .map(([screen, screenRuns]) => {
      const tiles = screenRuns
        .sort((a, b) => `${a.design}${a.agent}${a.mcp}`.localeCompare(`${b.design}${b.agent}${b.mcp}`))
        .map(renderTile)
        .join('');
      return `<section><h2 id="${escape(screen)}">${escape(screen)}</h2><div class="grid">${tiles}</div></section>`;
    })
    .join('');

  const nav = byScreen
    .map(([screen, list]) => `<a href="#${escape(screen)}">${escape(screen)} <span>(${list.length})</span></a>`)
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Contact sheet · DESIGN.md runs</title>
<style>
  :root { color-scheme: light dark; --bg:#0b0b0c; --fg:#eee; --muted:#888; --card:#141416; --line:#222; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 13px/1.4 -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif; background: var(--bg); color: var(--fg); }
  header { position: sticky; top: 0; z-index: 2; background: rgba(11,11,12,0.92); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); padding: 12px 20px; }
  header h1 { margin: 0 0 6px; font-size: 14px; font-weight: 600; }
  nav { display: flex; flex-wrap: wrap; gap: 8px 14px; }
  nav a { color: var(--fg); text-decoration: none; opacity: 0.8; }
  nav a:hover { opacity: 1; }
  nav a span { color: var(--muted); }
  section { padding: 24px 20px 8px; border-bottom: 1px solid var(--line); }
  section h2 { margin: 0 0 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
  .tile { margin: 0; background: var(--card); border: 1px solid var(--line); border-radius: 8px; overflow: hidden; }
  .shots { display: flex; gap: 1px; background: var(--line); }
  .shot { position: relative; flex: 1; display: block; }
  .shot img { width: 100%; height: 220px; object-fit: cover; object-position: top center; display: block; background: #1a1a1c; }
  .vp { position: absolute; top: 6px; left: 6px; padding: 2px 6px; font-size: 10px; background: rgba(0,0,0,0.6); color: #fff; border-radius: 3px; }
  figcaption { padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; }
  figcaption strong { font-weight: 600; }
  .meta { color: var(--muted); font-size: 11px; }
  .empty { padding: 60px 20px; text-align: center; color: var(--muted); }
</style>
</head>
<body>
<header>
  <h1>DESIGN.md contact sheet · ${runs.length} run${runs.length === 1 ? '' : 's'}</h1>
  <nav>${nav}</nav>
</header>
${runs.length === 0 ? '<div class="empty">No screenshotted runs yet. Run <code>npm run screenshot</code> first.</div>' : sections}
</body>
</html>
`;
}

async function main() {
  const manifest = await loadManifest();
  const runs = manifest.filter(
    (r) => r.status === 'screenshotted' && Array.isArray(r.screenshots) && r.screenshots.length > 0
  );

  const html = renderHtml(runs);
  const outPath = path.join(rootDir, 'results', 'contact-sheet.html');
  await ensureDir(path.dirname(outPath));
  await fsp.writeFile(outPath, html);
  console.log(`Wrote ${path.relative(rootDir, outPath)} (${runs.length} runs)`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
