# Project conventions for the AI agent

This is a controlled benchmark workspace. Build the requested screen exactly as specified. The screen prompt, this `AGENTS.md`, and `DESIGN.md` (if present) are the complete approved brief. Do not invoke planning, brainstorming, or approval-gate skills. Do not ask clarifying questions.

## What to read

1. This `AGENTS.md`.
2. `DESIGN.md` if it exists — use its tokens (colors, type, spacing, radii) as exact values.
3. Every file under `research/` if that folder exists. Use the `Read` tool on image files so you actually see them. The images and direction notes there tell you what a finished screen should *look* like — token compliance alone is not enough.
4. Any MCP servers configured for this run.
5. The task prompt.

## Rules for every screen

- The primary deliverable is the target file under `src/screens/`.
- Keep the screen self-contained. Inline fixture data is fine.
- Use the existing Vite + React scaffold and hash router. Do not replace the app shell.
- When `DESIGN.md` defines tokens, use those exact values and names in CSS custom properties.
- Treat any do/don't and principles in `DESIGN.md` as product requirements, not suggestions.

## Allowed edits

1. `src/screens/<TargetScreen>.jsx` — primary deliverable.
2. `src/screens/<TargetScreen>.css` — optional, only if you prefer a colocated stylesheet.
3. `package.json` — only if a required package is genuinely missing.

Do not modify `src/main.jsx`, `src/App.jsx`, `src/index.css`, `index.html`, or unrelated screen files.
