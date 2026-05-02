# Design System: Automattic Design

## 1. Visual Theme & Atmosphere

Automattic Design is the portfolio and blog for Automattic's design team — and the site itself is a design statement. Where WordPress.com's marketing site is bold and approachable, automattic.design is quiet, editorial, and deliberately restrained. It reads like a design monograph, not a product landing page.

The typographic identity is a three-font system: **Source Serif 4** (a refined variable serif) for headings brings literary gravitas with surprisingly light weights — H1s at weight 400 feel almost whispered rather than shouted. **Knockout** (a condensed gothic by Hoefler & Co.) appears for high-impact display moments: the mobile menu overlay and large-scale page headers on About Us and Blog, where its compressed, muscular forms create contrast against the delicate serif. **Inter** handles all body text and UI with geometric neutrality.

The color palette is almost monochromatic: black text on white canvas, with a single blue (`#0387ff`) at 80% opacity for interactive elements. This restraint is intentional — on a design portfolio, the work should be the most colorful thing on the page.

Layout is notably narrow: 770px content width creates a reading experience closer to a book than a website. The generous use of `clamp()` across typography and spacing means the site scales fluidly rather than snapping at breakpoints, reinforcing the editorial sensibility.

**Key Characteristics:**
- Source Serif 4 serif headings at light weights (400) — editorial understatement
- Knockout 600 for display/impact moments — mobile menu, page headers
- Inter for body text and UI — clean, geometric, invisible
- Near-monochrome palette: black, white, one blue (`#0387ff` at 80%)
- 770px content width — book-like reading measure
- Extensive fluid typography via `clamp()` — sizes from 218px display down to 12px labels
- Rounded buttons (80px radius) — softer than pills, deliberate and calm
- Blue at 80% opacity (`#0387ffcc`) — the signature interactive color, slightly translucent
- Marquee scrolling text and typing cursor animations — playful editorial details
- Hover image previews on post links — the content reveals itself on interaction
- `prefers-reduced-motion` respected — marquee pauses, animations disabled

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): Primary text, headings, strong emphasis. True black, not softened.
- **White** (`#ffffff`): Page background, card surfaces.
- **Medium Blue** (`#0387ff`): Primary interactive color. Used at 80% opacity (`#0387ffcc`) for buttons.
- **Soft Blue** (`#72b3ff`): Button hover state, secondary interactive.
- **Vibrant Blue** (`#0240e4`): Link hover color, post content links. Deeper, more saturated.

### Neutral Scale
- **Typography 2** (`#646970`): Secondary text, descriptions, meta information.
- **Accent** (`#a7aaad`): Disabled states, muted UI elements.
- **Accent 2** (`#101517`): Dark accents, near-black surfaces.
- **Accent 3** (`#1D2327`): Darker accents, outline button hover border color.
- **Background 2** (`#dcdcde`): Dividers, separators, tag pill backgrounds.
- **Background 3** (`#f6f7f7`): Subtle background tint, tag hover.
- **Background 4** (`#c3c4c7`): Secondary neutral, less common.

### Interactive States
- **Button default**: `#0387ffcc` (Medium Blue at 80% opacity) — the slight translucency is intentional
- **Button hover**: `#72b3ff` (Soft Blue)
- **Button active**: `#0074de`
- **Link default**: inherit color, no underline
- **Link hover**: `#0240e4` (Vibrant Blue) with underline
- **Post content links**: `#0240e4`, always underlined, weight 500
- **Focus**: 2px border emphasis on interactive elements

## 3. Typography Rules

### Font Family
- **Headings**: `Source Serif 4`, with fallback: `serif`
- **Display / Impact**: `Knockout`, loaded as weight 600 only (knockout-67.woff2). Used for mobile menu overlay and large page headers.
- **Body / UI**: `Inter`, with fallbacks: `system-ui, -apple-system, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display 1 | Source Serif 4 | clamp(120px, 7.5rem + 9.6vw, 218px) | 400 | 1.0 | Maximum scale, portfolio-grade |
| Display 2 | Source Serif 4 | clamp(80px, 5rem + 9.8vw, 180px) | 400 | 1.0 | Secondary display |
| Display 2.5 | Source Serif 4 | clamp(54px, 3.375rem + 2.5vw, 80px) | 400 | 1.0 | Tertiary display |
| Display 3 | Source Serif 4 | clamp(40px, 2.5rem + 2vw, 60px) | 400 | 1.0 | Section display |
| Display Impact | Knockout | varies | 600 | 1.0 | Mobile menu, page headers |
| Heading 1 | Source Serif 4 | clamp(24px, 1.5rem + 2.4vw, 48px) | 400 | 1.2 | Page headings |
| Heading 2 | Source Serif 4 | clamp(20px, 1.25rem + 1.2vw, 32px) | 500 | 1.0 | Section headings |
| Heading 3 | Source Serif 4 | clamp(16px, 1rem + 1vw, 26px) | 600 | 1.2 | Sub-headings |
| Paragraph Large | Inter | clamp(20px, 1.25rem + 0.8vw, 28px) | 400 | 1.5 | Lead paragraphs |
| Paragraph Medium | Inter | clamp(18px, 1.125rem + 0.4vw, 22px) | 400 | 1.5 | Intro text |
| Paragraph | Inter | clamp(16px, 1rem + 0.4vw, 20px) | 400 | 1.5 | Standard reading |
| Paragraph Small | Inter | clamp(14px, 0.875rem + 0.2vw, 16px) | 400 | 1.5 | Button text, captions |
| Medium | Inter | clamp(14px, 0.875rem + 0.6vw, 20px) | 400 | 1.5 | Varied contexts |
| Note | Inter | 14px | 400 | 1.5 | Metadata, timestamps |
| Label | Inter | 12px | 400 | 1.5 | Tags, small labels |

### Principles
- **Light headings, heavy display**: H1 at weight 400 is the editorial signature — headings feel like they belong in a magazine, not a marketing page. Knockout at weight 600 provides the counterpoint for moments that need impact.
- **Fluid everything**: Every text size uses `clamp()` with viewport-based interpolation. There are no hard typographic breakpoints — the scale is continuous from 320px to 1600px viewports.
- **Serif for structure, sans for reading**: Source Serif 4 establishes hierarchy and identity; Inter does the reading work. The split is clean and never crossed — body text is always Inter, headings are always Source Serif 4 (with Knockout for select display moments).
- **Three blues for three link contexts**: Default links inherit color. Hovered links turn Vibrant Blue (`#0240e4`). Post-content links are always Vibrant Blue and underlined — a deliberate editorial choice that makes links scannable in long-form content.

## 4. Component Stylings

### Buttons

**Primary (Medium Blue, 80% opacity)**
- Background: `#0387ffcc` (Medium Blue at 80%)
- Text: `#000000`
- Padding: 16px 32px
- Radius: 80px (rounded, not pill)
- Font: Inter, `clamp(14px, ..., 16px)`, weight 500
- Line-height: 1
- Border: none
- Hover: `#72b3ff` (Soft Blue)
- Active: `#0074de`
- Transition: `border-color 0.3s ease, color 0.3s ease, background-color 0.3s ease`
- Focus: 2px border emphasis

**Outline**
- Background: transparent
- Border: 2px solid current color
- Padding: 0.667em 1.333em
- Radius: 80px
- Hover: border and text shift to `#1D2327` (Accent 3)

### Navigation
- Font: Inter at `clamp(14px, ..., 16px)`, weight 400
- Links: no underline, no decoration
- Logo: Automattic SVG wordmark, left-aligned
- Secondary links: Snaps, About Us, Blog
- Mobile: hamburger menu triggers full-screen overlay with Knockout typography
- Line-height: 1.2

### Cards & Post Links

**Post Link Wrapper (Custom Block)**
- Cursor: pointer
- Transition: `all 0.3s ease`
- Hover triggers fixed-position image preview:
  - Size: 280×187px (3:2 aspect ratio)
  - Radius: 4px
  - Opacity: 0 → 1 on hover with `0.2s ease-in-out`
  - Z-index: 9999

### Tags / Pills
- Background: `#dcdcde` (Background 2)
- Text: `#000000`
- Font: Inter 12px, weight 400
- Padding: 4px 8px
- Radius: 2px
- Hover: background shifts to `#f6f7f7` (Background 3)
- White-space: nowrap
- Margin: 0 0 2px 2px

### Quote Block
- Border: 4px solid `#72b3ff` (Soft Blue), left side only
- Font: Source Serif 4, `clamp(16px, ..., 26px)`
- Line-height: 1.2
- Padding-left: 16px
- Margin: ~128px top and bottom (spacing-100)

### Separator
- Border: 2px solid `#dcdcde` (Background 2), top only
- No background, purely structural

### Featured Image
- Border-radius: 4px
- Standard responsive sizing

### Avatar
- Border-radius: 250px (circular)

## 5. Layout Principles

### Spacing System
- `10`: 4px
- `20`: 8px
- `30`: 12px
- `40`: 16px
- `50`: 24px
- `60`: 32px
- `70`: clamp(40px, 3vw, 48px)
- `80`: clamp(48px, 4vw, 64px)
- `90`: clamp(64px, 5vw, 96px)
- `100`: clamp(96px, 7vw, 128px)
- `global-padding`: clamp(16px, 3vw, 50px)

### Grid & Container
- Content width: **770px** — narrow, editorial reading measure
- Wide width: **1340px** — for full-bleed content and images
- Global padding: `clamp(16px, 3vw, 50px)` — fluid edge spacing
- Block gap: `clamp(40px, 3vw, 48px)` (spacing-70 default)
- Constrained layout centers content at 770px with auto margins
- Flex layouts use spacing-70 gap with wrap

### Whitespace Philosophy
- **Book-like measure**: The 770px content width is deliberate — it's the optimal line length for comfortable reading (roughly 65–75 characters in body text). This is a design portfolio, not a marketing funnel; readability trumps information density.
- **Fluid vertical rhythm**: Spacing uses `clamp()` at every level, from block gap to section margins. The largest space (spacing-100) reaches 128px on desktop — enormous breathing room that lets the work speak.
- **Quote margins as punctuation**: Quote blocks get spacing-100 (up to 128px) top and bottom margin, making them visual pauses in the reading flow rather than inline elements.

### Border Radius Scale
- Tags/pills (2px): Minimal rounding, almost sharp
- Images (4px): Subtle softening on featured images and hover previews
- Buttons (80px): Deliberately rounded but not fully pill-shaped — calmer than 9999px
- Avatars (250px): Circular
- Quote border (1px): Nearly square, structural

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default state for everything — the site is intentionally flat |
| Focus | 2px border emphasis | Keyboard focus on buttons and interactive elements |
| Hover Image | Fixed position, opacity fade | Post link hover previews — content reveals on interaction |

**Shadow Presets (defined but rarely used):**
- **Natural**: `6px 6px 9px rgba(0, 0, 0, 0.2)`
- **Deep**: `12px 12px 50px rgba(0, 0, 0, 0.4)`
- **Sharp**: `6px 6px 0px rgba(0, 0, 0, 0.2)`
- **Outlined**: `6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0)`
- **Crisp**: `6px 6px 0px rgb(0, 0, 0)`

**Shadow Philosophy**: automattic.design is essentially shadowless. The preset shadows exist in the WordPress theme system but are not applied to any visible elements on the marketing pages. Depth is created through typography scale, spacing, and the hover image preview system — not through elevation. This is a conscious choice: a flat site where the only "depth" is the content itself floating above the white canvas.

## 7. Do's and Don'ts

### Do
- Use Source Serif 4 for all headings at light weights (400 for H1, 500 for H2, 600 for H3)
- Use Knockout 600 for large-scale display moments (mobile menu, page headers) — it's the impact counterpoint to the delicate serif
- Use Inter for all body text, buttons, navigation, and UI elements
- Use `#0387ffcc` (80% opacity blue) for button backgrounds — the translucency is part of the design
- Keep content at 770px max-width — the narrow measure is intentional
- Use `clamp()` for all font sizes and spacing — no hard breakpoints
- Make post content links always underlined in Vibrant Blue (`#0240e4`)
- Apply 80px radius to buttons — rounded but not pill-shaped
- Use 4px radius on images — barely there, just enough to soften
- Keep the site essentially shadowless — depth comes from scale and spacing

### Don't
- Don't use Source Serif 4 for body text — it's exclusively for headings
- Don't use Knockout for body or UI text — it's a display face for high-impact moments only
- Don't use bold (700+) weights on headings — the light weight (400) IS the identity
- Don't add colors beyond the blue/black/white/gray palette — the monochrome restraint is the point
- Don't use `#0387ff` at full opacity for buttons — the 80% opacity (`cc`) is deliberate
- Don't widen content beyond 770px for reading text — the narrow measure is sacred
- Don't add shadows to cards or containers — the flat aesthetic is intentional
- Don't use 9999px pill radius on buttons — 80px creates a distinctly different, calmer shape
- Don't use fixed font sizes — everything should scale via `clamp()`
- Don't underline navigation links — only post content links get underlines

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <660px | Reduced image sizes, compact padding |
| Tablet | 660–781px | Post link columns adjust, iframe sizing |
| Desktop | >782px | Full layout, max content at 770px |

### Fluid Scaling (Primary Strategy)
Rather than discrete breakpoints, automattic.design relies on `clamp()` for continuous scaling:
- Display text: 120px → 218px (scales with viewport)
- Headings: 24px → 48px
- Body: 16px → 20px
- Spacing: 16px → 50px global padding
- Block gap: 40px → 48px

### Touch Targets
- Buttons: 16px vertical padding, 32px horizontal — generous touch area
- Navigation: standard link spacing with 1.2 line-height
- Tags: 4px 8px padding — compact but tappable

### Collapsing Strategy
- Navigation: standard links → hamburger menu with Knockout display overlay
- Post link columns: adjust padding and gap on mobile
- Content width: 770px max but fluid below that via global padding
- Images: maintain 4px radius at all sizes
- Quote blocks: margins reduce proportionally via spacing-100 clamp
- Marquee: pauses with `prefers-reduced-motion`

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Medium Blue at 80% (`#0387ffcc`)
- Background: White (`#ffffff`)
- Heading text: Black (`#000000`)
- Body text: Typography 2 (`#646970`)
- Link hover: Vibrant Blue (`#0240e4`)
- Button hover: Soft Blue (`#72b3ff`)
- Dividers: Background 2 (`#dcdcde`)

### Brand Assets
- Logo: `https://automattic.design/wp-content/uploads/2025/06/automattic-logo.svg` (SVG wordmark)
- Placement: top-left in navigation, linked to homepage
- Navigation links: Snaps, About Us, Blog

### Example Component Prompts
- "Create a hero section on white background. Headline at clamp(120px, 7.5rem + 9.6vw, 218px) Source Serif 4 weight 400, line-height 1.0, color #000. Subtitle at clamp(16px, 1rem + 0.4vw, 20px) Inter weight 400, color #646970. Rounded CTA button (#0387ffcc background, #000 text, 80px radius, 16px 32px padding)."
- "Design a blog post list: each post is a link wrapper with 0.3s ease transition. On hover, show a fixed-position image preview (280×187px, 4px radius, opacity 0→1 with 0.2s ease-in-out). Post title in Source Serif 4 clamp(24px, ..., 48px) weight 400. Meta in Inter 14px #646970."
- "Build navigation: Inter clamp(14px, ..., 16px) weight 400, no underlines. Automattic SVG logo left. Links: Snaps, About Us, Blog. Mobile: hamburger triggers full-screen overlay with Knockout 600 display text."
- "Create a quote block: 4px left border in #72b3ff, Source Serif 4 clamp(16px, ..., 26px), line-height 1.2, 16px left padding. Generous vertical margins (clamp(96px, 7vw, 128px))."
- "Design tag pills: #dcdcde background, #000 text, Inter 12px, 4px 8px padding, 2px radius. On hover, background shifts to #f6f7f7."

### Iteration Guide
1. Source Serif 4 at weight 400 for headings — the lightness is the identity, never go bold
2. Knockout 600 is reserved for display impact — mobile menu and page headers only
3. Button blue is `#0387ffcc` (80% opacity) — don't use full opacity
4. Content maxes at 770px — this is a reading site, not a dashboard
5. No shadows on anything — the flat, white aesthetic is sacred
6. `clamp()` for all sizing — the site scales continuously, no breakpoint jumps
7. Links in post content are always underlined in `#0240e4` — scannable in long-form text
8. 80px button radius — not 9999px pill, the softer roundness is deliberate
