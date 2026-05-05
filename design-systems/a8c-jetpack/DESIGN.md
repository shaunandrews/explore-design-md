---
version: alpha
name: Jetpack
description: Jetpack plugin admin and component design system for AI coding agents. Use these tokens and guidelines when generating Jetpack admin pages (My Jetpack, Boost, Protect, Search, Stats, Social, VideoPress, Backup, AI Assistant, Forms, CRM), settings screens, dashboard widgets, editor SlotFills, block UI provided by Jetpack, and any plugin/admin surface that should feel like Jetpack. Jetpack admin lives inside `wp-admin`, so this file builds on top of the WordPress admin design system and intentionally inherits from it; where Jetpack and WordPress differ, this file documents the Jetpack-specific layer (Emerald visual style, `--jp-*` tokens, `@automattic/jetpack-components`, brand color, plan/upgrade surfaces). This file excludes front-end theme styling, block content rendered to visitors, theme.json palettes, and Calypso/WordPress.com Cloud chrome.
colors:
  brand: "#069E08"
  brand-secondary: "#2FB41F"
  brand-dark: "#007117"
  brand-darker: "#005B18"
  green-0: "#F0F2EB"
  green-5: "#D0E6B8"
  green-10: "#9DD977"
  green-20: "#64CA43"
  green-30: "#2FB41F"
  green-40: "#069E08"
  green-50: "#008710"
  green-60: "#007117"
  green-70: "#005B18"
  green-80: "#004515"
  green-90: "#003010"
  green-100: "#001C09"
  green-mint: "#D3F6D5"
  black: "#000000"
  black-80: "#2C3338"
  white: "#FFFFFF"
  white-off: "#F9F9F6"
  gray-0: "#F6F7F7"
  gray-5: "#DCDCDE"
  gray-10: "#C3C4C7"
  gray-20: "#A7AAAD"
  gray-30: "#8C8F94"
  gray-40: "#787C82"
  gray-50: "#646970"
  gray-60: "#50575E"
  gray-70: "#3C434A"
  gray-80: "#2C3338"
  gray-90: "#1D2327"
  gray-100: "#101517"
  gray-off: "#E2E2DF"
  text-primary: "#1D2327"
  text-body: "#3C434A"
  text-secondary: "#50575E"
  text-muted: "#646970"
  text-disabled: "#A7AAAD"
  background-page: "#F9F9F6"
  background-surface: "#FFFFFF"
  background-subtle: "#F6F7F7"
  border-strong: "#8C8F94"
  border: "#C3C4C7"
  border-subtle: "#DCDCDE"
  link: "#2271B1"
  link-hover: "#135E96"
  focus: "#3858E9"
  red-0: "#F7EBEC"
  red-5: "#FACFD2"
  red-40: "#E65054"
  red-50: "#D63638"
  red-60: "#B32D2E"
  red-70: "#8A2424"
  red-80: "#691C1C"
  yellow-5: "#F5E6B3"
  yellow-10: "#F2CF75"
  yellow-20: "#F0C930"
  yellow-30: "#DEB100"
  yellow-40: "#C08C00"
  yellow-50: "#9D6E00"
  yellow-60: "#7D5600"
  blue-20: "#68B3E8"
  blue-40: "#1689DB"
  blue-5: "#CED9F2"
  orange-20: "#FAA754"
  pink: "#C9356E"
  success: "#069E08"
  success-background: "#F0F2EB"
  warning: "#C08C00"
  warning-background: "#F5E6B3"
  error: "#D63638"
  error-background: "#F7EBEC"
  info: "#1689DB"
  info-background: "#CED9F2"
  destructive: "#B32D2E"
  paid-plan: "#069E08"
  paid-plan-dark: "#007117"
typography:
  headline-medium:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: "52px"
  headline-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: "40px"
  headline-small-regular:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: "40px"
  title-medium:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: "32px"
  title-medium-semi-bold:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: "32px"
  title-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: "30px"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: "24px"
  body-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: "24px"
  body-extra-small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: "20px"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: "16px"
  code:
    fontFamily: "Consolas, Monaco, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  base: 8px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gap: 16px
  gutter: 24px
  modal-padding-small: 16px
  modal-padding: 24px
  modal-padding-large: 32px
  jp-grid-max-width: 1128px
breakpoints:
  phone-up: 600px
  tablet-up: 960px
components:
  admin-page:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-body}"
    typography: "{typography.body}"
    padding: "0"
    notes: "Jetpack admin pages neutralize the wp-admin #wpcontent left padding (-20px on desktop, -10px below 782px) and provide a white background by default."
  admin-section:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: "24px"
    borderColor: "{colors.gray-5}"
  admin-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.md}"
    padding: "24px"
    borderColor: "{colors.gray-5}"
  pricing-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
    borderColor: "{colors.gray-5}"
  product-offer:
    backgroundColor: "{colors.white-off}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
    borderColor: "{colors.gray-5}"
  button-primary:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    fontWeight: 600
    rounded: "{rounded.md}"
    padding: "8px 24px"
    notes: "Legacy Emerald style is a black filled button with white text. New work should defer to @wp/components Button (admin theme color) per Jetpack design principles. Use the Jetpack-styled primary only for Jetpack-branded surfaces (My Jetpack header CTAs, upgrade banners)."
  button-primary-jetpack:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    fontWeight: 600
    rounded: "{rounded.md}"
    padding: "8px 24px"
    notes: "Reserved for upgrade/CTA actions where Jetpack identity is intentional."
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.black}"
    typography: "{typography.body}"
    fontWeight: 600
    rounded: "{rounded.md}"
    padding: "8px 24px"
    borderColor: "{colors.black}"
  button-small:
    typography: "{typography.body-extra-small}"
    fontWeight: 600
    rounded: "{rounded.md}"
    padding: "4px 8px"
  icon-button:
    rounded: "{rounded.md}"
    padding: "8px"
    width: "40px"
    height: "40px"
  icon-button-small:
    rounded: "{rounded.md}"
    padding: "4px"
    width: "32px"
    height: "32px"
  notice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "24px 31px 27px 18px"
    borderColor: "{colors.gray-5}"
    borderLeftWidth: "6px"
  notice-success:
    borderLeftColor: "{colors.success}"
  notice-warning:
    borderLeftColor: "{colors.yellow-20}"
  notice-error:
    borderLeftColor: "{colors.error}"
  notice-info:
    borderLeftColor: "{colors.black}"
  modal:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.modal-padding}"
  upsell-banner:
    backgroundColor: "{colors.white-off}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
    borderColor: "{colors.brand}"
  decorative-card:
    backgroundColor: "{colors.green-0}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  status-success:
    color: "{colors.success}"
    backgroundColor: "{colors.green-0}"
  status-warning:
    color: "{colors.yellow-40}"
    backgroundColor: "{colors.yellow-5}"
  status-error:
    color: "{colors.error}"
    backgroundColor: "{colors.red-0}"
  jp-cut-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "16px 64px 16px 24px"
    borderColor: "{colors.brand}"
    notes: "The signature Jetpack 'cut' link: a 2px green-bordered card with an arrow indicator that animates on hover. Used for primary navigation between admin sections."
  jp-grid:
    columns: 12
    gap: "24px"
    maxWidth: "1128px"
    notes: "Phone (<600px): 4 columns, 16px margin. Phone-up (≥600px): 8 columns, 18px margin. Tablet-up (≥960px): 12 columns, 1128px max-width, 24px margin."
---

# Jetpack Design System

## Overview

Jetpack is a WordPress plugin that lives inside `wp-admin`. Jetpack admin UI should feel like a calm, capable, editorial extension of WordPress — not a separate SaaS product, and not a marketing site. The default posture is white surfaces, generous whitespace, restrained green accents, system typography at slightly larger sizes than classic wp-admin, and clear status communication.

This document covers Jetpack admin and component surfaces only:

- Jetpack core admin pages: My Jetpack, the legacy Jetpack Dashboard/Settings, and product-specific admin pages such as Boost, Protect, Search, Stats, Social, VideoPress, Backup, CRM, AI Assistant, and Forms.
- Standalone Jetpack plugins (Boost, Protect, Search, Social, VideoPress, CRM) that ship their own React-based admin UI built on `@automattic/jetpack-components` and `@automattic/jetpack-base-styles`.
- Editor SlotFills, block sidebar panels, prepublish/postpublish surfaces, and inspector controls contributed by Jetpack to the block editor.
- Shared Jetpack chrome: page headers with the Jetpack logo, footer, breadcrumbs, upgrade banners, paid-plan badges, connection prompts, onboarding tours, and notice toasts.

This document explicitly excludes:

- Front-end theme styling, block output rendered to visitors, `theme.json`-driven presentation.
- The WordPress.com Cloud / Calypso interface.
- WooCommerce, VIP, Pocket Casts, Day One, and other Automattic product UIs.
- Email templates and marketing site styling.

This file builds on top of the WordPress admin design system and inherits from it. When Jetpack admin code lives inside `wp-admin`, prefer the WordPress admin shell, classic notices, list tables, and `@wordpress/components` defaults. Apply the Jetpack-specific layer documented here only where Jetpack identity, the `@automattic/jetpack-components` library, or the Emerald visual style genuinely apply. Jetpack's published design principles are explicit on this point: align with Core color schemes, embrace `@wordpress/components` fully, and define branding strategically rather than uniformly.

## Design Principles

These four principles are canonical (Jetpack Design, Nov 2024) and supersede earlier custom-styled patterns when in conflict.

1. **Align with Core color schemes.** Adopt the user-selected admin color scheme as Jetpack's primary palette. Do not impose custom black buttons, oversized green toggles, or beige callouts on routine admin chrome. In CSS, prefer `var(--wp-admin-theme-color)` for primary actions, focus, and selected states. The `--jp-*` token set still exists but is increasingly reserved for Jetpack-branded surfaces and legacy Emerald screens.
2. **Embrace `@wordpress/components` fully.** Reach for `Button`, `Card`, `Notice`, `Panel`, `DataViews`, `ToggleControl`, `TextControl`, `Modal`, etc. before reaching for a Jetpack equivalent. Don't override Core component styles with Jetpack styles. Where a needed component is missing, contribute it upstream rather than forking inside Jetpack.
3. **Create a seamless experience.** Jetpack appears in many contexts (self-hosted wp-admin, Atomic, WordPress.com). The visual language must feel continuous across them. Use shared components, shared patterns, shared tokens. Cohesion across Jetpack > visual novelty within one screen.
4. **Define branding points strategically.** Jetpack identity should appear at deliberate touchpoints — the Jetpack logo in page headers, the green accent on connection states, the Jetpack footer, upgrade banners, onboarding flows, plan badges — not as a coat of paint over every control. Restraint is the rule; brand expression is the exception.

The earlier Emerald guiding principles still inform Jetpack's standalone plugins (Boost, Protect, Search) and remain useful where a more distinct Jetpack chrome is appropriate:

- **Black-and-white dominant.** Pages lean on near-black text, white surfaces, and very limited gray. Green is an accent, not a base.
- **Unboxed.** Avoid wrapping content in nested cards. Let the underlying grid and generous padding do the separation work. Aim for at most ~50% of the page enclosed in visible boxes.
- **Off-white warmth.** The page background is `#F9F9F6` (token: `--jp-white-off`), a warmer alternative to wp-admin's `#F0F0F1`. It makes green and near-black both feel intentional.
- **1px lines.** Dividers are 1px. If a line is needed, it is a near-black 1px line, not a heavy border.
- **Functionally editorial.** The interface should feel like a confident editorial layout — calm typography, real headlines, breathing room — unless the task is purely transactional (a settings toggle, a quick switch), in which case compactness wins.

## Colors

Use neutral grays for structure, near-black for primary text and Emerald accents, white and off-white for surfaces, and Jetpack green only for brand moments and paid/healthy state.

### Core color roles

- **Brand green (`--jp-green-40`, `#069E08`):** The Jetpack identity color. Use for the Jetpack logo accent, paid-plan badges, healthy/secured status, the signature `jp-cut` link border, upgrade callouts, and connection success states. Use sparingly. Do not use as a routine button color across the admin shell — that conflicts with Principle 1. Reserved palette: `--jp-green-30 #2FB41F` (secondary), `--jp-green-50 #008710` (legacy primary), `--jp-green-60 #007117` (paid-plan-dark).
- **Near-black (`--jp-black #000`, `--jp-black-80 #2C3338`, `--jp-gray-90 #1D2327`):** Heading and primary text, Emerald-style filled buttons, 1px dividers, icon strokes.
- **Gray scale (`--jp-gray-0` through `--jp-gray-100`):** A 10-step warm-neutral scale shared with WordPress core's `#F6F7F7…#101517` ramp. Use `--jp-gray-5 #DCDCDE` for borders and dividers, `--jp-gray-10 #C3C4C7` for stronger borders, `--jp-gray-50 #646970` for muted/secondary text, `--jp-gray-60 #50575E` for body text accents, `--jp-gray-90 #1D2327` for headings.
- **Surfaces:** `--jp-white #FFFFFF` for cards, sections, modals, and the inside of admin pages. `--jp-white-off #F9F9F6` for the warm Emerald page background and for upsell/promo containers. `--jp-gray-0 #F6F7F7` for subtle grouped areas inherited from wp-admin.
- **Link blue (`#2271B1`):** Standard wp-admin link color; Jetpack does not override it. Hover darkens to `#135E96`.
- **Focus:** Use the active wp-admin theme color (`var(--wp-admin-theme-color)`) for focus outlines and selected states. Do not hard-code a Jetpack focus color in admin chrome.

### Status color roles

- **Success / healthy / connected:** `--jp-green-40 #069E08` against `--jp-green-0 #F0F2EB`. This is also the paid-plan color.
- **Warning:** `--jp-yellow-20 #F0C930` for accents (e.g., notice borders) or `--jp-yellow-40 #C08C00` for text against `--jp-yellow-5 #F5E6B3`.
- **Error / destructive:** `--jp-red-50 #D63638` for primary error, `--jp-red-60 #B32D2E` for destructive button text, `--jp-red-0 #F7EBEC` for backgrounds. These match WordPress core error tokens.
- **Info:** `--jp-blue-40 #1689DB` is reserved for informational accents in standalone Jetpack plugins. In admin chrome, prefer the wp-admin link blue (`#2271B1`) instead.
- **Pink (`--jp-pink #C9356E`)** and **orange (`--jp-orange-20 #FAA754`)** exist for product-specific surfaces (e.g., Stats, certain VideoPress states). Do not introduce them into routine admin chrome.

### Color constraints

Use color semantically, not decoratively. Status must never rely on color alone — pair it with a label, an icon, or a shape. Do not place green on green (e.g., a `--jp-green-40` button on `--jp-green-0`) without sufficient contrast for the text. Respect the user's wp-admin color scheme: do not paint the masterbar, admin menu, or focus rings green.

## Typography

Use the WordPress admin system font stack. Jetpack does not load custom webfonts.

`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`

Jetpack's Emerald scale runs larger than classic wp-admin (16px body vs. 13px) and uses a stricter set of steps. The named scale is exposed by `@automattic/jetpack-components` as the `Text` component variants and as `--font-*` CSS variables.

### Text hierarchy (Emerald scale)

- **Headline Medium** — 48px / 700 / 52px line-height. Page-level hero headlines on standalone Jetpack pages. One per page maximum.
- **Headline Small** — 36px / 700 / 40px line-height. Default page title for Jetpack admin pages and section titles in onboarding. Available in a `headline-small-regular` (400 weight) variant for less emphatic page titles.
- **Title Medium** — 24px / 500 / 32px line-height. Card titles, major section headings, modal titles. Available in a 600-weight variant (`title-medium-semi-bold`) when more emphasis is needed.
- **Title Small** — 20px / 500 / 30px line-height. Subsection headings, panel titles in standalone plugins.
- **Body** — 16px / 400 / 24px line-height. The default reading size and default button text size. This is the most important deviation from classic wp-admin.
- **Body Small** — 14px / 400 / 24px line-height. Secondary copy, helper text where 12px would feel too small.
- **Body Extra Small** — 12px / 400 / 20px line-height. Metadata, tertiary captions, small button text. A 700-weight variant exists for emphasis.
- **Label** — 12px / 600 / 16px line-height. Form labels, badges, status pills, table column headers.
- **Code** — 13px monospace. CLI commands, slugs, technical values.

Keep copy direct, friendly, and active. Jetpack's brand voice is **knowledgeable, friendly, and informative**. Speak simply, avoid jargon, and use active voice ("Jetpack helped the user," not "the user was helped by Jetpack"). Sentence case for setting titles, button labels, and headings. Product names retain their proper-noun capitalization ("Jetpack Anti-spam," "Jetpack Boost"). Refer to paid tiers as **plans**, not packages, bundles, or upgrades.

## Layout

Jetpack admin layout is grid-driven, generous, and editorial. Use a 12-column grid centered in the page with an 8px module and 24px gaps. Cap content width at 1128px on desktop. Below tablet, the grid collapses gracefully.

### The Jetpack grid

- **Module:** 8px (the `--spacing-base` token).
- **Gap:** 24px between grid columns.
- **Columns:** 12 on desktop (≥960px), 8 on tablet (600–959px), 4 on phone (<600px).
- **Page max-width:** 1128px, centered.
- **Page margins:** 24px desktop, 18px tablet, 16px phone.

Jetpack's React `AdminPage` component handles this for you: it neutralizes wp-admin's `#wpcontent` left padding, centers content in `Container`/`Col`, applies the white background, and renders the standard Jetpack header (logo + title + actions) and footer. Use it for any new full-screen Jetpack admin page.

### Spacing rhythm

Use 8-step spacing: `0, 4, 8, 16, 24, 32, 40, 48, 56, 64`. The `Text` component exposes these as `m`, `mt`, `mb`, `mx`, `my`, `p`, `pt`, etc. props (`mb={3}` = 24px bottom margin). Default gaps in flex containers and modals: 16px (the `--jp-gap` token). Modal padding: 16px (small), 24px (default), 32px (large).

### Layout patterns

When composing a screen, pick the pattern that best matches the task. Each option below is a complete spatial recipe, not a suggestion. Once you pick, follow it. If two patterns could fit, prefer the one with less chrome.

#### Page header

- **Editorial header (default):** title (Headline Small, 36/700) + subtitle (Body Large, 16/400) on the left, primary action on the right, separated from page content by 32px below. Best for most surfaces.
- **Compact header:** title only, inline with primary action, 16px below. Use for dense list views or when the page lives inside a wp-admin shell that already provides context.
- **Hero header:** title (Headline Medium), subtitle, optional illustration or product mark, single CTA, centered or left-aligned. Use only for empty states, marketing/upgrade screens, or first-run onboarding.

#### Dashboard / overview surface

- **KPI strip + 2-column main:** Row of 3–4 KPI cards across the top (equal width, 16–24px gap). Below, two columns at roughly 8/4 — a primary visualization on the left, a stack of supporting cards on the right. Optional full-width tertiary section below. Best for parallel content (chart + filters + feedback).
- **Single column scan:** KPI strip → primary visualization full-width → 2–3 supporting cards in a row → tertiary list. Use when content is sequential rather than parallel, or when one visualization deserves the full width.

#### Settings surface

- **Sectioned single column:** Vertical stack of titled sections, each containing a label-and-control row pattern. Sections separated by a 1px `--jp-gray-5` divider with 32px vertical spacing above and below. Best for ≤6 sections.
- **Two-column with anchor nav:** Left column (~240px, sticky) is a list of anchor links to each section. Right column is the sectioned form (max 720px reading width). Best for ≥6 sections or long forms.
- **Tabbed groups:** Tabs at the top (`@wordpress/components` `TabPanel`), each tab is a single-column sectioned form. Best when categories are orthogonal (Profile / Billing / Security / Integrations) and users won't need to compare across them.

Never lay out settings sections as side-by-side vertical columns. Never put more than one control per row unless they are naturally paired (start time + end time, two related selects).

#### List / collection surface

- **DataViews + side panel:** Main region is `@wordpress/dataviews` `DataViews` (~8/12 columns); right side panel (~4/12) holds health summary, recent activity, or recommended actions. Page header above both. Best when secondary context adds real value.
- **DataViews full-width:** `DataViews` fills the content area. Use when no side context adds value, or when the dataset is dense enough to need every column.

In either case, always include search, sortable columns, a filter affordance, bulk select, per-row primary action, and an overflow menu for secondary actions.

#### Multi-step flow / onboarding

- **Stepper + form + aside:** Step indicator (numbered or named) across the top with the current step emphasized. Main form panel on the left (~8/12). Aside on the right (~4/12) with help, setup health, or time-remaining. Footer with Back + Continue.
- **Centered single column:** Step indicator at the top, then a narrow centered column (560–640px) containing the step content, then a sticky footer with Back + Continue. Use when the step is reading-heavy or when an aside would distract.

#### Side panel

When using a side panel anywhere, the panel is ~320–360px wide on desktop, contains 2–3 stacked cards (each titled), and stacks below the main region under 1080px. Cards inside a side panel use lighter chrome than primary cards: no header bar, 16–20px padding, smaller titles.

#### Empty states and zero-data

Centered illustration or icon, headline (Headline Small), body (Body Default), single primary action. Don't show empty tables or empty charts — replace the entire region with the empty state until there's data to display.

### Responsive behavior

Jetpack admin must remain usable on touch devices and narrow widths. The grid collapses to 4 columns under 600px. Buttons remain comfortably tappable (minimum 32px / preferred 40px). Page headers stack vertically. Cards become full-width. Side navigation collapses behind a toggle. Notices switch to a stacked layout with the icon, title, and close button repositioned at the top.

## Elevation & Depth

Jetpack admin communicates hierarchy primarily through whitespace, typography, and 1px borders — not through shadow.

- **Flat surfaces:** the default for admin pages, sections, cards, and notices. White on off-white, separated by spacing or a 1px `--jp-gray-5` border.
- **Subtle shadow:** allowed on mobile notice containers (`0 4px 8px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.06)`), popovers, and hover states on interactive cards.
- **Modal depth:** standard backdrop + centered dialog. 8px radius, 24px padding, drop shadow inherited from `@wordpress/components` `Modal`.

Do not use heavy drop shadows, glassmorphism, neumorphism, blurred translucent panels, decorative gradients, or layered marketing-card effects. Jetpack is not a SaaS dashboard.

## Shapes

Jetpack uses small to medium radii. The Emerald style is more rounded than classic wp-admin but stops short of consumer-app curvature.

- **0px:** legacy Jetpack admin tables and metaboxes inherited from wp-admin.
- **2px:** very compact elements when matching surrounding wp-admin chrome.
- **4px (`--jp-border-radius`, `--jp-button-radius`):** the default. Buttons, inputs, notices, small cards, focus outlines.
- **8px (`--jp-border-radius-rna`, `--jp-modal-radius`):** larger cards, modals, decorative cards, pricing cards, the primary container in Boost/Protect/Search dashboards.
- **9999px:** badges, status pills, plan tags, avatars, circular icon buttons.

## Components

Jetpack ships components in three layers. Choose the highest layer that fits — don't reimplement what already exists.

1. **`@wordpress/components`** (Core). The default and preferred source. `Button`, `Card`, `Notice`, `Panel`, `Modal`, `ToggleControl`, `TextControl`, `SelectControl`, `DataViews`, `Tooltip`, `Popover`, `TabPanel`. Use these unless a Jetpack-specific behavior or visual is genuinely required.
2. **`@automattic/jetpack-components`** (Jetpack). Provides Jetpack-flavored building blocks that aren't (yet) in Core: `AdminPage`, `AdminSection`, `JetpackLogo`, `JetpackFooter`, `Text` (with the Emerald scale), `Container` / `Col`, `Notice`, `Dialog`, `PricingCard`, `PricingTable`, `ProductOffer`, `ProductPrice`, `DecorativeCard`, `UpsellBanner`, `ContextualUpgradeTrigger`, `BoostScoreBar`, `BoostScoreGraph`, `DonutMeter`, `RecordMeterBar`, `StatCard`, `Status`, `Spinner`, `LoadingPlaceholder`, `ActionButton`, `ActionPopover`, `SplitButton`, `Chip`, `IconTooltip`, `Gridicon`, `JetpackProtectLogo`, `JetpackSearchLogo`, `JetpackVaultPressBackupLogo`, `JetpackVideoPressLogo`, `ThemeProvider`. Wrap product surfaces in `<ThemeProvider>` so the `--jp-*` tokens resolve.
3. **`@automattic/jetpack-base-styles`** (SCSS layer). Forward-imports `@wordpress/base-styles` (z-index, colors, variables, breakpoints, mixins, animations) and adds Jetpack admin layout mixins, the `:root` variable set, the responsive `jp-row` / `jp-wrap` grid utilities, and the `jp-cut` link pattern.

### Buttons

Jetpack's standalone plugins use a custom button treatment with a near-black filled primary; My Jetpack and admin chrome are increasingly migrating to the `@wordpress/components` `Button` so they pick up the user's admin theme color (Principle 1). When in doubt, use Core's `Button` and let it be blue.

The Jetpack `Button` (`@automattic/jetpack-components/Button`) variants:

- **Primary (filled, near-black):** the Emerald default. White text on near-black, 4px radius, 600 weight, 24px horizontal padding, 24px line-height. Use for the dominant action on a Jetpack-branded page.
- **Primary (filled, brand green):** reserved for upgrade and connection CTAs where Jetpack identity is intentional.
- **Secondary (outlined):** transparent fill, near-black text, 1px near-black border, same 4px radius. The default for non-primary actions.
- **Link / Tertiary:** unstyled link presentation; uses `is-link` from `@wordpress/components`. For low-emphasis inline actions and toolbar text actions.
- **Destructive:** secondary treatment with red text, or a Core destructive variant. Avoid large filled red buttons except in final confirmation dialogs.
- **Sizes:** Normal (16px text, 8px/24px padding) and Small (12px text, 4px/8px padding).
- **Icon buttons:** 40px square (Normal) or 32px square (Small). Always include an accessible label.
- **States:** loading replaces children with a centered spinner while preserving width; full-width sets `min-width: 100%`.

One primary action per decision area. Primary is for the action that closes the loop (Save, Connect, Upgrade, Activate). Everything else is secondary or link.

### Notices

Use the Jetpack `Notice` component (or `@wordpress/components` `Notice` in Core-aligned screens). Jetpack notices use a 6px-wide left border in the status color, a 1px gray-5 border on the remaining sides, a 4px radius, and a flex layout: status icon → title + body + actions → close button.

- **Success:** `--jp-green` left border, green check icon.
- **Warning:** `--jp-yellow-20` left border, yellow alert icon.
- **Error:** `--jp-red` left border, red alert icon.
- **Info:** near-black left border (Emerald uses black, not blue, for neutral info to keep the page calm), info icon.

Place notices at the top of the relevant page area, after the page header. On mobile (<600px) the layout reflows: padding-top expands, the icon moves to the absolute top-left, and the close button moves to the absolute top-right.

### Cards and sections

- **`AdminSection`:** a top-level grouping inside `AdminPage`. Use to separate distinct concerns on a single screen (e.g., "Performance" vs. "Security" on My Jetpack).
- **`Card` / `AdminCard`:** the standard container. White surface, 1px gray-5 border, 4–8px radius, 24px padding. Headers and footers can use `--jp-gray-0` for subtle separation.
- **`DecorativeCard`:** a softer, brand-tinted card (typically green-0 background) used for promotional, onboarding, or feature-introduction surfaces.
- **`PricingCard` / `PricingTable`:** structured plan presentation. Each card includes plan name, price (use `ProductPrice` for currency formatting), feature list, primary CTA, and optional "recommended" badge.
- **`ProductOffer`:** the My Jetpack product summary card. Combines a product logo, headline, status, plan tier, and a primary action.
- **`UpsellBanner`:** off-white background with a brand-green left border, used to surface upgrade opportunities inline with related content.

### Forms and settings controls

Prefer `@wordpress/components` `ToggleControl`, `TextControl`, `SelectControl`, `RadioControl`, `CheckboxControl`, and `RangeControl`. They handle accessibility, RTL, and admin theme color out of the box. Where Jetpack provides a wrapper (e.g., `ToggleControl` from `@automattic/jetpack-components`), it exists for layout/label consistency, not to restyle the underlying control.

- Labels above the control, programmatically associated.
- Helper text in 14px gray-50, immediately below the control.
- Required/invalid state must include text, not only color.
- Group related toggles and inputs in a `Card` or `Panel` rather than scattering them across the page.

### Connection states and the Jetpack "cut" link

The `jp-cut` link is a signature Jetpack pattern: a 2px brand-green-bordered card with a right-aligned arrow that translates 8px on hover/focus, plus an underline on the last line of text. Use it for primary navigation between major Jetpack admin areas (e.g., "Continue to Stats →"). It is intentionally distinct from a regular button — it implies progression, not commitment.

The connection prompt (the screen a site sees before it has linked to WordPress.com) uses the Jetpack logo prominently, a Headline Small title, body copy, the brand-green primary `Connect Jetpack` button, and a secondary `Not now` link.

### Plan and product badges

Paid-plan badges and active-product chips use brand green (`--jp-green-40`) text on a green-0 background, full-radius pill shape, label typography (12px / 600). Free/inactive states use gray-50 on gray-0. Don't gild a free state with brand color — paid users earn the green.

### Modals and confirmations

Use `@wordpress/components` `Modal` with Jetpack content. Jetpack uses the small/default/large modal padding tokens (16/24/32px) for consistency. Reserve modals for decisions that must complete before the user continues (disconnect, delete data, confirm destructive plan changes). Modal action area: secondary on the left, primary on the right, with the destructive option clearly labeled (`Disconnect Jetpack`, not just `OK`).

### Charts and meters

Jetpack ships several visualization components for product surfaces:

- **`BoostScoreBar` / `BoostScoreGraph`:** Boost performance scores. Use the green/yellow/red status ramp.
- **`DonutMeter`:** for proportional values (storage used, completion).
- **`RecordMeterBar`:** for record/quota-style limits (videos used out of plan).
- **`ProgressBar` / `IndeterminateProgressBar`:** for in-progress operations.
- **`StatCard`:** a number + label + optional delta arrow card used in Stats and Search analytics surfaces.

These are Jetpack-specific. Don't reach for them outside Jetpack product UI.

### Icons and logos

- **Core block-editor surfaces:** use `@wordpress/icons`.
- **Jetpack admin chrome:** use `Gridicon` (still bundled) for legacy parity, or import the named SVG icons from `@automattic/jetpack-components/icons`.
- **Brand logos:** `JetpackLogo`, `JetpackProtectLogo`, `JetpackSearchLogo`, `JetpackVaultPressBackupLogo`, `JetpackVideoPressLogo`, `AutomatticByline`, `AutomatticForAgenciesLogo`, `AutomatticIconLogo`. Use these as components — don't inline the SVGs.

The Jetpack logo has a `showText` prop. In header positions where a textual page title follows, use `showText={false}` and let the page title carry the words.

## Voice and Microcopy

Jetpack's voice is **knowledgeable, friendly, and informative**. Source: Jetpack Brand Strategy / Jetpack Microcopy Guidelines.

**Writing principles:**

- **Simple.** Short sentences. Plain language. No jargon. Clear as day.
- **Active.** "Jetpack secured your site," not "your site has been secured."
- **Sentence case** for setting titles, button labels, and section headings (e.g., "Enable spam protection"). Product names keep their capitalization (e.g., "Jetpack Anti-spam," "Jetpack Boost").
- **Plans, not packages.** Refer to paid tiers as plans. Do not say "upgrade your bundle" or "purchase the package."
- **Jetpack, not Automattic.** Users get features from Jetpack, not from Automattic, WordPress, or sub-brands. Users sign up for Jetpack and/or WordPress.com.
- **Direct outcomes.** Tell the user what changed and what to do next. Don't apologize, don't editorialize, don't pad.
- **Connection language.** "Connect," "disconnect," "in sync," "synced." Avoid "link," "unlink," "pair."

Microcopy review checklist (from Jetpack Microcopy Guidelines):

1. Is it short and simple?
2. Is it active voice?
3. Does it match Jetpack's tone of voice?
4. Is sentence case applied correctly?
5. Are product names capitalized correctly?
6. Does it use "plan" rather than "package"?

## Implementation Guidance

### Use the right layer

- **Inside legacy Jetpack admin (PHP `_inc/client` screens):** the older Calypso-derived stack is in maintenance. Don't add new screens there if you can avoid it — push new work to the React/standalone-plugin model.
- **Inside a standalone Jetpack plugin (Boost, Protect, Search, Social, VideoPress):** mount on `AdminPage` from `@automattic/jetpack-components`, wrap in `<ThemeProvider>`, compose with `Container`/`Col` from the Jetpack layout package, and use `@wordpress/components` for primitives.
- **Inside My Jetpack:** use the `@automattic/my-jetpack` patterns (`ProductOffer`, onboarding tour, global notices) plus `@automattic/jetpack-components`. Honor My Jetpack's product-card grid before introducing new layouts.
- **Inside the block editor (SlotFills):** use `@wordpress/components`, `@wordpress/icons`, `@wordpress/data`, `@wordpress/i18n`, and the editor SlotFill APIs (`PluginDocumentSettingPanel`, `PluginSidebar`, `PluginPrePublishPanel`, `PluginPostPublishPanel`, `PluginBlockSettingsMenuItem`, `PluginMoreMenuItem`). Apply Jetpack identity sparingly — a logo in a sidebar header is appropriate; restyling the inspector is not.

### Tokens and CSS

- Wrap React surfaces in `<ThemeProvider>` so `--font-*`, `--jp-*`, `--spacing-base`, and `--jp-border-radius` resolve. Without it, components fall back to whatever the host page provides.
- In SCSS, `@use "@automattic/jetpack-base-styles/style"` for the full base layer or `@use "@automattic/jetpack-base-styles/gutenberg-base-styles" as gb` to forward only `@wordpress/base-styles`.
- Prefer CSS variables to hard-coded hex values so the design can theme. The existing `_colors.scss` files in `projects/plugins/jetpack/scss/` and `projects/plugins/jetpack/_inc/client/scss/` are legacy and increasingly deprecated; new code should use `--jp-*` from the theme provider.
- `--wp-admin-theme-color` (Core) and `--jp-green-*` (Jetpack) coexist. Use the former for admin chrome focus/primary; use the latter for Jetpack identity and product visualization.

### Localization, RTL, motion

- Wrap all user-facing strings in `__()`, `_x()`, `_n()` from `@wordpress/i18n` with the `'jetpack'` or per-package text domain (e.g., `'jetpack-components'`, `'jetpack-boost'`).
- Don't bake left/right into layout — use logical properties or the SCSS RTL mixins from `@wordpress/base-styles`.
- Respect `prefers-reduced-motion`. The `jp-cut` link's arrow translation, hover transitions, and spinners all degrade to no animation in that mode.

### Backwards compatibility

Jetpack ships behind WordPress core's release cadence, so its bundled `@wordpress/components` is often months behind Gutenberg trunk. Don't depend on bleeding-edge component APIs without checking the Jetpack monorepo's pinned `@wordpress/components` version. When a needed Core capability isn't yet available in the Jetpack-bundled version, prefer contributing the gap upstream and waiting, over forking the component locally.

## Do's and Don'ts

### Do

- Use `@wordpress/components` and `@automattic/jetpack-components` before inventing new UI.
- Mount new full-screen Jetpack admin pages on `AdminPage` and wrap them in `<ThemeProvider>`.
- Default to the user's wp-admin color scheme for primary actions and focus.
- Reserve Jetpack green for brand moments (logo, paid plans, healthy/connected status, upgrade CTAs, the `jp-cut` link).
- Use the Emerald typographic scale (16px body, generous headlines) on standalone Jetpack pages.
- Keep notices factual, sentence-case, and active-voice.
- Use sentence case for buttons, settings, and section titles.
- Refer to paid tiers as plans.
- Place the Jetpack logo in page headers and the Jetpack footer at the bottom of standalone admin pages.
- Pair color with text, icon, or shape for status communication.
- Localize every user-facing string.

### Don't

- Don't override `@wordpress/components` styles to enforce a Jetpack look on routine admin chrome.
- Don't use brand green as the default primary button color across the admin shell — use the admin theme color, and use green for Jetpack-identity moments.
- Don't introduce custom webfonts, heavy drop shadows, gradients, glassmorphism, or oversized consumer-app radii.
- Don't replicate marketing-page hero layouts in admin pages. The page header (logo + title + actions) is enough.
- Don't paint the wp-admin masterbar or admin menu green.
- Don't use 13px body type from classic wp-admin in new Jetpack standalone surfaces — use the 16px Emerald body. (Conversely, don't push the 16px Emerald body into screens that live inside legacy wp-admin chrome where 13px is the local norm.)
- Don't say "package," "bundle," or "upgrade your subscription." Plans.
- Don't say users get features from Automattic. They get them from Jetpack.
- Don't crowd the editor with Jetpack SlotFills. Pick the least intrusive slot for the task.
- Don't ship green-on-green text without verifying contrast.
- Don't introduce pink, orange, or non-`--jp-*` brand colors into routine admin chrome — they are reserved for specific product surfaces.
- Don't fork `@wordpress/components` in Jetpack just to restyle. Contribute upstream or live with the default.

## Source Notes

This DESIGN.md was synthesized from the public Jetpack monorepo (`Automattic/jetpack` on GitHub) — specifically `projects/js-packages/base-styles/root-variables.scss`, `projects/js-packages/components/components/theme-provider/index.tsx`, the `@automattic/jetpack-components` package, the `@automattic/jetpack-base-styles` package, and `projects/plugins/jetpack/scss/atoms/colors/_colors.scss` — and from the following internal references:

- *Design Principles for Jetpack* — Filipe Varela, Jetpack Division P2, 2024-11-01.
- *Jetpack and the Design System* — Filipe Varela, Design Systems P2, 2024-11-14.
- *Jetpack Emerald Style Snapshot i3* — Erin Casali, Jetpack Design P2, 2021-02-22.
- *Jetpack Microcopy Guidelines* — Jetpack Design P2, 2019-06-27.
- *Jetpack Brand Messaging Guidelines* — Field Guide.
- *Automattic Brands Voice and Tone Style Guide* and *The Automattic Writing Style Guide* — Field Guide.

Treat this file as a living design contract. The Jetpack design layer is mid-migration: from the bespoke Emerald visual style toward Core-aligned `@wordpress/components` styling. Until that migration completes, both modes coexist in the codebase. When in doubt, default to Core; reserve Jetpack-specific styling for branded touchpoints.
