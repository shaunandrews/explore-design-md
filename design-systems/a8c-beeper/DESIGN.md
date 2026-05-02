# Design System: Beeper

## 1. Visual Theme & Atmosphere

Beeper's website is unapologetically dark -- a black canvas that lets a signature purple-to-blue gradient do all the talking. The page opens on a near-black background (`#000000`) with white text and a striking text gradient (`linear-gradient(225deg, #6953f2, #0c52f9)`) that sweeps from vivid purple to electric blue across headlines. This gradient IS the brand -- it's not decoration, it's identity. Where other messaging apps use flat brand colors, Beeper uses this chromatic shift to signal modernity and technical ambition.

The typography is built on `Haskoy`, a custom geometric sans-serif loaded as a variable font. At display sizes, Haskoy runs at semibold (600) with tight tracking (`-0.75px`) and compressed line-height (`115%`). The letterforms are rounded and friendly but with enough geometric precision to feel technical. This is a messaging app for people who care about how things work.

What truly distinguishes Beeper is its playful illustrative layer. Decorative SVG elements -- stars, clouds, and a smile -- float around key sections, softening the dark technical canvas with a touch of whimsy. Chat bubble illustrations (numbered 1-12) bring the messaging metaphor to life. The messaging platform icons (WhatsApp, Signal, Telegram, Discord, etc.) appear as small inline SVGs, reinforcing Beeper's core pitch: all your chats in one place.

**Key Characteristics:**
- Haskoy as the sole typeface -- a custom geometric sans-serif variable font
- Dark/black canvas as the default surface -- not a dark mode, THE mode
- Purple-to-blue text gradient (`#6953f2` to `#0c52f9`) as the defining brand element
- Decorative SVG illustrations (stars, clouds, smile) for playful personality
- Chat bubble illustrations as a recurring visual motif
- Tailwind CSS utility-class system (rounded-2xl, max-w-5xl, etc.)
- No shadows anywhere -- pure flat design with gradient accents
- Messaging platform icons as inline SVGs (28px)
- Minimal, high-contrast: black bg, white text, gradient highlights

## 2. Color Palette & Roles

### Primary Brand
- **Gradient Start** (`#6953f2`): Vivid purple. Left/top anchor of the brand gradient.
- **Gradient End** (`#0c52f9`): Electric blue. Right/bottom anchor of the brand gradient.
- **Brand Gradient**: `linear-gradient(225deg, #6953f2, #0c52f9)` -- applied as `background-clip: text` on headlines.

### Surfaces
- **Background** (`#000000`): Primary page background. Pure black.
- **White** (`#ffffff`): Primary text color, borders on featured elements.
- **Card Surface**: Transparent or very subtle dark tint on black -- cards blend into the background.

### Text
- **Primary Text** (`#ffffff`): White. Headings, body text, navigation links.
- **Secondary Text**: White at reduced opacity (`opacity: 0.8-0.9`). Descriptions, footer links.
- **Tertiary Text**: White at lower opacity (~0.6). Fine print, metadata.
- **Gradient Text**: Brand gradient applied via `background-clip: text` on key headings.

### Accent / Decorative
- **Border White** (`#ffffff`): Used as `border-2 border-white` on the hero video container.
- **Messaging platform colors** (decorative, used on icons only):
  - WhatsApp: `#25d366`
  - Instagram: gradient (pink-orange-purple)
  - Telegram: `#0088cc`
  - Signal: `#3a76f0`
  - Discord: `#5865f2`
  - Slack: `#4a154b`
  - LinkedIn: `#0a66c2`
  - Messenger: `#0084ff`
  - Google Messages: `#1a73e8`

## 3. Typography Rules

### Font Family
- **Primary**: `Haskoy` (custom variable font, loaded via @font-face as woff2)
- **Weights loaded**: Regular (400), Medium (500), SemiBold (600), Bold (700), Variable
- **Fallback**: system sans-serif stack

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Haskoy | text-5xl (~48px desktop) | 600 (semibold) | 115% | -0.75px | Gradient text, maximum impact |
| Display Mobile | Haskoy | text-3xl (~30px) | 600 (semibold) | 115% | -0.75px | Mobile hero fallback |
| Section Heading | Haskoy | text-3xl to text-5xl | 600 (semibold) | 115% | -0.75px | Feature section titles |
| Body Large | Haskoy | text-base (~16px desktop) | 400 (regular) | 1.5-1.6 | normal | Descriptions, intro text |
| Body Small | Haskoy | text-sm (14px) | 400 (regular) | 1.5 | normal | Secondary text, captions |
| Button / CTA | Haskoy | text-sm to text-base | 500-600 | 1.0 | normal | Call-to-action text |
| Footer Links | Haskoy | text-sm | 400 | 1.5 | normal | Reduced opacity white |

### Principles
- **Single typeface discipline**: Haskoy handles every role. No secondary fonts.
- **Semibold for all headings**: Weight 600 is the standard for display text. Not bold (700), not medium (500).
- **Tight tracking on display**: `-0.75px` letter-spacing on headings creates dense, modern blocks.
- **Compressed line-height**: `115%` for headings -- much tighter than typical 1.2-1.3.
- **Gradient as emphasis**: The purple-to-blue gradient replaces bold or color for text emphasis.

## 4. Component Stylings

### Buttons / CTAs

**Primary CTA (Download)**
- Background: transparent or brand gradient
- Text: `#ffffff`
- Style: link-based rather than traditional button
- Links to `/download`
- Use: "Download for free" -- the primary conversion action

### Cards & Containers
- Background: transparent (content floats on the black canvas)
- Border: none typically; `2px solid #ffffff` on the hero video container
- Radius: `rounded-2xl` (Tailwind ~16px)
- Shadow: none -- Beeper uses zero shadows
- Layout: Tailwind grid and flex utilities

### Video / Media
- Hero video: Cloudflare Stream embed
- Container: `rounded-2xl` with `border-2 border-white`
- Poster image for video thumbnail
- Full-width within container constraints

### Messaging Platform Icons
- Inline SVG icons for each platform
- Size: 28x28px (X icon: 30x30px)
- Color: white or platform-specific brand colors
- Display: inline row, centered

### Navigation
- Sticky top navigation
- Background: dark/black with transparency
- Links: white text, standard weight
- CTA: "Download for free" link right-aligned
- Height: standard (~64px estimated)
- No visible border-bottom (dark on dark)

### Decorative Illustrations
- **Stars SVG**: Positioned decoratively around content sections
- **Clouds SVG**: Background decorative element
- **Smile SVG**: Bottom-right positioned with translate transform
- **Chat Bubbles**: 12 numbered bubble illustrations (`bubble-1` through `bubble-12`)

### Footer
- Background: matches body (black)
- Text: white at 80-90% opacity
- Columns: COMPANY, APP, LEGAL
- Social icons: X, LinkedIn, GitHub
- Copyright: Automattic Inc.

## 5. Layout Principles

### Spacing System (Tailwind-based)
- Section vertical padding: `py-16` (64px) mobile, `py-20` (80px) desktop
- Large section padding: `pb-32 pt-16` (128px/64px) mobile, `pb-40 pt-20` (160px/80px) desktop
- Horizontal padding: `px-8` (32px)
- Tailwind spacing scale: 4px base (1 = 4px, 4 = 16px, 8 = 32px, 16 = 64px, 20 = 80px, 32 = 128px, 40 = 160px)

### Grid & Container
- Max widths: `max-w-2xl` (~672px), `max-w-3xl` (~768px), `max-w-5xl` (~1024px)
- Feature grid: 3-column on desktop
- Tailwind responsive: `md:` (768px), `lg:` (1024px), `max-[767px]:` for mobile-specific
- Footer: `w-layout-grid` with column spanning

### Whitespace Philosophy
- **Vast and dramatic**: Very generous vertical spacing (80-160px between sections) creates a sense of breathing room on the dark canvas. Each section feels like its own stage.
- **Content floats in darkness**: No visible containers, borders, or backgrounds on most sections. Content exists in a void of black space.
- **Narrow content widths**: Most content is constrained to 672-768px, creating very focused reading columns on the dark canvas.

### Border Radius Scale
- Standard: `rounded-2xl` (~16px) for cards, video containers
- Smaller: 2-8px for minor elements
- No pill shapes, no sharp corners

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Everything by default |
| Outlined (Level 1) | `2px solid #ffffff` | Hero video container, featured elements |

**Shadow Philosophy**: Beeper uses zero shadows. This is a deliberate design choice, not an oversight. On a black background, shadows are invisible anyway -- depth is created through the gradient text, white borders, and the spatial separation of generous whitespace. The decorative SVG illustrations provide visual interest without needing elevation mechanics.

## 7. Do's and Don'ts

### Do
- Use `Haskoy` as the sole typeface (variable font, woff2)
- Use the brand gradient (`linear-gradient(225deg, #6953f2, #0c52f9)`) on key headlines via `background-clip: text`
- Use pure black (`#000000`) as the page background
- Use white (`#ffffff`) as the primary text color
- Use `rounded-2xl` (~16px) for card and container corners
- Use generous vertical spacing (64-160px between sections)
- Use decorative SVG illustrations (stars, clouds, smile) for personality
- Keep content narrow (max-w-3xl / ~768px) for focused reading
- Use opacity variations on white for text hierarchy (1.0, 0.8, 0.6)
- Use inline SVG icons for messaging platforms (28px)

### Don't
- Don't use any shadows -- the design is intentionally flat on black
- Don't use colored backgrounds for sections -- everything floats on black
- Don't use the gradient for body text -- it's for display headings only
- Don't use the messaging platform colors for UI elements -- they're icon-only
- Don't use border-radius larger than 16px (no pill shapes)
- Don't use bold (700) for headings -- semibold (600) is the standard
- Don't add background colors to cards -- they should be transparent on black
- Don't use any font other than Haskoy
- Don't use positive letter-spacing on headings -- always tight (-0.75px)

## 8. Responsive Behavior

### Breakpoints (Tailwind)
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, text-3xl headings, py-16 spacing |
| Tablet (md) | 768px | Multi-column starts, text-5xl headings, py-20 spacing |
| Desktop (lg) | 1024px | Full layout, maximum spacing (py-40), 3-column grids |

### Collapsing Strategy
- Hero: text-5xl (desktop) -> text-3xl (mobile), semibold maintained
- Feature grid: 3-column -> single column stacked
- Spacing: py-20/pb-40 (desktop) -> py-16/pb-32 (mobile)
- Content max-width: stays constrained, padding reduces
- Navigation: horizontal links may collapse to hamburger on mobile
- Decorative illustrations: may be hidden on smallest screens (`max-[767px]:hidden`)

## 9. Agent Prompt Guide

### Quick Color Reference
- Page Background: Black (`#000000`)
- Primary Text: White (`#ffffff`)
- Secondary Text: White at 80% opacity
- Gradient Start: Purple (`#6953f2`)
- Gradient End: Blue (`#0c52f9`)
- Brand Gradient: `linear-gradient(225deg, #6953f2, #0c52f9)`
- Featured Border: White (`#ffffff`, 2px solid)

### Example Component Prompts
- "Create a hero section on pure black background. Headline using Haskoy at ~48px (text-5xl), semibold (600), line-height 115%, letter-spacing -0.75px, with `background: linear-gradient(225deg, #6953f2, #0c52f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent` for gradient text effect. Subtitle at 16px regular, white at 80% opacity. CTA link 'Download for free' in white."
- "Design a messaging features section on black background. 3-column grid (max-w-5xl). Each feature: white heading at 20px semibold, white description at 14px regular 80% opacity. Messaging platform icons (28px SVGs) in a centered row. No cards, no shadows, no backgrounds -- content floats on black."
- "Build a video hero: Cloudflare Stream embed with rounded-2xl corners (16px) and border-2 border-white. No shadow. Centered within max-w-3xl container on black background."
- "Create a footer on black: 3-column layout (COMPANY, APP, LEGAL). White text at 80-90% opacity. Social icons (X, LinkedIn, GitHub) as inline SVGs. Copyright: Automattic Inc."

### Iteration Guide
1. Haskoy is the only font. Load via @font-face (woff2). Weights: 400, 500, 600, 700 + variable.
2. The purple-to-blue gradient (`linear-gradient(225deg, #6953f2, #0c52f9)`) is THE brand -- use it on key headings only via `background-clip: text`.
3. No shadows anywhere. Zero. Depth comes from spacing, gradient, and white borders.
4. Background is pure black. Sections don't have background colors -- content floats.
5. Text hierarchy is white at varying opacities: 100% (headings), 80% (body), 60% (tertiary).
6. Headings are semibold (600), not bold (700). Line-height 115%. Letter-spacing -0.75px.
7. Border-radius is ~16px (rounded-2xl). No pill shapes.
8. Content widths are narrow: max-w-3xl (~768px) for focused reading, max-w-5xl (~1024px) for grids.
9. Messaging platform icons are 28px inline SVGs -- the visual vocabulary for "all your chats."
10. Decorative SVG illustrations (stars, clouds, smile, chat bubbles) add personality without weight.
