# Build the Analytics Dashboard screen

You are working in a Vite + React project for a fictional product called **Signal Desk**, a product analytics workspace for cross-functional product teams.

Build a single screen component at `src/screens/AnalyticsDashboard.jsx`.

## Requirements

- Page header with title "Product Analytics" and subtitle "Track adoption, experiments, and customer signals in one place."
- Top-right primary action labeled "Create report".
- KPI strip with four metrics:
  - Activation rate: 68.4%, +4.2%
  - Weekly active teams: 1,248, +8.1%
  - Trial conversion: 14.7%, -1.3%
  - Open feedback items: 326, +22
- Main content grid:
  - Trend chart area for "Activation over time" with realistic bars or line chart.
  - "Active experiments" table with at least five rows, status, owner, confidence, and next review date.
  - "User feedback" summary with sentiment buckets and three recent quotes.
  - Compact "Segment filters" panel with checkboxes or toggles for user segments.
- Responsive behavior:
  - Desktop: dashboard grid should use multiple columns.
  - Mobile: all content stacks cleanly with no overlap.

## Constraints

- Your primary deliverable is `src/screens/AnalyticsDashboard.jsx`.
- Use sensible fixture data inline in the component.
- Follow this project's `AGENTS.md` and `DESIGN.md` exactly.
- The component must be a default export.

