---
version: alpha
name: Signal Minimal
colors:
  primary: "#164B35"
  primaryText: "#FFFFFF"
  background: "#F6F4EF"
  surface: "#FFFFFF"
  surfaceAlt: "#ECE7DD"
  border: "#D8D1C4"
  text: "#1D211C"
  textMuted: "#646B60"
  positive: "#2D7A46"
  warning: "#A66A00"
  danger: "#B42318"
typography:
  family: "Inter, ui-sans-serif, system-ui, sans-serif"
  title: "32px"
  heading: "20px"
  body: "15px"
  small: "13px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
components:
  buttonPrimary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primaryText}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
---

## Overview

Use the tokens exactly. Do not invent new brand colors unless a state is missing.

