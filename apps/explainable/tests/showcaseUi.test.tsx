// @vitest-environment jsdom
import React from 'react';
import 'fake-indexeddb/auto';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from '../src/App';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { initialWorkspace, loadDemoWorkspace, saveDemoWorkspace } from '../src/storage/showcaseStore';

beforeEach(async () => {
  const values = new Map([['explainable-showcase-locale', 'en']]);
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: (k: string) => values.get(k) ?? null, setItem: (k: string, v: string) => values.set(k, v) } });
  await saveDemoWorkspace(initialWorkspace());
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
it('navigates, resets, persists and opens references without any network intake', async () => {
  const fetchSpy = vi.fn(() => Promise.reject(new Error('Network is forbidden in the showcase')));
  vi.stubGlobal('fetch', fetchSpy);
  render(<LanguageProvider><App /></LanguageProvider>);
  await screen.findByRole('button', { name: 'Next step' });
  expect(document.querySelector('textarea')).toBeNull();
  expect(document.querySelector('input[type="file"]')).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'Next step' }));
  await screen.findByText('Support acknowledgement (demo)');
  fireEvent.click(screen.getAllByRole('button', { name: /E01$/ })[0]);
  await screen.findByRole('dialog');
  fireEvent.click(screen.getByTitle('Close citation'));
  fireEvent.click(screen.getByRole('button', { name: 'Next step' }));
  await screen.findByText('Refund status (demo)');
  fireEvent.click(screen.getByRole('button', { name: 'Next step' }));
  await screen.findByText('Support correction (demo)');
  expect(screen.getByText(/Recommended Next Actions/).textContent).toContain('(1)');
  fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
  fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
  await waitFor(() => expect(screen.queryByText('Refund status (demo)')).toBeNull());
  await waitFor(async () => expect((await loadDemoWorkspace()).cases[0].step).toBe(1));
  fireEvent.click(screen.getByRole('button', { name: 'Reset demo' }));
  await waitFor(() => expect(screen.queryByText('Support acknowledgement (demo)')).toBeNull());
  await waitFor(async () => expect((await loadDemoWorkspace()).cases[0].step).toBe(0));
  expect(fetchSpy).not.toHaveBeenCalled();
});
