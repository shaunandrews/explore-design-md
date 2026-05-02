# Design System: Newspack

## 1. Visual Theme & Atmosphere

Newspack is Automattic's publishing platform built specifically for local and independent news organizations, running on WordPress. The design communicates trust, clarity, and journalistic authority -- a clean, content-first aesthetic where the news itself is the hero, not the chrome around it. The site opens on a white canvas (`#ffffff`) with dark near-black text (`#1E1E1E`) and a strong institutional blue (`#003da5`) that serves as the primary brand anchor. This is not the playful blue of a social media platform; it's the deep, authoritative blue of a newspaper masthead -- serious, trustworthy, and civic-minded.

The typography is the system's most distinctive design decision. Headlines use "American Grotesk Compressed" at weight 900 for maximum-impact display text -- a condensed, ultra-bold face that evokes the urgency and density of newspaper front pages. Secondary headings step down to "American Grotesk" at weight 500, providing a more measured authority. Body text uses "Inter Variable", the workhorse sans-serif that prioritizes screen readability at all sizes. This three-font hierarchy -- compressed display, standard grotesque, humanist body -- creates a clear editorial voice that feels both modern and rooted in print journalism tradition.

The overall layout philosophy is WordPress-native, using the block editor's spacing and layout tokens. Containers are generous but not sprawling (max-width 1216px for wide, 800px for content), and the spacing system uses WordPress preset tokens with responsive `clamp()` values. The result is a site that feels like a well-designed newspaper website -- structured, readable, and purposeful.

**Key Characteristics:**
- "American Grotesk Compressed" at weight 900 for display headlines -- newspaper-grade impact
- "American Grotesk" at weight 500 for secondary headings -- measured editorial authority
- "Inter Variable" for body text -- optimized for screen reading at all sizes
- Institutional blue (`#003da5`) as the sole brand accent -- no competing colors
- Green accent (`#26d07c`) reserved for success states and secondary highlights
- WordPress block editor spacing tokens throughout -- native to the CMS
- Conservative border-radius (0.125rem to 0.5rem) -- editorial restraint, no pill shapes
- Clean white backgrounds with minimal decoration -- content-first philosophy
- Subtle elevation system -- shadows are understated, not theatrical

## 2. Color Palette & Roles

### Primary
- **Newspack Blue** (`#003da5`): Primary brand color, CTA backgrounds, link text, interactive highlights. A deep institutional blue that conveys trust and authority.
- **Blue 500** (`#2055b0`): Secondary blue for hover states and interactive feedback.
- **Blue 400** (`#406ebc`): Tertiary blue for lighter interactive elements.
- **Blue 300** (`#6086c7`): Soft blue for backgrounds and tinted surfaces.

### Neutral Scale
- **Contrast** (`#1E1E1E`): Primary text color. Near-black with enough warmth to avoid harshness.
- **Base** (`#ffffff`): Page background, card surfaces, button text on dark backgrounds.
- **Base 2** (`#F0F0F0`): Secondary background for alternating sections and subtle surface distinction.
- **Base 3** (`#DDDDDD`): Borders, dividers, and tertiary surface elements.

### Accent
- **Green** (`#26d07c`): `accent-3`. Success states, secondary highlights, positive indicators.

### WordPress Neutral Tokens
- **Gray 90** (`#1d2327`): Dark text variant, footer backgrounds.
- **Gray 70** (`#3C434A`): Secondary text, labels.
- **Gray 50** (`#646970`): Muted text, captions, metadata.
- **Gray 10** (`#C3C4C7`): Disabled states, light borders.
- **Gray 0** (`#F6F7F7`): Lightest surface, hover tints.

### Surface & Borders
- **Border Default** (`#DDDDDD`): Standard borders for cards, containers, dividers.
- **Border Light** (`#F0F0F0`): Subtle borders for inner elements.
- **Focus Ring**: Uses `currentColor` or `#003da5` for keyboard accessibility.

### Shadow Colors
- **Shadow Subtle** (`rgba(0,0,0,0.08)`): Ambient elevation for cards.
- **Shadow Card** (`0 2px 20px #00000014`): Standard card elevation.
- **Shadow Natural** (`6px 6px 9px rgba(0,0,0,0.2)`): Stronger elevation for dropdowns.
- **Shadow Deep** (`12px 12px 50px rgba(0,0,0,0.4)`): Maximum elevation for modals.

## 3. Typography Rules

### Font Family
- **Display**: `"American Grotesk Compressed"`, with fallback: `"Impact"`, `"Arial Narrow"`, sans-serif
- **Heading**: `"American Grotesk"`, with fallback: `"Helvetica Neue"`, `Arial`, sans-serif
- **Body**: `"Inter Variable"`, with fallback: `"Inter"`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, sans-serif
- **Serif (optional)**: `"Fraunces"` for editorial/decorative use

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | American Grotesk Compressed | var(--wp--preset--font-size--xxx-large) | 900 | 1.05 (tight) | -0.5px | Maximum impact, newspaper-headline energy |
| Display Large | American Grotesk Compressed | var(--wp--preset--font-size--xx-large) | 900 | 1.1 | -0.4px | Secondary hero headlines |
| Section Heading | American Grotesk | clamp(1.5rem, 1.2rem + 1vw, 2.25rem) | 500 | 1.2 | -0.2px | Feature section titles |
| Sub-heading | American Grotesk | clamp(1.25rem, 1rem + 0.5vw, 1.5rem) | 500 | 1.3 | -0.1px | Card headings, sub-sections |
| Body Large | Inter Variable | clamp(1.125rem, 0.929rem + 0.402vw, 1.25rem) | 400 | 1.6 | normal | Feature descriptions, intro text |
| Body | Inter Variable | 1rem (16px) | 400 | 1.6 | normal | Standard reading text |
| Body Small | Inter Variable | 0.875rem (14px) | 400 | 1.5 | normal | Secondary text, metadata |
| Button | Inter Variable | 1rem (16px) | 600 | 1.0 | normal | Button labels |
| Navigation | Inter Variable | 0.875rem (14px) | 600 | 1.0 | normal | Nav links |
| Caption | Inter Variable | 0.75rem (12px) | 400 | 1.4 | normal | Fine print, timestamps |

### Principles
- **Compressed display as signature**: The "American Grotesk Compressed" at weight 900 is the system's most distinctive typographic element. It creates the newspaper-front-page feeling that defines Newspack's editorial identity.
- **Three-tier font hierarchy**: Display (compressed) -> Heading (standard grotesque) -> Body (humanist sans). Each tier has a clear role and never bleeds into the others.
- **WordPress-native sizing**: Font sizes use `--wp--preset--font-size--*` tokens with responsive `clamp()` values, ensuring consistency with the block editor.
- **Weight discipline**: 900 for display only, 500 for headings, 400 for body, 600 for UI elements (buttons, nav). No decorative weight variation.

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#003da5`
- Text: `#ffffff`
- Padding: 0.75rem 1.5rem
- Radius: 0.375rem (6px)
- Font: Inter Variable, 16px, weight 600
- Hover: `color-mix(in srgb, #003da5 80%, black)` (darkened blue)
- Use: Primary CTA ("Get started", "Subscribe")

**Secondary / Outlined**
- Background: transparent
- Text: `#003da5`
- Padding: 0.75rem 1.5rem
- Radius: 0.375rem (6px)
- Border: 2px solid `#003da5`
- Font: Inter Variable, 16px, weight 600
- Hover: background shifts to `rgba(0,61,165,0.08)`
- Use: Secondary actions ("Learn more", "See plans")

**Dark**
- Background: `#1E1E1E`
- Text: `#ffffff`
- Padding: 0.75rem 1.5rem
- Radius: 0.375rem (6px)
- Font: Inter Variable, 16px, weight 600
- Hover: `color-mix(in srgb, #1E1E1E 80%, white)` (slightly lighter)
- Use: Alternate primary actions

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #DDDDDD` (standard) or none with shadow
- Radius: 0.375rem (6px) standard, 0.5rem (8px) for featured
- Shadow: `0 2px 20px #00000014` (standard elevation)
- Hover: shadow intensifies, subtle transform
- Padding: 1.5rem (24px) standard

### Badges / Tags
**Category Tag**
- Background: `rgba(0,61,165,0.1)`
- Text: `#003da5`
- Padding: 4px 12px
- Radius: 0.25rem (4px)
- Font: Inter Variable, 12px, weight 500

**Success Tag**
- Background: `rgba(38,208,124,0.15)`
- Text: `#1a8f5c`
- Padding: 4px 12px
- Radius: 0.25rem (4px)

### Inputs & Forms
- Border: `1px solid #DDDDDD`
- Radius: 0.375rem (6px)
- Focus: `2px solid #003da5` outline
- Label: `#1E1E1E`, Inter Variable 14px weight 500
- Text: `#1E1E1E`
- Placeholder: `#646970`
- Padding: 0.625rem 1rem

### Navigation
- Clean horizontal nav on white, sticky
- Brand logotype/wordmark left-aligned
- Links: Inter Variable 14px weight 600, `#1E1E1E` text
- Gap: 1.5rem between links
- CTA: blue button right-aligned ("Get started")
- Mobile: drawer menu with column layout
- Submenu: min-width `max-content`

## 5. Layout Principles

### Spacing System (WordPress Tokens)
- `--wp--preset--spacing--20`: 0.5rem (8px)
- `--wp--preset--spacing--30`: 1rem (16px)
- `--wp--preset--spacing--40`: 1.5rem (24px)
- `--wp--preset--spacing--50`: 2rem (32px)
- `--wp--preset--spacing--60`: clamp(1.5rem, 0.429rem + 2.19vw, 2.5rem)
- `--wp--preset--spacing--70`: clamp(1.75rem, -0.356rem + 4.309vw, 3rem)
- `--wp--preset--spacing--80`: clamp(2rem, -1.141rem + 6.426vw, 4rem)

### Grid & Container
- Content max-width: 800px (article/reading width)
- Wide max-width: 1216px (full layout width)
- Default flex gap: `--wp--preset--spacing--50` (2rem)
- Navigation gap: `--wp--preset--spacing--40` (1.5rem)

### Whitespace Philosophy
- **Content-first spacing**: Generous vertical rhythm between sections to let articles breathe. The journalism context demands high readability.
- **WordPress-native layout**: All spacing derives from WordPress block editor tokens, ensuring the marketing site and the CMS product speak the same visual language.
- **Section alternation**: White sections alternate with light gray (`#F0F0F0`) backgrounds for visual rhythm without introducing arbitrary color.
- **Compressed density in data**: Feature grids and pricing cards use tighter internal spacing, while hero/editorial sections use generous whitespace.

### Border Radius Scale
- XX-Small (0.125rem / 2px): Fine elements, subtle rounding
- X-Small (0.1875rem / 3px): Small interactive elements
- Small (0.25rem / 4px): Tags, badges, small containers
- Medium (0.375rem / 6px): Buttons, inputs, cards -- the workhorse
- Large (0.5rem / 8px): Featured cards, hero elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional 1px border | Page background, inline content |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Subtle card lift, hover hints |
| Card (Level 2) | `0 2px 20px #00000014` | Standard cards, content panels |
| Natural (Level 3) | `6px 6px 9px rgba(0,0,0,0.2)` | Dropdowns, popovers, menus |
| Deep (Level 4) | `12px 12px 50px rgba(0,0,0,0.4)` | Modals, dialog overlays |
| Focus (Accessibility) | `2px solid #003da5` outline | Keyboard focus ring |

**Shadow Philosophy**: Newspack's elevation system is deliberately restrained. Unlike design-forward products that use shadows as decorative elements, Newspack uses shadows purely for functional hierarchy. The shadows are neutral (no brand-color tinting) because the content -- news articles, testimonials, product screenshots -- should be the visual focus, not the containers. The progression from subtle to deep is conservative, with most elements living at Level 0-2.

## 7. Do's and Don'ts

### Do
- Use "American Grotesk Compressed" at weight 900 for display headlines -- this is the editorial signature
- Use "Inter Variable" for all body text and UI elements -- readability is paramount
- Apply `#003da5` (institutional blue) as the sole brand accent color
- Keep border-radius between 0.125rem and 0.5rem -- editorial restraint
- Use WordPress spacing tokens for all layout spacing
- Use `#1E1E1E` for text instead of pure `#000000` -- slightly warmer, easier on the eyes
- Keep shadows neutral and functional -- they serve hierarchy, not decoration
- Use the green (`#26d07c`) only for success states, not as a second brand color

### Don't
- Don't use the compressed display font for body text -- it's headline-only
- Don't use large border-radius (12px+, pill shapes) on cards or buttons -- Newspack is editorially conservative
- Don't introduce additional brand colors -- the blue is the single accent
- Don't use decorative shadows or brand-colored shadows -- keep elevation neutral
- Don't skip the three-tier font hierarchy (compressed -> grotesque -> body) -- each has its role
- Don't use weight 900 outside of display headlines -- it's reserved for maximum impact
- Don't override WordPress spacing tokens with arbitrary pixel values -- stay native
- Don't add heavy gradients or decorative backgrounds -- the content is the hero

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, reduced heading sizes, stacked cards |
| Tablet | 600-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1216px | Full layout, 3-column feature grids |
| Large Desktop | >1216px | Centered content with generous margins |

### Touch Targets
- Buttons use comfortable padding (0.75rem vertical, 1.5rem horizontal)
- Navigation links at 14px with 1.5rem spacing
- Tags have 4px 12px padding for adequate tap targets
- Mobile nav uses full-width drawer for easy thumb access

### Collapsing Strategy
- Hero: `--wp--preset--font-size--xxx-large` scales down via `clamp()` automatically
- Navigation: horizontal links -> mobile drawer with column layout
- Feature cards: 3-column -> 2-column -> single column stacked
- Content width: 1216px wide -> 800px content -> full-width with padding on mobile
- Spacing: `clamp()` values in spacing tokens handle progressive reduction
- Typography scale compresses via WordPress font-size presets

### Image Behavior
- Product screenshots maintain consistent border-radius at all sizes
- Testimonial/case-study images scale proportionally
- Hero images may shift from side-by-side to stacked on mobile
- Logo grid collapses from multi-row to fewer columns

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Newspack Blue (`#003da5`)
- CTA Hover: Blue 500 (`#2055b0`) or darkened via `color-mix()`
- Background: White (`#ffffff`)
- Heading text: Contrast (`#1E1E1E`)
- Body text: Contrast (`#1E1E1E`) or Gray 50 (`#646970`) for secondary
- Border: Base 3 (`#DDDDDD`)
- Link: Newspack Blue (`#003da5`)
- Alt section bg: Base 2 (`#F0F0F0`)
- Success accent: Green (`#26d07c`)

### Example Component Prompts
- "Create a hero section on white background. Headline using American Grotesk Compressed at weight 900, responsive size via clamp(), line-height 1.05, letter-spacing -0.5px, color #1E1E1E. Subtitle at Inter Variable 18px weight 400, line-height 1.6, color #646970. Blue CTA button (#003da5, 0.375rem radius, 0.75rem 1.5rem padding, white text, Inter 600) and outlined button (transparent, 2px solid #003da5, #003da5 text)."
- "Design a card: white background, 1px solid #DDDDDD border, 0.375rem radius. Shadow: 0 2px 20px #00000014. Title using American Grotesk at 500 weight, 1.25rem, color #1E1E1E. Body at Inter Variable 16px weight 400, #646970."
- "Build a category badge: rgba(0,61,165,0.1) background, #003da5 text, 0.25rem radius, 4px 12px padding, Inter Variable 12px weight 500."
- "Create navigation: white sticky header. Inter Variable 14px weight 600 for links, #1E1E1E text. Blue CTA 'Get started' right-aligned (#003da5 bg, white text, 0.375rem radius). 1.5rem gap between nav links."
- "Design an alternating section: #F0F0F0 background, #1E1E1E text. Section title using American Grotesk at weight 500, responsive clamp() sizing, letter-spacing -0.2px. Body at Inter Variable 16px, #646970. Cards inside use white background with 0 2px 20px #00000014 shadow."

### Iteration Guide
1. Display headlines always use "American Grotesk Compressed" at weight 900 -- this is the newspaper DNA
2. All other headings use "American Grotesk" at weight 500 -- editorial authority without compression
3. Body and UI text use "Inter Variable" -- optimized for screen readability
4. Shadow formula is simple: `0 2px 20px #00000014` for cards, neutral gray always
5. The single brand color is `#003da5` -- all interactive elements, links, and CTAs use this
6. Border-radius stays in the 2px-8px range -- never use pill shapes or large rounding
7. WordPress spacing tokens are the source of truth for layout
8. Dark sections use `#1E1E1E` or `#1d2327` -- not pure black
