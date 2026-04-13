# TranSFlator Documentation

Public documentation for [TranSFlator](https://transflator.com) — a
Tucario product. Built with [Astro](https://astro.build) +
[Starlight](https://starlight.astro.build), deployed to **GitHub
Pages** via GitHub Actions.

Live at [docs.transflator.com](https://docs.transflator.com).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview  # serves ./dist locally
```

Content lives in `src/content/docs/`. Each `.md` or `.mdx` file is
one page; the URL is derived from the file path. The sidebar is
defined in `astro.config.mjs`, not auto-generated.

## Deployment (GitHub Pages)

Every push to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci`
2. `npm run build` → Starlight builds static HTML into `./dist`
3. `actions/upload-pages-artifact@v3` uploads the `dist` folder
4. `actions/deploy-pages@v4` publishes it to GitHub Pages

### One-time GitHub setup

In the repo go to **Settings → Pages**:

1. **Source** → `GitHub Actions` (not "Deploy from a branch")
2. Click **Save**

That's it for the build pipeline. Every subsequent push to `main`
will deploy automatically. The workflow also supports manual
re-runs via the **Actions** tab → **Deploy to GitHub Pages** →
**Run workflow**.

### Private repo note

GitHub Pages on a private repo requires **GitHub Pro**, **Team**,
or **Enterprise**. On a free GitHub account, Pages only works for
public repos. If you're on the free tier and want to keep this
repo private, either upgrade the org to Team or switch to
Cloudflare Pages (see the sibling `TranSFlatePage` repo for the
workflow template).

## Custom domain

To point `docs.transflator.com` at this site:

1. **Repo → Settings → Pages → Custom domain** → enter
   `docs.transflator.com` → **Save**.
2. GitHub will ask you to add a DNS record. In Cloudflare, on the
   `transflator.com` zone, add a **CNAME**:

   ```
   docs → tucario.github.io
   ```

   Leave the proxy OFF (DNS only — grey cloud). GitHub's SSL
   provisioning needs to reach the origin directly.
3. Wait 1–5 minutes for DNS propagation, then tick **Enforce HTTPS**
   in the Pages settings.

GitHub writes a `CNAME` file into `public/` on your behalf the
first time you save a custom domain, and the deploy workflow
preserves it automatically. Do not remove the `CNAME` file.

## Project layout

```
src/
├── content/
│   ├── docs/                    # every .md/.mdx here is a page
│   │   ├── index.mdx            # landing (splash template)
│   │   ├── getting-started/
│   │   ├── desktop-app/
│   │   ├── account-panel/
│   │   ├── ai-engines/
│   │   ├── security.md
│   │   └── troubleshooting/
│   └── content.config.ts        # Starlight content collections
├── styles/custom.css            # brand accent colour override
└── assets/                      # images imported from Markdown
public/                          # passthrough (CNAME, favicons)
astro.config.mjs                 # Starlight config, sidebar, site URL
.github/workflows/deploy.yml
```

## Adding a new page

1. Create a new `.md` or `.mdx` file under `src/content/docs/...`.
2. Add YAML frontmatter:

   ```yaml
   ---
   title: My new page
   description: One-line page summary for SEO and in-page search.
   ---
   ```

3. Open `astro.config.mjs` and add the page to the `sidebar` array
   so it shows up in the navigation. Starlight does not
   auto-discover pages unless you use `autogenerate: { directory }`
   on a sidebar entry.

## Conventions

- **Every page has a `TODO` note at the bottom** for work still to
  do (screenshots, benchmarks, etc.). Remove the note when the
  page is complete.
- **Internal links** use absolute paths starting with `/` and end
  with a trailing slash, e.g. `/security/`, not `/security.md`.
- **External links** use the full `https://...` URL.
- **Code blocks** prefer `bash`, `json`, `ts`, `dart` language
  hints — Starlight has nice syntax highlighting for these.
