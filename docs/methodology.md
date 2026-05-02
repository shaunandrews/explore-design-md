# Methodology

This project generalizes the Geode MCP comparison pattern into a config-driven `DESIGN.md` harness.

## What Is Held Constant

- Same Vite + React scaffold.
- Same screen prompt.
- Same target file path per screen.
- Same runner flags per agent.
- Fresh generated workspace per run.
- No iterative follow-up by default.

## What Varies

- The design-system pack in `design-systems/<slug>/`.
- Whether that pack's MCP servers are exposed to the agent.
- The agent runner: `claude` or `codex`.

## Run Inputs

Screen prompts live in `screens/`. Each prompt names the target screen file and product requirements.

Design-system packs live in `design-systems/`. Each pack has:

- `preset.json` for metadata, dependency additions, and optional MCP servers.
- `DESIGN.md` unless the pack intentionally omits one.
- Optional `agents-addendum.md` for design-system-specific operational instructions.

## Run Output

Generated workspaces live under `runs/<run-id>/workspace/`.

Reusable presentation artifacts live under `results/`:

- `results/manifest.json`
- `results/transcripts/<run-id>.txt`
- `results/screenshots/by-design/<screen>__<design>__<agent>__mcp-<mode>__desktop__<short-run-id>.png`
- `results/evaluations/<run-id>.json`

## MCP Behavior

`--mcp off` writes empty MCP configs.

`--mcp on` writes the selected design-system pack's `mcpServers` into:

- `.mcp.json` for Claude Code.
- `.codex/config.toml` for Codex.

The included starter packs use the DESIGNmd MCP server (`npx designmd-mcp`) when MCP is enabled. Per DESIGNmd's docs, search/browse work without an API key; downloading and account actions require one.

Design packs can also define MCP-only package additions via `mcpDependencies` and `mcpDevDependencies`. For example, `a8c-wordpress-com` wires the WordPress Design System MCP (`npx -y @wordpress/design-system-mcp`) and installs `@wordpress/theme` plus `@wordpress/ui` only when `--mcp on` is used.

## Agent Isolation

Claude runs use:

- `--bare`
- `--strict-mcp-config`
- `--mcp-config <workspace>/.mcp.json`
- `--add-dir <workspace>`
- `--permission-mode bypassPermissions`

Codex runs use:

- scoped `CODEX_HOME=<workspace>/.codex`
- generated `.codex/config.toml`
- `codex exec --skip-git-repo-check --sandbox workspace-write`
- `--add-dir <workspace>`

The goal is to keep user/global agent state from leaking into the experiment.
