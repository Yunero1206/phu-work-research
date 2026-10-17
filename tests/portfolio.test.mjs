import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM, VirtualConsole } from 'jsdom';
import worker from '../worker/index.js';
import { workPreviews } from '../worker/work-previews.js';
import { finalWorkLibrary } from '../worker/case-library.js';
import { access } from 'node:fs/promises';

async function page(t, path, storage = {}) {
  const errors = [];
  const copied = [];
  const scrolled = [];
  const console = new VirtualConsole();
  console.on('jsdomError', error => errors.push(error.message));
  const url = 'https://phamthanhphu.io.vn' + path;
  const response = await worker.fetch(new Request(url), {}, {});
  assert.equal(response.status, 200);
  const dom = new JSDOM(await response.text(), {
    url, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: console,
    beforeParse(window) {
      window.ResizeObserver = class { observe() {} disconnect() {} };
      window.matchMedia = () => ({ matches: false });
      window.HTMLElement.prototype.scrollIntoView = function () { scrolled.push(this.id); };
      Object.defineProperty(window.navigator, 'clipboard', { value: { writeText: async text => copied.push(text) } });
      for (const [key, value] of Object.entries(storage)) window.localStorage.setItem(key, value);
    }
  });
  await new Promise(resolve => dom.window.addEventListener('load', resolve, { once: true }));
  t.after(() => { dom.window.close(); assert.deepEqual(errors, []); });
  const { document, Event } = dom.window;
  return {
    window: dom.window, document, copied, scrolled,
    input(selector, value, event = 'input') {
      const element = document.querySelector(selector);
      element.value = value;
      element.dispatchEvent(new Event(event, { bubbles: true }));
    },
    visible: () => [...document.querySelectorAll('.f-work-item')].filter(item => !item.hidden).map(item => item.dataset.path)
  };
}

test('catalog combines search, type, topic, and saved filters; reset shows every work', async t => {
  const p = await page(t, '/work?view=index&q=PNJ', { 'f-bookmarks': '["/work/vieworld","/removed-case"]' });
  const { document, window } = p;
  assert.deepEqual(p.visible(), ['/work/pnj-after-the-diamond-shock']);
  assert.equal(new URL(window.location.href).searchParams.get('q'), 'PNJ');
  p.input('#work-topic', 'demo', 'change');
  assert.equal(new URL(window.location.href).searchParams.has('view'), false);
  assert.equal(p.visible().length, 0);
  assert.equal(document.querySelector('#work-empty').hidden, false);
  document.querySelector('#work-reset-filters').click();
  p.input('#work-type', 'prototype', 'change');
  p.input('#work-topic', 'demo', 'change');
  assert.deepEqual(p.visible(), ['/work/vieworld', '/work/explainable-trust']);
  document.querySelector('#btn-filter-saved').click();
  assert.deepEqual(p.visible(), ['/work/vieworld']);
  assert.equal(document.querySelector('#btn-filter-saved span').textContent, 'Saved (1)');
  document.querySelector('[data-save-path="/work/vieworld"]').click();
  assert.equal(p.visible().length, 0);
  assert.equal(document.querySelector('#btn-filter-saved').getAttribute('aria-pressed'), 'true');
  document.querySelector('#work-clear-filters').click();
  assert.equal(p.visible().length, 24);
  assert.equal(window.location.search, '');
  assert.equal(document.activeElement.id, 'f-nav-cmd-trigger');
  assert.equal(document.querySelector('#work-query-clear').hidden, true);
  assert.equal(p.visible()[0], '/work/pnj-after-the-diamond-shock');
  assert.equal(document.querySelector('#work-show-all'), null);
  assert.equal(document.querySelector('#work-count').textContent, '24 works');
});

test('every case has a thumbnail and is available immediately; shared search narrows the full list', async t => {
  assert.equal(workPreviews.length, 24);
  assert.deepEqual(new Set(workPreviews.map(p => p.path)), new Set(finalWorkLibrary.map(w => w.path)));
  for (const preview of workPreviews) {
    if (preview.thumbnail) await access(new URL('../public' + preview.thumbnail, import.meta.url));
  }
  const p = await page(t, '/work');
  assert.equal(p.document.querySelectorAll('input').length, 1);
  assert.equal(p.visible().length, 24);
  assert.equal(p.document.querySelectorAll('.f-work-art img, .f-work-art svg[role="img"]').length, 24);
  assert(p.visible().includes('/work/datvietvac-who-owns-the-fan-promise'));
  assert.deepEqual(p.visible().slice(0, 6), ['/work/pnj-after-the-diamond-shock', '/work/shopee-account-restrictions', '/work/vieworld', '/work/zalo-scam-emergency-mode', '/work/creator-platform-operating-model', '/work/explainable-trust']);
  p.document.querySelector('#f-nav-cmd-trigger').click();
  p.input('#f-cmd-input', 'Who owns the order after checkout?');
  const links = [...p.document.querySelectorAll('#f-cmd-results .f-cmd-item')];
  assert.equal(links[0].textContent.includes('View matching works'), true);
  assert.equal(links[1].getAttribute('href'), '/work/datvietvac-who-owns-the-fan-promise');
  const results = await page(t, links[0].getAttribute('href'));
  assert.deepEqual(results.visible(), ['/work/datvietvac-who-owns-the-fan-promise']);
  p.document.querySelector('#f-cmd-close').click();
  results.document.querySelector('#work-query-clear').click();
  assert.equal(results.visible().length, 24);
  assert.equal(results.window.location.search, '');
  results.input('#work-type', 'essay', 'change');
  assert.equal(results.visible().length, 6);
});

test('date sorting, title sorting, and URL restoration work without inventing dates for undated work', async t => {
  const p = await page(t, '/work?sort=oldest');
  const dates = () => p.visible().map(path => p.document.querySelector('[data-path="' + path + '"]').dataset.updated);
  const dated = dates().filter(Boolean);
  assert.deepEqual(dated, dated.slice().sort());
  assert.deepEqual(dates().slice(-2), ['', '']);
  assert.equal(p.document.querySelector('#work-sort').value, 'oldest');
  p.input('#work-sort', 'newest', 'change');
  assert.equal(p.visible()[0], '/work/pnj-after-the-diamond-shock');
  assert.equal(p.window.location.search, '');
  p.input('#work-sort', 'title', 'change');
  const labels = p.visible().map(path => p.document.querySelector('[data-path="' + path + '"]').dataset.title);
  assert.deepEqual(labels, labels.slice().sort((a, b) => a.localeCompare(b, 'en')));
  p.window.history.replaceState({}, '', '/work?type=prototype&sort=oldest');
  p.window.dispatchEvent(new p.window.PopStateEvent('popstate'));
  assert.deepEqual(p.visible(), ['/work/explainable-trust', '/work/vieworld']);
  p.document.querySelector('#f-nav-cmd-trigger').click();
  p.input('#f-cmd-input', 'evidence');
  const params = new URL(p.document.querySelector('#f-cmd-results .f-cmd-item').href).searchParams;
  assert.equal(params.get('sort'), 'oldest');
  assert.equal(params.get('type'), 'prototype');
  p.document.querySelector('#f-cmd-close').click();
  p.document.querySelector('#work-clear-filters').click();
  assert.equal(p.visible().length, 24);
  assert.equal(p.window.location.search, '?sort=oldest');
  assert.equal(p.document.querySelector('[data-path="/work/explainable-trust"] time').getAttribute('datetime'), '2026-09');
});

test('existing research-mode links remain usable alongside type and date controls', async t => {
  const p = await page(t, '/work?mode=essays&type=essay&sort=title');
  assert.equal(p.visible().length, 5);
  assert.equal(p.document.querySelector('#work-mode-label').hidden, false);
  p.document.querySelector('#work-clear-filters').click();
  assert.equal(p.visible().length, 24);
  assert.equal(p.window.location.search, '?sort=title');
});

test('Home keeps five selected works, with VieWorld featured and the same illustrations as the library', async t => {
  const home = await page(t, '/');
  const library = await page(t, '/work');
  const { document } = home;
  assert.deepEqual([...document.querySelectorAll('#selected-work a[href^="/work/"]')].map(link => link.pathname), [
    '/work/vieworld', '/work/fanme-controlled-growth', '/work/vinamilk-trusted-nutrition',
    '/work/shopee-account-restrictions', '/work/explainable-trust'
  ]);
  assert.equal(document.querySelector('.f-home-feature').pathname, '/work/vieworld');
  for (const link of document.querySelectorAll('.f-home-work-list a')) {
    const original = library.document.querySelector(`[data-path="${link.pathname}"] .f-work-art`);
    assert.equal(link.querySelector('.f-work-art').outerHTML, original.outerHTML);
    for (const id of link.getAttribute('aria-labelledby').split(' ')) assert(document.getElementById(id));
  }
  assert.equal(document.querySelectorAll('main h1').length, 1);
  assert.equal(document.querySelector('main a[href="/explainable/"]'), null);
});

test('About keeps operating definitions, experience, skills and working contact links after the layout cleanup', async t => {
  const { document } = await page(t, '/about');
  const facts = [...document.querySelectorAll('.f-about-fact')].map(node => node.textContent.replace(/\s+/g, ' ').trim());
  assert.equal(facts.length, 4);
  assert.match(facts[0], /6\+.*July 2019–present/);
  assert.match(facts[1], /~800M.*excluding retail\. Operating margin: 30–35% after cost of goods and operating expenses/);
  assert.match(facts[2], /~95%.*50\+ Recurring Clients.*retention measured by account count/);
  assert.match(facts[3], />90%.*Since summer 2025.*KiotViet/);
  assert.equal(document.querySelectorAll('.f-about-experience article').length, 3);
  assert.equal(document.querySelectorAll('.f-about-skill-list li').length, 18);
  assert.match(document.querySelector('main').textContent, /10\+ supplier partners/);
  assert.match(document.querySelector('main').textContent, /combined value above VND 5B/);
  assert.match(document.querySelector('a[href*="Request%20Full%20CV"]').href, /^mailto:phamthanhphu97@gmail\.com\?/);
  assert.equal(document.querySelectorAll('main a[href^="https://www.linkedin.com/"]').length, 1);
  assert.equal(document.querySelectorAll('main a[href^="mailto:"]').length, 2);
  assert.equal(document.querySelector('main a[href="/work"]').textContent.trim(), 'Browse 24 Works →');
  assert.equal(document.querySelector('.f-impact-dashboard'), null);
});

test('catalog restores URL and cross-tab bookmark changes without stale filter state', async t => {
  const p = await page(t, '/work?mode=invalid&topic=invalid&q=shopee', { 'f-bookmarks': '{bad json' });
  assert.deepEqual(p.visible(), ['/work/shopee-account-restrictions']);
  p.document.querySelector('#f-nav-cmd-trigger').click();
  assert.equal(p.document.querySelector('#f-cmd-input').value, 'shopee');
  p.document.querySelector('#f-cmd-close').click();
  p.window.history.replaceState({}, '', '/work?topic=demo&saved=1');
  p.window.localStorage.setItem('f-bookmarks', '["/work/explainable-trust"]');
  p.window.dispatchEvent(new p.window.PopStateEvent('popstate'));
  assert.deepEqual(p.visible(), ['/work/explainable-trust']);
  p.window.localStorage.setItem('f-bookmarks', '["/work/vieworld"]');
  p.window.dispatchEvent(new p.window.StorageEvent('storage', { key: 'f-bookmarks' }));
  assert.deepEqual(p.visible(), ['/work/vieworld']);
  assert.equal(p.document.querySelector('#work-topic').value, 'demo');
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: '/', bubbles: true }));
  assert.equal(p.document.querySelector('#f-cmd-dialog').open, true);
  p.input('#f-cmd-input', 'evidence');
  const link = p.document.querySelector('#f-cmd-results .f-cmd-item');
  const params = new URL(link.href).searchParams;
  assert.equal(params.get('q'), 'evidence');
  assert.equal(params.get('topic'), 'demo');
  assert.equal(params.get('saved'), '1');
  p.document.dispatchEvent(new p.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(p.document.querySelector('#f-cmd-dialog').open, false);
});

test('shared search on other pages opens collection results and preserves direct case links', async t => {
  const p = await page(t, '/about');
  p.document.querySelector('#f-nav-cmd-trigger').click();
  p.input('#f-cmd-input', 'PNJ');
  const links = [...p.document.querySelectorAll('#f-cmd-results .f-cmd-item')];
  assert.equal(links[0].getAttribute('href'), '/work?q=PNJ');
  assert(links.some(link => link.getAttribute('href') === '/work/pnj-after-the-diamond-shock'));
  p.input('#f-cmd-input', '\"><img src=x onerror=alert(1)>');
  assert.equal(p.document.querySelectorAll('#f-cmd-results img').length, 0);
  assert.equal(new URL(p.document.querySelector('#f-cmd-results a').href).searchParams.get('q'), '\"><img src=x onerror=alert(1)>');
});

test('case tools preserve text sizing, copy/cite, saved state, and Contents navigation', async t => {
  const p = await page(t, '/work/vieworld', { 'f-reading-size': '21' });
  const { document, window } = p;
  const record = document.querySelector('#record');
  assert.equal(record.style.getPropertyValue('--reading-size'), '21px');
  document.querySelector('#f-btn-font-inc').click();
  assert.equal(window.localStorage.getItem('f-reading-size'), '22');
  document.querySelector('#f-btn-font-reset').click();
  assert.equal(window.localStorage.getItem('f-reading-size'), null);
  document.querySelector('#f-btn-bookmark').click();
  assert.equal(document.querySelector('#f-btn-bookmark').getAttribute('aria-pressed'), 'true');
  assert.deepEqual(JSON.parse(window.localStorage.getItem('f-bookmarks')), ['/work/vieworld']);
  document.querySelector('#f-btn-copy-url').click();
  document.querySelector('#f-cite-btn').click();
  await Promise.resolve();
  assert.equal(p.copied[0], window.location.href);
  assert(p.copied[1].includes('Phạm Thanh Phú (2026). VieWorld:'));
  const tools = document.querySelector('.f-reading-tools');
  tools.open = true;
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(tools.open, false);
  assert.equal(document.activeElement, tools.querySelector('summary'));
  const contents = document.querySelector('.f-mobile-toc');
  contents.open = true;
  const link = contents.querySelector('.f-toc-link');
  link.click();
  assert.equal(contents.open, false);
  assert.equal(window.location.hash, link.hash);
  assert.equal(p.scrolled.at(-1), decodeURIComponent(link.hash.slice(1)));
});

test('case toolbar keeps sources and tools available while the narrative starts immediately', async t => {
  for (const path of ['/work/pnj-after-the-diamond-shock', '/work/vieworld', '/work/ai-judgment-decisions']) {
    const { document } = await page(t, path);
    assert.equal(document.querySelector('.f-crumb'), null);
    assert.equal(document.querySelector('.f-case-action-bar'), null);
    assert.equal(document.querySelector('#record > .f-asset-bar:first-child'), null);
    assert(document.querySelector('.f-case-toolbar .f-case-read-time'));
    assert(document.querySelector('.f-reading-tools-panel #f-btn-bookmark'));
    assert(document.querySelector('.f-reading-tools-panel .f-case-info'));
    assert.equal(document.querySelectorAll('#f-mobile-toc-list').length, 1);
    if (path !== '/work/ai-judgment-decisions') {
      assert(document.querySelector('.f-case-sources-panel .f-asset-trigger'));
    }
  }
});

test('case menus close one another and preserve the source panel while a preview is open', async t => {
  const { document, window } = await page(t, '/work/pnj-after-the-diamond-shock');
  const tools = document.querySelector('.f-reading-tools');
  const sources = document.querySelector('.f-case-sources');
  tools.open = true;
  sources.open = true;
  sources.dispatchEvent(new window.Event('toggle'));
  assert.equal(tools.open, false);
  const trigger = sources.querySelector('.f-asset-trigger');
  trigger.click();
  const modal = document.querySelector('#f-asset-modal');
  assert.equal(modal.open, true);
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(sources.open, true);
  document.querySelector('#f-modal-close').click();
  assert.equal(modal.open, false);
  assert.equal(sources.open, true);
  sources.querySelector('summary').focus();
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(sources.open, false);
  assert.equal(document.activeElement, sources.querySelector('summary'));
});

test('theme preference and action label stay consistent across pages', async t => {
  const p = await page(t, '/', { 'f-theme': 'dark' });
  const { document, window } = p;
  const toggle = document.querySelector('#f-theme-toggle');
  assert.equal(document.documentElement.dataset.theme, 'dark');
  assert.equal(toggle.getAttribute('aria-label'), 'Switch to light theme');
  assert.equal(toggle.querySelector('[data-theme-label]').textContent, 'Light');
  toggle.click();
  assert.equal(window.localStorage.getItem('f-theme'), 'light');
  assert.equal(toggle.getAttribute('aria-label'), 'Switch to dark theme');
  const next = await page(t, '/work', { 'f-theme': window.localStorage.getItem('f-theme') });
  assert.equal(next.document.documentElement.dataset.theme, 'light');
  assert.equal(next.document.querySelector('[data-theme-label]').textContent, 'Dark');
});

test('document previews use actual file formats even when authored markup has a legacy PDF hint', async t => {
  for (const [path, samples] of [
    ['/work/vinamilk-trusted-nutrition', [
      ['1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj', 'DOCX'],
      ['1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5', 'DOCX'],
      ['13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh', 'DOCX']
    ]],
    ['/work/vieworld', [
      ['1RG7dwzv0VX7vpkdzeVboThnDxPuU_F-Q', 'PDF'],
      ['1KVLjLd1JUT6hhMgrCmbd5QT04vYK3Rde', 'DOCX']
    ]],
    ['/work/shopee-account-restrictions', [
      ['1HJnLtsMAW_tXGxMw_7_pavAU5ZyIaBoU', 'DOCX'],
      ['1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ', 'PDF']
    ]]
  ]) {
    const p = await page(t, path);
    for (const [id, format] of samples) {
      const buttons = [...p.document.querySelectorAll(`.f-asset-btn[data-driveid="${id}"]`)];
      assert(buttons.length > 0);
      for (const button of buttons) {
        assert.equal(button.dataset.type, format.toLowerCase());
        assert.equal(button.querySelector('.f-asset-format').textContent, format);
        button.click();
        assert.equal(p.document.querySelector('#f-modal-badge').textContent, format);
        assert.equal(p.document.querySelector('#f-modal-frame').src, `https://drive.google.com/file/d/${id}/preview`);
        p.document.querySelector('#f-modal-close').click();
        assert.equal(p.document.querySelector('#f-asset-modal').open, false);
      }
    }
  }
});
