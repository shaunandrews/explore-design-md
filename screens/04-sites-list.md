# Build the Sites List screen

You are working in a Vite + React project for a WordPress.com-style admin surface. Build a single screen component at `src/screens/SitesList.jsx`.

## Purpose

The home for managing every WordPress site connected to this account. Used daily by site owners and agency operators to scan health, see what needs attention, and jump to a specific site. The screen should reward fast scanning — bulk operations, filters, and per-row actions matter more than visual flourish.

## Audience

Site owners and agency operators. Power users. Comfortable with dense tables, filters, and keyboard-style navigation.

## Information architecture

- **Page header:** title + actions. Two actions on the right: secondary "Import site", primary "Create site".
- **Summary strip:** four account-level metrics across the top.
- **Primary region:** the sites collection. Searchable, filterable, sortable, with bulk select and per-row actions.
- **Secondary region (right side panel):** site health summary, recent activity, next recommended action. Stacks under the main region on narrow widths.

Hierarchy: page header > summary strip > sites collection > side panel > footer (none needed).

## Density and tone

Dense but not crowded. The collection is the focus — give it room. Status pills, plan badges, and warning indicators do most of the visual work. The side panel uses lighter chrome (no card headers) so it doesn't compete with the table.

## Layout

Pick from DESIGN.md "Layout patterns" → **List / collection surface**. The *DataViews + side panel* pattern fits this screen. Use the **Editorial header** for the page header. Use the **Side panel** spec from DESIGN.md for the right-hand region.

## Required content

- Header: title "Sites", subtitle "Manage connected WordPress.com sites, plans, health, and recent activity.", secondary action "Import site", primary action "Create site".
- Summary strip with four metrics (each an equal-width card):
  - Total sites: 12
  - Needs attention: 3 (red number)
  - Updates available: 7 (warning/amber)
  - Monthly visitors: 1.8M
- Sites collection — `@wordpress/dataviews` `DataViews` with at least 10 realistic site rows. Fields: site name + primary domain (paired), plan (Free / Personal / Premium / Business / Commerce — pill), status (Active / Needs attention / Paused — pill with appropriate color), storage (e.g. "12.4 GB / 50 GB"), monthly visitors (number), last updated (relative time, e.g. "2 hours ago"). Include search, sortable columns, a status filter, a plan filter, bulk select, per-row primary action "Open" and an overflow menu with "View analytics" and "Manage settings".
- Side panel (right, ~340px) with three stacked cards:
  - "Site health" — short summary line ("9 of 12 healthy") + 3–4 inline checklist items (Backups, Plugin updates, Security scans, Uptime). Each item has a status icon and a one-word status.
  - "Recent activity" — 4–5 entries with icon + one-line description + relative time (e.g. "Backup completed for Field Notes Journal · 12 minutes ago").
  - "Next recommended action" — a `Notice` (info or warning intent) with a one-sentence recommendation and one inline button.

## Constraints

- File: `src/screens/SitesList.jsx`. Default export. Inline fixture data.
- Follow `AGENTS.md` and `DESIGN.md` exactly.
