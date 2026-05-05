# WordPress Design System (WPDS) — required usage

This run has the WordPress Design System MCP attached as `wpds`. The packages `@wordpress/theme`, `@wordpress/ui`, `@wordpress/components`, `@wordpress/dataviews`, and `@wordpress/icons` are already installed.

## You must use these packages

- **Tokens:** Import `@wordpress/theme/design-tokens.css` once at the top of the screen file. Use the WPDS CSS custom properties for spacing, color, radius, and typography. When `DESIGN.md` brand colors should override neutrals, set them on a wrapping element via `--wp-admin-theme-color` and the relevant `--wp-*` variables — do not hand-write hex values when a token exists.
- **Components:** Use `@wordpress/ui` as the primary component library for buttons, form controls, cards, panels, modals, notices, toggles, checkboxes, inputs, selects, tabs, and any standard primitive.
- **Tables / lists / collections:** Use `@wordpress/dataviews` for any tabular, list, or grid view. Do not hand-roll an HTML table when DataViews fits.
- **Icons:** Use `@wordpress/icons`. Do not paste inline SVGs for stock icons.
- **Gap-fill:** When `@wordpress/ui` does not provide a needed control, use `@wordpress/components` as the gap-fill. Hand-roll only what neither library covers (custom charts, sparklines, brand-specific marketing surfaces).

## Workflow

1. Query the `wpds` MCP first to discover the right component and its API for each piece of the screen.
2. Compose the layout from those components.
3. Apply `DESIGN.md` brand expression (color, density, header treatment) on top of WPDS components, not as a replacement for them.

## Do not

- Do not hand-roll a `<button>`, `<input>`, `<table>`, `<dialog>`, or checkbox/toggle when WPDS provides one.
- Do not hard-code hex colors when a WPDS or DESIGN.md token covers the role.
- Do not skip `@wordpress/theme/design-tokens.css`.
- Do not justify hand-rolling by citing brand-scope language in `DESIGN.md`. WPDS usage is required for this run regardless of the brand the screen represents.
