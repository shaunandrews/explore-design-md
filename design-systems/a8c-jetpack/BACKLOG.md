# Jetpack DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Heading font-weight 700 across all pages** — Confidence: ~75%. DESIGN.md assumes 700 (bold) for all headings based on the homepage. Verify that h1, h2, h3 consistently use weight 700 across the features, pricing (cloud.jetpack.com/pricing), and blog pages. Some headings may use 600.

- [ ] **Primary CTA button is dark gray `#32373c`, not green** — Confidence: ~70%. The CSS default `.wp-element-button` uses `#32373c`, but Jetpack may use green buttons (`#008710`) for key CTAs on some pages. Verify the actual "Get Jetpack" / "Get started" button color on the homepage hero.

- [ ] **Jetpack logo SVG** — Confidence: ~50%. Could not extract the actual Jetpack logo SVG from the site. The preview file uses a simplified green circle with triangular shapes. Need to replace with the actual Jetpack mark SVG from the brand assets.

- [ ] **Recoleta serif font usage** — Confidence: ~55%. Found `Recoleta` referenced in the CSS but unclear where it's actually used on jetpack.com. May be inherited from the WordPress.com theme. Verify if any headings or display text actually render in Recoleta on the live site.

## Medium Priority (likely correct but worth checking)

- [ ] **Green scale `#007117` to `#2fb41f`** — Confidence: ~85%. The four green steps were extracted from CSS variables. Verify these are the current values. Jetpack may also use additional greens (e.g., a very light green for backgrounds) not captured.

- [ ] **Body text size 18px** — Confidence: ~80%. Found 18px as the normal font size in CSS. Verify this is the actual rendered size for paragraph text on the main marketing pages.

- [ ] **Card border-radius `2.043625rem`** — Confidence: ~70%. This unusual value was found in the CSS. Verify if this specific radius is used on feature/pricing cards, or if it's been simplified to a rounder number.

- [ ] **Pill button `9999px` radius everywhere** — Confidence: ~80%. Buttons on the homepage use full-pill shape, but some interior pages (blog, docs) may use different button styles. Verify pill shape is consistent across the marketing site.

- [ ] **Spacing scale rem values** — Confidence: ~85%. The modular scale (0.44rem to 5.06rem) was extracted from CSS variables. These are WordPress presets and should be stable, but verify they're actually used on the marketing pages.

## Low Priority (minor details)

- [ ] **Gradient blob animations** — Confidence: ~75%. Documented as blurred gradient blobs in the background, disabled on mobile and reduced-motion. Verify the exact gradient colors and animation behavior on desktop.

- [ ] **Icon sizes 24px vs 28px** — Confidence: ~80%. Found both sizes in the CSS. Verify which contexts use 24px vs 28px icons.

- [ ] **Testimonial quote mark color** — Confidence: ~85%. Documented as `#069e08` (Green 40) for the large open-quote character. Verify on the live testimonials section.

- [ ] **Shadow system usage** — Confidence: ~75%. Documented the WordPress preset shadows (natural, deep, sharp, crisp) but Jetpack's live site appears mostly flat. Verify which elements, if any, actually use shadows.

## Preview File Notes

- **Logo**: Uses a simplified SVG approximation (green circle with triangular shapes). Needs replacement with the actual Jetpack logo mark.
- **Font**: Preview uses Inter from Google Fonts, which matches the live site.

## How to Review

1. Open jetpack.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
