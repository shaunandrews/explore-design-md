# Automattic Design — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Knockout usage locations** — Confidence: ~50%. The user confirmed Knockout is used in the hamburger menu overlay and on page headers (About Us, Blog), but my scraper could not extract the specific CSS selectors or elements. Need to inspect with DevTools and document: which elements have `.has-knockout-font-family`, what size/weight is applied, and whether it's used on the homepage or only subpages.

- [ ] **Knockout font sizes and weights in context** — Confidence: ~40%. I documented Knockout as weight 600 based on the `@font-face` declaration, but the actual rendered sizes for menu overlay and page headers are unknown. Need DevTools inspection to capture exact `font-size`, `line-height`, and `letter-spacing` values where Knockout is applied.

- [ ] **Source Serif 4 vs Knockout hierarchy** — Confidence: ~60%. The DESIGN.md describes Source Serif 4 as the primary heading font and Knockout as display/impact. In practice, Knockout may be used more broadly than documented. Verify which headings use Source Serif 4 vs Knockout across all pages (homepage, About Us, Blog, Snaps).

- [ ] **Display 1 and Display 2 sizes in practice** — Confidence: ~70%. The CSS defines Display 1 at clamp(120px→218px) and Display 2 at clamp(80px→180px), but it's unclear which page elements actually use these massive sizes. Need to identify the specific content that renders at 218px.

## Medium Priority (likely correct but worth checking)

- [ ] **Button blue at 80% opacity (`#0387ffcc`)** — Confidence: ~85%. Extracted from CSS custom property `--wp--preset--color--medium-blue-80`. Verify this is actually visible as translucent on the live site (could be layered on white, making the opacity invisible).

- [ ] **Post link hover image dimensions (280×187px)** — Confidence: ~85%. Extracted from `.designblog-post-link-wrapper__hover-image` CSS. Verify these dimensions and the 3:2 aspect ratio are correct on the blog page.

- [ ] **Marquee animation speed (20s)** — Confidence: ~80%. Extracted `animation: marquee-scroll 20s linear infinite`. Verify the timing feels right and whether it changes on different pages.

- [ ] **Tag pill styling** — Confidence: ~85%. Extracted `#dcdcde` background, 2px radius, 4px 8px padding. Verify these values match the rendered tags on the blog.

## Low Priority (minor details)

- [ ] **Shadow presets** — Confidence: ~90%. The shadow values (natural, deep, sharp, crisp, outlined) are defined in CSS but appear unused on the live site. Confirm they're truly decorative/unused and not applied via JS or specific page templates.

- [ ] **Logo SVG URL** — Confidence: ~75%. Found `https://automattic.design/wp-content/uploads/2025/06/automattic-logo.svg`. Verify this URL is current and the SVG renders the correct wordmark.

- [ ] **Active blue on button press (`#0074de`)** — Confidence: ~80%. Extracted from `:active` pseudo-class. Hard to verify visually — test with click-and-hold on buttons.

- [ ] **Knockout 49 variant** — Confidence: ~50%. The CSS defines `--wp--preset--font-family--knockout-49: 'Knockout 49'` as a separate preset. Unclear if this is a different weight/width of Knockout or an unused variable. Need to check if any elements use `.has-knockout-49-font-family`.

## How to Review

1. Open automattic.design in a browser (also check /about-us/ and /blog/)
2. Use DevTools to inspect elements — especially the mobile hamburger menu overlay
3. Search for `has-knockout-font-family` in the DOM
4. Check the item off and note any corrections needed
5. Update the DESIGN.md with corrected values
6. Update preview.html / preview-dark.html if visual tokens change
