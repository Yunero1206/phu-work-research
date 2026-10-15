import { useEffect, useState } from 'react';
import { PanelLeft, PanelRight } from 'lucide-react';

function portfolioTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem('f-theme');
    if (saved === 'dark') return 'dark';
    if (saved === 'light' || saved === 'sepia') return 'light';
  } catch { /* Browser storage is optional. */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ShowcaseHeader({ mode, boundary, portfolio, openCases, record, onOpenCases, onOpenRecord }: {
  mode: string; boundary: string; portfolio: string; openCases: string; record: string;
  onOpenCases: () => void; onOpenRecord: () => void;
}) {
  const [theme, setTheme] = useState(portfolioTheme);
  useEffect(() => {
    const sync = () => setTheme(portfolioTheme());
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    window.addEventListener('storage', sync);
    media?.addEventListener('change', sync);
    return () => {
      window.removeEventListener('storage', sync);
      media?.removeEventListener('change', sync);
    };
  }, []);
  return <header data-theme={theme} className="showcase-header shrink-0 border-b px-3 sm:px-5 py-3 flex gap-3 items-center justify-between">
    <button className="lg:hidden p-2" aria-label={openCases} onClick={onOpenCases}><PanelLeft size={20} /></button>
    <div className="min-w-0"><p className="font-semibold text-sm"><a className="showcase-brand" href="/work/explainable-trust">Explainable Trust</a> <span className="showcase-muted hidden sm:inline font-normal">/ {mode}</span></p><p className="showcase-muted text-xs sm:text-sm mt-0.5">{boundary}</p></div>
    <button className="lg:hidden p-2 shrink-0" aria-label={record} onClick={onOpenRecord}><PanelRight size={20} /></button>
    <a href="/" className="showcase-portfolio hidden lg:block text-xs underline shrink-0">{portfolio}</a>
  </header>;
}
