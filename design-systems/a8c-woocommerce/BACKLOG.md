# WooCommerce DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Proxima Nova font-weight for headlines** — Confidence: ~60%. DESIGN.md says 700 (bold) for display/hero and 600 for sub-headings, based on user correction that the original 400 was wrong. Need to verify exact weights used across hero, section headings, and card titles on woocommerce.com via DevTools.

- [ ] **Proxima Nova vs Inter boundary** — Confidence: ~70%. DESIGN.md puts the switch at Sub-heading / Body Large, but the actual boundary may differ. Some sub-headings may use Inter, or some body-large text may use Proxima Nova. Verify which elements on the live site use `proxima-vara` vs `Inter var`.

- [ ] **Primary CTA button color `#32373c` (dark gray) vs `#720eec` (purple)** — Confidence: ~75%. The CSS default `.wp-element-button` uses `#32373c`, but the live site hero CTA may use the purple. Verify which color the main "Get started" / "Start building" button actually uses.

- [ ] **Hero heading sizes on desktop** — Confidence: ~70%. The `clamp(44px, 2.75rem + 1.875vw, 68px)` value was extracted from CSS variables, but different hero sections may use different sizes. Verify the actual rendered size on the homepage hero at 1440px viewport.

## Medium Priority (likely correct but worth checking)

- [ ] **Purple scale completeness** — Confidence: ~85%. All 9 steps from `#1f0342` to `#f2edff` were extracted from CSS variables. Verify these are the current values and that none have been updated in recent deploys.

- [ ] **Sandstone palette usage** — Confidence: ~65%. Found sandstone color tokens (`#fbf9f6`, `#e6e2de`, etc.) in CSS but unclear where they're actually used. May be for specific sections, blog, or marketplace pages. Verify scope of usage.

- [ ] **16px as primary border-radius** — Confidence: ~80%. Found 16px used on many card and container elements, but some cards use 8px and some buttons use 0px. Verify 16px is the dominant radius for cards and containers.

- [ ] **Card shadow transitions** — Confidence: ~80%. Documented hover shadow as `0px 2px 24px rgba(0,0,0,0.16)` and hover scale as `1.023`. Verify these exact values on product/feature cards.

- [ ] **Navigation bottom border** — Confidence: ~75%. Documented as `1px solid rgba(246,247,247,0.6)` but this may only apply in transparent header mode. Verify for both scrolled and non-scrolled states.

## Low Priority (minor details)

- [ ] **Spacing scale `clamp()` values** — Confidence: ~90%. Extracted from `--wp--preset--spacing--*` CSS variables. These are WordPress core presets and should be stable.

- [ ] **Wooble shape masks** — Confidence: ~85%. Found SVG mask references (`wooble-openess`, `wooble-success`, etc.). These are decorative and may change across pages. Not critical for design system accuracy.

- [ ] **Video overlay scrim** — Confidence: ~80%. Documented `rgba(0,0,0,0.7)` scrim with 85px play button. Verify exact values if video sections are part of rebuild scope.

- [ ] **Custom cursor SVG** — Confidence: ~80%. Found reference to custom cursor SVG on video hover elements. Verify if this is still in use and whether it applies globally or only on specific pages.

## Preview File Notes

- **Font substitution**: Preview files use **Montserrat** from Google Fonts as a stand-in for Proxima Nova (commercial, requires Adobe Fonts/Typekit license). The actual site loads `proxima-vara`. If you have a Typekit project ID, replace the Google Fonts import with the proper Typekit link.
- **Logo**: Uses the actual Woo SVG logo extracted from woocommerce.com.

## How to Review

1. Open woocommerce.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
