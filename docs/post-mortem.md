# explore-design-md — Post-mortem

**Status:** abandoned, May 2026.
**Goal as stated:** controlled comparison showing how `DESIGN.md` and MCP availability affect AI-generated UI quality, for the design-systems-with-AI talk.
**Outcome:** the harness works. The findings are real but unflattering. The output is not good enough to put on stage.

## What got built

- A matrix harness that spins up isolated Vite + React workspaces for any combination of screen × design-system pack × MCP profile × agent (Claude or Codex), runs the agent, screenshots the result, and writes a flat `by-design/` folder + a contact sheet for review.
- Twenty design-system packs (`design-systems/*`), most imported from the public a8c collection, plus `wordpress`, `airbnb`, `claude`, `flawed-stale`, `baseline-empty`, etc.
- A WPDS MCP profile that layers the WordPress Design System MCP and `@wordpress/{theme,ui,components,dataviews,icons}` on top of any pack.
- Five screen prompts: analytics dashboard, onboarding flow, settings panel, sites list, domains list.
- Helpers: render-references (HTML preview → PNG), contact-sheet, viewer.

The mechanical parts are solid. The harness ran ~25 jetpack runs across the iteration cycle with reliable workspace isolation, screenshot capture, and manifest tracking.

## What we tried, in order

1. **Baseline run** (claude + a8c-jetpack + WPDS profile, one screen). Agent hand-rolled `<button>`, `<input type=checkbox>`, and HTML tables — ignored the WPDS MCP entirely. Produced functional but uniform output.
2. **Tightened the WPDS profile addendum and base AGENTS.md** to be imperative ("use these packages") and dropped the "if MCP and DESIGN.md conflict, prefer DESIGN.md" loophole. Re-ran. Agent now imported `@wordpress/dataviews`, `@wordpress/components`, `@wordpress/icons`, `@wordpress/theme/design-tokens.css`. Real behavioral shift.
3. **Ran all 5 screens.** Components correct. Visually bland and generic. Settings panel layout broke into five narrow side-by-side columns.
4. **Rewrote screen prompts** (Purpose / Audience / IA / Density / Layout) and **added a "Layout patterns" section to DESIGN.md** with multiple options per surface type. Re-ran. Layouts fixed. Screens still felt like default WP-Admin with green accents.
5. **Added `research/`** containing rendered `preview.png` / `preview-dark.png` from the pack's existing preview HTML, plus an evocative `design-direction.md` naming signature moves ("cut link," "ALL-CAPS eyebrow micro-label," "off-white page bg," "paired-icon status pill"). Re-ran. **Dramatic visual jump** — cut links, eyebrows, paired status, brand-green confidence bars all appeared.
6. **Removed `design-direction.md`** because it duplicated DESIGN.md's role and was a file invented without being asked for. Re-ran with only DESIGN.md + research images. Back to step-4 baseline. The signature moves were coming from the direction file, not from DESIGN.md or the images.

## Findings worth keeping for the talk

1. **DESIGN.md alone produces structurally-correct, visually-bland output.** Tokens applied to default WPDS components look like default WPDS. Restraint described in text does not translate to visible craft. This is the most important finding and probably the most honest answer to the talk's premise.
2. **MCP usage requires imperative instructions.** Soft framing ("prefer X when available") gets ignored. Naming concrete components and forbidding hand-rolled equivalents is what changes behavior.
3. **Multiple instruction layers create authority confusion.** When `AGENTS.md`, `DESIGN.md`, profile addendums, and the screen prompt all describe overlapping rules with different framings, the agent picks the most permissive interpretation and rationalizes ignoring the rest.
4. **Visual references unlock visual identity — but only when paired with *named* visual moves.** Just dropping images in `research/` was not enough. The combination of (image + named pattern + concrete spec) is what produced the visual jump in run 5.
5. **Restrained brands produce generic-looking output.** Jetpack's brand identity is "calm, capable, restrained editorial WordPress admin." The successful AI output for that brand is, by definition, calm and restrained — which reads as bland. A visually-distinctive brand (Tumblr, Pocket Casts, Beeper) would have been a more telling test of `DESIGN.md`'s isolated effect.

## Why we stopped

- **Iteration loop is too slow.** Each idea required a full matrix re-run (5 screens × concurrency 3 ≈ 5–10 minutes wall time + several minutes of screenshotting + visual review). Tightening prompts and `DESIGN.md` is fundamentally prompt engineering, and the feedback loop was too long to iterate productively.
- **Cost.** Hit the API balance mid-iteration once. Each matrix run is non-trivial Opus tokens. Hard to justify continuing without a clear path to better output.
- **The remaining gap is not a `DESIGN.md` problem.** Once tokens, components, and layout patterns are correctly applied, the missing piece is *visual craft* — typographic confidence, layout asymmetry, intentional empty/zero states, opinionated chart styling. Those don't belong in `DESIGN.md`. They're a separate prompting problem (a "polish pass" stage) or a model-capability problem.
- **For a talk, "screens look mostly the same as defaults" is a finding, not a demo.** The screens we generated are not good enough to put on stage as evidence that `DESIGN.md` works — and that's the actual point.

## What would have helped, if we picked this up again

- **Validate on a visually-distinctive brand first.** Run Tumblr, Pocket Casts, or Claude before Jetpack. If those screens look unmistakably on-brand and Jetpack still looks generic, the finding becomes "`DESIGN.md` unlocks brand identity when there is one to unlock," which is a stronger and more honest story.
- **Cut instruction layers ruthlessly.** AGENTS.md + DESIGN.md + WPDS addendum + screen prompt overlap is a confound. Probably one short brief plus DESIGN.md plus visual references. Trust the agent more once the libraries are wired.
- **Add a polish-pass stage to the harness.** A second agent invocation that takes the structural draft and is told only "this looks like default WP-Admin, make it feel custom-designed." This is what designers actually do; the harness should mirror that.
- **Faster feedback loop.** Single-screen iteration during prompt-tuning, full matrix only once for the final comparison.
- **Hold prompt structure constant across cells.** Ours varied by MCP state and addendum availability, which entangled the variables under test.

## What's worth salvaging

- The harness itself, especially: workspace isolation, the WPDS MCP profile, the contact-sheet generator, the `--trials` nonce, the `.env`-based key loading, the desktop screenshot pipeline.
- The 20-pack design-system collection.
- The five screen prompts (rewritten in iteration 4 — they're better than where we started).
- The Layout Patterns section now in `a8c-jetpack/DESIGN.md`.
- The findings above, which are publishable as-is even without a polished demo.

## Lessons

- A controlled-comparison harness is easy to build and easy to keep busy; producing screenshots that *look good* is the actual hard problem.
- "Add another instruction file" is almost never the right move when output is bland. The right move is usually "cut, simplify, and trust the model more."
- A finding that the experiment didn't produce the visual you hoped for is still a finding. The talk doesn't need a hero screenshot; it needs an honest account of what does and doesn't work.
