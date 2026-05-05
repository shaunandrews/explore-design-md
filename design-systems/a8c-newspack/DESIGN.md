---
version: alpha
name: Newspack
description: Newspack publishing platform design system for AI coding agents. Use these tokens and guidelines when generating Newspack admin/wizard UI, Newspack-themed front-end pages, Newspack Blocks, the Block Theme and its style variations, the Classic Theme and its child themes (Joseph, Katharine, Nelson, Sacha, Scott), and any newsroom site running on Newspack. Newspack ships a shared design system (the "Newspack UI" CSS layer plus `theme.json` tokens) and a set of newspaper-grade typographic and chromatic defaults; individual newsrooms then customize via WordPress style variations. This file documents the platform defaults, not any one newsroom's brand. It excludes the newspack.com marketing website and unrelated WordPress.com chrome.
colors:
  primary: "#003DA5"
  primary-100: "#9FB6DD"
  primary-300: "#6086C7"
  primary-400: "#406EBC"
  primary-500: "#2055B0"
  primary-600: "#003DA5"
  primary-700: "#00296E"
  primary-800: "#001F53"
  primary-900: "#001437"
  secondary: "#26D07C"
  secondary-100: "#C8ECD4"
  secondary-300: "#95DFAF"
  secondary-500: "#26D07C"
  secondary-600: "#1FB36A"
  secondary-700: "#1BA25F"
  secondary-900: "#117644"
  tertiary: "#FC9BB3"
  tertiary-200: "#FCDED8"
  tertiary-500: "#FC9BB3"
  tertiary-700: "#C5788B"
  quaternary: "#FFA300"
  quaternary-100: "#FFDEC7"
  quaternary-500: "#FFA300"
  quaternary-700: "#C77E00"
  accent: "#003DA5"
  accent-2: "#2055B0"
  accent-3: "#9FB6DD"
  base: "#FFFFFF"
  base-2: "#F0F0F0"
  base-3: "#DDDDDD"
  base-4: "#CCCCCC"
  base-5: "#949494"
  contrast: "#1E1E1E"
  contrast-2: "#3E3E3E"
  contrast-3: "#6C6C6C"
  neutral-0: "#FFFFFF"
  neutral-50: "#F7F7F7"
  neutral-100: "#F0F0F0"
  neutral-200: "#E0E0E0"
  neutral-300: "#DDDDDD"
  neutral-400: "#CCCCCC"
  neutral-500: "#949494"
  neutral-600: "#6C6C6C"
  neutral-800: "#3E3E3E"
  neutral-900: "#1E1E1E"
  neutral-1000: "#000000"
  text-primary: "#1E1E1E"
  text-secondary: "#3E3E3E"
  text-muted: "#6C6C6C"
  text-inverse: "#FFFFFF"
  background-page: "#FFFFFF"
  background-alt: "#F0F0F0"
  background-subtle: "#F7F7F7"
  border: "#DDDDDD"
  border-light: "#F0F0F0"
  border-strong: "#CCCCCC"
  link: "#003DA5"
  link-hover: "#2055B0"
  focus: "#003DA5"
  success: "#008A20"
  success-dark: "#007017"
  success-background: "#EDFAEF"
  success-border: "#B8E6BF"
  error: "#D63638"
  error-dark: "#B32D2E"
  error-background: "#FCF0F1"
  error-border: "#FACFD2"
  warning: "#BD8600"
  warning-alt: "#DBA617"
  warning-background: "#FCF9E8"
  warning-border: "#F5E6AB"
  classic-link-fallback: "#555555"
  classic-highlight-yellow: "#FED850"
typography:
  body:
    fontFamily: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-classic:
    fontFamily: "Georgia, Garamond, \"Times New Roman\", serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    notes: "The Classic Newspack Theme defaults to a serif body (Georgia) for editorial weight. The Block Theme defaults to Inter for legibility and tooling consistency."
  small:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  x-small:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
  medium:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.929rem + 0.402vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.857rem + 0.803vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.5
  x-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 0.394rem + 2.008vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.375
  xx-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 0.055rem + 3.213vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.333
  xxx-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(1.75rem, -0.213rem + 4.016vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.25
  xxxx-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(2rem, -1.141rem + 6.426vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.125
  xxxxx-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(2.125rem, -2.39rem + 9.237vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
  xxxxxx-large:
    fontFamily: "\"Inter\", system-ui, sans-serif"
    fontSize: "clamp(2.25rem, -3.639rem + 12.048vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.083
  display-classic:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
    fontSize: "clamp(2.2em, 4vw, 4em)"
    fontWeight: 700
    lineHeight: 1.2
    notes: "Classic Newspack Theme uses the system font stack for headings paired with a serif body — the editorial 'sans display + serif text' pairing common in newspaper design."
  code:
    fontFamily: "\"JetBrainsMono\", ui-monospace, Menlo, Monaco, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  xx-small: 0.125rem
  x-small: 0.1875rem
  small: 0.25rem
  medium: 0.375rem
  large: 0.5rem
  x-large: 0.625rem
  xx-large: 0.75rem
  xxx-large: 0.875rem
  xxxx-large: 1rem
  full: 9999px
spacing:
  "00": 0
  "05": 0.125rem
  "10": 0.25rem
  "15": 0.375rem
  "20": 0.5rem
  "25": 0.75rem
  "30": 1rem
  "35": 1.25rem
  "40": 1.5rem
  "45": 1.75rem
  "50": 2rem
  "55": 2.25rem
  "60": "clamp(2rem, 1.215rem + 1.606vw, 2.5rem)"
  "65": 2.5rem
  "70": "clamp(2rem, 0.43rem + 3.213vw, 3rem)"
  "75": 3rem
  "80": "clamp(2rem, -1.141rem + 6.426vw, 4rem)"
  "85": 4rem
layout:
  contentSize: 632px
  wideSize: 1296px
  contentSize-classic: 800px
  wideSize-classic: 1216px
shadow:
  elevation-1: "0 1px 10px #00000007"
  elevation-2: "0 2px 20px #00000014"
  elevation-3: "0 3px 30px #00000021"
  elevation-4: "0 0 20px #00000010, 0 25px 30px #00000015"
  inset-1: "inset 0 0 0 1px"
  inset-2: "inset 0 0 0 2px"
line-height:
  xx-small: 1.333
  x-small: 1.429
  small: 1.5
  medium: 1.6
  large: 1.5
  x-large: 1.375
  xx-large: 1.333
  xxx-large: 1.25
  xxxx-large: 1.125
  xxxxx-large: 1.1
  xxxxxx-large: 1.083
container-width:
  x-small: 300px
  small: 410px
  medium: 632px
  large: 964px
  x-large: 1296px
components:
  page:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    typography: "{typography.body}"
    contentSize: "{layout.contentSize}"
    wideSize: "{layout.wideSize}"
  article-content:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    contentSize: "{layout.contentSize}"
    notes: "Reading column for article body. Block Theme: 632px; Classic Theme: 800px. Wider features may extend to wide or full alignment."
  card:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    rounded: "{rounded.medium}"
    padding: "1.5rem"
    borderColor: "{colors.base-3}"
    shadow: "{shadow.elevation-2}"
  card-flat:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    rounded: "{rounded.medium}"
    padding: "1.5rem"
    borderColor: "{colors.base-3}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.base}"
    typography: "{typography.small}"
    fontWeight: 600
    rounded: "{rounded.medium}"
    padding: "0.75rem 1.5rem"
    notes: "Block Theme button. Background uses --wp--preset--color--accent so it inherits from whichever style variation is active."
  button-outline:
    backgroundColor: "{colors.base}"
    textColor: "{colors.accent}"
    typography: "{typography.small}"
    fontWeight: 600
    rounded: "{rounded.medium}"
    padding: "calc(0.75rem - 1px) calc(1.5rem - 1px)"
    borderColor: "currentcolor"
    borderWidth: "1px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.contrast}"
    typography: "{typography.small}"
    fontWeight: 600
    rounded: "{rounded.medium}"
    padding: "0.75rem 1.5rem"
  category-tag:
    backgroundColor: "rgba(0, 61, 165, 0.10)"
    textColor: "{colors.accent}"
    typography: "{typography.x-small}"
    fontWeight: 500
    rounded: "{rounded.small}"
    padding: "4px 12px"
    notes: "Tinted with the active style variation's accent color in practice."
  meta-byline:
    textColor: "{colors.contrast-3}"
    typography: "{typography.x-small}"
  input:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    rounded: "{rounded.medium}"
    padding: "0.625rem 1rem"
    borderColor: "{colors.base-3}"
    borderWidth: "1px"
  input-focus:
    borderColor: "{colors.accent}"
    outlineWidth: "2px"
  notice-success:
    backgroundColor: "{colors.success-background}"
    textColor: "{colors.contrast}"
    borderColor: "{colors.success-border}"
    rounded: "{rounded.medium}"
    padding: "1rem"
  notice-error:
    backgroundColor: "{colors.error-background}"
    textColor: "{colors.contrast}"
    borderColor: "{colors.error-border}"
    rounded: "{rounded.medium}"
    padding: "1rem"
  notice-warning:
    backgroundColor: "{colors.warning-background}"
    textColor: "{colors.contrast}"
    borderColor: "{colors.warning-border}"
    rounded: "{rounded.medium}"
    padding: "1rem"
  modal:
    backgroundColor: "{colors.base}"
    rounded: "{rounded.large}"
    padding: "{spacing.50}"
    shadow: "{shadow.elevation-4}"
  newsletter-signup:
    backgroundColor: "{colors.base-2}"
    textColor: "{colors.contrast}"
    rounded: "{rounded.medium}"
    padding: "{spacing.40}"
  donation-block:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    accentColor: "{colors.accent}"
    rounded: "{rounded.medium}"
    borderColor: "{colors.base-3}"
  pricing-card:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    accentColor: "{colors.accent}"
    rounded: "{rounded.large}"
    padding: "{spacing.40}"
    shadow: "{shadow.elevation-2}"
  wizard-section:
    backgroundColor: "{colors.base}"
    textColor: "{colors.contrast}"
    rounded: "{rounded.medium}"
    padding: "{spacing.40}"
    borderColor: "{colors.base-3}"
    notes: "Newspack admin wizard pages live inside wp-admin. Cards use neutral whites and the platform-blue accent for primary actions."
style-variations:
  - slug: default
    title: Default
    accent: "#003DA5"
    accent-2: "#2055B0"
    accent-3: "#9FB6DD"
    base: "#FFFFFF"
    contrast: "#1E1E1E"
    notes: "The Newspack platform default — institutional newsroom blue."
  - slug: arc
    title: Arc
    notes: "Bold contemporary palette."
  - slug: bulletin
    title: Bulletin
    notes: "Reportage / wire-service feel."
  - slug: foundry
    title: Foundry
    accent: "#375844"
    accent-2: "#1B2A41"
    accent-3: "#E6C79C"
    base: "#FFFFFF"
    contrast: "#1E1E1E"
    notes: "Deep green / navy / cream — investigative or business-newspaper feel."
  - slug: ledger
    title: Ledger
    accent: "#C93A00"
    accent-2: "#297373"
    accent-3: "#E6A57E"
    base: "#F2F0EA"
    contrast: "#000000"
    notes: "Warm cream background with rust and teal accents — print-paper feel."
  - slug: nocturne
    title: Nocturne
    accent: "#FFC857"
    accent-2: "#B8D2F0"
    accent-3: "#22324F"
    base: "#1E1E1E"
    contrast: "#FFFFFF"
    notes: "Default-dark variation. Black/near-black canvas with warm yellow and pale-blue accents."
  - slug: classic-children
    title: Classic Theme child themes
    notes: "newspack-joseph, newspack-katharine, newspack-nelson, newspack-sacha, newspack-scott — cosmetic palette/typography variants of the Classic Newspack Theme."
---

# Newspack Design System

## Overview

Newspack is Automattic's open-source publishing platform for independent and local news organizations, built on WordPress. Newspack ships a publishing CMS (`newspack-plugin`), a Classic Theme (`newspack-theme` plus five child themes), a Block Theme (`newspack-block-theme` with ten style variations), a block library (`newspack-blocks`), a newsletter authoring plugin (`newspack-newsletters`), an ads plugin (`newspack-ads`), a popups/CTAs plugin (`newspack-popups`), a network/hub product (`newspack-network`), and a number of supporting plugins. The design system documented here is the **platform default** — the design language a newsroom inherits before any customization — across all of those products.

This document covers Newspack platform surfaces:

- Newsroom front-end pages rendered by the Newspack Block Theme or Classic Theme — homepage, section/category archives, article (single post), author archives, search, comments, newsletter signup, donation/subscription pages, paywall/registration walls.
- Newspack-specific block UI: Homepage Posts, Iframe, Author Profile, Article Subtitle, Donate, Reader Registration, Newsletter Subscription, Listings, Sponsors, Popups, Article-related blocks.
- Newspack admin/wizard UI inside `wp-admin`: the Newspack Dashboard, Setup wizard, Audience, Advertising, Newsletters, Reader Activation, Site Design, Settings, and other wizard pages built on `Wizard` / `Wizard_Section`.
- The shared **Newspack UI** CSS layer (`newspack-ui` SCSS partial) consumed by both themes and the plugin.
- The design tokens in `theme.json` (Block Theme) and CSS custom properties (Classic Theme) that establish the platform palette, type scale, spacing rhythm, and elevation.

This document explicitly excludes:

- The newspack.com marketing website (a separate Automattic property with its own visual identity, including custom display fonts).
- Any individual newsroom's customizations on top of Newspack — colors a newsroom picks in the Customizer, child themes a newsroom builds, ad layouts the newsroom configures.
- Other Automattic publishing products (WordPress.com themes, VIP, Tumblr).

When implementing Newspack code, prefer the platform's own tokens — `--wp--preset--color--accent`, `--wp--preset--font-family--inter`, `--wp--preset--spacing--*`, `--wp--custom--border--radius-medium`, `--wp--custom--line-height--*` — over hard-coded values. The hex values in this file are normative platform defaults and reference values for AI agents; the live tokens are the source of truth and shift with the active style variation.

## Design Principles

Newspack is a design system built for journalism. Five principles underwrite every default in this file.

1. **The story is the product.** Chrome serves the article, not the other way around. Calm typography, generous reading widths, restrained color, and minimal decorative shadow keep attention on reporting. Designs that compete with the headline lose.
2. **Editorial trust over visual novelty.** Conservative radii (most surfaces 4–8px, never pill-shaped cards), neutral elevation, and a single institutional accent color communicate seriousness. Newspack should feel like a newspaper website, not a SaaS dashboard or a consumer app.
3. **Configurable per newsroom, consistent per platform.** Style variations (Block Theme) and child themes (Classic Theme) are first-class. The platform ships a coherent default; each newsroom dials in its own typography and palette without forking core. Defaults must look complete on day one and remain coherent under any reasonable swap.
4. **WordPress-native by default.** Spacing, layout, type sizes, and color come from `theme.json` presets and core block-editor primitives. New components reach for `@wordpress/components` and the existing Newspack UI partial before inventing a new pattern. Editors learning Newspack should mostly be learning WordPress.
5. **Reader-revenue-aware.** Newsletter signups, donation prompts, registration walls, member badges, and subscriber-only content states are everyday surfaces, not afterthoughts. They use the same design tokens as articles, but their hierarchy is intentional — they are how independent newsrooms survive.

## Theme Architectures

Newspack ships two theme families. They share tokens (Newspack UI), but their architecture differs and the right one depends on the newsroom's editing workflow.

### Block Theme — `newspack-block-theme`

Modern Full Site Editing theme. Templates, parts, and patterns are HTML files. All design comes from `theme.json` plus ten style variations in `styles/`. Two body fonts ship: **Inter** (variable weight 100–900) and **JetBrainsMono** (for code). The block theme is the default direction for new Newspack sites and the visual reference for this DESIGN.md.

**Style variations (in `styles/`):**

- `01-theme-alt`, `02-arc`, `03-arc-alt`, `04-bulletin`, `05-bulletin-alt`, `06-foundry`, `07-foundry-alt`, `08-ledger`, `09-ledger-alt`, `10-nocturne`.
- Each variation is a JSON file overriding `theme.json` palette, typography, and selected block defaults. Each defines a unique `custom.className` so its scoped CSS applies via a `theme-variation-{className}` body class.

External patterns from Jetpack, WooCommerce, and Automattic remote pattern sources are intentionally blocked at the theme level. Do not remove those filters.

### Classic Theme — `newspack-theme` + 5 child themes

Long-running classic (non-FSE) theme. The base `newspack-theme` provides templates, header/footer, comments, and SCSS-driven design. Child themes — `newspack-joseph`, `newspack-katharine`, `newspack-nelson`, `newspack-sacha`, `newspack-scott` — extend the base with cosmetic palette and typography overrides only; they share all features.

The Classic Theme uses the WordPress Customizer (not `theme.json`) for theme options, and serves a more traditionally-typeset design: serif body (Georgia/Times) at 20px desktop / 18px mobile and a system-font heading stack. Repository layout quirk: the base theme lives at `newspack-theme/newspack-theme/`, not the repo root.

A new child theme codenamed **Joan** (named after Joan Didion) is in active development (as of late 2025) drawing visual inspiration from both the Block Theme and the Newspack UI layer.

### Newspack UI (shared layer)

A shared SCSS partial (`_newspack-ui.scss`) and its CSS custom property surface (`--newspack-ui-font-size-*`) used by both themes and by Newspack plugins. Provides a unified type-size scale (m → 6xl), responsive `clamp()` font sizing, and shared component styles. New components should consume Newspack UI tokens rather than redefine sizing.

### Newspack Plugin admin UI

The Newspack admin lives inside `wp-admin` and is a React app under `src/wizards/` (modern path) and `src/wizards/{name}/index.js` (legacy path). It uses the platform color tokens from `packages/colors/colors.module.scss` and shares conventions with `@wordpress/components`. Wizards are built from `Wizard` / `Wizard_Section` PHP base classes plus `WizardsTab`, `WizardSection`, `WizardsActionCard` React components.

## Colors

Newspack's default palette is built around a single institutional newspaper-blue accent. Each style variation may swap the accent set, but the supporting neutrals, status colors, and text contrasts hold steady across variations so components remain coherent.

### Token system

Colors live at three layers. Use the most specific layer that applies.

1. **Block Theme `theme.json` palette** (slug-based, swappable per style variation):
   - `accent` — primary brand color (Default: `#003DA5`).
   - `accent-2` — secondary accent / hover (Default: `#2055B0`).
   - `accent-3` — tertiary accent / soft tinted backgrounds (Default: `#9FB6DD`).
   - `base` — page background (`#FFFFFF` in light variations, `#1E1E1E` or off-white in dark/sepia).
   - `base-2` through `base-5` — alternating section backgrounds, dividers, borders, muted surfaces.
   - `contrast` — primary text color (`#1E1E1E` light, `#FFFFFF` dark).
   - `contrast-2`, `contrast-3` — secondary and tertiary text.
2. **Block Theme `custom.color`** (semantic, fixed across variations): `neutral-0`…`neutral-1000`, `error-0`…`error-60`, `success-0`…`success-60`, `warning-0`…`warning-40`. These do not change with the style variation and are used for status, forms, and platform chrome.
3. **Plugin admin** (`packages/colors/colors.module.scss`): a 12-step palette in five hues — Primary (institutional blue), Secondary (mint green), Tertiary (rose), Quaternary (amber), Neutral — plus Success/Error/Warning sets. The 600 step is the canonical "brand" step (`primary-600 = #003DA5`).

### Default platform palette

- **Primary blue** `#003DA5` (`primary-600` / `accent`). Used for links, primary CTAs, focus rings, selected states, the platform admin chrome. The default style variation; many newsroom sites override.
- **Secondary green** `#26D07C` (`secondary-500`). Reserved for success states, member/subscriber affordances, and positive-status indicators. **Not** a second brand color.
- **Tertiary rose** `#FC9BB3` (`tertiary-500`). Used in the plugin for editorial accents (e.g., highlight cards in wizards). Avoid in front-end newsroom UI unless a style variation calls for it.
- **Quaternary amber** `#FFA300` (`quaternary-500`). Used in admin charts and alerts.
- **Neutral text and surfaces:** `#1E1E1E` text, `#3E3E3E` secondary text, `#6C6C6C` muted text, `#FFFFFF` page surface, `#F0F0F0` alt section background, `#DDDDDD` border, `#CCCCCC` strong border.
- **Status:** Success `#008A20` on `#EDFAEF`, Error `#D63638` on `#FCF0F1`, Warning `#BD8600` on `#FCF9E8`. These match WordPress core semantics so wizards and notices feel native to wp-admin.

### Style variations at a glance

The Block Theme's variations cover a wide editorial range without breaking platform consistency:

- **Default** — institutional blue on white, the canonical Newspack identity.
- **Foundry** — deep green (`#375844`) and navy (`#1B2A41`) over white; investigative-news / business-paper feel.
- **Ledger** — rust orange (`#C93A00`) and teal (`#297373`) over warm cream (`#F2F0EA`); print-paper warmth.
- **Nocturne** — the default-dark variation: warm yellow (`#FFC857`) and pale blue accents over near-black; for nighttime reading and high-contrast preferences.
- **Arc**, **Bulletin** — additional palette options for newsrooms that want a less corporate look.
- Every variation has an `-alt` companion (e.g., `02-arc.json` + `03-arc-alt.json`) that flips dominant/recessive accents for alternating layouts.

### Color constraints

Use color semantically, not decoratively. Status must always pair with text or icon. Do not stack accent on accent — articles and cards should usually be `contrast` text on `base` or `base-2`. Never use the secondary green as a generic call-to-action color — it reads as success/membership and erodes that signal.

## Typography

Newspack's type system lives in three places and you should know which one you're working in.

### Block Theme — `Inter` + `JetBrainsMono`

The Block Theme ships **Inter** (variable, 100–900) for all body, UI, and heading text and **JetBrainsMono** for code. No serif. No display font. The signal is consistency and screen legibility, not editorial flourish — newsrooms add flourish through style variations.

The size scale uses `--wp--preset--font-size--*` slugs with responsive `clamp()`:

- **2X-Small** `xx-small` — 12px / 1.333 line-height. Captions, timestamps, UI labels.
- **X-Small** `x-small` — 14px / 1.429. Bylines, secondary metadata.
- **Small** `small` — 16px / 1.5. Default UI text, button labels, default Inter weight 600 for buttons.
- **Medium** `medium` — clamp(18px → 20px) / 1.6. Standfirst, list lead text.
- **Large** `large` — clamp(20px → 24px) / 1.5. Card headlines, sub-section titles.
- **X-Large** `x-large` — clamp(22px → 32px) / 1.375. Article subheads.
- **2X-Large** `xx-large` — clamp(26px → 42px) / 1.333. Section titles.
- **3X-Large** `xxx-large` — clamp(28px → 48px) / 1.25. Page titles, smaller article headlines.
- **4X-Large** `xxxx-large` — clamp(32px → 64px) / 1.125. Hero/feature headlines.
- **5X-Large** `xxxxx-large` — clamp(34px → 80px) / 1.1. Major hero, takeover.
- **6X-Large** `xxxxxx-large` — clamp(36px → 96px) / 1.083. Display only.

Custom line-heights are a separate token set (`--wp--custom--line-height--*` from `xx-small` 1.333 → `xxxxxx-large` 1.083) so headlines tighten as they scale.

### Classic Theme — system display + serif body

The Classic Theme defaults to the WordPress system font stack for headings and **Georgia / Times New Roman** for body — the editorial "sans display + serif text" pairing common in newspaper design. Body sizes step from a 20px base on desktop (18px on mobile) using a 1.125 modular ratio: 12 → 14 → 16 → 20 → 24 → 28 → 36 → 44 → 56 → 64 → 80px. Heading line-height 1.2; body line-height 1.6.

Child themes may swap fonts per newsroom but should preserve the size ratio and the serif-body / sans-display pairing.

### Plugin admin

Wizard and admin UI inside wp-admin uses the WordPress admin system font stack for chrome, with Newspack UI sizes (`--newspack-ui-font-size-m` etc.) for content surfaces.

### Voice

Newspack's voice in microcopy and admin is **clear, direct, journalistic, and unsensational**. Short sentences. Active voice. Plain words preferred over jargon. Headings use sentence case in admin/wizard UI; product names retain their proper capitalization (Newspack, Reader Activation, WooCommerce). Avoid marketing puffery — newsrooms recognize it instantly.

## Layout

Newspack's layout system is built on `theme.json` content widths, the WordPress block alignment system, and a 7-step responsive spacing scale.

### Content widths

- **Block Theme:** `contentSize` 632px (the article reading column), `wideSize` 1296px (full layout, hero, gallery).
- **Classic Theme:** `contentSize` 800px, `wideSize` 1216px.
- Container utilities (Block Theme `custom.width`): `x-small` 300px, `small` 410px, `medium` 632px, `large` 964px, `x-large` 1296px.

The Block Theme's narrower content size (632px vs. 800px) is deliberate — Inter at 16–18px reads more comfortably at a tighter measure than Georgia at 20px.

### Spacing scale

Two parallel sets coexist; pick by use.

**Preset spacing** (`--wp--preset--spacing--*`, used by block layout, block gaps, alignment):

- `20` 8px, `30` 16px, `40` 24px, `50` 32px, `60` clamp(32→40), `70` clamp(32→48), `80` clamp(32→64).

**Custom spacing** (`--wp--custom--spacing--*`, used inside component styles for fine-grained control):

- `00` 0, `05` 2px, `10` 4px, `15` 6px, `25` 12px, `35` 20px, `45` 28px, `55` 36px, `65` 40px, `75` 48px, `85` 64px.

Buttons are the typical example of mixed scales: `--wp--preset--spacing--40` (24px) horizontal and `--wp--custom--spacing--25` (12px) vertical.

### Alignment system

Use WordPress core block alignments. `default` content stays at `contentSize`. `wide` extends to `wideSize`. `full` extends edge-to-edge. Article body text should never go wider than `default`. Image/embed/gallery blocks may go `wide` or `full`. Pull-quotes can step out to `wide`. Featured images on hero stories go `full`.

### Layout patterns

- **Article (single post):** vertical stack — kicker (category tag) → headline (`xxx-large`–`xxxxx-large`) → standfirst (`medium`) → byline + meta (`x-small`, `contrast-3`) → featured image (often `wide` or `full`) → article body (constrained to `contentSize`) → tags → related posts → comments → newsletter signup → footer.
- **Section / category archive:** page header with section title + description → list of posts (Homepage Posts block variants, often a 2-up or 3-up grid) → pagination.
- **Homepage:** Homepage Posts blocks composed in a pattern. Featured story full-width or wide; secondary stories in a 2- or 3-column grid; sidebar with newsletter signup and donation block; topical sections beneath.
- **Newsletter signup:** Reader Registration block. Headline, supporting copy, email input, primary CTA. Inline (in articles) or as a section/footer container.
- **Donation page / block:** Donate block with frequency toggle (one-time / monthly / annual), preset amount tiles plus custom amount, primary CTA. Always uses `accent` for primary action.
- **Paywall / registration wall:** Content gate (managed by `Newspack\Content_Gate`) — reader sees a partial article, then a fade and a registration/donation prompt. Uses Modal-style layering on top of article content.
- **Wizard page (admin):** wp-admin shell with `.wrap` page → wizard tabs → wizard sections (cards) → action cards listing settings.

### Responsive behavior

Type and spacing scale via `clamp()`, not breakpoint switches. The Block Theme is fluid by default. Breakpoint switches are reserved for layout topology (sidebar collapses below tablet; multi-column grids reduce columns on mobile; navigation switches to drawer below tablet). Touch targets on the front end stay ≥44px on mobile; admin wizards target 32–40px in line with wp-admin.

## Elevation & Depth

Newspack uses elevation sparingly. Five named levels exist; most surfaces sit at level 0–2.

- **Flat (Level 0):** the default. Articles, list pages, section headers. No shadow; structure comes from spacing and 1px borders.
- **Elevation 1** `0 1px 10px #00000007`: subtle hover hints.
- **Elevation 2** `0 2px 20px #00000014`: standard cards, content panels, the canonical "card" look.
- **Elevation 3** `0 3px 30px #00000021`: dropdown menus, popovers, sticky elements.
- **Elevation 4** `0 0 20px #00000010, 0 25px 30px #00000015`: modals, the maximum elevation.
- **Inset 1 / Inset 2:** `inset 0 0 0 1px` / `inset 0 0 0 2px` for outlined and double-outlined buttons. The token uses `currentcolor` so it tints with text color.

Shadows are neutral (no brand-color tinting). Do not introduce decorative shadows, brand-tinted glow, glassmorphism, neumorphism, or layered marketing-card effects. The reader is here for the article; the container should be quiet.

## Shapes

Border radii are conservative. Rounding ramps from 2px to 16px, but most elements live at 4–8px.

- **0** `0px`: legacy admin tables, comments, and surfaces meant to feel structural.
- **xx-small** `0.125rem` (2px): hairline rounding on chips and small elements where a sharp corner would feel harsh.
- **x-small** `0.1875rem` (3px): small interactive elements.
- **small** `0.25rem` (4px): tags, badges, small containers, default code-block radius.
- **medium** `0.375rem` (6px): the workhorse. Buttons, inputs, standard cards.
- **large** `0.5rem` (8px): featured cards, hero containers, modals.
- **x-large–xxxx-large** `0.625rem`–`1rem`: reserved for unusual containers; rare in standard newsroom layouts.
- **full** `9999px`: avatars, dot indicators, status pills. Do not use on cards or buttons.

Pill-shaped cards and giant consumer-app radii are off-system. Editorial restraint is the rule.

## Components

### Buttons

Block Theme button styles are scoped to `core/button` in `theme.json`:

- **Default (filled):** `accent` background, `base` text, Inter `small` (16px) at weight 600, `medium` (6px) radius, padding `12px 24px`. Text-decoration none. Used for primary CTAs in articles, donation forms, signup forms.
- **Outline variation:** `base` background, `accent` text, 1px `currentcolor` border, same radius and typography. Used for secondary CTAs ("Learn more," "Browse archive").
- **Dark / inverted:** `contrast` background with `base` text, used for alternating-section CTAs in dark zones.

Donation amount tiles use the same button radius and padding but with toggleable selected state filled in `accent`.

Plugin admin uses `@wordpress/components` `Button` with the platform-blue admin color scheme; primary = filled blue, secondary = outlined blue, tertiary = link, isDestructive = red. Wizard `WizardsActionCard` components combine an icon, title, body, and a right-aligned action button.

### Cards and containers

- **Standard card:** `base` background, 1px `base-3` border, `medium` (6px) radius, 24px padding, `elevation-2` shadow, optional hover lift.
- **Flat card:** the same surface without shadow — used in dense lists and in the Classic Theme where shadow is avoided.
- **Pricing / membership card:** `large` (8px) radius, 32px padding, accent-color CTA, `elevation-2`. Used by reader-activation and donation flows.
- **Newsletter signup card:** `base-2` background (alternating-section feel), `medium` radius, 24px padding. The accent color appears only on the submit button.

### Tags, badges, byline meta

- **Category tag:** translucent accent (`rgba(accent, 0.10)`) background, accent-colored text, 12px / weight 500 Inter, 4px radius, 4×12px padding. Used as the kicker above article headlines.
- **Author byline:** `contrast-3` text in `x-small` Inter at weight 600 on hover, no underline.
- **Status pill:** full radius, success/error/warning background-100 with the matching text-600. Used in admin lists and reader-activation status displays.

### Forms

- **Input:** `base` background, 1px `base-3` border, 6px radius, `0.625rem 1rem` padding, 14px Inter (weight 500 for labels, 400 for input text). Focus state: 2px solid `accent` outline.
- **Label:** above the control, `contrast` color, 14px Inter weight 500, 8px below-margin to the control.
- **Helper text:** 12px Inter, `contrast-3`, immediately below the control.
- **Required/invalid states:** include text and an icon, not only color.
- **Reader Activation forms** (registration, login, magic link): use a single-column 380–420px column with stacked label/input pairs, primary action filled in `accent`, secondary "Already have an account?" link below.

### Notices

Use `@wordpress/components` `Notice` in the admin. On the front end, Newspack ships success/error/warning style notices using the corresponding `*-background`, `*-border`, and `contrast` text colors at 6px radius and 16px padding. Place at the top of the relevant area; use sentence-case copy; pair status color with an icon.

### Newsletter, donation, registration blocks

These are the flagship reader-revenue surfaces. Treat them with care:

- **Newsletter Subscription block:** stacked or inline layout. Email input + primary `accent` CTA. Optional "list selection" checkboxes for newsrooms running multiple lists. Confirmation state replaces the form with a success message in `success` color.
- **Donate block:** one-time / monthly / annual frequency toggle, three amount presets + "Other amount" input, primary `accent` CTA. Trust copy ("Tax-deductible", "Your support funds reporting") in `contrast-3` `x-small`.
- **Reader Registration block:** modal or inline. Email-only first step; password optional based on newsroom configuration. Magic-link login is the default. Honor `np_reader` user meta for already-registered states.
- **Memberships / paid content:** member-only badges use `success` accent. Locked-content fade pattern: `linear-gradient(180deg, transparent 0%, base 80%)` over the bottom 200–400px of the article, with the registration/donation CTA centered on top.

### Homepage Posts and listing blocks

The Homepage Posts block (provided by `newspack-blocks`) is the spine of homepage and section-page composition. It exposes layout (list/grid/columns), columns (1–4), post count, image position (top/left/right/none), category and tag filters, sort, and "show subtitle/excerpt/byline/category" toggles. Layouts respect the same content/wide/full alignment system. Use Inter sizes from the theme; do not hard-code font-sizes inside the block.

### Navigation

- **Site header:** sticky on desktop, drawer on mobile. Logo or wordmark left; primary navigation center or center-right; reader-account / search / donate CTAs right. The Newspack default is conservative: black/contrast text, no hover background fill, link underline on hover.
- **Section navigation:** sub-nav under the masthead listing top sections; horizontal scroll on overflow rather than collapse.
- **Footer:** masthead repeat, secondary nav (About, Donate, Contact, Newsletters, Privacy, Accessibility), copyright, optional newsletter signup.

### Comments

Newspack's comments use a custom walker (`Newspack_Walker_Comment`) and respect the theme's typography. Each comment shows avatar, author (linkified to author archive when available), date in `x-small` `contrast-3`, the comment body, and reply/edit links in `x-small`.

## Admin & Wizard Surfaces

Newspack admin lives in wp-admin under top-level "Newspack" menu items. Pages use `.wrap` plus a React-mounted `<div>`. Inside, the modern pattern is:

- **Single entry point:** `src/wizards/index.tsx` lazy-loads views by `?page=` URL param.
- **Composition:** `WizardsTab` (top-level tabs) → `WizardSection` (a card) → `WizardsActionCard` (a row inside the card with title, description, action button, optional toggle).
- **Data:** `useWizardApiFetch(slug)` hook, which reads from `@wordpress/data` store namespace `newspack/wizards`. Wizard data auto-fetches from `/newspack/v1/wizard/{slug}`.

Wizards cover Setup (initial install), Site Design, Reader Activation, Newsletters, Advertising, Audience, Engagement, Site Performance, and Settings. Each wizard's chrome should look identical — the section/card/action-card grammar is what makes Newspack feel like one product instead of a stack of plugins.

## Accessibility

Accessibility is a publishing requirement, not a polish step.

- Maintain WCAG AA contrast at minimum (AAA preferred for body copy). Newspack's default `contrast` (#1E1E1E) on `base` (#FFFFFF) clears AAA; `contrast-3` (#6C6C6C) clears AA. Do not paint body copy in `accent-3` or `base-5`.
- Provide visible focus on every interactive control. The 2px `accent` outline is the platform default; do not remove it without an equivalent.
- Pair color with text or icon for status. Never use color alone.
- Headings must form a sequential outline (h1 → h2 → h3). Article headline is the page's only h1.
- Forms: programmatically associate every label; expose required fields in the accessible name; surface errors in text and via `aria-invalid`.
- Comments and reader-account flows must be operable by keyboard with logical tab order and trap focus only inside modals.
- Honor `prefers-reduced-motion` for the few animated transitions Newspack ships (link underlines, button hover, dropdown reveal).
- The Classic Theme retains AMP-aware code paths (`newspack_is_amp()`); do not regress them, but new front-end work does not need new AMP support.

## Implementation Guidance

### Use the right layer

- **Block Theme work:** edit `theme.json`, the relevant template HTML in `templates/` or part HTML in `parts/`, or a pattern in `patterns/`. Style variations belong in `styles/`. Avoid adding raw CSS unless you've exhausted `theme.json` options.
- **Classic Theme work:** edit SCSS in `newspack-theme/sass/`, register hooks via `functions.php`, and template-file changes go in PHP. Do not introduce `theme.json` to the Classic Theme.
- **Block work:** new blocks live in `newspack-plugin` (most cases) or `newspack-blocks` (homepage/listing/post-related). Do not add new blocks to `newspack-block-theme` (the only exception, the Article Subtitle block, exists because it is tightly coupled to theme post-meta).
- **Admin/wizard work:** prefer the modern wizard pattern (`src/wizards/index.tsx`, `useWizardApiFetch`, `WizardSection` / `WizardsActionCard`) for new code. The legacy `withWizard` HOC in older wizards stays for now but should not grow.
- **Newsletter, donation, popups, ads:** use the dedicated plugin (`newspack-newsletters`, `newspack-blocks` Donate block, `newspack-popups`, `newspack-ads`) rather than reimplementing in core.

### Tokens and CSS

- In Block Theme CSS, prefer `var(--wp--preset--color--accent)`, `var(--wp--preset--font-family--inter)`, `var(--wp--preset--font-size--medium)`, `var(--wp--preset--spacing--40)`, `var(--wp--custom--border--radius-medium)`, `var(--wp--custom--line-height--medium)` over hard-coded values.
- In Classic Theme SCSS, prefer the `--newspack-theme-*` custom properties from `_colors.scss`, `_fonts.scss`, and the structural variable partials.
- In plugin JS/SCSS, `import colors from '../../packages/colors/colors.module.scss'` rather than redefining hex values.
- The Newspack UI scale (`--newspack-ui-font-size-m` … `6xl`) is the right surface for cross-product UI sizing — wizards, popups, donation flows.

### Style variations

- A new Block Theme style variation must define a unique `custom.className`. The theme reads `wp_get_global_settings()['custom']['className']` and adds it as a `theme-variation-{className}` body class for CSS scoping. Without it, scoped styles silently fail to apply.
- Variations override only what they need to. A bare variation is just a palette swap; a richer variation may override block defaults too. Keep contrast and accessibility intact across the swap.

### Localization, RTL, plugins

- Wrap user-facing strings in `__()`, `_n()`, `_x()` from `@wordpress/i18n` with the appropriate text domain (`newspack`, `newspack-block-theme`, `newspack-plugin`, `newspack-newsletters`, etc.).
- Do not bake left/right into layout — use logical CSS properties or the existing RTL build path.
- The Block Theme intentionally blocks Jetpack/Woo/Automattic remote pattern loading. Site features that need those patterns should be re-implemented locally rather than re-enabling external sources.

## Do's and Don'ts

### Do

- Prefer `theme.json` tokens, `@wordpress/components`, and the existing Newspack UI partial before inventing new components or hard-coding values.
- Use `--wp--preset--color--accent` for primary CTAs so the active style variation theming carries through.
- Use the `medium` (6px) radius for buttons/inputs/standard cards and `large` (8px) for featured cards and modals.
- Treat newsletter, donation, registration, and paywall surfaces as first-class — they are how independent newsrooms survive.
- Use sentence case for button labels, settings, and headings; reserve title case for proper nouns and product names.
- Pair color with text or icon for every status communication.
- Constrain article body to `contentSize`; reserve `wide` and `full` for media and pull-quotes.
- Honor the AMP code paths in the Classic Theme — don't break them, but don't extend them in new work.
- Keep shadows neutral and minimal; rely on spacing and 1px borders to express hierarchy.
- Test new style variations against the canonical Default, Foundry, Ledger, and Nocturne palettes — if it breaks in Nocturne (dark base), it has a contrast bug.

### Don't

- Don't introduce display fonts (American Grotesk Compressed, Marr Sans, etc.) into the platform default — those fonts belong to the newspack.com marketing site and are out of scope for this DESIGN.md.
- Don't add new blocks to `newspack-block-theme`; put them in `newspack-plugin` or `newspack-blocks`.
- Don't override `@wordpress/components` defaults to enforce a Newspack look in admin chrome — the platform's blue admin scheme is enough.
- Don't use the secondary green (`#26D07C`) as a generic primary CTA color; it reads as success/membership.
- Don't use full-radius pill shapes on cards or large buttons.
- Don't introduce decorative drop shadows, gradient washes, glass effects, or large consumer-app radii.
- Don't hard-code spacing in pixels when the `--wp--preset--spacing--*` or `--wp--custom--spacing--*` tokens exist.
- Don't widen article body beyond `contentSize` — long-line-length reading defeats the platform's editorial intent.
- Don't bypass the style-variation system to ship a one-off visual treatment for a single newsroom; build a variation instead.
- Don't change the External-pattern block list in `newspack-block-theme` to allow Jetpack / Woo / Automattic remote patterns — that filter is intentional.
- Don't introduce PSR-4 autoloading or namespaces into `newspack-theme` (it doesn't use them); use `classmap` autoloading and `Newspack` namespace conventions in the plugin.
- Don't add feature code to a Classic Theme child theme — child themes are cosmetic-only, and feature work belongs in the base.

## Source Notes

This DESIGN.md was synthesized from public Newspack repositories on `github.com/Automattic`:

- `newspack-block-theme/theme.json` — palette, typography (Inter + JetBrainsMono), spacing scale, custom border-radius/line-height/spacing/width tokens, block style overrides.
- `newspack-block-theme/styles/` — the ten style variations (Default Alt, Arc, Arc Alt, Bulletin, Bulletin Alt, Foundry, Foundry Alt, Ledger, Ledger Alt, Nocturne).
- `newspack-block-theme/AGENTS.md` — block-theme-specific gotchas (style-variation `className` requirement, blocked external patterns, nested-pattern registration, Article Subtitle block dual implementation).
- `newspack-theme/newspack-theme/sass/variables-site/_colors.scss`, `_fonts.scss`, `_newspack-ui.scss` — Classic Theme tokens (Georgia body, system display, 18/20px base, 1.125 ratio scale).
- `newspack-theme/AGENTS.md` — Classic Theme repo layout, child-theme conventions, AMP-legacy notes.
- `newspack-plugin/packages/colors/colors.module.scss` — the platform color tokens (Primary/Secondary/Tertiary/Quaternary/Neutral/Success/Error/Warning) used by admin wizards.
- `newspack-plugin/AGENTS.md` — wizard architecture (modern + legacy), wizard data store, REST API conventions, namespace map.

Plus internal context from Automattic P2s:

- *Bets Design Snaps: Aug 14–25, 2023* — initial Marr Sans experiment for the marketing site.
- *Bets Design Snaps: Sep 22, 2025* — the Joan child theme drawing from the Block Theme + Newspack UI.
- *2025 Year in Design (Designomattic)* — the 2025 Newspack brand refresh and Brand Hub.
- *Newspack Updates* (Thursday Updates, Feb 2026) — agent skills and AI-readable design files being added to Newspack repos.

Treat this file as a living platform design contract. The Block Theme is the forward direction; the Classic Theme remains in maintenance for newsrooms that haven't migrated. Style variations and the Newspack UI shared layer are how the system stays coherent as it evolves. Verify token values against the live `theme.json` and `colors.module.scss` before treating any specific hex or rem as canonical, and re-audit when style variations are added or revised.
