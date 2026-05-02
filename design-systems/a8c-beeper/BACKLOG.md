# Beeper DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Exact background color: pure black #000000 or near-black?** — Confidence: ~75%. DESIGN.md says `#000000` but many dark-themed sites use a near-black like `#0a0a0a` or `#111111` for slightly softer contrast. Verify the actual `background-color` on `<body>` via DevTools on beeper.com.

- [ ] **Heading font sizes at desktop viewport** — Confidence: ~70%. DESIGN.md says `text-5xl (~48px)` for hero headings. Tailwind's `text-5xl` is actually `3rem = 48px`, but the site may use custom Tailwind config or responsive clamp values. Verify the actual computed `font-size` on the hero `<h1>` at 1440px viewport width.

- [ ] **CTA button exact styling** — Confidence: ~60%. DESIGN.md describes the primary CTA as either transparent/link-based or gradient-background. The live site may use a plain white text link ("Download for free") with no button background at all, or it may use the brand gradient as a button fill. Verify: does the main CTA have a visible background, border, or is it a plain styled link?

- [ ] **Haskoy font file and metrics** — Confidence: ~65%. Haskoy is listed as a custom variable font in woff2 format. Need to verify: exact font-face declarations (weight range, unicode-range), whether it's truly a single variable file or multiple static weights, and the exact fallback stack used in the CSS.

## Medium Priority (likely correct but worth checking)

- [ ] **Brand gradient angle and stops** — Confidence: ~85%. DESIGN.md says `linear-gradient(225deg, #6953f2, #0c52f9)`. This was extracted from the site source. Verify these exact hex values and the 225deg angle have not changed in recent deploys. Some implementations may also include intermediate color stops.

- [ ] **Navigation height and padding** — Confidence: ~60%. DESIGN.md estimates ~64px nav height. The actual sticky nav may have different padding values, and may include a translucent background blur effect. Verify exact `height`, `padding`, `background` (including alpha), and `backdrop-filter` values.

- [ ] **Chat bubble illustration details** — Confidence: ~50%. DESIGN.md references 12 numbered bubble illustrations (`bubble-1` through `bubble-12`). These appear to be decorative SVG/image assets. Need to verify: are they SVG or raster? What are their exact dimensions? How are they positioned (absolute, grid, scattered)? What content do they show?

- [ ] **Decorative SVG exact positioning** — Confidence: ~55%. Stars, clouds, and smile SVGs are described as decorative positioned elements. Need to verify exact `position`, `top`/`right`/`bottom`/`left` values, `transform` properties, and `opacity` for each decorative element. The smile is noted as having a `translate` transform.

- [ ] **Text opacity values for hierarchy** — Confidence: ~80%. DESIGN.md says 100% for headings, 80% for body, ~60% for tertiary. The actual values may be 0.85 or 0.9 for secondary rather than exactly 0.8. Verify exact `opacity` or `rgba` alpha values on body text, footer links, and metadata text.

- [ ] **rounded-2xl exact pixel value** — Confidence: ~90%. Tailwind's `rounded-2xl` maps to `1rem = 16px` by default, but Beeper may use a custom Tailwind config with a different value. Verify the computed `border-radius` on card and video container elements.

## Low Priority (minor details)

- [ ] **Tailwind spacing scale customizations** — Confidence: ~85%. DESIGN.md uses standard Tailwind spacing (py-16 = 64px, py-20 = 80px, etc.). Beeper may have custom spacing values in their Tailwind config. Verify a few key section paddings against the documented values.

- [ ] **Footer column structure and links** — Confidence: ~80%. DESIGN.md says COMPANY, APP, LEGAL columns with social icons (X, LinkedIn, GitHub). Verify exact column headings, link labels, and whether social icons are present and which ones.

- [ ] **Messaging platform icon exact SVGs** — Confidence: ~75%. The 28px inline SVG icons for each platform are simplified representations. The actual SVGs on the live site are likely more detailed brand-accurate icons. If pixel-perfect reproduction is needed, extract the actual SVG paths from the site source.

- [ ] **X icon size exception** — Confidence: ~70%. DESIGN.md notes the X (Twitter) icon is 30x30px while others are 28x28px. Verify this size difference actually exists and is intentional.

- [ ] **Video embed source** — Confidence: ~85%. DESIGN.md says Cloudflare Stream. Verify the iframe source URL and whether a poster image is used for the thumbnail.

## Preview File Notes

- **Font substitution**: Preview files use **DM Sans** from Google Fonts as a stand-in for Haskoy (custom variable font not publicly available). The actual site loads Haskoy via `@font-face` with woff2 files. DM Sans was chosen as a geometric sans-serif with similar proportions and rounded character. If you have the Haskoy font files, replace the Google Fonts import with the proper `@font-face` declarations.
- **Messaging icons**: Simplified SVG representations. The live site uses more detailed brand-accurate SVG icons for each messaging platform.
- **Decorative illustrations**: Stars, clouds, and smile are simplified SVG approximations. The live site uses more elaborate decorative SVGs with specific positioning.
- **Dark is default**: Beeper's site is dark by default — this is not a "dark mode" toggle. The `preview-dark.html` represents the true Beeper experience. The `preview.html` light catalog exists to show design tokens on a readable background.

## How to Review

1. Open beeper.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
