# Design System: Gravatar

## 1. Visual Theme & Atmosphere

Gravatar is the globally recognized avatar service by Automattic -- a product that connects identity across the web. The design system reflects this mission with a clean, modern, avatar-centric interface built on a distinctive blue brand identity. The overall impression is approachable yet trustworthy, personal yet universal -- a service that puts your digital identity front and center.

The visual language centers on large, circular avatars as the primary design motif. Circles and rounded shapes recur throughout the UI, reinforcing the avatar concept at every level. The primary brand blue (`#1A4FC2`) is a confident, saturated medium-blue that conveys trust and reliability -- appropriate for a service that manages your online identity. White space is generous, letting avatars and profile content breathe.

Typography uses the system font stack with Inter as the web font, creating a neutral, highly legible foundation that doesn't compete with the user's own profile content. The type is set at comfortable sizes with clear hierarchy, prioritizing readability over typographic showmanship. This is intentional -- Gravatar is a platform for *your* identity, not its own.

**Key Characteristics:**
- Inter as the primary typeface, with system font stack fallback
- Blue brand color (`#1A4FC2`) as the primary accent and CTA color
- Avatar-centric design with circular imagery as the defining motif
- Clean white backgrounds with generous whitespace
- Rounded UI elements (8px-12px border-radius on cards, pill-shaped buttons)
- Subtle shadows for depth -- never heavy or dramatic
- Dark mode uses deep navy/charcoal (`#1C2433`) rather than pure black
- Simple, friendly iconography -- no harsh edges

## 2. Color Palette & Roles

### Primary
- **Gravatar Blue** (`#1A4FC2`): Primary brand color, CTA backgrounds, link text, active states. A trustworthy medium-blue that anchors the identity.
- **Blue Hover** (`#164AB8`): Darker blue for hover states on primary interactive elements.
- **Blue Light** (`#E8EEFB`): Light blue tint for selected states, active backgrounds, and subtle highlights.
- **White** (`#FFFFFF`): Primary background, card surfaces, input backgrounds.

### Brand Extended
- **Blue Dark** (`#0E3382`): Deep blue for emphasis, dark-mode CTA backgrounds, and high-contrast brand moments.
- **Blue Pale** (`#F0F4FD`): Very light blue wash for section backgrounds and subtle brand tinting.
- **Indigo** (`#4B5CC4`): Secondary blue-purple for gradients and decorative accents.

### Text
- **Text Primary** (`#101517`): Near-black for headings and primary body text.
- **Text Secondary** (`#50575E`): Medium gray for descriptions, secondary labels, and supporting text.
- **Text Muted** (`#787C82`): Light gray for placeholders, timestamps, and tertiary information.
- **Text Inverse** (`#FFFFFF`): White text on dark/blue backgrounds.

### Neutral Scale
- **Gray 90** (`#1E2328`): Darkest neutral, used in dark mode surfaces.
- **Gray 80** (`#2C3338`): Dark gray for secondary dark surfaces.
- **Gray 60** (`#50575E`): Medium gray for secondary text and icons.
- **Gray 40** (`#787C82`): Light-medium gray for muted elements.
- **Gray 20** (`#C3C4C7`): Light gray for borders and dividers.
- **Gray 10** (`#DCDCDE`): Very light gray for subtle borders.
- **Gray 5** (`#F0F0F0`): Near-white for alternate section backgrounds.
- **Gray 0** (`#F6F7F7`): Lightest gray, page alternate background.

### Status & Feedback
- **Success Green** (`#00A32A`): Success states, verified badges, positive feedback.
- **Warning Orange** (`#DBA617`): Warnings, attention states.
- **Error Red** (`#CC1818`): Errors, destructive actions, required field indicators.
- **Info Blue** (`#1A4FC2`): Informational messages (same as brand blue).

### Surface & Borders
- **Border Default** (`#DCDCDE`): Standard border for cards, inputs, and dividers.
- **Border Light** (`#F0F0F0`): Subtle borders for section separators.
- **Border Focus** (`#1A4FC2`): Focus ring color for accessibility.
- **Border Active** (`#1A4FC2`): Active/selected state borders.

### Shadow Colors
- **Shadow Card** (`rgba(0,0,0,0.08)`): Standard card elevation.
- **Shadow Elevated** (`rgba(0,0,0,0.12)`): Dropdowns, popovers, modals.
- **Shadow Deep** (`rgba(0,0,0,0.16)`): Highest elevation elements.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, with fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`
- **Monospace**: `'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 48px (3.00rem) | 700 | 1.1 | -0.5px | Homepage hero headline |
| Display Large | Inter | 40px (2.50rem) | 700 | 1.15 | -0.4px | Secondary hero, major section heads |
| Section Heading | Inter | 32px (2.00rem) | 600 | 1.2 | -0.3px | Feature section titles |
| Sub-heading | Inter | 24px (1.50rem) | 600 | 1.3 | -0.2px | Card headings, sub-sections |
| Sub-heading Small | Inter | 20px (1.25rem) | 600 | 1.3 | -0.1px | Minor section heads |
| Body Large | Inter | 18px (1.13rem) | 400 | 1.6 | normal | Feature descriptions, intro text |
| Body | Inter | 16px (1.00rem) | 400 | 1.5 | normal | Standard reading text |
| Body Small | Inter | 14px (0.88rem) | 400 | 1.5 | normal | Secondary content, captions |
| Button | Inter | 16px (1.00rem) | 500 | 1.0 | normal | Primary button text |
| Button Small | Inter | 14px (0.88rem) | 500 | 1.0 | normal | Secondary/compact buttons |
| Link | Inter | inherit | 500 | inherit | normal | Inline links, navigation |
| Caption | Inter | 12px (0.75rem) | 400 | 1.4 | normal | Timestamps, metadata, fine print |
| Overline | Inter | 12px (0.75rem) | 600 | 1.4 | 0.5px | Section labels, uppercase categories |

### Principles
- **Neutral foundation**: Inter provides a clean, invisible typographic layer that lets user content (avatars, names, bios) take center stage.
- **Clear hierarchy**: Bold weights (600-700) for headings, regular (400) for body, medium (500) for interactive elements. The weight system is conventional and accessible.
- **Comfortable reading**: Line heights of 1.5-1.6 for body text ensure readability across the profile-heavy content.
- **Negative tracking at display sizes**: Letter-spacing tightens at 32px+ to keep headlines compact and modern.
- **System font fallback**: The stack ensures near-identical rendering across platforms without FOUT.

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#1A4FC2`
- Text: `#FFFFFF`
- Padding: 10px 24px
- Radius: 8px
- Font: 16px Inter weight 500
- Hover: `#164AB8` background
- Use: Primary CTA ("Create your Gravatar", "Save profile")

**Secondary / Outlined**
- Background: transparent
- Text: `#1A4FC2`
- Padding: 10px 24px
- Radius: 8px
- Border: `1px solid #1A4FC2`
- Font: 16px Inter weight 500
- Hover: background shifts to `#E8EEFB`
- Use: Secondary actions ("Learn more", "Cancel")

**Ghost / Tertiary**
- Background: transparent
- Text: `#1A4FC2`
- Padding: 10px 24px
- Radius: 8px
- Border: none
- Font: 16px Inter weight 500
- Hover: background shifts to `#F0F4FD`
- Use: Tertiary actions, text-style buttons

**Destructive**
- Background: `#CC1818`
- Text: `#FFFFFF`
- Padding: 10px 24px
- Radius: 8px
- Font: 16px Inter weight 500
- Hover: `#B01414` background
- Use: Delete account, remove avatar

### Avatar Component
- Shape: Circle (border-radius: 50%)
- Sizes: 24px (inline), 32px (list), 48px (card), 64px (profile compact), 96px (profile standard), 128px (profile hero), 256px (profile page)
- Border: `2px solid #FFFFFF` with subtle shadow for overlay contexts
- Fallback: Generated identicon or mystery person silhouette on brand blue background
- Hover (interactive): subtle scale(1.05) with shadow transition

### Cards & Containers
- Background: `#FFFFFF`
- Border: `1px solid #DCDCDE`
- Radius: 12px
- Shadow: `0px 1px 3px rgba(0,0,0,0.08)`
- Hover: `0px 4px 12px rgba(0,0,0,0.12)`, subtle lift
- Padding: 24px

### Profile Card
- Avatar: centered, 96px circle
- Name: 20px weight 600, `#101517`
- Bio: 14px weight 400, `#50575E`
- Links: `#1A4FC2`, 14px weight 500
- Background: `#FFFFFF`
- Radius: 12px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`

### Badges / Tags
**Verified Badge**
- Background: `rgba(0,163,42,0.1)`
- Text: `#00A32A`
- Padding: 4px 12px
- Radius: 9999px (pill)
- Font: 12px weight 500
- Icon: checkmark left-aligned

**Category Tag**
- Background: `#F0F4FD`
- Text: `#1A4FC2`
- Padding: 4px 12px
- Radius: 9999px (pill)
- Font: 12px weight 500

### Inputs & Forms
- Border: `1px solid #DCDCDE`
- Radius: 8px
- Padding: 10px 16px
- Focus: `2px solid #1A4FC2` (outline), border becomes `#1A4FC2`
- Label: `#101517`, 14px Inter weight 500
- Text: `#101517`
- Placeholder: `#787C82`
- Error: border `#CC1818`, helper text `#CC1818`

### Navigation
- Clean horizontal nav on white background, sticky
- Logo: Gravatar wordmark left-aligned in brand blue
- Links: Inter 14px weight 500, `#50575E` default, `#101517` hover
- Active link: `#1A4FC2` with underline or bottom border indicator
- CTA: Blue button right-aligned ("Log in", "Create your Gravatar")
- Mobile: hamburger menu with slide-out drawer
- Height: approximately 64px

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Pattern: Multiples of 8 with 4px and 12px for fine adjustments

### Grid & Container
- Max content width: 1200px, centered
- Profile pages: single-column centered layout, max-width ~720px for content
- Dashboard: sidebar (240-280px) + main content area
- Homepage: full-width hero, contained content sections below
- Feature sections: 2-3 column grid for feature cards

### Whitespace Philosophy
- **Avatar breathing room**: Avatars always have generous padding around them -- they're the product, and they need space to be appreciated.
- **Content-first density**: Profile information is moderately dense (name, bio, links, accounts) but never cramped. Each piece of information has its own visual line.
- **Section separation**: Sections separated by 64-96px vertical spacing on desktop, creating clear content blocks.

### Border Radius Scale
- Small (4px): Fine elements, small badges
- Standard (8px): Buttons, inputs, small cards
- Comfortable (12px): Content cards, containers
- Large (16px): Featured cards, modal dialogs
- Circle (50%): Avatars -- the signature shape
- Pill (9999px): Tags, badges, pill buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional border `1px solid #DCDCDE` | Inline content, flat lists |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.08)` | Default cards, content panels |
| Standard (Level 2) | `0px 4px 12px rgba(0,0,0,0.12)` | Hovered cards, dropdowns |
| Elevated (Level 3) | `0px 8px 24px rgba(0,0,0,0.16)` | Modals, popovers, floating panels |
| Deep (Level 4) | `0px 16px 48px rgba(0,0,0,0.20)` | Full-screen overlays, dialogs |
| Focus Ring | `0 0 0 2px #FFFFFF, 0 0 0 4px #1A4FC2` | Keyboard focus (double-ring for contrast) |

**Shadow Philosophy**: Gravatar uses a simple, neutral shadow system. Unlike brand-tinted shadows, these are pure black at low opacity, keeping the elevation system invisible and letting the blue brand color serve as the accent through interactive states rather than shadows. The shadows are soft and diffused, never sharp or dramatic -- matching the friendly, approachable personality of the product.

## 7. Do's and Don'ts

### Do
- Use circular avatars everywhere -- the circle is the brand shape
- Use `#1A4FC2` (Gravatar Blue) as the primary interactive/CTA color
- Keep backgrounds white or very light gray -- let avatars pop
- Use generous whitespace around avatar displays
- Apply 8px or 12px border-radius on cards and containers
- Use weight 600-700 for headings, 400 for body, 500 for buttons/links
- Provide clear focus rings (`#1A4FC2`) for keyboard accessibility
- Use the system font stack with Inter for fast, consistent rendering

### Don't
- Don't use square avatars -- circles are non-negotiable for the Gravatar brand
- Don't use heavy or brand-colored shadows -- keep them neutral and subtle
- Don't compete with avatar content using loud backgrounds or decorative elements
- Don't use pure black (`#000000`) for text -- use `#101517` for warmth
- Don't use border-radius larger than 16px on non-avatar, non-pill elements
- Don't use colors outside the blue brand family for primary actions
- Don't crowd avatars -- they need breathing room to serve as identity anchors
- Don't use heavy font weights (800-900) -- the system tops out at 700

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, smaller avatars, stacked navigation |
| Tablet | 600-1024px | 2-column grids, sidebar collapses, medium avatars |
| Desktop | 1024-1280px | Full layout, sidebar visible, full avatar sizes |
| Large Desktop | >1280px | Centered content with generous margins |

### Touch Targets
- Minimum touch target: 44px x 44px
- Buttons: comfortable padding (10px+ vertical, 24px+ horizontal)
- Navigation links: 14px font with adequate spacing (24px+ gaps)
- Avatar click targets: always at least 44px even for small display sizes

### Collapsing Strategy
- Hero: 48px headline -> 32px on mobile
- Navigation: horizontal links + CTA -> hamburger with drawer
- Profile cards: horizontal layout -> vertical stacked on mobile
- Feature grids: 3-column -> 2-column -> single column
- Avatar sizes: scale down one step on mobile (96px -> 64px, 64px -> 48px)
- Section spacing: 96px -> 48px on mobile

### Image Behavior
- Avatars maintain circle shape at all sizes
- Profile backgrounds scale to cover, maintain aspect ratio
- Card images maintain border-radius treatment at all breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Gravatar Blue (`#1A4FC2`)
- CTA Hover: Blue Dark (`#164AB8`)
- Background: White (`#FFFFFF`)
- Alt Background: Gray 0 (`#F6F7F7`)
- Heading text: Text Primary (`#101517`)
- Body text: Text Secondary (`#50575E`)
- Muted text: Text Muted (`#787C82`)
- Border: Gray 10 (`#DCDCDE`)
- Focus: Gravatar Blue (`#1A4FC2`)
- Success: Green (`#00A32A`)
- Error: Red (`#CC1818`)
- Dark surface: `#1C2433`
- Dark card surface: `#252F3F`

### Example Component Prompts
- "Create a hero section on white background. Headline at 48px Inter weight 700, line-height 1.1, letter-spacing -0.5px, color #101517. Subtitle at 18px weight 400, line-height 1.6, color #50575E. Blue CTA button (#1A4FC2, 8px radius, 10px 24px padding, white text) and outlined secondary button (transparent, 1px solid #1A4FC2, #1A4FC2 text, 8px radius). Center a 128px circular avatar above the headline."
- "Design a profile card: white background, 1px solid #DCDCDE border, 12px radius. Shadow: 0px 1px 3px rgba(0,0,0,0.08). Centered 96px circular avatar at top. Name at 20px Inter weight 600, #101517. Bio at 14px weight 400, #50575E. Row of social links in #1A4FC2 below."
- "Build a verified badge: rgba(0,163,42,0.1) background, #00A32A text, 9999px radius (pill), 4px 12px padding, 12px Inter weight 500. Checkmark icon before text."
- "Create navigation: white sticky header, height 64px. Gravatar wordmark left in #1A4FC2. Inter 14px weight 500 links, #50575E default, #101517 hover. Blue CTA 'Sign up' right-aligned (#1A4FC2 bg, white text, 8px radius)."
- "Design a dark profile section: #1C2433 background, white text. Name 32px Inter weight 600, letter-spacing -0.3px. Bio 16px weight 400, rgba(255,255,255,0.7). Avatar 128px circle with 3px solid white border. Cards inside use #252F3F background with 1px solid rgba(255,255,255,0.1) border, 12px radius."

### Iteration Guide
1. Always use circular avatars -- this is the single most important brand element
2. Blue (`#1A4FC2`) for all interactive elements; never use other colors for primary actions
3. Heading weight is 600-700; body is 400; buttons/links are 500
4. Shadow formula: `rgba(0,0,0, opacity)` where opacity is 0.08 (resting), 0.12 (hover), 0.16 (elevated)
5. Heading color is `#101517`, body is `#50575E`, muted is `#787C82`
6. Border-radius: 8px for buttons/inputs, 12px for cards, 50% for avatars, 9999px for pills
7. Dark mode uses `#1C2433` background with `#252F3F` card surfaces -- deep navy, not black
8. Keep layouts generous and avatar-focused -- the user's identity is the content
