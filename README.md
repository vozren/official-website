# Vozren website

Vozren's bilingual static website, built with Astro, TypeScript, Tailwind CSS v4, and Markdown content collections. The default Chinese route is `/zh/`; English is at `/en/`.

## Local development

Requires [Bun](https://bun.sh/).

```sh
bun install
bun run dev
bun run check
bun run build
```

The journal entries live in `src/content/notes/{zh,en}`. Each entry needs `title`, `description`, `locale`, and `order` frontmatter. Matching filenames keep language switching on the corresponding article.

## Deployment

The workflow builds and deploys `dist/` on pushes to `main`. In repository settings, set Pages source to **GitHub Actions**. `public/CNAME` and `site` in `astro.config.mjs` assume the custom domain `vozren.com` points to GitHub Pages. DNS and domain verification must be configured separately. If publishing only at `vozren.github.io/official-website/`, remove `public/CNAME`, set `site` to that URL, and add `base: '/official-website'` in Astro config; routes and root redirect would also need to use that base path.

Brand assets are copied from the organization's `.github/assets/logos` directory.
