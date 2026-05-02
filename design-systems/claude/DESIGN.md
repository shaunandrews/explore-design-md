# Design System: Claude

## Overview

Claude.com is the warmest, most editorial interface in the AI-product category. The base atmosphere is a tinted cream canvas (`{colors.canvas}` - `#faf9f5`) - distinctly warm, deliberately not the cool gray-white that every other AI brand uses. Headlines run a slab-serif display face, Copernicus or Tiempos Headline, at weight 400 with negative letter-spacing, paired with StyreneB / Inter body sans. The combination feels like a literary publication, not a SaaS marketing page.

Brand voltage comes from the cream plus coral pairing. Coral (`{colors.primary}` - `#cc785c`) is the signature Anthropic accent, used on every primary CTA, on the brand wordmark, and on full-bleed callout cards. The coral is warm, slightly muted, and never cyan or blue. It deliberately counter-positions against cool slate, saturated blue, and corporate cyan AI-brand defaults.

The system has three surface modes that alternate page-by-page:

1. **Cream canvas** (`{colors.canvas}` - `#faf9f5`): default body floor.
2. **Light cream cards** (`{colors.surface-card}` - `#efe9de`): feature card backgrounds.
3. **Dark navy product surfaces** (`{colors.surface-dark}` - `#181715`): code editor mockups, model showcase cards, pre-footer CTAs, and footer.

The dark surfaces are where Claude shows product chrome: code blocks, terminal output, model comparison tables, and agentic-flow diagrams. The cream-to-dark contrast is the page's pacing rhythm.

**Key Characteristics:**

- Warm cream canvas (`{colors.canvas}` - `#faf9f5`) with dark warm-ink text (`{colors.ink}` - `#141413`). This is the brand's defining color choice.
- Coral primary CTA (`{colors.primary}` - `#cc785c`). Use scarcely on individual buttons and generously on full-bleed coral callout cards.
- Slab-serif display headlines via Copernicus / Tiempos Headline at weight 400 with negative letter-spacing. Pair with humanist sans body for a literary editorial voice.
- Dark navy product mockup cards (`{colors.surface-dark}` - `#181715`) carry code blocks, terminal panels, model comparison data, and product chrome at scale.
- Light cream feature cards (`{colors.surface-card}` - `#efe9de`) are slightly darker than canvas and used for content-driven feature explanations.
- Anthropic radial-spike mark, a small black asterisk-like 4-spoke glyph, appears as the brand wordmark prefix and as a content marker.
- Border radius is hierarchical: `{rounded.md}` 8px for buttons and inputs, `{rounded.lg}` 12px for content and product cards, `{rounded.xl}` 16px for hero illustration containers, and `{rounded.pill}` for badges.
- Section rhythm uses `{spacing.section}` (96px). Internal card padding stays generous at `{spacing.xl}` (32px).

## Colors

### Brand & Accent

- **Coral / Primary** (`{colors.primary}` - `#cc785c`): Signature Anthropic warm coral. Use on primary CTA backgrounds, full-bleed coral callout cards, and brand wordmark accents.
- **Coral Active** (`{colors.primary-active}` - `#a9583e`): Press / hover-darker variant.
- **Coral Disabled** (`{colors.primary-disabled}` - `#e6dfd8`): Desaturated cream-tinted disabled state.
- **Accent Teal** (`{colors.accent-teal}` - `#5db8a6`): Use sparingly on secondary product surfaces such as terminal status indicators and active connection dots.
- **Accent Amber** (`{colors.accent-amber}` - `#e8a55a`): Small companion warm tone for category badges and inline highlights.

### Surface

- **Canvas** (`{colors.canvas}` - `#faf9f5`): Default page floor. Tinted cream, warm, deliberately not pure white.
- **Surface Soft** (`{colors.surface-soft}` - `#f5f0e8`): Section dividers and very-soft band backgrounds.
- **Surface Card** (`{colors.surface-card}` - `#efe9de`): Feature cards and content cards. One step darker than canvas.
- **Surface Cream Strong** (`{colors.surface-cream-strong}` - `#e8e0d2`): Selected category tabs and emphasized section bands.
- **Surface Dark** (`{colors.surface-dark}` - `#181715`): Code editor mockups, model showcase cards, and footer.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` - `#252320`): Elevated cards inside dark bands.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` - `#1f1e1b`): Code block backgrounds inside larger dark cards.
- **Hairline** (`{colors.hairline}` - `#e6dfd8`): 1px border tone on cream surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` - `#ebe6df`): Barely visible divider inside the same band.

### Text

- **Ink** (`{colors.ink}` - `#141413`): Headlines and primary text. Warm dark, slightly off pure black.
- **Body Strong** (`{colors.body-strong}` - `#252523`): Emphasized paragraphs and lead text.
- **Body** (`{colors.body}` - `#3d3d3a`): Default running text.
- **Muted** (`{colors.muted}` - `#6c6a64`): Sub-headings, breadcrumbs, and secondary text.
- **Muted Soft** (`{colors.muted-soft}` - `#8e8b82`): Captions, fine print, copyright lines.
- **On Primary** (`{colors.on-primary}` - `#ffffff`): Text on coral buttons.
- **On Dark** (`{colors.on-dark}` - `#faf9f5`): Cream-tinted white used on dark surfaces.
- **On Dark Soft** (`{colors.on-dark-soft}` - `#a09d96`): Footer body text and secondary labels in dark mockups.

### Semantic

- **Success** (`{colors.success}` - `#5db872`): Green status dots and available indicators.
- **Warning** (`{colors.warning}` - `#d4a017`): Warning callouts, rare on marketing surfaces.
- **Error** (`{colors.error}` - `#c64545`): Validation errors.

## Typography

### Font Family

Use Copernicus, or Tiempos Headline as substitute, as the slab-serif display face for headlines. Use StyreneB, or Inter as substitute, as the humanist sans for body, navigation, and UI labels. Use JetBrains Mono for code blocks. The fallback stack is:

- Display: `Tiempos Headline, Garamond, "Times New Roman", serif`
- Body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Code: `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`

The display/body split is editorial:

- Copernicus serif, weight 400, negative tracking: h1, h2, h3, hero display.
- StyreneB sans, weight 400-500: body, navigation, buttons, captions, labels.
- JetBrains Mono: code blocks and terminal text.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.display-xl}` | 64px | 400 | 1.05 | -1.5px | Homepage h1, Copernicus serif |
| `{typography.display-lg}` | 48px | 400 | 1.1 | -1px | Section heads |
| `{typography.display-md}` | 36px | 400 | 1.15 | -0.5px | Sub-section heads, model names |
| `{typography.display-sm}` | 28px | 400 | 1.2 | -0.3px | Pricing tier names, callout headlines |
| `{typography.title-lg}` | 22px | 500 | 1.3 | 0 | Pricing plan labels |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | Connector tile titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 12px | 500 | 1.4 | 1.5px | Category tags, NEW badges |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Code blocks |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles

Display sizes use weight 400, never bold. Negative letter-spacing from -0.3px to -1.5px is essential. Copernicus without tight tracking reads off-brand. The serif character gives Anthropic its literary, considered voice. Switching to sans-serif display makes Claude feel like every other AI tool.

Body type stays at weight 400 for paragraphs and weight 500 for labels or emphasized phrases. The sans body is humanist, never geometric. Inter is an acceptable substitute. Helvetica or Arial are too neutral and break the warm editorial feel.

### Note on Font Substitutes

If Copernicus / Tiempos Headline is unavailable, Cormorant Garamond at weight 500 with -0.02em letter-spacing is the closest open-source approximation. EB Garamond is a fallback. For StyreneB, Inter is the closest match.

## Layout

### Spacing System

- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px, `{spacing.xs}` 8px, `{spacing.sm}` 12px, `{spacing.md}` 16px, `{spacing.lg}` 24px, `{spacing.xl}` 32px, `{spacing.xxl}` 48px, `{spacing.section}` 96px.
- **Section padding:** 96px, modern SaaS rhythm.
- **Card internal padding:** 32px for feature cards, pricing cards, and model comparison cards; 24px for code-window cards and connector tiles.
- **Callout / CTA bands:** 48px inside coral callout cards; 64px inside larger dark CTA bands.

### Grid & Container

- **Max content width:** about 1200px centered.
- **Editorial body:** Single 12-column grid; hero often uses a 6/6 split.
- **Feature card grids:** 3-up desktop, 2-up tablet, 1-up mobile.
- **Connector tile grids:** 4-up or 6-up desktop, 2-up tablet, 1-up mobile.
- **Pricing grid:** 3-up desktop, 1-up mobile.

### Whitespace Philosophy

The cream canvas, serif display, and generous padding create editorial pacing. Claude reads like a long-form magazine column rather than a marketing template. Whitespace between bands stays uniform at 96px, while cards use generous 32px padding.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, sub-nav, occasional cards |
| Cream card | `{colors.surface-card}` background, no shadow | Feature cards, content cards |
| Dark surface card | `{colors.surface-dark}` background, no shadow | Code editor mockups, model showcase cards |
| Subtle drop shadow | `0 1px 3px rgba(20,20,19,0.08)` | Rare hover-elevated states |

The elevation philosophy is color-block first, shadow rare. Most depth comes from cream-vs-dark surface contrast. The dark mockups have internal product chrome, such as code editor scrollbars, line numbers, syntax highlighting, and status bars.

### Decorative Depth

- The Anthropic spike-mark glyph appears as a small black mark in the brand wordmark and inline as a content marker.
- Code editor mockups carry internal depth through syntax highlighting, line numbers, and status bars.
- Hero illustrations use simple line art with coral and dark-navy strokes on cream. Never use photorealistic AI imagery as the default Claude brand artifact.

## Shapes

| Token | Value | Use |
|---|---:|---|
| `{rounded.xs}` | 4px | Badge accents and tiny dropdowns |
| `{rounded.sm}` | 6px | Small inline buttons, dropdown items |
| `{rounded.md}` | 8px | CTA buttons, text inputs, category tabs |
| `{rounded.lg}` | 12px | Content cards, pricing cards, code windows |
| `{rounded.xl}` | 16px | Hero illustration containers and marquee components |
| `{rounded.pill}` | 9999px | Badge pills, NEW tags |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons |

## Components

### Top Navigation

**`top-nav`**: Cream nav bar, 64px tall, `{colors.canvas}` background. Carries the Anthropic spike-mark plus Claude wordmark at left, menu items center-left, and right-side actions. Menu items use `{typography.nav-link}`. Primary nav CTA is "Try Claude" with `{component.button-primary}`.

### Buttons

**`button-primary`**: Coral CTA. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 12px x 20px, height 40px, rounded `{rounded.md}`. Active state darkens to `{colors.primary-active}`.

**`button-secondary`**: Cream button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline border, same height and radius as primary.

**`button-secondary-on-dark`**: Used over dark cards. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`.

**`button-text-link`**: Inline text button, no background.

**`button-icon-circular`**: 36px circular icon button with canvas background, hairline border, and ink icon.

**`text-link`**: Inline body links in coral. Underlined on press.

### Cards & Containers

**`hero-band`**: Cream hero using a 6/6 grid: h1, sub-headline, and button row on left; hero illustration card or product mockup on right. Vertical padding 96px.

**`hero-illustration-card`**: Large right-side artifact. Can be a coral-stroke line illustration on cream or a dark code editor mockup. Rounded `{rounded.xl}`.

**`feature-card`**: 3-up feature grid card. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.xl}`. Includes small icon, title, and body text.

**`product-mockup-card-dark`**: Dark navy card showing actual Claude product chrome. Background `{colors.surface-dark}`, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`code-window-card`**: Specialized dark card showing code editor or terminal output. Background `{colors.surface-dark}`, inner code block uses `{colors.surface-dark-soft}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Code uses JetBrains Mono.

**`model-comparison-card`**: Canvas card with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}`. Carries model name, capability blurb, and text link.

**`pricing-tier-card`**: Canvas card with hairline border, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`pricing-tier-card-featured`**: Featured tier. Background flips to `{colors.surface-dark}` and text inverts to `{colors.on-dark}`.

**`callout-card-coral`**: Full-bleed coral CTA card. Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.lg}`, padding `{spacing.xxl}`.

**`connector-tile`**: Canvas card with hairline border, rounded `{rounded.lg}`, padding 20px.

### Inputs & Forms

**`text-input`**: Canvas background, ink text, `{typography.body-md}`, rounded `{rounded.md}`, padding 10px x 14px, height 40px, 1px hairline border.

**`text-input-focused`**: Border shifts to coral and carries a 3px coral-at-15%-alpha outer ring.

**`cookie-consent-card`**: Bottom-right floating dark cookie banner. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding `{spacing.lg}`.

### Tags / Badges

**`badge-pill`**: Small pill label. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px x 12px.

**`badge-coral`**: Coral-fill badge for NEW, BETA, and featured highlights. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`, padding 4px x 12px.

### Tab / Filter

**`category-tab`** and **`category-tab-active`**: Inactive is transparent with muted text. Active uses `{colors.surface-card}` background and ink text. Padding 8px x 14px, rounded `{rounded.md}`.

### CTA / Footer

**`cta-band-coral`**: Pre-footer "Try Claude" CTA card. Full-width coral fill, white type, rounded `{rounded.lg}`, padding 64px. H2 uses serif display.

**`cta-band-dark`**: Alternative developer CTA. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`, padding 64px.

**`footer`**: Dark navy footer. Background `{colors.surface-dark}`, text `{colors.on-dark-soft}`. 4-column link list at desktop, vertical padding 64px. Wordmark uses `{colors.on-dark}`.

## Do's and Don'ts

### Do

- Anchor every page on the cream canvas. Pure white reads as any other AI tool.
- Use Copernicus serif for every display headline. Pair with StyreneB sans body. Negative letter-spacing on display sizes is non-negotiable.
- Reserve coral for primary CTAs and full-bleed coral callout moments.
- Use dark product mockup cards and code-window cards to show actual Claude product chrome.
- Pair cream feature cards with dark product mockups in alternating bands.
- Use the Anthropic spike-mark glyph as the brand wordmark prefix.
- Apply 96px between major bands.

### Don't

- Do not use cool grays or pure white for canvas.
- Do not bold serif display weight. Copernicus at 700 reads as bombastic.
- Do not use cool blue or saturated cyan as a brand accent.
- Do not put coral everywhere.
- Do not use Inter for display headlines.
- Do not repeat the same surface mode in two consecutive bands. Alternate cream, cream-card, dark-mockup, cream, coral-callout, dark-footer.
- Do not add hover styling beyond encoded states.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---:|---|
| Mobile | <768px | Hamburger nav; hero h1 64px to 32px; hero card stacks below content; feature grids 1-up; connector tiles 2-up; pricing 1-up; footer 1 column |
| Tablet | 768-1024px | Top nav stays horizontal but tightens; feature cards 2-up; connector tiles 3-up; pricing 2-up |
| Desktop | 1024-1440px | Full top nav; 3-up features; 4-up or 6-up connectors; 3-up pricing |
| Wide | >1440px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets

- Primary buttons at minimum 40px x 40px.
- Circular icon buttons are 36px x 36px.
- Text input height is 40px.
- Connector tile whole card area is tappable.

### Collapsing Strategy

- Top nav collapses to a full-screen cream sheet below 768px.
- Hero 6/6 grid collapses to single-column on mobile.
- Feature grids reduce columns instead of scaling cards down.
- Pricing tier cards collapse 4 -> 2 -> 1.
- Code-window cards retain legibility with horizontal scroll instead of wrapping code lines.

### Image Behavior

- Code blocks inside dark mockups stay fixed-size and horizontally scroll on mobile.
- Hero illustrations scale proportionally.
- Avatar photos crop to circles at every breakpoint.

## Iteration Guide

1. Focus on one component at a time. Reference its token key, such as `{component.feature-card}` or `{component.code-window-card}`.
2. Variants of an existing component live as separate entries.
3. Use `{token.refs}` everywhere. Avoid inline hex in implementation when a token exists.
4. Never document hover. Default and active/pressed states only.
5. Display headlines stay Copernicus serif 400 with negative tracking. Body stays StyreneB / Inter 400.
6. Cream plus coral plus dark navy is the trinity. Do not introduce a fourth surface tone.
7. When in doubt about emphasis, use bigger Copernicus serif before bolder weight.

## Known Gaps

- Copernicus and StyreneB are licensed Anthropic typefaces and not available as public web fonts. Substitutes are documented above.
- The Anthropic radial spike mark is an inline SVG logo asset, not a formal system token here.
- Animation and transition timings are not in scope.
- Form validation states beyond focused inputs are not extracted.
- The actual Claude product surface adds product-specific components that are out of scope for this marketing-surface document.
- Static screenshots do not fully capture animated agent / computer-use demo cards.
