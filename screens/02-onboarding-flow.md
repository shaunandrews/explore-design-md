# Build the Onboarding Flow screen

You are working in a Vite + React project for a fictional product called **Signal Desk**, a product analytics workspace for cross-functional product teams.

Build a single screen component at `src/screens/OnboardingFlow.jsx`.

## Requirements

- Page title "Set up Signal Desk".
- Four-step progress indicator:
  - Connect data source
  - Invite teammates
  - Choose core metrics
  - Review workspace
- Current step should be "Choose core metrics".
- Main panel with:
  - A short explanation of why core metrics matter.
  - A selectable list of at least six metrics, with three selected by default.
  - A compact preview card showing how the dashboard will look once metrics are selected.
  - Back and Continue buttons.
- Secondary aside with:
  - Setup health checklist.
  - Estimated time remaining.
  - Help/contact affordance.
- Responsive behavior:
  - Desktop: form and aside sit side by side.
  - Mobile: progress, form, and aside stack.

## Constraints

- Your primary deliverable is `src/screens/OnboardingFlow.jsx`.
- Use sensible fixture data inline in the component.
- Follow this project's `AGENTS.md` and `DESIGN.md` exactly.
- The component must be a default export.

