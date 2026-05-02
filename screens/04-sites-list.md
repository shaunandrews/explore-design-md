# Build the Sites List screen

You are working in a Vite + React project for a fictional product called **Signal Desk**, a product analytics workspace for cross-functional product teams.

Build a single screen component at `src/screens/SitesList.jsx`.

## Requirements

- Page title "Sites" and subtitle "Manage connected WordPress.com sites, plans, health, and recent activity."
- Top-right primary action labeled "Create site" and secondary action labeled "Import site".
- Summary strip with four metrics:
  - Total sites: 12
  - Needs attention: 3
  - Updates available: 7
  - Monthly visitors: 1.8M
- Main content:
  - A searchable, sortable sites collection with at least eight realistic site rows.
  - Include columns or visible fields for site name, primary domain, plan, status, storage, visitors, and last updated.
  - Include row affordances for opening a site, viewing analytics, and managing settings.
  - Include filters for status and plan.
  - Include bulk-selection affordance or a clear selected-state pattern.
- Secondary panel:
  - Site health summary.
  - Recent site activity.
  - Compact guidance for the next recommended action.
- Prefer `@wordpress/dataviews` for the list/table/grid surface when available. Use `@wordpress/ui` first for supporting UI, and `@wordpress/components` only to fill gaps.
- Responsive behavior:
  - Desktop: collection and secondary panel should sit side by side.
  - Mobile: controls and rows stack cleanly with no overlap.

## Constraints

- Your primary deliverable is `src/screens/SitesList.jsx`.
- Use sensible fixture data inline in the component.
- Follow this project's `AGENTS.md` and `DESIGN.md` exactly.
- The component must be a default export.
