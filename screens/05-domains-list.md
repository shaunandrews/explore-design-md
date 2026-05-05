# Build the Domains List screen

You are working in a Vite + React project for a WordPress.com-style admin surface. Build a single screen component at `src/screens/DomainsList.jsx`.

## Purpose

The home for managing every domain on this account: registrations, renewals, DNS health, and which site each domain points at. Users come here when something is wrong (renewal due, DNS issue) or when they're moving a domain. The screen should make problem domains immediately visible and one-click actionable.

## Audience

Site owners, agency operators, and the occasional anxious renewal-day user. Power users for the table; everyone else for the warning banners.

## Information architecture

- **Page header:** title + actions. Secondary "Transfer domain", primary "Add domain".
- **Summary strip:** four account-level metrics across the top, with the at-risk numbers (Renewals due, DNS issues) using the warning/error treatment.
- **Primary region:** the domains collection. Strong emphasis on warning states — "Expires soon" and "DNS issue" rows should be visually obvious without sorting.
- **Secondary region (right side panel):** domain health summary, renewal checklist, DNS guidance with a support affordance. Stacks under the main region on narrow widths.

Hierarchy: page header > summary strip > domains collection > side panel.

## Density and tone

Dense table. Warning treatments do real work here — a row with "Expires soon" or "DNS issue" should be easy to spot. Use status badges and inline icons, not row backgrounds (per DESIGN.md, status communicates through pairing icon + text + color, not by tinting whole rows).

## Layout

Pick from DESIGN.md "Layout patterns" → **List / collection surface**. The *DataViews + side panel* pattern fits this screen. Use the **Editorial header** and the **Side panel** spec from DESIGN.md.

## Required content

- Header: title "Domains", subtitle "Track registrations, renewals, DNS health, and primary-site assignments.", secondary "Transfer domain", primary "Add domain".
- Summary strip with four metrics:
  - Registered domains: 18
  - Renewals due: 4 (warning)
  - DNS issues: 2 (error)
  - Privacy enabled: 15
- Domains collection — `@wordpress/dataviews` `DataViews` with at least 10 realistic domain rows. Fields: domain (with a small star icon for the primary), assigned site (text + small site icon), status (Active / Pending transfer / Expired — pill), renewal date (date, with an inline "Expires soon" warning badge if within 30 days), DNS health (Healthy / Check DNS / DNS issue — pill with color), privacy (Enabled / Disabled — small badge), auto-renew (toggle or on/off badge). Include search, sortable columns, filters for Status / DNS health / Privacy / Auto-renew, bulk select, per-row primary action "Manage DNS" and an overflow menu with "View registration details", "Set as primary" (when not already primary), and "Transfer".
- Include at least 2 rows with "Expires soon" and at least 2 rows with "DNS issue" or "Check DNS".
- Side panel (right, ~340px) with three stacked cards:
  - "Domain health" — summary line + 3–4 inline checklist items (Active registrations, Renewals scheduled, DNS healthy, Privacy enabled).
  - "Renewal checklist" — 3–4 line items (e.g. "2 domains renew this week", "Payment method on file", "Auto-renew enabled on 15 of 18", "Verify contact info before October 30") with checkmark/warning state per item.
  - "DNS guidance" — a `Notice` (info or warning intent) with one sentence on how to resolve DNS issues, plus two inline buttons: "Read DNS guide" and "Contact support".
- If you customize `DataViews` field sorting, verify the package's sort callback signature first. Prefer `getValue` with built-in sort.

## Constraints

- File: `src/screens/DomainsList.jsx`. Default export. Inline fixture data.
- Follow `AGENTS.md` and `DESIGN.md` exactly.
