---
version: alpha
name: WordPress Admin
description: WordPress wp-admin and block-editor admin chrome design system for AI coding agents. Use these tokens and guidelines when generating WordPress admin screens, plugin settings pages, network admin pages, dashboard widgets, list tables, media/admin flows, notices, metaboxes, block editor sidebars, editor toolbars, inspector panels, SlotFill UI, and other WordPress back-office surfaces that should feel native to WordPress core. This file intentionally excludes front-end theme styling and theme.json-driven presentation.
colors:
  primary: "#3858E9"
  primary-darker-10: "#2145E6"
  primary-darker-20: "#183AD6"
  admin-theme-fallback: "#3858E9"
  link: "#2271B1"
  link-hover: "#135E96"
  link-focus-dark: "#043959"
  text-primary: "#1E1E1E"
  text-heading: "#1D2327"
  text-body: "#3C434A"
  text-secondary: "#50575E"
  text-muted: "#646970"
  text-tertiary: "#757575"
  text-disabled: "#A7AAAD"
  background-page: "#F0F0F1"
  background-surface: "#FFFFFF"
  background-subtle: "#F6F7F7"
  background-selected: "#F0F6FC"
  background-warning-row: "#FCF9E8"
  background-disabled: "#F6F7F7"
  border-strong: "#8C8F94"
  border: "#C3C4C7"
  border-subtle: "#DCDCDE"
  border-input: "#8C8F94"
  focus: "#3858E9"
  focus-light: "#DCDCDE"
  success: "#008A20"
  success-alt: "#00A32A"
  success-background: "#EDFAEF"
  warning: "#996800"
  warning-alt: "#DAB000"
  warning-background: "#FCF9E8"
  error: "#D63638"
  error-dark: "#B32D2E"
  error-background: "#FCF0F1"
  info: "#72AEE6"
  info-background: "#F0F6FC"
  notification: "#D63638"
  destructive: "#B32D2E"
  editor-canvas: "#FFFFFF"
  editor-chrome: "#FFFFFF"
  editor-sidebar: "#FFFFFF"
  editor-sidebar-border: "#E0E0E0"
  editor-toolbar-border: "#1E1E1E"
  editor-selected-block: "#3858E9"
  editor-inserter-hover: "#F0F0F0"
  synced-pattern: "#7A00DF"
typography:
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  body-large:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  page-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 23px
    fontWeight: 400
    lineHeight: 1.3
  section-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
  panel-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  table-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 2.15384615
  editor-control:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  editor-label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "Consolas, Monaco, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  xs: 1px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  admin-gutter: 20px
  table-cell-x: 10px
  table-cell-y: 8px
  editor-sidebar-width: 280px
  admin-menu-width: 160px
  admin-menu-folded-width: 36px
components:
  admin-page:
    backgroundColor: "{colors.background-page}"
    textColor: "{colors.text-body}"
    typography: "{typography.body}"
    padding: "20px"
  admin-surface:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.none}"
    padding: "16px"
    borderColor: "{colors.border}"
  admin-card:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: "16px"
    borderColor: "{colors.border-subtle}"
  metabox:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.none}"
    padding: "12px"
    borderColor: "{colors.border}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
    borderColor: "{colors.primary}"
  button-primary-hover:
    backgroundColor: "{colors.primary-darker-10}"
    textColor: "{colors.background-surface}"
    borderColor: "{colors.primary-darker-10}"
  button-primary-modern:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "40px"
    borderColor: "{colors.primary}"
  button-secondary:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.link}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "32px"
    borderColor: "{colors.link}"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.link}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
  button-destructive:
    backgroundColor: "transparent"
    textColor: "{colors.destructive}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "6px 8px"
  input:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0 8px"
    height: "32px"
    borderColor: "{colors.border-input}"
  input-modern:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0 8px"
    height: "40px"
    borderColor: "{colors.border-input}"
  list-table:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
    borderColor: "{colors.border}"
  notice-info:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    padding: "8px 12px"
    borderColor: "{colors.info}"
  notice-success:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    padding: "8px 12px"
    borderColor: "{colors.success-alt}"
  notice-warning:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    padding: "8px 12px"
    borderColor: "{colors.warning-alt}"
  notice-error:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    padding: "8px 12px"
    borderColor: "{colors.error}"
  editor-top-toolbar:
    backgroundColor: "{colors.editor-chrome}"
    textColor: "{colors.text-primary}"
    height: "60px"
    borderColor: "{colors.editor-sidebar-border}"
  editor-sidebar-panel:
    backgroundColor: "{colors.editor-sidebar}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "16px"
    borderColor: "{colors.editor-sidebar-border}"
  editor-block-toolbar:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0"
    borderColor: "{colors.editor-toolbar-border}"
  editor-selected-block:
    backgroundColor: "{colors.editor-canvas}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.editor-selected-block}"
  popover:
    backgroundColor: "{colors.background-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "8px"
    borderColor: "{colors.border-subtle}"
---

# WordPress Admin Design System

## Overview

WordPress admin UI is a dense, utilitarian, accessible, backwards-compatible product environment. It should feel calm, editorial, and native to WordPress rather than like a bespoke SaaS dashboard. The default posture is compact neutral surfaces, clear hierarchy, visible focus states, blue interaction color, conservative status color, and predictable controls.

This document covers WordPress admin areas only:

- Classic `wp-admin` screens: Dashboard, Posts, Pages, Media, Comments, Appearance, Plugins, Users, Tools, Settings, Network Admin, and plugin-defined admin pages.
- Admin framework surfaces: `.wrap` pages, metaboxes, list tables, screen options, help tabs, admin notices, modals, media frames, cards, widgets, forms, and settings sections.
- Block editor admin UI: editor chrome, top toolbar, block toolbar, inserter, list view, inspector/sidebar panels, publishing panels, SlotFills, popovers, notices, and reusable `@wordpress/components` UI used in admin contexts.

This document explicitly excludes front-end theme styling. Do not use it to prescribe site typography, block content appearance on the front end, `theme.json` palettes, global styles, or theme-controlled layout. In the editor, this file governs the admin interface around editing, not the visitor-facing design of the content being edited.

When implementing CSS, prefer WordPress admin CSS variables such as `--wp-admin-theme-color`, `--wp-admin-theme-color-darker-10`, `--wp-admin-theme-color-darker-20`, `--wp-admin-border-width-focus`, and `--wp-components-color-accent` where available. The hex values in this file are normative fallbacks and defaults for agents, not a reason to override a user's admin color scheme.

## Colors

Use neutral grays for structure and content. Use WordPress blue for links, focus, selected states, and primary actions. Use semantic colors only for status communication. Do not introduce unrelated brand colors into admin UI.

### Core color roles

- **Primary (#3858E9):** modern WordPress admin theme color for focus, selected UI, and primary component contexts. Prefer `var(--wp-admin-theme-color, #3858e9)` in CSS.
- **Link (#2271B1):** default admin link and secondary action color. Hover states darken to #135E96.
- **Text:** use #1E1E1E or #1D2327 for strong text and headings, #3C434A for body copy, #50575E/#646970 for secondary copy and metadata, and #A7AAAD for disabled text.
- **Surfaces:** use #F0F0F1 for the admin page background, #FFFFFF for panels/tables/cards, and #F6F7F7 for subtle grouped areas, panel footers, disabled controls, and table context.
- **Borders:** use #C3C4C7 for classic admin containers and #DCDCDE/#E0E0E0 for softer dividers in modern component/editor contexts.
- **Focus:** use the active admin theme color and visible outline/box-shadow. Never remove focus without an accessible replacement.

### Status color roles

- **Success:** green, for completed actions and healthy states.
- **Warning:** yellow/brown, for cautionary states that do not block progress.
- **Error/destructive:** red, for failed actions, invalid states, and destructive affordances.
- **Info:** blue, for neutral messages.
- **Synced/reusable pattern:** purple may be used only where core editor semantics require it.

### Color constraints

Use color semantically, not decoratively. A plugin may have a brand identity, but inside wp-admin that brand should appear as logo or restrained illustration, not as a replacement for WordPress controls. State must never rely on color alone; pair color with text, icons, ARIA state, or shape.

## Typography

Use the WordPress admin system font stack:

`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`

The classic admin base is compact: 13px body text with about 1.4 line-height. Page titles are 23px regular weight. Section headings, table titles, metabox titles, and panel headings commonly use 13px to 18px with 600 weight. Editor controls and `@wordpress/components` labels also remain compact and system-font based.

Use monospace only for code, paths, slugs, CSS selectors, CLI commands, JSON, database names, and technical values. Do not add custom webfonts in admin experiences unless there is an explicit core-level reason; performance, localization, and platform consistency matter more than brand expression.

### Text hierarchy

- **Page title:** 23px, regular, used once per admin page.
- **Section title:** 18px, semibold, for major groups on settings or dashboard pages.
- **Panel/metabox title:** 13px, semibold, for compact containers and editor sidebars.
- **Table item title:** 14px, semibold, for primary row labels in list tables.
- **Body:** 13px regular.
- **Helper text and metadata:** 12px-13px regular, muted color.
- **Code:** 13px monospace.

Keep copy plain and task-oriented. WordPress admin writing should explain what changed, what action is available, and what consequence follows.

## Layout

WordPress admin layout is compact, content-first, and tool-like. Use a 4px-based rhythm with common steps of 4, 8, 12, 16, 24, and 32px. Prefer existing admin wrappers and classes over custom page frameworks.

### Classic admin shell

- The admin menu occupies the left rail; default full width is about 160px and folded width is about 36px.
- Main admin content lives in `#wpcontent` / `.wrap`-style flow with roughly 20px left/right gutters.
- Avoid fixed page widths for ordinary admin pages. Most settings pages, list tables, and dashboard views should fill available width while keeping readable line lengths for prose.
- Do not create marketing-page hero layouts inside wp-admin. Admin pages should lead with page title, primary action if needed, then task content.

### Layout patterns

- **Single-column settings page:** page title, optional description, settings sections, form controls, submit area.
- **Two-column classic edit page/metabox layout:** main content region plus secondary column. Preserve this convention where metabox compatibility matters.
- **List-table page:** page title + action, filters/search/views, top table nav, list table, bottom table nav.
- **Dashboard page:** widget grid with compact panels, no oversized cards.
- **Media/admin chooser:** left navigation or filters, main grid/list, detail side panel or modal when required.
- **Editor page:** top toolbar, optional secondary toolbar, central canvas, right inspector/sidebar, contextual block toolbar and popovers.

### Responsive behavior

Admin UI must remain usable at narrow widths and touch breakpoints. Let toolbars wrap, collapse secondary content, and use larger touch targets around 40px where controls are dense. Avoid hard-coded widths except for known admin rails and editor sidebars. Do not hide essential actions on mobile unless an equivalent menu or control remains available.

## Elevation & Depth

WordPress admin communicates hierarchy mostly through borders, spacing, background color, and typography. Use shadows sparingly.

- **Flat surfaces:** default for admin pages, list tables, settings sections, and metaboxes.
- **Subtle depth:** allowed for cards, dashboard widgets, popovers, dropdown menus, and temporary floating UI.
- **Modal depth:** use overlay/backdrop and centered dialog patterns where interruption is required.

Do not use heavy shadows, glassmorphism, neumorphism, blurred translucent panels, dramatic gradients, or layered marketing-card effects.

## Shapes

Use small radii. Classic admin elements are mostly square or nearly square. Modern editor components may use slight rounding, but still should feel precise.

- **0px:** list tables, classic metaboxes, legacy admin containers.
- **2px:** buttons, inputs, compact editor controls.
- **4px:** focus rings, small popovers, selected control outlines.
- **8px:** newer cards or dashboard widgets where core already uses a softer card treatment.
- **9999px:** pills, badges, avatars, counters, and circular icon buttons.

Avoid large consumer-app radii unless the core component already uses them.

## Components

Prefer WordPress core primitives, existing admin classes, and `@wordpress/components` over custom components. Match the local surface: classic PHP admin screens should feel like wp-admin; React/editor surfaces should use the component package and editor conventions.

### Buttons

Use the established variants:

- **Primary:** main action on the screen or in a modal. Blue background, white text. Use sparingly; usually one primary action per decision area.
- **Secondary:** default admin action. White/transparent background, blue text, blue/gray border depending on context.
- **Tertiary/text/link:** low-emphasis actions, inline actions, toolbar actions, or utility actions.
- **Destructive:** red text or secondary treatment. Avoid large filled red buttons except for final confirmation dialogs.

Classic admin buttons are often 32px tall. Modern component buttons may use 40px default sizing. In editor/toolbars, compact icon buttons are appropriate when label text would create clutter, but they must have accessible labels and tooltips where helpful.

### Links

Links are blue and visibly interactive. Hover darkens the blue. Focus must be visible. Do not style body text as blue unless it is interactive. Row actions in list tables should remain compact text links.

### Forms and settings controls

Use native WordPress admin form structure where possible:

- Labels should be explicit and programmatically associated with controls.
- Helper text should be concise and muted.
- Required/invalid states must include text, not only color.
- Group related controls with fieldsets and legends when choices belong together.
- Avoid custom select, checkbox, radio, toggle, and date controls unless using `@wordpress/components` or a core-supported pattern.

For settings pages, align labels and inputs predictably. Keep explanatory copy near the control it explains, not in a distant sidebar.

### List tables

List tables are a defining WordPress admin surface. Use them for collections of posts, pages, comments, users, plugins, media, sites, requests, and plugin-defined records.

A native list-table surface should include, where relevant:

- View links above the table, e.g. All / Published / Draft.
- Bulk action controls.
- Filters and search.
- Sortable column headers.
- Primary column with item title and row actions.
- Row actions as compact text links revealed or grouped according to WordPress convention.
- Pagination and item counts.
- Screen-reader descriptions for sorting and table context.
- Responsive row toggle behavior for small screens.

Keep table rows compact. Use strong text for the primary item title, muted text for metadata, and status indicators only where necessary. Do not replace list tables with card grids unless the underlying core screen uses a grid pattern, such as media or themes.

### Notices

Notices communicate prominent but generally non-blocking messages. Place notices at the top of the relevant screen area, below persistent toolbars in editor contexts. Keep them succinct, actionable, and dismissible when appropriate.

Use status color semantically:

- Info: neutral update or guidance.
- Success: completed action.
- Warning: caution or recoverable problem.
- Error: failed action, validation failure, or blocking problem.

Use modals instead of notices for messages that require immediate attention or a forced choice. Do not use notices as decorative cards or persistent layout containers.

### Cards, dashboard widgets, and metaboxes

Use white surfaces, subtle borders, compact padding, and direct headings. Dashboard widgets and modern cards may use 8px radius if consistent with the surrounding screen. Classic metaboxes should remain square and compact. Headers and footers can use subtle gray backgrounds.

### Navigation and tabs

Respect wp-admin navigation conventions and user-selected admin color schemes. Avoid custom sidebars that compete with the admin menu. For horizontal navigation within a page, use WordPress-style nav tabs or `@wordpress/components` `TabPanel` in React contexts. Tabs must represent peer sections, not unrelated actions.

### Popovers, dropdowns, menus, and tooltips

Use temporary surfaces for contextual controls, not permanent layout. Popovers should be close to their trigger, keyboard navigable, dismissible, and visually separated with border and subtle elevation. Tooltips should clarify icon-only or ambiguous controls; they should not carry essential instructions that are unavailable elsewhere.

### Modals and confirmations

Use modals only when the user must make a decision before continuing or when a contained task needs temporary focus. Modal actions should be explicit. Put destructive actions in the expected action area, label them with the object and consequence, and provide a safe cancel path.

### Icons

Use Dashicons in classic admin contexts where the surrounding UI uses Dashicons. Use `@wordpress/icons` in block editor and React component contexts. Icons should support recognition but not replace text for important actions unless the control includes an accessible label.

## Admin Surfaces

### Dashboard

Dashboard widgets should be glanceable, compact, and clearly titled. Prefer short summaries, direct links, and actionable status over large decorative cards. Widgets should not use marketing splash layouts or unrelated brand color schemes.

### Posts, Pages, Comments, Users, Plugins, Tools, and Network Admin lists

These screens are primarily list-table systems. Preserve bulk operations, filters, search, sortable columns, pagination, row actions, and screen-reader behavior. Do not redesign these as cards unless matching an existing core screen pattern.

### Settings pages

Settings pages should be predictable: title, short description, grouped sections, controls, helper copy, and submit action. Do not hide core settings behind custom wizards unless the task genuinely requires step-by-step guidance. Avoid excessive custom JavaScript for simple option forms.

### Media Library and upload flows

Media admin surfaces may use grid and list modes. Preserve clear affordances for selection, details, attachment metadata, copy URL, edit, delete permanently, and modal dismissal. Selection state must be visually obvious and accessible.

### Appearance, menus, widgets, and Customizer-adjacent screens

These screens can be more visual, but still live inside admin. Keep controls WordPress-native, use panels for grouped settings, and make preview/selection state explicit. Do not apply front-end theme aesthetics to the admin controls themselves.

### Plugin admin pages

Plugin pages should feel integrated with WordPress. Use `.wrap`, core notices, core buttons, standard forms, list tables, and `@wordpress/components` where appropriate. A plugin may include brand marks, but should not replace WordPress interaction patterns. Avoid full-screen proprietary dashboards unless the product is intentionally an app-like admin experience and still preserves WordPress accessibility and navigation expectations.

## Block Editor Admin Surfaces

The block editor is an admin editing surface. Its chrome and controls belong in this DESIGN.md; the visitor-facing rendering of block content does not.

### Editor shell

The editor UI is organized around:

- Top toolbar/header for document-level actions and editor tools.
- Central canvas for editable content.
- Contextual block toolbar attached near the selected block.
- Inserter for discovering and adding blocks/patterns/media.
- List view for document structure and block navigation.
- Right inspector/sidebar for document and block settings.
- Publish/pre-publish panels and post-save flows.
- Popovers, dropdown menus, and command/search surfaces.

Keep the canvas visually separate from editor chrome. Do not make plugin UI look like content unless it is actually part of the editable canvas. Do not let plugin controls obscure selected block controls, writing flow, or the top toolbar.

### Editor chrome

Editor chrome should be quiet, white or neutral, compact, and highly functional. Use icon buttons for frequent tools, but provide accessible labels. Preserve the hierarchy between document-level actions, block-level actions, and plugin actions.

### Block toolbar

Block toolbars group related icon buttons and should appear consistently near the selected block. Actions should be short, recognizable, and ordered by frequency and importance. Do not overload the block toolbar with plugin-specific controls; use a dropdown, block settings menu item, or sidebar panel for lower-priority actions.

### Inspector and document settings sidebar

Use panels for grouped settings. Important or frequently used panels may be open by default; lower-priority panels should be collapsed. Keep panel labels concise. Use `Panel`, `PanelBody`, and `PanelRow` patterns when building React UI. Avoid deep nesting and long scrolling controls.

### Inserter and list view

Inserter UI should emphasize search, clear labels, recognizable icons, and predictable grouping. List view should prioritize structure, selection, hierarchy, and keyboard navigation. Plugin additions should not destabilize core ordering or make common blocks harder to find.

### SlotFills and plugin extensions

Use SlotFills to place plugin UI in predefined editor locations. Choose the least intrusive slot that matches the task:

- `PluginDocumentSettingPanel` for document-level settings in the sidebar.
- `PluginSidebar` for a dedicated plugin sidebar opened from the editor toolbar/more menu.
- `PluginBlockSettingsMenuItem` for block-specific menu actions.
- `PluginPostPublishPanel`, `PluginPrePublishPanel`, and `PluginPostStatusInfo` for publishing/status workflows.
- `PluginMoreMenuItem` for secondary plugin actions.

Do not inject UI into arbitrary editor DOM locations when a SlotFill exists. Keep plugin sidebars narrow, panel-based, and consistent with editor controls.

### Editor notices

Editor notices should appear below top toolbars, not on top of them. They are persistent, non-modal, and dismissible when appropriate. Use modal dialogs only when the user must act before continuing.

### Selection, focus, and keyboard behavior

The editor has selection states that classic admin screens do not: selected block, multi-selected blocks, inserter focus, list-view focus, writing focus, dragging, and preview modes. Preserve visible selection outlines and focus rings. Do not remove keyboard shortcuts or trap focus in plugin UI. Return focus to the triggering control after closing popovers, sidebars, and modals.

## Accessibility

Accessibility is a core design constraint, not an enhancement.

- Maintain WCAG AA contrast for text and interactive elements.
- Provide visible focus states for every interactive control.
- Do not use color alone to convey meaning.
- Use semantic HTML before custom ARIA.
- Associate labels with form controls.
- Provide screen-reader text for icon-only controls, row toggles, sorting state, and ambiguous links.
- Keep disabled controls discoverable where appropriate; in React components, prefer accessible disabled behavior when recommended by the component API.
- Respect reduced-motion preferences.
- Ensure popovers, dropdowns, tabs, modals, and sidebars are keyboard operable.

## Implementation Guidance

### Use the right layer

- **Classic admin PHP screens:** use WordPress admin markup, classes, hooks, settings API patterns, list-table conventions, and admin CSS variables.
- **React/block editor screens:** use `@wordpress/components`, `@wordpress/icons`, `@wordpress/data`, `@wordpress/i18n`, and SlotFill APIs.
- **Hybrid plugin pages:** use `@wordpress/components` where the page is React-driven, but still place the page inside native admin shell and notices.

### Prefer existing primitives

Do not recreate buttons, notices, tabs, panels, toolbar groups, dropdowns, or inputs from scratch when WordPress provides an equivalent. Custom controls should be rare, accessible, and visually aligned with surrounding WordPress UI.

### Respect user and site context

Respect admin color schemes, localization, text expansion, RTL, reduced motion, browser zoom, narrow screens, and role/capability differences. Avoid assumptions that all admins use English, a mouse, a wide desktop viewport, or default color settings.

### Backwards compatibility

WordPress admin has long-lived extension points. Designs must tolerate old metaboxes, custom columns, plugin notices, admin color schemes, and third-party CSS. Avoid global CSS that targets broad admin selectors in a way that could break other plugins or core screens.

## Do's and Don'ts

### Do

- Use WordPress core components, admin classes, and editor SlotFills before inventing new UI.
- Keep admin screens compact, predictable, and task-focused.
- Use `--wp-admin-theme-color` and related variables for focus, selected, and primary states when implementing CSS.
- Use list tables for tabular/admin collections.
- Use panels for grouped editor/sidebar settings.
- Keep plugin UI subordinate to the WordPress admin shell.
- Preserve keyboard navigation, visible focus, screen-reader text, RTL, localization, and responsive behavior.
- Place notices below top toolbars and near the affected context.
- Use destructive styling only for genuinely destructive actions.

### Don't

- Do not use this file for front-end theme styling, `theme.json`, global styles, or visitor-facing block presentation.
- Do not replace wp-admin with a generic SaaS dashboard aesthetic.
- Do not introduce custom fonts, heavy shadows, gradients, glass effects, large radii, or decorative brand palettes into routine admin UI.
- Do not override user-selected admin color schemes with hard-coded accent colors.
- Do not use color alone to communicate state.
- Do not crowd the block toolbar with low-priority plugin controls.
- Do not place notices over editor toolbars.
- Do not inject editor UI into arbitrary DOM locations when a supported SlotFill exists.
- Do not modify WordPress core files; build through plugins, hooks, packages, and supported APIs.

## Source Notes

This DESIGN.md was derived from public WordPress core/admin and Gutenberg documentation and should be treated as a living admin design contract. Review it against current WordPress core CSS, `@wordpress/components`, Block Editor Handbook docs, and active WordPress design discussions before using it as a final upstream standard.
