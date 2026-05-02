# Newspack DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

Data was extracted from newspack.com via WebFetch on 2026-04-06. Some values were confirmed from the live site CSS; others are inferred from training knowledge and the WebFetch extraction.

## High Priority (needs verification against live site)

- [ ] **American Grotesk Compressed exact font weights** — Confidence: ~75%. DESIGN.md says 900 for display headlines based on WebFetch extraction. Verify via DevTools that h1 elements actually use weight 900 (not 800 or 700). Also confirm the font is self-hosted or loaded via a CDN.

- [ ] **American Grotesk vs American Grotesk Compressed boundary** — Confidence: ~70%. WebFetch showed h1 uses "American Grotesk Compressed" (900) and h2-h5 use "American Grotesk" (500). Verify which exact heading levels use which font variant, and whether any body-large text uses American Grotesk.

- [ ] **Primary blue `#003da5` usage scope** — Confidence: ~80%. Extracted as `custom-primary-600` from CSS variables. Verify this is the actual rendered CTA button color on the homepage hero and whether any pages use a different primary color.

- [ ] **Button hover state `color-mix()` support** — Confidence: ~70%. WebFetch showed hover uses `color-mix(in srgb, var(--wp--preset--color--accent) 80%, black)`. Verify this actually renders correctly and whether there's a fallback for older browsers.

- [ ] **Fraunces serif font usage** — Confidence: ~50%. Found "Fraunces" in the CSS but unclear where it's actually used on the live site. May be for specific editorial pages, blockquotes, or decorative elements. Verify scope of usage.

## Medium Priority (likely correct but worth checking)

- [ ] **Blue scale completeness** — Confidence: ~80%. Four steps extracted (`#003da5`, `#2055b0`, `#406ebc`, `#6086c7`). There may be additional lighter/darker variants in the full CSS. Check for `custom-primary-100` through `custom-primary-900` tokens.

- [ ] **Green accent `#26d07c` usage** — Confidence: ~75%. Found as `accent-3` token. Verify where this is actually used — success states, secondary CTA, or decorative elements.

- [ ] **Border radius `0.375rem` as primary** — Confidence: ~80%. Extracted `--wp--custom--border--radius-medium` as `0.375rem`. Verify this is the dominant radius for buttons and cards on the live site.

- [ ] **Content max-width 800px vs 1216px** — Confidence: ~85%. Extracted from layout CSS. Verify 800px is article/content width and 1216px is the outer container width.

- [ ] **Navigation font weight 600** — Confidence: ~75%. WebFetch showed Inter at 600 weight for nav links. Verify via DevTools on the live site navigation.

- [ ] **Shadow value `0 2px 20px #00000014`** — Confidence: ~75%. Extracted as `elevation-2` shadow. Verify this is the actual card shadow used, and whether there are additional elevation levels in the full CSS.

## Low Priority (minor details)

- [ ] **WordPress spacing token `clamp()` values** — Confidence: ~85%. Extracted from `--wp--preset--spacing--*` CSS variables. These are WordPress-native and should be stable, but responsive clamp values at spacing-60/70/80 should be verified.

- [ ] **Dark mode existence** — Confidence: ~40%. The preview-dark.html is a projection — Newspack's marketing site may not have an official dark mode. The dark palette in the preview file is extrapolated, not extracted. Verify if newspack.com supports `prefers-color-scheme: dark`.

- [ ] **Tagline "The platform for news"** — Confidence: ~90%. Extracted from the homepage. Verify this is the current tagline and hasn't been updated.

- [ ] **Three-column product grid** — Confidence: ~85%. WebFetch showed Publishing, Audience Management, Advertising as the three product pillars. Verify this structure on the current homepage.

## Preview File Notes

- **Font substitution**: Preview files use **Oswald** from Google Fonts as a stand-in for American Grotesk Compressed (commercial font, likely requires a license or is self-hosted by Newspack). The actual site loads `American Grotesk Compressed` and `American Grotesk`. If you have access to the font files, replace the Google Fonts import with the proper font-face declarations.
- **Dark mode**: The `preview-dark.html` is a projected dark theme extrapolation. Newspack may not have an official dark mode on their marketing site. The dark palette uses standard dark-mode conventions (elevated surfaces, reduced contrast text) adapted to Newspack's blue brand color.
- **Logo**: The preview uses a text-based logotype ("NEWSPACK" in the display font) rather than an SVG logo. Extract the actual logo SVG from newspack.com if needed.

## How to Review

1. Open newspack.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
