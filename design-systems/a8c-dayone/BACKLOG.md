# Day One DESIGN.md — Review Backlog

Items flagged for human review. **IMPORTANT: This entire design system was built from training knowledge, NOT live site extraction.** WebFetch was unavailable during creation. All values should be verified against dayoneapp.com and the actual Day One app.

## Critical Priority (training knowledge — needs live verification)

- [ ] **Primary brand blue `#4a90d9`** — Confidence: ~50%. This is an approximation of Day One's signature blue from training knowledge. The actual hex value could differ significantly. Verify by inspecting the Day One website or app assets. The blue may be closer to `#4a8fd9`, `#4990d9`, or something entirely different.

- [ ] **Font stack / custom fonts** — Confidence: ~60%. DESIGN.md assumes Day One uses system fonts (SF Pro) with no custom web fonts. The marketing site (dayoneapp.com) may load a custom typeface (e.g., a serif or sans-serif for headlines). Verify by inspecting the website's font-face declarations and CSS.

- [ ] **Typography sizes and weights** — Confidence: ~45%. All font sizes, weights, and line heights are educated guesses based on Apple platform conventions and journaling app patterns. Verify every value against the live site and app using DevTools / Accessibility Inspector.

- [ ] **Dark mode colors** — Confidence: ~55%. Dark mode palette assumes Apple system dark colors (`#1c1c1e`, `#2c2c2e`, `#3a3a3c`). Day One may use custom dark surfaces. The dark-mode brand blue (`#5a9ee6`) is an estimate. Verify in the actual app's dark mode.

- [ ] **Border-radius values (8px, 12px)** — Confidence: ~50%. The 12px card radius and 8px button radius are estimates. Day One's actual values could be 10px, 16px, or use a different scale entirely. Verify by inspecting card and button elements.

## High Priority (likely directionally correct but values need verification)

- [ ] **Shadow system** — Confidence: ~55%. DESIGN.md describes single-layer neutral shadows. Day One may use more complex shadows, brand-tinted shadows, or different opacity values. Verify by inspecting card and modal elements on the live site.

- [ ] **Button padding and styling** — Confidence: ~50%. Button padding (10px 20px), radius, and hover colors are estimates. Verify against actual CTA buttons on dayoneapp.com.

- [ ] **Neutral gray scale** — Confidence: ~45%. The gray scale (`#222222`, `#333333`, `#666666`, `#999999`, etc.) uses generic rounded hex values. Day One likely uses a more specific palette — possibly with warm or cool undertones. Verify all neutral colors.

- [ ] **Spacing scale** — Confidence: ~60%. The 4px base unit and scale are standard assumptions. Day One may use 8px base, or a non-standard scale. Verify from CSS or design tokens.

- [ ] **Card and entry preview design** — Confidence: ~55%. The card structure (photo at top, title, body, tags) follows common journaling patterns but Day One's actual entry cards may differ in layout, padding, and visual treatment.

## Medium Priority (design patterns likely correct, details uncertain)

- [ ] **Navigation structure** — Confidence: ~60%. Web nav described as sticky white header with bottom border. The actual site may use a transparent header, different layout, or different CTA placement.

- [ ] **Sidebar navigation pattern** — Confidence: ~65%. The sidebar with All Entries, Calendar, Map, Photos, Starred, Tags follows known Day One features. Exact styling, colors, and active state treatment need verification.

- [ ] **Tag/badge styling** — Confidence: ~50%. Tag background `#e8f0fb` and 6px radius are estimates. Day One may use pill-shaped tags, different colors, or a different tagging UI altogether.

- [ ] **Form input styling** — Confidence: ~55%. Input border, radius, focus ring colors are standard estimates. Verify against actual login/signup forms on dayoneapp.com.

- [ ] **Marketing site layout** — Confidence: ~50%. Max content width (1200px), section spacing, and hero layout are standard assumptions. The actual dayoneapp.com may use a different grid, different section patterns, or a more distinctive layout.

## Low Priority (minor details)

- [ ] **Premium badge colors** — Confidence: ~40%. The gold/amber premium badge (`#fff3cd` bg, `#856404` text) is a guess. Day One Premium may use blue, a star icon, or an entirely different treatment.

- [ ] **Photo inner shadow treatment** — Confidence: ~45%. The `inset 0 0 0 1px rgba(0,0,0,0.05)` border on photos is a common pattern but may not match Day One's approach.

- [ ] **Breakpoint values** — Confidence: ~60%. Standard breakpoints (640, 1024, 1440px) assumed. Day One's responsive behavior may use different breakpoints.

- [ ] **Touch target sizes** — Confidence: ~70%. 44px minimum follows Apple HIG, which Day One likely respects as an Apple-first app.

## Preview File Notes

- **Font substitution**: Preview files use **Inter** from Google Fonts as a stand-in for the system font stack (SF Pro is not available as a web font). The actual app uses platform system fonts.
- **Logo**: Uses a star icon (&#9733;) as a placeholder. Replace with the actual Day One star/compass logo SVG.
- **Photos**: Entry card photos use Unsplash placeholder images. Replace with representative journal-style photography.
- **Colors**: ALL color values are approximations from training knowledge. Every hex value should be verified.

## How to Review

1. Open dayoneapp.com in a browser
2. Use DevTools to inspect colors, fonts, spacing, shadows, and border-radius values
3. Open the Day One app (iOS/Mac) and compare dark mode surfaces and text colors
4. Check the item off and note any corrections needed
5. Update DESIGN.md with corrected values
6. Update preview.html / preview-dark.html if visual tokens change
7. Pay special attention to the brand blue — it anchors the entire system
