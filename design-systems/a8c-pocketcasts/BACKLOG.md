# Pocket Casts DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **DM Sans as the sole typeface** — Confidence: ~75%. DESIGN.md states DM Sans is used across the entire site. Verify via DevTools that no secondary typeface (e.g., a system font fallback or a different Google Font) is used for body text or UI elements on pocketcasts.com.

- [ ] **Primary red `#F43E37` exact value** — Confidence: ~80%. The red may have slight variation across the site (logo vs. CTAs vs. hover states). Verify the exact hex used for the primary CTA button and the logo icon on the live site.

- [ ] **Hero heading size 56px on desktop** — Confidence: ~70%. The homepage hero may use a different size or a `clamp()` value for fluid scaling. Verify the actual rendered font-size at 1440px viewport width.

- [ ] **Dark-theme-first surface colors** — Confidence: ~75%. DESIGN.md documents `#121212`, `#1A1A1A`, `#222222`, `#2A2A2A` as the dark surface scale. Verify these are the actual values used in the dark sections of the marketing site and not slightly different shades.

## Medium Priority (likely correct but worth checking)

- [ ] **Button padding and radius values** — Confidence: ~85%. Documented as 12px 24px padding and 8px radius for primary buttons. Verify exact values via DevTools on the "Start Listening" CTA.

- [ ] **Plus Gold `#FFD740` usage** — Confidence: ~70%. Found as the Pocket Casts Plus premium accent color. Verify where this gold appears on the live site -- it may be limited to the Plus subscription page or used more broadly.

- [ ] **Navigation height 64px** — Confidence: ~80%. Verify the actual sticky navigation height on desktop. May include or exclude border.

- [ ] **Card shadow values** — Confidence: ~80%. Documented resting shadow as `0px 2px 8px rgba(0,0,0,0.08)` and hover as `0px 4px 16px rgba(0,0,0,0.12)`. Verify these on feature cards or content cards on light backgrounds.

- [ ] **Border color `#E5E5E5`** — Confidence: ~85%. Standard light border color. May vary slightly across different sections or components.

## Low Priority (minor details)

- [ ] **Spacing scale base unit** — Confidence: ~90%. 8px base unit with documented scale. These are standard design tokens and should be stable.

- [ ] **App screenshot border-radius 16px** — Confidence: ~85%. Documented for app screenshots and device frames. Verify on hero product images.

- [ ] **Footer background `#121212`** — Confidence: ~85%. Verify the exact footer background color. May be `#1A1A1A` or another near-black value.

- [ ] **Podcast Blue `#3D7FFF` usage** — Confidence: ~65%. Listed as an occasional accent for links or informational elements. Verify if this color actually appears on the marketing site or is product-UI only.

## Preview File Notes

- **Font**: Preview files use DM Sans from Google Fonts (free, no license issues).
- **Logo**: Uses a simplified SVG approximation of the Pocket Casts icon. The actual logo should be sourced from official brand assets.
- **Dark mode**: The preview-dark.html uses the documented dark surface scale (`#121212` -> `#1A1A1A` -> `#222222` -> `#2A2A2A`) with color-step elevation rather than shadows, matching the DESIGN.md philosophy.

## How to Review

1. Open pocketcasts.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
