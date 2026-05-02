# WordPress Design System MCP Run

This run has the WordPress Design System MCP enabled as `wpds`.

## Operational Rules

- Query the `wpds` MCP before choosing components, tokens, or package APIs.
- Prefer `@wordpress/ui` components when the MCP says a suitable component exists.
- Use WPDS custom properties (`--wpds-*`) for colors, spacing, type, radius, borders, and focus styling when working with WPDS surfaces.
- Do not import from `@wordpress/components`; use `@wordpress/ui` for this run.
- `@wordpress/theme` and `@wordpress/ui` are already installed for MCP-on WordPress.com runs.
- If you need WPDS token CSS, import `@wordpress/theme/design-tokens.css` from the target screen file.
- The local `DESIGN.md` still defines the WordPress.com brand direction. Use WPDS as implementation support, not as a replacement brand brief.
