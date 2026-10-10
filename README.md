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

`worker/index.js` retains the portfolio content and page renderer. `worker/case-updates-2026-10.js` contains the PNJ October reader and the Shopee commerce-recovery extension; the earlier research cuts remain intact. The renderer runs **at build time**, producing HTML and assets in `dist/`. The build replaces request nonces with per-page CSP hashes. No Worker, Express server, model endpoint, or secrets are shipped. Use the root preview for the integrated artifact; rebuild after portfolio edits.

The portfolio's shared layout and responsive styles live in `worker/styles.js`. Homepage, Work Library, About, and all case pages share the editorial paper/navy/copper palette. `public/assets/fonts.css` defines self-hosted Be Vietnam Pro headings, STIX Two Text body/UI (including italic), and JetBrains Mono metadata; the showcase imports the same font definitions. Asset sources and font licenses are retained under `public/assets/`.

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
