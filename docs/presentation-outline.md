# Presentation Outline: Design Systems With AI

## Title

`DESIGN.md`: Design Systems as Agent Context

## Audience Promise

By the end, people should understand what `DESIGN.md` is, where it fits in an AI-assisted design workflow, and how to test whether it actually improves AI-generated interfaces.

## 1. The Problem

AI tools can generate interfaces quickly, but without durable design context they default to familiar patterns: generic Tailwind colors, inconsistent spacing, arbitrary type scales, and plausible but brand-wrong decisions.

Designers already solved many of these decisions in brand systems, Figma libraries, templates, and production examples. The gap is that agents do not reliably see or apply that context.

## 2. What DESIGN.md Changes

`DESIGN.md` is a plain-text design system file that lives in the repo. It gives agents:

- Exact values: tokens for color, typography, spacing, radius, and components.
- Semantic intent: markdown rationale for when and why to use those values.
- Guardrails: do's, don'ts, accessibility expectations, and component rules.

Useful analogy:

- `README.md`: what this project is.
- `AGENTS.md`: how an agent should work in this codebase.
- `DESIGN.md`: how the interface should look and feel.

## 3. The Spec In Five Minutes

Show a minimal file:

```md
---
version: alpha
name: Example System
colors:
  primary: "#1A1C1E"
  surface: "#F7F5F2"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
spacing:
  md: 16px
rounded:
  md: 8px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 12px
---

## Overview
A calm, editorial interface with high contrast and restrained surfaces.

## Do's and Don'ts
- Do use primary only for the most important action.
- Don't invent additional accent colors.
```

Then show the official linter:

```sh
npx @google/design.md lint DESIGN.md
```

## 4. Automattic Context

Internal experiments already point to the real lesson:

- Brand primitives matter: colors, type, spacing, logos, imagery, art direction.
- Output templates matter just as much: ebook, ad, deck, one-pager, microsite.
- A single generic brand file is not enough for every artifact type.
- Stale or incomplete input can produce confident but wrong output.
- Designers need editable outputs and a way to feed corrections back into the system.

Suggested phrasing:

> DESIGN.md is not the design system. It is an AI-readable slice of the design system, tuned for a task.

## 5. Live/Recorded Demo

Run the same interface prompt against multiple conditions:

1. No `DESIGN.md`.
2. Minimal token file.
3. Rich token plus rationale file.
4. Rich file plus dashboard-specific template rules.
5. Flawed/stale file.

Show for each:

- The `DESIGN.md`.
- The rendered interface.
- The generated code structure.
- A short scorecard.

## 6. What We Measure

- Did it use the exact color/type/spacing values?
- Did it follow the design rationale?
- Did it avoid prohibited patterns?
- Did the UI work as a product interface?
- Did it remain responsive and accessible?
- Could a designer or developer maintain the output?

## 7. The Takeaway

The opportunity is not "AI replaces design systems." The opportunity is that design systems become executable context for agents.

The new design-system work is deciding what to encode, what to constrain, what to leave flexible, and how to evaluate whether the machine respected the system.

