# Design System: Parse.ly

## 1. Visual Theme & Atmosphere

Parse.ly's website presents the visual identity of a premium content analytics platform -- clean, data-confident, and authoritative without being cold. The marketing site opens on a white canvas (`#ffffff`) with deep navy headings (`#0a1628`) and a signature teal-green (`#2cb67d`) that serves as the primary brand accent and interactive highlight. This isn't the generic "tech startup green" of SaaS convention; it's a precise, saturated mint-teal that reads as both analytical precision and growth -- an intentional metaphor for the content performance metrics Parse.ly delivers.

The site uses a system-level sans-serif stack anchored by `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`, giving it a native, platform-appropriate feel that prioritizes readability over branding via custom type. Headlines use weight 700 (bold) with tight tracking for impact, while body copy runs at 400 with generous line-height (1.6-1.7) for the long-form explanatory content that a B2B analytics product requires. The overall typographic impression is clean and functional -- closer to a well-designed documentation site than a flashy marketing page.

What distinguishes Parse.ly visually is its dual personality: the marketing site is light, airy, and conversion-focused, while the dashboard imagery and dark sections use a deep navy (`#0a1628`) that evokes the actual product interface. This creates a seamless bridge between marketing and product, telling visitors "what you see here is what you'll get." The dark sections feel like windows into the analytics dashboard itself.

**Key Characteristics:**
- Teal-green (`#2cb67d`) as the singular brand accent -- confident, analytical, growth-oriented
- Deep navy (`#0a1628`) headings and dark sections -- not black, a rich blue-black that adds depth
- System font stack for body text -- fast, native, readable
- "Verlag" or similar geometric sans-serif for display headlines (commercial; fallback to `Rubik` from Google Fonts)
- Subtle, neutral shadows -- no colored shadows, just clean gray depth
- Generous whitespace and restrained color palette -- teal, navy, white, and gray
- Data visualization accents in purple (`#7b68ee`), coral (`#ff6b6b`), and amber (`#f5a623`)
- Border-radius in the 6px-12px range -- modern but not pill-shaped

## 2. Color Palette & Roles

### Primary
- **Parse.ly Teal** (`#2cb67d`): Primary brand color, CTA backgrounds, link hover states, active indicators. A saturated mint-green that anchors the entire visual system.
- **Deep Navy** (`#0a1628`): Primary heading color, dark section backgrounds, footer. A near-black with blue undertone for warmth and depth.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on teal backgrounds.

### Brand & Dark
- **Navy 900** (`#0a1628`): Darkest surface -- footer background, dark hero sections, product dashboard framing.
- **Navy 800** (`#0f2137`): Secondary dark surface for layered dark UI, card backgrounds on dark sections.
- **Navy 700** (`#162d4a`): Tertiary dark surface, borders on dark backgrounds.
- **Navy 600** (`#1e3a5f`): Lighter dark accents, hover states on dark backgrounds.

### Accent Colors
- **Teal Light** (`#3dd68e`): Lighter teal for hover states on primary buttons, success indicators.
- **Teal Pale** (`#e6f9f0`): Very light teal tint for backgrounds, badges, highlighted sections.
- **Purple** (`#7b68ee`): Secondary data visualization color, used for charts and decorative accents.
- **Coral** (`#ff6b6b`): Alert/attention color, data visualization accent for negative trends.
- **Amber** (`#f5a623`): Warning state, data visualization accent for caution/trending indicators.
- **Blue** (`#4a9eff`): Informational accents, link color in some contexts, chart color.

### Interactive
- **Primary Teal** (`#2cb67d`): Primary CTA background, active states, selected tab indicators.
- **Teal Hover** (`#24a06d`): Slightly darker teal for hover states on primary CTA.
- **Teal Active** (`#1f8c5e`): Pressed/active state for teal buttons.
- **Link Blue** (`#2b7de9`): Text link color on light backgrounds.
- **Link Hover** (`#1a5cb8`): Darkened link color on hover.

### Neutral Scale
- **Heading** (`#0a1628`): Primary headings, nav text, strong labels.
- **Body** (`#3d4f5f`): Primary body text -- a dark slate with blue undertone.
- **Secondary** (`#6b7c8f`): Secondary text, descriptions, captions, meta information.
- **Tertiary** (`#94a3b3`): Placeholder text, disabled states, muted labels.
- **Border** (`#d9e0e8`): Standard border color for cards, dividers, input fields.
- **Border Light** (`#e8edf2`): Subtle borders, section dividers.
- **Surface** (`#f4f6f8`): Alternate section backgrounds, card hover backgrounds, form field backgrounds.
- **Surface Light** (`#f9fafb`): Lightest surface -- subtle background differentiation.

### Shadow Colors
- **Shadow Default** (`rgba(10,22,40,0.08)`): Primary shadow color -- navy-tinted for brand consistency.
- **Shadow Medium** (`rgba(10,22,40,0.12)`): Medium elevation shadow.
- **Shadow Heavy** (`rgba(10,22,40,0.20)`): Deep elevation for modals and popovers.

## 3. Typography Rules

### Font Family
- **Display/Heading**: `Verlag`, with fallback: `'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Body**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`
- **Monospace**: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`

> **Note**: Verlag is a commercial typeface from Hoefler&Co. The preview files use `Rubik` from Google Fonts as a visual stand-in -- both are geometric sans-serifs with a similar rounded, approachable character. If you have a Hoefler&Co license, replace the Google Fonts import with the proper webfont link.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Verlag/Rubik | 56px (3.5rem) | 700 | 1.1 | -0.5px | Primary homepage hero |
| Display Large | Verlag/Rubik | 48px (3.0rem) | 700 | 1.15 | -0.4px | Secondary hero, page titles |
| Section Heading | Verlag/Rubik | 36px (2.25rem) | 700 | 1.2 | -0.3px | Feature section titles |
| Sub-heading Large | Verlag/Rubik | 28px (1.75rem) | 600 | 1.25 | -0.2px | Card headings, sub-sections |
| Sub-heading | Verlag/Rubik | 22px (1.375rem) | 600 | 1.3 | -0.15px | Smaller section heads |
| Body Large | System stack | 18px (1.125rem) | 400 | 1.6 | normal | Feature descriptions, intro text |
| Body | System stack | 16px (1.0rem) | 400 | 1.6 | normal | Standard reading text |
| Body Small | System stack | 14px (0.875rem) | 400 | 1.5 | normal | Secondary content, sidebar text |
| Button | System stack | 15px (0.9375rem) | 600 | 1.0 | 0.2px | Button labels |
| Link | System stack | inherit | 400 | inherit | normal | Inline text links |
| Caption | System stack | 13px (0.8125rem) | 500 | 1.4 | normal | Small labels, metadata |
| Caption Small | System stack | 12px (0.75rem) | 400 | 1.33 | normal | Fine print, timestamps |
| Overline | System stack | 12px (0.75rem) | 700 | 1.2 | 1.5px | Section labels, uppercase |
| Code | Monospace | 14px (0.875rem) | 400 | 1.5 | normal | Code snippets, API references |

### Principles
- **Bold headlines, clean body**: Weight 700 for display/heading sizes creates a strong hierarchy against the weight-400 body text. No in-between weights for body -- the contrast is binary and decisive.
- **System font for trust**: The system font stack at body sizes signals "native app" quality and loads instantly. This is a deliberate choice for a B2B analytics product where performance and professionalism matter.
- **Tight tracking at display sizes**: Letter-spacing tightens progressively from -0.5px at 56px to normal at 16px and below.
- **Generous line-height for body**: 1.6 line-height at body sizes provides excellent readability for the explanatory B2B copy that Parse.ly's marketing requires.
- **Uppercase overlines**: Section category labels use 12px weight 700 with 1.5px letter-spacing and uppercase transform -- a common B2B SaaS pattern for introducing section context.

## 4. Component Stylings

### Buttons

**Primary Teal**
- Background: `#2cb67d`
- Text: `#ffffff`
- Padding: 12px 28px
- Radius: 8px
- Font: 15px system stack weight 600, letter-spacing 0.2px
- Shadow: `0 2px 4px rgba(44,182,125,0.3)`
- Hover: `#24a06d` background, shadow intensifies to `0 4px 8px rgba(44,182,125,0.35)`
- Active: `#1f8c5e` background
- Use: Primary CTA ("Get a Demo", "Start Free Trial")

**Secondary / Outlined**
- Background: transparent
- Text: `#2cb67d`
- Padding: 12px 28px
- Radius: 8px
- Border: `2px solid #2cb67d`
- Font: 15px system stack weight 600, letter-spacing 0.2px
- Hover: `#e6f9f0` background, border remains `#2cb67d`
- Use: Secondary actions, paired with primary CTA

**Dark**
- Background: `#0a1628`
- Text: `#ffffff`
- Padding: 12px 28px
- Radius: 8px
- Font: 15px system stack weight 600, letter-spacing 0.2px
- Hover: `#162d4a` background
- Use: Alternative CTA on light sections

**Ghost**
- Background: transparent
- Text: `#3d4f5f`
- Padding: 12px 28px
- Radius: 8px
- Border: `1px solid #d9e0e8`
- Font: 15px system stack weight 600
- Hover: `#f4f6f8` background, border color `#94a3b3`
- Use: Tertiary actions, filters

**Text Link Button**
- Background: transparent
- Text: `#2b7de9`
- Padding: none
- Font: inherit weight 400
- Hover: underline, color `#1a5cb8`
- Use: Inline actions, "Learn more" links

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e8edf2`
- Radius: 12px
- Shadow (resting): `0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04)`
- Shadow (hover): `0 10px 25px rgba(10,22,40,0.08), 0 4px 10px rgba(10,22,40,0.05)`
- Padding: 32px
- Hover: subtle shadow lift, no scale transform
- Transition: `box-shadow 0.25s ease, transform 0.2s ease`

**Feature Card (with icon)**
- Icon area: 48px x 48px circle or rounded square with `#e6f9f0` background, teal icon
- Title: 22px weight 600, `#0a1628`
- Description: 16px weight 400, `#6b7c8f`, line-height 1.6
- Padding: 32px

**Stat/Metric Card**
- Large number: 48px weight 700, `#2cb67d`
- Label: 14px weight 500, `#6b7c8f`
- Used in social proof sections

### Badges / Tags / Pills
**Category Tag**
- Background: `#e6f9f0`
- Text: `#2cb67d`
- Padding: 4px 12px
- Radius: 4px
- Font: 12px weight 600, uppercase, letter-spacing 0.5px

**Neutral Tag**
- Background: `#f4f6f8`
- Text: `#6b7c8f`
- Padding: 4px 12px
- Radius: 4px
- Font: 12px weight 500

### Inputs & Forms
- Background: `#ffffff`
- Border: `1px solid #d9e0e8`
- Radius: 8px
- Padding: 12px 16px
- Font: 16px system stack, weight 400
- Focus: border `#2cb67d`, outline `2px solid rgba(44,182,125,0.2)`, outline-offset 2px
- Label: `#0a1628`, 14px weight 600, margin-bottom 6px
- Placeholder: `#94a3b3`
- Error: border `#ff6b6b`, label color `#ff6b6b`

### Navigation
- Background: `#ffffff` with `backdrop-filter: blur(12px)` and `rgba(255,255,255,0.95)` on scroll
- Height: ~72px
- Logo: Parse.ly wordmark left-aligned, teal (`#2cb67d`) on white, white on dark
- Links: 15px system stack weight 500, `#3d4f5f` text
- Link hover: `#0a1628` text color
- Active link: `#2cb67d` text or bottom border indicator
- CTA: Teal primary button right-aligned ("Get a Demo")
- Mobile: hamburger toggle, full-screen overlay navigation
- Border-bottom: `1px solid #e8edf2` on scroll
- Position: sticky top: 0, z-index: 100

### Testimonial / Quote
- Large quotation mark: `#2cb67d`, decorative
- Quote text: 22px weight 400, `#0a1628`, italic style
- Attribution: 14px weight 600, `#3d4f5f`
- Role/company: 14px weight 400, `#6b7c8f`

### Logo Cloud / Partner Logos
- Grayscale by default: `filter: grayscale(100%); opacity: 0.5`
- Hover: `grayscale(0%); opacity: 1.0`
- Grid layout with generous spacing

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px
- Section padding: 80px-128px vertical on desktop
- Component internal padding: 24px-32px

### Grid & Container
- Max content width: 1200px
- Centered with auto margins
- Hero: centered single-column layout with max-width ~800px for text
- Feature sections: 2-3 column grid with 32px gap
- Full-width sections alternate between white and `#f4f6f8` backgrounds
- Dark sections use `#0a1628` for immersive product showcases
- 12-column grid underlying with common layouts: 6/6, 4/4/4, 3/9 (sidebar/content)

### Whitespace Philosophy
- **Generous and deliberate**: Parse.ly uses substantial whitespace between sections (80-128px) to let each value proposition breathe. This is a considered B2B approach -- the audience is decision-makers who scan, and whitespace creates focus points.
- **Alternating backgrounds**: White and light gray (`#f4f6f8`) sections create a subtle rhythm that visually separates content blocks without heavy borders or dividers.
- **Dark section punctuation**: Navy (`#0a1628`) sections appear strategically -- typically for product screenshots, social proof, or CTAs -- creating dramatic contrast that demands attention.

### Border Radius Scale
- Small (4px): Tags, badges, small UI elements
- Standard (8px): Buttons, inputs, small cards
- Medium (12px): Content cards, containers, image masks
- Large (16px): Featured cards, modal dialogs
- XL (24px): Hero cards, dashboard preview frames
- Pill (9999px): Pill-shaped tags, toggle switches

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional `1px solid #e8edf2` border | Page background, inline text, flat cards |
| Subtle (Level 1) | `0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04)` | Resting cards, navigation |
| Standard (Level 2) | `0 4px 12px rgba(10,22,40,0.08), 0 2px 4px rgba(10,22,40,0.04)` | Hovered cards, dropdowns |
| Elevated (Level 3) | `0 10px 25px rgba(10,22,40,0.08), 0 4px 10px rgba(10,22,40,0.05)` | Featured cards, popovers |
| Deep (Level 4) | `0 20px 40px rgba(10,22,40,0.12), 0 8px 16px rgba(10,22,40,0.06)` | Modals, floating panels |
| CTA Glow | `0 2px 4px rgba(44,182,125,0.3)` | Primary teal buttons -- brand-colored shadow |

**Shadow Philosophy**: Parse.ly uses navy-tinted shadows (`rgba(10,22,40,...)`) rather than pure black, keeping shadows consistent with the brand's navy color system. Shadows are dual-layered -- a larger diffuse layer for atmosphere and a smaller tight layer for grounding. The exception is the primary CTA button, which uses a teal-tinted shadow (`rgba(44,182,125,0.3)`) to create a subtle glow effect that draws the eye to conversion points.

## 7. Do's and Don'ts

### Do
- Use `#2cb67d` (teal) as the single primary accent color -- it IS the brand
- Use `#0a1628` (deep navy) for headings and dark sections -- never pure black
- Keep body text at `#3d4f5f` -- a warm slate that's readable without being harsh
- Use navy-tinted shadows (`rgba(10,22,40,...)`) for all elevated elements
- Apply generous section spacing (80-128px) to let content breathe
- Use uppercase overlines (12px, weight 700, 1.5px letter-spacing) to introduce sections
- Keep border-radius in the 8px-12px range for cards and containers
- Use the system font stack for body text -- performance and professionalism
- Alternate white and `#f4f6f8` section backgrounds for visual rhythm
- Use dual-layer shadows for natural depth

### Don't
- Don't introduce additional brand colors beyond teal -- accent colors are for data visualization only
- Don't use pure black (`#000000`) for text or backgrounds -- always use navy variants
- Don't use rounded/pill-shaped buttons for primary CTAs -- 8px radius is the standard
- Don't use heavy shadows or colored shadows on cards -- keep elevation subtle
- Don't use italic text for body copy -- reserve italic for testimonial quotes only
- Don't use weight 300 (light) anywhere -- Parse.ly is 400 for body, 600-700 for emphasis
- Don't add decorative gradients to backgrounds -- the palette is solid colors only
- Don't use the teal for body text -- it's for interactive elements and accents only
- Don't use border-radius above 16px on cards -- keep it grounded and professional
- Don't skip the overline label pattern for section headers -- it's a key organizational element

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, 56px→36px hero headings, stacked cards |
| Tablet | 640-1024px | 2-column grids, moderate padding reduction |
| Desktop | 1024-1280px | Full 3-column layouts, standard spacing |
| Large Desktop | >1280px | Centered content (1200px max-width), generous margins |

### Touch Targets
- Buttons: minimum 44px touch target height via padding
- Navigation links: comfortable spacing, 48px+ tap area
- Mobile nav: full-screen overlay with large tap targets
- Form inputs: 48px effective height on mobile

### Collapsing Strategy
- Hero: 56px → 48px → 36px heading across breakpoints, weight 700 maintained
- Navigation: horizontal links + CTA → hamburger with slide-out overlay
- Feature cards: 3-column → 2-column → single column stacked
- Dark product sections: maintain full-width, reduce internal padding
- Section spacing: 128px → 80px → 48px vertical padding
- Logo cloud: grid → 2-column → horizontal scroll on mobile
- Stats: inline row → 2x2 grid → stacked

### Image Behavior
- Product screenshots: contained within rounded frames (12-24px radius), maintain aspect ratio
- Dashboard previews: often shown at angle with subtle shadow, flatten on mobile
- Logo images: maintain consistent height, reduce grid columns
- Hero illustrations: full-width on mobile, side-by-side on desktop

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Parse.ly Teal (`#2cb67d`)
- CTA Hover: Teal Dark (`#24a06d`)
- Background: Pure White (`#ffffff`)
- Alt Background: Surface (`#f4f6f8`)
- Heading text: Deep Navy (`#0a1628`)
- Body text: Slate (`#3d4f5f`)
- Secondary text: Muted Slate (`#6b7c8f`)
- Placeholder text: Light Slate (`#94a3b3`)
- Border: Soft Gray (`#d9e0e8`)
- Border Light: Lighter Gray (`#e8edf2`)
- Link: Blue (`#2b7de9`)
- Dark section: Navy 900 (`#0a1628`)
- Dark section card: Navy 800 (`#0f2137`)
- Success/Positive: Teal (`#2cb67d`)
- Error/Negative: Coral (`#ff6b6b`)
- Warning: Amber (`#f5a623`)
- Data Purple: (`#7b68ee`)

### Example Component Prompts
- "Create a hero section on white background. Headline at 48px Rubik weight 700, line-height 1.15, letter-spacing -0.4px, color #0a1628. Subtitle at 18px system font weight 400, line-height 1.6, color #6b7c8f. Teal CTA button (#2cb67d, 8px radius, 12px 28px padding, white text, 15px weight 600) and outlined secondary button (transparent, 2px solid #2cb67d, #2cb67d text, 8px radius)."
- "Design a feature card: white background, 1px solid #e8edf2 border, 12px radius. Shadow: 0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04). Hover shadow: 0 10px 25px rgba(10,22,40,0.08). Icon in 48px circle with #e6f9f0 background. Title at 22px Rubik weight 600, #0a1628. Body at 16px system font weight 400, #6b7c8f, line-height 1.6."
- "Build a navigation bar: white sticky header, 72px height, backdrop-filter blur(12px). Parse.ly logo left (#2cb67d). Links at 15px system font weight 500, #3d4f5f text. Teal CTA 'Get a Demo' right-aligned (#2cb67d bg, white text, 8px radius, 12px 28px padding). Border-bottom: 1px solid #e8edf2."
- "Create a dark product section: #0a1628 background. Overline at 12px weight 700, #2cb67d, uppercase, letter-spacing 1.5px. Headline 36px Rubik weight 700, #ffffff, letter-spacing -0.3px. Body at 16px weight 400, rgba(255,255,255,0.7). Cards inside: #0f2137 background, 1px solid rgba(255,255,255,0.1) border, 12px radius."
- "Design a stat block: large number at 48px Rubik weight 700, #2cb67d. Label at 14px system font weight 500, #6b7c8f. Arrange 3 stat blocks in a row with 32px gap."

### Iteration Guide
1. Teal (`#2cb67d`) is the singular brand color -- use it for CTAs, active states, success indicators, and decorative accents only
2. Weight 700 for headlines (Rubik/Verlag), weight 400 for body (system stack), weight 600 for buttons and sub-headings
3. Shadow formula: dual-layer with `rgba(10,22,40,...)` -- larger diffuse + smaller tight
4. Heading color is `#0a1628` (deep navy), body is `#3d4f5f` (slate), secondary is `#6b7c8f` (muted slate)
5. Border-radius: 8px for buttons/inputs, 12px for cards, 4px for badges
6. Section rhythm: white → light gray (`#f4f6f8`) → white → dark navy (`#0a1628`) for variety
7. Overline pattern: `text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #2cb67d`
8. System font stack for all body text -- no custom fonts below heading level
