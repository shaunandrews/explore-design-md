# Design System: WordPress.com

## 1. Visual Theme & Atmosphere

WordPress.com's marketing site is a confident, approachable powerhouse — it pairs bold blue CTAs with generous whitespace and warm charcoal tones. The design says "we're the platform that powers 43% of the web" without being intimidating.

The typographic identity is built on a serif + sans-serif pairing: **Recoleta** (a warm, rounded serif) for headlines gives the brand an editorial, almost magazine-like personality, while **Inter** handles body text with clean geometric neutrality. This pairing is what separates WordPress.com from the developer-tool aesthetic — it feels like a publishing platform, not a code editor. **Space Mono** in green (`#8DC716`) appears for "code personality" moments, bridging the editorial brand with WordPress's developer roots.

The hero sections are massive — 100px Recoleta on desktop — but the rounded pill buttons and soft shadows keep everything friendly. Shadows appear on interaction, not at rest: the signature move is a blue-tinted hover glow (`rgba(30, 45, 255, 0.2)`) that subtly reinforces the brand color when users engage. Navigation uses a frosted glass effect (`backdrop-filter: blur(60px)`) that feels modern without competing with content.

**Key Characteristics:**
- Recoleta serif headlines + Inter sans-serif body — editorial warmth meets geometric clarity
- Vibrant blue accent (`#3858e9`) on white canvas — the signature
- Pill-shaped buttons (`9999px` radius) as the dominant interactive pattern
- Warm charcoal (`#1d2327`) for dark sections, never pure black
- Green accent (`#8DC716`) in Space Mono for code-personality moments
- Hero type that scales 50px → 100px with tight letter-spacing (-3px)
- Blue-tinted hover glow on interactive cards — shadows are emotional, not structural
- Frosted glass navigation with `backdrop-filter: blur(60px)`
- Pattern overlays (dots, dashes) on dark and light feature blocks
- `prefers-reduced-motion` respected — transitions disabled, hover scales removed

## 2. Color Palette & Roles

### Primary
- **WordPress Blue** (`#3858e9`): Primary CTAs, links, accent surfaces. The brand's signature action color.
- **Interactive Blue** (`#212cff`): Form submit buttons, focus rings, bright highlights. Reserved for high-emphasis interactive moments.
- **Charcoal** (`#1d2327`): Dark backgrounds, primary text on light surfaces. Warm and approachable — not pure black.
- **White** (`#ffffff`): Page background, button text on dark, card surfaces.

### Accent
- **Core Green** (`#8DC716`): Code-personality accent, always paired with Space Mono. Bridges editorial brand with developer roots.
- **Hosting Green** (`#069e08`): Gradient endpoint for hosting CTAs. Used in `linear-gradient(90deg, #3858e9 0%, #069e08 100%)` border trick.
- **Purple** (`#873EFF`): Premium and upgrade contexts, pricing accents.

### Neutral Scale
- **Near Black** (`#111111`): High-emphasis heading text, chip labels.
- **Gray 600** (`#666666`): Body text, placeholder text, secondary descriptions.
- **Gray 500** (`#8C8F94`): Muted labels, tertiary text, pricing headers.
- **Gray 200** (`#DCDCDE`): Borders on dark surfaces, light descriptions on charcoal.
- **Gray 100** (`#ebebeb`): Light surface backgrounds, dividers, feature block backgrounds.
- **Gray 50** (`#f6f7f7`): Subtle background tint, code surfaces, card screenshot areas.

### Interactive & Overlay
- **Blue Tint** (`rgba(30, 44, 255, 0.12)`): Soft blue overlay for hover states, light interactive surfaces.
- **Chip Surface** (`rgba(0, 0, 0, 0.05)`): Suggestion chip backgrounds with frosted glass (`backdrop-filter: blur(10px)`).
- **Pink Highlight** (`rgba(254, 212, 248, 0.10)`): Inline text highlight backgrounds, 3px radius.
- **Light Blue Surface** (`rgba(243, 244, 254, 1)`): Tinted section backgrounds.

### Shadows & Depth
- **Subtle Rest** (`0 1px 3px rgba(0, 0, 0, 0.08)`): Resting card shadow — barely visible.
- **Blue Hover Glow** (`0px 0.83px 12.49px 1.67px rgba(30, 45, 255, 0.2)`): Card hover state — the signature blue-tinted shadow.
- **Lifted** (`0 10px 28px rgba(0, 0, 0, 0.14)`): Hero CTA hover, elevated panels.
- **Active** (`0 6px 18px rgba(0, 0, 0, 0.12)`): CTA pressed/active state.

## 3. Typography Rules

### Font Family
- **Headlines**: `Recoleta`, with fallbacks: `Georgia, serif`
- **Body / UI**: `Inter`, with fallbacks: `system-ui, -apple-system, sans-serif`
- **Code Accent**: `Space Mono`, with fallbacks: `monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Recoleta | 100px (desktop) / 50px (mobile) | 600 | 1.0–1.1 | -3px | Maximum impact, tight tracking |
| Hero Variant | Recoleta | 68–78px | 600 | 1.1 | -3px | Feature-specific hero sizes |
| Section Heading | Recoleta | 50px | 600 | 1.2 | -1px | Major section titles |
| Sub-heading | Recoleta | 32px | 600 | 1.25 | normal | Card section headings |
| Card Title | Inter | 24px | 600 | 1.33 | normal | Feature card headings |
| Body Large | Inter | 22px | 400 | 1.4 | normal | Introductions, subtitles |
| Body | Inter | 18px | 400 | 1.5 | normal | Standard reading text |
| Body Small | Inter | 16px | 400 | 1.5 | normal | UI text, descriptions |
| Button / Link | Inter | 16px | 500 | 1.5 | normal | Buttons, navigation links |
| Caption / Nav | Inter | 14px | 500 | 1.43 | normal | Nav links, captions, small buttons |
| Nano / Badge | Inter | 12px | 600 | 1.25 | normal | Badges, tags, small labels |
| Code Accent | Space Mono | varies | 400 | 1.5 | normal | Always in Core Green (`#8DC716`) |

### Principles
- **Serif for display, sans for everything else**: Recoleta is never used below 32px. It's a display face that provides editorial warmth at headline sizes. Inter takes over at 24px and below.
- **Three weights, strict roles**: 400 (body/reading), 500 (UI/interactive), 600 (headings/emphasis). The system creates hierarchy through font pairing and size, not weight variation.
- **Compression at scale**: Hero text uses -3px letter-spacing — the tightest tracking on the site. Tracking relaxes to -1px at 50px, and normalizes at 32px and below.
- **Text wrapping**: `text-wrap: balance` on headlines for clean line breaks. `text-wrap: pretty` on body text for widow prevention.

## 4. Component Stylings

### Buttons

**Primary Blue (Pill)**
- Background: `#3858e9`
- Text: `#ffffff`
- Padding: 10px 24px
- Radius: 9999px (full pill)
- Font: Inter 16px weight 500
- Hover: slight opacity shift
- Focus: `2px solid #212cff`, outline-offset 3px
- Use: Main CTAs ("Get Started", "Start Free")

**Primary Dark (Pill)**
- Background: `#1d2327`
- Text: `#ffffff`
- Padding: 10px 24px
- Radius: 9999px
- Font: Inter 16px weight 500
- Use: Secondary CTAs ("Start Building")

**Outline (Pill)**
- Background: transparent
- Text: `#1d2327`
- Border: 2px solid `#1d2327`
- Padding: 8px 22px
- Radius: 9999px
- Use: Tertiary actions ("Learn More")

**Gradient Border (Hosting CTA)**
- Background: `#1d2327` (content area)
- Border: 1px solid transparent with `linear-gradient(90deg, #3858e9 0%, #069e08 100%) border-box`
- Padding: 10px 24px
- Radius: 9999px
- Use: Hosting-specific CTAs

**Circular Submit**
- Background: `#212cff`
- Radius: 100%
- Size: 45×45px
- Font: 24px (arrow icon)
- Use: AI prompt form submit button

### Cards & Containers

**Theme / Feature Card**
- Background: `#ffffff`
- Radius: 8px
- Shadow (rest): `0 1px 3px rgba(0, 0, 0, 0.08)`
- Shadow (hover): `0px 0.83px 12.49px 1.67px rgba(30, 45, 255, 0.2)` — blue-tinted glow
- Transition: `all 0.3s ease-in-out`
- Width: min 310px, max 426px, fluid 42vw
- Screenshot area on top, content below with 16px padding

**Feature Block (Light — Website Builder)**
- Background: `#ebebeb`
- Radius: 8px
- Overlay: dash-pattern background image at 19px repeat
- Full-width, overflow hidden

**Feature Block (Dark — Hosting)**
- Background: `#1d2327`
- Radius: 8px
- Overlay: dot-pattern (`radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)` at 14px) with `mask-image: linear-gradient(to bottom, transparent 20%, black 80%)`
- Text color: `#ffffff`, descriptions in `#DCDCDE`

### Chips & Badges

**Suggestion Chip**
- Background: `rgba(0, 0, 0, 0.05)`
- Text: `#111111`
- Radius: 12px
- Font: Inter 14px weight 400
- Backdrop: `backdrop-filter: blur(10px)`
- Padding: 8px 14px

**Plan Badge**
- Background: `#1d2327`
- Text: `#ffffff`
- Padding: 5px 11px
- Font: Inter 12px weight 600
- Line-height: 1.25rem
- Use: "Most popular", "Best value" labels on pricing

### Navigation
- Sticky, frosted glass: `backdrop-filter: blur(60px)`, semi-transparent background
- Radius: 12px on desktop
- WordPress.com wordmark left-aligned
- Links: Inter 14px weight 500, `#666666` text
- CTA: blue pill button ("Get Started") right-aligned
- Mobile: hamburger menu collapse

### Forms

**AI Prompt Input**
- Radius: 24px
- Padding: 20px
- Background: `#ffffff`
- Placeholder: `#666666`
- Height: 100px (collapsed), expands on content
- Submit: circular `#212cff` button, positioned absolute right
- Focus: `2px solid #212cff`

## 5. Layout Principles

### Spacing System
- Scale: `0.44rem` (7px) → `0.67rem` (11px) → `1rem` (16px) → `1.5rem` (24px) → `2.25rem` (36px) → `3.38rem` (54px) → `5.06rem` (81px)
- The scale follows a ~1.5× multiplier, creating consistent vertical rhythm

### Grid & Container
- Max outer width: 1440px
- Content max width: ~1200px centered
- Subheader max width: 865px
- Grid gap: 0.5em default
- Hero: centered single-column with generous top padding
- Feature sections: 2–3 column grids for cards
- Dark and light feature blocks span full container width

### Whitespace Philosophy
- **Publishing-grade spacing**: Generous vertical padding between sections (80px+). The whitespace communicates editorial confidence — this is a platform built for content creators, and the site practices what it preaches.
- **Hero breathing room**: Hero sections have 96px+ top padding, giving the massive Recoleta headlines room to breathe.
- **Compact components, spacious sections**: Cards and chips are tightly packed internally, but sections are separated by substantial whitespace.

### Border Radius Scale
- Inline highlights (3px): Text highlight backgrounds
- Standard cards (8px): Cards, feature blocks
- Chips and containers (12px): Suggestion chips, navigation bar
- Form inputs (24px): Textareas, large inputs
- Pill (9999px): All buttons — the signature shape
- Circle (100%): Submit buttons, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text blocks |
| Subtle (Level 1) | `0 1px 3px rgba(0, 0, 0, 0.08)` | Resting cards, containers |
| Blue Glow (Level 2) | `0px 0.83px 12.49px 1.67px rgba(30, 45, 255, 0.2)` | Card hover — the signature blue-tinted glow |
| Lifted (Level 3) | `0 10px 28px rgba(0, 0, 0, 0.14)` | Hero CTA hover, elevated panels |
| Active (Level 3a) | `0 6px 18px rgba(0, 0, 0, 0.12)` | CTA pressed/active state |
| Focus (Accessibility) | `2px solid #212cff` outline, 3px offset | Keyboard focus on all interactive elements |
| Frosted (Surface) | `backdrop-filter: blur(60px)` | Navigation bar, overlay surfaces |

**Shadow Philosophy**: WordPress.com uses shadows sparingly at rest and expressively on interaction. The signature is the **blue-tinted hover glow** — `rgba(30, 45, 255, 0.2)` — which subtly reinforces the brand color when users engage. This is the opposite of structural shadow-as-border approaches; here, shadows are emotional. Cards feel flat until you interact with them, at which point they lift with a warm blue aura. The frosted glass navigation adds a second depth layer — content scrolls behind it with a soft blur, creating spatial hierarchy without heavy shadows.

### Decorative Depth
- Pattern overlays: dash-pattern on light blocks (`#ebebeb`), dot-pattern on dark blocks (`#1d2327`) with gradient mask
- Hero CTA: `transform: scale(1.02)` + `filter: contrast(1.01)` on image hover, with `0.35s cubic-bezier(0.4, 0, 0.2, 1)` transition
- No background color variation between white sections — separation comes from spacing and content density

## 7. Do's and Don'ts

### Do
- Use Recoleta for all headlines and section headings — it's the brand's editorial voice
- Use Inter for body text, UI labels, buttons, and navigation
- Use pill-shaped buttons (`9999px`) for all primary and secondary CTAs
- Apply the blue-tinted hover glow (`rgba(30, 45, 255, 0.2)`) on interactive cards
- Use `#1d2327` (charcoal) for dark sections — it's warmer than black
- Use `#3858e9` as the primary action color across the entire page
- Apply `backdrop-filter: blur(60px)` on the sticky navigation
- Use Space Mono in `#8DC716` green for code-personality accents
- Apply `text-wrap: balance` on headlines for clean line breaks
- Respect `prefers-reduced-motion` — disable transitions and scale transforms
- Use the spacing scale (0.44rem → 5.06rem) for consistent vertical rhythm

### Don't
- Don't use Inter for headlines — Recoleta is what gives WordPress.com its identity
- Don't use pure black (`#000000`) for backgrounds — always `#1d2327`
- Don't use square or slightly-rounded buttons — the pill shape is non-negotiable
- Don't mix in block editor color presets (vivid-red, luminous-orange) — those are for the editor, not the marketing site
- Don't use heavy drop shadows at rest — shadows appear on hover and interaction only
- Don't skip the frosted glass effect on navigation — it's a key signature
- Don't use `#212cff` (Interactive Blue) for general CTAs — reserve it for form submits and focus rings
- Don't apply letter-spacing tighter than -3px — that's the maximum compression for hero text
- Don't use Recoleta below 32px — it's a display face, not a body face
- Don't use pattern overlays (dots, dashes) outside of feature blocks — they're section-specific

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <480px | Full-width buttons, tight single column |
| Mobile | 480–767px | Stacked layout, side images hidden |
| Tablet | 768–959px | Frosted nav visible, subheader max 865px |
| Desktop | 960–1079px | Hero text jumps to 70–100px, full card grids |
| Large Desktop | 1080–1151px | Image layout adjustments, tighter margins |
| XL Desktop | >1152px | Full layout, maximum container width |

### Touch Targets
- Pill buttons: 10px+ vertical padding, comfortable tap area
- Suggestion chips: 8px 14px padding with 14px font size
- Navigation links: adequate spacing at 14px
- Circular submit button: 45×45px — generous touch target

### Collapsing Strategy
- Hero: 100px Recoleta → 50px below 960px, maintains negative tracking proportionally
- Navigation: frosted bar with links + CTA → hamburger menu below 768px
- Feature cards: fluid grid → single column stacked
- Theme cards: 42vw fluid → full width on mobile
- Decorative images: side images hidden on mobile (display: none)
- Animated paths: bent SVG lines → straight lines on mobile
- Full-width buttons: `.is-mobile-full-width` triggers at <480px
- Section spacing: 80px+ → reduced on mobile

### Image Behavior
- Feature screenshots maintain aspect ratio at all sizes
- Hero CTA images scale with `transform: scale(1.02)` on hover (disabled with reduced motion)
- Pattern overlays (dots, dashes) maintain their repeat size across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: WordPress Blue (`#3858e9`)
- Background: White (`#ffffff`)
- Heading text: Charcoal (`#1d2327`)
- Body text: Gray 600 (`#666666`)
- Focus ring: Interactive Blue (`#212cff`)
- Dark surface: Charcoal (`#1d2327`)
- Code accent: Core Green (`#8DC716`)
- Card hover shadow: `rgba(30, 45, 255, 0.2)`

### Brand Assets
- Logo: `https://s1.wp.com/home.logged-out/images/wpcom-logo.png` (512×512 PNG)
- Favicon: `https://wpcom.files.wordpress.com/2024/04/wp_favicon_512x512px.png`
- Placement: top-left in navigation, linked to homepage

### Example Component Prompts
- "Create a hero section on white background. Headline at 100px Recoleta weight 600, line-height 1.0, letter-spacing -3px, color #1d2327. Subtitle at 22px Inter weight 400, line-height 1.4, color #666. Blue pill CTA (#3858e9, 9999px radius, 10px 24px padding) and outline button (2px solid #1d2327, 9999px radius)."
- "Design a theme card: white background, 8px radius, subtle shadow (0 1px 3px rgba(0,0,0,0.08)) at rest. On hover: blue-tinted glow (0px 0.83px 12.49px 1.67px rgba(30,45,255,0.2)) with 0.3s ease-in-out transition. Screenshot area on top, title in 16px Inter weight 600 below."
- "Build a sticky navigation: frosted glass effect (backdrop-filter: blur(60px), semi-transparent background), 12px border-radius. WordPress.com wordmark left, nav links at 14px Inter weight 500 in #666, blue pill CTA 'Get Started' right-aligned (#3858e9, 9999px radius)."
- "Create a dark hosting section: #1d2327 background, 8px radius, dot-pattern overlay (radial-gradient, 14px spacing) masked with linear-gradient (transparent 20%, black 80%). Heading in Recoleta 50px white. CTA with gradient border (linear-gradient 90deg, #3858e9 to #069e08) using border-box trick on #1d2327 background."
- "Build an AI prompt form: textarea with 24px border-radius, 20px padding, #fff background. Circular submit button (45×45px, #212cff, 100% radius) positioned absolute right. Below, suggestion chips in rgba(0,0,0,0.05) with backdrop-filter: blur(10px), 12px radius, 14px Inter."

### Iteration Guide
1. Always use Recoleta for headlines, Inter for everything else — never swap them
2. Pill buttons (`9999px`) are the only button shape — no rounded rectangles
3. `#3858e9` is the primary blue; `#212cff` is reserved for focus/submit only
4. Card hover glow is blue-tinted (`rgba(30, 45, 255, 0.2)`), not neutral gray
5. Dark sections use `#1d2327` with pattern overlays, not flat dark surfaces
6. Navigation must have frosted glass (`backdrop-filter: blur(60px)`)
7. Space Mono + `#8DC716` green is the "developer voice" — use sparingly
