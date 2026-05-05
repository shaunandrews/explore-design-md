# Build the Analytics Dashboard screen

You are working in a Vite + React project for **Signal Desk**, a product analytics workspace. Build a single screen component at `src/screens/AnalyticsDashboard.jsx`.

## Purpose

The team's at-a-glance view of how the product is doing this week. Used several times a day by PMs, designers, and engineers to check whether activation is on track, which experiments are moving, and what users are saying. Calm, scannable, repeated reading. The screen rewards quick parallel scans, not deep exploration — exploration happens in the linked detail screens.

## Audience

Product team members. They know the product. They want to see "is anything off?" in under 5 seconds, then drill into one thing.

## Information architecture

- **Primary metrics:** A 4-up KPI strip at the top — the four numbers a PM checks first.
- **Primary visualization:** Activation over time. The most-trusted single chart on this screen.
- **Supporting context (right side):** Segment filters and User feedback sentiment. These are scannable but secondary.
- **Tertiary detail:** Active experiments table. Lower in the layout because each row leads off-screen.

Hierarchy: KPIs > activation chart > experiments table > feedback > segment filters.

## Density and tone

Editorial. White surfaces on the off-white page background. Generous whitespace between the KPI strip and the main grid. KPI cards are not crowded — one big number, one delta, one label, room to breathe. Charts read at a glance. The experiments table is dense by necessity but uses comfortable row height and pill statuses.

## Layout

Pick from DESIGN.md "Layout patterns" → **Dashboard / overview surface**. The *KPI strip + 2-column main* pattern fits this screen well; you may use *single column scan* if you have a strong reason. Use the **Editorial header** for the page header.

## Required content

- Header: title "Product Analytics", subtitle "Track adoption, experiments, and customer signals in one place.", top-right primary action "Create report".
- KPI strip with four metrics:
  - Activation rate: 68.4%, +4.2% vs last period (positive delta)
  - Weekly active teams: 1,248, +8.1% (positive)
  - Trial conversion: 14.7%, −1.3% (negative — use the warning/red treatment)
  - Open feedback items: 326, +22 (neutral — no color, just the number)
- Primary visualization: "Activation over time" — 12 weeks of weekly data, line or bar, brand-green accent. Include a small range toggle (4w / 12w / 6m). Show one summary stat below the chart (e.g. current value, prior-period comparison).
- Supporting card 1: "Segment filters" panel. Six segments (Product managers, Engineering leads, Designers, Customer success, Executives, Trial accounts) with member counts and CheckboxControls. Show "N of 6 active" footer.
- Supporting card 2: "User feedback" with a sentiment bucket bar (positive / neutral / negative counts and percentages) and three recent quote excerpts (each with role and time-ago).
- Tertiary section: "Active experiments" table — DataViews — with at least 6 rows. Columns: experiment name, status (Running / Winning / Inconclusive / Paused — pill styling), owner, confidence (0–100%, show as a small bar), next review date.

## Constraints

- File: `src/screens/AnalyticsDashboard.jsx`. Default export. Inline fixture data.
- Follow `AGENTS.md` and `DESIGN.md` exactly.
