---
version: alpha
name: Signal Desk
description: "A calm product analytics design system for focused product teams."
colors:
  primary: "#174A34"
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
    fontSize: "36px"
    lineHeight: "44px"
    fontWeight: 680
  heading:
    fontSize: "22px"
    lineHeight: "30px"
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
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.5}"
  buttonPrimary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.brandText}"
    rounded: "{rounded.md}"
  badgePositive:
    backgroundColor: "{colors.positiveSoft}"
    textColor: "{colors.positive}"
  badgeWarning:
    backgroundColor: "{colors.warningSoft}"
    textColor: "{colors.warning}"
  badgeDanger:
    backgroundColor: "{colors.dangerSoft}"
    textColor: "{colors.danger}"
---

## Overview

Signal Desk is an operational product analytics surface. It should feel calm, trusted, and decision-oriented. The interface is for product managers, designers, support leads, and analysts who scan it repeatedly during the week.

## Color

Use warm neutrals for page and surface hierarchy. Green is the brand/action color, not a decorative wash. Orange is reserved for highlights and mixed-signal moments. Use semantic status colors for positive, warning, danger, and info states.

## Typography

Use compact, legible type. Headings should be clear but not editorial or oversized. Numeric metrics may be larger than labels, but dashboards should remain work-focused.

## Layout & Spacing

Prefer dense but breathable product UI. Cards should align to a predictable grid. Avoid isolated decorative cards that do not help scanning. Use 8px multiples for most spacing.

## Components

Buttons are rectangular with 8px radius. Cards use a 1px border and light shadow. Tables should have clear row separation and compact cell padding. Badges should be small, high-contrast, and semantic.

## Do's and Don'ts

- Do make primary actions obvious.
- Do show realistic operational data and states.
- Do keep dashboard sections aligned and scannable.
- Do use color to clarify status or hierarchy.
- Don't use gradients, decorative blobs, glassmorphism, or oversized marketing hero layouts.
- Don't invent a different palette per section.
- Don't bury important actions in low-contrast controls.
