# A8C DESIGN.md Sources

The `a8c-*` design-system packs are imported from the internal repo:

`https://github.a8c.com/Automattic/A8c-design-md/tree/trunk/design-md`

Current imported upstream commit: `dcc47f5`.

## Imported Brands

| Local design slug | Upstream folder | Brand |
| --- | --- | --- |
| `a8c-automattic-design` | `automattic.design` | Automattic Design |
| `a8c-beeper` | `beeper` | Beeper |
| `a8c-cloudup` | `cloudup` | Cloudup |
| `a8c-dayone` | `dayone` | Day One |
| `a8c-gravatar` | `gravatar` | Gravatar |
| `a8c-jetpack` | `jetpack` | Jetpack |
| `a8c-newspack` | `newspack` | Newspack |
| `a8c-parsely` | `parsely` | Parse.ly |
| `a8c-pocketcasts` | `pocketcasts` | Pocket Casts |
| `a8c-tumblr` | `tumblr` | Tumblr |
| `a8c-woocommerce` | `woocommerce` | WooCommerce |
| `a8c-wordpress-com` | `wordpress.com` | WordPress.com |
| `a8c-wpvip` | `wpvip` | WPVIP |

Each imported pack contains `DESIGN.md`, `BACKLOG.md`, `preview.html`, `preview-dark.html`, and a local `preset.json` with source provenance.

## Refresh Workflow

```sh
git clone --depth 1 git@github.a8c.com:Automattic/A8c-design-md.git /private/tmp/A8c-design-md
npm run import-a8c-design-md -- --source /private/tmp/A8c-design-md
```

For `gh` access to GitHub Enterprise, Slack references the local AutoProxxy SOCKS tunnel:

```sh
HTTPS_PROXY=socks5://127.0.0.1:8080 HTTP_PROXY=socks5://127.0.0.1:8080 GH_HOST=github.a8c.com gh ...
```

Git over SSH is configured on this machine through `~/.ssh/config` using the same local SOCKS proxy and `~/.ssh/a8c-key.config`.

## Internal Context

Slack context from April 29-30, 2026 identifies João Miranda as the person who had ingested `DESIGN.md` files for most Automattic brands and describes the layer as bridging structured brand tokens with semantic context. Toto Castiglione separately noted an official v0.1 for Ecosystem brand `design.md` files, with shared structure, taxonomy, and asset logic.
