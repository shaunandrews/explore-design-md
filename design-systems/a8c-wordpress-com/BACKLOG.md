# WordPress.com DESIGN.md — Review Backlog

Items flagged for human review. Confidence level indicates how sure the AI extraction was.

## High Priority (needs verification against live site)

- [ ] **Recoleta as primary headline font** — Confidence: ~70%. Recoleta is loaded via `@font-face` and appears on the homepage hero, but the site loads 10+ font families (Inter, DM Sans, Poppins, Playfair Display, etc.). Need a human to confirm Recoleta is *the* headline font across all marketing pages, not just one hero variant. Some pages may use different fonts for A/B tests.

- [ ] **WordPress Blue `#3858e9` vs `#0675C4` (WordPress.org blue)** — Confidence: ~80%. The extracted blue is `#3858e9` from the marketing site CSS, but WordPress has historically used different blues across .com and .org properties. Verify this is the current canonical marketing blue and not a campaign-specific variant.

- [ ] **Hero font size 100px on desktop** — Confidence: ~75%. Extracted from CSS variable `--lp-font-size-huge-pp: 100px` at `min-width: 960px`, but different hero sections use different sizes (68px, 70px, 76px, 78px). The 100px value may only apply to the "done right" hero variant. Need to verify the *default* hero size.

- [ ] **Letter-spacing -3px on heroes** — Confidence: ~70%. Found `letter-spacing: -3px` on `#idea-to-website` element specifically. Not clear if this applies to all hero headings or just that one animated element. Other headings may use less aggressive tracking.

## Medium Priority (likely correct but worth checking)

- [ ] **Inter as body font** — Confidence: ~85%. Inter is loaded and used heavily, but the site also loads DM Sans, Poppins, and others. Some sections may use different body fonts. Verify Inter is dominant across the main marketing pages (homepage, pricing, features).

- [ ] **Gradient border technique on hosting CTA** — Confidence: ~85%. Extracted the `linear-gradient(90deg, #3858e9 0%, #069e08 100%) border-box` pattern. Verify this is still the current implementation and hasn't been simplified.

- [ ] **Frosted glass navigation `blur(60px)`** — Confidence: ~80%. Found at the `min-width: 768px` breakpoint with `.has-transparent-border` class. Verify this applies to the primary navigation on all pages, not just specific landing pages.

- [ ] **`#873EFF` purple for premium contexts** — Confidence: ~75%. Found in an SVG fill (`.st0 { fill: #873EFF; }`). May be specific to one icon or badge, not a system-wide accent color. Verify its actual usage scope.

## Low Priority (minor details)

- [ ] **Spacing scale values** — Confidence: ~90%. Extracted directly from `--wp--preset--spacing--*` CSS variables. These are WordPress core presets and should be stable, but verify they're actually used on the marketing site (vs. just defined).

- [ ] **Chip backdrop-filter: blur(10px)** — Confidence: ~85%. Found on `.is-quick-suggestion button`. Verify the blur value and that this effect is visible (some browsers may not render it).

- [ ] **Shadow values precision** — Confidence: ~90%. The `rgba(30, 45, 255, 0.2)` hover shadow was extracted from CSS. Verify the exact values haven't changed in recent deploys.

- [ ] **Logo URL** — Confidence: ~80%. `https://s1.wp.com/home.logged-out/images/wpcom-logo.png` was found in schema.org markup. The actual nav logo may be an SVG loaded via JS. Verify the correct asset URL for the wordmark.

## How to Review

1. Open wordpress.com in a browser
2. Use DevTools to inspect the elements mentioned above
3. Check the item off and note any corrections needed
4. Update the DESIGN.md with corrected values
5. Update preview.html / preview-dark.html if visual tokens change
