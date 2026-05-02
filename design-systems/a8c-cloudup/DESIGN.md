# Design System: Cloudup

## 1. Visual Theme & Atmosphere

Cloudup's redesigned landing page is bold, playful, and color-blocked — a dramatic departure from its former minimal teal aesthetic. The page uses three saturated background colors (salmon, lime, bright blue) in large horizontal bands, creating an energetic, section-by-section scroll experience. The mood is friendly and confident — "sharing made fun" rather than "enterprise file storage." Typography is large and punchy, components are oversized for emphasis, and the overall density is low with generous whitespace within each color block. Built on WordPress blocks.

- **Mood**: Playful, bold, approachable
- **Density**: Low — large type, generous spacing, focused content
- **Design philosophy**: Color-blocked sections, oversized components, minimal UI chrome

## 2. Color Palette & Roles

### Brand Colors
| Token | Hex | Role |
|-------|-----|------|
| Salmon | `#ff775a` | Hero background, secondary CTA background |
| Lime | `#c0ff59` | Feature section background ("Share anything") |
| Bright Blue | `#5acdff` | Pricing section background |
| Black | `#000000` | Primary text, primary CTA, footer background, borders |
| White | `#ffffff` | Content section backgrounds, input backgrounds, nav text on dark |
| Off-white | `#F9F9F9` | Base/page background |

### Functional Colors
| Token | Hex | Role |
|-------|-----|------|
| Text Primary | `#000000` | Headings, body text on light backgrounds |
| Text Inverse | `#ffffff` | Text on black footer |
| Border | `#000000` | Input borders, secondary button borders |
| Shadow | `rgba(0,0,0,0.05)` | Subtle box-shadow on inputs and buttons |

### Section Color Map
- **Hero**: Salmon (`#ff775a`) background, black text
- **Features (3-col)**: White background, black text
- **Share anything**: Lime (`#c0ff59`) background, black text
- **More features (3-col)**: White background, black text
- **Pricing**: Bright Blue (`#5acdff`) background, black text
- **Final CTA**: Off-white background, black text
- **Footer**: Black background, white text

## 3. Typography Rules

### Font Families
| Role | Family | Fallback |
|------|--------|----------|
| Site title / Nav | `"Inter Tight"` | `sans-serif` |
| Body / Headings / Buttons | `"Inter"` | `sans-serif` |

### Type Scale
| Element | Size | Weight | Line-height | Notes |
|---------|------|--------|-------------|-------|
| Site title | `clamp(26px, 1.624rem + 1.877vw, 44px)` | 700 | — | Inter Tight, nav bar |
| H1 (Hero) | `clamp(2.5rem, 2.5rem + 1.283vw, 3.27rem)` | 700 | 1.1 | "Drag, drop, stream." |
| H2 (Section) | `clamp(1.85rem, 1.85rem + 1.083vw, 2.5rem)` | 700 | 1.2 | "Share anything." |
| H3 (Feature) | `clamp(1.39rem, 1.39rem + 0.767vw, 1.85rem)` | 700 | 1.3 | Feature card headings |
| Body / Subtitle | `clamp(15.75px, 0.984rem + 0.86vw, 24px)` | 400 | 1.5 | Paragraphs, descriptions |
| Button / Input | `24px` | 500 | `24px` | Newsletter form elements |
| Small | `0.9rem` | 400 | 1.5 | Footer text, labels |

### Typography Principles
- All sizes use `clamp()` for fluid scaling — no breakpoint jumps
- Headings are bold (700), body is regular (400), buttons are medium (500)
- Text is always black on colored backgrounds — no white-on-color except footer
- Centered text in hero and CTA sections; left-aligned in feature grids

## 4. Component Stylings

### Navigation Bar
- **Layout**: Flex, space-between, centered vertically
- **Background**: Transparent over hero color
- **Logo**: Cloudup mark (SVG circle with eye motif) + "Cloudup" wordmark in Inter Tight 700
- **CTA**: "Sign in" button — black background, white text, 8px radius
- **Height**: ~72px with padding

### Buttons
| Variant | Background | Text | Border | Radius | Padding | Height |
|---------|-----------|------|--------|--------|---------|--------|
| Primary (hero) | `#000000` | `#ffffff` | none | `8px` | `24px 32px` | `72px` |
| Secondary (CTA) | `#ff775a` (salmon) | `#000000` | `1px solid black` | `8px` | `24px 32px` | `72px` |
| Nav Sign-in | `#000000` | `#ffffff` | none | `8px` | smaller | auto |

- **Font**: Inter, 24px, weight 500
- **Shadow**: `0px 1px 2px rgba(0,0,0,0.05)`
- **Cursor**: pointer
- **States**: No visible hover color shift in extraction — verify

### Inputs
| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border | `1px solid black` |
| Radius | `8px` |
| Height | `72px` |
| Padding | `24px 32px` |
| Font | Inter, 24px |
| Shadow | `0px 1px 2px rgba(0,0,0,0.05)` |
| Max-width | `450px` |
| Placeholder | "Email address" — default browser color |

### Feature Cards (3-column grid)
- **Layout**: Three columns on desktop, stacking on mobile
- **Icon**: Custom styled heading icons (stream, asterisk, clock, star, check, lock)
- **Heading**: H3 (Inter, bold, left-aligned)
- **Body**: Left-aligned paragraph text
- **Background**: Inherits section color (white or colored band)
- **No visible card borders or shadows** — flat, clean

### Footer
- **Background**: `#000000`
- **Text**: White
- **Logo**: White Cloudup mark
- **Layout**: Multi-column links grid
- **Link groups**: Policy, About, Dev
- **Social icons**: Twitter, Facebook
- **Bottom**: "An Automattic joint" branding + cookie banner

## 5. Layout Principles

### Spacing Scale (WordPress preset)
| Token | Value |
|-------|-------|
| `--spacing-10` | `1rem` |
| `--spacing-20` | `min(1.5rem, 2vw)` |
| `--spacing-30` | `min(2.5rem, 3vw)` |
| `--spacing-40` | `min(4rem, 5vw)` |
| `--spacing-50` | `min(6.5rem, 8vw)` |
| `--spacing-60` | `min(10.5rem, 13vw)` |

### Layout Structure
- **Max content width**: WordPress block layout (likely ~1200px, verify)
- **Hero**: Full-width salmon band, centered text with 20% left/right padding
- **Feature grids**: 3-column flex/grid, left-aligned text
- **Color bands**: Full-bleed backgrounds, content constrained within
- **Whitespace**: Generous vertical padding between sections (spacing-50 to spacing-60)

### Grid
- **Feature sections**: 3-column on desktop, single column on mobile
- **Pricing**: 2-column (slider + price display)
- **Newsletter form**: Inline input + button, wrapping on mobile

## 6. Depth & Elevation

Cloudup's redesign is almost entirely flat. Depth is created through **color contrast between sections** rather than shadows or elevation.

| Element | Shadow |
|---------|--------|
| Inputs | `0px 1px 2px rgba(0,0,0,0.05)` — barely visible |
| Buttons | `0px 1px 2px rgba(0,0,0,0.05)` — barely visible |
| Cards | None |
| Nav | None (transparent) |

### Preset Shadows (available but not prominent)
| Name | Value |
|------|-------|
| Natural | `6px 6px 9px rgba(0,0,0,0.2)` |
| Deep | `12px 12px 50px rgba(0,0,0,0.4)` |
| Sharp | `6px 6px 0px rgba(0,0,0,0.2)` |
| Crisp | `6px 6px 0px rgba(0,0,0,1)` |

## 7. Do's and Don'ts

### Do
- Use bold, saturated color blocks as full-width section backgrounds
- Keep text black on all colored backgrounds (salmon, lime, blue)
- Use oversized form elements (72px height) for primary CTAs
- Keep layouts simple — centered hero, left-aligned feature grids
- Use `clamp()` for all typography — no rigid breakpoint jumps
- Maintain generous vertical spacing between color-blocked sections

### Don't
- Don't use the old teal (`#39bde0`) — the brand has moved to salmon/lime/blue
- Don't add shadows or elevation to cards — the design is deliberately flat
- Don't mix colored text on colored backgrounds — always use black text on color
- Don't use heavy borders or outlines except on inputs and secondary buttons
- Don't overcrowd sections — each color band has one clear purpose
- Don't use serif fonts — Inter and Inter Tight only

## 8. Responsive Behavior

### Breakpoints
| Breakpoint | Behavior |
|-----------|----------|
| `≤480px` | Single column, stacked newsletter form |
| `≤568px` | Reduced heading sizes via clamp() |
| `≤700px` | Feature grids stack to single column |
| `≤768px` | Full responsive, generous mobile padding |

### Mobile Strategy
- **Fluid typography**: All sizes scale down naturally via `clamp()` — no jarring jumps
- **Stacking**: 3-column grids → single column
- **Form**: Input and button stack vertically on narrow screens
- **Spacing**: Uses `min()` functions that naturally compress on small viewports
- **Touch targets**: 72px buttons and inputs are already mobile-friendly

## 9. Agent Prompt Guide

### Quick Reference
```
Primary font: Inter (body/headings), Inter Tight (site title)
Hero bg: #ff775a (salmon)
Feature bg: #c0ff59 (lime)
Pricing bg: #5acdff (bright blue)
CTA: Black button, 8px radius, 72px height
Text: Always black on colored backgrounds
Footer: Black bg, white text
Shadows: Nearly none — flat design with color-block depth
```

### Ready-to-Use Prompts

**Landing page hero:**
> Build a hero section with a salmon (#ff775a) full-width background, centered large heading in Inter bold, subtitle text, and an inline email input (white, 72px tall, 8px radius) next to a black "Get notified" button (72px tall, 8px radius). All text black.

**Feature section:**
> Create a 3-column feature grid on a lime green (#c0ff59) full-width background. Each column has an icon, bold heading (Inter), and left-aligned body text. No card borders or shadows — flat and clean.

**Color-blocked layout:**
> Build a scrolling page with alternating full-bleed color bands: salmon hero → white features → lime section → white features → bright blue pricing → white CTA → black footer. All text is black except on the footer (white).
