# Build the Onboarding Flow screen

You are working in a Vite + React project for **Signal Desk**, a product analytics workspace. Build a single screen component at `src/screens/OnboardingFlow.jsx`.

## Purpose

A new workspace admin is partway through setup. They've connected a data source and invited teammates; now they're choosing which core metrics will anchor their dashboard. This is a one-time-per-workspace flow, performed deliberately. The screen should feel guided and reassuring — never rushed. The user wants to know exactly where they are in the flow, what this step does, and that they can change their mind later.

## Audience

Workspace admin. May or may not be technical. First-time user of this product.

## Information architecture

- **Step indicator:** four-step progress at the top showing where the user is. Steps 1 and 2 are complete, step 3 is current, step 4 is upcoming.
- **Primary form region:** the metric-selection task. A short explanation, then a list of selectable metrics, then a small dashboard preview that updates with the selection.
- **Secondary aside:** setup health, time remaining, and a contact-help affordance. Reassurance, not action.
- **Footer:** Back + Continue.

Hierarchy: step indicator > step heading > explanation > metric list > preview > footer.

## Density and tone

Calm. Lots of breathing room. Body copy is generous (not terse). The metric list uses CheckboxControl rows with name + one-line description, not just checkboxes. The preview is a small, low-fi sketch of the final dashboard with the selected metrics — not a real chart. The aside is quiet, lighter chrome than the main panel.

## Layout

Pick from DESIGN.md "Layout patterns" → **Multi-step flow / onboarding**. The *stepper + form + aside* pattern fits this screen. Use the **Compact header** style for the page (since the step indicator carries most of the navigation context — no separate page title needed at the top).

## Required content

- Step indicator across the top: "Connect data source" (complete), "Invite teammates" (complete), "Choose core metrics" (current), "Review workspace" (upcoming).
- Step heading: "Choose core metrics".
- Subhead/explanation: 1–2 sentences on why core metrics matter and that they can be changed later.
- Metric list — at least 8 options, with 3 selected by default. Each row shows name + a short description (e.g. "Weekly active users — Unique people who triggered any tracked event"). Suggestions: Weekly active users (selected), Activation rate (selected), Week-2 retention (selected), Product NPS, Feature adoption, Time to value, Revenue per active user, Monthly churn, Support ticket volume.
- Dashboard preview: a small card titled "Dashboard preview" with three mini KPI tiles reflecting the currently-selected metrics. Use placeholder numbers; this is a sketch.
- Aside: "Setup health" checklist (Data source connected, Teammates invited, Core metrics chosen, Workspace reviewed) with checkmark/empty states; "Estimated time remaining: ~4 minutes"; small "Need a hand? Chat with onboarding" affordance.
- Footer with Back (secondary) and Continue (primary).

## Constraints

- File: `src/screens/OnboardingFlow.jsx`. Default export. Inline fixture data.
- Follow `AGENTS.md` and `DESIGN.md` exactly.
