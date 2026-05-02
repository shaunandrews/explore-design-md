# Explore DESIGN.md

Research and experiment workspace for a presentation on design systems with AI, focused on Google's `DESIGN.md` spec and controlled comparisons of AI-generated interfaces.

Start here:

- [Research brief](docs/design-md-research.md)
- [Presentation outline](docs/presentation-outline.md)
- [Methodology](docs/methodology.md)

## What This Builds

This repo can spin up isolated agent workspaces for a matrix of:

- Screen prompt: dashboard, onboarding, settings.
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

# After generated runs exist:
npm run screenshot
npm run evaluate
npm run viewer
```

Claude runs require `ANTHROPIC_API_KEY` in the environment or `/tmp/geode-claude-key`, matching the pattern from the Geode experiment. Codex runs use a scoped `CODEX_HOME` inside the generated workspace and symlink `~/.codex/auth.json`.
