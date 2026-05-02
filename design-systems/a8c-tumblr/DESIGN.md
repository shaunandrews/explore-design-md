# Design System: Tumblr

## 1. Visual Theme & Atmosphere

Tumblr's design system is expressive, creative, and countercultural -- a platform that wears its personality proudly. The interface is anchored by a deep navy chrome (`#001935`) that wraps the entire navigation and sidebar experience, creating a dark, immersive frame around a rainbow of accent colors. This isn't the safe, neutral chrome of most social platforms; it's a deliberate statement that the UI itself is part of the creative expression.

The signature move is Tumblr's multi-color accent system. Where most platforms pick one brand color and stick with it, Tumblr offers a full spectrum -- Brand Blue (`#00b8ff`), Purple (`#7c5cff`), Pink (`#ff61ce`), Red (`#ff4930`), Orange (`#ff8a00`), Yellow (`#e8d73a`), and Green (`#01cf35`). Each color comes with hover and pressed states, plus `.1`, `.2`, `.3` opacity tint variants for backgrounds and badges. This rainbow vocabulary supports Tumblr's core identity: a place where self-expression isn't constrained by a monochromatic brand guideline.

The custom `Favorit` typeface (with its `Favorit Modern` variant) is a geometric, slightly quirky sans-serif that avoids the corporate feel of system fonts. It's paired with standard fallbacks (`Helvetica Neue`, `Arial`) but the primary font carries a distinctive voice -- clean but not sterile, modern but not cold. The typography works in service of content: post cards are the atomic unit of the interface, presented on white (light) or dark (`#1a1a1a`) backgrounds with subtle borders and a tight `3px` border-radius that feels precise without being sharp.

**Key Characteristics:**
- Deep navy chrome (`#001935`) as the persistent navigation frame -- dark, immersive, countercultural
- Rainbow accent palette: Blue, Purple, Pink, Red, Orange, Yellow, Green -- each with hover/pressed/tint variants
- `Favorit` / `Favorit Modern` as the brand typeface -- geometric, distinctive, non-corporate
- Post cards as the central UI element: white/dark backgrounds, subtle borders, `3px` radius
- Dark mode via `prefers-color-scheme: dark` with `#1a1a1a` surfaces replacing white
- Circle and square avatars at sizes from 64px to 512px
- Tags/pills with tinted brand color backgrounds

## 2. Color Palette & Roles

### Primary Chrome
- **Navy Chrome** (`#001935` / `rgb(0, 25, 53)`): Primary navigation and sidebar background. The defining surface color of the Tumblr experience.
- **Chrome Panel** (`#0d243f`): Secondary chrome surface for panels, dropdowns, and nested navigation elements. Dark mode: `#1a1a1a`.
- **Chrome Secondary Text** (`rgba(153, 163, 174, 1)` / `#99a3ae`): Subdued text on chrome surfaces -- labels, timestamps, secondary nav items. Dark mode: `#999999`.
- **Chrome Tertiary Text** (`rgba(102, 117, 134, 1)` / `#667586`): Even more subdued text -- disabled states, placeholder text on chrome. Dark mode: `#666666`.

### Brand Accent Colors
- **Brand Blue** (`#00b8ff` / `rgba(0, 184, 255, 1)`): Primary interactive color -- links, CTAs, follow buttons, active states. Hover: `#33c6ff`. Pressed: `#66d4ff`.
- **Purple** (`#7c5cff`): Secondary accent, education states, creative tools. Hover: `#967dff`.
- **Pink** (`#ff61ce`): Expressive accent for likes, hearts, special interactions. Hover: `#ff81d8`.
- **Red** (`#ff4930`): Danger, destructive actions, error states. Hover: `#ff6d59`.
- **Orange** (`#ff8a00`): Warnings, attention-grabbing accents. Hover: `#ffa133`.
- **Yellow** (`#e8d73a`): Highlights, star ratings, special badges. Hover: `#eddf61`.
- **Green** (`#01cf35`): Success states, confirmations, positive actions. Hover: `#34d95d`.

### Tint Variants
All brand colors have opacity tint variants for use as tag/pill backgrounds and subtle highlights:
- `.1` opacity (10%) -- lightest tint for backgrounds
- `.2` opacity (20%) -- medium tint for tags and badges
- `.3` opacity (30%) -- stronger tint for hover states on tinted elements

### Content Surfaces
- **Content Light** (`#ffffff`): Post card backgrounds, content areas in light mode.
- **Content Dark** (`#1a1a1a`): Post card backgrounds and content areas in dark mode.
- **Pure White** (`#ffffff`): Text on dark chrome and dark mode surfaces.

### Education State
- Same as Purple (`#7c5cff`) -- used for onboarding, tutorials, and first-run experiences.

## 3. Typography Rules

### Font Family
- **Primary**: `"Favorit", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif`
- **Modern Variant**: `"Favorit Modern", "Helvetica Neue", "HelveticaNeue", Helvetica, Arial, sans-serif`
- Both are commercial fonts (license required from Dinamo foundry)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Favorit | 32-48px | 700 | 1.1 | Blog titles, hero headings |
| Section Heading | Favorit | 24-28px | 700 | 1.2 | Section titles, modal headings |
| Sub-heading | Favorit | 18-21px | 600 | 1.3 | Card titles, sub-sections |
| Body Large | Favorit | 16-18px | 400 | 1.5 | Post text, descriptions |
| Body | Favorit | 14-15px | 400 | 1.5 | Standard reading text |
| Body Small | Favorit | 13px | 400 | 1.4 | Secondary descriptions |
| Caption | Favorit | 12px | 400 | 1.4 | Timestamps, note counts |
| Button | Favorit | 14-16px | 600 | 1.0 | Button labels |
| Tag | Favorit | 12-13px | 500 | 1.0 | Tag pills, filter labels |
| Nav Link | Favorit | 14px | 400-500 | 1.0 | Chrome navigation items |

### Principles
- **Favorit carries the brand voice**: The geometric quirks of Favorit distinguish Tumblr from platforms using system fonts or generic sans-serifs. It feels crafted and intentional.
- **Content-first sizing**: Typography sizes are moderate -- Tumblr doesn't use massive display type because the content (posts, images, GIFs) is the hero, not the chrome.
- **Weight restraint**: Bold (700) is reserved for headings. Body text stays at 400. Buttons and nav use 500-600. No ultra-light or ultra-heavy weights.

## 4. Component Stylings

### Buttons

**Primary (Brand Blue)**
- Background: `#00b8ff`
- Text: `#ffffff`
- Padding: 8px 16px (estimated)
- Radius: `3px`
- Font: Favorit 14-16px weight 600
- Hover: `#33c6ff` background
- Pressed: `#66d4ff` background
- Use: Follow, post, primary CTAs

**Danger (Red)**
- Background: `#ff4930`
- Text: `#ffffff`
- Radius: `3px`
- Hover: `#ff6d59` background
- Use: Delete, unfollow, destructive actions

**Ghost / Chrome**
- Background: transparent or `rgba(255,255,255,0.1)`
- Text: `#ffffff` (on chrome)
- Radius: `3px`
- Border: `1px solid rgba(255,255,255,0.2)`
- Use: Secondary actions on dark chrome

### Post Cards
- Background: `#ffffff` (light), `#1a1a1a` (dark)
- Border: subtle, low-opacity border
- Radius: `3px`
- Content: user avatar + username header, post body, tags footer, note count
- Transition: hover may show additional actions (reblog, like, share)

### Avatars
- Shape: circle (default) or square (user-selectable)
- Sizes: 64px, 128px, 256px, 512px
- Border: none or subtle ring on chrome backgrounds

### Tags / Pills
- Background: brand color at `.1` or `.2` opacity (e.g., `rgba(0, 184, 255, 0.1)`)
- Text: matching brand color or white on darker tints
- Padding: 4px 10px (estimated)
- Radius: `3px` or pill (`9999px`)
- Font: Favorit 12-13px weight 500

### Navigation
- Background: `#001935` (navy chrome)
- Text: `#ffffff` for primary items
- Secondary text: `rgba(153, 163, 174, 1)`
- Active indicator: Brand Blue (`#00b8ff`) highlight or underline
- Layout: vertical sidebar on desktop, bottom bar on mobile

### Inputs & Forms
- Border: `1px solid rgba(255,255,255,0.2)` on chrome, `1px solid #e0e0e0` on content
- Radius: `3px`
- Focus: Brand Blue (`#00b8ff`) border highlight
- Background: transparent on chrome, `#ffffff` on content surfaces

## 5. Layout Principles

### Spacing System
- Base unit: likely 4px or 8px (not fully extracted -- see BACKLOG.md)
- Common spacings observed: 4px, 8px, 12px, 16px, 24px, 32px, 48px

### Grid & Container
- Dashboard: sidebar navigation (left) + content feed (center) + optional right panel
- Post feed: single-column centered layout, max-width ~540px for text posts
- Explore/search: multi-column masonry grid for mixed media
- Full-width content on mobile

### Whitespace Philosophy
- **Content density by choice**: Tumblr's feed can feel dense (rapid-fire posts) or spacious (single image posts filling the viewport). The system adapts to content rather than imposing a rigid rhythm.
- **Chrome is tight, content breathes**: Navigation elements are compactly spaced in the dark sidebar, but post cards have generous internal padding.
- **Visual rhythm from content, not layout**: Unlike grid-heavy platforms, Tumblr's visual rhythm comes from the variety of post types (text, photo, quote, video, audio) rather than a rigid layout grid.

### Border Radius Scale
- Standard (3px): Buttons, cards, inputs, tags -- the primary radius for all interactive elements
- Circle: Avatars (border-radius: 50%)
- Pill (9999px): Some tag variants

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Posts in feed, inline content |
| Chrome (Level 1) | Background color differentiation (`#001935` vs `#0d243f`) | Navigation panels, sidebar hierarchy |
| Card (Level 2) | Subtle border or low-opacity shadow | Post cards, content containers |
| Popup (Level 3) | Visible shadow + border | Dropdowns, popovers, tooltips |
| Modal (Level 4) | Strong shadow + backdrop overlay | Modals, full-screen composers |

**Shadow Philosophy**: Tumblr relies more on background color contrast (navy chrome layers) than traditional box-shadows for elevation. The dark chrome palette creates natural depth through color -- `#001935` feels behind `#0d243f`, which feels behind white content cards. Shadows are used sparingly, primarily for floating elements like dropdowns and modals.

## 7. Do's and Don'ts

### Do
- Use the navy chrome (`#001935`) as the persistent frame -- it IS the Tumblr experience
- Apply brand accent colors expressively -- Tumblr supports a full rainbow, use it
- Keep border-radius at `3px` for most elements -- it's tight and precise
- Use `Favorit` for all text -- the typeface carries the brand personality
- Provide tint variants (`.1`, `.2`, `.3` opacity) for colored backgrounds on tags and badges
- Support dark mode via `prefers-color-scheme: dark` with `#1a1a1a` surfaces
- Make post cards the visual center of the experience -- they are Tumblr's atomic unit
- Use white text on navy chrome -- high contrast, always legible

### Don't
- Don't use a single brand color -- Tumblr's identity is multi-chromatic
- Don't use large border-radius (16px+) on cards or buttons -- Tumblr is `3px`, not bubbly
- Don't make the chrome feel light or airy -- the dark navy frame is fundamental
- Don't use system fonts where Favorit should appear -- the geometric character matters
- Don't over-shadow -- elevation comes from background color contrast, not drop shadows
- Don't hide the rainbow -- Brand Blue is primary, but Purple, Pink, Red, Orange, Yellow, Green are all first-class citizens
- Don't make body text too large -- content (images, GIFs) is the hero, not the text chrome around it

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Bottom navigation bar, single-column feed, full-width posts |
| Tablet | 640-1024px | Collapsible sidebar, centered feed |
| Desktop | >1024px | Fixed sidebar navigation, centered feed, optional right panel |

### Touch Targets
- Bottom nav icons: minimum 44px tap targets
- Post action buttons (like, reblog, share): adequately spaced for thumb reach
- Follow/unfollow buttons: full-width on mobile post headers

### Collapsing Strategy
- Sidebar navigation becomes bottom tab bar on mobile
- Post cards stretch to full viewport width on mobile
- Masonry grid (explore) reduces columns: 4 -> 2 -> 1
- Post composer becomes full-screen modal on mobile
- Right sidebar (trending, recommended) collapses into feed or separate tab

### Dark Mode
- Triggered by `prefers-color-scheme: dark`
- Content surfaces: `#ffffff` -> `#1a1a1a`
- Chrome panel: `#0d243f` -> `#1a1a1a`
- Chrome secondary text: `rgba(153, 163, 174, 1)` -> `#999999`
- Chrome tertiary text: `rgba(102, 117, 134, 1)` -> `#666666`
- Navy chrome (`#001935`) may persist or shift to pure dark

## 9. Agent Prompt Guide

### Quick Color Reference
- Chrome background: Navy (`#001935`)
- Chrome panel: Dark Navy (`#0d243f`)
- Primary CTA: Brand Blue (`#00b8ff`)
- CTA Hover: Light Blue (`#33c6ff`)
- Content bg (light): White (`#ffffff`)
- Content bg (dark): Dark Gray (`#1a1a1a`)
- Chrome secondary text: `rgba(153, 163, 174, 1)`
- Chrome tertiary text: `rgba(102, 117, 134, 1)`
- Accent Purple: `#7c5cff`
- Accent Pink: `#ff61ce`
- Accent Red (danger): `#ff4930`
- Accent Orange: `#ff8a00`
- Accent Yellow: `#e8d73a`
- Accent Green (success): `#01cf35`

### Example Component Prompts
- "Create a Tumblr navigation sidebar: `#001935` background, `240px` width, fixed left. Logo at top in white. Nav links at 14px Favorit weight 400, white text, 8px vertical spacing. Active link has Brand Blue (`#00b8ff`) icon tint and white text. Secondary labels in `rgba(153, 163, 174, 1)`. Bottom section with user avatar (circle, 36px) and username."
- "Design a post card: white background, 1px subtle border, 3px radius. Header with circle avatar (48px) + username (14px Favorit weight 600) + timestamp (12px, gray). Body text at 15px Favorit weight 400, line-height 1.5. Tags footer with pill tags using `rgba(0, 184, 255, 0.1)` background and `#00b8ff` text. Action bar: like (pink `#ff61ce`), reblog (green `#01cf35`), share icons."
- "Build a follow button: `#00b8ff` background, white text, 3px radius, 8px 16px padding, Favorit 14px weight 600. Hover: `#33c6ff`. Pressed: `#66d4ff`. Unfollow variant: `#ff4930` background with `#ff6d59` hover."
- "Create a tag pill: `rgba(124, 92, 255, 0.15)` background, `#7c5cff` text, 4px 10px padding, 3px radius, Favorit 12px weight 500. Hover: background shifts to `.2` opacity."
- "Design a dark mode post card: `#1a1a1a` background, subtle light border `rgba(255,255,255,0.1)`, 3px radius. White text for username, `#999999` for timestamp, `rgba(255,255,255,0.85)` for body text. Tags use same brand color tints but on dark surface."

### Iteration Guide
1. Always start with the navy chrome frame (`#001935`) -- it establishes the Tumblr context
2. Brand Blue (`#00b8ff`) is the primary interactive color, but don't be afraid to use the full rainbow for tags, badges, and expressive elements
3. Keep radius at `3px` -- this is tighter than most modern platforms and is part of the identity
4. Favorit is the font; fall back to `"Helvetica Neue"` then `Arial` when unavailable
5. Post cards are the hero: simple white/dark rectangles with generous content padding
6. Dark mode swaps content surfaces to `#1a1a1a` but chrome may stay navy
7. Avatars are circles by default -- support square as a user preference
8. Tags always use tinted brand color backgrounds, never solid brand color backgrounds
