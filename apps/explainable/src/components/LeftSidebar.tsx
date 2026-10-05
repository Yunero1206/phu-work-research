import { useState } from 'react';
import { Archive, MoreHorizontal, Plus, ShieldCheck, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LOCALES, type Locale } from '../lib/translations';
import { showcaseText } from '../lib/showcaseText';
import type { DemoCase } from '../storage/showcaseStore';

export function LeftSidebar({ cases, currentCaseId, onSelectCase, onLoadSample, onUpdateCase, onDeleteCase, isMobileOpen, onCloseMobile }: {
  cases: DemoCase[]; currentCaseId: string | null; onSelectCase: (id: string) => void; onLoadSample: () => void;
  onUpdateCase: (id: string, change: Partial<DemoCase>) => void; onDeleteCase: (id: string) => void; isMobileOpen: boolean; onCloseMobile: () => void;
}) {
  const { locale, setLocale } = useLanguage();
  const t = showcaseText(locale);
  const [menu, setMenu] = useState<string | null>(null);
  const [editing, setEditing] = useState<DemoCase | null>(null);
  const [deleting, setDeleting] = useState<DemoCase | null>(null);
  const content = <div className="h-full flex flex-col bg-white border-r border-slate-200">
    <div className="p-4 flex items-center justify-between border-b border-slate-200"><div className="flex gap-2 items-center font-semibold text-sm"><ShieldCheck size={18} />Explainable Trust</div><button onClick={onCloseMobile} className="lg:hidden p-1" aria-label={t.close}><X size={18} /></button></div>
    <div className="p-3"><button onClick={() => { onLoadSample(); onCloseMobile(); }} disabled={cases.length >= 100} className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 text-white rounded-lg text-sm disabled:opacity-40"><Plus size={16} />{t.load}</button></div>
    <div className="flex-1 overflow-y-auto p-2 space-y-1">{cases.map(c => <div key={c.id} className={`rounded-lg border ${currentCaseId === c.id ? 'bg-slate-100 border-slate-300' : 'border-transparent'}`}>
      <div className="flex items-center"><button className="flex-1 text-left px-3 py-3 min-w-0" onClick={() => { onSelectCase(c.id); onCloseMobile(); }}><span className="block text-xs font-mono text-slate-500">{c.number} {c.archived && <Archive size={12} className="inline" />}</span><span className="block text-sm truncate">{c.title}</span></button><button className="p-2 mr-1" aria-label={`${t.options}: ${c.title}`} onClick={() => setMenu(menu === c.id ? null : c.id)} aria-expanded={menu === c.id}><MoreHorizontal size={18} /></button></div>
      {menu === c.id && <div className="flex flex-wrap gap-1 px-2 pb-2 text-xs"><button className="demo-small-button" onClick={() => { setEditing({ ...c }); setMenu(null); }}>{t.rename}</button><button className="demo-small-button" onClick={() => { onUpdateCase(c.id, { archived: !c.archived }); setMenu(null); }}>{c.archived ? t.restore : t.archive}</button><button className="demo-small-button" onClick={() => { setDeleting(c); setMenu(null); }}>{t.remove}</button></div>}
    </div>)}</div>
    <div className="p-3 border-t border-slate-200"><label className="text-xs text-slate-500 block mb-1" htmlFor="demo-language">{t.language}</label><select id="demo-language" value={locale} onChange={e => setLocale(e.target.value as Locale)} className="w-full border border-slate-300 rounded-lg p-2 text-sm bg-white">{LOCALES.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}</select><a href="/" className="block mt-3 text-sm text-slate-600 underline">{t.portfolio}</a></div>
  </div>;
  return <>
    <aside className="hidden lg:block w-60 shrink-0">{content}</aside>
    {isMobileOpen && <div className="fixed inset-0 z-40 lg:hidden"><div className="absolute inset-0 bg-slate-900/40" onClick={onCloseMobile} /><aside className="absolute inset-y-0 left-0 w-72 max-w-[90vw]">{content}</aside></div>}
    {(editing || deleting) && <div className="fixed inset-0 z-50 bg-slate-900/40 grid place-items-center p-4"><div role="dialog" aria-modal="true" aria-label={editing ? t.rename : t.remove} className="bg-white p-5 rounded-xl w-full max-w-sm shadow-xl">
      {editing ? <form onSubmit={e => { e.preventDefault(); if (!editing.title.trim() || !editing.number.trim()) return; onUpdateCase(editing.id, { title: editing.title.trim(), number: editing.number.trim() }); setEditing(null); }}><label className="block text-sm mb-3">{t.number}<input autoFocus required value={editing.number} onChange={e => setEditing({ ...editing, number: e.target.value })} className="block mt-1 w-full border p-2 rounded" /></label><label className="block text-sm mb-4">{t.title}<input required value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} className="block mt-1 w-full border p-2 rounded" /></label><div className="flex gap-2"><button className="demo-small-button" type="submit">{t.save}</button><button className="demo-small-button" type="button" onClick={() => setEditing(null)}>{t.cancel}</button></div></form> : <><p className="mb-4">{t.deleteQuestion}</p><div className="flex gap-2"><button className="demo-small-button" onClick={() => { onDeleteCase(deleting!.id); setDeleting(null); }}>{t.remove}</button><button className="demo-small-button" onClick={() => setDeleting(null)}>{t.cancel}</button></div></>}
    </div></div>}
  </>;
}
