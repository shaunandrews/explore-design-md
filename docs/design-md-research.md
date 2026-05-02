# DESIGN.md Research Brief

Research date: 2026-05-02

Audience: Automattic designers and product people spending two weeks learning AI.

## Working Thesis

`DESIGN.md` is best presented as repo-native design context for AI agents: a portable markdown file that gives coding/design agents exact tokens plus the rationale needed to apply them. It is not a replacement for design systems, Figma libraries, or designer judgment. The useful framing for Automattic is: it turns brand/design decisions into durable AI context, then lets us test whether agents can respect that context across real interface tasks.

The strongest presentation angle is a controlled comparison:

1. Same product/interface prompt.
2. Same app scaffold.
3. Different `DESIGN.md` files.
4. Same agent/model settings.
5. Render the outputs side by side with the source markdown, screenshots, and an evaluation rubric.

## What DESIGN.md Is

The official Google Labs repo describes `DESIGN.md` as a format specification for giving coding agents a persistent, structured understanding of a design system. The format combines:

- YAML front matter for machine-readable design tokens.
- Markdown body sections for human-readable design rationale and guidance.

The official spec currently calls the format `alpha`. The core token categories are colors, typography, spacing, rounded corners, and component mappings. Component tokens can reference earlier tokens with syntax like `{colors.primary}`.

Canonical section order from the spec:

1. Overview / Brand & Style
2. Colors
3. Typography
4. Layout / Layout & Spacing
5. Elevation & Depth / Elevation
6. Shapes
7. Components
8. Do's and Don'ts

The CLI matters for a practical demo:

- `npx @google/design.md lint DESIGN.md`
- `npx @google/design.md diff DESIGN.md DESIGN-v2.md`
- `npx @google/design.md export --format tailwind DESIGN.md`
- `npx @google/design.md export --format dtcg DESIGN.md`

The linter checks structural issues, broken token references, missing primary color, typography gaps, WCAG contrast warnings for component color pairs, orphaned tokens, and section order.

## Public Ecosystem

The ecosystem is moving quickly:

- Google Labs / Stitch maintains the spec and CLI.
- `designmd.ai` is a community gallery with 100+ downloadable design systems and an MCP server for searching and downloading from an agent.
- `VoltAgent/awesome-design-md` is a large public collection of brand-inspired `DESIGN.md` files. Each example includes the design-system markdown plus preview HTML files, which is a useful pattern for our own demo.
- Tools are emerging around extraction and generation: site-to-`DESIGN.md` extractors, galleries, MCP servers, and Claude Design examples.

Treat “pixel-perfect” claims as marketing. The more defensible claim is: the file improves the agent's odds of staying on system, and it gives humans something inspectable, versionable, and testable.

## Internal Automattic Context

Search summary:

- MGS/P2 exact search for `DESIGN.md` returned no broad formal corpus yet.
- Slack search found active discussion in late April 2026 across Brand, VIP, Woo/RSM, Studio Code, and AI news channels.
- Relevant P2s exist on Pixels & Points and Radical Updates.
- Internal GitHub search has files named `design.md`, but many are engineering design specs, not the Google `DESIGN.md` visual identity format.

Key internal learnings:

- VIP/Brand experiments are already treating `DESIGN.md` as a bridge between structured brand tokens and semantic context.
- One internal Brand thread identified a useful split: universal brand primitives plus output-specific templates. Brand primitives are colors, type, spacing, logo, imagery, art direction. Templates are the structure for an ebook, one-pager, deck, ad, microsite, etc.
- A VIP Claude Design experiment showed value for first-pass production and design-system-compliant layouts, but manual asset generation was still faster for detailed production. The strongest blocker was not just prompting; it was incomplete/ambiguous brand documentation.
- One A8C cautionary example: an AI-reworked one-pager looked useful to non-design reviewers, but Brand later flagged that it was not using the latest branding. This is a good story for the talk because it shows why `DESIGN.md` must be curated and kept current, not casually scraped from old materials.
- Designers called out the need for editable source-of-truth outputs, especially Figma. Static HTML/PDF output is harder to edit, repurpose, or feed back into the system.
- The most promising production workflows are repetitive, templated design tasks: ads from trafficking sheets, ebooks from copy docs, decks, one-pagers, and microsites.

## Presentation Narrative

1. The problem: AI-generated UIs drift toward generic defaults unless the model gets durable design context.
2. The old handoff model: design system in Figma/docs/tokens, then humans translate it for implementation.
3. The new context layer: `DESIGN.md` sits beside `README.md` and `AGENTS.md`, making design intent accessible to agents.
4. The spec: tokens are exact values; prose explains intent and guardrails.
5. The reality check: it only works as well as the source system. Stale, incomplete, or mismatched input produces plausible but wrong output.
6. The Automattic lesson: pair brand primitives with artifact-specific templates.
7. The demo: run a controlled experiment and compare output, not vibes.

## Demo Experiment Design

Use one fixed interface brief:

> Build a compact product analytics dashboard for a product team. Include a top navigation, KPI strip, trend chart area, active experiments table, user feedback summary, and a settings panel. Make it responsive and production-quality.

Run conditions:

1. No `DESIGN.md` baseline.
2. Minimal token-only `DESIGN.md`.
3. Rich `DESIGN.md` with tokens plus rationale.
4. Rich `DESIGN.md` plus output-specific template rules.
5. Intentionally flawed/stale `DESIGN.md` to demonstrate risk.
6. Optionally: public gallery file versus Automattic-style brand primitive file.

Controls:

- Same agent and model for each batch.
- Same app stack and starter files.
- Same prompt text.
- Fresh workspace per run.
- Same viewport screenshots: mobile, tablet, desktop.
- Same build and lint commands.
- Record timestamp, agent, model, prompt hash, `DESIGN.md` hash, elapsed time, token/cost if available, and manual interventions.

Artifacts per run:

- Input `DESIGN.md`.
- Agent transcript/log.
- Generated source files.
- Rendered screenshots.
- Build result.
- `@google/design.md lint` output.
- Evaluation JSON.

Evaluation rubric:

- Token adherence: colors, type, radius, spacing, component values.
- Rationale adherence: mood, density, hierarchy, and do/don't rules.
- Product quality: information architecture, content clarity, realistic states.
- Responsiveness: no overlap, readable at mobile and desktop.
- Accessibility: contrast, focus states, target sizes.
- Editability/maintainability: component structure, CSS variables, sensible naming.
- Brand risk: any stale logo, unsupported asset, mismatched template, or overgeneralized style.

## Proposed Repo Shape

```text
explore-design-md/
  README.md
  docs/
    design-md-research.md
    presentation-outline.md
  design-systems/
    baseline-empty/
    minimal-token/
    rich-system/
    rich-plus-template/
    flawed-stale/
  prompts/
    dashboard-brief.md
    agent-system-instructions.md
  harness/
    run-configs.json
    run-one.ts
    evaluate.ts
    screenshot.ts
  viewer/
    # Small web UI for comparing DESIGN.md, screenshot, and rubric
  runs/
    # Generated; gitignored
```

Implementation recommendation:

- Use a Vite/React app for generated interfaces and a separate comparison viewer.
- Use Playwright for screenshots and responsive checks.
- Use the Google `@google/design.md` CLI for lint/diff/export.
- Keep each run isolated by copying a starter app into `runs/<run-id>/workspace`.
- The harness should support `codex` and `claude` as adapters, but store the same metadata schema for both.

## Sources

Public:

- Google Labs `design.md` repo: https://github.com/google-labs-code/design.md
- Official spec file: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
- Google Stitch spec page: https://stitch.withgoogle.com/docs/design-md/specification
- DESIGNmd gallery: https://designmd.ai/
- DESIGNmd MCP setup: https://designmd.ai/mcp
- VoltAgent examples: https://github.com/VoltAgent/awesome-design-md

Internal A8C:

- Pixels & Points: "Testing Claude Design for VIP ads asset production" (2026-04-28)
- Pixels & Points: "AI-powered VIP ebook generator" (2026-04-21)
- Pixels & Points: "Experimenting with AI-generated ad layouts in Figma" (2026-04-10)
- Radical Updates: "Branded Visual Toolkit: Presentations + Data Viz | Update 1" (2026-04-28)
- Slack threads in `#brand-creative-guild`, `#vip-design`, `#vip-marketing`, `#vip-public-sector-events`, `#rsm-woo-welcome-mat`, `#studio-code`, and `#ai-news` from 2026-04-28 through 2026-04-30.

