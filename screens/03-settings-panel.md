# Build the Settings Panel screen

You are working in a Vite + React project for a fictional product called **Signal Desk**, a product analytics workspace for cross-functional product teams.

Build a single screen component at `src/screens/SettingsPanel.jsx`.

## Requirements

- Page title "Workspace Settings" and subtitle "Control data access, notification rules, and account safety."
- Sections:
  - Workspace profile: workspace name, default timezone, reporting week start.
  - Data access: toggles for "Sync product analytics", "Sync support feedback", and "Allow AI summaries".
  - Notifications: select fields for digest cadence and alert threshold.
  - Security: session timeout field, SSO status, audit log link.
  - Danger zone: destructive action labeled "Delete workspace data".
- Include clear save/cancel actions.
- Use realistic helper text and validation/disabled states where useful.
- Responsive behavior:
  - Desktop: settings content is readable and structured, not a giant unbroken form.
  - Mobile: controls remain usable and labels do not collide.

## Constraints

- Your primary deliverable is `src/screens/SettingsPanel.jsx`.
- Use sensible fixture data inline in the component.
- Follow this project's `AGENTS.md` and `DESIGN.md` exactly.
- The component must be a default export.

