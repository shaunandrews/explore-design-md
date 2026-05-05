# Build the Settings Panel screen

You are working in a Vite + React project for **Signal Desk**, a product analytics workspace. Build a single screen component at `src/screens/SettingsPanel.jsx`.

## Purpose

A workspace admin opens Settings to change global configuration: who can access data, how often the team is notified, account safety, and a destructive option of last resort. Routine, low-frequency, but high-stakes for some sections. The screen should feel calm, structured, and trustworthy. The admin needs to find the right control fast and feel confident their save was applied.

## Audience

Workspace admins. Familiar with the product. Probably scanning for one specific setting they came here to change.

## Information architecture

Five sections, in this order:

1. **Workspace profile** — identity (name, timezone, week start). Boring but essential.
2. **Data access** — what the workspace reads (toggles).
3. **Notifications** — cadence and threshold.
4. **Security** — session safety + SSO + audit log link.
5. **Danger zone** — destructive action, visually separated.

Sections are read in order more often than jumped between. The Danger zone gets extra space above and a red-accent treatment per DESIGN.md.

A sticky save-bar at the bottom of the form shows status ("All changes saved" / "Unsaved changes") and has Cancel + Save changes buttons.

Hierarchy: section title > field label > control > helper text.

## Density and tone

Editorial, calm, lots of whitespace. **One control per row** unless two are naturally paired (timezone + week start). Helper text is one line under each control, in a muted gray. Toggles use `ToggleControl` (label on the right, description below). Labels read as nouns, not commands. The Danger zone is the only place that uses red.

## Layout

Pick from DESIGN.md "Layout patterns" → **Settings surface**. Either *sectioned single column* or *two-column with anchor nav* fits this screen. With 5 sections, single column is the simpler call; pick anchor nav only if you want the extra navigation. **Do not** lay out the five sections as side-by-side vertical columns. **Do not** crowd multiple controls onto one row.

Use the **Editorial header** for the page header.

## Required content

- Header: title "Workspace Settings", subtitle "Control data access, notification rules, and account safety."
- Workspace profile section:
  - Workspace name — `TextControl`, default "Signal Desk — Growth", helper "Visible to teammates on shared exports."
  - Default timezone — `SelectControl`, default "America/New_York".
  - Reporting week start — `SelectControl`, options Monday / Sunday, default Monday.
- Data access section (three `ToggleControl`s, each with a one-line helper):
  - Sync product analytics — on. Helper: "Pulls events from connected Segment, Amplitude, and warehouse sources every 15 minutes."
  - Sync support feedback — on. Helper: "Imports tickets from Zendesk and CSAT scores from Intercom for cross-team views."
  - Allow AI summaries — off. Helper: "Generates weekly narrative summaries from your data. Requires admin approval before enabling."
- Notifications section:
  - Digest cadence — `SelectControl`, options Daily / Weekly / None, default Weekly. Helper: "Sent to every member of this workspace."
  - Alert threshold — `SelectControl`, options Low / Medium / High, default Medium. Helper: "How big a metric change has to be before triggering an alert."
- Security section:
  - Session timeout (minutes) — `NumberControl` or text input, default 30. Helper: "Members are signed out after this period of inactivity."
  - Single sign-on — read-only status: "Connected via Okta · last verified 2 days ago".
  - Audit log — link "View audit log →".
- Danger zone (red accent, extra spacing above):
  - Body: "Permanently removes all events, dashboards, exports, and connections for this workspace. Members lose access immediately. This cannot be undone."
  - "Type DELETE to confirm" `TextControl`.
  - Destructive button "Delete workspace data" — disabled until the input value is exactly "DELETE".
- Sticky save-bar: status text on the left ("All changes saved" by default), Cancel + Save changes on the right.

## Constraints

- File: `src/screens/SettingsPanel.jsx`. Default export. Inline fixture data.
- Follow `AGENTS.md` and `DESIGN.md` exactly.
