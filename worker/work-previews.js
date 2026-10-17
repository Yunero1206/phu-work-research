// Short browsing previews. Full research titles, claims and source material stay in case-library.js.
// Source-version dates, not website publication dates. Month-only dates retain that precision.
// Two undated working models stay undated until a source date is recorded.
const sourceUpdates = {
  '/work/pnj-after-the-diamond-shock': '2026-10-09',
  '/work/shopee-account-restrictions': '2026-10-05',
  '/work/vieworld': '2026-10-04',
  '/work/zalo-scam-emergency-mode': '2026-09-07',
  '/work/creator-platform-operating-model': '2026-09-07',
  '/work/explainable-trust': '2026-09',
  '/work/datvietvac-who-owns-the-fan-promise': '2026-08-31',
  '/work/vieshop-fan-centred-merchandise-system': '2026-08-23',
  '/work/datvietvac-fandom-cards': '2026-08-16',
  '/work/adobe-account-restriction': '2026-08-07',
  '/work/post-signing-artist-label-operations': '2026-08',
  '/work/datvietvac-ownership-belonging': '2026-08',
  '/work/metub-creator-economy': '2026-08',
  '/work/artist-fandom-page': '2026-08',
  '/work/vietnam-diamond-market-crisis': '2026-07-21',
  '/work/vinamilk-trusted-nutrition': '2026-07',
  '/work/elfie-trust-safe-activation': '2026-07',
  '/work/diamond-trust-chain-collapse': '2026-07',
  '/work/ai-judgment-decisions': '2026-07',
  '/work/ai-apprenticeship': '2026-07',
  '/work/zalopay-smes-when-paid-not-done': '2026-07',
  '/work/momo-ai-paylater': '2026-07'
};
const thumbnailCells = {
  '/work/pnj-after-the-diamond-shock': 'pnj',
  '/work/shopee-account-restrictions': 'shopee',
  '/work/zalo-scam-emergency-mode': 'zalo',
  '/work/creator-platform-operating-model': 'mfan'
};
const essays = new Set(['diamond-trust-chain-collapse', 'ai-judgment-decisions', 'ai-apprenticeship', 'zalopay-smes-when-paid-not-done', 'metub-creator-economy', 'momo-ai-paylater']);
export const workPreviews = [
  {
    path: '/work/vieworld', label: 'VieWorld',
    hook: 'What gives fans a reason to return?',
    detail: 'A working prototype connecting artist Moments, recurring community, shared memory, and a fan’s own space.',
    stage: 'Working prototype',
    thumbnail: '/assets/vieworld-moments.webp', thumbnailAlt: 'VieWorld prototype with artist Moments and a shared community meadow'
  },
  {
    path: '/work/shopee-account-restrictions', label: 'Shopee',
    hook: 'The account is back. Is the purchase?',
    detail: '35 public narratives, an October incident extension, and a proposed pathway from account resolution to commerce recovery.',
    stage: 'Research + case extension',
  },
  {
    path: '/work/explainable-trust', label: 'Explainable Trust',
    hook: 'Can you trace a decision back to its evidence?',
    detail: 'Inspect a fictional case as new evidence changes the ledger, exposes a contradiction, and leaves a gap unresolved.',
    stage: 'Interactive showcase',
  },
  {
    path: '/work/fanme-controlled-growth', label: 'FanMe',
    hook: 'Can the second artist launch be easier?',
    detail: 'A proposed six-week pilot: readiness checks, controlled traffic, recovery owners, and a test of what transfers to the next artist.',
    stage: 'Proposed operating pilot',
  },
  {
    path: '/work/vinamilk-trusted-nutrition', label: 'Vinamilk',
    hook: 'What if the quiet store isn’t the real problem?',
    detail: 'Three linked papers move from proving a nutrition proposition to preserving trust through delivery, scale, and governance.',
    stage: 'Outside-in research',
  },
  {
    path: '/work/pnj-after-the-diamond-shock', label: 'PNJ',
    hook: 'From product assurance to enterprise reliability',
    detail: 'Follow the July–October record from product assurance to buyback obligations, recovery capacity, and enterprise reliability.',
    stage: 'Longitudinal research',
    signal: ['Product assurance', 'Customer promise', 'Recovery']
  },
  {
    path: '/work/creator-platform-operating-model', label: 'MFan',
    hook: 'One membership. Several promises to keep.',
    detail: 'Two research cuts trace membership through activation, benefits, exception recovery, accepted handoffs, and reporting close.',
    stage: 'Outside-in operating case',
    signal: ['Purchase', 'Benefit', 'Accepted handoff']
  },
  {
    path: '/work/zalo-scam-emergency-mode', label: 'Zalo',
    hook: 'Before trust becomes an irreversible transfer.',
    detail: 'An outside-in safety concept connects conversation context, intervention, evidence preservation, and recovery ownership.',
    stage: 'Product & safety concept',
    signal: ['Context', 'Intervene', 'Preserve']
  },
  {
    path: '/work/elfie-trust-safe-activation', label: 'Elfie',
    hook: 'First value, with the user still in control.',
    detail: 'A proposed activation pathway keeps role, consent, data quality, and sharing visible while testing retained health routines.',
    stage: 'Product strategy work sample',
    signal: ['Understand', 'First value', 'Retained routine']
  },
  {
    path: '/work/post-signing-artist-label-operations', label: 'Artist / label operations',
    hook: 'The deal is signed. Who carries it forward?',
    detail: 'An operating model for the approvals, commitments, changes, and incidents that sit between an agreement and its delivery.',
    stage: 'Proposed operating model',
    signal: ['Commit', 'Coordinate', 'Deliver']
  },
  {
    path: '/work/datvietvac-ownership-belonging', label: 'DatVietVAC · Ownership & Belonging',
    hook: 'Can a purchase become a lasting connection?',
    detail: 'Explore fan history, contribution, and recognition alongside the cost, fulfilment, and governance needed to support them.',
    stage: 'Merchandise growth work sample',
    signal: ['Purchase', 'History', 'Recognition']
  },
  {
    path: '/work/datvietvac-fandom-cards', label: 'DatVietVAC · Fandom Cards',
    hook: 'Twelve cards. What makes fans carry them?',
    detail: 'A proposed collectibles line earns each expansion through everyday circulation, pilot economics, rights, and production gates.',
    stage: 'Proposed product line',
    signal: ['Carry', 'Share', 'Trade']
  },
  {
    path: '/work/vieshop-fan-centred-merchandise-system', label: 'VieSHOP',
    hook: 'What happens between merchandise campaigns?',
    detail: 'A product and commerce case for a store that can transact reliably, support exploration, and learn across artists and IPs.',
    stage: 'Independent commerce case',
    signal: ['Transact', 'Explore', 'Learn']
  },
  {
    path: '/work/datvietvac-who-owns-the-fan-promise', label: 'DatVietVAC · Fan Promise',
    hook: 'Who owns the order after checkout?',
    detail: 'Trace an accepted transaction through commitment records, backlog, fulfilment, and customer recovery using bounded public evidence.',
    stage: 'Outside-in evidence case',
    signal: ['Accepted', 'Traceable', 'Closed']
  },
  {
    path: '/work/vietnam-diamond-market-crisis', label: 'Vietnam’s diamond market',
    hook: 'One crisis—or several stories moving together?',
    detail: 'A July research cut separates public events, company responses, market signals, alternative readings, and unresolved evidence gaps.',
    stage: 'Evidence-first research · July cut',
    signal: ['Observe', 'Compare', 'Bound the claim']
  },
  {
    path: '/work/diamond-trust-chain-collapse', label: 'Diamond Trust Chain',
    hook: 'What if the proof itself needs proof?',
    detail: 'An essay on certificates as compressed trust signals—and what must become inspectable when those signals are questioned.',
    stage: 'Research essay',
    signal: ['Certificate', 'Reliance', 'Reconstruction']
  },
  {
    path: '/work/adobe-account-restriction', label: 'Adobe',
    hook: 'When an account decision interrupts the work.',
    detail: 'A comparative evidence case on continuity and recovery when enforcement affects a tool someone has already paid to use.',
    stage: 'Comparative evidence research',
    signal: ['Restriction', 'Work interrupted', 'Recovery']
  },
  {
    path: '/work/pathway-lens-operational-cycles', label: 'Pathway Lens',
    hook: 'What is an AI output allowed to become?',
    detail: 'A working research lens traces outputs into records, decisions, actions, and memory, with evidence, authority, and recovery at each boundary.',
    stage: 'Working research lens',
    signal: ['Output', 'Reliance', 'Consequence']
  },
  {
    path: '/work/ai-judgment-decisions', label: 'AI & judgment',
    hook: 'A better answer—or better judgment?',
    detail: 'A research hypothesis asks whether repeated AI assistance strengthens the user’s own ability to judge evidence and uncertainty.',
    stage: 'Working hypothesis',
    signal: ['AI help', 'User judgment', 'Transfer test']
  },
  {
    path: '/work/ai-apprenticeship', label: 'AI Apprenticeship',
    hook: 'Before AI gets authority, what should it learn?',
    detail: 'An observer-to-actor hypothesis examines organizational context, boundaries, exceptions, and human responsibility before operational authority.',
    stage: 'Working hypothesis',
    signal: ['Observe', 'Understand', 'Earn authority']
  },
  {
    path: '/work/zalopay-smes-when-paid-not-done', label: 'ZaloPay & SMEs',
    hook: 'Paid is not the same as done.',
    detail: 'A hypothesis about the order, stock, cash-flow, and reconciliation work that begins after a small merchant receives payment.',
    stage: 'Working hypothesis',
    signal: ['Payment', 'Operations', 'Reconcile']
  },
  {
    path: '/work/metub-creator-economy', label: 'METUB & creators',
    hook: 'What changes when creating becomes a business?',
    detail: 'An essay on the infrastructure, rights, payment, and continuity creators may need—and the responsibilities a platform may inherit.',
    stage: 'Working hypothesis',
    signal: ['Create', 'Operate', 'Sustain']
  },
  {
    path: '/work/momo-ai-paylater', label: 'MoMo AI PayLater',
    hook: 'Approval is only the beginning.',
    detail: 'A research hypothesis shifts attention from conversion to affordability context, repayment experience, and the consequence after “yes.”',
    stage: 'Working hypothesis',
    signal: ['Approve', 'Repay', 'Live with it']
  },
  {
    path: '/work/artist-fandom-page', label: 'Artist Fandom Page',
    hook: 'An earlier sketch of fan continuity.',
    detail: 'The August exploration of artist hubs and fan dashboards is retained here as context. Continue to VieWorld for the current ecosystem and prototype.',
    stage: 'Early exploration → VieWorld',
    signal: ['Discover', 'Participate', 'Return']
  }
].map(preview => ({
  ...preview,
  updated: sourceUpdates[preview.path] || '',
  format: ['/work/vieworld', '/work/explainable-trust'].includes(preview.path) ? 'prototype' : essays.has(preview.path.slice(6)) ? 'essay' : preview.path === '/work/artist-fandom-page' ? 'concept' : 'case',
  thumbnailCell: thumbnailCells[preview.path],
  thumbnail: thumbnailCells[preview.path] ? '/assets/work-thumbnail-sheet.webp' : preview.path === '/work/explainable-trust' ? '/assets/work-explainable.webp' : preview.thumbnail || '',
  thumbnailAlt: thumbnailCells[preview.path] ? 'Editorial illustration of ' + preview.label + ': ' + preview.hook : preview.path === '/work/explainable-trust' ? 'Editorial illustration of a fictional Explainable Trust case ledger, source records, and reasoning graph' : preview.thumbnailAlt,
  thumbnailSteps: preview.path === '/work/fanme-controlled-growth' ? ['Readiness', 'One launch', 'Transfer test'] : preview.path === '/work/vinamilk-trusted-nutrition' ? ['Proposition', 'Delivery', 'Trust'] : preview.signal
}));
