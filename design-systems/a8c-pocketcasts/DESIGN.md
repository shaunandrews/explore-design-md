# Design System: Pocket Casts

## 1. Visual Theme & Atmosphere

Pocket Casts is one of the most beloved podcast apps in the world, and its website reflects a design philosophy rooted in confidence, clarity, and audio-first thinking. The site leads with a bold, saturated red (`#F43E37`) -- not the warm, friendly red of a social network, but a punchy, signal-red that reads like a "now playing" indicator. This red sits against predominantly dark surfaces (`#1A1A1A`, `#121212`) or clean white, creating a high-contrast system that feels native to both light and dark contexts. The overall impression is of a premium audio product designed by people who care deeply about craft.

The typography uses DM Sans (a Google Font with geometric, slightly humanist character) as the primary typeface, delivering a modern, approachable feel without sacrificing professionalism. Headlines run at medium-to-bold weights (500-700) with moderate negative tracking at display sizes, creating dense, purposeful text blocks. The font's open apertures and generous x-height make it highly legible at small sizes -- critical for a product that needs to display podcast metadata, timestamps, and episode descriptions.

What defines Pocket Casts visually is its restraint. The site avoids gratuitous gradients, complex shadows, or decorative elements. Instead, it relies on bold color blocking (red hero sections, dark feature sections), generous whitespace, and carefully placed app screenshots with subtle rounded corners and shadows. The design communicates: "the content is the interface."

**Key Characteristics:**
- Signal red (`#F43E37`) as the singular brand accent -- used sparingly but decisively for CTAs and hero moments
- Dark-theme-first mentality: dark sections feel native, not inverted
- DM Sans as the workhorse typeface -- geometric, clean, slightly warm
- Large app screenshots as hero elements, showcasing the actual product
- Generous whitespace with purposeful density in feature grids
- Minimal shadow usage -- elevation through color contrast rather than depth
- Conservative border-radius (8px-16px) -- rounded but never bubbly
- Platform badges (App Store, Google Play) as prominent CTAs alongside web app links

## 2. Color Palette & Roles

### Primary
- **Pocket Casts Red** (`#F43E37`): The brand signature. Primary CTA backgrounds, hero section accents, active states, and the iconic logo color. A warm, saturated red with slight orange undertone.
- **Dark Background** (`#1A1A1A`): Primary dark surface. Used for hero sections, dark feature blocks, and the dominant background in dark mode.
- **Pure White** (`#FFFFFF`): Light mode background, card surfaces, text on dark backgrounds.

### Brand & Dark
- **Near Black** (`#121212`): The deepest dark surface -- footer background, immersive dark sections.
- **Dark Gray** (`#222222`): Elevated dark surface for cards and containers on dark backgrounds.
- **Charcoal** (`#2A2A2A`): Secondary dark surface, used for subtle elevation on dark backgrounds.
- **Red Dark** (`#D93025`): Hover/pressed state for the primary red on light backgrounds.
- **Red Light** (`#FF6B61`): Lighter red for hover states on dark backgrounds, secondary red accent.

### Neutral Scale
- **Heading Dark** (`#1A1A1A`): Primary heading color on light backgrounds. Near-black with warmth.
- **Body Text** (`#3D3D3D`): Primary body text on light backgrounds.
- **Secondary Text** (`#6B6B6B`): Descriptions, captions, metadata on light backgrounds.
- **Tertiary Text** (`#8E8E8E`): Placeholder text, disabled states, timestamps.
- **Border Light** (`#E5E5E5`): Standard border color for cards and dividers on light backgrounds.
- **Surface Light** (`#F5F5F5`): Subtle background tint for alternate sections, input backgrounds.
- **Surface Lighter** (`#FAFAFA`): Nearly-white surface for subtle differentiation.

### Dark Mode Neutrals
- **Text Primary Dark** (`#FFFFFF`): Primary text on dark surfaces.
- **Text Secondary Dark** (`rgba(255,255,255,0.7)`): Body text on dark surfaces.
- **Text Muted Dark** (`rgba(255,255,255,0.5)`): Captions and metadata on dark surfaces.
- **Border Dark** (`rgba(255,255,255,0.1)`): Borders and dividers on dark surfaces.
- **Border Dark Stronger** (`rgba(255,255,255,0.15)`): More visible borders on dark surfaces.

### Accent Colors
- **Plus Gold** (`#FFD740`): Pocket Casts Plus subscription branding, premium feature highlights.
- **Podcast Blue** (`#3D7FFF`): Occasional accent for links or informational elements.
- **Success Green** (`#4CAF50`): Download complete, sync success indicators.

## 3. Typography Rules

### Font Family
- **Primary**: `DM Sans`, with fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`
<!-- DM Sans is a free Google Font, no commercial license needed. Load via: https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700 -->

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | DM Sans | 56px (3.50rem) | 700 | 1.1 | -0.5px | Main hero headline, white on red or dark |
| Display Large | DM Sans | 48px (3.00rem) | 700 | 1.15 | -0.4px | Secondary hero, section openers |
| Section Heading | DM Sans | 36px (2.25rem) | 700 | 1.2 | -0.3px | Feature section titles |
| Sub-heading | DM Sans | 24px (1.50rem) | 600 | 1.3 | -0.2px | Card headings, feature names |
| Body Large | DM Sans | 18px (1.13rem) | 400 | 1.6 | normal | Feature descriptions, intro paragraphs |
| Body | DM Sans | 16px (1.00rem) | 400 | 1.5 | normal | Standard reading text |
| Body Small | DM Sans | 14px (0.88rem) | 400 | 1.5 | normal | Secondary descriptions, metadata |
| Button | DM Sans | 16px (1.00rem) | 600 | 1.0 | normal | Primary button text |
| Button Small | DM Sans | 14px (0.88rem) | 600 | 1.0 | normal | Secondary/compact buttons |
| Nav Link | DM Sans | 15px (0.94rem) | 500 | 1.0 | normal | Navigation links |
| Caption | DM Sans | 13px (0.81rem) | 400 | 1.4 | normal | Small labels, timestamps |
| Micro | DM Sans | 11px (0.69rem) | 500 | 1.2 | 0.5px | Overlines, category labels (uppercase) |

### Principles
- **Single typeface system**: DM Sans handles everything from hero headlines to micro labels. No secondary font needed.
- **Bold headlines, regular body**: Clear weight distinction (700 for headlines, 400 for body) creates strong hierarchy without multiple typefaces.
- **Progressive tracking**: Letter-spacing tightens at display sizes (-0.5px at 56px, -0.4px at 48px) and relaxes at body sizes.
- **Comfortable line heights**: Body text at 1.5-1.6 for extended reading (episode descriptions); headlines at 1.1-1.2 for compact, punchy display.

## 4. Component Stylings

### Buttons

**Primary Red**
- Background: `#F43E37`
- Text: `#FFFFFF`
- Padding: 12px 24px
- Radius: 8px
- Font: 16px DM Sans weight 600
- Hover: `#D93025` background
- Shadow: none (flat design)
- Use: Primary CTA ("Start Listening", "Try Free")

**Primary Dark**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Padding: 12px 24px
- Radius: 8px
- Font: 16px DM Sans weight 600
- Hover: `#333333` background
- Use: Secondary CTA, dark theme primary

**Ghost / Outlined**
- Background: transparent
- Text: `#1A1A1A` (light) or `#FFFFFF` (dark)
- Padding: 12px 24px
- Radius: 8px
- Border: `1px solid #E5E5E5` (light) or `1px solid rgba(255,255,255,0.2)` (dark)
- Hover: background shifts to `rgba(0,0,0,0.05)` (light) or `rgba(255,255,255,0.05)` (dark)
- Use: Secondary actions, "Learn More"

**Platform Store Badges**
- Height: 40px (standard app store badge sizing)
- Radius: 8px (matching brand radius)
- Displayed inline with gap of 12px
- Use: App Store, Google Play, web app download links

### Cards & Containers
- Background: `#FFFFFF` (light) or `#222222` (dark)
- Border: `1px solid #E5E5E5` (light) or `1px solid rgba(255,255,255,0.1)` (dark)
- Radius: 12px
- Shadow (light): `0px 2px 8px rgba(0,0,0,0.08)`
- Shadow (dark): none or `0px 2px 8px rgba(0,0,0,0.3)`
- Padding: 24px
- Hover: subtle shadow increase `0px 4px 16px rgba(0,0,0,0.12)`

### Feature Cards
- Background: `#F5F5F5` (light) or `#2A2A2A` (dark)
- Radius: 16px
- Padding: 32px
- No border, no shadow -- relies on background contrast
- Icon/illustration at top, heading below, description at bottom

### App Screenshots
- Radius: 16px (matching device corners)
- Shadow: `0px 8px 32px rgba(0,0,0,0.15)`
- Often displayed at slight angle or with device frame
- Used as hero elements and feature illustrations

### Navigation
- Background: `#FFFFFF` (light) or `#1A1A1A` (dark) with `backdrop-filter: blur(12px)` and slight transparency
- Position: sticky, top: 0
- Height: approximately 64px
- Logo: Pocket Casts wordmark + icon, left-aligned, red icon color
- Links: DM Sans 15px weight 500, `#3D3D3D` text (light) or `rgba(255,255,255,0.7)` (dark)
- Link hover: `#1A1A1A` (light) or `#FFFFFF` (dark)
- CTA: red button right-aligned ("Start Listening")
- Border bottom: `1px solid #E5E5E5` (light) or `1px solid rgba(255,255,255,0.1)` (dark)
- Mobile: hamburger menu toggle

### Footer
- Background: `#121212`
- Text: `rgba(255,255,255,0.6)`
- Link text: `rgba(255,255,255,0.7)`, hover: `#FFFFFF`
- Padding: 48px 32px
- Grid: 4-column layout with logo, product links, company links, legal
- Border top: `1px solid rgba(255,255,255,0.1)`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Section padding: 80px-120px vertical on desktop
- Component internal padding: 16px-32px

### Grid & Container
- Max content width: 1200px
- Hero: centered single-column, generous vertical padding (120px+)
- Feature sections: 2-column or 3-column grid with 24px-32px gaps
- Full-width dark sections alternate with light sections
- App screenshots often break the grid, extending to edge or overlapping sections

### Whitespace Philosophy
- **Generous and intentional**: Pocket Casts uses ample whitespace to let each feature section breathe. This isn't minimalism for its own sake -- it mimics the calm, focused experience of listening to a podcast.
- **Section rhythm**: Dark sections (features, testimonials) alternate with light sections (details, CTAs), creating a visual playlist-like cadence.
- **Hero dominance**: The hero section commands significant vertical space, often 60-80vh, with the app screenshot as the centerpiece.

### Border Radius Scale
- Small (4px): Inputs, small elements
- Standard (8px): Buttons, badges, small cards
- Medium (12px): Standard cards, containers
- Large (16px): Feature cards, app screenshots, large containers
- Pill (9999px): Tags, small badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most elements, dark-on-dark cards |
| Subtle (Level 1) | `0px 2px 8px rgba(0,0,0,0.08)` | Standard cards on light backgrounds |
| Raised (Level 2) | `0px 4px 16px rgba(0,0,0,0.12)` | Hovered cards, dropdowns |
| Elevated (Level 3) | `0px 8px 32px rgba(0,0,0,0.15)` | App screenshots, hero images |
| Deep (Level 4) | `0px 16px 48px rgba(0,0,0,0.2)` | Modals, floating panels |
| Focus Ring | `0 0 0 3px rgba(244,62,55,0.3)` | Keyboard focus indicator (red-tinted) |

**Shadow Philosophy**: Pocket Casts favors color contrast over shadow depth. On dark backgrounds, cards use no shadow at all -- elevation is communicated through lighter background colors (`#222222` on `#1A1A1A`). Shadows appear primarily on light backgrounds and on app screenshots, where they serve to "lift" the product imagery off the page. The shadows use pure black with low opacity, keeping them neutral and unbranded -- the red accent is reserved for interactive elements, not atmospheric effects.

## 7. Do's and Don'ts

### Do
- Use `#F43E37` red exclusively for primary CTAs and brand moments -- never as background for large text areas (except hero)
- Use dark backgrounds (`#1A1A1A`) as a first-class citizen, not an afterthought
- Keep typography in DM Sans across all elements -- the single-font system is intentional
- Use weight 700 for headlines and 400 for body -- the weight contrast IS the hierarchy
- Show the product: app screenshots are the primary visual element, not illustrations
- Keep border-radius between 8px-16px for most elements
- Use generous section spacing (80px+ vertical) to create breathing room
- Rely on color contrast for elevation on dark surfaces, shadows on light surfaces

### Don't
- Don't use the red for body text, backgrounds of content sections, or borders -- it's an accent, not a theme
- Don't use heavy shadows on dark backgrounds -- dark-on-dark elevation uses background color steps
- Don't introduce secondary brand colors -- the palette is intentionally red + neutral
- Don't use rounded pill shapes (9999px) for buttons -- 8px is the standard
- Don't apply decorative gradients -- Pocket Casts is flat and confident
- Don't use light font weights (300) for headlines -- the brand voice is bold and direct
- Don't overcrowd feature sections -- each feature gets its own generous space

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced heading sizes, stacked platform badges |
| Tablet | 640-1024px | 2-column feature grids, moderate padding |
| Desktop | 1024-1280px | Full layout, 3-column grids where applicable |
| Large Desktop | >1280px | Centered content with generous side margins |

### Touch Targets
- Buttons: minimum 44px height with comfortable padding (12px-16px vertical)
- Navigation links with adequate spacing (24px+ gap)
- Platform badges at standard 40px height
- Mobile hamburger toggle at 44px minimum

### Collapsing Strategy
- Hero: 56px display -> 36px on mobile, bold weight maintained
- Navigation: horizontal links -> hamburger menu
- Feature grids: 3-column -> 2-column -> single column stacked
- App screenshots: scale proportionally, maintain border-radius
- Section padding: 120px -> 64px on mobile
- Footer: 4-column -> 2-column -> single column stack

### Image Behavior
- App screenshots maintain 16px border-radius at all sizes
- Hero product images scale proportionally with max-width constraints
- Platform badges wrap to new line on narrow screens
- Feature icons maintain fixed size (24px-32px), text wraps below

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Pocket Casts Red (`#F43E37`)
- CTA Hover: Red Dark (`#D93025`)
- Light Background: White (`#FFFFFF`)
- Dark Background: Near Black (`#1A1A1A`)
- Deepest Dark: Dark (`#121212`)
- Heading text (light): `#1A1A1A`
- Body text (light): `#3D3D3D`
- Secondary text (light): `#6B6B6B`
- Text on dark: `#FFFFFF`
- Secondary text on dark: `rgba(255,255,255,0.7)`
- Border (light): `#E5E5E5`
- Border (dark): `rgba(255,255,255,0.1)`
- Surface tint: `#F5F5F5`
- Plus Gold: `#FFD740`

### Example Component Prompts
- "Create a hero section with dark background (#1A1A1A). Headline at 56px DM Sans weight 700, line-height 1.1, letter-spacing -0.5px, color #FFFFFF. Subtitle at 18px weight 400, line-height 1.6, color rgba(255,255,255,0.7). Red CTA button (#F43E37, 8px radius, 12px 24px padding, white text, 600 weight) and ghost button (transparent, 1px solid rgba(255,255,255,0.2), white text, 8px radius)."
- "Design a feature card on light background: #F5F5F5 background, 16px radius, 32px padding, no border, no shadow. Title at 24px DM Sans weight 600, letter-spacing -0.2px, color #1A1A1A. Body at 16px weight 400, #6B6B6B, line-height 1.5."
- "Build navigation: white sticky header with backdrop-filter blur(12px). DM Sans 15px weight 500 for links, #3D3D3D text. Red CTA 'Start Listening' right-aligned (#F43E37 bg, white text, 8px radius, 12px 24px padding). Border-bottom 1px solid #E5E5E5."
- "Create a dark feature section: #1A1A1A background. Headline 36px DM Sans weight 700, letter-spacing -0.3px, white text. Body 16px weight 400, rgba(255,255,255,0.7). Cards use #222222 background, 12px radius, no shadow, 1px solid rgba(255,255,255,0.1) border."
- "Design a footer: #121212 background, border-top 1px solid rgba(255,255,255,0.1). 4-column grid. Link text rgba(255,255,255,0.7), hover #FFFFFF. DM Sans 14px weight 400."

### Iteration Guide
1. DM Sans is the only typeface needed -- use Google Fonts for easy loading
2. Weight 700 for headlines, 600 for sub-heads and buttons, 500 for nav, 400 for body
3. Red (`#F43E37`) is surgical -- CTAs, logo, active indicators only
4. Dark sections use background color steps for elevation: `#121212` -> `#1A1A1A` -> `#222222` -> `#2A2A2A`
5. Light sections use subtle shadows for elevation, never heavy drop shadows
6. Border-radius: 8px (buttons, badges), 12px (cards), 16px (feature cards, screenshots)
7. Section alternation: light/dark/light creates the page rhythm
8. App screenshots are the hero visual -- show the product, not abstract illustrations
