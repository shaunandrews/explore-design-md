# WordPress Design System MCP Profile

This run has the WordPress Design System MCP enabled as `wpds`.

## Operational Rules

- Query the `wpds` MCP before choosing components, tokens, or package APIs.
- Treat the local `DESIGN.md` as the brand and visual direction, even if it is not WordPress.com.
- Use WPDS as implementation support: component APIs, available primitives, accessibility behavior, and token mechanics.
- Prefer `@wordpress/ui` components when the MCP says a suitable component exists.
- Use `@wordpress/dataviews` for list, table, grid, and collection-management screens when it fits the task.
- Use `@wordpress/components` to fill gaps when `@wordpress/ui` does not provide a needed control or pattern.
- Do not import from `@wordpress/components` as the first choice; treat it as the compatibility/gap-fill layer.
- `@wordpress/theme`, `@wordpress/ui`, `@wordpress/components`, `@wordpress/dataviews`, and `@wordpress/icons` are already installed for this run.
- If you need WPDS token CSS, import `@wordpress/theme/design-tokens.css` from the target screen file.
- If the DESIGN.md and WPDS disagree on visual styling, follow DESIGN.md for brand expression and use WPDS for behavior and component structure.
