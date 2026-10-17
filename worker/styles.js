// Shared portfolio styles. Each page component has one canonical definition.
export const siteCss = String.raw`:root {
    /* ========================================================================
       1. UNIFIED TYPOGRAPHY DESIGN TOKENS
       ======================================================================== */

    /* Modular Fluid Type Scale */
    --text-2xs: 0.6875rem; /* 11px - Micro badges, kbd hints, zoom hints */
    --text-xs:  0.75rem;   /* 12px - Meta dates, tags, pills, overlines */
    --text-sm:  0.875rem;  /* 14px - Nav links, UI buttons, table text, rail */
    --text-base: 1rem;     /* 16px - Base body text, inputs, form controls */
    --text-md:  1.0625rem; /* 17px - Intro ledes and cards */
    --text-3xl: clamp(1.75rem, 2.7vw, 2.25rem); /* Fallback page heading */

    /* Font Weights */
    --fw-semibold:  600;
    --fw-bold:      700;

    /* Line Heights */
    --lh-relaxed: 1.65;

    /* Letter Spacing */
    --tracking-wide:    0.04em;
    --tracking-wider:   0.08em;

    /* ========================================================================
       2. UNIFIED SEMANTIC COLOR SYSTEM (LIGHT / DARK)
       ======================================================================== */
    --paper: #fcfbf8;
    --paper-card: #ffffff;
    --paper-tint: #f4efe6;
    --ink: #172b45;
    --ink-secondary: #43566e;
    --muted: #53647a;
    --line: #d7cfc3;
    --copper: #a84626;
    --copper-dark: #873717;
    --navy: #0b2348;

    color-scheme: light;
  }

  /* Dark theme */
  :root[data-theme="dark"] {
    --paper: #111923;
    --paper-card: #192635;
    --paper-tint: #233348;
    --ink: #f2f5f8;
    --ink-secondary: #c3ceda;
    --muted: #a8b7c8;
    --line: #405269;
    --copper: #ffb086;
    --copper-dark: #ffc7a8;
    --navy: #f0f6fc;
    color-scheme: dark;
  }

  .f-toast-msg {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--paper-tint);
    color: var(--ink);
    padding: 10px 22px;
    border-radius: 30px;
    font-size: var(--text-sm);
    font-family: var(--font-sans);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 99999;
  }
  .f-toast-msg.is-visible {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  /* ========================================================================
     3. BASE RESETS & GLOBAL TYPOGRAPHY
     ======================================================================== */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-serif);
    font-size: var(--text-base);
    line-height: var(--lh-relaxed);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  a { color: inherit; }
  button, input, select { font-family: var(--font-sans); }
  :focus-visible { outline: 2px solid var(--copper); outline-offset: 4px; }

  /* Modern Typography Enhancements */
  h1, h2, h3, h4, h5, h6 { font-family: var(--font-display); text-wrap: balance; }
  p, blockquote, li { text-wrap: pretty; }

  .f-skip {
    position: fixed;
    left: 18px;
    top: -100px;
    z-index: 100;
    background: var(--navy);
    color: #fff;
    padding: 10px 16px;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: var(--fw-bold);
  }
  .f-skip:focus { top: 14px; }
  .f-wrap { width: min(calc(100% - 128px), 1120px); margin-inline: auto; }
  /* Global navigation — one shared definition for every portfolio page. */
  .f-header { position: sticky; top: 0; z-index: 50; background: var(--paper); }
  .f-nav { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid var(--line); }
  .f-brand { font-family: var(--font-display); font-size: 26px; font-weight: 650; letter-spacing: -.025em; color: var(--navy); text-decoration: none; white-space: nowrap; }
  .f-links { display: flex; align-items: center; gap: 28px; }
  .f-nav-pages { display: flex; align-items: center; gap: 28px; }
  .f-nav { font-family: var(--font-sans); }
  .f-cmd-trigger { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-width: 44px; min-height: 44px; padding: 0 10px; border: 1px solid var(--line); border-radius: 4px; background: transparent; color: var(--ink-secondary); font-size: 12px; cursor: pointer; }
  .f-cmd-trigger svg { width: 17px; height: 17px; flex-shrink: 0; }
  .f-cmd-trigger kbd { font: 11px var(--font-mono); color: var(--muted); }
  .f-cmd-trigger:hover { border-color: var(--copper); color: var(--copper); }
  .f-links a { font-size: 14px; font-weight: 400; color: var(--ink-secondary); text-decoration: none; transition: color 150ms ease; }
  .f-links a:hover, .f-links a[aria-current="page"] { color: var(--copper); }
  .f-links a[aria-current="page"] { text-decoration: underline; text-underline-offset: 6px; }
  .f-theme-toggle { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-width: 76px; height: 44px; padding: 0 10px; border: 1px solid var(--line); border-radius: 5px; background: var(--paper-tint); color: var(--ink); font: 400 12px var(--font-sans); cursor: pointer; }
  .f-theme-toggle svg { width: 18px; height: 18px; }
  .f-theme-toggle .f-theme-icon-light { display: none; }
  [data-theme='dark'] .f-theme-toggle .f-theme-icon-dark { display: none; }
  [data-theme='dark'] .f-theme-toggle .f-theme-icon-light { display: block; }
  .f-theme-toggle:hover { border-color: var(--copper); }
  /* Home, About and Work share a compact editorial rhythm. */
  .f-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; margin-bottom: 20px; }
  .f-section-head h2, .f-home-approach h2 { margin: 0; color: var(--navy); font: 600 22px/1.3 var(--font-display); letter-spacing: -.02em; }
  .f-editorial-link { display: inline-flex; align-items: center; gap: 8px; max-width: 100%; min-height: 44px; color: var(--copper); font: 400 13px/1.5 var(--font-sans); text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; overflow-wrap: anywhere; }
  .f-editorial-link:hover { color: var(--copper-dark); }
  .f-home-hero { display: grid; grid-template-columns: 1.08fr 1fr; align-items: center; gap: 48px; padding-block: 36px; }
  .f-home-identity, .f-home-photo { min-width: 0; }
  .f-home-identity h1 { margin: 14px 0 0; color: var(--navy); font: 650 clamp(28px,3.1vw,36px)/1.2 var(--font-display); letter-spacing: -.025em; }
  .f-home-role, .f-home-experience { font: 400 12px/1.7 var(--font-sans); color: var(--ink-secondary); }
  .f-home-role { margin: 0; }
  .f-home-experience { margin: 16px 0 0; color: var(--muted); }
  .f-home-intent { max-width: 52ch; margin: 18px 0 0; color: var(--ink-secondary); font: 400 18px/1.65 var(--font-serif); }
  .f-home-photo { margin: 0; }
  .f-home-photo img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; max-height: 280px; object-fit: cover; border-radius: 4px; }
  .f-home-selected { padding-top: 8px; scroll-margin-top: 88px; }
  .f-home-feature { display: grid; grid-template-columns: 1.45fr 1fr; align-items: center; gap: 30px; padding-bottom: 24px; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; }
  .f-home-feature-media { display: block; min-width: 0; aspect-ratio: 1200 / 692; overflow: hidden; border: 1px solid var(--line); border-radius: 4px; }
  .f-home-feature-image { display: block; width: 101.5%; max-width: none; height: 100%; object-fit: cover; object-position: left top; }
  .f-home-work-copy { min-width: 0; }
  .f-home-category { display: block; margin-bottom: 10px; font: 500 12px/1.5 var(--font-sans); color: var(--copper); }
  .f-home-feature h3 { margin: 0 0 12px; color: var(--navy); font: 600 clamp(28px,3vw,34px)/1.2 var(--font-display); letter-spacing: -.025em; }
  .f-home-feature p { max-width: 32ch; margin: 0 0 8px; color: var(--ink-secondary); font: 400 18px/1.5 var(--font-serif); }
  .f-home-feature:hover h3 { color: var(--copper); }
  .f-home-approach.f-editorial-section { border-top: 0; }
  .f-home-principles { display: flex; flex-wrap: wrap; gap: 4px 18px; list-style: none; margin: 0 0 8px; padding: 0; color: var(--ink-secondary); font: 400 17px/1.6 var(--font-serif); }
  .f-home-principles li + li::before { content: '·'; padding-right: 18px; color: var(--copper); }
  @media (max-width: 920px) { .f-home-hero { gap: 28px; } }
  @media (max-width: 720px) {
    .f-home-hero { display: block; padding-block: 28px; border-bottom: 1px solid var(--line); }
    .f-home-photo { display: none; }
    .f-home-identity h1 { font-size: 28px; }
    .f-home-intent { margin-top: 16px; font-size: 17px; }
    .f-home-selected { padding-top: 20px; }
    .f-section-head { gap: 12px; margin-bottom: 16px; }
    .f-section-head h2, .f-home-approach h2 { font-size: 21px; }
    .f-section-head .f-editorial-link { white-space: nowrap; }
    .f-home-feature { grid-template-columns: 1fr; gap: 16px; }
    .f-home-feature h3 { font-size: 28px; margin-bottom: 8px; }
    .f-home-feature p { max-width: none; font-size: 17px; }
    .f-home-category { margin-bottom: 6px; }
    .f-home-principles { display: grid; gap: 4px; }
    .f-home-principles li + li::before { content: none; }
  }
  @media (max-width: 640px) {
    .f-nav { display: grid; grid-template-columns: minmax(0,1fr) 44px 64px; gap: 0 10px; padding-top: 8px; }
    .f-brand { grid-column: 1; grid-row: 1; font-size: 21px; }
    .f-links { display: contents; }
    .f-nav-pages { grid-column: 1 / -1; grid-row: 2; gap: 26px; }
    .f-links a { display: inline-flex; align-items: center; min-height: 44px; font-size: 13px; }
    .f-cmd-trigger { padding: 0; }
    .f-cmd-trigger span, .f-cmd-trigger kbd { display: none; }
    .f-theme-toggle { min-width: 64px; padding-inline: 8px; font-size: 12px; }
  }
  @media (max-width: 360px) {
    .f-nav { column-gap: 6px; }
    .f-brand { font-size: 18px; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }

  /* Reading Progress Bar */
  #f-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--copper);
    width: 0%;
    z-index: 100;
    transition: width 0.1s ease-out;
  }

  /* Work opens directly into the collection; search lives in the shared header. */
  .f-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
  .f-work-toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px 20px; padding-block: 14px; border-bottom: 1px solid var(--line); font-family: var(--font-sans); }
  .f-work-controls { display: flex; flex-wrap: wrap; gap: 10px; margin-left: auto; }
  .f-work-select { display: flex; align-items: center; gap: 3px; width: 180px; min-height: 44px; padding-left: 10px; border: 1px solid var(--line); border-radius: 4px; color: var(--navy); font-size: 12px; }
  .f-work-select:last-child { width: 200px; }
  .f-work-select select { flex: 1; min-width: 0; width: 0; min-height: 42px; border: 0; border-radius: inherit; background: transparent; color: var(--ink); padding: 8px 6px 8px 0; font-size: 12px; }
  .f-work-select option { background: var(--paper); color: var(--ink); }
  .f-work-active { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 18px; width: 100%; color: var(--ink-secondary); font-size: 12px; }
  .f-work-query { display: inline-flex; align-items: center; gap: 12px; min-height: 44px; max-width: 100%; padding: 8px 12px; border: 1px solid var(--line); border-radius: 4px; background: var(--paper-card); color: var(--copper); font: 400 12px/1.5 var(--font-sans); cursor: pointer; }
  .f-work-query span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .f-work-saved { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 44px; padding: 8px 4px; border: 0; border-radius: 4px; color: var(--ink-secondary); background: transparent; font: 400 12px var(--font-sans); cursor: pointer; }
  .f-work-saved svg, .f-work-save svg { width: 18px; height: 18px; }
  .f-work-saved[aria-pressed='true'], .f-work-save[aria-pressed='true'] { color: var(--copper); }
  .f-work-results { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 16px; color: var(--ink-secondary); font-size: 12px; }
  .f-work-clear { min-height: 44px; padding: 2px 0; border: 0; background: transparent; color: var(--copper); font-size: 12px; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }
  .f-work-stories { padding-bottom: 48px; }
  .f-work-item { position: relative; min-width: 0; border-bottom: 1px solid var(--line); }
  .f-work-story { display: grid; grid-template-columns: minmax(190px,27%) minmax(0,1fr); align-items: center; gap: 30px; padding: 12px 38px 12px 0; color: inherit; text-decoration: none; }
  .f-work-story-selected { padding-right: 0; }
  .f-work-story-copy { min-width: 0; }
  .f-work-story-label { margin: 0 0 4px; color: var(--copper); font: 500 12px/1.5 var(--font-sans); }
  .f-work-hook { margin: 0 0 5px; color: var(--navy); font: 600 20px/1.3 var(--font-display); letter-spacing: -.02em; text-wrap: pretty; }
  .f-work-story:hover .f-work-hook { color: var(--copper); }
  .f-work-teaser { margin: 0; color: var(--ink-secondary); font: 400 17px/1.4 var(--font-serif); }
  .f-work-story-meta { display: flex; flex-wrap: wrap; gap: 2px 10px; margin-top: 10px; color: var(--muted); font: 400 11px/1.5 var(--font-sans); }
  .f-work-story-meta > span + span::before { content: '·'; margin-right: 10px; }
  .f-work-art { position: relative; min-width: 0; width: 100%; aspect-ratio: 12 / 5; overflow: hidden; border: 1px solid var(--line); border-radius: 4px; background: #fcfbf8; }
  .f-work-art img, .f-work-art svg { display: block; width: 100%; height: 100%; object-fit: cover; font-family: var(--font-sans); }
  .f-work-art[data-cell] img { position: absolute; max-width: none; width: 200%; height: 200%; object-fit: fill; left: 0; top: 0; }
  .f-work-art[data-cell='shopee'] img, .f-work-art[data-cell='mfan'] img { left: -100%; }
  .f-work-art[data-cell='zalo'] img, .f-work-art[data-cell='mfan'] img { top: -100%; }
  .f-work-save { position: absolute; top: 10px; right: -6px; z-index: 1; display: grid; place-items: center; width: 40px; height: 40px; border: 0; border-radius: 4px; background: transparent; color: var(--ink-secondary); cursor: pointer; }
  .f-work-save:hover { color: var(--copper); }
  .f-work-save[aria-pressed='true'] svg { fill: color-mix(in srgb, currentColor 18%, transparent); }
  .f-work-empty { padding: 44px 0 64px; }
  .f-work-empty h2 { margin: 0 0 12px; color: var(--navy); font-size: 24px; }
  .f-work-empty p { max-width: 60ch; color: var(--ink-secondary); }
  .f-work-empty button { background: transparent; cursor: pointer; }
  .f-work-page [hidden] { display: none !important; }
  .f-case-prototype { display: inline-flex; align-items: center; gap: 8px; padding: 10px 13px; border: 1px solid var(--copper); border-radius: 4px; color: var(--copper); text-decoration: none; font: 500 12px/1.6 var(--font-sans); }
  .f-case-info { border-top: 1px solid var(--line); }
  .f-case-info > summary { min-height: 44px; padding-block: 12px; color: var(--ink-secondary); font: 400 13px/1.5 var(--font-sans); cursor: pointer; }
  .f-case-brief { padding: 20px; background: var(--paper-tint); }
  .f-case-brief dl { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; margin: 0; }
  .f-case-brief dt { margin-bottom: 8px; color: var(--navy); font: 600 12px/1.5 var(--font-sans); }
  .f-case-brief dd { margin: 0; font: 400 16px/1.65 var(--font-serif); }
  .f-case-brief-boundary { margin: 18px 0 0; padding-top: 16px; border-top: 1px solid var(--line); color: var(--ink-secondary); font: 400 14px/1.6 var(--font-serif); }
  .f-case-brief-boundary strong { font-weight: 600; }
  .f-case-toolbar { position: relative; display: flex; align-items: center; gap: 16px; min-height: 46px; border-bottom: 1px solid var(--line); }
  .f-case-read-time { flex-shrink: 0; color: var(--muted); font: 400 12px/1.5 var(--font-sans); white-space: nowrap; }
  .f-case-toolbar > details > summary { display: flex; align-items: center; gap: 6px; min-height: 44px; padding-inline: 4px; list-style: none; color: var(--ink-secondary); font: 400 12px/1.5 var(--font-sans); white-space: nowrap; cursor: pointer; }
  .f-case-toolbar > details > summary::-webkit-details-marker { display: none; }
  .f-case-toolbar > details > summary::after { content: ''; width: 0; height: 0; border-inline: 3px solid transparent; border-top: 4px solid currentColor; }
  .f-case-toolbar > details[open] > summary { color: var(--copper); }
  .f-case-toolbar > details[open] > summary::after { transform: rotate(180deg); }
  .f-reading-tools-short { display: none; }
  .f-reading-tools-panel, .f-case-sources-panel { position: absolute; left: 0; top: calc(100% + 6px); z-index: 25; width: min(640px,100%); max-height: 65dvh; overflow-y: auto; overscroll-behavior: contain; padding: 16px; border: 1px solid var(--line); border-radius: 4px; background: var(--paper-card); box-shadow: 0 10px 24px rgb(0 0 0 / .16); }
  .f-reading-tools-panel { display: grid; gap: 14px; }
  .f-case-sources-panel .f-asset-bar { margin: 0; display: grid; gap: 10px; }
  .f-case-sources-panel .f-asset-btn-group { margin: 0; }
  .f-case-sources-panel .f-asset-btn { flex: 1; }
  @media (max-width: 720px) {
    .f-work-results { width: 100%; justify-content: space-between; }
    .f-work-controls { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); width: 100%; gap: 8px; }
    .f-work-select, .f-work-select:last-child { width: auto; }
    .f-work-select:last-child { grid-column: 1 / -1; }
    .f-work-select select { font-size: 16px; }
    .f-work-story { display: flow-root; padding: 18px 0; }
    .f-work-art { float: right; width: 104px; margin: 3px 0 10px 14px; }
    .f-work-story-heading { min-height: 60px; }
    .f-work-hook { font-size: 19px; }
    .f-work-teaser { clear: both; font-size: 16px; line-height: 1.4; }
    .f-work-story-meta { padding-right: 30px; margin-top: 9px; }
    .f-work-save { top: auto; bottom: 9px; }
    .f-case-brief dl { grid-template-columns: 1fr; gap: 18px; }
    .f-case-brief { padding: 18px; }
  }
  @media (max-width: 360px) {
    .f-work-select > span { display: none; }
    .f-work-select select { padding-left: 8px; }
  }

  /* Shared editorial case reader */

  .f-case-hero { padding: 24px 0 8px; }

  .f-case-hero h1 {
    max-width: 1040px;
    margin: 0;
    font: 600 26px/1.35 var(--font-display);
    letter-spacing: -.02em;
    color: var(--navy);
    overflow-wrap: break-word;
    text-wrap: pretty;
  }

  .f-case-dek {
    max-width: 960px; margin: 10px 0 0;
    font: 400 18px/1.55 var(--font-serif);
    color: var(--ink-secondary);
  }

  .f-case-meta-grid {
    display: grid; grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 18px; margin: 0; padding: 14px 0 0;
  }

  .f-meta-cell { min-width: 0; }

  .f-meta-cell dt { font: 500 11px/1.5 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }

  .f-meta-cell dd { margin: 0; font: 400 13px/1.6 var(--font-sans); color: var(--ink-secondary); overflow-wrap: anywhere; }

  .f-case-reading { display: grid; grid-template-columns: 208px minmax(0, 760px); gap: 40px; padding: 20px 0 72px; align-items: start; }

  .f-case-rail { position: sticky; top: 100px; max-height: calc(100dvh - 124px); overflow-y: auto; scrollbar-width: thin; padding-right: 14px; }

  .f-rail-title { margin-bottom: 16px; font: 600 12px/1.5 var(--font-sans); color: var(--navy); }

  .f-toc-list, .f-mobile-toc-list { list-style: none; padding: 0; margin: 0; }

  .f-toc-list { border-left: 1px solid var(--line); }

  .f-toc-item { margin: 0; padding: 0; }

  .f-toc-link { display: block; padding: 6px 0 6px 14px; border-left: 2px solid transparent; margin-left: -1px; font: 400 12px/1.6 var(--font-sans); color: var(--ink-secondary); text-decoration: none; }

  .f-toc-item.level-3 .f-toc-link { padding-left: 24px; font-size: 11px; }

  .f-toc-link:hover { color: var(--copper); }

  .f-toc-link.is-active { color: var(--copper); border-left-color: var(--copper); }

  .f-rail-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 14px; margin-top: 22px; padding-top: 20px; border-top: 1px solid var(--line); }

  .f-rail-btn { padding: 0; border: 0; background: transparent; font: 400 12px/1.5 var(--font-sans); color: var(--copper); cursor: pointer; text-decoration: none; }

  .f-rail-btn:hover { text-decoration: underline; text-underline-offset: 4px; }

  .f-case-action-left, .f-case-action-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

  .f-action-pill { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 36px; padding: 6px 10px; border: 1px solid var(--line); background: transparent; border-radius: 4px; font: 400 12px/1.5 var(--font-sans); color: var(--ink-secondary); cursor: pointer; }

  .f-action-pill:hover:not(:disabled) { color: var(--copper); border-color: var(--copper); }

  .f-action-pill.is-saved { color: var(--copper); border-color: var(--copper); }

  .f-action-pill:disabled { opacity: .4; cursor: default; }

  .f-reading-size { min-width: 36px; text-align: center; font: 400 11px/1.5 var(--font-sans); color: var(--muted); }

  .f-mobile-toc { display: none; }

  .f-mobile-toc-list { position: absolute; left: 0; top: calc(100% + 6px); z-index: 25; width: min(400px,100%); padding: 16px; max-height: 55dvh; overflow-y: auto; border: 1px solid var(--line); border-radius: 4px; background: var(--paper-card); box-shadow: 0 10px 24px rgb(0 0 0 / .16); }

  .f-mobile-toc-list .f-toc-link { font-size: 13px; padding-top: 8px; padding-bottom: 8px; }

  .f-mobile-toc-list .f-toc-item.level-3 .f-toc-link { font-size: 12px; }

  /* Article type and evidence components */

  .f-prose { min-width: 0; color: var(--ink); overflow-wrap: anywhere; --reading-size: 18px; }

  .f-prose p { margin: 0 0 22px; font: 400 var(--reading-size)/1.8 var(--font-serif); }

  .f-prose h1, .f-prose h2 { position: relative; margin: 36px 0 16px; font: 600 clamp(1.375rem,2.2vw,1.625rem)/1.35 var(--font-display); letter-spacing: -.015em; color: var(--navy); text-wrap: pretty; }

  .f-prose h3 { position: relative; margin: 28px 0 12px; font: 600 clamp(1.125rem,2vw,1.375rem)/1.35 var(--font-display); color: var(--navy); }

  .f-prose h4 { margin: 26px 0 12px; font: 600 18px/1.4 var(--font-display); color: var(--navy); }
  .f-prose, .f-prose :is(h1,h2,h3,h4) { scroll-margin-top: 104px; }

  .f-prose strong { font-weight: 600; color: var(--navy); }

  .f-prose em { font-style: italic; }

  .f-anchor { position: absolute; left: -24px; width: 22px; color: var(--copper); font: 400 .7em/1.8 var(--font-sans); text-decoration: none; opacity: 0; }

  .f-prose :is(h1,h2,h3,h4):hover .f-anchor,.f-anchor:focus-visible { opacity: 1; }

  .f-inline-link { color: var(--copper); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; }

  .f-inline-link:hover { color: var(--copper-dark); }

  .f-code { font: 400 .85em/1.5 var(--font-mono); background: var(--paper-tint); padding: 2px 5px; border-radius: 3px; color: var(--navy); }

  .f-code-block { margin: 28px 0; padding: 20px; background: var(--paper-tint); border: 1px solid var(--line); font: 400 13px/1.7 var(--font-mono); color: var(--ink); overflow-x: auto; }

  .f-code-block code { font: inherit; background: transparent; padding: 0; color: inherit; }

  .f-list, .f-numbered-list { margin: 18px 0 28px; padding-left: 24px; }

  .f-list li, .f-numbered-list li { margin-bottom: 10px; font: 400 var(--reading-size)/1.8 var(--font-serif); }

  .f-list li::marker, .f-numbered-list li::marker { color: var(--copper); }

  .f-prose blockquote { margin: 26px 0; padding: 8px 0 8px 22px; border-left: 2px solid var(--copper); font: 400 var(--reading-size)/1.8 var(--font-serif); color: var(--ink-secondary); }

  .f-prose blockquote + blockquote { margin-top: -14px; }
  .f-prose > :first-child { margin-top: 0; }

  .f-prose hr.f-hr { height: 1px; margin: 42px 0; border: 0; background: var(--line); }

  .f-prose hr.f-hr + :is(h1,h2) { margin-top: 0; }

  .f-callout { margin: 28px 0; padding: 22px 24px; background: var(--paper-tint); border-left: 2px solid var(--copper); font: 400 var(--reading-size)/1.8 var(--font-serif); }

  .f-callout p:last-child { margin-bottom: 0; }

  .f-table-wrap { max-width: 100%; overflow-x: auto; overscroll-behavior-x: contain; margin: 28px 0; border: 1px solid var(--line); scrollbar-width: thin; }
  .f-prose .f-table-hint { margin: 28px 0 -16px; font: 400 12px/1.5 var(--font-sans); color: var(--copper); }

  .f-table { width: 100%; border-collapse: collapse; font: 400 14px/1.65 var(--font-sans); }

  .f-table th { min-width: 9rem; padding: 14px 16px; background: var(--paper-tint); color: var(--navy); font-weight: 600; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); }

  .f-table td { min-width: 9rem; padding: 14px 16px; vertical-align: top; border-bottom: 1px solid var(--line); }

  .f-table tr:last-child td { border-bottom: 0; }

  .f-table tr:nth-child(even) td { background: color-mix(in srgb, var(--paper-tint) 40%, transparent); }

  .f-details { margin: 26px 0; padding: 18px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

  .f-details summary { font: 600 16px/1.6 var(--font-sans); color: var(--navy); cursor: pointer; }

  .f-details-content { margin-top: 20px; }

  .f-asset-bar { display: flex; flex-wrap: wrap; gap: 10px; align-items: stretch; margin: 24px 0 30px; }

  .f-asset-btn-group { display: inline-flex; max-width: 100%; min-width: 0; margin: 4px 0; border: 1px solid var(--line); border-radius: 4px; overflow: hidden; }

  .f-asset-btn { display: inline-flex; align-items: center; gap: 8px; min-width: 0; min-height: 44px; max-width: 100%; padding: 10px 14px; border: 0; background: var(--paper-tint); font: 500 13px/1.6 var(--font-sans); color: var(--copper); text-align: left; text-decoration: none; cursor: pointer; white-space: normal; overflow-wrap: anywhere; }

  .f-asset-btn:hover { background: var(--line); color: var(--copper-dark); }
  .f-asset-format { flex-shrink: 0; padding: 2px 5px; border: 1px solid var(--line); border-radius: 3px; font: 500 10px/1.5 var(--font-sans); color: var(--ink-secondary); }

  .f-asset-ext-btn { display: inline-flex; align-items: center; justify-content: center; flex: 0 0 44px; min-height: 44px; border-left: 1px solid var(--line); background: transparent; font: 400 17px/1.5 var(--font-sans); color: var(--copper); text-decoration: none; }

  .f-asset-ext-btn:hover { background: var(--paper-tint); }

  .f-diagram-card { margin: 32px 0; border: 1px solid var(--line); background: var(--paper-card); }

  .f-diagram-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); font: 500 12px/1.6 var(--font-sans); color: var(--ink-secondary); }

  .f-diagram-title { flex: 1 1 180px; min-width: 0; overflow-wrap: anywhere; }

  .f-diagram-header-actions { display: flex; align-items: center; gap: 8px; }

  .f-diagram-open-btn, .f-diagram-ext-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 36px; padding: 6px 10px; border: 1px solid var(--line); background: transparent; color: var(--copper); font: 400 12px/1.5 var(--font-sans); cursor: pointer; text-decoration: none; }

  .f-diagram-open-btn:hover, .f-diagram-ext-btn:hover { border-color: var(--copper); }

  .f-diagram-body { display: flex; flex-direction: column; align-items: center; padding: 12px; cursor: zoom-in; }

  .f-diagram-body img { display: block; max-width: 100%; height: auto; margin: 0 auto; }
  .f-diagram-body img[hidden] { display: none; }

  .f-diagram-zoom-hint { margin-top: 12px; font: 400 11px/1.5 var(--font-sans); color: var(--muted); }

  .f-diagram-caption { padding: 12px 16px; border-top: 1px solid var(--line); font: 400 12px/1.65 var(--font-sans); color: var(--ink-secondary); }

  /* Continue reading */

  .f-related-section { margin-top: 64px; padding-top: 28px; border-top: 1px solid var(--line); }

  .f-related-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; align-items: baseline; margin-bottom: 22px; }

  .f-related-eyebrow { font: 800 22px/1.3 var(--font-display); color: var(--navy); }

  .f-related-hint { font: 400 11px/1.6 var(--font-sans); color: var(--muted); }

  .f-related-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }

  .f-related-card { display: flex; flex-direction: column; color: inherit; text-decoration: none; }

  .f-related-card-top { display: flex; flex-wrap: wrap; gap: 8px 16px; margin-bottom: 10px; font: 400 11px/1.6 var(--font-sans); color: var(--muted); }

  .f-related-card h4 { margin: 0 0 12px; font: 800 21px/1.3 var(--font-display); color: var(--navy); }

  .f-related-card:hover h4 { color: var(--copper); }

  .f-prose .f-related-question { margin: 0 0 18px; font: 400 14px/1.7 var(--font-sans); color: var(--ink-secondary); flex: 1; }

  .f-related-foot { align-self: flex-start; font: 400 12px/1.5 var(--font-sans); color: var(--copper); border-bottom: 1px solid var(--line); padding-bottom: 4px; }

  @media (max-width: 1040px) {
    .f-case-reading { grid-template-columns: 176px minmax(0, 1fr); gap: 40px; }
  }

  @media (max-width: 920px) {
    .f-case-reading { display: block; max-width: 760px; }
    .f-case-rail { display: none; }
    .f-mobile-toc { display: block; }
  }

  @media (max-width: 640px) {
    .f-case-hero { padding: 20px 0 8px; }
    .f-case-hero h1 { font-size: 22px; }
    .f-case-dek { margin-top: 10px; font-size: 16px; }
    .f-case-toolbar { gap: 8px; }
    .f-case-toolbar > details > summary { padding-inline: 2px; }
    .f-read-label, .f-reading-tools-label { display: none; }
    .f-reading-tools-short { display: inline; }
    .f-case-meta-grid { grid-template-columns: 1fr; }
    .f-meta-cell dt { font-size: 10px; }
    .f-meta-cell dd { font-size: 12px; }
    .f-case-reading { padding: 18px 0 48px; }
    .f-prose { --reading-size: 16px; }
    .f-action-pill { min-height: 40px; }
    .f-prose blockquote { padding-left: 16px; }
    .f-callout { padding: 18px; }
    .f-table :is(th,td) { min-width: 12rem; }
    .f-related-grid { grid-template-columns: 1fr; gap: 26px; }
    .f-related-card + .f-related-card { padding-top: 22px; border-top: 1px solid var(--line); }
  }

  /* ========================================================================
     15. BACK TO TOP, TOAST & MOBILE TOC
     ======================================================================== */

  .f-toast {
    position: fixed;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--navy);
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 6px;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: var(--fw-bold);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.15);
    z-index: 1100;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }
  .f-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* ========================================================================
     16. ASSET MODAL VIEWER
     ======================================================================== */
  dialog.f-asset-modal {
    width: min(92vw, 1120px);
    height: min(86vh, 820px);
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--paper-card);
    color: var(--ink);
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.5);
    display: none;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: 1000;
  }
  dialog.f-asset-modal[open] {
    display: flex;
    animation: f-modal-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes f-modal-in {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
  }
  dialog.f-asset-modal::backdrop {
    background: rgba(10, 18, 26, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  dialog.f-asset-modal.is-fullscreen {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    border: 0;
  }
  dialog.f-asset-modal.is-image-mode { background: #05090f; }
  dialog.f-asset-modal.is-image-mode .f-modal-topbar { display: none; }
  .f-modal-topbar {
    height: 52px;
    min-height: 52px;
    padding: 0 14px 0 18px;
    background: var(--paper-tint);
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
  }
  .f-modal-title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    flex: 1;
    overflow: hidden;
  }
  .f-modal-badge {
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(194, 94, 46, 0.15);
    color: var(--copper);
    border: 1px solid rgba(194, 94, 46, 0.3);
    font-family: var(--font-mono);
    font-size: var(--text-2xs);
    font-weight: var(--fw-bold);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    flex-shrink: 0;
  }
  :root[data-theme="dark"] .f-modal-badge {
    background: rgba(224, 122, 72, 0.25);
    color: #e07a48;
    border-color: rgba(224, 122, 72, 0.45);
  }
  .f-modal-title {
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: var(--fw-bold);
    color: var(--navy);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .f-modal-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  .f-modal-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: var(--paper-card);
    border: 1px solid var(--line);
    border-radius: 6px;
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .f-modal-btn:hover {
    background: var(--paper);
    color: var(--copper);
    border-color: var(--copper);
  }
  .f-modal-btn.close {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border-color: rgba(239, 68, 68, 0.25);
  }
  .f-modal-btn.close:hover {
    background: #ef4444;
    color: #ffffff;
    border-color: #ef4444;
  }
  .f-modal-img-close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0,0,0,0.65);
    border: 1px solid rgba(255,255,255,0.3);
    color: #ffffff;
    font-size: 16px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background 0.15s ease;
    backdrop-filter: blur(4px);
  }
  .f-modal-img-close:hover { background: rgba(220, 38, 38, 0.85); }
  dialog.f-asset-modal.is-image-mode .f-modal-img-close { display: flex; }
  .f-modal-content {
    flex: 1;
    position: relative;
    background: var(--paper);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .f-modal-frame { width: 100%; height: 100%; border: 0; background: var(--paper-card); }
  .f-modal-img { max-width: 100%; max-height: 100%; object-fit: contain; cursor: zoom-in; }
  .f-modal-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: var(--muted);
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    pointer-events: none;
  }
  .f-spin-circle {
    width: 28px;
    height: 28px;
    border: 3px solid var(--line);
    border-top-color: var(--copper);
    border-radius: 50%;
    animation: f-spin 0.8s linear infinite;
  }
  @keyframes f-spin { to { transform: rotate(360deg); } }

  /* Shared editorial sections align with the thumbnail column in Work. */
  .f-editorial-section { display: grid; grid-template-columns: minmax(190px,27%) minmax(0,1fr); align-items: start; gap: 30px; padding-block: 32px; border-top: 1px solid var(--line); }
  .f-editorial-section-head { min-width: 0; }
  .f-editorial-section-head h2 { margin: 0 0 12px; color: var(--navy); font: 600 20px/1.35 var(--font-display); letter-spacing: -.02em; text-wrap: pretty; }
  .f-editorial-kicker, .f-manifesto-kicker { display: block; margin-bottom: 10px; color: var(--copper); font: 500 11px/1.6 var(--font-sans); }
  .f-editorial-caption, .f-editorial-section-head > span:not(.f-editorial-kicker) { color: var(--muted); font: 400 12px/1.7 var(--font-sans); }
  .f-editorial-copy { min-width: 0; color: var(--ink-secondary); font: 400 17px/1.65 var(--font-serif); }
  .f-editorial-copy > p { margin: 0 0 18px; }
  .f-editorial-copy > p:last-child { margin-bottom: 0; }
  .f-editorial-copy strong { color: var(--ink); font-weight: 600; }
  .f-about-intro { padding-block: 36px 28px; }
  .f-about-intro > .f-wrap { display: grid; grid-template-columns: 1fr 1.55fr; align-items: start; gap: 0 48px; }
  .f-about-intro h1 { grid-row: 1 / 3; margin: 0; color: var(--navy); font: 600 clamp(28px,2.7vw,32px)/1.3 var(--font-display); letter-spacing: -.025em; text-wrap: pretty; }
  .f-about-intro h1 em { display: inline-block; margin-top: 14px; color: var(--ink-secondary); font-style: normal; }
  .f-about-dek { grid-column: 2; margin: 0 0 18px; color: var(--ink-secondary); font: 400 18px/1.65 var(--font-serif); }
  .f-about-dek strong { color: var(--ink); font-weight: 600; }
  .f-about-coordinates { grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 8px 24px; margin-top: 10px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--ink-secondary); font: 400 12px/1.7 var(--font-sans); }
  .f-about-coordinate strong { margin-right: 4px; color: var(--muted); font-size: 10px; font-weight: 400; letter-spacing: .04em; }
  .f-about-contact { grid-column: 1 / -1; display: flex; flex-wrap: wrap; align-items: center; gap: 0 28px; margin-top: 10px; }
  .f-about-contact .f-editorial-link { display: block; padding-block: 11px; }
  .f-about-fact { display: grid; grid-template-columns: minmax(190px,27%) minmax(0,1fr); align-items: start; gap: 30px; padding-block: 20px; border-top: 1px solid var(--line); }
  .f-about-measure { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 10px; }
  .f-about-number { color: var(--navy); font: 600 28px/1.2 var(--font-display); letter-spacing: -.025em; }
  .f-about-unit { color: var(--copper); font: 400 12px/1.5 var(--font-sans); }
  .f-about-fact-copy h3 { margin: 0 0 6px; color: var(--navy); font: 600 18px/1.4 var(--font-display); letter-spacing: -.015em; }
  .f-about-fact-copy p { max-width: 72ch; margin: 0; color: var(--ink-secondary); font: 400 17px/1.55 var(--font-serif); }
  .f-about-experience { margin-top: 12px; }
  .f-about-highlights { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; margin-top: 24px; }
  .f-about-example { padding-top: 14px; border-top: 1px solid var(--line); font: 400 16px/1.6 var(--font-serif); }
  .f-about-example strong { display: block; margin-bottom: 8px; color: var(--navy); font: 500 12px/1.6 var(--font-sans); }
  .f-about-manifesto { max-width: 800px; margin: 20px 0 40px auto; padding-left: 24px; border-left: 2px solid var(--copper); }
  .f-about-manifesto blockquote { margin: 0 0 12px; color: var(--navy); font: italic 400 23px/1.5 var(--font-serif); }
  .f-manifesto-author { color: var(--muted); font: 400 12px/1.6 var(--font-sans); }
  .f-about-skills { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px; }
  .f-about-skill h3 { margin: 0 0 12px; color: var(--navy); font: 600 16px/1.5 var(--font-display); }
  .f-about-skill-list { display: grid; gap: 8px; list-style: none; padding: 0; margin: 0; color: var(--ink-secondary); font: 400 16px/1.5 var(--font-serif); }
  .f-about-outro { margin-bottom: 24px; }
  .f-document-link { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 10px 16px; border: 1px solid var(--line); border-radius: 4px; color: var(--ink-secondary); font: 400 13px/1.6 var(--font-sans); text-decoration: none; }
  .f-document-link:hover { color: var(--copper); border-color: var(--copper); }
  @media (max-width: 1040px) {
    .f-about-intro > .f-wrap { column-gap: 30px; }
    .f-about-highlights { grid-template-columns: 1fr; gap: 20px; }
    .f-about-capabilities { grid-template-columns: 1fr; gap: 20px; }
  }
  @media (max-width: 760px) {
    .f-about-intro > .f-wrap { display: block; }
    .f-about-intro h1 { max-width: 24ch; margin-bottom: 24px; font-size: 28px; }
    .f-about-intro h1 em { margin-top: 10px; }
    .f-about-dek { font-size: 17px; }
    .f-about-coordinates { margin-top: 24px; gap: 8px 18px; }
    .f-editorial-section { grid-template-columns: 1fr; gap: 16px; padding-block: 26px; }
    .f-editorial-section-head h2 { max-width: 32ch; font-size: 20px; margin-bottom: 8px; }
    .f-editorial-copy { font-size: 17px; }
    .f-about-fact { grid-template-columns: 88px minmax(0,1fr); gap: 16px; padding-block: 18px; }
    .f-about-measure { display: block; }
    .f-about-number { display: block; margin-bottom: 4px; font-size: 24px; }
    .f-about-unit { display: block; font-size: 11px; }
    .f-about-fact-copy h3 { font-size: 16px; }
    .f-about-fact-copy p { font-size: 16px; }
    .f-about-manifesto { margin-block: 16px 32px; padding-left: 18px; }
    .f-about-manifesto blockquote { font-size: 21px; }
    .f-about-skills { grid-template-columns: 1fr; gap: 24px; }
    .f-about-outro { margin-bottom: 12px; }
  }
  /* ========================================================================
     18. CAT-IN-TAB COMPANION
     ======================================================================== */
  .f-cat-in-tab-dock {
    position: fixed;
    right: 24px;
    bottom: 18px;
    z-index: 999;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), right 0.35s ease, left 0.35s ease;
  }
  .f-cat-in-tab-dock:hover {
    transform: scale(1.12) translateY(-3px);
  }
  .f-cat-in-tab-dock.petted {
    animation: f-cat-jump 0.35s ease;
  }
  @keyframes f-cat-jump {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-12px) scale(1.2); }
  }

  .f-tab-cat-svg {
    width: 44px;
    height: 44px;
    display: block;
    image-rendering: pixelated;
    shape-rendering: crispEdges;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.18));
    transition: transform 0.2s ease;
  }
  .f-c-tail {
    transform-origin: 23px 18px;
    animation: f-c-wag 2s ease-in-out infinite alternate;
  }
  @keyframes f-c-wag {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-14deg); }
    100% { transform: rotate(10deg); }
  }
  .f-c-eye {
    animation: f-c-blink 3.8s infinite;
  }
  @keyframes f-c-blink {
    0%, 95%, 100% { transform: scaleY(1); }
    97% { transform: scaleY(0.1); transform-origin: 10px 13px; }
  }

  .f-tab-cat-bubble {
    position: absolute;
    right: 50px;
    bottom: 14px;
    background: var(--paper-card);
    border: 2px solid var(--navy);
    border-radius: 8px;
    padding: 6px 12px;
    font-family: var(--font-sans);
    font-size: var(--text-xs);
    font-weight: var(--fw-bold);
    color: var(--navy);
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(17, 34, 44, 0.15);
    opacity: 0;
    transform: translateY(6px) scale(0.95);
    pointer-events: none;
    transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .f-tab-cat-bubble:after {
    content: "";
    position: absolute;
    right: -6px;
    bottom: 10px;
    width: 8px;
    height: 8px;
    background: var(--paper-card);
    border-right: 2px solid var(--navy);
    border-top: 2px solid var(--navy);
    transform: rotate(45deg);
  }
  .f-tab-cat-bubble.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .f-cat-in-tab-dock.is-left {
    right: auto;
    left: 24px;
  }
  .f-cat-in-tab-dock.is-left .f-tab-cat-svg {
    transform: scaleX(-1);
  }
  .f-cat-in-tab-dock.is-left .f-tab-cat-bubble {
    right: auto;
    left: 50px;
  }
  .f-cat-in-tab-dock.is-left .f-tab-cat-bubble:after {
    right: auto;
    left: -6px;
    border-right: 0;
    border-top: 0;
    border-left: 2px solid var(--navy);
    border-bottom: 2px solid var(--navy);
  }

  @media (max-width: 640px) {
    .f-cat-in-tab-dock, .f-cat-in-tab-dock.is-left {
      position: relative;
      right: auto;
      left: auto;
      bottom: auto;
      width: 44px;
      margin: 16px 24px 16px auto;
    }
    .f-cat-in-tab-dock.is-left { margin: 16px auto 16px 24px; }
  }

  /* ========================================================================
     19. FOOTER
     ======================================================================== */
  .f-footer {
    border-top: 1px solid var(--line);
    padding: 22px 0 32px;
    font-size: var(--text-xs);
    color: var(--muted);
    letter-spacing: 0;
    font-family: var(--font-sans);
  }
  .f-footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
  .f-footer-row a { text-decoration: underline; text-underline-offset: 4px; }

  /* ========================================================================
     20. PRINT STYLES
     ======================================================================== */

  /* ========================================================================
     UNIVERSAL COMMAND PALETTE (CTRL+K / CMD+K)
     ======================================================================== */

  dialog.f-cmd-dialog {
    width: min(92vw, 620px);
    max-height: min(82vh, 560px);
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--paper-card);
    color: var(--ink);
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--line);
    display: none;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: 1200;
    font-family: var(--font-sans);
  }
  dialog.f-cmd-dialog[open] {
    display: flex;
    animation: f-cmd-in 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes f-cmd-in {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
  }
  dialog.f-cmd-dialog::backdrop {
    background: rgba(10, 18, 26, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .f-cmd-top {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border-bottom: 1px solid var(--line);
    background: var(--paper-tint);
  }
  .f-cmd-icon {
    font-size: 16px;
    color: var(--copper);
  }
  .f-cmd-input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    font-family: var(--font-sans);
    font-size: var(--text-md);
    color: var(--ink);
    outline: none;
    padding: 0;
  }
  .f-cmd-input::placeholder {
    color: var(--muted);
    font-size: var(--text-sm);
  }
  .f-cmd-esc {
    font-family: var(--font-mono);
    font-size: var(--text-2xs);
    color: var(--muted);
    background: var(--paper-card);
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid var(--line);
    cursor: pointer;
    min-width: 30px;
    min-height: 30px;
  }
  .f-cmd-results {
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 400px;
  }
  .f-cmd-section-label {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
    color: var(--muted);
    padding: 8px 12px 4px;
  }
  .f-cmd-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 6px;
    text-decoration: none;
    color: var(--ink);
    cursor: pointer;
    transition: all 0.12s ease;
  }
  .f-cmd-item:hover, .f-cmd-item.is-selected {
    background: var(--paper-tint);
    color: var(--copper);
  }
  .f-cmd-item-left {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }
  .f-cmd-item-icon {
    font-size: 14px;
    opacity: 0.8;
  }
  .f-cmd-item-title {
    font-size: var(--text-sm);
    font-weight: var(--fw-semibold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .f-cmd-item-badge {
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--paper-card);
    border: 1px solid var(--line);
    color: var(--muted);
    flex-shrink: 0;
  }
  .f-cmd-empty {
    padding: 32px 16px;
    text-align: center;
    color: var(--muted);
    font-size: var(--text-sm);
  }
  .f-cmd-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 18px;
    border-top: 1px solid var(--line);
    background: var(--paper-tint);
    font-family: var(--font-mono);
    font-size: var(--text-2xs);
    color: var(--muted);
  }
  .f-cmd-footer span { display: flex; align-items: center; gap: 4px; }
  .f-cmd-footer kbd {
    background: var(--paper-card);
    padding: 1px 4px;
    border-radius: 3px;
    border: 1px solid var(--line);
  }

  /* ========================================================================
     EXECUTIVE IMPACT DASHBOARD ON ABOUT PAGE
     ======================================================================== */

  @media print {
    body {
      background: #ffffff !important;
      color: #111b20 !important;
      font-size: 11pt !important;
      line-height: 1.5 !important;
    }
    .f-header, .f-footer, .f-case-rail, .f-case-toolbar, .f-cat-in-tab-dock, dialog, .f-skip, #f-progress-bar, .f-related-section, .f-toast-msg {
      display: none !important;
    }
    .f-case-reading {
      display: block !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .f-case-hero {
      border-bottom: 2pt solid #14222c !important;
      padding: 24pt 0 16pt !important;
      background: none !important;
    }
    .f-case-hero:after { display: none !important; }
    .f-case-hero h1 {
      color: #14222c !important;
      font-size: 24pt !important;
    }
    .f-case-dek {
      color: #334149 !important;
      font-size: 12pt !important;
    }
    .f-case-meta {
      border: 1pt solid #ccc !important;
      background: #fbf9f5 !important;
      margin-bottom: 20pt !important;
    }
    .f-meta-cell span { color: #14222c !important; }
    .f-prose { color: #111b20 !important; }
    .f-prose h2 {
      color: #14222c !important;
      page-break-after: avoid;
      border-bottom: 1pt solid #ccc !important;
    }
    .f-prose blockquote {
      border-left: 3pt solid #c25e2e !important;
      background: #fdfaf7 !important;
      color: #111b20 !important;
      page-break-inside: avoid;
    }
    .f-table-wrap { border: 1pt solid #ccc !important; page-break-inside: avoid; }
    .f-table th { background: #f0ece1 !important; color: #14222c !important; }
    .f-anchor { display: none !important; }
  }

  /* ========================================================================
     21. RESPONSIVE BREAKPOINTS
     ======================================================================== */
  @media (max-width: 640px) {
    .f-wrap { width: min(calc(100% - 40px), 1120px); }
    .f-footer-row { flex-direction: column; align-items: flex-start; gap: 12px; }
    .f-tab-cat-bubble { max-width: calc(100vw - 108px); white-space: normal; }
  }

`;
