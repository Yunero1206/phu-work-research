# Phạm Thanh Phú — Work & Research

Portfolio and Explainable Trust interactive showcase, deployed together as a **Render Static Site**. VieWorld remains a separate repository and static deployment.

```text
phamthanhphu.io.vn/
├── /                       Portfolio
├── /work/                  Work library
├── /work/<case>/           Research monographs
├── /about/                 About
└── /explainable/           Explainable Trust showcase

vieworld.phamthanhphu.io.vn/ Independent VieWorld app
```

## Development and verification

Use Node.js 22 or later.

```sh
npm ci
npm run verify
npm run preview
```

The preview runs at `http://127.0.0.1:3000`. For frontend editing with hot reload, run `npm run dev --workspace apps/explainable` and use the Vite URL ending in `/explainable/`.

`worker/index.js` is the portfolio page renderer. Authored case content and catalog metadata live in `worker/case-library.js`; `worker/case-updates-2026-10.js` contains the PNJ October reader and Shopee commerce-recovery extension. `worker/reading-guides.js` holds optional introductions for the five featured cases and prototype links. `worker/work-previews.js` provides browsing headlines, summaries, work stages, formats, and source-version dates for all 24 cases. Home presents five selected works; Work shows all 24 immediately in compact editorial rows with visible Topic, Type, and Sort controls. The default order is latest source update first; month-only dates keep their precision and undated models stay undated at the end. Shared header search, filters, sorting, and saved state work together and retain their URL state, including existing research-mode links. `worker/work-thumbnails.js` renders the approved illustrations, prototype screenshots, and small editorial maps without changing case-body evidence. Case readers use a modest title and one utility strip for reading time, source links, Contents, and reading tools. Opening source bars move into the artifact menu; Save, sharing, text sizing, optional prototype links, and case metadata remain available in Reading tools. The article body and source destinations are preserved. The earlier research cuts remain intact. The renderer runs **at build time**, producing HTML and assets in `dist/`. The build replaces request nonces with per-page CSP hashes and writes the shared stylesheet to a content-hashed asset that browsers can reuse between pages. No Worker, Express server, model endpoint, or secrets are shipped. Use the root preview for the integrated artifact; rebuild after portfolio edits.

The portfolio's shared layout and responsive styles live in `worker/styles.js`. `worker/editorial-pages.js` contains Home and About bodies; `worker/work-stories.js` shares work-row markup between Home and the library, and `worker/html.js` shares HTML escaping. Home keeps VieWorld featured and reuses the library thumbnails for its four supporting selections. About uses compact experience rows with definitions beside each metric, without repeated portfolio counters or contact button groups. Homepage, Work Library, About, and all case pages share the editorial paper/navy/copper palette. `public/assets/fonts.css` defines self-hosted Be Vietnam Pro headings and compact controls, STIX Two Text editorial body (including italic), and JetBrains Mono metadata; the showcase imports the same font definitions and retains STIX for scenario narratives. Its header follows the portfolio theme preference. Asset sources and font licenses are retained under `public/assets/`. Only content-hashed CSS and showcase bundles use immutable caching; fixed-name fonts and images use a shorter lifetime. The cat companion is limited to About.

For an existing Render Blueprint service, [Render preserves header rules omitted from a later YAML](https://render.com/docs/blueprint-spec#static-sites). When migrating the cache settings, remove the previous `/*` → `Cache-Control: no-cache` rule from the service's Headers settings if it remains there; the explicit page rules now cover HTML. Keep the global security headers. Verify the actual response headers after syncing: hashed CSS should be immutable, and fixed-name fonts/images should have a one-day lifetime. A Git deployment alone does not prove the old dashboard rule was removed.

## Explainable Trust

Source: [`apps/explainable`](apps/explainable). The four-step fictional QuickBite scenario uses authored proposals validated through the existing schema and `applyProposal` commit boundary. It demonstrates evidence, findings, timeline, source references, reasoning and provenance graphs, gaps, actions, and revision history.

Previous, step selection, and Reset select complete immutable snapshots; future evidence and reasoning are excluded from earlier exports. The final revision records refund initiation and keeps settlement unverified. Sources and reasoning are explicitly labelled demo material, including in exports. The showcase accepts no real-case intake or uploads and runs no model inference or web search.

Sample copies, names, archive flags, active case, and scenario step persist in `ExplainableTrustShowcaseV1` IndexedDB. Browser storage failures fall back to an in-memory visit. This demo database is separate from the historical `ExplainableTrustV3` database. Moving domains does not migrate old browser data.

## Render setup

Create a **new Static Site** from `Yunero1206/phu-work-research`, branch `main`. An existing Node Web Service cannot become this static deployment just by changing its commands. Use the checked-in `render.yaml` Blueprint, or set:

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run verify` |
| Publish directory | `dist` |
| Node version | `22` |
| Start command | None; Static Site serves the artifact |

No Gemini, Tavily, or backend environment variables are needed. Apply the redirect and header rules in `render.yaml` when configuring manually. There is no global SPA rewrite: real portfolio routes are generated, and missing files return 404 instead of HTML masquerading as JS.

Before changing DNS, verify the Render preview URL: `/`, `/work/`, `/about/`, a monograph, and `/explainable/`; test reload, Previous/Next/Reset, graph/reference interactions, and export. Then attach `phamthanhphu.io.vn` and configure the DNS target shown by Render. Keep VieWorld on its own service and subdomain.

The showcase no longer depends on `Yunero1206/Explainable-App`, so that historical repository can be made private. Removing `app.phamthanhphu.io.vn` also removes any redirect served on that domain; preserve a redirect host if old links must continue working. Portfolio links now point directly to `/explainable/`.

## Build artifact

`dist/` contains only static portfolio pages, assets, `404.html`, sitemap, and the Vite showcase under `explainable/`. Builds and dependencies are ignored by Git. The build validates local links, CSP code hashes, and absence of live intake endpoints from the showcase bundle.
