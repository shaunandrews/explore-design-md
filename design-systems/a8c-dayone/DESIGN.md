# Design System: Day One

## 1. Visual Theme & Atmosphere

Day One is a premium journaling app by Automattic -- a digital companion for capturing life's moments with warmth, clarity, and intimacy. The design language is deliberately personal and unhurried, built around a signature blue (`#4a90d9`) that evokes calm skies and trustworthy permanence. The overall aesthetic is clean but never cold; it feels like opening a beautiful leather notebook rather than launching enterprise software.

The typography centers on the system font stack (SF Pro on Apple platforms), which reinforces Day One's native-feeling, platform-respectful approach. Headlines use medium weights at generous sizes, while body text stays comfortable at 16-17px for extended reading and writing. The app prioritizes photography -- journal entries with photos are given hero treatment with large image areas, subtle rounded corners, and gentle shadows that make memories feel tangible.

White space is abundant and intentional. The writing interface strips away chrome to let thoughts flow uninterrupted. Cards and entry previews use soft shadows and rounded corners (8-12px) that feel approachable without being childish. The color palette is restrained -- blue for brand and interactive elements, warm grays for text, and soft backgrounds that reduce eye strain during reflective writing sessions.

**Key Characteristics:**
- Signature blue (`#4a90d9`) as the primary brand and interactive color -- calm, trustworthy, personal
- System font stack (SF Pro / system-ui) for a native, platform-respectful feel
- Photography-first layout with generous image areas and subtle frames
- Warm gray text (`#333333`) instead of pure black -- easier on the eyes for journaling
- Soft, rounded corners (8-12px) on cards and containers -- approachable and personal
- Minimal chrome in the writing interface -- the content is the UI
- Light backgrounds with subtle warmth (`#f7f7f7`, `#fafafa`) to reduce harshness
- Gentle single-layer shadows for depth without drama

## 2. Color Palette & Roles

### Primary
- **Day One Blue** (`#4a90d9`): Primary brand color, CTA backgrounds, active states, links, toolbar icons. A medium-saturation blue that feels warm and personal rather than corporate.
- **Dark Text** (`#333333`): Primary text color. A warm dark gray that's gentler than black for extended reading and writing.
- **White** (`#ffffff`): Primary background, card surfaces, writing area.

### Brand Blue Scale
- **Blue Dark** (`#3a7bc8`): Hover state for primary buttons, pressed states.
- **Blue Deep** (`#2d6bb5`): Active/pressed states, selected navigation items.
- **Blue Light** (`#6aacef`): Secondary highlights, progress indicators.
- **Blue Pale** (`#e8f0fb`): Tinted backgrounds for blue-themed sections, selected states.
- **Blue Wash** (`#f0f6fe`): Very subtle blue tint for hover backgrounds.

### Interactive
- **Primary Blue** (`#4a90d9`): Links, primary buttons, active toggles.
- **Blue Hover** (`#3a7bc8`): Hover state for interactive blue elements.
- **Destructive Red** (`#e74c3c`): Delete actions, destructive confirmations.
- **Red Hover** (`#c0392b`): Hover for destructive actions.
- **Success Green** (`#27ae60`): Sync complete, entry saved indicators.

### Neutral Scale
- **Heading** (`#222222`): Primary headings, journal entry titles.
- **Body** (`#333333`): Body text, entry content.
- **Secondary** (`#666666`): Timestamps, metadata, secondary labels.
- **Tertiary** (`#999999`): Placeholder text, disabled states, subtle labels.
- **Muted** (`#cccccc`): Dividers, inactive icons, subtle borders.
- **Light** (`#e5e5e5`): Borders, separators, card outlines.
- **Wash** (`#f2f2f2`): Alternate row backgrounds, subtle fills.
- **Surface** (`#f7f7f7`): Sidebar backgrounds, secondary surfaces.
- **Canvas** (`#fafafa`): Page background, canvas behind cards.

### Surface & Borders
- **Border Default** (`#e5e5e5`): Standard borders for cards, dividers, input outlines.
- **Border Subtle** (`#eeeeee`): Very light borders for entry separators in lists.
- **Border Focus** (`#4a90d9`): Focus ring color for inputs and interactive elements.
- **Surface Card** (`#ffffff`): Card and entry preview backgrounds.
- **Surface Sidebar** (`#f7f7f7`): Sidebar and navigation panel backgrounds.

### Shadow Colors
- **Shadow Soft** (`rgba(0,0,0,0.08)`): Standard card shadow -- gentle lift.
- **Shadow Medium** (`rgba(0,0,0,0.12)`): Hover state shadow, dropdowns.
- **Shadow Strong** (`rgba(0,0,0,0.16)`): Modals, popovers, floating panels.

### Dark Mode
- **Dark Background** (`#1c1c1e`): Primary dark mode background (system dark).
- **Dark Surface** (`#2c2c2e`): Card and elevated surface in dark mode.
- **Dark Surface Elevated** (`#3a3a3c`): Sidebar, secondary surfaces in dark mode.
- **Dark Border** (`#48484a`): Borders and dividers in dark mode.
- **Dark Text Primary** (`#f5f5f7`): Primary text in dark mode.
- **Dark Text Secondary** (`#ababab`): Secondary text in dark mode.
- **Dark Blue** (`#5a9ee6`): Adjusted brand blue for dark mode legibility.

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system`, `BlinkMacSystemFont`, `SF Pro Text`, `SF Pro Display`, `system-ui`, `Helvetica Neue`, `Helvetica`, `Arial`, sans-serif
- **Monospace**: `SF Mono`, `Menlo`, `Consolas`, `Monaco`, monospace
- **Writing/Serif** (optional journal font): `Georgia`, `Charter`, `Times New Roman`, serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | System / SF Pro Display | 40px (2.50rem) | 700 | 1.15 | -0.5px | Marketing pages, onboarding hero |
| Display Large | System / SF Pro Display | 32px (2.00rem) | 700 | 1.20 | -0.3px | Section headings on marketing site |
| Page Title | System / SF Pro Display | 28px (1.75rem) | 600 | 1.25 | -0.2px | In-app page titles |
| Entry Title | System / SF Pro Text | 22px (1.38rem) | 600 | 1.30 | -0.1px | Journal entry heading |
| Sub-heading | System / SF Pro Text | 18px (1.13rem) | 600 | 1.35 | normal | Section labels, card titles |
| Body Large | System / SF Pro Text | 17px (1.06rem) | 400 | 1.60 | normal | Journal entry body text (iOS) |
| Body | System / SF Pro Text | 16px (1.00rem) | 400 | 1.55 | normal | Standard body text (web) |
| Body Small | System / SF Pro Text | 14px (0.88rem) | 400 | 1.50 | normal | Secondary descriptions, metadata |
| Caption | System / SF Pro Text | 12px (0.75rem) | 500 | 1.35 | 0.2px | Timestamps, tags, small labels |
| Caption Small | System / SF Pro Text | 11px (0.69rem) | 400 | 1.30 | 0.3px | Fine metadata, word counts |
| Button | System / SF Pro Text | 16px (1.00rem) | 600 | 1.00 | normal | Primary button text |
| Button Small | System / SF Pro Text | 14px (0.88rem) | 500 | 1.00 | normal | Secondary/compact buttons |
| Nav Link | System / SF Pro Text | 14px (0.88rem) | 500 | 1.00 | normal | Navigation items |

### Principles
- **System-native typography**: Day One uses system fonts exclusively, ensuring the app feels like a natural extension of the platform. No custom web fonts -- the writing experience should feel as native as the Notes app.
- **Comfortable reading sizes**: Body text at 16-17px with generous line height (1.55-1.60) ensures extended journal reading is effortless.
- **Medium weight headings**: Weight 600 for headings rather than 700/800 -- authoritative but not aggressive. The journaling context calls for warmth, not impact.
- **Tight tracking at display sizes**: Negative letter-spacing at 28px+ tightens headlines for a polished, editorial feel.

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#4a90d9`
- Text: `#ffffff`
- Padding: 10px 20px
- Radius: 8px
- Font: 16px system font weight 600
- Hover: `#3a7bc8` background
- Use: Primary CTA ("Start Journaling", "Save Entry", "Upgrade")

**Secondary / Outlined**
- Background: transparent
- Text: `#4a90d9`
- Padding: 10px 20px
- Radius: 8px
- Border: `1.5px solid #4a90d9`
- Font: 16px system font weight 500
- Hover: background `#f0f6fe`
- Use: Secondary actions ("Learn More", "Maybe Later")

**Destructive**
- Background: `#e74c3c`
- Text: `#ffffff`
- Padding: 10px 20px
- Radius: 8px
- Font: 16px system font weight 600
- Hover: `#c0392b` background
- Use: Delete entry, cancel subscription

**Ghost / Tertiary**
- Background: transparent
- Text: `#666666`
- Padding: 8px 16px
- Radius: 8px
- Font: 14px system font weight 500
- Hover: background `#f2f2f2`
- Use: Tertiary actions, cancel buttons

### Cards & Containers

**Entry Card**
- Background: `#ffffff`
- Border: `1px solid #eeeeee`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 2px 8px`
- Hover shadow: `rgba(0,0,0,0.12) 0px 4px 16px`
- Padding: 16px
- Photo area: full-width with 12px top radius, 0 bottom radius when at top of card

**Feature Card (Marketing)**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 4px 12px`
- Padding: 24px
- Hover: subtle lift with increased shadow

### Tags / Badges
**Journal Tag**
- Background: `#e8f0fb`
- Text: `#4a90d9`
- Padding: 4px 10px
- Radius: 6px
- Font: 12px weight 500

**Status Badge (Premium)**
- Background: `#fff3cd`
- Text: `#856404`
- Padding: 2px 8px
- Radius: 4px
- Font: 11px weight 600, uppercase

### Inputs & Forms
- Border: `1px solid #e5e5e5`
- Radius: 8px
- Padding: 10px 14px
- Focus: `2px solid #4a90d9` (ring style)
- Label: `#333333`, 14px weight 500
- Placeholder: `#999999`
- Background: `#ffffff`

### Navigation
- Sidebar: `#f7f7f7` background, full height
- Active item: `#e8f0fb` background, `#4a90d9` text, 8px radius
- Inactive item: `#666666` text
- Item padding: 8px 12px
- Web nav: sticky white header with subtle bottom border `1px solid #eeeeee`
- Logo: Day One star icon in blue, wordmark in dark gray

### Photo Treatment
- Full-bleed within entry cards, 12px radius matching card
- Subtle inner shadow `inset 0 0 0 1px rgba(0,0,0,0.05)` to define edge on light photos
- Gallery grid: 4px gap between photos
- Single photo: max-height capped, object-fit cover

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

### Grid & Container
- Max content width: 720px (journal reading/writing), 1200px (marketing pages)
- Sidebar width: 280px (entry list), collapsible
- Writing area: single column, centered, generous horizontal padding
- Marketing: centered content with alternating white/light gray sections

### Whitespace Philosophy
- **Writing-first spacing**: The journal writing area uses generous margins and padding to create a focused, distraction-free zone. Content is never cramped.
- **Breathing room**: Between sections, 48-64px vertical spacing gives each content block room to breathe.
- **Compact in lists, generous in content**: The entry list sidebar is relatively compact (12-16px padding), while the entry reading view is expansive (32px+ margins).

### Border Radius Scale
- Small (4px): Tags, small badges, tooltips
- Standard (8px): Buttons, inputs, small cards, navigation items
- Comfortable (12px): Entry cards, photo containers, feature cards
- Large (16px): Modal dialogs, onboarding cards
- Pill (9999px): Toggle switches, small pill badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional 1px border | Page background, inline elements, flat lists |
| Subtle (Level 1) | `rgba(0,0,0,0.05) 0px 1px 3px` | Entry list items, subtle card lift |
| Standard (Level 2) | `rgba(0,0,0,0.08) 0px 2px 8px` | Entry cards, content panels |
| Elevated (Level 3) | `rgba(0,0,0,0.12) 0px 4px 16px` | Dropdowns, hover cards, popovers |
| Modal (Level 4) | `rgba(0,0,0,0.16) 0px 8px 32px` | Modals, floating panels, dialogs |
| Overlay scrim | `rgba(0,0,0,0.4)` | Behind modals and sheets |

**Shadow Philosophy**: Day One uses simple, neutral shadows with a single layer. There is no brand-colored shadow tinting -- the shadows are pure black at low opacity, creating gentle, natural depth. This keeps the focus on the content (photos, text) rather than the UI chrome. Shadows are deliberately soft and close to the element, avoiding dramatic drop effects.

## 7. Do's and Don'ts

### Do
- Use the system font stack for all UI text -- Day One should feel native to each platform
- Use `#4a90d9` (brand blue) consistently for interactive elements and primary CTAs
- Use warm grays (`#333333`, `#666666`) instead of pure black for text
- Keep the writing interface minimal -- hide toolbars and chrome when the user is composing
- Use 12px border-radius for cards and photo containers -- approachable and warm
- Give photography generous space -- entries with photos should feel like a photo album
- Use `#f7f7f7` for secondary surfaces -- warm enough to avoid clinical coldness
- Maintain 16-17px body text with 1.55+ line height for comfortable reading

### Don't
- Don't use custom display fonts -- system fonts are the brand voice
- Don't use pure black (`#000000`) for body text -- it's too harsh for a journaling context
- Don't use heavy shadows or multi-layer shadow systems -- keep depth subtle and single-layer
- Don't use border-radius larger than 16px on containers -- avoid bubbly/toy-like aesthetics
- Don't use bright, saturated accent colors for UI chrome -- the user's photos and text should be the most colorful elements
- Don't crowd the writing interface with visible buttons and toolbars
- Don't use dark brand sections on marketing pages excessively -- Day One's voice is light and warm
- Don't apply letter-spacing to body text -- only tighten at display sizes (28px+)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, sidebar hidden, full-bleed entry cards |
| Tablet | 640-1024px | Two-pane (list + entry) or single column on portrait |
| Desktop | 1024-1440px | Three-pane (sidebar + list + entry) or two-pane |
| Large Desktop | >1440px | Centered content with generous margins |

### Touch Targets
- Minimum 44px touch target on iOS/Android (Apple HIG compliant)
- Buttons: 10px+ vertical padding ensures comfortable tap zones
- List items: 48px minimum row height
- Toolbar icons: 44x44px tap area minimum

### Collapsing Strategy
- Desktop three-pane -> tablet two-pane -> mobile single-pane
- Entry photos: maintain aspect ratio, max-height constraints relax on mobile
- Typography: hero 40px -> 32px on mobile, body size maintained at 16px
- Navigation: sidebar collapses to bottom tab bar on mobile
- Writing area: full-screen on mobile with minimal chrome
- Section spacing: 64px -> 40px -> 24px across breakpoints

### Image Behavior
- Entry photos: `object-fit: cover` with consistent aspect ratios in list view
- Hero images on marketing: full-width with max-height constraint
- Gallery: 2-column grid on mobile, 3-4 column on desktop
- Map thumbnails: fixed aspect ratio, rounded corners matching card radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Day One Blue (`#4a90d9`)
- CTA Hover: Blue Dark (`#3a7bc8`)
- Background: White (`#ffffff`)
- Surface: Light Gray (`#f7f7f7`)
- Canvas: Near White (`#fafafa`)
- Heading text: Dark (`#222222`)
- Body text: Warm Gray (`#333333`)
- Secondary text: Medium Gray (`#666666`)
- Placeholder: Light Gray (`#999999`)
- Border: Light (`#e5e5e5`)
- Border Subtle: Lighter (`#eeeeee`)
- Link: Day One Blue (`#4a90d9`)
- Destructive: Red (`#e74c3c`)
- Success: Green (`#27ae60`)
- Tag background: Blue Pale (`#e8f0fb`)
- Dark mode bg: System Dark (`#1c1c1e`)
- Dark mode surface: Elevated Dark (`#2c2c2e`)

### Example Component Prompts
- "Create a hero section on white background. Headline at 40px system font weight 700, line-height 1.15, letter-spacing -0.5px, color #222222. Subtitle at 17px weight 400, line-height 1.60, color #666666, max-width 560px. Blue CTA button (#4a90d9, 8px radius, 10px 20px padding, white text weight 600) and outlined secondary button (transparent bg, 1.5px solid #4a90d9, #4a90d9 text, 8px radius)."
- "Design a journal entry card: white background, 1px solid #eeeeee border, 12px radius. Shadow: rgba(0,0,0,0.08) 0px 2px 8px. Photo area at top, full-width, 12px top radius. Title at 22px weight 600, color #222222. Body preview at 16px weight 400, color #333333, line-height 1.55. Timestamp at 12px weight 500, color #999999."
- "Build a sidebar navigation: #f7f7f7 background, full height. Items at 14px weight 500. Active item: #e8f0fb background, #4a90d9 text, 8px radius. Inactive: #666666 text. Item padding 8px 12px."
- "Create a tag pill: #e8f0fb background, #4a90d9 text, 6px radius, 4px 10px padding, 12px weight 500."
- "Design a modal dialog: white background, 16px radius, rgba(0,0,0,0.16) 0px 8px 32px shadow. Title at 22px weight 600, #222222. Body at 16px weight 400, #333333. Blue primary button and ghost cancel button. Scrim: rgba(0,0,0,0.4)."

### Iteration Guide
1. Always use the system font stack -- never load custom web fonts for the app UI
2. Brand blue `#4a90d9` is the only saturated color in the UI; everything else is neutral gray
3. Shadow formula: single layer, `rgba(0,0,0, opacity)` where opacity scales from 0.05 (subtle) to 0.16 (modal)
4. Text color hierarchy: `#222222` (headings) -> `#333333` (body) -> `#666666` (secondary) -> `#999999` (tertiary)
5. Border-radius: 8px for buttons/inputs, 12px for cards, 16px for modals
6. Writing area should always be single-column, max 720px wide, centered
7. Photos get premium treatment: generous sizing, matching card radius, subtle inner border on light images
8. Dark mode follows system conventions: `#1c1c1e` bg, `#2c2c2e` surface, brand blue lightened to `#5a9ee6`
