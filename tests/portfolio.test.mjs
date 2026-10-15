import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM, VirtualConsole } from 'jsdom';
import worker from '../worker/index.js';

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

test('catalog combines search, mode, topic, and saved filters; reset restores all works', async t => {
  const p = await page(t, '/work?view=index', { 'f-bookmarks': '["/work/vieworld","/removed-case"]' });
  const { document, window } = p;
  assert.equal(p.visible().length, 24);
  p.input('#work-search', 'PNJ');
  assert.deepEqual(p.visible(), ['/work/pnj-after-the-diamond-shock']);
  assert.equal(new URL(window.location.href).searchParams.get('q'), 'PNJ');
  assert.equal(new URL(window.location.href).searchParams.has('view'), false);
  p.input('#work-topic', 'demo', 'change');
  assert.equal(p.visible().length, 0);
  assert.equal(document.querySelector('#work-empty').hidden, false);
  document.querySelector('#work-reset-filters').click();
  p.input('#work-mode', document.querySelector('[data-path="/work/vieworld"]').dataset.mode, 'change');
  p.input('#work-topic', 'demo', 'change');
  assert.deepEqual(p.visible(), ['/work/explainable-trust', '/work/vieworld']);
  document.querySelector('#btn-filter-saved').click();
  assert.deepEqual(p.visible(), ['/work/vieworld']);
  assert.equal(document.querySelector('#btn-filter-saved span').textContent, 'Saved (1)');
  document.querySelector('[data-save-path="/work/vieworld"]').click();
  assert.equal(p.visible().length, 0);
  assert.equal(document.querySelector('#btn-filter-saved').getAttribute('aria-pressed'), 'true');
  document.querySelector('#work-clear-filters').click();
  assert.equal(p.visible().length, 24);
  assert.equal(window.location.search, '');
  assert.equal(document.activeElement.id, 'work-search');
});

test('catalog restores URL and cross-tab bookmark changes without stale filter state', async t => {
  const p = await page(t, '/work?mode=invalid&topic=invalid&q=shopee', { 'f-bookmarks': '{bad json' });
  assert.deepEqual(p.visible(), ['/work/shopee-account-restrictions']);
  p.window.history.replaceState({}, '', '/work?topic=demo&saved=1');
  p.window.localStorage.setItem('f-bookmarks', '["/work/explainable-trust"]');
  p.window.dispatchEvent(new p.window.PopStateEvent('popstate'));
  assert.deepEqual(p.visible(), ['/work/explainable-trust']);
  p.window.localStorage.setItem('f-bookmarks', '["/work/vieworld"]');
  p.window.dispatchEvent(new p.window.StorageEvent('storage', { key: 'f-bookmarks' }));
  assert.deepEqual(p.visible(), ['/work/vieworld']);
  assert.equal(p.document.querySelector('#work-topic').value, 'demo');
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
