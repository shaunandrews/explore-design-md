# Gravatar DESIGN.md -- Review Backlog

Items flagged for human review. **All values in this entry are based on AI training knowledge, NOT live site extraction.** WebFetch was unavailable during creation. Every item below should be verified against the live gravatar.com site.

## Critical Priority (ALL values from training knowledge -- verify everything)

- [ ] **Primary brand blue `#1A4FC2`** -- Confidence: ~40%. This hex was estimated from training knowledge of Gravatar's blue brand identity. The actual blue may differ significantly. Inspect the live site's primary button, link, and logo colors via DevTools to get the correct hex value.

- [ ] **Font family (Inter vs custom font)** -- Confidence: ~50%. DESIGN.md assumes Inter as the primary font. Gravatar may use a different typeface (e.g., a custom font, Noto Sans, Recoleta, or another Automattic-preferred font). Verify via DevTools `computed > font-family` on headings and body text.

- [ ] **Typography weights and sizes** -- Confidence: ~35%. All font sizes, weights, and line-heights are estimated. Gravatar has undergone design refreshes and the actual type scale may be quite different. Verify hero headline size, body text size, and heading weights on the live site.

- [ ] **Button border-radius (8px assumed)** -- Confidence: ~45%. The actual button radius could be anywhere from 4px to 9999px (pill). Gravatar has been trending toward more rounded UI. Verify via DevTools on primary CTA buttons.

- [ ] **Card border-radius (12px assumed)** -- Confidence: ~45%. Same concern as buttons. Verify on profile cards and feature cards on the live site.

- [ ] **Shadow values** -- Confidence: ~30%. All shadow values are generic estimates. Gravatar may use completely different shadow approaches (e.g., no shadows, colored shadows, or different opacity values). Verify via DevTools `box-shadow` on cards and elevated elements.

- [ ] **Dark mode colors** -- Confidence: ~30%. Dark surface colors (`#0F1419`, `#1C2433`, `#252F3F`) are estimates. Gravatar's dark mode (if it has one) may use completely different surface hierarchy. Verify by toggling dark mode on the live site and inspecting background colors.

- [ ] **Logo / wordmark SVG** -- Confidence: ~20%. The preview files use a placeholder SVG icon (circle with person silhouette). The actual Gravatar logo/wordmark should be extracted from the live site. Look for an SVG in the nav or footer.

## High Priority (likely architecture is correct, values need checking)

- [ ] **Color palette completeness** -- Confidence: ~50%. The neutral gray scale uses common Automattic/WordPress values (#101517, #50575E, #787C82, etc.) which may be correct if Gravatar shares the WP.com design token system, but individual hex values need verification.

- [ ] **Status colors (green, orange, red)** -- Confidence: ~55%. Standard Automattic palette values used (#00A32A, #DBA617, #CC1818). These are common across Automattic products but may have product-specific overrides.

- [ ] **Avatar component sizes** -- Confidence: ~60%. The avatar size scale (24, 32, 48, 64, 96, 128, 256px) follows Gravatar API conventions for `?s=` parameter, but the UI may use different display sizes internally.

- [ ] **Navigation height and structure** -- Confidence: ~50%. Nav height of 64px and horizontal layout are reasonable estimates. Verify actual nav structure, height, and behavior (sticky vs static, backdrop blur, border treatment).

- [ ] **Spacing system (8px base)** -- Confidence: ~60%. An 8px base grid is standard for modern design systems and likely correct in principle, but the exact scale steps need verification.

- [ ] **Border colors** -- Confidence: ~50%. Border values (#DCDCDE, #F0F0F0) are from the WordPress/Automattic shared palette. Verify if Gravatar uses these or has its own border tokens.

## Medium Priority (structural assumptions)

- [ ] **Max content width (1200px)** -- Confidence: ~55%. Common width for modern sites. Could be wider (1280px, 1440px) or narrower (1080px). Check via DevTools on a full-width desktop view.

- [ ] **Profile card layout** -- Confidence: ~60%. Centered avatar + name + bio + links is the expected Gravatar profile card pattern. The exact spacing, sizing, and arrangement need verification.

- [ ] **Responsive breakpoints** -- Confidence: ~40%. Breakpoints (600px, 1024px, 1280px) are generic estimates. Gravatar may use different breakpoints, especially if built with a specific CSS framework.

- [ ] **Dark mode blue adjustment `#4A8AFF`** -- Confidence: ~35%. The lighter blue used in dark mode preview is an estimated accessible-contrast alternative. Verify actual dark mode interactive color.

- [ ] **Input styling** -- Confidence: ~50%. Input border, radius, padding, and focus states are estimates based on common Automattic patterns. Verify on any forms (login, profile edit) on the live site.

## Low Priority (minor details)

- [ ] **Hover transitions** -- Confidence: ~60%. Transition durations (0.15s, 0.25s) and easing are standard. Verify if Gravatar uses different animation timing.

- [ ] **Focus ring style** -- Confidence: ~55%. Double-ring focus (`0 0 0 2px white, 0 0 0 4px blue`) is a common accessible pattern. Verify actual keyboard focus appearance.

- [ ] **Tag/badge padding and radius** -- Confidence: ~50%. Pill-shaped tags with 4px 12px padding are estimates. Verify on any tags visible on the live site.

## Preview File Notes

- **All values are from training knowledge**: Unlike other entries in this repository that were extracted from live sites, this entire Gravatar entry is based on AI training data. Every color, size, and spacing value should be treated as an approximation.
- **Logo**: Uses a placeholder SVG silhouette icon, NOT the actual Gravatar logo. Extract the real logo SVG from gravatar.com.
- **Font**: Uses Inter from Google Fonts. If Gravatar uses a different font, update both preview files and DESIGN.md.
- **Dark mode**: The preview-dark.html represents an estimated dark theme. Gravatar may not have a dark mode, or it may look very different.

## How to Review

1. Open gravatar.com in a browser
2. Use DevTools to inspect EVERY color, font, spacing, and shadow value
3. Compare extracted values against DESIGN.md and update all discrepancies
4. Extract the actual logo SVG and replace the placeholder in both preview files
5. Check if dark mode exists; if so, inspect those values too
6. Update preview.html and preview-dark.html with corrected values
7. Re-categorize backlog items based on what was actually correct vs wrong
8. Pay special attention to the primary brand blue -- this anchors everything else
