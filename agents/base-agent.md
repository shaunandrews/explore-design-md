# Project conventions for the AI agent

This is a controlled `DESIGN.md` experiment workspace. Your job is to build one requested screen while following the local project conventions exactly.

## Benchmark automation

This run is a pre-approved benchmark generation. Do not invoke interactive planning, brainstorming, approval-gate, or spec-writing skills. Do not ask the user clarifying questions. The screen prompt, this `AGENTS.md`, and `DESIGN.md` are the complete approved brief. Implement the requested screen directly.

## Context order

1. Read this `AGENTS.md`.
2. Read `DESIGN.md` if it exists.
3. If an MCP server is available, use it as supporting design-system context. The local `DESIGN.md` remains the authoritative brief for this run.
4. Read the task prompt.

## Rules for every screen

- Your primary deliverable is the target file under `src/screens/`.
- Keep the screen self-contained. Inline fixture data is fine.
- Use the existing Vite + React scaffold and hash router. Do not replace the app shell.
- Use CSS variables or local CSS in the screen file when practical. Do not introduce a broad shared theme unless the prompt explicitly asks for it.
- If `DESIGN.md` defines tokens, use those exact values and names in CSS custom properties.
- If `DESIGN.md` includes do/don't guidance, treat it as product/design requirements, not suggestions.
- If MCP context conflicts with `DESIGN.md`, prefer `DESIGN.md` and mention the conflict in your final note.

## Allowed edits

1. `src/screens/<TargetScreen>.jsx` — primary deliverable.
2. `package.json` — only if a required package is genuinely missing.
3. `src/screens/<TargetScreen>.css` — optional, only if you prefer a colocated stylesheet.

Do not modify `src/main.jsx`, `src/App.jsx`, `src/index.css`, `index.html`, or unrelated screen files.
