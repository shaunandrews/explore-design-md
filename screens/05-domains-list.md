# Build the Domains List screen

You are working in a Vite + React project for a fictional product called **Signal Desk**, a product analytics workspace for cross-functional product teams.

Build a single screen component at `src/screens/DomainsList.jsx`.

## Requirements

- Page title "Domains" and subtitle "Track registrations, renewals, DNS health, and primary-site assignments."
- Top-right primary action labeled "Add domain" and secondary action labeled "Transfer domain".
- Summary strip with four metrics:
  - Registered domains: 18
  - Renewals due: 4
  - DNS issues: 2
  - Privacy enabled: 15
- Main content:
  - A searchable, sortable domains collection with at least eight realistic domain rows.
  - Include columns or visible fields for domain, assigned site, status, renewal date, DNS health, privacy, and auto-renew.
  - Include row affordances for managing DNS, viewing registration details, and setting as primary.
  - Include filters for status, DNS health, and privacy.
  - Include at least two warning states, such as "Expires soon" and "DNS issue".
- Secondary panel:
  - Domain health summary.
  - Renewal checklist.
  - Compact DNS guidance with a support/contact affordance.
- Prefer `@wordpress/dataviews` for the list/table/grid surface when available. Use `@wordpress/ui` first for supporting UI, and `@wordpress/components` only to fill gaps.
- If you customize `@wordpress/dataviews` field sorting, verify the package's sort callback signature before using it. Prefer `getValue` with the built-in sort behavior unless a custom sort is clearly required.
- Responsive behavior:
  - Desktop: domains collection and secondary panel should sit side by side.
  - Mobile: filters, rows, and actions stack cleanly with no overlap.

## Constraints

- Your primary deliverable is `src/screens/DomainsList.jsx`.
- Use sensible fixture data inline in the component.
- Follow this project's `AGENTS.md` and `DESIGN.md` exactly.
- The component must be a default export.
