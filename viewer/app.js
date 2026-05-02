const filters = {
  screen: document.querySelector('#screen-filter'),
  design: document.querySelector('#design-filter'),
  agent: document.querySelector('#agent-filter'),
  mcp: document.querySelector('#mcp-filter'),
};

const runsEl = document.querySelector('#runs');

async function loadManifest() {
  const response = await fetch('/results/manifest.json', { cache: 'no-store' });
  if (!response.ok) {
    return [];
  }
  return response.json();
}

function fillFilter(select, values) {
  const current = select.value || 'all';
  select.innerHTML = '';
  select.append(new Option('All', 'all'));
  for (const value of values) {
    select.append(new Option(value, value));
  }
  select.value = values.includes(current) ? current : 'all';
}

function unique(runs, key) {
  return [...new Set(runs.map((run) => run[key]).filter(Boolean))].sort();
}

function matches(run) {
  return Object.entries(filters).every(([key, select]) => select.value === 'all' || run[key] === select.value);
}

function renderRun(run) {
  const article = document.createElement('article');
  article.className = 'run-card';

  const screenshots =
    Array.isArray(run.screenshots) && run.screenshots.length > 0
      ? sortScreenshots(run.screenshots)
      : ['desktop'].map((name) => `results/screenshots/${run.runId}/${name}.png`);
  const screenshotHtml = screenshots
    .map(
      (screenshotPath) => {
        const name = getViewportName(screenshotPath);
        const fileName = screenshotPath.split('/').pop();

        return `
        <div class="shot">
          <strong>${run.design} · ${name}</strong>
          <a class="shot-file" href="/${screenshotPath}">${fileName}</a>
          <img src="/${screenshotPath}" alt="${run.design} ${name} screenshot for ${run.runId}" loading="lazy" />
        </div>
      `;
      }
    )
    .join('');

  article.innerHTML = `
    <header>
      <div>
        <h2>${run.screen}</h2>
        <div class="meta">
          <span class="pill">${run.design}</span>
          <span class="pill">${run.agent}</span>
          <span class="pill">MCP ${run.mcp}</span>
          <span class="pill">${run.status}</span>
        </div>
      </div>
      <code>${run.runId}</code>
    </header>
    <div class="shots">${screenshotHtml}</div>
    <div class="links">
      <a href="/runs/${run.runId}/workspace/DESIGN.md">DESIGN.md</a>
      <a href="/runs/${run.runId}/prompt.md">Prompt</a>
      <a href="/results/transcripts/${run.runId}.txt">Transcript</a>
      <a href="/results/evaluations/${run.runId}.json">Evaluation</a>
      <a href="/runs/${run.runId}/workspace/${run.targetFile}">Generated screen</a>
    </div>
  `;

  return article;
}

function sortScreenshots(paths) {
  const order = { desktop: 0, tablet: 1, mobile: 2 };
  return [...paths].sort((a, b) => order[getViewportName(a)] - order[getViewportName(b)]);
}

function getViewportName(screenshotPath) {
  return ['desktop', 'tablet', 'mobile'].find((name) => screenshotPath.includes(name)) || 'screenshot';
}

async function render() {
  const runs = await loadManifest();

  fillFilter(filters.screen, unique(runs, 'screen'));
  fillFilter(filters.design, unique(runs, 'design'));
  fillFilter(filters.agent, unique(runs, 'agent'));
  fillFilter(filters.mcp, unique(runs, 'mcp'));

  const visibleRuns = runs.filter(matches).reverse();
  runsEl.innerHTML = '';

  if (visibleRuns.length === 0) {
    runsEl.textContent = 'No runs match the current filters.';
    return;
  }

  for (const run of visibleRuns) {
    runsEl.append(renderRun(run));
  }
}

for (const select of Object.values(filters)) {
  select.addEventListener('change', render);
}

document.querySelector('#refresh').addEventListener('click', render);

render();
