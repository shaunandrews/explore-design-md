# Design System: Jetpack

## 1. Visual Theme & Atmosphere

Jetpack's website projects security and reliability -- a calm, confident system that communicates "your WordPress site is protected" without resorting to aggressive dark themes or alarm-bell aesthetics. The page opens on a clean white canvas (`#ffffff`) with near-black text (`#000000`) and a distinctive Jetpack Green (`#008710`) that serves as both brand anchor and trust signal. This green isn't the playful lime of a startup; it's a deep, authoritative green that reads as established and dependable -- the color of a security shield, not a lawn.

The typography is built on `Inter`, loaded as a web font with system fallbacks. At display sizes (48px-84px), Inter runs with fluid `clamp()` scaling for seamless responsiveness. The site uses generous pill-shaped buttons (`border-radius: 9999px`) that create an approachable, modern feel against the otherwise structured layout. Combined with blurred gradient blob animations in the background (on capable devices) and ample whitespace, the overall impression is of a premium security product that doesn't need to shout.

What distinguishes Jetpack visually is its restraint. Where competitor security products use dark palettes and warning colors, Jetpack stays light, clean, and green-accented. The result is a site that feels more like a wellness product than a firewall -- protection as peace of mind, not as battle armor.

**Key Characteristics:**
- Inter as the primary typeface -- clean, modern, highly legible at all sizes
- Fluid typography using CSS `clamp()` for seamless responsive scaling
- Jetpack Green (`#008710`) as the singular, defining brand color
- Pill-shaped buttons (`9999px` radius) as the default interactive pattern
- Clean white canvas with generous whitespace
- 1200px max content width -- tighter and more focused than typical marketing sites
- Blurred gradient blob animations as subtle background decoration
- Green SVG icons as a consistent visual language for features
- Dark gray (`#32373c`) as the primary button background -- not black, not green
- WordPress block-based layout system with a modular spacing scale

## 2. Color Palette & Roles

### Primary Brand
- **Jetpack Green 50** (`#008710`): Primary brand color, icons, links, trust signal. A deep, authoritative green.
- **Jetpack Green 40** (`#069e08`): Secondary actions, hover states, testimonial quote marks, icon variant.
- **Jetpack Green 30** (`#2fb41f`): Lighter green for decorative accents and highlights.
- **Jetpack Green 60** (`#007117`): Darker green for emphasis and contrast on light surfaces.

### Neutral Scale
- **Black** (`#000000`): Primary heading color. Pure black for maximum contrast.
- **Gray 70** (`#3c434a`): Secondary text, descriptions.
- **Gray 40** (`#787c82`): Muted text, placeholders, tertiary labels.
- **Dark Gray** (`#32373c`): Primary button background. Not pure black -- a warm, approachable dark.
- **Very Dark Gray** (`#313131`): Footer backgrounds, dark section surfaces.
- **Gray 0** (`#f6f7f7`): Light background surfaces, section fills.
- **Light Gray** (`#eee`): Subtle borders, separator lines.
- **White** (`#ffffff`): Page background, card surfaces, button text on dark.

### Accent Colors (decorative / WordPress presets)
- **Vivid Cyan Blue** (`#0693e3`): Informational highlights, gradient starts.
- **Vivid Purple** (`#9b51e0`): Gradient accents, decorative elements.
- **Vivid Red** (`#cf2e2e`): Error states, destructive actions.
- **Luminous Vivid Orange** (`#ff6900`): Warning highlights.
- **Luminous Vivid Amber** (`#fcb900`): Attention, promotional elements.

### Interactive States
- **Link Default**: `#008710` (Jetpack Green 50)
- **Button Background**: `#32373c` (Dark Gray)
- **Focus Ring**: standard browser outline
- **Outline Button Border**: `2px solid currentColor`

### Shadow Colors
- **Shadow Standard** (`rgba(0,0,0,0.2)`): Natural and sharp shadow base.
- **Shadow Deep** (`rgba(0,0,0,0.4)`): Maximum elevation.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, sans-serif`
- **System Fallback**: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif`
- **Serif Display**: `Recoleta` (used sparingly for editorial moments)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | clamp(68px, 4.25rem + 1.25vw, 84px) | 700 | 1.0 (tight) | -0.5px | Maximum impact headlines |
| Display Large | Inter | clamp(28px, 1.75rem + 1.563vw, 48px) | 700 | 1.1 (tight) | -0.3px | Section hero headlines |
| Section Heading | Inter | clamp(25px, 1.563rem + 1.327vw, 42px) | 700 | 1.15 (tight) | -0.2px | Feature section titles |
| Sub-heading | Inter | 24px | 600 | 1.3 | normal | Card headings, sub-sections |
| Body Large | Inter | clamp(14px, 0.875rem + 0.469vw, 20px) | 400 | 1.6 | normal | Feature descriptions |
| Body | Inter | 18px | 400 | 1.6 | normal | Standard reading text |
| Body Small | Inter | 15px | 400 | 1.5 | normal | Secondary text, metadata |
| Button | Inter | inherit | 400 | 1.0 | normal | Inherits from parent |
| Quote Mark | Inter | 5rem (80px) | 700 | 1.0 | normal | Testimonial open-quote character |

### Principles
- **Bold headings, light body**: Weight 700 for all headings creates strong visual hierarchy. Body text stays at 400 for comfortable reading.
- **Fluid display scaling**: Hero and section headings use `clamp()` for responsive scaling without breakpoint jumps.
- **Generous line-height**: Body text uses 1.5-1.6 line-height for excellent readability on white backgrounds.
- **Pure black headings**: Unlike sites that soften to dark gray, Jetpack uses `#000000` for maximum contrast and authority.
- **Single typeface discipline**: Inter handles every role from 84px hero to 15px caption. No secondary display font in the primary UI.

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#32373c`
- Text: `#ffffff`
- Padding: `calc(0.667em + 2px) calc(1.333em + 2px)`
- Radius: `9999px` (pill)
- Border: none
- Font: inherit from parent
- Use: Primary CTA ("Get started", "Secure your site")

**Primary Green**
- Background: `#008710`
- Text: `#ffffff`
- Padding: `calc(0.667em + 2px) calc(1.333em + 2px)`
- Radius: `9999px` (pill)
- Border: none
- Hover: `#069e08` background
- Use: Brand-specific CTA, key conversion points

**Outline**
- Background: transparent
- Text: currentColor (typically `#000000` or `#32373c`)
- Padding: `0.667em 1.333em`
- Radius: `9999px` (pill)
- Border: `2px solid currentColor`
- Hover: slight opacity change
- Use: Secondary actions

### Cards & Containers
- Background: `#ffffff` or transparent
- Border: none (clean, borderless design) or subtle gray
- Radius: `2.043625rem` (~33px) for premium cards, or `1.25em` for standard
- Shadow: none by default (clean flat design)
- Padding: `1.25em 2.375em` (default with background)
- Gap: 24px (default block gap)

### Badges / Tags
- Minimal use -- Jetpack favors icon + text patterns over badges
- When used: pill-shaped with `9999px` radius, green or gray background

### Inputs & Forms
- Inherits system styling
- Focus: standard browser outline enhanced
- Button style applied to submit elements (`#32373c` background, pill shape)

### Navigation
- Transparent/white header with logo left-aligned
- Product submenu with dropdown structure
- Links: Inter, standard size, green (`#008710`) for active/current
- Right side: Search, Login text link, "Get started" CTA pill button
- Mobile: toggle-based hamburger menu (id-based system)

### Icons
- Custom SVG icons in Jetpack Green (`#008710` or `#069e08`)
- Standard size: 24px x 24px (some at 28px)
- Display: inline-block, vertically centered
- Margin-right: 12px when paired with text
- Categories: security (shield, key), performance (speed, cloud), growth (stats, social), content (forms, newsletter, video)

### Testimonials
- Large open-quote character at 5rem (80px), colored `#069e08`
- Quote text at body or body-large size
- Clean layout without decorative borders

## 5. Layout Principles

### Spacing System
- Base: rem-based modular scale
- Scale:
  - 20: `0.44rem` (~7px)
  - 30: `0.67rem` (~11px)
  - 40: `1rem` (16px)
  - 50: `1.5rem` (24px)
  - 60: `2.25rem` (36px)
  - 70: `3.38rem` (~54px)
  - 80: `5.06rem` (~81px)
- Default block gap: 24px

### Grid & Container
- Max content width: 1200px (both content-size and wide-size)
- Constrained layouts: 640px, 880px for focused content
- WordPress block-based flex layout
- Feature sections: 2-column flex grids with 24px gap
- Columns: flex-based with responsive wrapping
- Alignment: center, left, right, space-between

### Whitespace Philosophy
- **Spacious and calm**: Generous vertical spacing between sections (80px+ via spacing-80) creates a sense of breathing room that reinforces the security/peace-of-mind brand message.
- **Focused content width**: 1200px max-width is narrower than many marketing sites, keeping the eye focused on a single column of content.
- **Constrained reading widths**: Key content blocks use 640px or 880px constraints for optimal line lengths.

### Border Radius Scale
- Standard (0px): Some containers remain sharp-cornered
- Card (1.25em / ~20px): Standard rounded containers
- Premium card (2.043625rem / ~33px): Featured/pricing cards
- Pill (9999px): Buttons, badges, tags

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default for most elements -- clean, flat design |
| Natural (Level 1) | `6px 6px 9px rgba(0,0,0,0.2)` | Subtle card elevation |
| Sharp (Level 2) | `6px 6px 0px rgba(0,0,0,0.2)` | Hard-edge decorative shadow |
| Deep (Level 3) | `12px 12px 50px rgba(0,0,0,0.4)` | Modals, prominent panels |
| Crisp (Decorative) | `6px 6px 0px rgb(0,0,0)` | Bold editorial shadow |

**Shadow Philosophy**: Jetpack takes a notably flat approach -- most elements have zero shadow, relying on whitespace and color contrast for visual hierarchy. When shadows are used, they follow the WordPress preset system with a directional 6px/6px offset that creates a subtle 3D effect. The deep shadow (50px blur) is reserved for truly elevated elements like modals. This restraint keeps the visual noise low, reinforcing the "calm protection" brand message.

### Decorative Depth
- Blurred gradient blobs as background elements (disabled on reduced-motion and mobile)
- `translate3d()` transforms for smooth animation performance
- Green-tinted SVG icons provide color depth without shadow complexity

## 7. Do's and Don'ts

### Do
- Use `Inter` as the only typeface with system font fallbacks
- Use fluid `clamp()` values for heading typography
- Use `#008710` (Jetpack Green 50) as the primary brand accent
- Use `#32373c` (dark gray) for primary button backgrounds -- not black, not green
- Use `9999px` radius for all buttons (pill shape is the signature)
- Use pure `#000000` for headings -- Jetpack uses true black
- Keep most elements flat (no shadow) -- shadows are the exception, not the rule
- Use green SVG icons (24px) as the primary visual language for features
- Use `#f6f7f7` for alternating section backgrounds
- Keep max-width at 1200px for focused content presentation

### Don't
- Don't use border-radius between 8px and 9999px on buttons -- it's either sharp or pill
- Don't add shadows to standard cards -- Jetpack is intentionally flat
- Don't use the accent colors (cyan, purple, orange) for interactive elements -- they're decorative WordPress presets
- Don't use multiple brand colors -- green is the single accent; everything else is grayscale
- Don't use dark/black backgrounds for main content sections -- Jetpack stays light
- Don't use heavy button styling (gradients, shadows, borders) -- buttons are simple, pill-shaped, solid-color
- Don't mix `Recoleta` with `Inter` in the same component -- serif is only for rare editorial moments
- Don't use the green for body text -- it's for icons, links, and accents only
- Don't add decorative borders to cards -- whitespace and layout do the separation work

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, reduced spacing, no blob animations |
| Tablet | 600-781px | 2-column where appropriate, moderate padding |
| Desktop | 782-900px | Full layout begins, animations enabled |
| Large Desktop | >900px | Full layout, blob animations active, maximum spacing |

### Touch Targets
- Pill buttons: comfortable padding via `calc(0.667em + 2px)` vertical
- Navigation: adequate spacing for touch
- Icons: 24px+ tap targets with surrounding padding
- Lightbox controls: 4px radius, adequate sizing

### Collapsing Strategy
- Hero: 84px display -> 68px on mobile via `clamp()` (smooth, no breakpoints)
- Navigation: full horizontal nav -> mobile toggle menu
- Columns: flex-wrap handles column stacking naturally
- Spacing: rem-based scale compresses proportionally
- Background animations: disabled entirely below 900px and on prefers-reduced-motion
- Images: responsive with `max-width: 100%`
- Block gap maintained at 24px across breakpoints

### Animation Behavior
- Transition duration: 0.2s for interactive elements
- Background blobs: blurred gradient animations (desktop only, motion-safe only)
- `translate3d()` for GPU-accelerated transforms
- Respects `prefers-reduced-motion` -- all animations disabled

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA background: Dark Gray (`#32373c`)
- Brand accent: Jetpack Green 50 (`#008710`)
- Brand accent hover: Jetpack Green 40 (`#069e08`)
- Background: White (`#ffffff`)
- Alt Background: Gray 0 (`#f6f7f7`)
- Heading text: Black (`#000000`)
- Body text: Black (`#000000`)
- Secondary text: Gray 70 (`#3c434a`)
- Muted text: Gray 40 (`#787c82`)
- Link: Green 50 (`#008710`)
- Icon fill: Green 50 (`#008710`) or Green 40 (`#069e08`)
- Dark section: Very Dark Gray (`#313131`)

### Example Component Prompts
- "Create a hero section on white background. Headline using Inter at clamp(68px, 4.25rem + 1.25vw, 84px), weight 700, line-height 1.0, letter-spacing -0.5px, color #000000. Subtitle at 18px Inter weight 400, line-height 1.6, color #3c434a. Dark pill CTA button (#32373c, 9999px radius, calc(0.667em + 2px) calc(1.333em + 2px) padding, white text) and outline pill button (transparent, 2px solid currentColor, 9999px radius)."
- "Design a feature card: white background, no shadow, no border (flat). Title at 24px Inter weight 600, color #000000. Body at 18px weight 400, line-height 1.6, color #3c434a. Green SVG icon (24px, #008710) above the title with 12px bottom margin. 24px gap between elements."
- "Build a navigation bar: white/transparent background. Inter font. Logo left, links center, 'Get started' dark pill button right (#32373c, 9999px radius, white text). Active link color: #008710. Mobile: hamburger toggle."
- "Create a testimonial section: large open-quote character at 5rem, color #069e08, weight 700. Quote text at clamp(25px, 1.563rem + 1.327vw, 42px) Inter weight 700, color #000000. Attribution at 18px weight 400, color #3c434a."
- "Design a 2-column feature grid: max-width 1200px, gap 24px. Each feature: green icon (24px, #008710) left-aligned, title at 24px Inter weight 600, description at 18px weight 400 color #3c434a. No card borders or shadows -- separation through whitespace only."

### Iteration Guide
1. Always use `Inter` as the sole typeface with system font fallbacks
2. Use `clamp()` for all heading sizes -- seamless responsive scaling
3. Buttons are always pill-shaped (`9999px` radius) -- never rounded-rectangle
4. Primary button is dark gray (`#32373c`), not green -- green is for accents and icons
5. Headings are pure `#000000`, body text is also `#000000`, secondary is `#3c434a`
6. Keep cards and containers flat -- no shadow is the default; shadows are exceptions
7. Icons are 24px green SVGs (`#008710`) -- the primary visual vocabulary for features
8. Max content width is 1200px -- tighter than most sites for focused reading
9. Spacing uses a rem-based modular scale: 0.44, 0.67, 1, 1.5, 2.25, 3.38, 5.06rem
10. Green is the ONLY brand color -- everything else is black, white, or gray
