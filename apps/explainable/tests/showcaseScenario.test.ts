import { describe, expect, it } from 'vitest';
import { SCENARIO_SNAPSHOTS, scenarioLedger } from '../src/data/scenario';
import { parseLedgerV3 } from '../src/ledger/schema';
import { projectLedger } from '../src/presentation/projectLedger';
import { buildCaseViewExport } from '../src/presentation/exportCase';

function project(step: number) {
  const ledger = scenarioLedger('CASE_demo_test', step);
  return projectLedger({ ledger, runs: [], blobs: [], locale: 'en', metadata: { case_id: ledger.id, display_title: 'Test demo', display_case_number: 'DEMO-TEST', is_archived: false } });
}
describe('authored scenario through real ledger validation', () => {
  it('preserves evidence, revisions, and canonical claim identity through corrections', () => {
    const snapshots = SCENARIO_SNAPSHOTS.map(parseLedgerV3);
    expect(snapshots.map(l => l.current_revision_id)).toEqual(['R01', 'R02', 'R03', 'R04']);
    expect(snapshots.map(l => l.evidence.length)).toEqual([0, 1, 2, 3]);
    expect(snapshots.map(l => l.revisions.at(-1)!.claims.find(c => c.id === 'C01')!.assessment)).toEqual(['Reported', 'Corroborated', 'Corroborated', 'Corroborated']);
    expect(snapshots[2].revisions.at(-1)!.claims.find(c => c.id === 'C02')!.assessment).toBe('Contested');
    expect(snapshots[3].revisions.at(-1)!.claims.find(c => c.id === 'C02')!.proposition).toContain('initiation');
    expect(snapshots[3].revisions.at(-1)!.gaps.find(g => g.id === 'G02')!.status).toBe('resolved');
    expect(snapshots[3].revisions.at(-1)!.gaps.find(g => g.id === 'G03')!.status).toBe('open');
    expect(snapshots[0].revisions[0]).toEqual(snapshots[3].revisions[0]);
    expect(snapshots.every(l => l.revisions.every(r => r.reasoning?.steps.length))).toBe(true);
  });
  it('Previous and Reset select complete snapshots without future evidence or exports', () => {
    const final = buildCaseViewExport(project(3));
    const earlier = buildCaseViewExport(project(1));
    const initial = buildCaseViewExport(project(0));
    expect(final.case.current_revision_id).toBe('R04');
    expect(earlier.case.current_revision_id).toBe('R02');
    expect(initial.case.current_revision_id).toBe('R01');
    expect(JSON.stringify(earlier)).not.toContain('RF-1042');
    expect(JSON.stringify(initial)).not.toContain('E03');
    expect(final.dataset_origin).toBe('authored-fictional-showcase');
    expect(project(1).evidence.map(e => e.id)).toEqual(['E01']);
    expect(project(0).authoritative_record.revisions).toHaveLength(1);
  });
  it('returns isolated snapshots for local sample copies and rejects invalid positions', () => {
    const copy = scenarioLedger('CASE_copy', 0);
    copy.statements[0].text = 'Changed outside the fixture' as never;
    expect(scenarioLedger('CASE_copy', 0).statements[0].text).not.toContain('Changed');
    expect(() => scenarioLedger('CASE_copy', 4)).toThrow('Unknown scenario step');
  });
});
