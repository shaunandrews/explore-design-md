# Design System: WordPress VIP

## 1. Visual Theme & Atmosphere

WordPress VIP's website is the gold standard of enterprise WordPress -- a system that exudes premium sophistication through warm, earthy tones and meticulous typographic craft. The page opens on a warm off-white canvas (`#f5f2f1`) with near-black text (`#13191e`) and a signature gold accent (`#d8a45f`) that functions as both brand anchor and interactive highlight. This isn't the cold blue of typical enterprise software; it's a rich, burnished gold that reads as established luxury -- the color of a bespoke service, not a SaaS dashboard.

The typography is built on `Aktiv Grotesk VF`, a premium variable font, with `Aktiv Grotesk EX` (extended) for accent text and `AkkuratMonoLLWeb-Regular` for code. At display sizes, Aktiv Grotesk runs at weight 700 with fluid `clamp()` scaling up to 6.4rem (102px). The heading hierarchy uses weight 500 for H2-H6, creating a refined, medium-weight presence that communicates authority without shouting. Everything feels considered and bespoke.

What truly distinguishes WordPress VIP is its layered surface system. Rather than flat white or simple gray backgrounds, WPVIP uses a warm gradient layer system (`#fcfafa` to `#f5f2f1`) with colorful multi-stop gradients for accent sections -- soft pastels of teal, green, peach, and coral that create an atmospheric, almost painterly depth. Combined with a sophisticated 6-layer shadow system and pill-shaped buttons, the result is enterprise design that feels like a luxury brand.

**Key Characteristics:**
- Aktiv Grotesk VF as the primary typeface -- premium variable font with refined geometry
- Aktiv Grotesk EX (extended width) for support text and accents
- Warm gold (`#d8a45f`) as the defining brand accent
- Warm off-white (`#f5f2f1`) background instead of pure white
- Pill-shaped buttons (`999999px` radius) as the signature interactive pattern
- Layered surface system with warm gradients between `#fcfafa` and `#f5f2f1`
- Multi-stop colorful gradients for section backgrounds
- 6-layer shadow system for sophisticated depth
- Dark sections use `#13191e` (near-black with warm undertone)
- Fluid `clamp()` for all typography and spacing

## 2. Color Palette & Roles

### Primary
- **Background** (`#f5f2f1`): Primary page background. Warm off-white with a beige undertone.
- **Text Primary** (`#13191e`): Headings and body text. Near-black with a warm blue-gray cast.
- **Brand Gold** (`#d8a45f`): Primary accent, button hover, interactive highlights. A rich, burnished gold.

### Layer System
- **Layer 1** (`#fcfafa`): Lightest surface, card backgrounds, elevated elements.
- **Layer 2**: `linear-gradient(180deg, #fcfafa 0%, #f5f2f1 100%)` -- gradient surface for depth.
- **Layer 4** (`#ffffff`): Pure white for maximum contrast surfaces.
- **Layer Blur** (`#f5f2f1bf`): Semi-transparent for frosted glass effects.

### Gold & Warm Accent Scale
- **Accent 1** (`#dfc39e`): Light gold for gradient endpoints, decorative fills.
- **Accent 8 / Brand Gold** (`#d8a45f`): Primary accent, button hover state.
- **Gold Dark** (`#ba7920`): Button active state, pressed interactions.
- **Gold Darker** (`#8c5407`): Deep gold for dark gradient endpoints.
- **Link Default** (`#9a6014`): Standard link color, warm brown-gold.
- **Link Hover** (`#7a4909`): Darker link hover, visited state.
- **Link Active** (`#522e03`): Darkest link state.

### Warm Accent Colors
- **Salmon** (`#fbb7b4`): Accent 2, decorative.
- **Coral** (`#ff8872`): Accent 3, gradient highlights.
- **Peach** (`#ffa378`): Accent 4, warm decorative.
- **Orange** (`#fe9f5f`): Accent 5, warm highlight.
- **Amber** (`#ffb84a`): Accent 6, bright warm accent.
- **Green** (`#6dd18b`): Accent 7, success and positive.

### Neutral Text
- **Text Secondary** (`#444140`): Descriptions, secondary content.
- **Helper** (`#6a6766`): Tertiary text, form helpers.
- **Placeholder** (`#8f8c8b`): Input placeholders.
- **Disabled** (`#bfbcbb`): Disabled states.
- **Inverse** (`#fbfbfb`): White text on dark backgrounds.

### Border Scale
- **Border 1** (`#13191e`): Strong borders, matching primary text.
- **Border 2** (`#514e4d`): Medium borders.
- **Border 3** (`#bfbcbb`): Subtle borders.
- **Border 4** (`#d7d4d3`): Lightest borders, dividers.
- **Border Accent** (`#ba7920`): Gold-accent borders for active/focus states.

### Status Colors
- **Error**: `#bf2a23` text on `#ffdedb` background
- **Warning**: `#985600` text on `#ffe2c2` background
- **Info**: `#007586` text on `#ddebf3` background
- **Success**: `#007934` text on `#d7efdf` background

### Tag Colors (9 variants)
- **Gray**: bg `#e3e0df`, icon `#5e5b5a`
- **Blue**: bg `#cde6eb`, icon `#006979`
- **Green**: bg `#c6ead0`, icon `#006d29`
- **Red**: bg `#ffd5ce`, icon `#ad221f`
- **Gold**: bg `#eae3da`, icon `#8c5407`
- **Yellow**: bg `#ffd8a5`, icon `#894b00`
- **Orange**: bg `#ffd7bd`, icon `#a53100`
- **Salmon**: bg `#fed6ce`, icon `#993c2b`
- **Pink**: bg `#ffd6d2`, icon `#894755`

## 3. Typography Rules

### Font Family
- **Primary / Display / Body**: `Aktiv Grotesk VF` (variable font)
- **Accent / Support Text**: `Aktiv Grotesk EX` (extended width)
- **Monospace / Code**: `AkkuratMonoLLWeb-Regular`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Aktiv Grotesk VF | clamp(2.125rem, 7.7vw, 6.4rem) | 700 | 1.0 | tight (-0.01em) | Maximum impact, up to ~102px |
| H1 | Aktiv Grotesk VF | clamp(1.57rem, 1.04rem + 2.69vw, 3.81rem) | 700 | 1.0 | tight | Primary page headings |
| H2 | Aktiv Grotesk VF | clamp(1.38rem, 1.08rem + 1.52vw, 2.64rem) | 500 | clamp(1.1em, 1.25em + -0.4vw, 1.2em) | tight | Section headings |
| H3 | Aktiv Grotesk VF | clamp(1.30rem, 1.08rem + 1.09vw, 2.20rem) | 500 | 1.2 | tight | Sub-section headings |
| H4 | Aktiv Grotesk VF | clamp(1.14rem, 1.04rem + 0.47vw, 1.53rem) | 500 | 1.3 | normal | Card headings |
| H5-H6 | Aktiv Grotesk VF | clamp(1.07rem, 1.02rem + 0.25vw, 1.28rem) | 500 | 1.3 | normal | Minor headings |
| Paragraph 1 | Aktiv Grotesk VF | clamp(1.14rem, 1.04rem + 0.47vw, 1.53rem) | 400 | 140% | normal | Large body text |
| Paragraph 2 | Aktiv Grotesk VF | clamp(1rem, 4vw, 1.125rem) | 400 | 140% | normal | Standard body |
| Body 3 | Aktiv Grotesk VF | 18px | 400 | 140% | normal | Standard body text |
| Body 2 | Aktiv Grotesk VF | 16px | 400 | 140% | normal | Default body |
| Body 1 | Aktiv Grotesk VF | 14px | 400 | 140% | normal | Small body |
| Support Text 2 | Aktiv Grotesk EX | 16px | 500 | 140% | normal | Extended width accent labels |
| Support Text 1 | Aktiv Grotesk EX | 12px | 500 | 140% | normal | Small accent labels |
| Caption 1 | Aktiv Grotesk VF | 12px | 400 | 140% | 0.03em (loose) | Labels, metadata |
| Caption 2 | Aktiv Grotesk VF | 14px | 400 | 140% | 0.03em (loose) | Larger captions |
| Helper Caps | Aktiv Grotesk VF | 12px | 400 | 140% | 0.03em | Uppercase helper text |
| Code 1 | AkkuratMonoLLWeb | 14px | 400 | 140% | normal | Inline code |
| Code 2 | AkkuratMonoLLWeb | 16px | 400 | 140% | normal | Code blocks |
| Quote 1 | Aktiv Grotesk VF | clamp(1.22rem, 1.07rem + 0.75vw, 1.84rem) | 400 | 140% | normal | Small quotes |
| Quote 2 | Aktiv Grotesk VF | clamp(1.38rem, 1.08rem + 1.52vw, 2.64rem) | 400 | 140% | normal | Medium quotes |
| Quote 3 | Aktiv Grotesk VF | clamp(1.48rem, 1.07rem + 2.04vw, 3.17rem) | 400 | 140% | normal | Large display quotes |

### Letter Spacing Scale
- **Tight**: `-0.01em` (headings)
- **None**: `0em` (body)
- **Loose**: `0.03em` (captions, helpers, uppercase text)

### Principles
- **Premium variable font**: Aktiv Grotesk VF provides refined, geometric letterforms with smooth weight interpolation. This is not a system font -- it's a deliberate brand choice.
- **Extended width accent**: Aktiv Grotesk EX creates a distinctive, wide-set typographic voice for labels and support text, adding visual variety without a second typeface family.
- **700 for display, 500 for sections, 400 for body**: A three-tier weight system that creates clear hierarchy without extremes.
- **140% line-height universal**: Nearly all body text uses 140% line-height for consistent, comfortable reading.
- **Fluid everything**: All headings, spacing, and many body sizes use `clamp()` for seamless responsive behavior.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#13191e`
- Text: `#fcfafa`
- Padding: `clamp(0.50rem, 0.81rem + -0.30vw, 0.75rem) 1.50rem`
- Radius: `999999px` (pill)
- Font-size: `clamp(1.00rem, 1.16rem + -0.15vw, 1.13rem)`
- Font-weight: 500
- Border: none
- Hover: bg `#d8a45f`, text `#13191e`
- Active: bg `#ba7920`, text `#13191e`
- Disabled: bg `#827f7e`

**Display (Gradient)**
- Background: `linear-gradient(55deg, #d8a45f 10%, #dfc39e 90%)`
- Text: `#13191e`
- Hover: `linear-gradient(55deg, #8c5407 10%, #c5832a 90%)`
- Active: bg `#8c5407`, text `#ffffff`

**Secondary (Outline)**
- Background: transparent
- Text: `#13191e`
- Border: inherits from border system
- Hover: bg `#d8a45f`
- Active: bg `#ba7920`

**Tertiary (Ghost)**
- Background: transparent
- Hover: bg `#ebe9e8`
- Active: bg `#bfbcbb`

### Cards & Containers
- Background: `#ffffff` (Layer 4) or `#fcfafa` (Layer 1)
- Border: `1px solid #d7d4d3` (Border 4) or none
- Radius: 16px (medium), 32px (large), 40px (x-large)
- Shadow (medium): `0px 1px 2px rgba(0,0,0,0.03), 0px 15px 30px rgba(0,0,0,0.07)`
- Shadow (high): 6-layer progressive shadow system
- Padding: responsive medium to large

### Tags / Badges
- 9 color variants (gray, blue, green, red, gold, yellow, orange, salmon, pink)
- Background: muted tint color
- Text: `#13191e` (always dark for readability)
- Icon: variant-specific color
- Radius: pill (implied from design system)
- Each variant has hover and active states

### Inputs & Forms
- Background: transparent
- Border: `1px solid #bfbcbb` (Border 3)
- Focus: `#0F62FE` outline (blue focus ring)
- Placeholder: `#8f8c8b`
- Helper text: `#6a6766`, 12px, letter-spacing 0.03em

### Navigation
- Mega-menu structure with product categories, solutions by industry/department, resources
- Frosted glass header: bg `#f5f2f1bf` with backdrop blur
- Icons paired with navigation items
- Featured content cards in dropdown panels

### Icon System
- Primary: `#13191e`
- Secondary: `#6a6766`
- Helper: `#9b9796`
- Background: `#cbc7c6`
- Inverse: `#fcfafa`
- Disabled: `#bfbcbb`

## 5. Layout Principles

### Spacing System (Responsive)
- X-Small: `clamp(0.75rem, 0.69rem + 0.30vw, 1.00rem)`
- Small: `clamp(1.00rem, 0.88rem + 0.60vw, 1.50rem)`
- Medium: `clamp(1.50rem, 1.38rem + 0.60vw, 2.00rem)`
- Large: `clamp(2.00rem, 1.64rem + 1.81vw, 3.50rem)`
- X-Large: `clamp(3.50rem, 3.14rem + 1.81vw, 5.00rem)`
- XX-Large: `clamp(5.00rem, 4.52rem + 2.41vw, 7.00rem)`
- XXX-Large: `clamp(7.00rem, 6.28rem + 3.61vw, 10.00rem)`

### Spacing System (Static)
- X-Small: 4px, Small: 8px, Medium: 12px, Large: 16px
- X-Large: 24px, XX-Large: 32px, XXX-Large: 56px

### Grid & Container
- Center content: 744px
- Wide content: 1008px
- Full content: 1536px
- Global padding: `clamp(1.00rem, 0.40rem + 3.01vw, 3.50rem)`

### Breakpoints
| Name | Width |
|------|-------|
| S | 320px |
| M | 656px |
| L | 1048-1311px |
| XL | 1312px |
| XXL | 1536px |
| Max | 1648px |

### Whitespace Philosophy
- **Warm and spacious**: Generous responsive spacing (up to 10rem / 160px for XXX-Large) creates a sense of luxury and breathing room befitting an enterprise brand.
- **Layered depth**: Background gradients and surface layers create visual separation without relying solely on whitespace.
- **Progressive density**: Marketing pages are spacious; product/feature content areas are more compact.

### Border Radius Scale
- X-Small (4px): Fine elements
- Small (8px): Inputs, compact cards
- Medium (16px): Standard cards
- Large (32px): Featured cards, sections
- X-Large (40px): Hero elements
- XX-Large (56px): Maximum rounding
- Pill (999999px): Buttons, tags

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default surfaces |
| Low (Level 1) | `0px 1px 1px rgba(0,0,0,0.15), 0px 1px 5px rgba(0,0,0,0.05)` | Subtle card lift |
| Medium (Level 2) | `0px 1px 2px rgba(0,0,0,0.03), 0px 15px 30px rgba(0,0,0,0.07)` | Standard cards |
| High (Level 3) | 6-layer progressive: `0px 2.767px 2.214px`, `0px 6.65px 5.32px`, `0px 12.522px 10.017px`, `0px 22.336px 17.869px`, `0px 41.778px 33.422px`, `0px 100px 80px` | Featured content, modals |

**Shadow Philosophy**: WPVIP uses a sophisticated multi-layer shadow system where the "High" level stacks 6 progressive layers with increasing blur and offset. This creates a photorealistic sense of elevation where the shadow softens and spreads naturally as distance increases. All shadows are neutral black at very low opacity (0.02-0.07), keeping the warm palette undisturbed.

### Gradient Surfaces
- Neutral: warm gradients between `#fcfafa` and `#f5f2f1`
- Colorful: multi-stop gradients mixing teal (`#cde6eb`), green (`#d7efdf`), peach (`#ffefe5`), coral (`#ffeceb`)
- Dark: deep atmospheric gradients mixing dark reds, teals, and greens on `#13191e`

## 7. Do's and Don'ts

### Do
- Use `Aktiv Grotesk VF` for all text, with `Aktiv Grotesk EX` for accent/support labels
- Use `#d8a45f` (brand gold) as the primary interactive accent
- Use `#f5f2f1` (warm off-white) as the page background -- never pure white for large surfaces
- Use `#13191e` for primary text -- it's warm near-black, not pure black
- Use pill-shaped buttons (`999999px` radius) for all interactive buttons
- Use the multi-layer shadow system for elevated elements
- Use `clamp()` for all heading sizes and responsive spacing
- Use 140% line-height for body text universally
- Use the warm colorful gradients for section backgrounds
- Use the 9-color tag system with dark text for readability

### Don't
- Don't use pure white (`#ffffff`) as the page background -- save it for cards (Layer 4)
- Don't use pure black (`#000000`) for text -- always `#13191e`
- Don't use border-radius values between 56px and 999999px -- it's either rounded or pill
- Don't use the brand gold for body text -- it's for interactive elements and accents only
- Don't use cool-toned grays -- WPVIP's neutral palette is warm (compare `#444140` vs typical `#4a4a4a`)
- Don't skip the gradient surface layers -- flat sections lose the WPVIP character
- Don't use heavy shadows on warm background sections -- shadows are for elevated cards on layer surfaces
- Don't mix Aktiv Grotesk EX into headings or body -- it's only for support text and accent labels

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| S (Mobile) | 320px | Single column, minimum spacing |
| M (Tablet) | 656px | 2-column where appropriate |
| L (Desktop) | 1048-1311px | Full layout, multi-column grids |
| XL (Large) | 1312px | Wide content unlocked (1008px) |
| XXL (Max) | 1536px | Full content width, maximum spacing |

### Touch Targets
- Pill buttons with generous padding via `clamp()` vertical padding
- Navigation with icon-enhanced touch targets
- Tags with adequate hit areas

### Collapsing Strategy
- Display Hero: 6.4rem (102px) -> 2.125rem (34px) via `clamp()` (smooth scaling)
- H1: 3.81rem -> 1.57rem via `clamp()`
- Spacing: XXX-Large 10rem (160px) -> 7rem (112px) via `clamp()`
- Navigation: mega-menu -> mobile toggle
- Grid: multi-column flex -> stacked single column
- Global padding: 3.50rem -> 1.00rem via `clamp()`

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Near-black (`#13191e`)
- CTA Hover: Brand Gold (`#d8a45f`)
- CTA Active: Gold Dark (`#ba7920`)
- Page Background: Warm Off-white (`#f5f2f1`)
- Card Surface: Layer 1 (`#fcfafa`) or Layer 4 (`#ffffff`)
- Heading text: Near-black (`#13191e`)
- Body text: Near-black (`#13191e`)
- Secondary text: Warm Gray (`#444140`)
- Helper text: Medium Gray (`#6a6766`)
- Link: Warm Brown (`#9a6014`)
- Link Hover: Dark Brown (`#7a4909`)
- Border: Light Warm (`#d7d4d3`)
- Dark section: Near-black (`#13191e`)

### Example Component Prompts
- "Create a hero section on `#f5f2f1` background. Headline using Aktiv Grotesk at clamp(2.125rem, 7.7vw, 6.4rem), weight 700, line-height 1.0, letter-spacing -0.01em, color #13191e. Subtitle at clamp(1.14rem, 1.04rem + 0.47vw, 1.53rem) weight 400, line-height 140%, color #444140. Dark pill CTA button (#13191e bg, #fcfafa text, 999999px radius, clamp padding) that turns gold (#d8a45f) on hover."
- "Design a card on `#fcfafa` background, 32px border-radius, medium shadow (0px 1px 2px rgba(0,0,0,0.03), 0px 15px 30px rgba(0,0,0,0.07)). Title at H4 size (clamp 1.14-1.53rem) weight 500, color #13191e. Body at 16px weight 400, line-height 140%, color #444140."
- "Build a colorful section with gradient background: linear-gradient(145.9deg, #cde6eb 7.11%, transparent 90.25%), linear-gradient(294.32deg, #d7efdf -14.26%, transparent 62.44%), #ffefe5. White cards (Layer 4) with 32px radius floating above."
- "Create a tag system: pill-shaped badges with muted color backgrounds, dark text (#13191e), and colored icons. Gold variant: bg #eae3da, icon #8c5407. Green variant: bg #c6ead0, icon #006d29."
- "Design a dark section: #13191e background with atmospheric gradient overlay. Inverse text (#fbfbfb). Gold gradient display button (linear-gradient(55deg, #d8a45f 10%, #dfc39e 90%), #13191e text, 999999px radius)."

### Iteration Guide
1. Always use `Aktiv Grotesk VF` for primary text; use `Aktiv Grotesk EX` only for support/accent labels
2. Page background is `#f5f2f1` (warm off-white), not `#ffffff` -- white is reserved for card surfaces
3. Buttons are pill-shaped (`999999px`), primary is dark (`#13191e`) turning gold (`#d8a45f`) on hover
4. Heading weights: 700 for H1/display, 500 for H2-H6, 400 for body/quotes
5. Line-height is 140% for body, 1.0-1.2 for headings, with responsive `clamp()` on heading line-heights
6. Shadow system: Low (subtle), Medium (2-layer), High (6-layer progressive) -- all neutral black at low opacity
7. Use colorful multi-stop gradients for section backgrounds -- they define the WPVIP atmosphere
8. Dark sections use `#13191e` with atmospheric dark gradients mixing deep reds, teals, and greens
9. Border-radius scale: 8px, 16px, 32px, 40px for containers; 999999px for buttons and tags
10. The gold accent scale runs from `#dfc39e` (light) through `#d8a45f` (brand) to `#522e03` (darkest link active)
