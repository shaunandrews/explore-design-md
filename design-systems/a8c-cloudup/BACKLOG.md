# Cloudup DESIGN.md — Verification Backlog

> Regenerated 2026-04-07 from the live site via Chrome headless DOM extraction. The previous DESIGN.md was based on an old teal design that no longer exists — the site has been fully redesigned with a salmon/lime/blue color-blocked WordPress layout.

## High Priority

- [ ] **Max content width** — Confidence: 60%. The WordPress block layout max-width is likely ~1200px but not confirmed. DevTools → select a content container → check `max-width` in computed styles.

- [ ] **Button hover states** — Confidence: 40%. Need hover/active styles on the black primary CTA and salmon secondary CTA. DevTools → inspect `.newsletter-form-button` → toggle `:hover` state → note changes.

- [ ] **Nav "Sign in" button sizing** — Confidence: 50%. Exact padding, font-size, and height of the nav sign-in button (smaller than hero CTAs). DevTools → inspect `.wp-element-button` in header.

## Medium Priority

- [ ] **Feature card icon implementation** — Confidence: 55%. The heading icons (stream, asterisk, clock, star, check, lock) — are they `::before` pseudo-elements, SVGs, or icon font? DevTools → inspect `.is-style-icon` headings.

- [ ] **Pricing section slider** — Confidence: 45%. The pricing section appears to have a storage slider. Need exact component structure and styles. DevTools → inspect the pricing area below the blue band.

- [ ] **Footer link structure** — Confidence: 70%. Exact footer layout — columns, link groups, spacing. DevTools → inspect footer `.links-wrap` → verify grid/flex structure and gap values.

## Low Priority

- [ ] **Cookie banner styles** — Confidence: 80%. Standard A8C cookie banner. Confirm it matches the new color scheme or uses standard A8C banner.

- [ ] **Mobile nav behavior** — Confidence: 50%. Whether nav collapses to hamburger or simplifies on mobile. Resize browser to 375px → observe nav changes.

- [ ] **WordPress gradient presets usage** — Confidence: 30%. CSS contains gradient presets (gradient-1 through gradient-12) — unclear if any are used on the landing page. Search DOM for classes containing `gradient`.

## How to Review

1. Open cloudup.com in a browser
2. Use DevTools to inspect elements mentioned above
3. Check items off and note corrections needed
4. Update DESIGN.md with corrected values
5. Update both preview.html and preview-dark.html if visual tokens change
