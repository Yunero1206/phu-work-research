// Shared portfolio styles. Each page component has one canonical definition.
export const siteCss = String.raw`:root {
    /* ========================================================================
       1. UNIFIED TYPOGRAPHY DESIGN TOKENS
       ======================================================================== */
    /* Font Families */

    /* Backward-compatibility Aliases */
    --serif: var(--font-display);
    --sans: var(--font-sans);
    --mono: var(--font-mono);

    /* Modular Fluid Type Scale */
    --text-2xs: 0.6875rem; /* 11px - Micro badges, kbd hints, zoom hints */
    --text-xs:  0.75rem;   /* 12px - Meta dates, tags, pills, overlines */
    --text-sm:  0.875rem;  /* 14px - Nav links, UI buttons, table text, rail */
    --text-base: 1rem;     /* 16px - Base body text, inputs, form controls */
    --text-md:  1.0625rem; /* 17px - Intro ledes, sub-paragraphs, cards */
    --text-lg:  1.156rem;  /* 18.5px - Monograph editorial prose, blockquotes */
    --text-xl:  1.25rem;   /* 20px - Card titles, h4, route headers */
    --text-2xl: 1.5rem;    /* 24px - Section heads, h3, modal titles */
    --text-3xl: clamp(1.75rem, 2.7vw, 2.25rem); /* Subsection hero, h2 */
    --text-4xl: clamp(2.25rem, 4.2vw, 3.2rem);  /* Page titles, case hero h1 */
    --text-display: clamp(2.8rem, 5.5vw, 4.8rem); /* Large home hero headline */

    /* Font Weights */
    --fw-regular:   400;
    --fw-medium:    500;
    --fw-semibold:  600;
    --fw-bold:      700;
    --fw-extrabold: 800;

    /* Line Heights */
    --lh-tight:   1.15;
    --lh-snug:    1.3;
    --lh-normal:  1.5;
    --lh-relaxed: 1.65;
    --lh-prose:   1.75;

    /* Letter Spacing */
    --tracking-tighter: -0.03em;
    --tracking-tight:   -0.015em;
    --tracking-normal:  0;
    --tracking-wide:    0.04em;
    --tracking-wider:   0.08em;
    --tracking-widest:  0.1em;

    /* ========================================================================
       2. UNIFIED SEMANTIC COLOR SYSTEM (LIGHT / DARK / SEPIA)
       ======================================================================== */
    --paper: #fcfbf8;
    --paper-card: #ffffff;
    --paper-tint: #f4efe6;
    --header-bg: rgba(250, 248, 245, 0.96);
    --hero-bg: #14222c;
    --hero-text: #f7f4ec;
    --ink: #172b45;
    --ink-secondary: #586b84;
    --muted: #65738a;
    --line: #e7dfd4;
    --line-subtle: rgba(20, 28, 34, 0.08);
    --copper: #b84f2d;
    --copper-dark: #9e4318;
    --navy: #0b2348;
    --navy-soft: #1c3540;
    --mist: #dfe9e8;
    --accent: #b84a2f;
    --emerald: #15803d;
    --sky: #0284c7;
    --amber: #b45309;

    color-scheme: light;
  }

  /* DARK FORENSIC THEME OVERRIDES */
  :root[data-theme="dark"] {
    --paper: #0e161c;
    --paper-card: #15222b;
    --paper-tint: #1b2a36;
    --header-bg: rgba(12, 20, 26, 0.96);
    --hero-bg: #070d12;
    --hero-text: #f0f6fc;
    --ink: #e6edf3;
    --ink-secondary: #9db2c2;
    --muted: #768a9b;
    --line: #223746;
    --line-subtle: rgba(255, 255, 255, 0.08);
    --copper: #e07a48;
    --copper-dark: #f09568;
    --navy: #f0f6fc;
    --navy-soft: #cbd5e1;
    --mist: #172d3a;
    --accent: #e56b4f;
    --emerald: #34d399;
    --sky: #38bdf8;
    --amber: #fbbf24;
    color-scheme: dark;
  }

  /* WARM SEPIA READING THEME OVERRIDES */

  /* Live Pulse Beacon & Nav Indicator */

  /* Theme Switcher in Nav */

  /* ========================================================================
     THEME ACCENT & BADGE ADAPTATION
     ======================================================================== */

  /* Mockup Visual Window */
  .dot-red { background: #ef4444; }
  .dot-yellow { background: #f59e0b; }
  .dot-green { background: #10b981; }
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
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: var(--lh-relaxed);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  }
  a { color: inherit; }
  button, input, select { font-family: var(--font-sans); }
  :focus-visible { outline: 2px solid var(--copper); outline-offset: 4px; }

  /* Modern Typography Enhancements */
  h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
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
  .f-links a { font-size: 14px; font-weight: 400; color: var(--ink-secondary); text-decoration: none; transition: color 150ms ease; }
  .f-links a:hover, .f-links a[aria-current="page"] { color: var(--copper); }
  .f-links a[aria-current="page"] { text-decoration: underline; text-underline-offset: 6px; }
  .f-theme-toggle { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 0; border-left: 1px solid var(--line); border-radius: 0; margin-left: 4px; background: transparent; color: var(--copper); cursor: pointer; }
  .f-theme-toggle svg { width: 24px; height: 24px; }
  /* Homepage — identity, selected work, approach, operating proof. */
  .f-home-hero { display: grid; grid-template-columns: 1fr 1.12fr; align-items: center; gap: 48px; padding-block: 32px; }
  .f-home-identity { min-width: 0; }
.f-home-identity h1 { margin: 20px 0 0; font-family: var(--font-display); font-size: clamp(30px, 3.4vw, 40px); font-weight: 800; line-height: 1.18; letter-spacing: -.025em; color: var(--navy); }
.f-home-role { margin: 0; font-size: 13px; line-height: 1.7; color: var(--ink-secondary); }
.f-home-intent { margin: 24px 0 0; max-width: 52ch; font-size: 17px; line-height: 1.7; color: var(--ink-secondary); }
.f-home-photo { margin: 0 -64px 0 0; min-width: 0; }
.f-home-photo img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; object-fit: cover; }
  .f-home-selected { padding-top: 0; scroll-margin-top: 96px; }
  .f-home-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 24px; margin-bottom: 20px; }
  .f-home-section-head h2, .f-home-approach h2 { margin: 0; font-family: var(--font-display); font-size: clamp(28px, 3.2vw, 36px); font-weight: 800; line-height: 1.2; letter-spacing: -.035em; color: var(--navy); }
  .f-editorial-link { display: inline-flex; align-items: center; gap: 12px; padding-bottom: 3px; border-bottom: 1px solid currentColor; font-size: 15px; line-height: 1.5; text-decoration: none; color: var(--copper); }
  .f-editorial-link:hover { color: var(--copper-dark); }
  .f-home-feature { display: grid; grid-template-columns: 1.45fr 1fr; align-items: center; gap: 32px; padding-bottom: 24px; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; }
.f-home-feature-image { display: block; width: 100%; height: auto; min-width: 0; aspect-ratio: 2.2 / 1; object-fit: cover; object-position: center 80%; }
  .f-home-work-copy { min-width: 0; }
  .f-home-category { display: block; margin-bottom: 12px; font-size: 10px; line-height: 1.5; font-weight: 600; text-transform: uppercase; letter-spacing: .15em; color: var(--muted); }
  .f-home-feature .f-home-category { color: var(--copper); }
  .f-home-feature h3 { margin: 0 0 12px; font-family: var(--font-display); font-size: clamp(30px, 3.5vw, 40px); line-height: 1.15; font-weight: 800; letter-spacing: -.035em; color: var(--navy); }
  .f-home-feature p { margin: 0 0 20px; max-width: 32ch; font-size: 17px; line-height: 1.65; color: var(--ink-secondary); }
  .f-home-feature:hover h3, .f-home-work-row:hover h3 { color: var(--copper); }
  .f-home-work-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 24px; }
  .f-home-work-row { display: grid; grid-template-columns: 120px minmax(0, 1fr); align-items: start; gap: 24px; padding: 22px 0; border-bottom: 1px solid var(--line); color: inherit; text-decoration: none; }
  .f-home-work-row:nth-child(even) { border-left: 1px solid var(--line); padding-left: 24px; }
  .f-home-work-row img { display: block; width: 120px; height: 120px; object-fit: cover; background: var(--paper-tint); }
  .f-home-work-row img.f-home-artifact { object-fit: contain; padding: 6px; }
  .f-home-work-row .f-home-category { margin-bottom: 6px; font-size: 9px; }
  .f-home-work-row h3 { margin: 0 0 6px; font-family: var(--font-display); font-size: 18px; font-weight: 750; line-height: 1.3; letter-spacing: -.025em; color: var(--navy); }
  .f-home-work-row p { margin: 0 0 8px; font-size: 14px; line-height: 1.55; color: var(--ink-secondary); }
  .f-home-work-row .f-editorial-link { font-size: 13px; }
  .f-home-approach { padding-block: 28px; }
  .f-home-principles { display: flex; flex-wrap: wrap; gap: 10px 24px; list-style: none; margin: 12px 0; padding: 0; font-size: 17px; line-height: 1.6; color: var(--ink-secondary); }
  .f-home-principles li + li::before { content: "·"; padding-right: 24px; color: var(--copper); }
  .f-home-proof { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; padding-block: 24px; border-top: 1px solid var(--line); }
  .f-home-proof p { margin: 0; }
  .f-home-proof strong { display: block; font-family: var(--font-display); font-size: 27px; font-weight: 750; line-height: 1.2; color: var(--navy); }
  .f-home-proof span { display: block; margin-top: 8px; font-size: 12px; color: var(--ink-secondary); }
  @media (max-width: 920px) {
  .f-home-hero { gap: 28px; }
  .f-home-role { max-width: 32ch; }
  .f-home-work-row { grid-template-columns: 96px minmax(0, 1fr); gap: 16px; }
  .f-home-work-row img { width: 96px; height: 112px; }
  .f-home-work-row:nth-child(even) { padding-left: 16px; }
}
  @media (max-width: 720px) {
  .f-home-hero { grid-template-columns: 1fr; gap: 28px; padding-block: 36px; }
  .f-home-identity h1 { font-size: clamp(30px, 6vw, 38px); }
  .f-home-role { max-width: none; font-size: 14px; }
  .f-home-intent { margin-top: 20px; font-size: 16px; }
  .f-home-photo { margin-right: 0; }
  .f-home-photo img { aspect-ratio: 16 / 10; }
  .f-home-feature { grid-template-columns: 1fr; gap: 22px; }
  .f-home-feature-image { aspect-ratio: 2 / 1; }
  .f-home-feature h3 { font-size: 32px; }
  .f-home-feature p { max-width: none; font-size: 16px; }
  .f-home-work-grid { grid-template-columns: 1fr; }
  .f-home-work-row:nth-child(even) { border-left: 0; padding-left: 0; }
  .f-home-work-row { grid-template-columns: 104px minmax(0, 1fr); gap: 20px; }
  .f-home-work-row img { width: 104px; height: 124px; }
  .f-home-principles { display: block; font-size: 16px; }
  .f-home-principles li { display: inline; }
  .f-home-principles li + li::before { padding-inline: 12px; }
  .f-home-proof { grid-template-columns: 1fr; gap: 20px; }
  .f-home-proof p { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: 16px; }
  .f-home-proof span { margin-top: 0; }
  .f-home-proof strong { font-size: 23px; }
}
  @media (max-width: 640px) {
  .f-nav { min-height: 64px; gap: 12px; }
  .f-brand { font-size: 20px; }
  .f-links { gap: 14px; }
  .f-links a { font-size: 13px; }
  .f-theme-toggle { width: 36px; margin-left: 0; }
  .f-home-section-head { gap: 12px; }
  .f-home-section-head .f-editorial-link { font-size: 12px; gap: 6px; white-space: nowrap; }
}
  @media (max-width: 380px) {
  .f-brand { font-size: 17px; }
  .f-links { gap: 10px; }
  .f-home-work-row { grid-template-columns: 88px minmax(0, 1fr); gap: 16px; }
  .f-home-work-row img { width: 88px; height: 116px; }
  .f-home-section-head h2 { font-size: 25px; }
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
  .f-human-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--navy);
  }
  .f-human-head h2 {
    margin: 0;
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: var(--fw-bold);
    letter-spacing: var(--tracking-tight);
    color: var(--navy);
  }
  .f-human-head span {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--muted);
    font-weight: var(--fw-semibold);
  }

  /* ========================================================================
     8. METHOD SECTION
     ======================================================================== */

  /* Work Library: editorial overview, with one shared set of filters. */

  .f-work-hero { padding-block: 32px 20px; }

  .f-work-hero h1 { margin: 0 0 18px; font-family: var(--font-display); font-size: clamp(30px, 3.5vw, 42px); line-height: 1.15; font-weight: 800; letter-spacing: -.03em; color: var(--navy); }

  .f-work-intro { margin: 0; font-size: 16px; line-height: 1.75; color: var(--ink-secondary); }

  .f-work-meta-row { display: flex; align-items: baseline; justify-content: space-between; gap: 20px; margin-top: 16px; font-size: 12px; color: var(--muted); }

  .f-work-meta-row > p { margin: 0; }

  .f-work-meta-row > p span { margin-inline: 8px; color: var(--copper); }

  .f-work-boundary { max-width: 42ch; }

  .f-work-boundary summary { cursor: pointer; color: var(--ink-secondary); }

  .f-work-boundary blockquote { margin: 14px 0 10px; padding-left: 14px; border-left: 1px solid var(--copper); font-size: 13px; line-height: 1.7; }

  .f-work-boundary p { margin: 0; font-size: 11px; }

  .f-work-toolbar { display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; padding-block: 12px; border-block: 1px solid var(--line); }

  .f-work-search-row { display: flex; min-width: 0; gap: 24px; align-items: center; justify-content: space-between; }

  .f-search-wrap { position: relative; flex: 1; min-width: 0; max-width: 650px; }

  .f-search-wrap > svg { position: absolute; left: 14px; top: 50%; width: 18px; height: 18px; transform: translateY(-50%); color: var(--muted); pointer-events: none; }

  .f-search-input { width: 100%; height: 46px; padding: 10px 46px 10px 42px; border: 1px solid var(--line); background: transparent; color: var(--ink); font: 14px var(--font-sans); border-radius: 3px; }

  .f-search-input:focus { outline: 2px solid var(--copper); outline-offset: 2px; }

  .f-search-input::-webkit-search-cancel-button { appearance: none; }

  .f-kbd-hint { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); font: 12px var(--font-mono); color: var(--muted); border: 1px solid var(--line); padding: 1px 6px; border-radius: 2px; pointer-events: none; }

  .f-search-input:focus + .f-kbd-hint, .f-search-input:not(:placeholder-shown) + .f-kbd-hint { display: none; }

  .f-search-clear { position: absolute; right: 2px; top: 2px; width: 42px; height: 42px; padding: 0; border: 0; background: transparent; color: var(--ink-secondary); cursor: pointer; font-size: 22px; }

  .f-toolbar-tabs { display: flex; min-width: 0; gap: 28px; align-items: center; overflow-x: auto; scrollbar-width: thin; }

  .f-mode-tab { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 8px 0; border: 0; border-bottom: 2px solid transparent; background: transparent; color: var(--ink-secondary); font: 500 13px var(--font-sans); cursor: pointer; white-space: nowrap; }

  .f-mode-tab:hover, .f-mode-tab[aria-pressed="true"] { color: var(--copper); }

  .f-mode-tab[aria-pressed="true"] { border-bottom-color: var(--copper); }

  .f-tab-count { color: var(--muted); font-size: 11px; }

  .f-work-toolbar-bottom { display: flex; min-width: 0; align-items: center; justify-content: space-between; gap: 24px; }

  .f-work-refinements, .f-work-results { display: flex; flex-wrap: wrap; align-items: center; gap: 20px; }

  .f-work-refinements { flex-shrink: 0; }
  .f-work-results { flex-shrink: 0; gap: 12px; }

  .f-work-topic { display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 12px; }

  .f-work-topic select { max-width: 200px; min-height: 40px; border: 0; border-bottom: 1px solid var(--line); border-radius: 0; background: var(--paper); color: var(--ink-secondary); padding: 6px 24px 6px 0; font: 13px var(--font-sans); cursor: pointer; }

  .f-work-saved { display: inline-flex; align-items: center; gap: 7px; min-height: 40px; padding: 4px 0; border: 0; background: transparent; font: 13px var(--font-sans); color: var(--ink-secondary); cursor: pointer; }

  .f-work-saved svg, .f-work-save svg { width: 18px; height: 18px; }

  .f-work-saved[aria-pressed="true"], .f-work-save[aria-pressed="true"] { color: var(--copper); }

  .f-work-saved[aria-pressed="true"] svg, .f-work-save[aria-pressed="true"] svg { fill: currentColor; }

  .f-toolbar-count { color: var(--muted); font-size: 12px; white-space: nowrap; }

  .f-work-clear { padding: 8px 0; border: 0; background: transparent; color: var(--copper); font: 12px var(--font-sans); text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }

  .f-view-switch { display: flex; gap: 2px; padding: 3px; border: 1px solid var(--line); border-radius: 3px; }

  .f-view-toggle-btn { min-height: 36px; padding: 7px 12px; border: 0; border-radius: 1px; background: transparent; color: var(--ink-secondary); font: 13px var(--font-sans); cursor: pointer; }

  .f-view-toggle-btn[aria-pressed="true"] { background: var(--paper-tint); color: var(--navy); font-weight: 600; }

  .f-catalog-section { padding-block: 28px 8px; }

  .f-catalog-section + .f-catalog-section { margin-top: 12px; }

  .f-section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 24px; margin-bottom: 8px; }

  .f-section-title-wrap { flex: 1; min-width: 0; }

  .f-section-title-wrap h2 { margin: 0 0 8px; font-family: var(--font-display); font-size: 25px; line-height: 1.25; letter-spacing: -.025em; font-weight: 800; color: var(--navy); }

  .f-section-title-wrap h2 span { color: var(--copper); font-family: var(--font-sans); font-size: 11px; font-weight: 500; vertical-align: middle; margin-right: 10px; }

  .f-section-title-wrap p { margin: 0; color: var(--ink-secondary); font-size: 13px; line-height: 1.7; }

  .f-section-count-badge { color: var(--muted); font-size: 12px; white-space: nowrap; }

  .f-title-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 40px; }

  .f-work-item { min-width: 0; padding-block: 24px; border-bottom: 1px solid var(--line); }

  .f-work-item-heading { display: flex; align-items: start; gap: 12px; }

  .f-work-item h3 { flex: 1; min-width: 0; margin: 0; color: var(--navy); font-family: var(--font-display); font-size: 22px; line-height: 1.3; font-weight: 800; letter-spacing: -.025em; }

  .f-work-item h3 a { color: inherit; text-decoration: none; }

  .f-work-item h3 a:hover { color: var(--copper); text-decoration: underline; text-underline-offset: 4px; }

  .f-work-item h3 a > span { color: var(--copper); font: 17px var(--font-sans); white-space: nowrap; }

  .f-work-save { flex-shrink: 0; display: grid; place-items: center; width: 36px; height: 36px; margin-top: -4px; border: 0; border-radius: 3px; background: transparent; color: var(--muted); cursor: pointer; }

  .f-work-save:hover { color: var(--copper); background: var(--paper-tint); }

  .f-item-question { margin: 14px 0 16px; color: var(--ink-secondary); font-size: 14px; line-height: 1.75; }

  .f-work-item-meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; color: var(--muted); font-size: 11px; line-height: 1.6; }

  .f-work-item-meta .f-work-demo { color: var(--copper); }

  .f-work-details { margin-top: 12px; font-size: 12px; color: var(--muted); }

  .f-work-details summary { display: list-item; width: fit-content; min-height: 24px; cursor: pointer; }

  .f-work-details p { margin: 10px 0; color: var(--ink-secondary); line-height: 1.6; }

  .f-paper-tags { display: flex; flex-wrap: wrap; gap: 6px 14px; }

  .f-tag-click { min-height: 28px; padding: 2px 0; border: 0; border-bottom: 1px solid var(--line); background: transparent; color: var(--ink-secondary); font: 12px var(--font-sans); cursor: pointer; text-align: left; }

  .f-tag-click:hover { color: var(--copper); border-color: var(--copper); }

  .f-ledger-table-wrap { margin-block: 28px 40px; }

  .f-ledger-table { width: 100%; border-collapse: collapse; font-size: 12px; line-height: 1.6; }

  .f-ledger-table th { padding: 14px 12px; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 11px; font-weight: 500; text-align: left; }

  .f-ledger-table td { padding: 20px 12px; border-bottom: 1px solid var(--line); color: var(--ink-secondary); vertical-align: top; }

  .f-ledger-number { width: 4%; font-family: var(--font-mono); color: var(--muted); }

  .f-ledger-case { width: 59%; }

  .f-ledger-table td:nth-child(3) { width: 16%; }

  .f-ledger-title { color: var(--navy); font-family: var(--font-display); font-size: 18px; line-height: 1.4; font-weight: 800; letter-spacing: -.015em; text-decoration: none; }

  .f-ledger-title:hover { color: var(--copper); text-decoration: underline; text-underline-offset: 4px; }

  .f-ledger-case p { margin: 6px 0 0; color: var(--ink-secondary); font-size: 12px; line-height: 1.65; }

  .f-work-empty { padding: 60px 0 80px; }

  .f-work-empty h2 { margin: 0 0 12px; font-family: var(--font-display); color: var(--navy); font-size: 28px; font-weight: 800; }

  .f-work-empty p { margin: 0 0 20px; max-width: 60ch; color: var(--ink-secondary); font-size: 15px; line-height: 1.7; }

  .f-work-empty button { background: transparent; padding: 4px 0; font-family: var(--font-sans); cursor: pointer; }

  .f-work-sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

  .f-work-page [hidden] { display: none !important; }

  @media (max-width: 920px) {
    .f-toolbar-tabs { gap: 22px; }
    .f-title-grid { column-gap: 28px; }
    .f-work-item h3 { font-size: 20px; }
    .f-work-meta-row { flex-wrap: wrap; gap: 12px; }
  }

  @media (max-width: 720px) {
    .f-work-hero { padding-block: 32px 24px; }
    .f-work-hero h1 span { display: block; margin-top: 6px; color: var(--ink-secondary); font-size: 21px; font-weight: 600; line-height: 1.35; letter-spacing: -.01em; }
    .f-work-intro { font-size: 15px; }
    .f-work-meta-row { display: block; line-height: 1.8; }
    .f-work-meta-row > p span { margin-inline: 4px; }
    .f-work-boundary { margin-top: 12px; }
    .f-work-search-row { align-items: stretch; flex-direction: column; gap: 14px; }
    .f-search-wrap { flex: auto; width: 100%; max-width: none; }
    .f-toolbar-tabs { gap: 22px; }
    .f-work-toolbar-bottom { align-items: stretch; flex-direction: column; gap: 12px; }
    .f-work-refinements { justify-content: space-between; width: 100%; gap: 12px; }
    .f-work-topic { gap: 8px; }
    .f-work-topic select { max-width: 160px; }
    .f-work-results { width: 100%; justify-content: space-between; }

    .f-work-save { width: 40px; height: 40px; }
    .f-work-details summary { min-height: 32px; line-height: 32px; }
    .f-section-head { align-items: start; gap: 14px; }
    .f-section-title-wrap h2 { font-size: 23px; }
    .f-section-count-badge { margin-top: 6px; }
    .f-title-grid { grid-template-columns: 1fr; }
    .f-work-item h3 { font-size: 22px; }
    .f-work-item { padding-block: 24px; }
    .f-ledger-table thead { display: none; }
    .f-ledger-table, .f-ledger-table tbody { display: block; width: 100%; }
    .f-ledger-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; padding-block: 22px; border-bottom: 1px solid var(--line); }
    .f-ledger-table td { padding: 0; border: 0; min-width: 0; }
    .f-ledger-table .f-ledger-number { display: none; }
    .f-ledger-table .f-ledger-case { width: auto; grid-column: 1 / -1; }
    .f-ledger-table td:nth-child(3) { width: auto; }
    .f-ledger-table td[data-label]::before { content: attr(data-label); display: block; margin-bottom: 2px; color: var(--muted); font-size: 10px; }
  }

  @media (max-width: 380px) {
    .f-work-topic { display: block; }
    .f-work-topic select { display: block; max-width: 164px; }
    .f-work-refinements { align-items: end; }
    .f-section-title-wrap h2 { font-size: 21px; }
  }

  /* Shared editorial case reader */

  .f-case-hero { padding: 58px 0 30px; }

  .f-case-hero h1 {
    max-width: 1060px;
    margin: 0;
    font: 800 clamp(2rem, 4vw, 3.4rem)/1.12 var(--font-display);
    letter-spacing: -0.025em;
    color: var(--navy);
    overflow-wrap: break-word;
    text-wrap: balance;
  }

  .f-case-hero .f-crumb {
    display: flex; align-items: baseline; flex-wrap: wrap; gap: 10px;
    margin-bottom: 24px;
    font: 500 13px/1.5 var(--font-sans); color: var(--ink-secondary);
  }

  .f-case-hero .f-crumb a { color: var(--copper); text-decoration: none; }

  .f-case-hero .f-crumb a:hover { text-decoration: underline; text-underline-offset: 4px; }

  .f-case-hero .f-crumb .f-crumb-divider { color: var(--line); }

  .f-case-dek {
    max-width: 880px; margin: 22px 0 0;
    font: 400 clamp(1.0625rem, 1.5vw, 1.25rem)/1.65 var(--font-sans);
    color: var(--ink-secondary);
  }

  .f-case-hero-stats { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 22px; }

  .f-hero-stat { font: 400 13px/1.5 var(--font-sans); color: var(--ink-secondary); }

  .f-hero-stat + .f-hero-stat { padding-left: 18px; border-left: 1px solid var(--line); }

  .f-case-meta-grid {
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 28px; margin-top: 0; margin-bottom: 0;
    padding: 24px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  }

  .f-meta-cell { min-width: 0; }

  .f-meta-cell dt { font: 500 11px/1.5 var(--font-sans); letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }

  .f-meta-cell dd { margin: 0; font: 400 13px/1.6 var(--font-sans); color: var(--ink-secondary); overflow-wrap: anywhere; }

  .f-case-reading { display: grid; grid-template-columns: 208px minmax(0, 760px); gap: 64px; padding: 44px 0 88px; align-items: start; }

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

  .f-case-action-bar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; padding-bottom: 20px; margin: 0 0 28px; border-bottom: 1px solid var(--line); }

  .f-case-action-left, .f-case-action-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

  .f-action-pill { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 36px; padding: 6px 10px; border: 1px solid var(--line); background: transparent; border-radius: 4px; font: 400 12px/1.5 var(--font-sans); color: var(--ink-secondary); cursor: pointer; }

  .f-action-pill:hover:not(:disabled) { color: var(--copper); border-color: var(--copper); }

  .f-action-pill.is-saved { color: var(--copper); border-color: var(--copper); }

  .f-action-pill:disabled { opacity: .4; cursor: default; }

  .f-reading-size { min-width: 36px; text-align: center; font: 400 11px/1.5 var(--font-sans); color: var(--muted); }

  .f-mobile-toc { display: none; margin: 0 0 30px; padding: 14px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

  .f-mobile-toc summary { cursor: pointer; font: 600 14px/1.5 var(--font-sans); color: var(--navy); }

  .f-mobile-toc-list { padding-top: 16px; max-height: 55dvh; overflow-y: auto; }

  .f-mobile-toc-list .f-toc-link { font-size: 13px; padding-top: 8px; padding-bottom: 8px; }

  .f-mobile-toc-list .f-toc-item.level-3 .f-toc-link { font-size: 12px; }

  /* Article type and evidence components */

  .f-prose { min-width: 0; color: var(--ink); overflow-wrap: anywhere; --reading-size: 18px; }

  .f-prose p { margin: 0 0 22px; font: 400 var(--reading-size)/1.8 var(--font-sans); }

  .f-prose h1, .f-prose h2 { position: relative; margin: 52px 0 20px; font: 800 clamp(1.625rem, 2.6vw, 2rem)/1.25 var(--font-display); letter-spacing: -.015em; color: var(--navy); text-wrap: balance; }

  .f-prose h3 { position: relative; margin: 34px 0 14px; font: 800 clamp(1.25rem, 2vw, 1.5rem)/1.3 var(--font-display); color: var(--navy); }

  .f-prose h4 { margin: 26px 0 12px; font: 600 18px/1.4 var(--font-sans); color: var(--navy); }
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

  .f-list li, .f-numbered-list li { margin-bottom: 10px; font: 400 var(--reading-size)/1.8 var(--font-sans); }

  .f-list li::marker, .f-numbered-list li::marker { color: var(--copper); }

  .f-prose blockquote { margin: 26px 0; padding: 8px 0 8px 22px; border-left: 2px solid var(--copper); font: 400 var(--reading-size)/1.8 var(--font-sans); color: var(--ink-secondary); }

  .f-prose blockquote + blockquote { margin-top: -14px; }

  .f-prose hr.f-hr { height: 1px; margin: 42px 0; border: 0; background: var(--line); }

  .f-prose hr.f-hr + :is(h1,h2) { margin-top: 0; }

  .f-callout { margin: 28px 0; padding: 22px 24px; background: var(--paper-tint); border-left: 2px solid var(--copper); font: 400 var(--reading-size)/1.8 var(--font-sans); }

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

  .f-case-nav-rail { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--line); }

  .f-nav-prev, .f-nav-next { display: flex; flex-direction: column; gap: 10px; text-decoration: none; }

  .f-nav-next { text-align: right; }

  .f-nav-sub { font: 400 12px/1.5 var(--font-sans); color: var(--copper); }

  .f-nav-title { font: 800 18px/1.4 var(--font-display); color: var(--navy); }

  .f-case-nav-rail a:hover .f-nav-title { color: var(--copper); }

  @media (max-width: 1040px) {
    .f-case-reading { grid-template-columns: 176px minmax(0, 1fr); gap: 40px; }
  }

  @media (max-width: 920px) {
    .f-case-reading { display: block; max-width: 760px; }
    .f-case-rail { display: none; }
    .f-mobile-toc { display: block; }
    .f-case-meta-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 30px; }
  }

  @media (max-width: 640px) {
    .f-case-hero { padding: 32px 0 26px; }
    .f-case-hero h1 { font-size: clamp(1.875rem, 7.8vw, 2.5rem); }
    .f-case-hero .f-crumb { margin-bottom: 20px; font-size: 12px; }
    .f-case-dek { margin-top: 18px; font-size: 16px; }
    .f-case-meta-grid { padding: 22px 0; }
    .f-meta-cell dt { font-size: 10px; }
    .f-meta-cell dd { font-size: 12px; }
    .f-case-reading { padding: 28px 0 56px; }
    .f-prose { --reading-size: 16px; }
    .f-case-action-bar { gap: 10px; margin-bottom: 20px; }
    .f-case-action-left { flex: 1 1 240px; }
    .f-action-pill { min-height: 40px; }
    .f-prose blockquote { padding-left: 16px; }
    .f-callout { padding: 18px; }
    .f-table :is(th,td) { min-width: 12rem; }
    .f-related-grid, .f-case-nav-rail { grid-template-columns: 1fr; gap: 26px; }
    .f-related-card + .f-related-card { padding-top: 22px; border-top: 1px solid var(--line); }
    .f-case-nav-rail > div:empty { display: none; }
    .f-nav-next { text-align: left; }
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

  /* About shares the paper, type and open layouts of the portfolio. */

  .f-about-hero-artistic { padding: 54px 0 38px; }

  .f-about-hero-artistic h1 { max-width: 1000px; margin: 0 0 26px; font: 800 clamp(2rem, 3.8vw, 3.4rem)/1.14 var(--font-display); letter-spacing: -.025em; color: var(--navy); }

  .f-about-hero-artistic h1 em { font-style: normal; color: var(--ink-secondary); }

  .f-about-hero-dek { max-width: 820px; margin: 0 0 28px; font: 400 18px/1.8 var(--font-sans); color: var(--ink-secondary); }

  .f-about-hero-dek strong { color: var(--ink); font-weight: 600; }

  .f-about-coords-bar { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px 20px; max-width: 100%; font: 400 12px/1.7 var(--font-sans); color: var(--ink-secondary); }

  .f-coord-tag strong { margin-right: 4px; font-weight: 500; font-size: 10px; color: var(--muted); letter-spacing: .06em; }

  .f-coord-divider { display: none; }

  .f-about-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

  .f-about-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; max-width: 100%; padding: 10px 16px; border: 1px solid var(--line); border-radius: 4px; background: transparent; font: 400 13px/1.6 var(--font-sans); color: var(--ink-secondary); text-align: center; text-decoration: none; overflow-wrap: anywhere; }

  .f-about-btn.primary { color: var(--copper); border-color: var(--copper); }

  .f-about-btn:hover { color: var(--copper); border-color: var(--copper); background: var(--paper-tint); }

  .f-impact-dashboard { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 30px; margin: 0 0 44px; padding: 28px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

  .f-impact-stat { display: flex; flex-direction: column; gap: 8px; }

  .f-impact-stat b { font: 800 30px/1.2 var(--font-display); color: var(--navy); }

  .f-impact-stat span { font: 400 12px/1.6 var(--font-sans); color: var(--ink-secondary); }

  .f-about-bento-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 28px; margin: 44px 0 56px; }

  .f-bento-card { display: flex; flex-direction: column; min-width: 0; }

  .f-bento-card-top { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; margin-bottom: 12px; }

  .f-bento-val { font: 800 clamp(1.875rem,2.6vw,2.4rem)/1.1 var(--font-display); letter-spacing: -.025em; color: var(--navy); }

  .f-bento-unit { font: 400 12px/1.6 var(--font-sans); color: var(--copper); }

  .f-bento-card h3 { margin: 0 0 10px; font: 800 20px/1.3 var(--font-display); color: var(--navy); }

  .f-bento-card p { margin: 0 0 18px; font: 400 14px/1.75 var(--font-sans); color: var(--ink-secondary); }

  .f-bento-tag { margin-top: auto; padding-top: 14px; border-top: 1px solid var(--line); font: 400 11px/1.7 var(--font-sans); color: var(--muted); }

  .f-about-triptych { margin: 52px 0; }

  .f-horizon-card { display: grid; grid-template-columns: 250px minmax(0,1fr); gap: 58px; padding: 38px 0; border-top: 1px solid var(--line); }

  .f-horizon-aside { min-width: 0; }

  .f-horizon-num { display: block; margin-bottom: 12px; font: 500 11px/1.6 var(--font-sans); letter-spacing: .09em; text-transform: uppercase; color: var(--copper); }

  .f-horizon-aside h3 { margin: 0 0 14px; font: 800 26px/1.25 var(--font-display); letter-spacing: -.015em; color: var(--navy); }

  .f-horizon-sub { font: 400 13px/1.7 var(--font-sans); color: var(--ink-secondary); }

  .f-horizon-content { display: flex; flex-direction: column; gap: 20px; min-width: 0; }

  .f-horizon-content p { margin: 0; font: 400 16px/1.8 var(--font-sans); color: var(--ink); }

  .f-horizon-content p strong { color: var(--navy); font-weight: 600; }

  .f-horizon-highlights { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 26px; margin-top: 8px; }

  .f-horizon-chip { padding-top: 16px; border-top: 1px solid var(--line); font: 400 14px/1.75 var(--font-sans); color: var(--ink-secondary); }

  .f-horizon-chip strong { display: block; margin-bottom: 8px; font-weight: 600; color: var(--navy); }

  .f-about-manifesto { margin: 44px 0 60px; padding: 10px 0 10px 28px; border-left: 2px solid var(--copper); }

  .f-manifesto-kicker { display: block; margin-bottom: 16px; font: 500 11px/1.6 var(--font-sans); letter-spacing: .07em; color: var(--copper); }

  .f-about-manifesto blockquote { max-width: 950px; margin: 0 0 18px; font: 600 clamp(1.25rem,2vw,1.625rem)/1.65 var(--font-display); color: var(--navy); }

  .f-manifesto-author { font: 400 12px/1.6 var(--font-sans); color: var(--ink-secondary); }

  .f-about-toolkit-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 36px; margin: 28px 0 56px; }

  .f-toolkit-col h4 { margin: 0 0 18px; font: 800 22px/1.3 var(--font-display); color: var(--navy); }

  .f-toolkit-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }

  .f-toolkit-list li { display: flex; gap: 10px; align-items: baseline; font: 400 14px/1.7 var(--font-sans); color: var(--ink-secondary); }

  .f-toolkit-list li::before { content: '·'; color: var(--copper); }

  .f-about-cta-dock { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px; margin: 52px 0 64px; padding: 30px 0 0; border-top: 1px solid var(--line); }

  .f-cta-dock-text h3 { margin: 0 0 10px; font: 800 28px/1.3 var(--font-display); color: var(--navy); }

  .f-cta-dock-text p { margin: 0; font: 400 14px/1.7 var(--font-sans); color: var(--ink-secondary); }

  .f-cta-dock-btns { display: flex; flex-wrap: wrap; gap: 12px; }

  #about-content .f-human-head { display: block; padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }

  #about-content .f-human-head h2 { font-size: 30px; font-weight: 800; margin-bottom: 12px; }

  #about-content .f-human-head span { display: block; max-width: 650px; font: 400 14px/1.7 var(--font-sans); color: var(--ink-secondary); }

  @media (max-width: 1040px) {
    .f-about-bento-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 32px; }
    .f-horizon-card { grid-template-columns: 210px minmax(0,1fr); gap: 38px; }
    .f-horizon-highlights { grid-template-columns: 1fr; gap: 18px; }
  }

  @media (max-width: 760px) {
    .f-horizon-card { grid-template-columns: 1fr; gap: 24px; }
    .f-about-toolkit-grid { grid-template-columns: 1fr; gap: 32px; }
    .f-impact-dashboard { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 26px; }
  }

  @media (max-width: 640px) {
    .f-about-hero-artistic { padding: 32px 0; }
    .f-about-hero-artistic h1 { font-size: clamp(1.875rem,7.5vw,2.5rem); }
    .f-about-hero-dek { font-size: 16px; }
    .f-about-coords-bar { gap: 10px 16px; }
    .f-about-bento-grid { grid-template-columns: 1fr; gap: 30px; margin-bottom: 42px; }
    .f-bento-card { padding-bottom: 18px; border-bottom: 1px solid var(--line); }
    .f-bento-tag { border-top: 0; padding-top: 0; }
    .f-horizon-card { padding: 30px 0; }
    .f-about-manifesto { padding-left: 18px; }
    .f-about-cta-dock { align-items: flex-start; }
  }

  /* Bento Grid with Soothing Soft Cards */

  /* Artistic Triptych Horizons */

  /* Manifesto / Philosophy Quote Callout */

  /* Capabilities & Tooling Ledger */

  /* Artistic Actions Dock */

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
    .f-header, .f-footer, .f-case-rail, .f-case-action-bar, .f-cat-in-tab-dock, dialog, .f-skip, #f-progress-bar, .f-case-nav-rail, .f-related-section, .f-toast-msg {
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
