import { applyProposal, type PreparedLedgerIntake } from '../ledger/applyProposal';
import { createEmptyLedgerCase } from '../ledger/factory';
import * as S from '../ledger/schema';
import type { CanonicalEvidence, LedgerV3Case } from '../ledger/types';
import { parseProviderProposal } from '../provider/proposalSchema';

// Every source and proposal below is authored demo material. No model or search
// provider is called. Each delta passes the same validation and commit boundary.
const instant = (step: number) => S.parseStructuralInstant(`2026-08-11T02:${['00', '15', '20', '40'][step]}:00.000Z`);
const objective = 'Determine what the accepted record supports about the damaged delivery and refund.';
const start = createEmptyLedgerCase({ id: S.parseCaseId('CASE_quickbite-demo'), case_number: S.parseCaseNumber('DEMO-001'), title: S.parseCaseTitle('QuickBite damaged delivery'), created_at: instant(0) });
const statement = 'My QuickBite order arrived damaged, and I want to determine what the current record supports.';
const evidenceText = [
  'DEMO FIXTURE — QuickBite support, order QB-1042, status as of 09:10 local time on 11 August 2026: We acknowledge the packaging damage reported on this delivery. Your refund request is being reviewed; no refund has been issued as of 09:10.',
  'DEMO FIXTURE — QuickBite order status, QB-1042, snapshot as of the same 09:10 local time on 11 August 2026, supplied later: Refund marked complete at 09:10. This status record gives no bank transaction reference or amount.',
  'DEMO FIXTURE — QuickBite support correction, QB-1042, 09:35 local time on 11 August 2026: The completed refund status at 09:10 was posted in error. A refund of VND 185,000 has now been initiated. Reference RF-1042. We cannot confirm receipt in the customer bank account.',
];

const disposition = (source: string, claim: string, relationship = 'supports_claim') => ({ operation_type: 'disposition_source', relationship_type: relationship, source_id: source, target_ref: claim, reason: `${source} is explicitly connected to ${claim} in this authored scenario.` });
const claim = (ref: string, proposition: string, assessment: string, sources: string[], reasoning: string) => ({ operation_type: 'add_claim', local_ref: ref, proposition, actor: 'QuickBite customer and support', action: 'reported', target: 'order QB-1042', domain_time: '11 August 2026', assessment, reasoning, scope: 'This fictional delivery and its refund only.', limits: ['Demo sources are fictional; no finding describes a real customer or transaction.'], source_basis_ids: sources, reason: reasoning });
const gap = (ref: string, question: string, targets: string[], sources: string[]) => ({ operation_type: 'add_gap', local_ref: ref, question, relevance: 'This missing record limits the answer to the customer objective.', resolving_evidence: 'One order-linked support or settlement record.', acquisition_guidance: 'Use a record for QB-1042 with unrelated details removed.', collection_boundary: 'Do not collect credentials, identity documents, or unrelated bank history.', target_claim_refs: targets, source_basis_ids: sources, reason: question });
const action = (ref: string, title: string, gaps: string[], sources: string[]) => ({ operation_type: 'add_action', local_ref: ref, title, description: title, priority: 'high', target_gap_refs: gaps, source_basis_ids: sources, reason: 'This action targets the remaining material gap.' });
const update = (id: string, assessment: string, reasoning: string, sources: string[]) => ({ operation_type: 'update_claim', target_id: id, assessment, reasoning, source_basis_ids: sources, reason: reasoning });
const transition = (kind: 'gap' | 'action', id: string, sources: string[], reason: string) => ({ operation_type: `transition_${kind}`, target_ref: id, resulting_status: kind === 'gap' ? 'resolved' : 'completed', source_basis_ids: sources, reason });
const reasoning = (sources: string[], claims: string[], gaps: string[], answer: string) => ({ turn_intent: 'decide', answer_status: gaps.length ? 'conditional' : 'supported', steps: [
  { id: 'S01', kind: 'fact', text: `The accepted sources ${sources.join(', ')} record the current evidence, with attribution and limitations retained.`, depends_on: [], source_basis_ids: sources, claim_refs: claims, gap_refs: [] },
  ...(gaps.length ? [{ id: 'S02', kind: 'assumption', text: 'The missing record remains an explicit limit; an unverified outcome cannot be treated as established.', depends_on: [], source_basis_ids: [], claim_refs: [], gap_refs: gaps }] : []),
  { id: 'S03', kind: 'conclusion', text: answer, depends_on: gaps.length ? ['S01', 'S02'] : ['S01'], source_basis_ids: [], claim_refs: claims, gap_refs: gaps },
] });

const answers = [
  'Damage is reported by U01. Without an independent delivery-condition record, C01 remains Reported. G01 asks for a focused corroborating record; A01 requests it.',
  'E01 acknowledges the packaging damage, so C01 is Corroborated. E01 also states that no refund was issued. C02 records that limited refund state. G01 is resolved; G02 asks what later refund record exists.',
  'E02 marks the refund complete at the same 09:10 status time that E01 says it was unissued, and supplies no settlement reference. The records conflict about the same time, so C02 is Contested. G02 and A02 remain open: a status label alone does not prove receipt of funds.',
  'E03 explains the erroneous status and supplies an initiation reference. C02 is qualified to refund initiation, and G02 closes. C03 records that support cannot confirm receipt. G03 and A03 remain open for a settlement record; payment receipt is still unverified.',
];

const proposals: unknown[] = [
  { explanation: { text: answers[0], user_goal: objective }, reasoning: reasoning(['U01'], ['new_claim_1'], ['new_gap_1'], answers[0]), operations: [
    claim('new_claim_1', 'The customer reported that the QuickBite order arrived damaged.', 'Reported', ['U01'], 'U01 is the customer report; no independent source has been accepted.'),
    { operation_type: 'add_event', local_ref: 'new_event_1', domain_time: '11 August 2026, at delivery as reported', actor: 'QuickBite customer', action: 'received', target: 'order QB-1042', effect: 'Packaging damage was reported.', assessment: 'Reported', finding_refs: ['new_claim_1'], source_basis_ids: ['U01'], reason: 'This is a reported delivery occurrence, not an app interaction.' },
    disposition('U01', 'new_claim_1'), gap('new_gap_1', 'What independent record corroborates the packaging damage?', ['new_claim_1'], ['U01']), action('new_action_1', 'Obtain one delivery-condition record', ['new_gap_1'], ['U01']),
  ] },
  { explanation: { text: answers[1], user_goal: objective }, reasoning: reasoning(['U01', 'E01'], ['C01', 'new_claim_1'], ['new_gap_1'], answers[1]), operations: [
    update('C01', 'Corroborated', 'E01 independently acknowledges the reported packaging damage for QB-1042.', ['E01']), disposition('E01', 'C01'),
    { operation_type: 'update_event', target_id: 'EV01', assessment: 'Corroborated', source_basis_ids: ['E01'], reason: 'E01 acknowledges the delivery-condition report.' },
    claim('new_claim_1', 'Support stated that the refund for QB-1042 had not yet been issued.', 'Reported', ['E01'], 'E01 reports an unissued refund, with no settlement evidence.'), disposition('E01', 'new_claim_1'),
    transition('gap', 'G01', ['E01'], 'Support acknowledgement corroborates the reported damage.'), transition('action', 'A01', ['E01'], 'The focused delivery-condition record has been accepted.'),
    gap('new_gap_1', 'What later record establishes the refund status for QB-1042?', ['new_claim_1'], ['E01']), action('new_action_1', 'Request an order-linked refund record', ['new_gap_1'], ['E01']),
  ] },
  { explanation: { text: answers[2], user_goal: objective }, reasoning: reasoning(['E01', 'E02'], ['C02'], ['G02'], answers[2]), operations: [
    update('C02', 'Contested', 'E01 reports an unissued refund at 09:10; E02 marks it complete at that same time without a settlement reference. These are conflicting records, not a later status progression.', ['E01', 'E02']), disposition('E02', 'C02', 'conflicts_with_claim'),
    { operation_type: 'update_gap', target_id: 'G02', question: 'Which refund record explains the conflicting status and establishes settlement?', source_basis_ids: ['E01', 'E02'], reason: 'The conflicting status increases the need for a referenced correction.' },
  ] },
  { explanation: { text: answers[3], user_goal: objective }, reasoning: reasoning(['E03'], ['C02', 'new_claim_1'], ['new_gap_1'], answers[3]), operations: [
    { ...update('C02', 'Corroborated', 'E03 corrects the erroneous status in E02 and records refund initiation with RF-1042. This does not establish bank settlement.', ['E03']), proposition: 'Support records initiation of a VND 185,000 refund with reference RF-1042.' }, disposition('E03', 'C02', 'qualifies_claim'),
    transition('gap', 'G02', ['E03'], 'E03 explains the conflicting status and identifies the initiation reference.'), transition('action', 'A02', ['E03'], 'A referenced refund correction has been accepted.'),
    claim('new_claim_1', 'Support cannot confirm receipt of the refund in the customer bank account.', 'Reported', ['E03'], 'E03 explicitly limits its knowledge to refund initiation.'), disposition('E03', 'new_claim_1'),
    gap('new_gap_1', 'Has the refund actually settled in the customer account?', ['C02', 'new_claim_1'], ['E03']), action('new_action_1', 'Check one redacted settlement confirmation', ['new_gap_1'], ['E03']),
  ] },
];

function commitStep(parent: LedgerV3Case, index: number) {
  const intakeId = S.IntakeIdSchema.parse(`IN0${index + 1}`);
  const evidence: CanonicalEvidence[] = index === 0 ? [] : [{
    id: S.EvidenceIdSchema.parse(`E0${index}`), source_intake_id: intakeId,
    label: S.PreservedNonBlankTextSchema.parse(['Support acknowledgement (demo)', 'Refund status (demo)', 'Support correction (demo)'][index - 1]),
    claimed_source: S.PreservedNonBlankTextSchema.parse('Authored fictional QuickBite record'), acquisition_method: 'pasted_text', input_form: 'document', original_domain_time: S.DomainTimeTextSchema.parse(index === 3 ? '11 August 2026, 09:35 local time' : '11 August 2026, 09:10 local time'), subject_object_ids: [],
    content: { raw_text: S.PreservedNonBlankTextSchema.parse(evidenceText[index - 1]), extracted_text: null, blob: null },
  }];
  const statements = index === 0 ? [{ id: S.StatementIdSchema.parse('U01'), source_intake_id: intakeId, text: S.PreservedNonBlankTextSchema.parse(statement) }] : [];
  const prepared: PreparedLedgerIntake = { intake: { id: intakeId, received_at: instant(index), parts: index === 0 ? [{ kind: 'statement', statement_id: statements[0].id, raw_text: statements[0].text }] : [{ kind: 'evidence', evidence_id: evidence[0].id }] }, statements, evidence, revision_id: S.RevisionIdSchema.parse(`R0${index + 1}`), model_run_id: S.ModelRunIdSchema.parse(`MR0${index + 1}`), created_at: instant(index), objective: S.SemanticTextSchema.parse(objective) };
  const head = parent.revisions.at(-1);
  const raw = structuredClone(proposals[index]) as { operations: unknown[] };
  if (evidence.length) raw.operations.unshift({ operation_type: 'inspect_source', evidence_id: evidence[0].id, source_attribution: 'An authored fictional source supplied with the scenario.', case_object_match: 'The text explicitly references order QB-1042.', match_status: 'matched', completeness_context: 'Only this authored excerpt is available.', integrity_signals: 'No original binary or independent authenticity check is present.', limitations: ['Fictional demo material; no original file or external verification.'], reason: 'Record the known boundary before accepting a source disposition.' });
  const proposal = parseProviderProposal(raw, {
    availableSourceIds: new Set([...parent.statements, ...statements, ...parent.evidence, ...evidence].map(s => s.id)),
    existingClaimIds: new Set(head?.claims.map(s => s.id) ?? []), existingGapIds: new Set(head?.gaps.map(s => s.id) ?? []), existingEventIds: new Set(head?.events.map(s => s.id) ?? []), existingActionIds: new Set(head?.actions.map(s => s.id) ?? []),
  });
  return applyProposal({ parent, prepared, proposal });
}

export const SCENARIO_STEPS = proposals.map((_, index) => ({ index, summary: answers[index] }));
export const SCENARIO_SNAPSHOTS: LedgerV3Case[] = [];
for (let step = 0; step < proposals.length; step++) SCENARIO_SNAPSHOTS.push(commitStep(SCENARIO_SNAPSHOTS.at(-1) ?? start, step));
export function scenarioLedger(caseId: string, step: number): LedgerV3Case {
  if (!Number.isInteger(step) || step < 0 || step >= SCENARIO_SNAPSHOTS.length) throw new Error('Unknown scenario step.');
  return S.parseLedgerV3({ ...structuredClone(SCENARIO_SNAPSHOTS[step]), id: S.parseCaseId(caseId) });
}
