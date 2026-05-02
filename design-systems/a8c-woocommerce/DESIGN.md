# Design System: WooCommerce

## 1. Visual Theme & Atmosphere

WooCommerce's website radiates approachable commerce -- a system that feels simultaneously professional and inviting, technical enough for developers yet warm enough for merchants. The page opens on a clean white canvas (`#ffffff`) with near-black text (`#101517`) and a vibrant purple (`#720eec`) that functions as the primary brand anchor. This isn't a corporate enterprise purple; it's an electric violet that reads as innovative and energetic, rooted in WooCommerce's open-source WordPress heritage.

The typography pairs two typefaces: `Proxima Nova` (loaded as `proxima-vara`) for headlines and display text, and `Inter var` for body copy and UI. Proxima Nova's rounded, geometric letterforms give headlines a warm, approachable character -- friendlier than a pure geometric sans but more polished than a humanist one. At display sizes (44px-68px), Proxima Nova runs with fluid `clamp()` sizing that scales gracefully between mobile and desktop. The site uses a WordPress block-based layout system with generous spacing presets that create a rhythm of breathing room between content sections. This is commerce infrastructure designed to feel like a friendly guide, not a cold dashboard.

What distinguishes WooCommerce visually is its organic "wooble" shapes -- custom SVG masks and illustrations that soften the grid and add playfulness. Combined with a soft purple-to-transparent hero gradient and rounded 16px corners, the overall impression is of a platform that takes commerce seriously without taking itself too seriously.

**Key Characteristics:**
- Proxima Nova (`proxima-vara`) for headlines -- warm, geometric, approachable
- Inter var for body text and UI -- clean, modern, system-friendly
- Fluid typography using CSS `clamp()` for seamless responsive scaling
- Electric purple (`#720eec`) as the defining brand color
- Organic "wooble" shapes as a signature illustrative element
- 16px as the primary border-radius -- generous, friendly rounding
- WordPress block-based layout system with 1500px max-width
- Soft purple hero gradient (`#D1C1FF` to transparent) for depth
- Near-black text (`#101517`) instead of pure black -- subtle warmth
- Fluid spacing scale using `clamp()` from 4px to 128px

## 2. Color Palette & Roles

### Primary Brand
- **Woo Purple 50** (`#720eec`): Primary brand color, key accent, interactive highlights. A vivid electric violet.
- **Woo Purple 60** (`#6108ce`): Darker purple for hover states and emphasis.
- **Woo Purple 40** (`#873eff`): Link color, focus outlines, lighter interactive accent.
- **Woo Purple 100** (`#1f0342`): Deepest purple for dark sections, footer, immersive brand moments.

### Purple Scale
- **Woo Purple 30** (`#a77eff`): Soft purple for decorative elements, secondary accents.
- **Woo Purple 20** (`#b999ff`): Light purple for subtle highlights.
- **Woo Purple 10** (`#d1c1ff`): Tinted surfaces, hero gradient start color.
- **Woo Purple 5** (`#e1d7ff`): Very light purple for card backgrounds, badges.
- **Woo Purple 0** (`#f2edff`): Lightest purple tint for section backgrounds.

### Neutral Scale
- **Woo Text Gray** (`#101517`): Primary body text. Near-black with a cool undertone.
- **Woo Gray 90** (`#1d2327`): Dark UI elements, dark section text.
- **Woo Gray 80** (`#2C3338`): Secondary headings, button hover states.
- **Woo Gray 70** (`#3C434A`): Tertiary text, dark labels.
- **Woo Gray 60** (`#50575E`): Muted text, secondary descriptions.
- **Woo Gray 50** (`#646970`): Placeholder text, disabled states, navigation buttons.
- **Woo Gray 40** (`#787c82`): Borders, dividers, subtle UI.
- **Woo Gray 10** (`#C3C4C7`): Light borders, separator lines.
- **Woo Gray 5** (`#dcdcde`): Subtle borders, table stripes.
- **Woo Gray 0** (`#f6f7f7`): Light background surfaces, section fills.

### Accent Colors
- **Woo Green** (`#73ae39`): Success states, positive indicators, extension badges.
- **Woo Green 40** (`#06e782`): Bright green for highlights and data visualization.
- **Woo Orange 40** (`#ff9000`): Warning, attention, promotional highlights.
- **Woo Orange 20** (`#ffe500`): Bright yellow for decorative accents.
- **Woo Blue Vivid** (`#1AD0FD`): Informational highlights, decorative accents.
- **Woo Blue Light** (`#75FFFF`): Light cyan for decorative gradients.
- **Woo Pink 20** (`#fca8ff`): Decorative pink accent.

### Sandstone Palette
- **Sandstone 5** (`#fbf9f6`): Warm light background alternative.
- **Sandstone 20** (`#e6e2de`): Warm border tone.
- **Sandstone 30** (`#c5c2bf`): Warm muted text.
- **Sandstone 40** (`#8b8a89`): Warm secondary text.
- **Sandstone 80** (`#303030`): Warm dark background.

### Core
- **White** (`#ffffff`): Page background, card surfaces, button text on dark.
- **Black** (`#000000`): Maximum contrast, overlay scrims.

### Interactive States
- **Link Default**: `#873eff` (Woo Purple 40)
- **Focus Ring**: `2px solid #873eff`, `outline-offset: 3px`
- **Hover Scrim**: `rgba(0,0,0,0.7)` for video/media overlays

### Shadow Colors
- **Shadow Standard** (`rgba(0,0,0,0.16)`): Primary shadow color for cards and menus.
- **Shadow Heavy** (`rgba(0,0,0,0.2)`): Natural shadow for elevated elements.
- **Shadow Deep** (`rgba(0,0,0,0.4)`): Maximum depth for modals and popovers.

## 3. Typography Rules

### Font Family
- **Headlines / Display**: `proxima-vara` (Proxima Nova variable), with fallback: `Proxima Fallback, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif`
- **Body / UI**: `Inter var`, with fallback: `Inter Fallback, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | proxima-vara | clamp(44px, 2.75rem + 1.875vw, 68px) | 700 | 1.1 (tight) | -0.5px | Maximum impact, bold headlines |
| Display Large | proxima-vara | clamp(36px, 2.25rem + 1.406vw, 54px) | 700 | 1.15 (tight) | -0.4px | Section hero headlines |
| Section Heading | proxima-vara | clamp(32px, 2rem + 0.313vw, 36px) | 700 | 1.2 (tight) | -0.3px | Feature section titles |
| Sub-heading | proxima-vara | clamp(21px, 1.313rem + 0.234vw, 24px) | 600 | 1.3 | -0.2px | Card headings, sub-sections |
| Body Large | Inter var | clamp(18px, 1.125rem + 0.234vw, 21px) | 400 | 1.5 | normal | Feature descriptions, intro text |
| Body | Inter var | 16px | 400 | 1.5 | normal | Standard reading text |
| Body Small | Inter var | 14px | 400 | 1.5 | normal | Secondary text, metadata |
| Caption | Inter var | 12px | 400 | 1.4 | normal | Labels, fine print |
| Button | Inter var | inherit | 400 | 1.0 | normal | Inherits from parent context |
| Data Counter | proxima-vara | varies | 500 | 1.2 | -2px | Large numerical displays |

### Principles
- **Two-typeface system**: Proxima Nova for headlines creates warmth and personality; Inter for body text ensures crisp readability. The switch happens at the Sub-heading / Body Large boundary.
- **Fluid scaling as signature**: Every heading size uses CSS `clamp()` for seamless responsive behavior. No abrupt breakpoint jumps -- text flows naturally between 320px and 1500px viewports.
- **System-friendly fallbacks**: Both fonts have robust fallback chains ensuring near-identical rendering on any platform.
- **Bold headlines, light body**: Proxima Nova headlines use weight 700 (bold) for display and section headings, 600 (semibold) for sub-headings. Body text stays at 400 (regular) in Inter.
- **Tight tracking at display sizes**: Negative letter-spacing increases proportionally with font size, keeping large headlines dense and engineered.
- **1.5 line-height standard**: Body text uses a generous 1.5 line-height for readability, tightening to 1.1-1.2 for display sizes.

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#32373c`
- Text: `#ffffff`
- Padding: `calc(0.667em + 2px) calc(1.333em + 2px)`
- Radius: 0 (default) or 16px (rounded variant)
- Border: none
- Font: inherit from parent
- Use: Primary CTA ("Get started", "Download")

**Primary Purple**
- Background: `#720eec`
- Text: `#ffffff`
- Padding: `calc(0.667em + 2px) calc(1.333em + 2px)`
- Radius: 16px
- Border: none
- Hover: `#6108ce` background
- Use: Brand CTA, prominent actions

**Navigation Circle Button**
- Background: `#646970`
- Text: `#ffffff`
- Size: 36px (mobile) / 72px (desktop)
- Radius: 100% (circle)
- Padding: 0
- Display: inline-flex, centered
- Hover: `#2c3338` background
- Use: Carousel/slider navigation arrows

**Pill Button**
- Background: varies
- Radius: `9999px`
- Use: Social links, tags, filter toggles

### Cards & Containers
- Background: `#ffffff` or `#f6f7f7`
- Border: none (shadow-based elevation) or `1px solid #dcdcde`
- Radius: 16px (primary), 8px (compact)
- Shadow (standard): `0px 2px 8px rgba(0,0,0,0.16)`
- Shadow (hover): `0px 2px 24px rgba(0,0,0,0.16)`
- Padding: `1.25em 2.375em` (default with background)
- Gap: 24px (default block gap)

### Badges / Tags / Pills
**Social Link Pill**
- Background: `#f0f0f0`
- Text: `#444`
- Radius: `9999px`
- Hover: `transform: scale(1.1)`
- Platform-specific colors (Facebook: `#0866ff`, Twitter: `#1da1f2`)

### Inputs & Forms
- Border: standard system borders
- Focus: `outline: 2px solid #873eff`, `outline-offset: 3px`
- Label: inherits body typography
- Required indicator: visible
- Form layout: `.form-row` block pattern

### Navigation
- Transparent header that transitions on scroll with `background-color 0.4s ease-in-out 0.1s`
- Bottom border: `1px solid rgba(246, 247, 247, 0.6)`
- Links: Inter var, system font size, white text on dark backgrounds
- Sticky with z-index layering
- Mobile: hamburger toggle menu (`wccom-main-menu-open`)

### Tables
- Border collapse: active
- Thead/tfoot: `3px solid` bottom/top borders
- Striped rows: `#f0f0f0` background
- Cell padding: `0.5em`
- Full responsive horizontal scroll on mobile

### Decorative Elements
**Wooble Shapes**
- Custom SVG masks (`wooble-openess`, `wooble-success`, `wooble-build`)
- `-webkit-mask-position: center center`
- `mask-size: contain`
- Used for imagery and section illustrations

**Video/Media Overlays**
- Play button: 85px x 85px SVG overlay
- Scrim: `background: rgba(0, 0, 0, 0.7)`
- Hover scale: `scale: 1.023`
- Custom cursor SVG on hover

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Fluid spacing with `clamp()`:
  - 24px: `clamp(16px, 1rem + 0.962vw, 24px)`
  - 32px: `clamp(24px, 1.5rem + 0.962vw, 32px)`
  - 48px: `clamp(32px, 2rem + 1.923vw, 48px)`
  - 64px: `clamp(48px, 3rem + 1.923vw, 64px)`
  - 96px: `clamp(64px, 4rem + 3.846vw, 96px)`
  - 128px: `clamp(96px, 6rem + 3.846vw, 128px)`

### Grid & Container
- Max content width: 1500px (both content-size and wide-size)
- WordPress block-based flex layout system
- Feature sections: 2-3 column flex grids with `flex-wrap: nowrap` on desktop
- Columns: `flex-grow: 1`, `flex-basis: 0` for equal distribution
- Default block gap: 24px
- Alignment: left, center, right, space-between, and vertical alignment classes

### Whitespace Philosophy
- **Generous and fluid**: Spacing scales proportionally with viewport using `clamp()`. Mobile gets tighter spacing, desktop gets room to breathe.
- **Section rhythm**: Alternating white, light gray (`#f6f7f7`), and purple-tinted (`#f2edff`) sections create visual rhythm without jarring contrast.
- **Content-first breathing room**: Large spacing presets (64px-128px) for section padding, tight spacing (4px-16px) for component internals.

### Border Radius Scale
- Compact (4px): Small UI elements, close buttons
- Standard (8px): Accordions, compact cards, product images
- Comfortable (16px): Primary cards, containers, buttons, hero images
- Full (9999px): Pills, social links, circular buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline content |
| Card (Level 1) | `0px 2px 8px rgba(0,0,0,0.16)` | Standard cards, content panels |
| Card Hover (Level 2) | `0px 2px 24px rgba(0,0,0,0.16)` | Hovered cards, interactive panels |
| Menu (Level 3) | `4px 8px 16px rgba(0,0,0,0.16)` | Dropdown menus, popovers |
| Natural (Level 4) | `6px 6px 9px rgba(0,0,0,0.2)` | Prominent cards, featured content |
| Deep (Level 5) | `12px 12px 50px rgba(0,0,0,0.4)` | Modals, floating panels |
| Sharp (Decorative) | `6px 6px 0px rgba(0,0,0,0.2)` | Playful/editorial shadow effect |
| Outlined (Decorative) | `6px 6px 0px -3px rgb(255,255,255), 6px 6px rgb(0,0,0)` | Outlined retro shadow |
| Crisp (Decorative) | `6px 6px 0px rgb(0,0,0)` | Hard-edge shadow for bold graphics |

**Shadow Philosophy**: WooCommerce uses a neutral shadow system -- all shadows are black-based with varying opacity rather than brand-colored. This keeps the focus on the content and purple accents rather than atmospheric depth. The system includes both practical shadows (card, menu) and decorative ones (sharp, outlined, crisp) that add editorial personality to marketing sections. The hover transition from Level 1 to Level 2 shadow provides clear interactive feedback.

## 7. Do's and Don'ts

### Do
- Use `proxima-vara` (Proxima Nova) for headlines and display text, `Inter var` for body and UI
- Use fluid `clamp()` values for typography and spacing -- let the browser handle responsive scaling
- Use `#720eec` (Woo Purple 50) as the primary brand accent color
- Use `#101517` (near-black) for body text instead of pure `#000000`
- Keep border-radius at 16px for primary containers and cards
- Use `#873eff` (Woo Purple 40) for links and focus outlines
- Use the 4px-based spacing scale consistently
- Apply the hero gradient (`#D1C1FF` to transparent) for top-of-page depth
- Use `9999px` radius for pill-shaped elements only (social links, tags)
- Use `#f6f7f7` or `#f2edff` for alternating section backgrounds

### Don't
- Don't use fixed pixel font sizes for headings -- always use `clamp()` for fluid scaling
- Don't use border-radius larger than 16px on cards (except 9999px pills)
- Don't use brand-colored shadows -- WooCommerce shadows are always neutral black
- Don't use pure black (`#000000`) for body text -- always `#101517`
- Don't skip the purple focus ring (`2px solid #873eff`) on interactive elements
- Don't use light font weights (300-400) for Proxima Nova headings -- 700 (bold) is the standard, 600 for sub-headings
- Don't use sharp corners (0px radius) on primary content containers
- Don't mix the purple scale with the sandstone palette in the same section
- Don't use the decorative shadows (sharp, crisp, outlined) for standard UI -- they're for editorial/marketing moments

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <782px | Single column, stacked layout, reduced spacing |
| Tablet | 782-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1250px | Full layout, multi-column grids |
| Large Desktop | 1250-1500px | Maximum content width, generous margins |
| Extra Large | >1500px | Centered content, capped at 1500px |

### Touch Targets
- Navigation circle buttons: 36px mobile / 72px desktop
- Buttons: comfortable padding via `calc(0.667em + 2px)` vertical
- Focus outlines: `outline-offset: 3px` for clear touch indication
- Social links: `scale(1.1)` on hover for visual feedback

### Collapsing Strategy
- Hero: 68px display -> 44px on mobile via `clamp()` (no breakpoint jump)
- Navigation: horizontal nav -> hamburger toggle at 782px
- Columns: `flex-wrap: nowrap` on desktop -> `flex-wrap: wrap` on mobile (100% width)
- Spacing: 128px section padding -> 96px on mobile via `clamp()`
- Images: separate mobile/desktop image sets (`.with-mobile-image` / `.with-desktop-image`)
- Scrolling marquees: 90s duration desktop -> 60s on mobile
- Tables: horizontal scroll on mobile
- Block gap maintained at 24px across all breakpoints

### Animation Behavior
- Scroll marquees: `translateX` keyframes, 90s desktop / 60s mobile
- Card hover: `scale: 1.023` with `transition: scale 0.25s ease-in-out`
- Navigation: `background-color 0.4s ease-in-out 0.1s` on scroll
- Respects `prefers-reduced-motion` for accessibility

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Woo Purple 50 (`#720eec`)
- CTA Hover: Woo Purple 60 (`#6108ce`)
- Background: White (`#ffffff`)
- Alt Background: Gray 0 (`#f6f7f7`)
- Purple Tint Background: Purple 0 (`#f2edff`)
- Heading text: Text Gray (`#101517`)
- Body text: Text Gray (`#101517`)
- Secondary text: Gray 60 (`#50575E`)
- Muted text: Gray 50 (`#646970`)
- Link: Purple 40 (`#873eff`)
- Border: Gray 5 (`#dcdcde`)
- Dark section: Purple 100 (`#1f0342`)
- Success: Green (`#73ae39`)
- Warning: Orange 40 (`#ff9000`)

### Example Component Prompts
- "Create a hero section on white background with a subtle purple gradient (`linear-gradient(180deg, #D1C1FF 0%, transparent 100%)`). Headline using proxima-vara (Proxima Nova) at clamp(44px, 2.75rem + 1.875vw, 68px), weight 700, line-height 1.1, letter-spacing -0.5px, color #101517. Subtitle at clamp(18px, 1.125rem + 0.234vw, 21px) Inter weight 400, line-height 1.5, color #50575E. Purple CTA button (#720eec, 16px radius, calc(0.667em + 2px) calc(1.333em + 2px) padding, white text)."
- "Design a card: white background, 16px border-radius. Shadow: 0px 2px 8px rgba(0,0,0,0.16). Hover shadow: 0px 2px 24px rgba(0,0,0,0.16). Title at 24px Inter weight 500, color #101517. Body at 16px weight 400, #50575E. 24px gap between elements."
- "Build a navigation bar: transparent background transitioning to white on scroll (0.4s ease-in-out). Inter font, white text (#ffffff) on dark backgrounds. Bottom border: 1px solid rgba(246,247,247,0.6). Hamburger toggle on mobile (<782px)."
- "Create a dark brand section: #1f0342 background, white text. Headline at clamp(36px, 2.25rem + 1.406vw, 54px) Inter weight 400, letter-spacing -0.4px. Body at 16px weight 400, rgba(255,255,255,0.8). Cards inside with 16px radius and subtle white border."
- "Design a product listing with cards in a 3-column flex grid (gap: 24px, max-width: 1500px). Each card: white bg, 16px radius, 0px 2px 8px rgba(0,0,0,0.16) shadow, hover scale 1.023 with 0.25s ease-in-out transition."

### Iteration Guide
1. Use `proxima-vara` (Proxima Nova) for all headlines/display text; `Inter var` for body/UI text
2. Use `clamp()` for all heading sizes -- never fixed pixel values for responsive headings
3. Shadow formula: `0px Y B rgba(0,0,0,opacity)` where Y is 2px standard, B varies (8px resting, 24px hover)
4. Primary text color is `#101517` (near-black), secondary is `#50575E`, muted is `#646970`
5. Border-radius is 16px for cards/containers, 8px for compact elements, 9999px for pills
6. Spacing follows the 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 -- use `clamp()` for 24px+
7. Dark sections use `#1f0342` (deepest purple) -- not black, not gray
8. The purple scale runs from `#f2edff` (lightest) to `#1f0342` (darkest) in 9 steps
9. Focus states always use `outline: 2px solid #873eff` with `outline-offset: 3px`
10. Max content width is 1500px -- wider than most sites, giving a spacious feel
