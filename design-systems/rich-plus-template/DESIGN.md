---
version: alpha
name: Signal Desk Template-Aware
description: "Signal Desk visual primitives plus artifact-specific templates."
colors:
  ink: "#18201B"
  inkMuted: "#5F675F"
  canvas: "#F5F2EA"
  surface: "#FFFFFF"
  surfaceSubtle: "#ECE7DD"
  border: "#D8D0C2"
  borderStrong: "#B9AF9E"
  brand: "#174A34"
  brandHover: "#0F3A29"
  brandText: "#FFFFFF"
  accent: "#C67C3A"
  accentSoft: "#F2DAC1"
  positive: "#287A45"
  positiveSoft: "#DFF1E5"
  warning: "#986800"
  warningSoft: "#F8E8B4"
  danger: "#B42318"
  dangerSoft: "#F8D7D4"
  info: "#246B8F"
  infoSoft: "#D8ECF5"
typography:
  family: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  display:
    fontSize: "34px"
    lineHeight: "42px"
    fontWeight: 680
  heading:
    fontSize: "21px"
    lineHeight: "29px"
    fontWeight: 650
  subheading:
    fontSize: "17px"
    lineHeight: "24px"
    fontWeight: 620
  body:
    fontSize: "15px"
    lineHeight: "22px"
    fontWeight: 400
  caption:
    fontSize: "13px"
    lineHeight: "18px"
    fontWeight: 450
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "20px"
  6: "24px"
  8: "32px"
  10: "40px"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
elevation:
  card: "0 1px 2px rgba(24, 32, 27, 0.08)"
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    shadow: "{elevation.card}"
  buttonPrimary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brandText}"
    rounded: "{rounded.md}"
---

## Overview

Signal Desk is a calm product analytics workspace. The brand primitives are stable across every screen: warm neutral surfaces, green primary actions, compact type, semantic status colors, and low-drama product density.

## Universal Brand Primitives

- Page backgrounds use `canvas`.
- Repeated surfaces use `surface` with `border`.
- Primary actions use `brand`.
- Status indicators use semantic soft background plus strong text.
- Border radius is 8px by default.
- Avoid visual effects that read as consumer marketing.

## Dashboard Template

Dashboards use this order:

1. Page header with one primary action.
2. Four KPI cards in a single row when space allows.
3. Main analytical panel on the left, operational side panels on the right.
4. Tables below or beside charts, never above the KPI strip.

Charts should be simple SVG/CSS shapes using brand, accent, and semantic colors. Do not use decorative gradients.

## Onboarding Template

Onboarding uses this order:

1. Compact progress indicator at the top.
2. Current task panel as the largest surface.
3. Helpful aside with checklist, timing, and support.
4. Back/Continue actions grouped at the bottom of the task panel.

Keep onboarding calm and procedural. Do not turn it into a marketing landing page.

## Settings Template

Settings use this order:

1. Title and explanation.
2. Grouped sections with labels above controls.
3. Save/cancel actions visible after the editable settings.
4. Danger zone separated by stronger border and danger color.

Settings screens should feel stable and conservative. Do not use dashboard cards for every individual field.

## Do's and Don'ts

- Do pair brand primitives with the matching screen template.
- Do keep artifact structure recognizable.
- Do use realistic product language.
- Don't use a deck, ad, or landing-page layout for app screens.
- Don't invent one-off components when standard controls work.

