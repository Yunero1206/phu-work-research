import { useEffect, useMemo, useState } from 'react';
import { PanelLeft, PanelRight, RotateCcw } from 'lucide-react';
import { LeftSidebar } from './components/LeftSidebar';
import { RightCaseRecord } from './components/RightCaseRecord';
import { ReasoningGraphView } from './components/ReasoningGraphView';
import { ReferenceDetailModal } from './components/ReferenceDetailModal';
import { ExportModal } from './components/ExportModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CaseKeyButton } from './components/CaseKeyButton';
import { projectLedger } from './presentation/projectLedger';
import { scenarioLedger, SCENARIO_STEPS } from './data/scenario';
import { initialWorkspace, loadDemoWorkspace, saveDemoWorkspace, type DemoCase } from './storage/showcaseStore';
import { useLanguage } from './contexts/LanguageContext';
import { showcaseText } from './lib/showcaseText';
import type { CaseReference } from './types';
import { caseReferenceFromId } from './presentation/caseReferences';

export default function App() {
  const { locale } = useLanguage();
  const t = showcaseText(locale);
  const [workspace, setWorkspace] = useState(initialWorkspace);
  const [loaded, setLoaded] = useState(false);
  const [persistent, setPersistent] = useState(true);
  const [selected, setSelected] = useState<CaseReference | null>(null);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [tab, setTab] = useState<'scenario' | 'graph'>('scenario');
  useEffect(() => { let cancelled = false; loadDemoWorkspace().then(value => { if (!cancelled) setWorkspace(value); }).catch(() => { if (!cancelled) setPersistent(false); }).finally(() => { if (!cancelled) setLoaded(true); }); return () => { cancelled = true; }; }, []);
  useEffect(() => { if (loaded && persistent) saveDemoWorkspace(workspace).catch(() => setPersistent(false)); }, [workspace, loaded, persistent]);
  const current = workspace.cases.find(c => c.id === workspace.currentCaseId);
  const ledger = useMemo(() => current ? scenarioLedger(current.id, current.step) : null, [current?.id, current?.step]);
  const presentation = useMemo(() => ledger && current ? projectLedger({ ledger, runs: [], blobs: [], metadata: { case_id: ledger.id, display_title: current.title, display_case_number: current.number, is_archived: current.archived }, locale }) : null, [ledger, current, locale]);
  const revision = ledger?.revisions.at(-1);
  useEffect(() => { setSelected(null); setExportOpen(false); }, [current?.id, current?.step]);
  function updateCase(id: string, change: Partial<DemoCase>) { setWorkspace(w => ({ ...w, cases: w.cases.map(c => c.id === id ? { ...c, ...change } : c) })); }
  function loadSample() {
    const id = `CASE_demo_${crypto.randomUUID().replaceAll('-', '_')}`;
    setWorkspace(w => w.cases.length >= 100 ? w : ({ ...w, cases: [...w.cases, { id, number: `DEMO-${String(w.cases.length + 1).padStart(3, '0')}`, title: 'QuickBite damaged delivery', archived: false, step: 0 }], currentCaseId: id }));
  }
  function selectReference(ref: CaseReference) { setSelected({ ...ref }); if (ref.kind === 'statement') { setTab('scenario'); setRightOpen(false); } else if (['event', 'gap', 'action'].includes(ref.kind)) setRightOpen(true); }
  function rich(text: string) { return text.split(/(\b(?:EV|U|E|C|G|A)\d{2,}\b)/g).map((part, i) => { const ref = caseReferenceFromId(part); return ref ? <CaseKeyButton key={i} reference={ref} onSelect={selectReference} /> : <span key={i}>{part}</span>; }); }
  if (!loaded) return <div className="h-screen grid place-items-center">Explainable Trust…</div>;
  return <ErrorBoundary><div className="h-dvh w-full flex flex-col overflow-hidden bg-slate-50 text-slate-900">
    <header className="shrink-0 border-b border-slate-200 bg-white px-3 sm:px-5 py-3 flex gap-3 items-center justify-between"><button className="lg:hidden p-2" aria-label={t.openCases} onClick={() => setLeftOpen(true)}><PanelLeft size={20} /></button><div className="min-w-0"><p className="font-semibold text-sm">Explainable Trust <span className="hidden sm:inline text-slate-500 font-normal">/ {t.mode}</span></p><p className="text-xs sm:text-sm text-slate-500 mt-0.5">{t.boundary}</p></div><button className="lg:hidden p-2 shrink-0" aria-label={t.record} onClick={() => setRightOpen(true)}><PanelRight size={20} /></button><a href="/" className="hidden lg:block text-sm text-slate-600 underline">{t.portfolio}</a></header>
    <div className="flex flex-1 overflow-hidden">
      <LeftSidebar cases={workspace.cases} currentCaseId={workspace.currentCaseId} onSelectCase={id => setWorkspace(w => ({ ...w, currentCaseId: id }))} onLoadSample={loadSample} onUpdateCase={updateCase} onDeleteCase={id => setWorkspace(w => { const cases = w.cases.filter(c => c.id !== id); return { ...w, cases, currentCaseId: w.currentCaseId === id ? cases[0]?.id ?? null : w.currentCaseId }; })} isMobileOpen={leftOpen} onCloseMobile={() => setLeftOpen(false)} />
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {current && ledger && revision ? <>
          <div className="px-4 sm:px-6 pt-4 pb-3 border-b border-slate-200 bg-white shrink-0"><div className="flex justify-between gap-3 mb-3"><div className="min-w-0"><p className="text-xs font-mono text-slate-500">{current.number} · {revision.id}</p><h1 className="font-semibold text-lg truncate">{current.title}</h1></div><button className="demo-small-button self-start flex gap-1 items-center" onClick={() => updateCase(current.id, { step: 0 })}><RotateCcw size={14} /><span>{t.reset}</span></button></div>
            <ol className="grid grid-cols-4 gap-1.5" aria-label={t.narrative}>{t.steps.map((name, i) => <li key={i}><button onClick={() => updateCase(current.id, { step: i })} aria-current={i === current.step ? 'step' : undefined} className={`w-full text-left rounded-lg px-2 py-2 text-xs sm:text-sm border ${i === current.step ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200'}`}><span className="block font-mono text-xs opacity-70">0{i + 1}</span>{name}</button></li>)}</ol>
          </div>
          <div className="flex gap-3 border-b border-slate-200 px-4 sm:px-6 bg-white shrink-0" role="tablist" aria-label="Case view"><button role="tab" aria-selected={tab === 'scenario'} onClick={() => setTab('scenario')} className={`py-3 text-sm border-b-2 ${tab === 'scenario' ? 'border-slate-900 font-semibold' : 'border-transparent text-slate-500'}`}>{t.narrative}</button><button role="tab" aria-selected={tab === 'graph'} onClick={() => setTab('graph')} className={`py-3 text-sm border-b-2 ${tab === 'graph' ? 'border-slate-900 font-semibold' : 'border-transparent text-slate-500'}`}>{t.graph}</button></div>
          {tab === 'graph' ? <div className="flex-1 min-h-0" role="tabpanel"><ReasoningGraphView key={`${current.id}-${current.step}`} caseData={presentation} onSelectReference={selectReference} focusedReference={selected} className="h-full" /></div> : <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5" role="tabpanel">
            <article className="bg-white border border-slate-200 rounded-xl p-5"><p className="text-xs uppercase tracking-wider text-slate-500 mb-2">{t.step} {current.step + 1} / 4</p><h2 className="font-semibold text-lg mb-3">{t.steps[current.step]}</h2><p className="text-sm sm:text-base leading-7">{rich(SCENARIO_STEPS[current.step].summary)}</p></article>
            <section><h2 className="font-semibold text-sm mb-3">{t.sources}</h2><div className="space-y-3">{ledger.statements.map(s => <article id={`statement-${s.id}`} key={s.id} className={`bg-white border rounded-xl p-4 ${selected?.id === s.id ? 'border-indigo-500' : 'border-slate-200'}`}><CaseKeyButton reference={{ kind: 'statement', id: s.id }} onSelect={selectReference} /><p className="mt-2 text-sm leading-6 whitespace-pre-wrap">{s.text}</p></article>)}{ledger.evidence.map(e => <article key={e.id} className="bg-white border border-slate-200 rounded-xl p-4"><div className="flex items-center gap-2"><CaseKeyButton reference={{ kind: 'evidence', id: e.id }} onSelect={selectReference} /><h3 className="font-medium text-sm">{e.label}</h3></div><p className="mt-2 text-sm leading-6 whitespace-pre-wrap">{e.content.raw_text}</p></article>)}</div></section>
          </div>}
          <footer className="bg-white border-t border-slate-200 px-4 sm:px-6 py-3 shrink-0"><div className="flex justify-between gap-3"><button className="demo-small-button disabled:opacity-35" disabled={current.step === 0} onClick={() => updateCase(current.id, { step: current.step - 1 })}>{t.previous}</button><span className="text-xs text-slate-500 self-center">{revision.id} · {current.step + 1}/4</span><button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm disabled:opacity-35" disabled={current.step === 3} onClick={() => updateCase(current.id, { step: current.step + 1 })}>{t.next}</button></div><p className="text-xs text-slate-500 mt-2" role="status">{persistent ? t.storage : t.memory}</p></footer>
        </> : <div className="flex-1 grid place-items-center p-6"><div><p className="mb-4">{t.empty}</p><button className="demo-small-button" onClick={loadSample}>{t.load}</button></div></div>}
      </main>
      <RightCaseRecord key={`${current?.id}-${current?.step}`} caseData={presentation} onSelectReference={selectReference} focusedReference={selected} onExportJson={() => setExportOpen(true)} isMobileOpen={rightOpen} onCloseMobile={() => setRightOpen(false)} />
    </div>
    {selected && presentation && (selected.kind === 'evidence' || selected.kind === 'finding') && <ReferenceDetailModal caseData={presentation} reference={selected} onClose={() => setSelected(null)} onSelectReference={selectReference} />}
    {exportOpen && presentation && <ExportModal caseData={presentation} onClose={() => setExportOpen(false)} />}
  </div></ErrorBoundary>;
}
