# Parse.ly DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Verlag as the display typeface** — Confidence: ~60%. DESIGN.md names Verlag (Hoefler&Co) as the heading font with Rubik as the fallback. Verify via DevTools whether the live site actually loads Verlag or uses a different commercial/free typeface for headlines. The font stack may have changed.

- [ ] **Primary teal `#2cb67d` exact value** — Confidence: ~75%. This is documented as the singular brand accent. Verify the exact hex used for the primary CTA button ("Get a Demo") and other teal elements on parse.ly. The value may have shifted in recent redesigns.

- [ ] **Deep navy `#0a1628` for headings** — Confidence: ~80%. Documented as the primary heading color and dark section background. Verify this is the actual value and not a close variant like `#0d1b2a` or `#111827`.

- [ ] **Hero heading size 56px on desktop** — Confidence: ~70%. The homepage hero may use a different size or fluid typography. Verify the actual rendered font-size at 1440px viewport width.

## Medium Priority (likely correct but worth checking)

- [ ] **System font stack for body text** — Confidence: ~85%. DESIGN.md says body uses the system font stack without a custom typeface. Verify no custom font is loaded for body copy on the live site.

- [ ] **CTA button shadow `0 2px 4px rgba(44,182,125,0.3)`** — Confidence: ~75%. The teal-tinted button shadow is a distinctive detail. Verify this glow effect exists on the primary CTA and check exact values.

- [ ] **Navy surface scale completeness** — Confidence: ~80%. Four navy steps documented: `#0a1628`, `#0f2137`, `#162d4a`, `#1e3a5f`. Verify these are the actual values used in dark sections and whether additional steps exist.

- [ ] **Card shadow dual-layer formula** — Confidence: ~80%. Documented resting shadow as `0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04)`. Verify these exact values on feature/content cards.

- [ ] **Navigation height ~72px** — Confidence: ~75%. Verify the actual sticky navigation height on desktop. May differ slightly.

- [ ] **Link color `#2b7de9`** — Confidence: ~70%. Documented as the text link color on light backgrounds. Verify this is used for inline links and not the teal accent.

## Low Priority (minor details)

- [ ] **Spacing scale values** — Confidence: ~90%. 8px base unit with standard scale. These are common design tokens and should be stable.

- [ ] **Border-radius 12px for cards** — Confidence: ~85%. Verify the dominant card border-radius on the live site. May be 8px or 16px on certain card types.

- [ ] **Teal Pale `#e6f9f0` badge background** — Confidence: ~80%. Used for category tags and icon backgrounds. Verify this specific tint is used.

- [ ] **Data visualization colors (purple `#7b68ee`, coral `#ff6b6b`, amber `#f5a623`)** — Confidence: ~70%. These may be product-UI colors only and not visible on the marketing site. Verify scope of usage.

- [ ] **Logo cloud grayscale treatment** — Confidence: ~80%. Documented as `filter: grayscale(100%); opacity: 0.5` with hover to full color. Verify if the partner logo section still uses this pattern.

## Preview File Notes

- **Font substitution**: Preview files use **Rubik** from Google Fonts as a stand-in for Verlag (commercial, requires Hoefler&Co license). Both are geometric sans-serifs with a similar rounded character. If you have a Hoefler&Co license, replace the Google Fonts import with the proper webfont link.
- **Body text**: Uses the system font stack as documented -- no custom font loaded for body copy.
- **Logo**: Uses the Parse.ly wordmark in teal. The actual logo SVG should be sourced from official brand assets.

## How to Review

1. Open parse.ly in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
