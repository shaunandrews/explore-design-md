# Tumblr DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Font sizes and weights for all type hierarchy levels** — Confidence: ~40%. DESIGN.md lists estimated sizes and weights based on general observation, but exact `font-size`, `font-weight`, and `line-height` values for each hierarchy level (hero, headings, body, captions, buttons) were not extracted from DevTools. These need to be verified element-by-element on tumblr.com.

- [ ] **Button padding and sizing** — Confidence: ~35%. Button padding values (8px 16px) are rough estimates. The actual padding, height, and min-width for primary, secondary, and ghost buttons need to be inspected via DevTools on the live site. Different button contexts (follow, post, reblog, settings) may use different padding.

- [ ] **Post card shadow values** — Confidence: ~30%. DESIGN.md describes Tumblr as using minimal shadows, but the exact `box-shadow` values for post cards, dropdowns, modals, and popovers were not extracted. Need to inspect shadow CSS on feed cards, compose modal, and notification popover.

- [ ] **Spacing system / base unit** — Confidence: ~35%. The spacing scale (4px, 8px, 12px, etc.) is an educated guess. Tumblr may use a different base unit or a non-standard spacing scale. Need to inspect actual margin/padding values across chrome, post cards, and content areas.

## Medium Priority (likely correct but worth checking)

- [ ] **Tag/pill border-radius** — Confidence: ~60%. Documented as `3px` (matching the general system radius) but some tags may use pill shapes (`9999px`). Verify which radius is used for hashtag pills, blog labels, and filter tags.

- [ ] **Dark mode color mapping completeness** — Confidence: ~65%. The documented dark mode swaps (`#ffffff` -> `#1a1a1a`, `#0d243f` -> `#1a1a1a`) are based on the provided data, but there may be additional color shifts (e.g., text opacity changes, accent color adjustments, border modifications) not captured.

- [ ] **Navigation layout dimensions** — Confidence: ~55%. Sidebar width (240px estimated), bottom bar height on mobile, icon sizes in nav, and spacing between nav items need verification against the live site.

- [ ] **Avatar size scale** — Confidence: ~70%. Documented sizes (64px, 128px, 256px, 512px) are standard web sizes. Verify that these are the actual avatar sizes used in feed (48px?), profile (128px?), and full resolution contexts.

- [ ] **Brand color opacity tint values** — Confidence: ~75%. Documented `.1`, `.2`, `.3` opacity variants. Verify whether Tumblr uses exactly 10%, 20%, 30% or different opacity steps (e.g., 8%, 15%, 25%).

## Low Priority (minor details)

- [ ] **Favorit Modern usage scope** — Confidence: ~50%. The `Favorit Modern` variant is documented but its specific usage contexts (headings only? certain UI elements?) were not determined. May be used for display text while regular Favorit handles body text.

- [ ] **Input field styling details** — Confidence: ~45%. Border colors, focus ring styles, placeholder text colors, and padding values for form inputs (search bar, compose field, settings forms) need detailed extraction.

- [ ] **Transition and animation values** — Confidence: ~30%. Hover transitions, card animations, modal entrance/exit animations, and loading states were not extracted. Tumblr likely has specific easing curves and duration values.

- [ ] **Breakpoint exact values** — Confidence: ~50%. The breakpoints (<640px, 640-1024px, >1024px) are reasonable estimates but may not match Tumblr's actual media query values.

## Preview File Notes

- **Font substitution**: Preview files use **DM Sans** from Google Fonts as a stand-in for Favorit (commercial, requires license from Dinamo foundry). The actual site loads `Favorit` and `Favorit Modern`. If you have a Dinamo license, replace the Google Fonts import with the proper font files.
- **Logo**: Uses a simple SVG "t" lettermark in the preview, approximating the Tumblr logo style. Replace with the official Tumblr logo SVG for production use.

## How to Review

1. Open tumblr.com in a browser (logged in for full dashboard experience)
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
