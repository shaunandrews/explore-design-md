# Explore DESIGN.md

Research and experiment workspace for a presentation on design systems with AI, focused on Google's `DESIGN.md` spec and controlled comparisons of AI-generated interfaces.

Start here:

- [Research brief](docs/design-md-research.md)
- [Presentation outline](docs/presentation-outline.md)
- [Methodology](docs/methodology.md)
- [A8C DESIGN.md sources](docs/a8c-design-md-sources.md)

## What This Builds

This repo can spin up isolated agent workspaces for a matrix of:

- Screen prompt: dashboard, onboarding, settings, sites list, domains list.
- `DESIGN.md` pack: no design file, minimal tokens, rich system, rich system plus templates, flawed/stale system.
- Agent: Claude Code or Codex.
- MCP: off or on.

Each run gets its own copied Vite + React workspace under `runs/`, its own `AGENTS.md`, optional `DESIGN.md`, optional MCP config, transcript, screenshots, and evaluation JSON.

## Quick Commands

```sh
npm install

# Prepare a workspace without invoking an agent.
npm run prepare-run -- --agent claude --screen 01-analytics-dashboard --design rich-system --mcp off

# Run one generation.
npm run run -- --agent claude --screen 01-analytics-dashboard --design rich-system --mcp off

# Run a dry matrix to verify combinations.
npm run matrix -- --agents claude,codex --screens all --designs all --mcp both --dry-run

# Run selected combinations in parallel.
npm run matrix -- --agent codex --screen 01-analytics-dashboard --designs a8c-wordpress-com,a8c-tumblr,a8c-jetpack --mcp off --concurrency 3

# Refresh imported Automattic brand DESIGN.md packs from a local clone.
npm run import-a8c-design-md -- --source /private/tmp/A8c-design-md

# After generated runs exist:
npm run screenshot
npm run evaluate
npm run viewer
```

Claude runs require `ANTHROPIC_API_KEY` in the environment or `/tmp/geode-claude-key`, matching the pattern from the Geode experiment. Codex runs use a scoped `CODEX_HOME` inside the generated workspace and symlink `~/.codex/auth.json`.

Imported Automattic brand packs use the `a8c-*` prefix, for example `a8c-woocommerce`, `a8c-jetpack`, `a8c-wordpress-com`, and `a8c-wpvip`.

Named screenshots are written flat under `results/screenshots/by-design/` so Finder/browser comparisons do not require drilling through run folders.

The `a8c-wordpress-com` MCP-on condition uses the WordPress Design System MCP plus `@wordpress/ui`, `@wordpress/components`, and `@wordpress/dataviews` so list-heavy screens can exercise real collection primitives.
