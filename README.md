# tenonkit-docs

[docs.tenonkit.com](https://docs.tenonkit.com): documentation for every Tenonkit product. Next.js 16 (App Router), MDX and Tailwind CSS v4. No environment variables needed.

```sh
bun install
bun dev          # http://localhost:3002
bun run build
```

## Layout

- `src/app/page.tsx`: the hub, one card per product (`PRODUCTS`).
- `src/app/builder/`: Tenonkit Builder's docs. `content.ts` lists the pages in reading order.
- `src/content/builder/`: one `.mdx` file per page. Each exports `meta` (group, title, description) for the sidebar and search.
- `src/components/docs/`: sidebar, search, table of contents and the blocks pages use (`<Callout>`, `<Steps>`, `<Figure>`…).
- `public/screens/`: screenshots for `<Figure src="…">`.

Links to the main site (download, privacy) are absolute `https://tenonkit.com/…` URLs.

## Adding a product

1. Write its pages in `src/content/<product>/`.
2. Copy `src/app/builder/` to `src/app/<product>/` and point its `content.ts` at the new pages and `/<product>` URLs.
3. Add a card to `PRODUCTS` in `src/app/page.tsx`.

Deploy with `tk deploy docs` from `tenonkit-cli` (set `PTERO_DOCS_SERVER`).
