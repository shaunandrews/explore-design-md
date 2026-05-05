# WordPress Design System MCP Run

This run has the WordPress Design System MCP enabled as `wpds`.

## Operational Rules

- Treat the local `DESIGN.md` as the open-source WordPress admin/block-editor design brief, not WordPress.com marketing.
- Query the `wpds` MCP before choosing components, tokens, or package APIs.
- Prefer `@wordpress/ui` components when the MCP says a suitable component exists.
- Use `@wordpress/dataviews` for list, table, grid, and collection-management screens when it fits the task.
- Use `@wordpress/components` to fill gaps when `@wordpress/ui` does not provide a needed control or pattern.
- Use WPDS custom properties (`--wpds-*`) for colors, spacing, type, radius, borders, and focus styling when working with WPDS surfaces.
- Do not import from `@wordpress/components` as the first choice; treat it as the compatibility/gap-fill layer.
- `@wordpress/theme`, `@wordpress/ui`, `@wordpress/components`, `@wordpress/dataviews`, and `@wordpress/icons` are already installed for MCP-on WordPress runs.
- If you need WPDS token CSS, import `@wordpress/theme/design-tokens.css` from the target screen file.
