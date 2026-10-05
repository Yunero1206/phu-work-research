# Explainable Trust — Interactive Showcase

Client-only portfolio demonstration of an evidence ledger. Fictional sources and authored proposals are validated and applied through the original Ledger V3 contract; they are not output from a live model run.

The scenario progresses from an initial damage report to corroboration, a contradictory refund status, and a corrected ledger with a remaining settlement gap. Each step owns a complete ledger snapshot, so navigation, graph, sources, and export stay consistent.

- No backend, `/api/intake`, Gemini, Tavily, secrets, or real-document uploads.
- Evidence, timeline, findings, reasoning/provenance graphs, source navigation, and exports run in the browser.
- Demo workspace and per-case positions persist in a separate IndexedDB database with an in-memory fallback.
- Existing six-language UI is retained; source content remains in its authored English language.
- Vite `base` is `/explainable/`. Root build copies this app's `dist` into portfolio `dist/explainable`.

Run `npm run dev --workspace apps/explainable` from the repository root. Run `npm run verify` for the integrated artifact. See the root README for Render configuration.

The historical research prototype remains in the separate Explainable-App repository and is not a build dependency.
