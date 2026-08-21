// ============================================================================
// Pham Thanh Phu — Work & Research Master Cloudflare Worker
// Synchronized 1-to-1 with Notion Master Work Library & Google Drive Assets
// ============================================================================

const finalModes = [
  {
    "id": "product-ops",
    "num": "01",
    "label": "Product & Operating Work",
    "short": "Product & Ops",
    "description": "Observed problems translated into product direction, operating architecture, ownership, metrics, stage gates, or execution design."
  },
  {
    "id": "evidence-first",
    "num": "02",
    "label": "Evidence-First Cases & Trust Research",
    "short": "Evidence & Trust",
    "description": "Specific contradictions, events, and trust pathways reconstructed with conclusions proportional to the available evidence."
  },
  {
    "id": "essays",
    "num": "03",
    "label": "Research Essays & Working Hypotheses",
    "short": "Essays & Hypotheses",
    "description": "Propositions developed from real product, platform, or organizational observations and kept open to comparative or empirical testing."
  },
  {
    "id": "concepts",
    "num": "04",
    "label": "Concepts & Product Explorations",
    "short": "Concepts",
    "description": "Early directions made visible enough to inspect and test, without being presented as validated products or implemented systems."
  }
];

const finalWorkLibrary = [
  {
    "index": 1,
    "path": "/work/vinamilk-trusted-nutrition",
    "title": "Vinamilk — Trusted Nutrition Product-Service Discovery",
    "question": "What trusted nutrition proposition deserves to exist—and can its valued attributes survive delivery, scale, and later governance?",
    "maturity": "Developed outside-in research",
    "type": "Product-Service Discovery Research",
    "tags": "Strategy under uncertainty · Stage-gated investment · Operating blueprint · Capability stewardship",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Vinamilk-Trusted-Nutrition-Product-Service-Discovery-3a16210cf1c780c88ff5cb1a31d22a6e"
  },
  {
    "index": 2,
    "path": "/work/creator-platform-operating-model",
    "title": "Creator Platform Operating Model — MFan / fandom-commerce",
    "question": "How can identity, membership, payment, ticketing, fulfilment, support, settlement, and reporting remain connected across multiple creator surfaces?",
    "maturity": "Working Model",
    "type": "Outside-in Operating Model",
    "tags": "Platform operations · Shared-state design · Entitlement and reconciliation · Phased implementation",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Creator-Platform-Operating-Model-MFan-fandom-commerce-3926210cf1c7808ea5b8ca1f0d975302"
  },
  {
    "index": 3,
    "path": "/work/elfie-trust-safe-activation",
    "title": "Elfie Product Case — Trust-Safe Activation",
    "question": "How can a health product reach first value and retained routine while making role, consent, data quality, and sharing boundaries visible?",
    "maturity": "Developed Work Sample",
    "type": "Product Strategy Work Sample",
    "tags": "Product diagnosis · Activation pathway · Event instrumentation · Experiments and roadmap",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Elfie-Product-Case-Trust-Safe-Activation-3926210cf1c780138d3dfb16dba10e43"
  },
  {
    "index": 4,
    "path": "/work/post-signing-artist-label-operations",
    "title": "Post-Signing Artist / Label Operations",
    "question": "Why does a signed partnership still require so much invisible coordination to succeed?",
    "maturity": "Working Model",
    "type": "Operating Model / Role-Understanding Work Sample",
    "tags": "Decision rights · Approval and commitment records · Change control · Incident and portfolio operations",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Post-Signing-Artist-Label-Operations-3926210cf1c780448dfae5e58d79a084"
  },
  {
    "index": 5,
    "path": "/work/shopee-account-restrictions",
    "title": "Shopee Account Restrictions — Customer Resolution Under Platform Uncertainty",
    "question": "After a marketplace restricts a customer account, what must remain visible and actionable so the customer can understand, preserve, contest, resolve, or escalate?",
    "maturity": "Developed Work Sample",
    "type": "Evidence-Based Product Operations Case",
    "tags": "Customer-resolution pathway · Evidence coding · Affected-interest recovery · Policy/legal boundaries · Pilot and metrics",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Shopee-Account-Restrictions-Customer-Resolution-Under-Platform-Uncertainty-39e6210cf1c780e59278fdabe558ff57"
  },
  {
    "index": 6,
    "path": "/work/fanme-controlled-growth",
    "title": "FanMe Controlled Growth Pilot — Building a Repeatable Artist-Launch Operating System",
    "question": "Can FanMe use one controlled artist launch to make the fan journey reliable, contain operational risk, and build capability that transfers to the next artist?",
    "maturity": "Developed Work Sample",
    "type": "Controlled Growth & Launch Operations Case",
    "tags": "Launch readiness · Controlled traffic waves · Rights and commitment controls · Recovery · Scale gates and transfer testing",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/FanMe-Controlled-Growth-Pilot-Building-a-Repeatable-Artist-Launch-Operating-System-3b36210cf1c781a7a892d8a5484c3f5a"
  },
  {
    "index": 7,
    "path": "/work/datvietvac-ownership-belonging",
    "title": "DatVietVAC — Ownership & Belonging: Merchandise Growth Case",
    "question": "Can verified fan contribution persist beyond a purchase or event as ownership, history, or recognition—without turning novelty into uncontrolled cost or operational complexity?",
    "maturity": "Developed Work Sample",
    "type": "Merchandise Growth & IP Commercialization Case",
    "tags": "IP commercialization · Customer-history mechanics · Merchandise/event continuity · Reward economics · Ownership & governance · Pilot and scale gates",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/DatVietVAC-Ownership-Belonging-Merchandise-Growth-Case-3ba6210cf1c78109b32be340581c11c4"
  },
  {
    "index": 8,
    "path": "/work/datvietvac-fandom-cards",
    "title": "DatVietVAC Fandom Cards — From Official Fandom Pack to a Gated Collectibles Product Line",
    "question": "Can an official 12-card fandom pack turn visible existing demand into something fans carry, share, display and trade in everyday life—then earn repeated drops, a product line, and only later a conditional annual box or collectibles pod?",
    "maturity": "Developed Work Sample",
    "type": "Merchandise Initiative / Gated Product-Line Case",
    "tags": "Observed outside-channel demand · 12-card social inventory · Everyday circulation · Physical manufacturing signature · Pilot economics · Single-SOW production and rights · Earned scale gates",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/DatVietVAC-Fandom-Cards-From-Official-Fandom-Pack-to-a-Gated-Collectibles-Product-Line-3bb6210cf1c78187817af591d7aced63"
  },
  {
    "index": 9,
    "path": "/work/explainable-trust",
    "title": "Explainable Trust — Traceable Case Reconstruction",
    "question": "Can an AI-assisted case workspace update a living case without erasing the path by which the case was constructed?",
    "maturity": "Working Prototype",
    "type": "Built Product Prototype",
    "tags": "Local-first ledger · Source-linked reasoning · Stable-ID correction · Explicit gaps and actions · Provenance graph",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/Explainable-Trust-Traceable-Case-Reconstruction-3c06210cf1c781cd87b9edde5f1dfa6c"
  },
  {
    "index": 10,
    "path": "/work/vietnam-diamond-market-crisis",
    "title": "Vietnam’s 2026 Diamond-Market Crisis",
    "question": "What can be reconstructed through observable events, stakeholder decisions, enterprise responses, and public records—and where does the evidence stop?",
    "maturity": "Research cut-off: 21 July 2026",
    "type": "Evidence-First Case Study",
    "tags": "Claim architecture · Source preservation · Alternative readings · Evidence boundaries",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/Vietnam-s-2026-Diamond-Market-Crisis-3a46210cf1c7809db77ad37b09e58c0e"
  },
  {
    "index": 11,
    "path": "/work/diamond-trust-chain-collapse",
    "title": "Diamond Trust Chain Collapse — When Final Proof Needs Proof",
    "question": "What happens when a certificate compresses a complex trust chain into one market signal—and that signal itself becomes uncertain?",
    "maturity": "Evidence Building",
    "type": "Research Essay",
    "tags": "Trust-chain reconstruction · Guarantee drift · Reverse proof · Recovery architecture",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/Diamond-Trust-Chain-Collapse-When-Final-Proof-Needs-Proof-3926210cf1c7818894b6c9917e03fff2"
  },
  {
    "index": 12,
    "path": "/work/adobe-account-restriction",
    "title": "Adobe Account Restriction — When Enforcement Interrupts the Work",
    "question": "When enforcement interrupts an already-paid work tool, what must remain visible and recoverable beyond the account decision itself?",
    "maturity": "Evidence-First Research",
    "type": "Independent Comparative Case",
    "tags": "Comparative evidence · Workflow continuity · Resolution states · Explainable resolution · Evidence boundaries",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/Adobe-Account-Restriction-When-Enforcement-Interrupts-the-Work-3b56210cf1c781958b67e3bbee93adc6"
  },
  {
    "index": 13,
    "path": "/work/ai-judgment-decisions",
    "title": "Does AI Improve Decisions - or Develop Judgment?",
    "question": "Can AI improve the immediate decision and also strengthen the user’s ability to evaluate evidence and uncertainty independently over time?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Answer-centered vs evidence-centered AI · Delayed transfer · Falsifiers · Safe delegation",
    "mode": "essays",
    "source": "https://app.notion.com/p/Does-AI-Improve-Decisions-or-Develop-Judgment-293cd62ac6db4b9eb9c957f338b0797c"
  },
  {
    "index": 14,
    "path": "/work/ai-apprenticeship",
    "title": "AI Apprenticeship — Before AI Becomes an Actor",
    "question": "Before AI receives operational authority, should it first learn how an organization understands mission, boundaries, evidence, exceptions, and recovery?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Observer-to-actor progression · Contextual learning · Power and surveillance · Human responsibility",
    "mode": "essays",
    "source": "https://app.notion.com/p/AI-Apprenticeship-Before-AI-Becomes-an-Actor-3916210cf1c781f59cfcd49d870b6800"
  },
  {
    "index": 15,
    "path": "/work/zalopay-smes-when-paid-not-done",
    "title": "ZaloPay & SMEs — When Paid Is Not Yet Done",
    "question": "What operational work still begins after a small merchant receives payment?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Share of Operations · Orders and inventory · Cash-flow visibility · Dependency boundaries",
    "mode": "essays",
    "source": "https://app.notion.com/p/ZaloPay-SMEs-When-Paid-Is-Not-Yet-Done-3856210cf1c78196a657cf53fd87c925"
  },
  {
    "index": 16,
    "path": "/work/metub-creator-economy",
    "title": "METUB & Creator Economy — When Creating Becomes Operating",
    "question": "What infrastructure do creators need when creating becomes a business, and what responsibility does a platform inherit?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Share of Operations · Share of Stability · Creator continuity · Rights, payment, and recovery",
    "mode": "essays",
    "source": "https://app.notion.com/p/METUB-Creator-Economy-When-Creating-Becomes-Operating-3856210cf1c781938b0fe6e4acf2e5aa"
  },
  {
    "index": 17,
    "path": "/work/momo-ai-paylater",
    "title": "MoMo AI PayLater — Risk Begins After Yes",
    "question": "Can an AI-enabled credit product define success beyond approval and conversion by considering the consequence the user must live with afterward?",
    "maturity": "Working Hypothesis",
    "type": "Research Essay",
    "tags": "Conversion-first vs trust-first · Affordability context · Repayment experience · Long-term trust",
    "mode": "essays",
    "source": "https://app.notion.com/p/MoMo-AI-PayLater-Risk-Begins-After-Yes-3856210cf1c78150aaa1ff5ae34822b0"
  },
  {
    "index": 18,
    "path": "/work/artist-fandom-page",
    "title": "Artist Fandom Page & Fan Dashboard",
    "question": "How can fans discover artists, join official communities, receive benefits, buy products, attend events, get support, and return through one clearer relationship layer?",
    "maturity": "Concept Exploration",
    "type": "Concept",
    "tags": "Fan-facing surfaces · Fan ID · Entitlement · Commerce, ticketing, support, and reporting",
    "mode": "concepts",
    "source": "https://app.notion.com/p/Artist-Fandom-Page-Fan-Dashboard-3926210cf1c7809e9468dfc598dfc2e9"
  },
  {
    "index": 19,
    "path": "/work/zalo-scam-emergency-mode",
    "title": "Zalo Scam Emergency Mode: Payment Safety Signal & Post-Transfer Safety Coach",
    "question": "Where can a payment product add contextual safety interventions before an irreversible transfer—and what should happen immediately afterward?",
    "maturity": "Working Hypothesis",
    "type": "Product Concept",
    "tags": "Protective friction · Evidence preservation · Action-first guidance · False-positive guardrails",
    "mode": "concepts",
    "source": "https://app.notion.com/p/Zalo-Scam-Emergency-Mode-Payment-Safety-Signal-Post-Transfer-Safety-Coach-38b6210cf1c781fa95bee2c50a943c77"
  },
  {
    "index": 20,
    "path": "/work/pathway-lens-operational-cycles",
    "title": "Pathway Lens — AI Risk, Drift, Evidence, and Recovery Cycles",
    "question": "A working AI research lens for tracing how an output, signal, recommendation, or action becomes reliance, record, execution, transaction, memory, or real-world consequence.",
    "maturity": "Working Model & Framework",
    "type": "AI & Systems Governance",
    "tags": "System Lens · Drift Lens · Pathway Lens · Governance Lens · Recovery",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/Pathway-Lens-37d6210cf1c780958d76e86daef14258"
  },
  {
    "index": 21,
    "path": "/apps/explainable-trust",
    "title": "Explainable Trust Intelligence Application",
    "question": "Interactive browser workspace for multi-turn claim reconstruction, evidence DAG visualization, W3C PROV-O audit trails, and live web query verification.",
    "maturity": "Live Web Application",
    "type": "AI Decision Engine",
    "tags": "Interactive App · Gemini Flash · Tavily Search · Local-First Ledger",
    "mode": "concepts",
    "source": "https://github.com/Yunero1206/Explainable-App"
  }
];

const caseDocuments = {
  "/work/vinamilk-trusted-nutrition": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj",
        "fileName": "vinamilk_paper_1_trusted_nutrition_product_service_discovery.docx",
        "label": "📄 Xem trước: vinamilk_paper_1_trusted_nutrition_product_service_discovery.docx ↗",
        "title": "vinamilk paper 1 trusted nutrition product service discovery"
      },
      {
        "type": "paper",
        "driveId": "1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5",
        "fileName": "vinamilk_paper_2_everyday_milk_delivery_operations_scale.docx",
        "label": "📄 Xem trước: vinamilk_paper_2_everyday_milk_delivery_operations_scale.docx ↗",
        "title": "vinamilk paper 2 everyday milk delivery operations scale"
      },
      {
        "type": "paper",
        "driveId": "13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh",
        "fileName": "vinamilk_paper_3_beyond_the_market_capability_allocation_governance.docx",
        "label": "📄 Xem trước: vinamilk_paper_3_beyond_the_market_capability_allocation_governance.docx ↗",
        "title": "vinamilk paper 3 beyond the market capability allocation governance"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj\" data-type=\"paper\" data-title=\"vinamilk paper 1 trusted nutrition product service discovery\">📄 vinamilk paper 1 trusted nutrition product service discovery (PAPER) ↗</button>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5\" data-type=\"paper\" data-title=\"vinamilk paper 2 everyday milk delivery operations scale\">📄 vinamilk paper 2 everyday milk delivery operations scale (PAPER) ↗</button>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh\" data-type=\"paper\" data-title=\"vinamilk paper 3 beyond the market capability allocation governance\">📄 vinamilk paper 3 beyond the market capability allocation governance (PAPER) ↗</button>\n</asset-bar>\n\n> **This case started with a quiet-store observation. The first instinct was to redesign the store; the research became more interesting when I asked whether the product and occasion had been proven before the channel was redesigned.**\n> \n\n> **Type:** Product-Service Discovery & Operating Research\n**Stage:** Developed outside-in research\n**Evidence basis:** Direct observation, public company information, comparative product and operating patterns, and clearly labeled hypotheses\n**Last updated:** July 2026\n**Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated. Each later stage depends on evidence produced by the earlier gate.\n> \n\n## Case at a glance\n\n- **Observation:** Some Vinamilk-branded stores appeared quiet, with limited reasons for customers to stay, return, or consume products immediately.\n- **Initial instinct:** Redesign the retail experience with seating, served drinks, takeaway, delivery, and a stronger digital layer.\n- **Reframe:** Before changing the channel, determine whether there is a product and consumption occasion that customers would willingly pay for again.\n- **Core decision:** Discover a repeatable trusted-nutrition proposition first; choose the operating format only after the proposition earns evidence.\n- **Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated.\n\n## Decision path\n\n```\nQuiet-store observation\n        ↓\nProduct architecture\nWhat form is worth testing?\n        ↓\nOccasion & paid repeat\nWho buys, when, why, at what price, and do they return?\n        ↓\nIndustrialization\nCan valued attributes survive simplification?\n        ↓\nChannel choice\nStore / Kiosk / Partner / Other format\n        ↓\nScale decision\nProceed / Narrow / Redirect / Stop\n```\n\n> **Test the product architecture first, the occasion second, the operating model third, and the channel format fourth.**\n> \n\n---\n\n## Why trust changes the problem\n\n> **A nutrition product is not merely a formulation or a drink. It is a trust package whose value depends on the integrity, transparency, and consistency of every step from nutritional science to consumption.**\n> \n\nA beverage chain may primarily compete through taste, convenience, price, and environment. Vinamilk carries a different customer expectation.\n\nCustomers may also ask:\n\n- What is the drink made from?\n- Is it fresh milk, powder, concentrate, or a hybrid?\n- How much sugar and protein does one serving contain?\n- Is the water and ice controlled?\n- Was it prepared to a standard?\n- How long is it safe and enjoyable to consume?\n- Does the process preserve the nutritional promise?\n\nFor Vinamilk, trust is not a communication layer added after product development. It is an operating outcome that must be designed into the entire product-service system.\n\n---\n\n## Stage 1 — Discover what deserves to exist\n\nThe first decision is:\n\n> **What trusted nutrition proposition deserves to exist?**\n> \n\nIt does not assume that “Everyday Milk,” a particular store format, or even liquid milk is the correct answer.\n\nIt establishes a discovery program for testing:\n\n- Liquid, powder, concentrate, and hybrid product architectures.\n- Taste, texture, ice compatibility, and consumption-window stability.\n- Nutritional, safety, and trust integrity.\n- Customer occasion, willingness to pay, and paid repeat behavior.\n- Premium and everyday propositions.\n- Simplification and industrialization potential.\n- Sustainability implications across ingredients, packaging, waste, water, energy, and cold chain.\n\nIts purpose is twofold:\n\n1. Produce a decision about the current proposition.\n2. Establish the foundations of a reusable organizational capability for evaluating future trusted-nutrition opportunities through evidence rather than assumption.\n\nThe discovery program may legitimately conclude that the proposition should stop, remain premium-only, move to a different channel, or advance to operating design.\n\n> **Gate:** Is there a validated Product-Occasion Brief strong enough to justify operating design?\n> \n\n---\n\n## Stage 2 — Preserve what customers valued\n\nThis stage activates only after Stage 1 produces an authoritative, validated Product-Occasion Brief.\n\nThe next decision is:\n\n> **How can Vinamilk deliver, learn from, and scale the validated proposition without losing its nutritional, trust, or operational integrity?**\n> \n\nIt covers:\n\n- Innovation and everyday operating formats.\n- Product industrialization and serving standards.\n- Store, kiosk, partner-channel, and other format choices.\n- Product, recipe, nutrition, and trust master data.\n- SOP, training, QA, audit, and traceability.\n- Make / Buy / Customize / Partner / Reuse decisions.\n- Fulfilment, pickup, delivery, and digital capabilities.\n- KPI, guardrails, stage gates, and replication.\n- Sustainability controls and future circular options.\n\nThe store remains important, but it is no longer treated as the default solution. It may be a laboratory, a channel, a learning environment, or one format among several.\n\n> **Gate:** Can the proposition survive simplification, repeated delivery, and real operating constraints without losing the attributes that created trust and repeat behavior?\n> \n\n---\n\n## Operating choice — Innovation Store vs. Everyday Format\n\nThe distinction is functional, not decorative.\n\n### Milk Innovation / Occasion Development Store\n\nIts job is to learn:\n\n- What taste and sensory attributes customers value.\n- Which nutrition and trust signals create confidence.\n- Which occasions generate paid repeat behavior.\n- Which formulations and preparation methods are worth industrializing.\n- Which propositions belong in other channels.\n\nIt optimizes for **preference and learning**.\n\n### Everyday / General Format\n\nIts job is to deliver a validated proposition:\n\n- At an accessible price.\n- With acceptable and consistent taste.\n- Through a fast, low-variance workflow.\n- With clear nutritional information.\n- With controlled waste and contribution economics.\n\nIt optimizes for **repeatability and habit**.\n\nThe key handoff is the Industrialization Gate:\n\n> Can the system simplify the recipe without losing the attributes that caused customers to trust, value, and repeat it?\n> \n\n---\n\n## What this could become strategically\n\nThe largest opportunity may not be opening a new store chain.\n\nVinamilk is already strong in dairy science, manufacturing, quality control, supply chain, and national distribution. The proposed capability extends that chain beyond the retail transaction:\n\n```\nNutrition Science\n        ↓\nProduct Architecture\n        ↓\nIndustrialized Preparation\n        ↓\nConsumption Occasion\n        ↓\nCustomer Behavior and Confidence\n        ↓\nContinuous Product Learning\n        ↺\n```\n\nThis creates a form of **occasion intelligence** that traditional sell-in data cannot provide:\n\n- What customers choose at different times and contexts.\n- Which sensory attributes create repeat.\n- Which nutrition information affects choice.\n- Which products work in premium versus everyday formats.\n- Which occasions belong in stores, gyms, campuses, hospitals, offices, or partner channels.\n\nThe strategic capability is not an app or a store network. It is the ability to repeatedly create, test, preserve, and distribute trusted nutrition propositions across multiple occasions and channels.\n\n> **Discovery outputs become organizational capability only when they are documented, governed, and designated as the authoritative inputs for subsequent investment decisions.**\n> \n\n---\n\n## Decision, not destination\n\nSuccess is not defined only as proving that an Everyday Milk retail concept should scale.\n\nA disciplined stop decision can also be successful if the evidence shows that:\n\n- Customers prefer consuming milk at home.\n- The proposition is attractive only within a premium niche.\n- A gym, campus, hospital, office, or convenience channel is superior to a standalone store.\n- Taste cannot survive industrialization at an acceptable price.\n- Trust, safety, waste, or economics cannot be preserved reliably.\n\nThe value of the program is its ability to reduce uncertainty before irreversible investment.\n\n---\n\n- Research artifacts — full discovery and operating papers\n    \n    The attached papers preserve the detailed discovery design, operating blueprints, assumptions, and stage-gate logic behind the public case.\n    \n    <button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1nPQ5ijQQ_i4KoqyFtg1JIWzBiNthoAbj\" data-type=\"paper\" data-title=\"vinamilk paper 1 trusted nutrition product service discovery\">vinamilk_paper_1_trusted_nutrition_product_service_discovery.docx ↗</button>\n    \n    <button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1Xl_knBwuJQPn5mtFb8MyZXeC6hENKPW5\" data-type=\"paper\" data-title=\"vinamilk paper 2 everyday milk delivery operations scale\">vinamilk_paper_2_everyday_milk_delivery_operations_scale.docx ↗</button>\n    \n\n## Conditional extension — Beyond the Market\n\n> **This is not part of the current product-scale recommendation.** It becomes relevant only if a trusted-nutrition capability eventually demonstrates sustained product integrity, operating reliability, traceability, and stability across real channels.\n> \n\n### Capability Allocation Governance for Trusted Nutrition Access\n\nThis extension asks what could happen after reliability has been earned, not how the current proposition should be launched or scaled.\n\nThe progression is:\n\n```\nPaper I\nDiscover what trusted nutrition proposition deserves to exist\n        ↓\nPaper II\nPreserve, deliver, and scale it reliably\n        ↓\nDemonstrated operating evidence\n        ↓\nPaper III\nGovern how legitimate access may be expanded beyond ordinary market participation\n```\n\nPaper III therefore does not ask how to sell the proposition more widely. It asks:\n\n> **Once a trusted nutrition capability has earned reliability and trust, under what governance may legitimate access to its outputs be expanded beyond the market?**\n> \n\n---\n\n### The Three-Layer Architecture\n\n```\nCapability\nWhat has been proven, and who must steward it?\n        ↓\nAllocation\nUnder what authority, funding, and rules may access be granted?\n        ↓\nAccess\nHow can eligible people receive value without being forced to become customers?\n```\n\nThe defining principle is:\n\n> **Capabilities remain stewarded. Only legitimate access is allocated.**\n> \n\nVinamilk would continue to steward the integrated capability bundle: nutrition science, approved product architecture, manufacturing, quality assurance, logistics, traceability, serving standards, and operating integrity.\n\nInstitutions would not receive ownership of those individual capabilities. They would participate through governed pathways that define purpose, eligibility, funding, authorized use, and accountability.\n\n---\n\n### Comparative Capability Research\n\nElfie is used only as an analytical reference because it illustrates how users, sponsors, and health-service partners may be coordinated through governed institutional pathways.\n\nThe objective is not to replicate Elfie’s product, app, or operating model. Elfie primarily coordinates capabilities distributed across an ecosystem, while Vinamilk directly owns and operates significant parts of the nutrition, manufacturing, quality, and distribution capability being considered.\n\nThe transferable research object is therefore **governance logic**, not features or technology.\n\n> **Compare capabilities, not appearances.**\n> \n\n---\n\n### Nutrition Credit — Suất Dinh Dưỡng\n\nMultiple funding sources and institutional programs create a normalization problem. Company funding, employer sponsorship, institutional support, public co-funding, philanthropy, customer contribution, and cross-subsidy may all operate differently in the backend.\n\nA common access unit may therefore be required at the system and user layers.\n\n> **Nutrition Credit is introduced to operationalize allocation governance. It is not the research object itself.**\n> \n\nThe proposed user-facing Vietnamese name is:\n\n> **Suất Dinh Dưỡng**\n> \n\nA Nutrition Credit is defined as:\n\n> **A standardized and equal unit of trusted-nutrition access.**\n> \n\nPrograms may grant different quantities of credits and apply different authorized pathways, but the value of one credit must not change according to the person receiving it or the source funding it.\n\n```\nNutrition Credit\n        ↓\nEqual Unit Value\n        ↓\nProgram Rules\n        ↓\nAuthorized Redemption\n```\n\nThe system may eventually support three broad access pathways:\n\n- Personal redemption through ordinary commercial participation.\n- Sponsored institutional access for eligible groups.\n- Voluntary contribution to verified access programs.\n\nHowever, receiving an institutional entitlement must not require a person to become a commercial customer, install an app, provide marketing consent, or disclose more personal information than is necessary.\n\n> **No app should not mean no access.**\n> \n\n---\n\n### Purchase Accrual Principle\n\nWhen Nutrition Credits are earned through purchases, issuance should be proportional to actual eligible economic value rather than the number of drinks or an arbitrary transaction threshold.\n\n```\nCredits earned\n=\nEligible Net Spend\n× Base Reward Rate\n÷ Reference Settlement Value\n× Approved Multiplier\n```\n\nThe design choice is:\n\n> **Proportional by net paid value, accumulated fractionally, with limited and funded bonuses.**\n> \n\nThis prevents cliff effects, basket splitting, uncontrolled liability, and inconsistent unit value.\n\nPromotions may change the number of credits issued, but they must never change the value of the unit itself.\n\n---\n\n### Architectural Boundary Conditions\n\nPaper III is protected by six boundary conditions:\n\n1. **Capabilities remain stewarded. Only legitimate access is allocated.**\n2. **Nutrition Credit operationalizes governance; it does not replace the research object.**\n3. **Equal unit value does not mean identical permissions.**\n4. **Institutional participation does not imply clinical endorsement.**\n5. **Capability stewardship must not override institutional mandate.**\n6. **Allocation is not fulfilment. Fulfilment is not automatically impact.**\n\nPublic-value evidence must follow the full pathway:\n\n```\nCommitted\n    ↓\nAllocated\n    ↓\nRedeemed\n    ↓\nFulfilled\n    ↓\nVerified\n    ↓\nImpact\n```\n\nThe stages must not be collapsed for reporting or communication.\n\n---\n\n### Constitutional Architecture, Not Software Architecture\n\nPaper III does not prescribe ledger design, identity technology, API patterns, system topology, or fraud models.\n\nIt defines constitutional requirements that any future technical architecture must preserve:\n\n- Equal unit value with traceable provenance.\n- Visible usage boundaries.\n- Legitimate non-app access.\n- Auditable state transitions.\n- Data minimization.\n- Scoped institutional authority.\n- Prevention of duplicate issuance, duplicate redemption, and silent value changes.\n\n> **Implementation must absorb governance complexity without transferring it to user cognition or weakening legitimate access.**\n> \n\nDetailed technical architecture should be developed only after the activation gate has been passed.\n\n---\n\n### What Paper III Is — and Is Not\n\nPaper III is a governance concept for allocating legitimate access to the outputs of a proven trusted-nutrition capability.\n\nIt is not:\n\n- A CSR campaign.\n- An ESG report.\n- A charity program.\n- A loyalty-system specification.\n- A government policy proposal.\n- A clinical nutrition protocol.\n- A software architecture document.\n\nIts purpose is to define when, why, and under whose authority access may be expanded without weakening product integrity, institutional legitimacy, individual dignity, or the trust established through Papers I and II.\n\n> **Paper I asks what people should be able to trust. Paper II asks how that trust can survive scale. Paper III asks how legitimate access to a capability that has earned trust may be expanded beyond the market.**\n> \n\n---\n\n### Full Paper\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"13Ylje0Y3X_xXVnx1-W-0CpQaBq-alTHh\" data-type=\"paper\" data-title=\"vinamilk paper 3 beyond the market capability allocation governance\">vinamilk_paper_3_beyond_the_market_capability_allocation_governance.docx ↗</button>\n\n---\n\n## Current Limitations\n\nThis case is built without access to Vinamilk’s internal traffic, revenue, customer research, formulation pipeline, cost structure, quality systems, channel economics, ownership model, or implementation capacity.\n\nIt therefore does not establish:\n\n- that the observed store pattern is representative of the retail network;\n- that an immediate-consumption milk proposition has sufficient paid demand;\n- that valued sensory and nutritional attributes can survive industrialization;\n- that a standalone store is superior to other channels;\n- that the proposed operating architecture is feasible within current systems;\n- or that the governance concept in Paper III should be activated.\n\nPaper III is especially conditional. It should remain dormant unless Papers I and II produce sustained evidence of product integrity, operating reliability, traceability, and institutional readiness.\n\n## Next Validation Step\n\nThe next step is not format selection. It is a bounded Product-Occasion Discovery cycle:\n\n1. test multiple product architectures rather than assuming liquid milk;\n2. identify concrete consumption occasions and competing alternatives;\n3. measure paid choice and repeat behavior, not stated interest alone;\n4. test whether taste, nutrition, safety, and trust survive simplification;\n5. compare store, kiosk, delivery, institutional, and partner-channel economics;\n6. make an explicit stop, narrow, reposition, or advance decision before operating-scale investment.\n\n## Continue Reading\n\n[Elfie — Trust-Safe Activation](https://app.notion.com/p/Elfie-Product-Case-Trust-Safe-Activation-3926210cf1c780138d3dfb16dba10e43?pvs=21) — a product strategy case on activation, role boundaries, consent, data quality, and execution.\n\n[Creator Platform Operating Model — MFan](https://app.notion.com/p/Creator-Platform-Operating-Model-MFan-fandom-commerce-3926210cf1c7808ea5b8ca1f0d975302?pvs=21) — a multi-party operating model built around shared state, ownership, and recovery.\n\n[Work Library](https://app.notion.com/p/Work-Library-37d6210cf1c7804b933af056f81215ea?pvs=21) · [Portfolio Home](https://app.notion.com/p/Ph-m-Thanh-Ph-s-Works-37d6210cf1c78052afafd34e27af898b?pvs=21)"
  },
  "/work/creator-platform-operating-model": {
    "assets": [
      {
        "type": "paper",
        "driveId": "11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh",
        "fileName": "MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf",
        "label": "📄 Xem trước: MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf ↗",
        "title": "MFan Platform Fragmentation  Trust Chain Integration"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh\" data-type=\"paper\" data-title=\"MFan Platform Fragmentation  Trust Chain Integration\">📄 MFan Platform Fragmentation  Trust Chain Integration (PAPER) ↗</button>\n</asset-bar>\n\n> **A fan can move through an artist page, payment flow, ticketing partner, merch order, and support channel without any one of those surfaces being broken. The trouble starts when identity, entitlement, payment, fulfilment, and support stop carrying the same operating truth.**\n> \n\n> **Type:** Outside-in Operating Model\n**Stage:** Working Model\n**Evidence basis:** Public product signals, observed journeys, market patterns, and operational inference\n**Last updated:** August 2026\n**Boundary:** A proposed outside-in model requiring validation against actual workflows, systems, constraints, and incident data.\n> \n\n> **Supporting artifact:**\n> \n> \n> <button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"11odCvGgn4HQENscQ3Y194ZPmKBuo2bBh\" data-type=\"paper\" data-title=\"MFan Platform Fragmentation  Trust Chain Integration\">MFan Platform Fragmentation & Trust Chain Integration.pdf ↗</button>\n> \n\n---\n\n## The operating problem\n\nA fan may encounter one creator ecosystem through an artist page, membership layer, campaign surface, merch store, ticketing partner, payment provider, logistics provider, and support channel. None of those surfaces has to be broken for the overall journey to become difficult.\n\nThe problem appears when state stops travelling with the fan. Identity may be known in one place, payment in another, entitlement somewhere else, while fulfilment and support each hold their own version of what happened. The same fan can then be asked to prove a purchase or benefit repeatedly because the systems around the journey do not preserve one reliable operating record.\n\nThat matters more in fandom commerce because the transaction may also create access, recognition, membership status, event participation, or another promised benefit. A missing ticket, failed VIP benefit, duplicated account, delayed order, payment mismatch, or unclear refund can therefore affect the fan–artist relationship as well as the transaction itself.\n\nThis case asks a narrower operating question: **what is the minimum shared layer needed so separate surfaces can preserve the same identity, entitlement, transaction state, owner, evidence, and recovery record where those states need to agree?**\n\n## Operating diagnosis\n\nThe fragmentation is easier to inspect by following the state that should remain consistent across each pathway.\n\n| Pathway | Where continuity breaks | Visible consequence |\n| --- | --- | --- |\n| **Identity** | The same fan exists as different records across membership, commerce, ticketing, events, or support. | Repeated verification, duplicate profiles, broken history, weak cross-surface support. |\n| **Entitlement** | A purchase or membership creates a benefit that is not visible where it must be honored. | Manual proof, missed benefits, access disputes, event-entry problems. |\n| **Payment / Order** | Payment, order, vendor, and support systems disagree on transaction state. | Paid-but-not-recognized cases, manual reconciliation, refund or fulfilment delay. |\n| **Ticket / Access** | Ticket ownership, identity, membership eligibility, and venue access are handled separately. | Invalid or duplicated access, unclear VIP eligibility, slow onsite recovery. |\n| **Fulfilment / Support** | Support lacks the order, entitlement, vendor, or logistics context needed to resolve the case. | Repeated explanation, slow routing, inconsistent status, weak root-cause visibility. |\n| **Reporting** | Campaign, commerce, ticketing, support, and settlement data remain separate. | Slow decisions, disputed results, difficult campaign comparison, weak partner visibility. |\n\n## Shared operating layer\n\nA shared operating layer is useful only where separate surfaces need to preserve the same identity, entitlement, transaction state, owner, or recovery record. It does not require replacing every artist page, vendor, payment provider, ticketing partner, or workflow.\n\nThe minimum working model has six capabilities:\n\n### 1. Central Fan ID\n\nA shared identity reference across membership, commerce, ticketing, events, and support. It links only the identifiers and states needed for continuity, entitlement, service, reporting, and recovery; it is not a reason to centralize every available fan data point.\n\n### 2. Entitlement Ledger\n\nA shared record of what access, benefit, item, or status was created by a membership, payment, campaign, or partner action, and its current state. The purpose is simple: when a benefit is questioned, different teams should be able to see whether the promise exists, whether it has been used, and whether it is disputed or recovered.\n\n### 3. Payment and Order Reconciliation\n\nA layer that aligns payment, order, entitlement, fulfilment, and refund states. It is most useful for exceptions such as payment succeeded but no order was created, an order exists without its entitlement, a refund is in progress but invisible to support, or a vendor has no fulfilment instruction.\n\n### 4. Ticketing and Event Access Sync\n\nA shared view of ticket identity, fan identity, membership eligibility, transfer state, usage, and onsite recovery authority. The operating question is whether an authorized operator can determine what access should exist and recover it quickly when the venue experience fails.\n\n### 5. Fulfilment and Customer Support Integration\n\nA support record that carries enough fan, order, payment, entitlement, vendor, shipment or event, communication, owner, and next-action context to resolve the issue without asking the fan to reconstruct the pathway.\n\n### 6. Artist and Campaign Reporting\n\nA partner view that brings campaign demand, benefit delivery, transaction and settlement state, ticket or attendance signals, fulfilment, support incidents, unresolved risk, and recovery outcomes into one operating picture. Confirmed data should remain distinguishable from estimates or incomplete partner feeds.\n\n## Core workflow map\n\nA simplified pathway is:\n\n> Fan enters an artist or campaign surface\n> \n> \n> → Identity is recognized or created\n> \n> → Fan takes a membership, purchase, or event action\n> \n> → Payment and order are reconciled\n> \n> → Entitlement is created\n> \n> → Vendor, ticketing, or fulfillment action is triggered\n> \n> → Status remains visible to support and operator teams\n> \n> → Artist or campaign reporting is updated\n> \n> → Failure enters a recovery pathway\n> \n> → Outcome updates the operating record\n> \n\nThe critical design question is not whether every step uses one tool.\n\nIt is whether the steps preserve shared state, ownership, and evidence.\n\n## Who owns the next action?\n\nThe exact organization structure is unknown, so this is a proposed responsibility split rather than a claim about MFan’s current teams.\n\n| Operating responsibility | Primary owner |\n| --- | --- |\n| Cross-surface continuity, shared status definitions, cross-team incidents, recurring operating review | **Platform Operations** |\n| Fan identity, entitlement, integrations, permissions, instrumentation, operator tooling | **Product & Engineering** |\n| Payment reconciliation, settlement, refunds, financial evidence, payment exceptions | **Finance & Payments** |\n| Ticketing, commerce, vendor fulfilment, partner execution, domain-specific exceptions | **Domain Operations** |\n| Fan communication, case routing, visible next action, recovery confirmation, recurring pain-point feedback | **Customer Support** |\n| Artist commitments, benefit definition, partner expectations, reporting interpretation, trust escalation | **Artist & Partnerships** |\n\n<aside>\n↪️\n\n**Handoff rule:** Several teams may contribute to one case, but one team should hold the next action until another owner explicitly accepts the handoff.\n\n</aside>\n\n## Growth logic — hero campaigns and indie density\n\nLarge artist campaigns can create strong demand and visible platform moments.\n\nThey may also create operational peaks, partner-specific customization, and high public consequence.\n\nA scalable creator platform also needs a minimum operating package for smaller or independent creators.\n\n### Minimum Indie Operating Kit\n\nA possible minimum package includes:\n\n- verified creator profile;\n- basic fan identity;\n- membership or supporter tier;\n- simple entitlement rules;\n- payment and settlement status;\n- campaign or store template;\n- basic support route;\n- standard reporting;\n- clear escalation boundary.\n\nThe strategic question is not whether every creator receives the same service.\n\nIt is which operating components must remain standard so the platform can scale without multiplying hidden manual work.\n\n## Implementation pathway\n\n### Phase 0 — Audit and baseline\n\nMap:\n\n- current surfaces;\n- user journeys;\n- identity systems;\n- vendors;\n- payment states;\n- entitlement rules;\n- support channels;\n- reporting flows;\n- recurring failure cases.\n\nOutput:\n\n- current-state pathway map;\n- shared status definitions;\n- top trust-critical breakdowns;\n- integration and ownership gaps.\n\n### Phase 1 — Trust stabilization\n\nPrioritize visible operational failures before building a large architecture.\n\nExamples:\n\n- payment/order mismatch;\n- missing entitlement;\n- ticket-access failure;\n- unclear support owner;\n- missing refund status;\n- incomplete vendor escalation.\n\nOutput:\n\n- exception queue;\n- visible ownership;\n- standard recovery messages;\n- evidence-preservation rules;\n- recurring incident review.\n\n### Phase 2 — Fan ID and entitlement foundation\n\nBuild or connect:\n\n- cross-surface identity reference;\n- entitlement ledger;\n- permission model;\n- support lookup;\n- event and audit history.\n\n### Phase 3 — Commerce, ticketing, and fulfillment integration\n\nConnect:\n\n- payment and order status;\n- ticket identity and access;\n- vendor and shipment status;\n- refunds;\n- partner-facing exceptions.\n\n### Phase 4 — Control tower and reporting\n\nCreate:\n\n- cross-workstream operating view;\n- campaign health;\n- unresolved incidents;\n- settlement visibility;\n- partner reporting;\n- recurring improvement loop.\n\n## Metrics\n\nThe metrics should measure continuity and recovery, not only campaign volume.\n\n### Transaction clarity\n\n- percentage of payments matched to orders;\n- percentage of orders with visible status;\n- pending-state age;\n- refund-status visibility.\n\n### Entitlement accuracy\n\n- entitlement creation success;\n- missing or duplicate entitlement rate;\n- access failure rate;\n- time to entitlement correction.\n\n### Recovery efficiency\n\n- time to identify owner;\n- time to first useful response;\n- time to resolution;\n- repeated-contact rate;\n- percentage of cases with preserved evidence;\n- customer-confirmed recovery.\n\n### Fulfillment reliability\n\n- on-time fulfillment;\n- exception rate;\n- vendor response time;\n- unresolved shipment age.\n\n### Platform scalability\n\n- manual cases per campaign;\n- manual cases per creator;\n- standard-workflow adoption;\n- integration coverage;\n- reporting preparation time.\n\nThese are proposed operating metrics, not known MFan baselines.\n\n## Risks and trade-offs\n\n### Vendor lock-in\n\nConnecting more partners can create dependency on their APIs, data quality, and operating discipline.\n\n### Identity error\n\nA false merge can expose private information or assign benefits to the wrong person.\n\n### Over-centralization\n\nA shared layer can improve continuity while creating a single point of operational failure.\n\n### Support overload\n\nBetter visibility may initially reveal more unresolved issues than the current team can handle.\n\n### Overbuild risk\n\nA full platform architecture may be unnecessary if the highest-impact failures can be solved through lighter reconciliation and operating standards.\n\n### Creator autonomy\n\nStandardization can reduce fragmentation but should not erase creator-specific identity, community norms, or commercial models.\n\n## What I would validate first\n\n1. Which journeys create the highest fan trust cost?\n2. How many identity systems currently exist?\n3. Where do payment, order, entitlement, and refund status diverge?\n4. Which issues require the fan to provide proof that the platform should already have?\n5. Which vendors can provide reliable status feeds?\n6. Who owns cross-surface incidents today?\n7. Which operating components can be standardized across creators?\n8. What internal constraints make a shared layer difficult?\n9. Which data should remain outside the shared layer?\n10. What recovery outcome matters most to artists and fans?\n\n## Related concept\n\n> \n> \n> \n> [Artist Fandom Page & Fan Dashboard](https://app.notion.com/p/Artist-Fandom-Page-Fan-Dashboard-3926210cf1c7809e9468dfc598dfc2e9?pvs=21)\n> \n\nThis related page explores how parts of the operating model could appear as a fan-facing product experience.\n\nIt is a Product Concept, not validation of the operating model.\n\n## What this case demonstrates\n\nThis work sample demonstrates an ability to:\n\n- distinguish interface fragmentation from operating fragmentation;\n- reconstruct a multi-party service pathway;\n- define shared status and ownership needs;\n- connect product infrastructure with operations;\n- prioritize trust stabilization before full rebuild;\n- propose a phased operating model;\n- define validation questions before implementation.\n\n## Current limitations\n\nThis case is based on public product signals, observed journeys, market patterns, and operating inference.\n\nIt does not establish:\n\n- MFan’s current internal architecture, roadmap, or operating priorities;\n- the actual number or severity of identity, entitlement, payment, ticketing, fulfilment, support, or reporting failures;\n- whether existing systems already solve parts of the proposed model;\n- the feasibility, cost, organizational ownership, or sequencing of implementation;\n- that a centralized architecture is preferable to lighter operating standards, reconciliation, or partner integration.\n\nThe proposed Fan ID, entitlement ledger, reconciliation layer, and control-tower direction are hypotheses to validate—not instructions to rebuild the company.\n\n## Next validation step\n\nThe next step is internal discovery, not immediate full-scale implementation.\n\nA practical validation sequence would be:\n\n1. map the current fan and partner pathways across surfaces, systems, and vendors;\n2. identify the highest-cost recurring breakdowns and who currently absorbs the recovery burden;\n3. compare lightweight operating fixes with deeper shared-infrastructure needs;\n4. validate data, authority, privacy, and ownership boundaries;\n5. prioritize one bounded pathway where improved continuity can be measured before expanding the model.\n\n## Final takeaway\n\n> **The platform becomes more than a collection of campaigns when identity, entitlement, payment, fulfillment, support, and reporting can remain connected through both success and failure.**\n> \n\nThe value of the model is not integration for its own sake. It is preserving one understandable and recoverable operating pathway across fans, artists, partners, and internal teams.\n\n---\n\n## Continue Reading\n\n[Artist Fandom Page & Fan Dashboard](https://app.notion.com/p/Artist-Fandom-Page-Fan-Dashboard-3926210cf1c7809e9468dfc598dfc2e9?pvs=21) — the fan-facing companion concept.\n\n[Post-Signing Artist / Label Operations](https://app.notion.com/p/Post-Signing-Artist-Label-Operations-3926210cf1c780448dfae5e58d79a084?pvs=21) — the partnership and execution layer after an agreement is signed.\n\n[Work Library](https://app.notion.com/p/Work-Library-37d6210cf1c7804b933af056f81215ea?pvs=21) · [Portfolio Home](https://app.notion.com/p/Ph-m-Thanh-Ph-s-Works-37d6210cf1c78052afafd34e27af898b?pvs=21)"
  },
  "/work/elfie-trust-safe-activation": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp",
        "fileName": "Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx",
        "label": "📄 Xem trước: Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx ↗",
        "title": "Pham Thanh Phu Elfie Product Case Trust Safe Activation v4"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp\" data-type=\"paper\" data-title=\"Pham Thanh Phu Elfie Product Case Trust Safe Activation v4\">📄 Pham Thanh Phu Elfie Product Case Trust Safe Activation v4 (PAPER) ↗</button>\n</asset-bar>\n\n> **Elfie’s public product surface spans more than one user role: self-monitoring, sponsored programs, research participation, and professional workflows. That makes activation interesting because reaching first value is only useful if the user still understands which role they are in, what data is moving, and what remains under their control.**\n> \n\n> **Type:** Product Strategy Work Sample\n**Stage:** Developed Work Sample\n**Evidence basis:** Public company materials, reference-product patterns, and product inference\n**Last updated:** July 2026\n**Boundary:** Internal baselines, roadmap, contracts, clinical maturity, regulatory interpretation, and data architecture are unknown; numeric targets and sequencing remain hypotheses.\n> \n\n## Reading Route\n\n**Quick orientation:** Executive summary → Product diagnosis → North-star direction → MVP roadmap\n\n**Product logic:** Trust-Safe Activation pathway → Product components → Metrics and impact hypotheses\n\n**Execution review:** Experiment set → Instrumentation → Roadmap → Risks and validation requirements\n\n**Decision lens:** Improve first value and retained routine without increasing role confusion, coerced consent, dishonest reporting, unsafe sharing, or downstream overclaiming.\n\n---\n\n## Executive summary\n\nPublic materials reviewed for this case present Elfie as more than a free health-rewards application.\n\nThe broader product surface appears to include consumer self-monitoring, sponsor-funded health programs, research or real-world-evidence use cases, and professional or care-related workflows.\n\nThe product challenge is therefore not only user acquisition.\n\nIt is whether the product can turn free access, rewards, self-reported behavior, program participation, research consent, reporting, and professional workflows into a low-friction system that remains understandable and trustworthy to users.\n\nThis case proposes **Trust-Safe Activation** as a product direction:\n\n> Help users reach first health value quickly, make role and data boundaries visible at the moment they matter, improve routine and data quality, and translate retained behavior into useful partner or care outcomes without weakening user control.\n> \n\nThe proposal includes:\n\n- a bounded activation funnel;\n- progressive trust mechanics;\n- event instrumentation;\n- data-quality and reward guardrails;\n- reactivation flows;\n- a patient-controlled health summary;\n- partner-level reporting hypotheses;\n- a 0–12 week MVP roadmap.\n\nAll numeric targets are directional hypotheses to be replaced by internal baseline data.\n\n## Product context\n\nThe product may need to serve several roles.\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1X0oyZbOEHUg_v8scrZBGzOpK8dZvfrGp\" data-type=\"paper\" data-title=\"Pham Thanh Phu Elfie Product Case Trust Safe Activation v4\">Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx ↗</button>\n\n### Consumer self-monitoring\n\nPossible needs:\n\n- medication reminders;\n- measurement tracking;\n- symptom or behavior logs;\n- refill reminders;\n- health reports;\n- rewards;\n- family support.\n\nPrimary product question:\n\n> Can the user reach one useful health action quickly and build a repeatable routine?\n> \n\n### Sponsor-funded programs\n\nPossible participants:\n\n- pharmaceutical partners;\n- insurers;\n- employers;\n- public-health organizations;\n- hospitals or care partners.\n\nPrimary product question:\n\n> Can the product create program value without making the user feel that a sponsor is invisibly observing or controlling personal behavior?\n> \n\n### Research participation\n\nPossible needs:\n\n- separate consent;\n- participation state;\n- withdrawal;\n- data-quality visibility;\n- audit trail;\n- cohort reporting.\n\nPrimary product question:\n\n> Can research participation remain distinguishable from ordinary app use?\n> \n\n### Professional or care workflows\n\nPossible public directions include pre-visit support, summaries, documentation, evidence support, or workflow assistance.\n\nPrimary product question:\n\n> Can patient-generated information become useful to a professional without being mistaken for diagnosis, verified clinical truth, or an instruction that bypasses professional review?\n> \n\nThe same person may move between roles.\n\nThey may be:\n\n- a general app user;\n- a participant in a sponsored program;\n- a research participant;\n- a family-sharing user;\n- a patient sharing a report;\n- a person whose self-reported data enters a professional workflow.\n\nRole clarity is therefore a product requirement, not only a policy requirement.\n\n## Product diagnosis\n\nElfie’s public model can be interpreted as commercially coherent:\n\n- users receive a free health companion;\n- rewards may reinforce engagement;\n- partners support programs;\n- structured behavior may create research, reporting, or care value.\n\nThe model is also trust-sensitive.\n\nThe main product risk is not necessarily that a privacy policy is absent.\n\nIt is that users may not understand their role, sponsor, data use, or sharing boundary at the exact moment those conditions change.\n\n### Problem statement\n\n> How might Elfie improve activation quality and downstream program value while helping users understand their role, why the product is free, what data is used, what is not shared, and which actions remain under their control?\n> \n\n## Goals and non-goals\n\n### Goals\n\n- reduce time to first useful health action;\n- improve D7 and D30 routine formation;\n- preserve honest self-reporting;\n- make role and consent transitions visible;\n- create useful patient-controlled summaries;\n- improve partner-level measurement without exposing unnecessary personal detail;\n- create clear recovery when a user enters the wrong role or shares the wrong information.\n\n### Non-goals\n\n- diagnosing or treating a condition;\n- replacing clinician judgment;\n- maximizing consent or data sharing;\n- turning every user into a research participant;\n- treating rewards claimed as the primary success metric;\n- assuming that all public product surfaces are equally mature or integrated.\n\n## Stakeholder and role-boundary map\n\n### Patient or general user\n\nWants:\n\n- simple setup;\n- useful reminders;\n- understandable rewards;\n- confidence and control.\n\nRisks:\n\n- tracking fatigue;\n- role confusion;\n- surveillance feeling;\n- unclear data sharing.\n\nProduct requirements:\n\n- quick start;\n- progressive explanation;\n- user-controlled sharing;\n- correction and recovery.\n\n### Caregiver or family member\n\nWants:\n\n- appropriate support and visibility.\n\nRisks:\n\n- overreach;\n- outdated permission;\n- loss of patient control.\n\nProduct requirements:\n\n- explicit permission;\n- revocation;\n- visible scope;\n- audit of sharing changes.\n\n### Health professional\n\nWants:\n\n- concise, reviewable information.\n\nRisks:\n\n- raw data overload;\n- uncertain reliability;\n- unclear liability;\n- automation mistaken for clinical judgment.\n\nProduct requirements:\n\n- short summary;\n- source and confidence visibility;\n- clear patient-generated-data label;\n- professional review and editability.\n\n### Sponsor or program partner\n\nWants:\n\n- activation;\n- retained participation;\n- program outcomes;\n- reporting;\n- renewal evidence.\n\nRisks:\n\n- weak data;\n- trust backlash;\n- unclear consent;\n- measurement that rewards volume over quality.\n\nProduct requirements:\n\n- aggregate reporting;\n- role and consent status;\n- data-completeness signals;\n- cohort-level outcomes.\n\n### Research team\n\nWants:\n\n- valid participation;\n- structured data;\n- withdrawal handling;\n- auditability.\n\nRisks:\n\n- consent confusion;\n- biased cohorts;\n- low-quality self-reporting;\n- mixed research and ordinary-use states.\n\nProduct requirements:\n\n- separate consent;\n- participation status;\n- source and quality metadata;\n- withdrawal pathway.\n\n### Product, data, growth, legal, and operations teams\n\nWant:\n\n- scalable activation;\n- consistent measurement;\n- safe market adaptation;\n- manageable support.\n\nRisks:\n\n- feature sprawl;\n- inconsistent event taxonomy;\n- local compliance gaps;\n- trust treated as copy rather than behavior.\n\nProduct requirements:\n\n- shared event definitions;\n- market feature flags;\n- role-state architecture;\n- operating review;\n- escalation standards.\n\n## Trust-Safe Activation pathway\n\nA shallow funnel is:\n\n> Install\n> \n> \n> → Sign up\n> \n> → Track\n> \n> → Reward\n> \n\nA more useful product pathway is:\n\n> Trusted entry\n> \n> \n> → Quick health setup\n> \n> → First useful action\n> \n> → First reward or feedback\n> \n> → Progressive role and data clarity\n> \n> → D7 routine\n> \n> → D30 retained routine\n> \n> → Patient, care, research, or partner value\n> \n\n### Stage 1 — Trusted entry\n\nQuestion:\n\n> Where did the user come from, and what context should be visible?\n> \n\nPossible entry sources:\n\n- organic;\n- sponsor program;\n- hospital or health professional;\n- insurer or employer;\n- research invitation;\n- family support.\n\nSignals:\n\n- `entry_source`\n- program context shown\n- user recognizes why they arrived\n\n### Stage 2 — Quick health setup\n\nQuestion:\n\n> Can the user reach one useful action without completing a full medical profile?\n> \n\nSignals:\n\n- setup started and completed;\n- time to first value;\n- abandonment point;\n- accessibility issues.\n\n### Stage 3 — First value\n\nQuestion:\n\n> Did the user complete a meaningful action?\n> \n\nExamples:\n\n- reminder enabled;\n- first honest log;\n- first measurement;\n- first refill setup;\n- first report preview.\n\n### Stage 4 — Progressive trust gate\n\nQuestion:\n\n> Does the user understand a change in role, sponsor, consent, or sharing at the point it occurs?\n> \n\nExamples:\n\n- joining a sponsored program;\n- accepting research participation;\n- sharing a report;\n- enabling family access;\n- entering a professional workflow.\n\n### Stage 5 — D7 routine\n\nQuestion:\n\n> Is behavior repeating beyond novelty and the first reward?\n> \n\n### Stage 6 — D30 activated cohort\n\nQuestion:\n\n> Is the routine stable enough to support user, care, research, or partner value?\n> \n\n### Stage 7 — Downstream value\n\nQuestion:\n\n> Can the behavior become useful without overstating its quality or changing the user’s role invisibly?\n> \n\n## Product components\n\n### 1. Low-friction health setup\n\nMechanic:\n\n> One health focus\n> \n> \n> → One reminder or first log\n> \n> → First useful feedback or reward\n> \n> → Complete the profile later\n> \n\nPurpose:\n\n- reduce first-session burden;\n- support older or referred users;\n- reach value before asking for extensive information.\n\n### 2. Contextual role and consent explanation\n\nAt a role-changing action, show:\n\n- who supports the program;\n- what the user is joining;\n- what information is used;\n- what is not shared;\n- what remains optional;\n- how to leave or revoke.\n\nThe explanation should be short first, with deeper detail available.\n\n### 3. Role and Sharing Center\n\nOne place to view:\n\n- general-user state;\n- sponsored-program participation;\n- research participation;\n- family sharing;\n- report sharing;\n- professional-workflow connections;\n- permissions and revocation.\n\n### 4. Honest-reward mechanics\n\nRewards should not create pressure to report only positive behavior.\n\nPotential principles:\n\n- reward the act of accurate tracking, not only “good” outcomes;\n- allow missed medication or difficult measurements to be reported honestly;\n- delay high-value rewards until routine signals exist;\n- do not punish users whose conditions or resources make frequent tracking difficult.\n\n### 5. Data-confidence support\n\nUse gentle quality mechanics:\n\n- impossible-value check;\n- duplicate-entry check;\n- unusual-change confirmation;\n- correction prompt;\n- source label;\n- self-reported / device / imported distinction.\n\nAvoid harsh “fraud” labels for ordinary anomalies.\n\n### 6. Reactivation\n\nDrop-off is expected in chronic or long-term health routines.\n\nRecovery should be a product path, not an exception.\n\nExamples:\n\n- unfinished setup → 30-second restart;\n- missed routine → restart without penalty;\n- tracking fatigue → reduce frequency or simplify;\n- wrong program → leave and return to general use;\n- sharing mistake → revoke and confirm the new state.\n\n### 7. Patient-controlled health summary\n\nA short summary may include:\n\n- recent routine;\n- selected measurements;\n- changes or unusual values;\n- missed actions;\n- user’s question;\n- source and confidence labels.\n\nThe summary should remain:\n\n- patient-controlled;\n- reviewable;\n- editable where appropriate;\n- clearly separate from diagnosis or treatment advice.\n\n### 8. Cohort and partner reporting\n\nPartner reporting should focus on aggregate program quality.\n\nPossible signals:\n\n- entry source;\n- setup completion;\n- D7 and D30 routine;\n- consent state;\n- data completeness;\n- reactivation;\n- withdrawal;\n- report generation;\n- support burden.\n\nIndividual data should not become visible merely because a partner funds the program.\n\n## Instrumentation\n\nA possible event sequence is:\n\n> `app_open`\n> \n> \n> → `signup_started`\n> \n> → `signup_completed`\n> \n> → `entry_context_viewed`\n> \n> → `health_focus_selected`\n> \n> → `first_action_configured`\n> \n> → `first_tracking_completed`\n> \n> → `first_reward_claimed`\n> \n> → `role_change_explanation_viewed`\n> \n> → `consent_started` / `consent_completed`\n> \n> → `D3_return`\n> \n> → `D7_tracking_active`\n> \n> → `D30_retained_routine`\n> \n> → `health_summary_generated`\n> \n> → `report_shared` / `program_joined` / `research_opt_in`\n> \n\nUseful segmentation:\n\n- entry source;\n- condition or health focus;\n- age and accessibility needs where lawful and appropriate;\n- reward motivation;\n- sponsored versus general use;\n- research invitation;\n- professional referral;\n- market;\n- device or manual entry.\n\n## Metrics and impact hypotheses\n\nThese are not known Elfie baselines.\n\nThey are directional hypotheses to test after baseline discovery.\n\n### Activation\n\n- first-setup completion;\n- time to first useful action;\n- first tracking completed;\n- first reward claimed;\n- D3 return;\n- D7 active routine.\n\n### Trust and role clarity\n\n- role-change explanation viewed;\n- consent start and completion;\n- consent-related drop-off;\n- role confusion reported;\n- permission revocation success;\n- trust-related support contacts.\n\n### Retention and recovery\n\n- D30 retained routine;\n- routine restart;\n- reactivation after missed behavior;\n- reduced repeated setup;\n- reason for drop-off.\n\n### Data quality\n\n- corrected entry;\n- impossible-value confirmation;\n- duplicate entry;\n- source completeness;\n- self-reported versus imported distinction;\n- confidence label coverage.\n\n### Downstream value\n\n- summary generated;\n- summary shared;\n- professional review or use, where measurable;\n- research participation and withdrawal;\n- cohort-report use;\n- partner renewal signal.\n\nA better north-star direction is not downloads, MAU, or coins claimed alone.\n\nIt is:\n\n> **Retained health routine quality that can translate into user value and downstream usefulness without weakening trust or control.**\n> \n\n## Experiment set\n\n### Experiment 1 — Quick-start setup\n\nVariants:\n\n- full profile first;\n- one health focus first;\n- referral-specific quick start.\n\nMeasure:\n\n- setup completion;\n- time to first value;\n- D7 routine;\n- downstream profile completion.\n\nGuardrail:\n\n- do not hide information required for safe use.\n\n### Experiment 2 — Progressive role explanation\n\nVariants:\n\n- large upfront explanation;\n- contextual explanation at role-changing action;\n- short explanation with expandable detail.\n\nMeasure:\n\n- completion;\n- informed opt-in;\n- role confusion;\n- trust feedback;\n- later withdrawal.\n\nGuardrail:\n\n- no dark patterns or preselected consent.\n\n### Experiment 3 — Reward timing\n\nVariants:\n\n- immediate reward;\n- small immediate reward plus D7 unlock;\n- routine milestone reward.\n\nMeasure:\n\n- honest tracking;\n- D7 routine;\n- unusual entries;\n- reward-only behavior.\n\nGuardrail:\n\n- do not penalize difficult health outcomes.\n\n### Experiment 4 — Reactivation\n\nVariants based on drop-off reason:\n\n- unfinished setup;\n- missed routine;\n- tracking fatigue;\n- program confusion;\n- technical problem.\n\nMeasure:\n\n- restart;\n- retained behavior after restart;\n- support demand;\n- opt-out.\n\n### Experiment 5 — Health summary\n\nVariants:\n\n- raw history;\n- concise patient-controlled summary;\n- summary with source/confidence labels.\n\nMeasure:\n\n- preview;\n- share;\n- user comprehension;\n- professional usefulness where available;\n- correction before sharing.\n\nGuardrail:\n\n- no diagnosis claim.\n\n## MVP roadmap\n\n### Weeks 0–2 — Baseline and discovery\n\n- map entry sources and role states;\n- define activation events;\n- measure current setup and D7 funnel;\n- review support reasons;\n- identify current consent and sharing transitions;\n- confirm product and clinical boundaries.\n\n### Weeks 3–5 — Quick-start and instrumentation\n\n- launch one-health-focus quick start;\n- instrument first-value events;\n- add drop-off reason capture;\n- establish event-quality review.\n\n### Weeks 6–8 — Progressive trust\n\n- add contextual role explanations;\n- create Role and Sharing Center MVP;\n- test revocation and recovery;\n- review support and trust signals.\n\n### Weeks 9–12 — Routine and reactivation\n\n- test reward timing;\n- add reason-based reactivation;\n- introduce gentle data-quality prompts;\n- measure D7 and D30 impact.\n\n### Quarter 2 — Downstream value\n\n- pilot patient-controlled summary;\n- test aggregate program reporting;\n- separate research participation state;\n- validate professional-workflow usefulness;\n- build renewal and program-quality review.\n\n## Risks and guardrails\n\n### Clinical overreach\n\nRisk:\n\nSelf-reported or AI-organized information may be mistaken for diagnosis or medical advice.\n\nGuardrail:\n\n- clear role labels;\n- source visibility;\n- professional review;\n- no treatment instruction unless governed by an appropriate clinical pathway.\n\n### Consent fatigue\n\nRisk:\n\nToo many explanations reduce activation without improving understanding.\n\nGuardrail:\n\n- progressive disclosure;\n- explain at role change;\n- test comprehension, not only completion.\n\n### Reward distortion\n\nRisk:\n\nUsers optimize for rewards rather than honest behavior.\n\nGuardrail:\n\n- reward tracking honesty and routine;\n- anomaly confirmation;\n- avoid punishment for negative health outcomes.\n\n### Sponsor mistrust\n\nRisk:\n\nUsers believe sponsors or payers can see individual data by default.\n\nGuardrail:\n\n- aggregate reporting by default;\n- visible sharing state;\n- clear role and data boundary.\n\n### Data-quality overconfidence\n\nRisk:\n\nStructured self-reported data appears more reliable than it is.\n\nGuardrail:\n\n- source and confidence labels;\n- correction history;\n- distinction between self-reported, device, and imported data.\n\n### Feature sprawl\n\nRisk:\n\nEach partner or market creates a different activation system.\n\nGuardrail:\n\n- shared role-state model;\n- shared event taxonomy;\n- market feature flags;\n- explicit exception review.\n\n## Open questions\n\n- Which public product surfaces are integrated today?\n- What is the current activation baseline by entry source?\n- Which users are general users, program participants, research participants, or professional-workflow users?\n- What data is shared at individual and aggregate level?\n- What role does ElfieCare currently play in deployed workflows?\n- Which outcomes are company claims, partner-reported, research-derived, or independently verified?\n- Which markets create different consent or safety requirements?\n- What is the largest source of activation failure?\n- What is the largest source of trust-related support demand?\n- What evidence would cause the proposed direction to change?\n\n## Source register — in progress\n\n| Source | What it supports | Source type | Limitation |\n| --- | --- | --- | --- |\n| **[ADD ELFIE CONSUMER PRODUCT PAGE]** | Public consumer positioning | Company source | Describes product; does not independently validate outcomes |\n| **[ADD ELFIE PARTNER / PHARMA PAGE]** | Public partner positioning | Company source | Commercial description |\n| **[ADD ELFIE RESEARCH PAGE]** | Public research direction | Company source | Deployment maturity may be unclear |\n| **[ADD ELFIECARE PAGE]** | Public professional-workflow positioning | Company source | Integration depth and adoption unknown |\n| **[ADD MYTHERAPY SOURCE]** | Reference-product pattern | Company source | Pattern reference, not evidence for Elfie |\n| **[ADD MEDISAFE SOURCE]** | Reference-product pattern | Company source | Pattern reference |\n| **[ADD OMADA / DARIO / LARK SOURCES]** | Reference-product patterns | Company sources | Outcomes require independent verification |\n\n## Final recommendation\n\nThe strongest product direction is not “more engagement” in isolation.\n\nIt is:\n\n> **Build a measurable activation pathway in which users reach value quickly, understand role changes when they occur, preserve control over sharing, form a repeatable routine, and create downstream value that remains proportionate to the evidence and permissions available.**\n> \n\nThis is a product work sample.\n\nIts next step in a real environment would be discovery against internal baselines, constraints, safety review, and partner reality.\n\n---\n\n## Current Limitations\n\nThis case is an outside-in product proposal without internal product, user, clinical, regulatory, operational, or commercial evidence.\n\nIt does not establish:\n\n- Elfie’s current activation funnel or D7/D30 baselines;\n- which public product surfaces are live, integrated, piloted, or strategic priorities;\n- how users currently understand sponsors, research participation, professional workflows, or data sharing;\n- whether reward mechanics improve routine quality or mainly attract reward-seeking behavior;\n- the reliability and usefulness of self-reported information in downstream workflows;\n- partner reporting requirements, contractual boundaries, or renewal drivers;\n- or the technical, clinical, legal, and market-specific feasibility of the proposed components.\n\nThe metrics, experiments, and 0–12 week sequence are therefore decision hypotheses, not known Elfie commitments or performance targets.\n\n## Next Validation Step\n\nA practical validation sequence would be:\n\n1. establish the current activation, retention, consent, support, and data-quality baselines by entry source and role;\n2. conduct user research around first value, sponsor understanding, role transitions, rewards, sharing, and withdrawal;\n3. instrument one bounded quick-start pathway with explicit event-quality review;\n4. test contextual role explanation against comprehension, informed choice, confusion, withdrawal, and support demand—not completion alone;\n5. pilot reactivation and patient-controlled summaries with correction, source, confidence, and professional-review safeguards;\n6. decide whether the pathway improves retained routine quality and downstream usefulness without weakening trust or user control.\n\n## Continue Reading\n\n[Vinamilk — Trusted Nutrition Product-Service Discovery](https://app.notion.com/p/Vinamilk-Trusted-Nutrition-Product-Service-Discovery-3a16210cf1c780c88ff5cb1a31d22a6e?pvs=21) — a product-service research progression on trust preservation from proposition discovery through operating scale and access governance.\n\n[Zalo Scam Emergency Mode](https://app.notion.com/p/Zalo-Scam-Emergency-Mode-Payment-Safety-Signal-Post-Transfer-Safety-Coach-38b6210cf1c781fa95bee2c50a943c77?pvs=21) — an early product concept focused on contextual safety intervention, action-first guidance, evidence preservation, and recovery.\n\n[Work Library](https://app.notion.com/p/Work-Library-37d6210cf1c7804b933af056f81215ea?pvs=21) · [Portfolio Home](https://app.notion.com/p/Ph-m-Thanh-Ph-s-Works-37d6210cf1c78052afafd34e27af898b?pvs=21)"
  },
  "/work/post-signing-artist-label-operations": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ",
        "fileName": "Post-Signing_Artist_Label_Operations_Case_Study.pdf",
        "label": "📄 Xem trước: Post-Signing_Artist_Label_Operations_Case_Study.pdf ↗",
        "title": "Post-Signing Artist Label Operations Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ\" data-type=\"paper\" data-title=\"Post-Signing Artist Label Operations Case Study\">📄 Post-Signing Artist Label Operations Case Study (PAPER) ↗</button>\n</asset-bar>\n\n> **A signed deal looks like an ending from the outside. Operationally, it creates a queue of rights, approvals, campaigns, payments, reporting, fan promises, and exceptions that now have to stay connected.**\n> \n\n> **Type:** Operating Model / Role-Understanding Work Sample\n**Stage:** Working Model\n**Evidence basis:** Public industry patterns, role analysis, and operating inference\n**Last updated:** August 2026\n**Boundary:** An independent synthesis—not an internal label process, official industry standard, or validated universal model.\n> \n\n> **Supporting artifact:**\n> \n> \n> <button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1sjbx90b79-vMT7xz_3Ieo-Orj0EB4hzQ\" data-type=\"paper\" data-title=\"Post-Signing Artist Label Operations Case Study\">Post-Signing_Artist_Label_Operations_Case_Study.pdf ↗</button>\n> \n\n---\n\n## The operating problem\n\nA signed agreement can settle commercial intent while leaving the operating work unresolved. Rights still need to become approval rules; promises need owners and dates; campaigns need dependencies cleared; payments and reporting need visible states; fan-facing failures still need a route back to the partnership team.\n\nThe useful question is therefore narrower than “how do we manage artists?”:\n\n> **How do we keep commitments visible after signing, especially when several teams, vendors, and fan-facing systems participate in the same promise?**\n> \n\nThis working model treats the agreement as the start of an operating pathway: translate the deal into repeatable work, preserve one source of truth, and make changes and recovery traceable.\n\n## Before signing — standard spine, explicit exceptions\n\nCustomization is normal. The risk begins when basic operating structure is customized too, because every new partnership can then create its own hidden workflow.\n\n| Standard operating spine | Deal-specific choices |\n| --- | --- |\n| Onboarding, owner map, approval categories, campaign brief, reporting fields, finance states, support route, change log, review cadence | Creative identity, exclusivity, release strategy, territory, commercial terms, fan benefits, special events, brand restrictions, approval authority, reporting depth, crisis sensitivity |\n\n<aside>\n🧭\n\n**Rule:** Standardize how the work is coordinated; customize the commercial and creative choices that actually need to differ.\n\n</aside>\n\n## Post-signing lifecycle\n\nThe lifecycle can stay simple as long as each handoff preserves the operating state.\n\n<aside>\n→\n\n**Signed → Setup → Translate commitments → Plan & approve → Execute → Report & settle → Recover → Renew / exit**\n\n</aside>\n\nAt every transition, three things should remain visible: **current state, next owner, and evidence of what was agreed.**\n\n## Seven operating workstreams\n\nThe workstreams are not seven departments. They are seven kinds of state that can break when ownership, records, or handoffs become unclear.\n\n| Workstream | What must stay visible | Failure to catch |\n| --- | --- | --- |\n| **1 · Partner relationship** | Contacts, decision authority, open commitments, review cadence, escalation | An unresolved operating issue quietly becomes a relationship problem |\n| **2 · Rights & approvals** | Asset, right involved, approver, conditions, expiry, approved version, evidence | Approval drift across context, territory, duration, or format |\n| **3 · Release & campaign** | Objective, dependencies, readiness, approvals, support preparation, owner | Creatively ready but operationally unready |\n| **4 · Fandom & membership** | Promise, eligible fan, entitlement evidence, fulfilment owner, recovery route | A fan benefit exists but cannot be recognized or recovered |\n| **5 · Merchandise & ticketing** | Inventory or capacity, vendor, payment, order/ticket state, fulfilment, refund | Oversell, invalid access, delayed fulfilment, inconsistent status |\n| **6 · Finance & reporting** | Commercial model, invoice, settlement, reporting period, variance, dispute, owner | A clean number hides estimated, pending, disputed, or adjusted states |\n| **7 · Support & crisis** | Promise, incident, owner, approved communication, recovery, recurrence | A fan-facing failure stays isolated from the partnership record |\n\n## Artist Operating File — minimum source of truth\n\nThe Artist Operating File should point people to the current operating truth without becoming a second uncontrolled archive.\n\n| Domain | Minimum record |\n| --- | --- |\n| **Relationship** | Artist/label/management contacts, decision authority, review cadence, escalation boundary |\n| **Rights & contract** | Rights matrix, territory, duration, exclusivity, approval rights, restrictions, renewal/exit conditions |\n| **Calendar & commitments** | Releases, campaigns, events, approvals, reporting, payments, dependencies, deadlines |\n| **Platform & commerce** | Active surfaces, membership, merch, ticketing, fan benefits, vendors, technical dependencies |\n| **Finance & reporting** | Commercial model, invoices, cost/revenue, settlement, reporting state, disputes, financial owner |\n| **Issues & escalation** | Severity, affected pathway, evidence, owner, next action, deadline, communication, recovery, learning |\n\n<aside>\n📌\n\nThe file should preserve **where the authoritative record lives, what state it is in, and who owns the next action**. It does not need to duplicate every raw document or conversation.\n\n</aside>\n\n## Control Tower maturity — four earned layers\n\nA Control Tower should grow only when coordination burden earns the next layer.\n\n| Layer | Trigger | Minimum added structure |\n| --- | --- | --- |\n| **4 · Learning** | Failures recur across artists or campaigns | Incident patterns · root cause · workflow change |\n| **3 · Control** | Blockers and handoffs repeatedly cross teams | Risk/dependency view · owner map · operating review |\n| **2 · Coordination** | Commitments, approvals, payments, and reports begin to overlap | Commitment register · portfolio calendar · pipeline |\n| **1 · Foundation** | Facts and authority no longer fit safely in personal memory | Master list · Artist Operating File · rights matrix |\n\n<aside>\n△\n\n**Foundation → Coordination → Control → Learning**. Each layer adds structure only after the previous layer is no longer enough.\n\n</aside>\n\nThis is a heuristic maturity path, not a validated numerical threshold.\n\n## Change workflow — one traceable line\n\nChange is normal. The failure happens when authority, downstream impact, or the final state gets separated from the request.\n\n<aside>\n→\n\n**Request → Impact & authority → Update source of truth → Notify & close**\n\n</aside>\n\n| Checkpoint | What must travel with the change |\n| --- | --- |\n| **1 · Request** | What changed · requester · reason · needed by |\n| **2 · Impact & authority** | Rights · timeline · cost · fan/brand impact · dependencies · correct approver · conditions |\n| **3 · Update** | Only the affected sources of truth: operating file, calendar, rights, commitments, budget, campaign or reporting state |\n| **4 · Notify & close** | Who accepted the new state · what actually changed · unresolved consequence · learning if the pattern recurs |\n\n## Trust and crisis recovery — three phases\n\n| Before release · Prevent | During incident · Contain | After incident · Recover |\n| --- | --- | --- |\n| Confirm rights and approval source\nPreserve references\nConfirm vendor commitment\nTest critical access/fulfilment\nPrepare support language\nDefine escalation and stop conditions | Identify affected pathway\nStop unsafe or misleading action\nPreserve evidence\nAssign one incident owner\nAlign partner/public communication\nProtect affected fans or customers | Correct the issue\nCommunicate status\nCompensate where appropriate\nConfirm affected users recovered\nUpdate artist/label\nFind root cause and change workflow\nRecord unresolved exposure |\n\n<aside>\n↩️\n\n**Recovery rule:** closing the internal task is not enough. Recovery ends when the affected relationship and operating pathway have been restored as far as reasonably possible.\n\n</aside>\n\n## What I would validate first\n\n1. Which of these workstreams actually exist, and who holds decision authority in each?\n2. Where do commitments, approvals, and exceptions currently live?\n3. Which handoffs still depend on personal memory or repeated explanation?\n4. Which changes create the largest downstream cost across rights, campaign, finance, support, or fan experience?\n5. How do fan incidents travel back to the partnership team and artist/label relationship?\n6. What is the smallest operating file and coordination layer that would materially reduce burden before a larger Control Tower is justified?\n\n## Current boundary\n\nThis case does not establish how any specific label, artist-management team, or platform currently operates. It also does not prove that every partnership needs all seven workstreams, a centralized file, or a Control Tower.\n\nThe model is useful only if internal discovery shows that commitments are being lost across handoffs, states are difficult to reconcile, or recovery depends too heavily on individual memory. Where lighter standards or existing systems already preserve that continuity, they should remain in place.\n\n## Final takeaway\n\nSigning gives the relationship a legal and commercial starting point. The operating work keeps later commitments legible: **what was promised, what changed, who owns the next action, what evidence exists, and how the pathway recovers when delivery goes wrong.**\n\nThe next useful test is against one real organization, portfolio, and operating cadence."
  },
  "/work/shopee-account-restrictions": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ",
        "fileName": "Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf",
        "label": "📄 Xem trước: Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf ↗",
        "title": "Shopee Account Restriction Resolution Portfolio Final 2026-08-05"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ\" data-type=\"paper\" data-title=\"Shopee Account Restriction Resolution Portfolio Final 2026-08-05\">📄 Shopee Account Restriction Resolution Portfolio Final 2026-08-05 (PAPER) ↗</button>\n</asset-bar>\n\n## Can Customers Still Understand, Preserve, Contest, and Recover?\n\n> **Evidence-Based Product Operations Case**\n> \n\n> A privacy-first analysis of 35 coded Threads narratives, Shopee policy, and Vietnam consumer-protection baselines\n> \n\n> Public evidence only · Research cut: 5 August 2026 · Not commissioned by Shopee\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 5, 2026, 04_39_00 PM.png\" driveid=\"1usqgZCJbA7udggiW8W9UBlv3NgGJb0WM\" caption=\"ChatGPT Image Aug 5, 2026, 04_39_00 PM.png\"></diagram-card>\n\n\n> **The restriction is one platform event. The customer may still be waiting on an order, refund, balance, benefit, or explanation after that event has been recorded internally. This case asks what minimum resolution pathway should remain visible without requiring the platform to expose its fraud model.**\n> \n\n---\n\n## Executive Summary\n\n- **Problem:** A restriction can affect more than account access. Orders, refunds, balances, benefits, and future transactions may also become uncertain.\n- **Evidence:** 35 public customer narratives were collected and screened; 22 form the core analytical sample. The corpus is purposive and supports pathway analysis, not prevalence or wrongdoing claims.\n- **Observed issue:** Customers in the sample reported different levels of reason clarity, appeal effort, affected interests, and recovery outcomes.\n- **Proposal:** An **Explainable Resolution Case** — one coherent customer-facing source of truth for the current issue, affected interests, required action, review state, timing, outcome, recovery state, and remaining remedy.\n- **Business hypothesis:** Better resolution quality may improve benefit recovery, customer experience, return, repeat purchase, and retention without weakening enforcement controls. This must be tested with Shopee internal data; the public case does not claim that the solution is proven.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full 22-page case includes the privacy-first evidence register, detailed gap matrix, policy/legal source cards, claim-to-source map, pilot design, metric definitions, guardrails, and evidence boundaries.\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1tbyd18ZECS49cZfQbWGhTvBPHYG0tSDZ\" data-type=\"paper\" data-title=\"Shopee Account Restriction Resolution Portfolio Final 2026-08-05\">Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf ↗</button>\n\n</aside>\n\n---\n\n## 1. Case Framing — Restriction interrupts a customer benefit, not just an account\n\nCustomers use a marketplace to achieve a downstream benefit: receive a product, complete a time-sensitive purchase, recover a refund, use stored value, or maintain account continuity.\n\nThe research object is therefore the **post-restriction customer-resolution pathway**, not the restriction decision in isolation.\n\n> **Key distinction:** Internal case closure does not necessarily mean the customer problem is resolved.\n> \n\n---\n\n## 2. Research Question and Scope\n\n> **After a marketplace restricts a customer account, does a usable resolution pathway remain visible and actionable to the customer?**\n> \n\nThe case separates three questions:\n\n1. What customers publicly reported experiencing.\n2. What Shopee publicly states in policy/help and complaint processes.\n3. What current legal or regulator baselines require or make available, subject to applicability.\n\n**Out of scope:** proving individual restrictions erroneous or unlawful; estimating platform-wide failure rates; reverse-engineering fraud controls; inferring undocumented Shopee operations; or claiming the proposed intervention works before testing.\n\n- Evidence and method\n    - Public narratives were collected manually and purposively.\n    - The coded register used in this case contains **35 publicly linked Threads posts and replies: 22 core / 4 adjacent / 4 appeal-recovery context / 5 excluded**.\n    - Broader Facebook screening was not included in the coded corpus.\n    - Records were screened for sufficient pathway detail, relevance to the research object, and near-duplicate content.\n    - Usernames, screenshots, profile URLs, direct social links, and verbatim posts are excluded from the portfolio export.\n    - Evidence supports reported pathway states and customer-interface signals. It does **not** establish prevalence, representativeness, a common root cause, wrongdoing, or legal violation.\n\n---\n\n## 3. Observed Customer Journey — The path fragments after restriction\n\nDifferent initiating events converged into a partially shared post-restriction resolution problem:\n\n> **Intended benefit → restriction/cancellation → search for explanation/support → appeal/review in some cases → mixed recovery or unresolved outcome**\n> \n\nFour recurring analytical signals matter:\n\n- **Reason opacity** — some customers could not identify a sufficiently specific reason.\n- **Appeal effort** — some reported repeated contact or evidence submission.\n- **Mixed recovery** — outcomes ranged from reopening to delayed recovery, relock, permanent lock, or unresolved/unstated outcomes.\n- **Affected interests beyond access** — orders, purchases, balances, benefits, or account continuity could also be involved.\n\nThis supports studying **resolution quality**, not concluding that all restrictions share one failure mode.\n\n\n<diagram-card title=\"Shopee_Case_Figure_1_Observed_Pathway.png\" driveid=\"1_O_IQFaVpGzJweoJSBcfM2tifcB0hbQ8\" caption=\"Shopee_Case_Figure_1_Observed_Pathway.png\"></diagram-card>\n\n\n*Caption: Synthesis of reported pathway states across a purposive public evidence sample; not an official Shopee process.*\n\n---\n\n## 4. Minimum Contestable Restriction — What should remain possible\n\nFor this case, operational contestability means preserving four customer functions:\n\n> **UNDERSTAND → PRESERVE → CONTEST → RESOLVE / ESCALATE**\n> \n\nThe customer should be able to determine:\n\n- what is restricted and what is affected;\n- the safe-to-disclose reason or rule at issue;\n- where and how to submit a complaint or evidence;\n- current review state and expected timing;\n- what happens to pending orders, refunds, balances, and benefits;\n- the reasoned outcome and practical recovery consequence;\n- what internal or external remedy remains.\n\nThis is an operational minimum for the case, not a claim that every element is independently mandated by one law.\n\n- Policy and legal baseline\n    \n    Three baselines are kept separate:\n    \n    1. **Shopee policy:** broad account-enforcement discretion plus published restoration and complaint routes.\n    2. **Vietnam consumer-protection law:** complaint receipt/resolution duties, intermediary-platform responsibilities, and recognized dispute-remedy routes.\n    3. **Electronic-transactions and e-commerce platform duties:** potentially relevant platform-specific information, complaint-handling, coordination, and record obligations, subject to the exact statutory classification and provision applied.\n    \n    **Important:** Shopee's published complaint timing, statutory complaint acknowledgement, and statutory negotiation timing are separate clocks. The case does not merge them into one SLA.\n    \n    Full provisions, source cards, URLs, and applicability notes are retained in the full case.\n    \n- Observed Gap Matrix\n    \n    Each Minimum Contestable Restriction element is compared against public narratives and published baselines using three evidence states:\n    \n    - **Observed gap** — a missing or insufficient element is directly reported.\n    - **Partially evidenced** — a relevant feature appears, but completeness or consistency cannot be determined.\n    - **Not evidenced — cannot determine** — the public corpus lacks enough visibility.\n    \n    This distinction prevents **“not reported”** from being converted into **“Shopee does not do this.”**\n    \n    The strongest directly observed issue is reason/explanation opacity in a subset of narratives. Other areas worth testing are affected-interest visibility, complaint acknowledgement, review-state visibility, timing certainty, recovery handling, and remedy continuity.\n    \n- Customer Remedy Ladder\n    \n    The pathway should remain intelligible even when the platform reaches an internally final decision:\n    \n    1. Read the restriction notice and published restoration requirements.\n    2. Use the internal complaint/restoration process and retain submitted evidence and dates.\n    3. Seek an actionable outcome: decision, practical consequences, and remaining action.\n    4. Use negotiation or supported negotiation where statutory conditions apply.\n    5. Other recognized routes may include mediation, arbitration, or court, subject to jurisdiction, agreement, procedure, and facts.\n    \n    > **Key distinction:** An internal case can be closed while the customer problem remains open.\n    > \n\n---\n\n## 5. Platform Governance Diagnosis — Four interface control problems worth testing\n\n- Open diagnosis\n    \n    ### 5.1 Enforcement decision ↔ customer explanation\n    \n    The platform may need to protect detection signals, but that does not eliminate the need for enough explanation to make a decision contestable.\n    \n    ### 5.2 Restriction ↔ affected interests\n    \n    The resolution object may include orders, refunds, stored value, benefits, and linked-service access — not only account reopening.\n    \n    ### 5.3 Complaint intake ↔ review visibility\n    \n    A contact channel is not the same as a visible case state. A customer may still lack a coherent source of truth for acknowledgement, evidence required, current stage, next step, or expected update.\n    \n    ### 5.4 Internal finality ↔ remedy continuity\n    \n    After internal review ends, the customer still needs to know what was decided, what happens to affected interests, what is actually final, and what route remains.\n    \n\n---\n\n## 6. Resolution Pathway Components — Make resolution explainable end to end\n\nThe proposal is one integrated pathway with four connected components:\n\n| Component | Role |\n| --- | --- |\n| **A. Restriction Notice** | Opens the pathway with state, affected scope, safe reason category, consequences, and appeal route. |\n| **B. Explainable Resolution Case** | Becomes the customer-facing source of truth for the case. |\n| **C. Affected-Interest Protection / Recovery** | Keeps orders, refunds, balances, benefits, and other practical consequences visible. |\n| **D. Reasoned Closure & Remedy** | Shows the decision, recovery state, remaining internal action, and external remedy where applicable. |\n\n### Explainable Resolution Case — Proposed source of truth\n\nThe conceptual case surface answers:\n\n- What is my current state?\n- Why am I here?\n- What is affected — and what remains protected?\n- What supports the issue at a safe-to-disclose level?\n- What do you need from me?\n- What is happening now?\n- When will I hear back?\n- What was decided?\n- What happens to my affected interests?\n- What can I do next?\n\n> **Design principle:** At any point, the customer should be able to determine where the issue sits, why it is there, what is affected, what information is required, what happens next, and when the next state is expected. Explainable does not mean disclosing everything.\n> \n\n\n<diagram-card title=\"Shopee_Case_Figure_2_Explainable_Resolution_Case.png\" driveid=\"19b-4zTKvXCe-GHlAxGrrY6CyYoIRzk-V\" caption=\"Shopee_Case_Figure_2_Explainable_Resolution_Case.png\"></diagram-card>\n\n\n*Caption: Conceptual customer-resolution interface; proposed, not an existing Shopee product.*\n\n---\n\n## 7. Recommended Pilot — Test resolution without changing detection rules\n\n**Hypothesis:** For a defined subset of eligible restricted buyer accounts, one coherent Explainable Resolution Case may reduce uncertainty and repeat support effort while improving resolution experience and post-resolution customer return, without materially weakening enforcement controls.\n\nFirst pilot principles:\n\n- define eligible account-restriction types and explicit high-risk exclusions;\n- do not change substantive detection thresholds or enforcement criteria;\n- test the resolution interface and cross-functional handoffs;\n- compare eligible cohorts using random assignment where feasible or a controlled phased rollout;\n- pre-register exclusions, metric definitions, comparison windows, guardrails, and stop conditions;\n- determine sample size from Shopee baseline volume and variance rather than inventing public-case targets.\n- Headline metrics and guardrails\n    \n    **Headline metrics**\n    \n    - Time to Customer Certainty\n    - Resolution Completeness\n    - Benefit Recovery Rate\n    - Repeat Contact Rate\n    - 30-day Customer Return Rate\n    \n    The pilot tests whether better resolution quality affects subsequent customer behavior. It does not assume that restoration automatically produces return or retention.\n    \n    **Guardrails**\n    \n    - incorrect restoration or enforcement-reversal risk;\n    - fraud or financial loss;\n    - sensitive-control disclosure;\n    - reviewer workload or backlog;\n    - privacy and security incidents.\n    \n    Detailed definitions, observation windows, survey items, retention logic, and stop conditions are provided in the full case.\n    \n\n---\n\n## 8. Bounded Findings and Unknowns — What this case can support\n\n### Evidence supports\n\n- Customer-reported difficulty or uncertainty can occur at multiple points in the post-restriction pathway.\n- Reason opacity appears directly in a subset of core narratives; appeal/contact and recovery outcomes are mixed.\n- Affected interests can extend beyond account access.\n- Public policy and legal sources preserve multiple resolution and remedy mechanisms alongside enforcement discretion.\n\n### Evidence does not support\n\n- a Shopee-wide prevalence or failure rate;\n- a common root cause across the core sample;\n- a conclusion that an individual restriction was wrongful or unlawful;\n- an inference that anything absent from a sampled narrative was absent from Shopee's actual process;\n- a claim that the proposed Explainable Resolution Case improves business outcomes before a pilot is run.\n\n---\n\n*Independent portfolio case study · Public evidence only · Research cut: 5 August 2026*"
  },
  "/work/fanme-controlled-growth": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI",
        "fileName": "FanMe_Controlled_Growth__Native_Editable_Final.pdf",
        "label": "📄 Xem trước: FanMe_Controlled_Growth__Native_Editable_Final.pdf ↗",
        "title": "FanMe Controlled Growth  Native Editable Final"
      },
      {
        "type": "paper",
        "driveId": "1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk",
        "fileName": "FanMe_Controlled_Growth_Pilot.pdf",
        "label": "📄 Xem trước: FanMe_Controlled_Growth_Pilot.pdf ↗",
        "title": "FanMe Controlled Growth Pilot"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI\" data-type=\"paper\" data-title=\"FanMe Controlled Growth  Native Editable Final\">📄 FanMe Controlled Growth  Native Editable Final (PAPER) ↗</button>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk\" data-type=\"paper\" data-title=\"FanMe Controlled Growth Pilot\">📄 FanMe Controlled Growth Pilot (PAPER) ↗</button>\n</asset-bar>\n\n## Can FanMe turn one artist launch into a repeatable operating capability?\n\n> **Controlled Growth & Launch Operations Case · Developed Work Sample**\n> \n\n> Six-week outside-in operating-readiness and artist-launch plan\n> \n\n> Public evidence and direct product observation only · Not commissioned by DAO or FanMe\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 10, 2026, 03_09_18 PM.png\" driveid=\"1CrBb6akpk5skhweDvBlmARZQaoRQSY-U\" caption=\"ChatGPT Image Aug 10, 2026, 03_09_18 PM.png\"></diagram-card>\n\n\n> **An artist can bring demand into FanMe quickly. The harder test is whether that burst can pass through login, a meaningful fan action, support, fulfilment, and commercial closure without turning the launch into a custom rescue project. The second artist is where I would test whether the operating system actually transfers.**\n> \n\n---\n\n## Executive Summary\n\n- **Current stage:** FanMe is treated as a live early-stage platform whose immediate challenge is formation and operating readiness—not the absence of a long-term vision.\n- **Role outcome:** Create a reliable operating system through which artist initiatives can launch and improve without every campaign becoming a custom rescue project.\n- **Growth lever:** Use controlled fan bursts from artist engagement and offline moments rather than waiting for a fully mature platform or opening traffic without containment.\n- **Pilot:** A six-week sequence from reality mapping and critical-path hardening to one anchor launch, productization, and a second-artist transfer test.\n- **Success test:** The second artist should require adaptation—not a complete rebuild, new tracker, or new emergency workflow.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full case contains the detailed role model, capability map, technical-delivery controls, operating records, risk matrix, roadmap, scale gates, strategic horizon, and public evidence links.\n\n**Full document here:** \n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1usSmtp-Ox6hmPTsZ-mEYv-kTD83UWVvk\" data-type=\"paper\" data-title=\"FanMe Controlled Growth Pilot\">FanMe_Controlled_Growth_Pilot.pdf ↗</button>\n\n**Attach presentation here:** \n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1xVd1MpeMoMWFKlHJWoB0GFiq0JGIf_qI\" data-type=\"paper\" data-title=\"FanMe Controlled Growth  Native Editable Final\">FanMe Controlled Growth — Native Editable Final.pdf ↗</button>\n\n</aside>\n\n---\n\n## 1. Current-Stage Diagnosis\n\nFanMe should not be approached as a mature-platform integration problem. The immediate question is narrower:\n\n> **What must work first, in what sequence, with which owners and recovery paths, before FanMe expands artist scope or product ambition?**\n> \n\nThe first case should therefore build and test one repeatable launch system rather than design the entire future fandom ecosystem.\n\n### Evidence boundary\n\nThis is an outside-in case based on public product surfaces, public company information, and direct journey observation. It does not claim access to internal analytics, architecture, staffing, contracts, unit economics, roadmaps, or operating playbooks.\n\n- What requires internal validation\n    - Product and technical ownership;\n    - internal, hybrid, or outsourced delivery model;\n    - committed capacity and WIP limits;\n    - artist commitments, rights, approvals, and deadlines;\n    - commerce, fulfillment, CS, settlement, and escalation ownership;\n    - actual launch traffic, failure patterns, and unit economics.\n\n---\n\n## 2. Strategic Lever — Controlled Fan Burst\n\n> **Borrow artist demand, constrain the first fan journey, observe everything, recover quickly, and expand only after the launch system transfers to another artist.**\n> \n\n### Minimum fan journey\n\n> **Artist push / offline moment → FanMe landing → login → follow or meaningful action → benefit / order / event → status and support → return**\n> \n\nThree conditions must exist before broader traffic:\n\n| Condition | What it means |\n| --- | --- |\n| **Reliable** | Fans can complete the critical action without losing account, payment, order, or benefit context. |\n| **Observable** | The team can see where the journey fails and which cohort, device, version, or dependency is affected. |\n| **Recoverable** | A failure has a named owner, containment action, communication path, escalation threshold, and closure evidence. |\n\nThe technical workstream supports this operating goal. Operations defines the critical journey, expected traffic shape, unacceptable failure states, visibility, and recovery requirements; Product/Tech selects and implements the architecture.\n\n---\n\n## 3. Role Understanding — Operating Integrator, Not Human Middleware\n\nThe Project & Operations Manager connects artist commitments, Product/Tech delivery, fan-facing execution, commerce and fulfillment, customer support, partner performance, settlement, and management reporting.\n\n> **Protect the outcome → identify the owner → support execution → escalate when the issue exceeds authority or capacity.**\n> \n\nThe role should not personally absorb every task or become the only bridge between functions and vendors.\n\n### Responsibility lanes\n\n- **Platform & Product Operations:** requirements, release coordination, UAT, incidents, analytics, and backlog visibility.\n- **Artist & Campaign Readiness:** commitments, rights, approvals, assets, fan promise, launch brief, and go/no-go readiness.\n- **Commerce, Fulfillment & Fan Continuity:** order/benefit states, exceptions, partner SLAs, support, and recovery.\n- **Reporting, Commercial Closure & Learning:** reconciliation, settlement, operating effort, post-launch evidence, and next-decision memo.\n\n---\n\n## 4. Minimum Operating System\n\nThe system should remain simple enough to live inside existing tools. Its purpose is to keep commitments, rights, capacity, delivery, recovery, money, and learning connected.\n\n> **Promise & commitment → rights & approval → capacity & readiness → controlled launch → CS and fulfillment recovery → commercial closure → learning and change**\n> \n\n### Core records\n\n| Control layer | What it protects |\n| --- | --- |\n| Initiative charter | Bounds the pilot and prevents the platform vision from swallowing the first test. |\n| Commitment, rights & approval view | Links each deliverable to permission, controlling party, approved version, deadline, and fallback. |\n| Fan promise register | Makes eligibility, delivery owner, timing, status source, communication trigger, and recovery path explicit. |\n| Capacity & WIP map | Tests whether the whole launch is supportable—not whether each function can individually “try.” |\n| Fan journey, release & dependency view | Connects front-end actions to systems, owners, state changes, analytics, fallbacks, and support. |\n| CS, incident & fulfillment recovery pack | Makes containment, communication, exception handling, escalation, and closure consistent. |\n| Commercial closure sheet | Shows collected value, failures, refunds, fees, partner shares, settlement, and manual operating effort. |\n| Post-launch learning record | Turns each launch into a reusable playbook, next-bottleneck view, and scale/stop decision. |\n- AI-assisted operating watcher\n    \n    AI may summarize approved trackers, flag missed deadlines or repeated operating patterns, and draft internal updates after the records are structured.\n    \n    Authority remains human-owned: AI does not approve rights, decide refunds or payouts, accept risk, change architecture, or publish autonomous crisis communication.\n    \n\n---\n\n## 5. Six-Week Controlled Growth Pilot\n\n| Week | Objective | Exit gate |\n| --- | --- | --- |\n| **1 — Reality Sprint** | Map what is live, manual, outsourced, planned, and unknown; choose one real artist initiative. | Named owners, bounded scope, clear fan promise, confirmed approvals, realistic capacity, support, and first-wave assumption. |\n| **2 — Minimum Reliable Journey** | Harden the critical path and build readiness, fallback, communication, and recovery controls. | Authentication, meaningful action, order/benefit/event, and support recovery can be tested end to end. |\n| **3 — Test in Waves** | Run internal, load, failure, dependency, and closed-fan tests. | Traffic grows only while error, duplicate risk, support load, and recovery remain within threshold. |\n| **4 — Anchor Artist Launch** | Use one artist moment to create bounded traffic waves with live monitoring and pause/rollback authority. | Fans complete the meaningful action and Tier 0 failures remain controlled. |\n| **5 — Fix and Productize** | Separate product defects, UX gaps, artist dependencies, CS gaps, manual bottlenecks, and the next capacity constraint. | The launch no longer depends on undocumented heroics; rights, promises, money, and recovery are closable. |\n| **6 — Second Artist Transfer Test** | Launch a second artist with a different fanbase or campaign pattern. | The second launch requires adaptation—not a new operating system. |\n\nOffline activation belongs inside the same loop—not as a separate vanity project:\n\n> **Artist / event attention → QR or code → FanMe login → follow / claim / purchase / check-in → account-visible status or benefit → post-event return**\n> \n\n---\n\n## 6. Measurement and Scale Gates\n\n### Pilot success statement\n\n> **FanMe can launch and support one artist initiative reliably, then transfer the same operating system to a second artist without disproportionate manual rescue.**\n> \n\nHeadline signals:\n\n- login success, session continuity, and Tier 0 error/latency;\n- first meaningful action and post-launch return;\n- payment/order or benefit completion and exception rate;\n- support entry, repeat contact, resolution, and incident closure time;\n- manual hours by workstream and number of custom steps required for Artist Two;\n- partner exceptions, fulfillment ageing, settlement discrepancies, and commercial closure;\n- approval lead time, blocked dependencies, emergency changes, and time to produce a decision-ready post-launch report.\n\nScale only when:\n\n- the critical journey is stable;\n- artist readiness, permissions, and approval versions are real;\n- the fan promise has an owner, status source, communication trigger, and recovery path;\n- each critical lane has capacity, backup, and a WIP/no-go limit;\n- support can see enough context to resolve the fan problem;\n- fulfillment, settlement, and commercial closure are traceable;\n- manual effort is bounded and the second artist does not recreate the workflow;\n- technical delivery has a named owner, controlled system access, documentation, committed capacity, and incident support.\n- Decision rules after the first two artists\n    - High traffic, low login → fix entry value, authentication, or UX before adding features.\n    - Login succeeds, low meaningful action → the fan promise or campaign value is weak.\n    - Fan action succeeds, low return → improve artist cadence, notification, and post-event continuity.\n    - Commerce succeeds, support or fulfillment fails → stop scaling demand until recovery is stable.\n    - Artist One works, Artist Two needs a full rebuild → the playbook is not yet platform capability.\n    - Both artists transfer cleanly → expand selectively and productize the highest-cost manual steps.\n\n---\n\n## 7. Boundary and Strategic Horizon\n\n### Explicit non-scope for the first six weeks\n\n- full platform redesign or feature-complete My FanMe;\n- mass artist onboarding or an open indie marketplace;\n- native ticketing, concert production, or full artist management;\n- broad paid membership, livestream, music-streaming, loyalty, or collectibles infrastructure;\n- international commerce or a complete commerce replatform;\n- a large offline event disconnected from the core fan journey.\n\nA later independent FanMe business, global-market operations, or partnership model is a conditional strategic horizon—not part of the pilot and not assumed to be DAO’s current strategy.\n\n- What must be true before the longer-term vision becomes credible\n    - several artist launches transfer through the same operating system;\n    - dedicated Product/Tech ownership and controllable critical system access;\n    - reliable commerce, CS, fulfillment, refunds, and partner exception handling;\n    - traceable rights, approvals, settlement, and revenue-share closure;\n    - a dedicated operating cadence, budget, and increasingly visible contribution logic;\n    - a recognizable FanMe relationship beyond one artist page;\n    - sufficient compliance and working-capital capacity for larger market responsibility.\n\n---\n\n## What This Case Demonstrates\n\n**Launch operations · Product/Tech coordination · artist and rights readiness · capacity and WIP control · fan-journey reliability · incident and recovery design · commercial closure · stage gates · transfer testing**\n\n---\n\n*Independent outside-in work sample · Public evidence and direct product observation only*"
  },
  "/work/datvietvac-ownership-belonging": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW",
        "fileName": "DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf",
        "label": "📄 Xem trước: DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf ↗",
        "title": "DatVietVAC Ownership Belonging Merchandise Growth Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW\" data-type=\"paper\" data-title=\"DatVietVAC Ownership Belonging Merchandise Growth Case Study\">📄 DatVietVAC Ownership Belonging Merchandise Growth Case Study (PAPER) ↗</button>\n</asset-bar>\n\n## Making verified fan contribution persist beyond a transaction or event\n\n> **Merchandise Growth & IP Commercialization Case · Developed Work Sample**\n> \n\n> Public evidence + Merchandise Manager JD · Outside-in case · August 2026 · Not commissioned by DatVietVAC\n> \n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging.png\" driveid=\"1U33wyQN4ZbGjCjU3NBM0ugSiQiI_xzm4\" caption=\"Verified History_ Ownership & Belonging.png\"></diagram-card>\n\n\n> **This case started from two ideas that look emotionally similar but operate very differently: recognizing past customer contribution with ownership at a corporate milestone, and preserving verified event/card history over time. I keep them separate because the first depends on securities feasibility; the second depends on identity, provenance, event operations, and merchandise economics.**\n> \n\n---\n\n## Executive Summary\n\n- **Question:** Can verified fan contribution persist beyond a purchase or event as ownership, history, or recognition—without turning novelty into uncontrolled cost or operational complexity?\n- **Idea 1 — Ownership:** test whether verified high-value historical customers could be recognized through an opt-in ownership mechanism after listing, subject to securities feasibility, approved transfer structure, budget, identity quality, and Legal/IR review.\n- **Idea 2 — Event Joining Card / History:** bind eligible event-linked physical cards to a verified fan account, preserve the exact digital collection history, separate verified attendance from card ownership, and test optional milestone returns and rewards.\n- **Shared primitive:** **User ID + verified historical action.** One idea uses cumulative paid history; the other uses event/card history.\n- **Decision logic:** treat the two ideas as separate experiments. Either one can fail feasibility without invalidating the other.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full case contains global benchmarks, behavioral research, ownership models, KPI trees, cost scenarios, risk controls, roadmaps, measurement design, and source links.\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1PGeCoPWn38uS0R2N1_agtyYFEvwLs1IW\" data-type=\"paper\" data-title=\"DatVietVAC Ownership Belonging Merchandise Growth Case Study\">DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf ↗</button>\n\n</aside>\n\n---\n\n## 1. Why Now\n\nThe public case context combines three signals: DatVietVAC’s transition toward a listed-company era, a stated 2026–2030 emphasis on multi-layer IP monetization and the fandom economy, and a Merchandise Manager scope that spans product portfolio, pricing, B2B/B2C growth, event commercialization, suppliers, inventory, P&L, and cross-functional coordination.\n\nThe portfolio question is therefore not simply how to create two promotions. It is how verified customer history could become a durable commercial asset while keeping feasibility, economics, identity, and ownership explicit.\n\n- Evidence boundary\n    \n    The case uses public company/product information, comparable public programs, behavioral research, and the Merchandise Manager JD. It does not claim access to DatVietVAC’s internal identity architecture, customer distributions, contracts, economics, loyalty/CRM systems, securities-transfer mechanism, supplier capacity, or current operating ownership.\n    \n\n---\n\n## 2. Two Experiments, Not One Program\n\n### Idea 1 — Listed-Era Ownership Concept\n\n**Working proposition:** use a fixed historical snapshot of verified net paid value to identify eligible high-value customers, then test an optional ownership-recognition mechanism after listing.\n\n**Why the historical cutoff matters:** the mechanism recognizes value already created rather than encouraging customers to spend more now to qualify.\n\n**Primary dependency:** securities feasibility. Cohort logic, tier economics, identity quality, budget, claim flow, and communications matter only if an approved transfer structure is executable at the intended scale.\n\n**Merchandise role boundary:** own the customer concept, cohort economics, KPI, budget scenarios, and go/no-go recommendation—not securities execution.\n\n### Idea 2 — Event Joining Card: Fan History + Optional Physical Return\n\n**Working proposition:** give each eligible physical event card a unique identity, bind it to a verified fan account, preserve the exact digital collection history, and let fans optionally return selected physical cards at milestones without deleting the memory.\n\n**Important distinction:** **attendance history ≠ card collection history.** Verified attendance should come only from a reliable ticket/check-in/order source; owning a transferable card does not automatically prove attendance.\n\n**Primary dependency:** reliable identity and card provenance. The pilot can begin inside one IP/event/account system rather than waiting for a perfect enterprise-wide fan ID.\n\n**Merchandise role fit:** direct ownership of mechanics, economics, pilot scope, event handoff, reverse flow, KPI, P&L, and scale decision.\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(1).png\" driveid=\"1V9ejbjhrIXWBk2uoOClzlap9ToxjNbl0\" caption=\"Verified History_ Ownership & Belonging(1).png\"></diagram-card>\n.png)\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(2).png\" driveid=\"1cjv8PvOo2yUA0e7rpqNHtRGrLO3_Kw0e\" caption=\"Verified History_ Ownership & Belonging(2).png\"></diagram-card>\n.png)\n\n---\n\n## 3. One Shared Primitive\n\n> **User ID + verified historical action**\n> \n\nIdea 1 uses cumulative net paid history to test a one-time ownership-recognition mechanism. Idea 2 uses event/card history to create a persistent collection, progress, and achievement layer.\n\nThe strategic thread is the same: **the platform remembers verified contribution and turns it into ownership, history, or recognition.**\n\n<aside>\n🃏\n\n**Related but intentionally separate: Fandom Cards**\n\nA new adjacent case tests the opposite operating condition: an accessible official collectible designed for **free circulation without owner identity tracking**. The Event Joining Card means *“I was there”* and needs controlled provenance; the Fandom Card means *“this is who / what I support”* and needs frictionless circulation across carry, gift, share and trade.\n\n**Design rule:** do not bind the everyday Fandom Card to this event-history system.\n\n[DatVietVAC Fandom Cards — From Official Fandom Pack to a Gated Collectibles Product Line →](https://app.notion.com/p/DatVietVAC-Fandom-Cards-From-Official-Fandom-Pack-to-a-Gated-Collectibles-Product-Line-3bb6210cf1c78187817af591d7aced63?pvs=21)\n\n</aside>\n\n\n<diagram-card title=\"Verified History_ Ownership & Belonging(3).png\" driveid=\"1OUwoTZP3Qj2oP8SMAW-38iKABvWEKCXX\" caption=\"Verified History_ Ownership & Belonging(3).png\"></diagram-card>\n.png)\n\n---\n\n## 4. Pilot Before Scale\n\n### Idea 1 — Feasibility first\n\n1. Confirm the approved transfer path and transaction-data boundary.\n2. Audit identity and net-paid logic before designing tiers.\n3. Cap the share pool and model claim economics.\n4. Dry-run eligibility, claim, exception, and reconciliation flows before any public announcement.\n5. Measure the claim funnel, friction, data integrity, cost, and post-campaign customer behavior where comparison is feasible.\n\n> **Go / no-go:** do not announce until eligibility data is stable, transfer is executable at intended volume, budget is capped and reconcilable, and campaign language clearly separates recognition from investment advice or expected return.\n> \n\n### Idea 2 — One IP, two events\n\n1. Start with one IP/event/account boundary.\n2. Serialize cards and test bind/claim, duplicate handling, history, progress, and recovery.\n3. Use Event 1 to measure activation and operating friction.\n4. Fix the flow, then repeat at Event 2.\n5. Make the scale decision from fan acceptance, archive use, operational load, error rate, repeat behavior, and contribution-margin evidence.\n\nThe measurement can be staged to separate effects:\n\n- **Phase A:** history only.\n- **Phase B:** history + visible progress.\n- **Phase C:** history + progress + reward.\n\nThis helps distinguish the value of memory from gamified progress and from discounting.\n\n---\n\n## 5. What Success Should Mean\n\nThe case does not use reach alone as proof of value.\n\n**Idea 1** should be judged through eligibility accuracy, claim completion, friction, budget/reconciliation quality, and downstream customer behavior—not post-listing share price.\n\n**Idea 2** should be judged through card binding, archive revisits, collection depth, milestone behavior, repeat event/purchase behavior, operating errors, CS burden, and contribution-margin evidence.\n\n> **Scale only when behavior, economics, and operating reliability move together.** If only vanity engagement improves, redesign rather than scale.\n> \n\n---\n\n## 6. Ownership Without Role Confusion\n\nThe Merchandise Manager owns the commercial outcome and keeps the right functions connected.\n\nFor **Idea 1**, Group-level IR, Finance/Treasury, Legal/Compliance, Data/CRM, Product/Tech, CS, and an approved securities partner would need explicit responsibilities before launch.\n\nFor **Idea 2**, Product/Tech, Data/CRM, Event Production, Creative/IP/Talent, suppliers, VieSHOP/E-commerce, Logistics, Finance, CS, and Legal/Privacy form the operating chain.\n\n> **Role principle:** protect the outcome → identify the functional owner → support execution → escalate when the issue exceeds authority or capacity.\n> \n\n---\n\n## 7. Bounded Findings and Unknowns\n\n**Supported by the current case**\n\n- comparable public programs show that customer ownership recognition, persistent event memorabilia, and optional physical-return mechanics have real-world precedents;\n- behavioral research provides hypotheses for psychological ownership, goal-gradient effects, and visible progress;\n- the two proposed ideas can be structured as separate experiments around verified historical action;\n- Idea 2 can be piloted inside a narrow identity boundary without first solving enterprise-wide identity.\n\n**Still requires internal validation**\n\n- identity quality and cross-channel joins;\n- historical spend and card-count distributions;\n- securities-transfer feasibility and approved communication structure;\n- margin, reward economics, supplier/serialization capacity, and reverse-flow cost;\n- fan acceptance and actual post-event card-retention behavior;\n- current team ownership, platform capability, and implementation capacity.\n\n---\n\n## What This Case Demonstrates\n\n**Merchandise growth · IP commercialization · customer-history mechanics · reward economics · product and event operations · ownership/governance · measurement design · pilot and scale gates**\n\n---\n\n*Independent outside-in work sample · Public evidence only · August 2026*"
  },
  "/work/datvietvac-fandom-cards": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-",
        "fileName": "DatVietVAC_Fandom_Cards_Case_Study.pdf",
        "label": "📄 Xem trước: DatVietVAC_Fandom_Cards_Case_Study.pdf ↗",
        "title": "DatVietVAC Fandom Cards Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-\" data-type=\"paper\" data-title=\"DatVietVAC Fandom Cards Case Study\">📄 DatVietVAC Fandom Cards Case Study (PAPER) ↗</button>\n</asset-bar>\n\n## One listing changed the starting question\n\nIn the exploratory Shopee pull for *Anh Trai Say Hi*, one card listing from one seller showed more than 30,000 units sold. The pull was not exhaustive, so I use that number only as a demand signal; it was enough to shift the product question toward what an official 12-card pack would need to do better.\n\n> **Merchandise Initiative / Outside-In Working Case · Developed Work Sample**\n> \n\n> Updated 16 August 2026 · Public evidence only · Not commissioned by DatVietVAC\n> \n\n\n<diagram-card title=\"00_cover_ready.png\" driveid=\"1uDuipV8TBC8l_vyka_oNSNqUh0tzRfgV\" caption=\"00_cover_ready.png\"></diagram-card>\n\n\n> **Core question:** Can DatVietVAC turn already-observed demand for artist cards into an official 12-card product that fans carry, share, display and trade in everyday life — then use repeated drop evidence to earn a gated collectibles product line?\n> \n\n---\n\n## Executive Summary\n\n- **Product promise:** Official enough to trust. Personal enough to carry. Simple enough to share.\n- **Pilot unit:** one IP/program · one launch/drop occasion · one sealed **12-card pack** · one public MSRP.\n- **Working price:** **VND89K preferred working MSRP** when it preserves a visibly better official quality bar; **VND79K** remains a value-engineering sensitivity only if that quality bar survives.\n- **Authentication:** no owner registry, crypto or NFC requirement. Build a reproducible **physical manufacturing signature** across substrate, print, surface, cut and packaging.\n- **Behavior thesis:** 12 cards create enough social inventory to keep, gift, share, carry, display and trade. Event/concert moments can concentrate launch demand; everyday life is where circulation is tested.\n- **Social-object kill rule:** if packs sell but both designed interaction and post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. The card may remain merchandise if its direct economics justify it.\n- **Scale logic:** **prototype → drop pilot → repeated product line → conditional annual box → collectibles pod → selective internalization.** Each stage is an earned option, not a default roadmap.\n\n<aside>\n↳\n\n**Strategic bet**\n\nDatVietVAC does not need to manufacture community. It needs to issue an official object good enough to circulate, give fans enough cards to keep and share, and then observe what actually happens after checkout. Direct card P&L must still stand on its own.\n\n</aside>\n\n---\n\n## 1. The Human and Business Opportunity\n\nDatVietVAC already has a dense entertainment ecosystem: programs, artists, content moments, concerts, distribution and D2C surfaces. The outside-in problem is therefore not lack of content. It is whether the IP owner can turn visible existing demand for artist cards into an official product that is materially better and worth carrying.\n\nIn the exploratory Shopee pull used for this case, one **Anh Trai Say Hi** card listing from one seller showed more than **30,000 units sold**. Hundreds of other products and sellers were visible, but the pull was not exhaustive across listings, product lines or platforms. This is directional demand evidence, not market size, and it does not by itself establish the authorization status of each seller or listing.\n\nThe observed category is therefore not starting from zero. The product opportunity is to compete with existing outside-channel supply through official content access, stronger material/print/finish, consistent packaging and a recognizable manufacturing signature; seller authorization still needs to be checked rather than assumed.\n\nThe human mechanism is broader than event trading. A 12-card pack gives one buyer enough inventory to keep favorite cards, gift one or two to friends, trade duplicates, carry a card in a phone case or card holder, attach it to a bag, photograph it or post it. Events can concentrate launch attention, but **daily life is the real usage environment**.\n\n> **Working thesis:** the card is an object, a signal and social inventory. The company can make the object trustworthy and easy to circulate; fans decide whether repeated sharing, carrying, display and exchange become belonging.\n> \n\nThe mechanism is plausible, not guaranteed. If the card sells but remains socially inert after checkout, it may still be a valid merchandise SKU. It does not automatically earn a community thesis.\n\n\n<diagram-card title=\"01_initiative_summary.png\" driveid=\"1VYrA7MkJU5iZWJUV7vOwj99apaYbDXV9\" caption=\"01_initiative_summary.png\"></diagram-card>\n\n\n---\n\n## 2. Product Architecture: Program → Drop Occasion → Pack → Conditional Annual Box\n\nThe architecture fixes four levels:\n\n1. **Program / IP** — provides the year-long content universe, rights framework and common issuer/manufacturing grammar.\n2. **Drop occasion** — creates freshness and a reason to buy now. A concert/event is a strong pilot catalyst, but later drops can also follow program milestones, artist moments or other culturally meaningful releases.\n3. **Pack** — the commercial unit: always **one sealed 12-card pack** in the pilot and base product-line design; its value should continue after the launch occasion through everyday circulation.\n4. **Annual box** — a later program-level archive/collector product: **12 sealed packs × 12 cards + one collectible**, considered only after multi-drop gates pass.\n\nThis hierarchy prevents two common drifts: redesigning the pack every time the occasion changes, and assuming a box simply because a program is large.\n\n### Why 12 cards\n\nThe earlier two-card proposition was too thin. Twelve cards create a stronger opening ritual, more visible value-in-hand, room for a clear slot promise and better comparison of physical quality. More importantly, they create **shareable social inventory**: enough cards for one buyer to keep favorites, gift or share one or two, display others and still have duplicates or gaps that make exchange natural.\n\n### Working pack anatomy\n\n| Slot | Working count | Role |\n| --- | --- | --- |\n| Base identity | 10 | Artists, characters, quotes, lyrics, memes or era markers on one consistent official physical grammar. |\n| Moment / collective | 1 | Performance, episode, concert or ensemble memory. |\n| Special / chase | 1 guaranteed | Visibly differentiated pull such as foil, holo or texture where economics allow. |\n\nThe slot structure is a working collation hypothesis, not a final odds table. Exact rarity, artist distribution and variants remain production decisions after rights, content and demand review.\n\n\n<diagram-card title=\"02_benchmark_mechanism_map.png\" driveid=\"14OHAm-ePUzEH58suLljFwhpRqi-XYsOr\" caption=\"02_benchmark_mechanism_map.png\"></diagram-card>\n\n\n---\n\n## 3. Boundary Versus the Event Joining Card\n\n| Dimension | Event Joining Card | Fandom Card |\n| --- | --- | --- |\n| Meaning | “I was there.” | “This is who or what I support.” |\n| Supply | Controlled and event-linked. | Broad enough for circulation and repeated drops. |\n| Identity binding | May be required to prove participation/history. | No owner identity required. |\n| Transfer | Not the core behavior. | Free pass, gift and trade are core behaviors. |\n| Value source | Verified memory and milestone meaning. | Identity, collectibility, culture and exchange. |\n| Data | User/event/card history. | SKU, batch, sales, quality and aggregate behavior signals. |\n\n> **Design boundary:** do not bind the everyday Fandom Card to the Event Joining Card history system. One needs controlled provenance; the other needs frictionless circulation.\n> \n\n---\n\n## 4. Authenticity Through a Manufacturing Signature\n\nV2 drops the assumption that every card needs a premium anti-counterfeit device. The pilot instead establishes a **reproducible physical fingerprint** that fans can learn and that the company or a specialist can inspect more deeply when a dispute occurs.\n\nThe signature spans:\n\n- **Substrate:** stock family, thickness/caliper, weight range, opacity, stiffness and internal core.\n- **Print:** color targets, black density, sharpness, halftone/rosette, registration and back alignment.\n- **Surface:** gloss/matte level, texture and coating response.\n- **Cut:** dimensions, corner radius, centering and edge cleanliness.\n- **Packaging:** wrapper film, seal, print, batch/lot mark and official reference.\n\n### Fan-facing three-step check\n\n1. **Feel and stack** — compare rigidity, thickness, edge/core, size, cut and surface against a known official card.\n2. **Look under normal and angled light** — compare color, text sharpness, back alignment, print pattern, gloss/texture and wrapper seal.\n3. **Escalate disputed cards** — compare with official references/retained samples or an approved specialist; no account binding is required.\n\n> **Pilot rule:** no blockchain, crypto or ownership transfer. No NFC requirement. Holo or texture may identify a special content tier, but the official manufacturing signature must exist across the entire product family.\n> \n\n\n<diagram-card title=\"03_card_pack_architecture.png\" driveid=\"1iGgCjhCui7H2sVBk1kEWw9-_n1l54HYR\" caption=\"03_card_pack_architecture.png\"></diagram-card>\n\n\n---\n\n## 5. Drop Occasion and Everyday Circulation Test\n\nAn event or concert is a useful **launch catalyst** because it supplies fresh cultural content, concentrated demand and a shared context. It is not the only place where the product should create value.\n\nThe operating loop is:\n\n**Select → compose → produce → release → circulate → observe → decide.**\n\nThe pilot can still provide one light and fair exchange opportunity — for example a clearly signed table or short trade hour — without making rewards or attendance contingent on trading. But the broader test continues after the event.\n\nEveryday circulation is observed through behavior: did buyers keep and carry cards, gift or share them with friends, display them in phone cases/card holders/bags, photograph or post them, trade duplicates, trigger conversations, or return for another drop?\n\n<aside>\n✕\n\n**Social-object kill rule**\n\nIf packs sell but both the designed interaction opportunity **and** post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. Continue only as merchandise if the direct economics justify it.\n\n</aside>\n\nA weak trade table alone is not enough to kill the idea; Vietnamese fan behavior may express itself through friend-to-friend gifting, school/social-group exchange, carry/display or UGC instead. DatVietVAC should support emergence, not declare a community into existence. A marketplace, grading service, price index, resale guarantee, reseller program or always-on creator network should not be the first move.\n\n\n<diagram-card title=\"04_physical_auth_fingerprint.png\" driveid=\"1GN4ydkyJN5ecUbhtkAEQyEyikI-CHzOT\" caption=\"04_physical_auth_fingerprint.png\"></diagram-card>\n\n\n---\n\n## 6. Pilot, Measurement and Economics\n\n### Working 90-day pilot\n\n- **Program / IP:** one active program with visible demand and enough artist/moment variety.\n- **Occasion:** one event or concert-linked launch for the pilot, followed by explicit post-drop daily-circulation observation.\n- **Pack:** one sealed 12-card pack.\n- **Checklist:** approximately 30 outcomes as a starting hypothesis.\n- **Price:** one public MSRP; **VND89K preferred working anchor** when it protects the official quality bar. **VND79K** is a value-engineering sensitivity only if material, print, finish, packaging and rights economics remain credible.\n- **Run:** 3,000 packs + pre-agreed reprint option.\n- **Channel:** VieSHOP + one event touchpoint.\n- **Circulation:** checklist + light creator seeding + one optional exchange touchpoint + sampled post-event observation of carry/share/display/gift/trade behavior.\n- **Technology:** no owner system; physical manufacturing signature first.\n- **Annual box:** excluded from pilot.\n\n### Everyday circulation signals\n\nTrack a small set of post-checkout behaviors without building an owner ledger: carry/display, share/gift, trade, organic photo/story/UGC, interaction outside official events, “someone asked me about the card,” and repeat purchase for self or another person. Use sampled surveys, interviews and pilot observation rather than tracking each physical card owner.\n\n### Five pilot gates\n\n| Gate | What it must show | If weak |\n| --- | --- | --- |\n| Paid demand | Healthy sell-through plus repeat/reprint intent without excessive discount dependence. | Rework price/value/channel once, then stop. |\n| Product + trust | Worth-price response, repeatable official quality and acceptable defect/authentication outcomes. | Fix spec/vendor before another drop. |\n| Behavior + belonging | Credible trade/gift/display/content and recognition/interaction beyond seeded activity. | Kill community thesis after one designed iteration. |\n| Economics | Positive path after physical COGS, rights/royalty, payment, handling, shipping and inventory risk. | Requote, re-spec or stop. |\n| Operations + rights | Clean approval cycle, on-time delivery, correct collation, retained references and repeatable rights/production process. | Hold portfolio expansion. |\n\n### Two ledgers, not one blended story\n\n- **Direct Card P&L:** pack revenue; physical card/pack COGS; rights/royalty; payment; handling; delivery subsidy; returns/write-off; pilot/team allocation. It must become economically defensible on its own.\n- **Ecosystem Impact:** organic content, carry/display, gift/share, trade, creator repetition, interaction inside and outside official events, artist/program resurfacing and directional cross-purchase. Measure separately; do not invent VND value to hide weak merchandise economics.\n\n### V2 pack-economics sensitivity\n\nThe case uses a planning sensitivity, not a public price ladder. With an illustrative **VND27K physical build**, the planning sensitivity estimates product GM around **59.7% at VND89K** and **55.6% at VND79K**, before payment/handling/delivery subsidy and fixed pilot cost. The higher anchor is preferred only if fans can visibly feel the official quality difference; actual tax treatment, artist contracts, logistics, GM hurdle and supplier quotes remain internal validation dependencies.\n\n\n<diagram-card title=\"05_exchange_cycle_and_metrics.png\" driveid=\"1P_2KleB-PyM56kwiBeXy5RAaymVldtbK\" caption=\"05_exchange_cycle_and_metrics.png\"></diagram-card>\n\n\n---\n\n## 7. Operating and Rights Architecture\n\n### One accountable third party\n\n> **Own the specification and acceptance. Outsource the industrial chain through one accountable lead partner.**\n> \n\nFor the pilot, DatVietVAC should avoid splitting prepress, printing, finishing, collation and pack assembly across loosely coordinated vendors. One lead specialist manufacturer/packer should contract for the full physical delivery under a single SOW, even when it uses disclosed subcontractors.\n\nDatVietVAC retains control of final art, rights approval, physical fingerprint, proof sign-off, substitution approval, collation rules, audit samples, lot traceability requirements, retained references and reject/rework decisions.\n\n### Rights cannot be outsourced away\n\nLegal/IP must confirm which artist likenesses, lyrics, quotes, memes, episode stills, music-related imagery and sponsor marks may be commercially reproduced. The rights design should distinguish:\n\n- drop-specific use versus later annual compilation/reprint/reuse;\n- whether artist compensation is already included or must be itemized as fee/royalty;\n- file custody and subcontractor limits;\n- pack-level sales/returns and royalty reporting;\n- fresh approval requirements for a later annual box.\n\n\n<diagram-card title=\"06_pack_economics.png\" driveid=\"1_5bRzfWLSmBr1n22I4LrWlYJQ6laR1Gd\" caption=\"06_pack_economics.png\"></diagram-card>\n\n\n---\n\n## 8. Earn the Right to Scale\n\nA successful pilot unlocks **another controlled drop** — not an annual box and not a standalone venture.\n\nThe scale ladder is:\n\n**0 — Prototype** → physical fingerprint, 12-card pack, checklist, vendor proofs and fan/WTP research.  \n\n**1 — Drop pilot** → one IP/occasion, one MSRP, 3,000 packs, light interaction opportunity, post-drop circulation observation and full gate review.  \n\n**2 — Repeated product line** → recurring drops, standardized issuer back/spec/SOW, artist/occasion demand tracking, everyday-circulation signals and mini-P&L.  \n\n**3 — Conditional annual box** → 12 sealed packs × 12 cards + one collectible for a proven year-long program, only after box-design evidence passes.  \n\n**4 — Collectibles pod** → portfolio strategy, distribution, creator/community support and dedicated P&L after multiple programs sustain releases.  \n\n**5 — Selective internalization** → bring high-value control points in-house only when control is economically superior to specialist outsourcing.\n\n### Annual box remains a principle, not a pilot product\n\nThe annual box follows the **program**, not one isolated concert. Design work is unlocked only when multi-drop evidence supports:\n\n- repeated pack demand and repeat buyers;\n- artist/event demand breadth rather than one hot individual;\n- enough distinct, rights-cleared annual content for 144 cards to remain meaningful;\n- buyer fairness for existing collectors;\n- intentional inventory/reprint policy;\n- viable economics;\n- clean compilation rights and third-party production capability.\n\nExact checklist, pack mix, rarity, exclusives, print run, price and cannibalization policy remain deferred.\n\n\n<diagram-card title=\"07_event_pack_to_annual_box_scale.png\" driveid=\"1WXdlWOcMtJqx1Un0Kc8ArNzv1isKkVVH\" caption=\"07_event_pack_to_annual_box_scale.png\"></diagram-card>\n\n\n---\n\n## 9. Decision Memo\n\n**Recommendation:** test the initiative as a contained **12-card official fandom-pack pilot**, using an event/concert as the launch catalyst but measuring what happens after the product enters everyday life.\n\n**Before print:** clean asset-level rights; approved physical fingerprint; acceptable third-party proof; capped pilot economics; clear collation/pack promise.\n\n**Working price:** prefer **VND89K** when it protects a visibly better official quality bar; use **VND79K** only as a value-engineering sensitivity if the quality difference remains credible.\n\n**Kill the broader social-object thesis if:** both designed interaction and post-drop carry/share/display/gift/trade signals remain weak after one reasonable iteration.\n\n**Another drop is earned only when:** paid demand, repeat/reprint interest, recognized official quality, positive economic path, clean rights, repeatable operations and at least credible circulation evidence appear together.\n\n**Annual-box design is earned only when:** multi-drop pack sales, repeat buyers, artist/occasion demand evidence, annual content depth, buyer fairness, clean compilation rights, inventory plan and viable economics support it.\n\n> **Manager-seat principle:** manage the initiative as a sequence of earned options. Keep the fan job, product specification, rights, supplier accountability, unit economics, release calendar, circulation evidence and scale decision connected.\n> \n\n\n<diagram-card title=\"08_final_case_summary.png\" driveid=\"1Xw6ankrngAZ0oUV34AQXKgv3LkWDY_6w\" caption=\"08_final_case_summary.png\"></diagram-card>\n\n\n---\n\n## Evidence Boundary\n\nPublic evidence supports company context, current product observations, global authentication practices and market/manufacturing precedents. It does **not** prove DatVietVAC demand, achievable cost, rights coverage, card odds, box viability or community effects.\n\n**Known from public sources:** company-reported IP/event/distribution ecosystem; current public merchandise examples; external authentication and manufacturing mechanisms.\n\n**Observed in the case research pull:** one Anh Trai Say Hi Shopee listing from one seller showed more than 30,000 units sold, with many other products/sellers visible but not exhaustively captured. Treat this as directional demand evidence only, not market size or proof of authorization status.\n\n**Outside-in hypotheses:** 12-card social-inventory consumer job; VND89K preferred price viability with VND79K sensitivity; physical COGS; everyday-circulation mechanism; single-third-party operating design.\n\n**Must validate internally:** IP/artist rights, actual COGS and fixed budget, GM hurdle, pack demand, circulation behavior, collation, defect tolerance, box eligibility and operating ownership.\n\n---\n\n## Full Case\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1L_TKkbM1XbPqdML_AwBHZYXppZKl3Tf-\" data-type=\"paper\" data-title=\"DatVietVAC Fandom Cards Case Study\">DatVietVAC_Fandom_Cards_Case_Study.pdf ↗</button>\n\n*Independent outside-in work sample · Public evidence only · Updated 16 August 2026*"
  },
  "/work/explainable-trust": {
    "assets": [],
    "body": "<asset-bar>\n<a href=\"/apps/explainable-trust\" class=\"f-asset-btn accent\" style=\"padding:10px 20px;font-size:14px;\">⚡ Khởi chạy Explainable Trust App trên Website ↗</a>\n</asset-bar>\n\n> **When a situation is still vague, people naturally start connecting the missing pieces. Explainable Trust moves that reconstruction out of memory and into an inspectable record: what was reported, what is supported, what is inferred, what changed, and what is still unknown.**\n> \n\n> **Type:** Built Product Sample\n**Stage:** Completed sample app · Runnable locally\n**Evidence basis:** Runnable application, implemented end-to-end case flows, repository behavior, automated tests, and product screenshots\n**Last updated:** August 2026\n**Boundary:** The sample demonstrates case reconstruction, correction, provenance, local persistence, bounded public retrieval, and export. It is not deployed as a production service and does not include shared accounts, cloud collaboration, or an operational verification layer.\n> \n\n---\n\n## Why I built this\n\nThe app started from a simple observation: when information is incomplete, the mind does not like leaving the story unfinished. We connect a message to a screenshot, a remembered detail to a public rule, one person's account to another source. That is useful, but over time it becomes difficult to remember where the evidence ended and the reconstruction began.\n\nThe burden gets heavier when a situation unfolds across messages, files, corrections, public sources, and multiple possible explanations. The person has to keep reconstructing the timeline, evidence, assumptions, unresolved questions, and next step in their head.\n\nI built Explainable Trust to externalize that work. The product does not try to make uncertainty disappear by producing a more confident answer. It keeps the current state inspectable: what is known, what is only reported, what is inferred, what remains open, and how the reasoning changed when new information arrived.\n\nCustomer support and disputes are one use case, but not the boundary. The same problem appears in purchases, public events, personal decisions, and smaller everyday situations where facts arrive gradually and from sources with different strengths.\n\n---\n\n## The product question\n\nAn uncertain situation rarely arrives as a clean set of facts. It arrives as fragments with different strengths: a first-person statement, a document, an image, a public rule, a later correction, or a claim that may still be unsupported. The product needs to help reconstruct the situation without collapsing those differences into one confident narrative.\n\nThe product question is:\n\n> **Can an AI-assisted workspace help a person reconstruct a situation under uncertainty without losing the distinction between evidence, report, inference, and what is still unknown?**\n> \n\nBecause that state can change, a second requirement follows: new information should update the case without erasing how the previous state was constructed.\n\nThe working flow is:\n\n> **Describe → reconstruct → inspect → trace reasoning → correct → reconcile → expose gaps → decide what to check next**\n> \n\n## How the app works\n\nThe core design choice is simple: **the model can propose changes, but the application owns the record.**\n\n1. **Start or import a case.** The application creates a local case ledger in the browser rather than treating the chat transcript as the record.\n2. **Submit a statement and optional files.** A user can add text, PDFs, images, or text-based files, then choose **Analysis only** or **Web-assisted** for that run.\n3. **Preserve the intake before interpreting it.** The original statement remains verbatim. Uploaded files receive case-linked metadata and a SHA-256 fixity hash.\n4. **Let the model propose a change, not rewrite the case.** Gemini returns typed operations for events, claims, evidence relationships, gaps, actions, and reasoning.\n5. **Validate before committing.** Application code allocates canonical IDs, reconciles corrections against existing entities, validates the complete candidate revision, and commits it atomically. If validation fails, the last accepted case remains unchanged and the rejected run is retained for audit.\n6. **Project one ledger into several views.** The same accepted state appears as a readable response, timeline, findings, evidence inventory, gaps and actions, interactive case and reasoning DAGs, and a Toulmin argumentation view. Clickable IDs connect each view back to its sources. Selecting a node highlights the connections leading to it, so a user can trace a claim or finding through the reasoning that supports, qualifies, or leaves it unresolved instead of visually scanning the whole graph.\n7. **Carry the case forward.** A later message creates a child revision. Clear corrections retain stable entity IDs; ambiguous corrections fail closed instead of silently creating a duplicate.\n8. **Export or import through separate paths.** The user can download a case-view JSON, copy a Markdown case report or provenance dossier, and print the case view. The importer separately accepts a valid Ledger V3 JSON; the current export and import formats are not a one-click backup-and-restore pair.\n\n## Working demo — one case, two messages\n\nThis small test starts with a traffic-accident report. The user describes the collision, suspected drunk driving and leaving the scene, vehicle damage, an X-ray visit, and uncertainty about compensation and legal handling. No official police or medical evidence has been added yet.\n\n### 1 · The first message becomes a case, not only an answer\n\nThe first intake is projected into a case view with a user goal, timeline events, findings, unresolved gaps, and proposed next actions. The response can still explain the current situation in plain language, but the structured record remains separately inspectable.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-52-05 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1easUBv-D5P4vsfxihyQbPHmUSTryLCbf\" caption=\"Screenshot 2026-08-19 at 14-52-05 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nInitial reconstruction from the first user report. The workspace keeps narrative, structured case state, gaps, and next actions visible at the same time.\n\n### 2 · A later correction changes the affected state\n\nIn the second message, the user corrects the accident time from **18:30 to 19:15** after checking dashcam data and adds information about the other driver. The correction is kept as a new source statement rather than silently replacing the earlier one.\n\nThe useful behavior is not that the model can notice a correction. It is that the application can reconcile the affected event and claim while preserving the earlier source, the new source, and the revision path between them.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-58-41 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1NEv9CWDj4uU7Pk4HSv0WrDs3RP2iMrxM\" caption=\"Screenshot 2026-08-19 at 14-58-41 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nSecond intake after the correction. The current case reflects the updated time while still exposing source IDs and revision change.\n\n### 3 · Unknowns stay visible instead of being completed by the model\n\nThe case still has no admitted evidence for the official accident record or the medical result. Those remain open gaps, with actions asking for scene images/video and medical documents. A source-linked finding can also preserve its scope and limitation rather than presenting a reported statement as independently verified fact.\n\nThat distinction matters here because the product is not trying to turn a user narrative into a verified legal conclusion. It is trying to make **reported state, supporting evidence, missing evidence, and next action** easier to separate.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 14-59-09 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1ulV9X6viT2FBtVnvate7RjLbNRDKAPMW\" caption=\"Screenshot 2026-08-19 at 14-59-09 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\n### 4 · Provenance can be inspected as a network\n\nThe case graph makes the dependency structure visible: user statements connect to events and claims; those records expose unresolved gaps; gaps connect to proposed actions. A correction can therefore be inspected for what it changed downstream instead of disappearing inside a rewritten summary.\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 15-00-18 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1LcHsTBzFbS_HzFEcsJm2pu5WJACEfaZT\" caption=\"Screenshot 2026-08-19 at 15-00-18 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\n\n<diagram-card title=\"Screenshot 2026-08-19 at 15-00-29 Explainable Trust — Traceable Case Reconstruction.png\" driveid=\"1H50sY3C-uR0QZ6tliPTNr3NB0AEyAkKi\" caption=\"Screenshot 2026-08-19 at 15-00-29 Explainable Trust — Traceable Case Reconstruction.png\"></diagram-card>\n\n\nCase-wide provenance view: user statements → events / claims → gaps → actions.\n\n## Product decisions\n\n| Decision | What it protects |\n| --- | --- |\n| **Local-first authoritative case state** | Case data and preserved attachments remain in browser storage rather than making the model conversation the source of truth. |\n| **Immutable raw intake** | A later interpretation or correction does not rewrite what the user originally submitted. |\n| **Model proposes; application accepts** | The model can suggest typed operations, but canonical IDs, validation, reconciliation, and committed case state remain application-owned. |\n| **Stable-ID correction** | A correction updates the affected entity when the target is clear instead of silently creating a duplicate record. |\n| **Explicit gaps and actions** | Missing evidence stays visible and can produce a concrete next step without pretending that the missing fact is already known. |\n| **Bounded public retrieval** | Web-assisted runs can request public information without sending the raw private case to the retrieval provider. |\n\n## What the completed sample includes\n\n| Capability | Implemented behavior |\n| --- | --- |\n| **Case workspace** | Create, rename, archive, restore, delete, import, and switch between locally stored cases. |\n| **Text and file intake** | Submit a statement with optional PDF, image, or text-based files; drag-and-drop is supported and the client applies a 12 MB total attachment limit per intake. |\n| **Structured reconstruction** | Project accepted intake into a user goal, timeline events, findings and claims, evidence relationships, open gaps, proposed actions, and an explainable response. |\n| **Corrections and revisions** | Preserve the original statement, update a clearly identified entity under its stable ID, record the revision delta, and retain earlier revisions. |\n| **Traceable inspection** | Use clickable source IDs, search and filtered record views, an evidence detail panel, a case-wide provenance graph, and a structured reasoning graph. |\n| **Two run modes** | Use the submitted record alone, or request bounded public retrieval from first-party and responsible public-authority sources when a public information need remains. |\n| **Local persistence and recovery** | Keep the authoritative ledger, run audits, attachments, and display metadata in browser IndexedDB; preserve the last accepted record after provider or validation failure. |\n| **Language and export** | Switch the interface across English, Vietnamese, Spanish, French, Chinese, and Japanese while preserving source text; export JSON, Markdown reports, a provenance dossier, or a printable case view. |\n\nThe architectural constraint is deliberate: **a provider response is not the case**. A candidate revision becomes authoritative only after application-side reconciliation, full-ledger validation, and successful browser commit.\n\n## What the sample deliberately does not include\n\n- **No truth or legal determination.** It does not independently prove that a user statement is true, decide liability, authenticate an object, determine eligibility, or guarantee that legal or policy analysis is correct.\n- **No automatic access to private systems.** It has no connector to a police, hospital, insurer, marketplace, employer, or customer account. Case-specific confirmation must come from a user-supplied record or a direct response from the responsible organization.\n- **No shared cloud workspace.** There are no user accounts, server-side case database, team permissions, real-time collaboration, or automatic cross-device sync. The authoritative case remains in the current browser.\n- **No round-trip backup package.** The current JSON export is a projected case view for review or downstream use, while import accepts the authoritative Ledger V3 format. They are not yet a single portable backup-and-restore flow.\n- **No fully offline model analysis.** In a live run, the submitted statement and supported files are sent through the application server to the configured Gemini provider. The narrower privacy boundary applies to public-web retrieval: Tavily receives only a validated public query and official-domain filters, not the raw private case.\n- **No unrestricted web research.** Public results are admitted only when a direct first-party or responsible public-authority source can support the specific public claim. Media, forums, social posts, aggregators, and model memory cannot close an evidence gap.\n- **No forced correction matching.** If the target of a correction is ambiguous, the application rejects the candidate change rather than guessing or creating a silent duplicate.\n- **No certified chain of custody.** File hashes help detect content changes, but they are not digital signatures, identity verification, notarization, or independent evidence certification.\n- **No production assurance.** The sample does not claim production-grade authentication, security/privacy audit, monitoring, service availability, regulatory compliance, or readiness for unrestricted high-stakes deployment.\n\n<aside>\n🧪\n\n**Scope statement**\n\nThis is a completed functional sample for testing traceable case reconstruction. Its output remains a structured working record for human inspection, not a legal opinion, verified investigation result, or automated decision.\n\n</aside>\n\n## If I extended the sample\n\nThe scoped sample is complete, but the original product direction was broader than a standalone case workspace. The longer-term idea is a privacy-preserving resolution channel in which the user keeps control of the case, linked organizations can update the process without taking ownership of the user's record, and the product learns from patterns only when users explicitly allow it.\n\nA real-world pilot would first test the current product behavior:\n\n1. **Correction reliability:** when do users phrase a correction clearly enough for stable-ID reconciliation, and when should the system stop and ask?\n2. **Evidence behavior:** do users understand the difference between reported claims, admitted evidence, inference, and unresolved gaps?\n3. **Recovery burden:** after several revisions, can a user still understand what changed and what they need to do next without reading the full history?\n4. **Transfer:** does the same case structure remain useful outside disputes, for example customer-support escalation, insurance, workplace incidents, or other evidence-heavy pathways?\n\n### From case workspace to resolution channel\n\nThe next product step would not be to make the app know more about the user. It would be to let the case move between parties while revealing less identity than a normal support workflow.\n\nThe design goal would be **anonymous at the application layer**: the app would not need a conventional user profile, and the server would operate on opaque case identifiers rather than treating real-world identity as part of the product. A user could choose to link a case to a company, platform, insurer, public body, or other responsible party through a bounded case channel. The linked party could then send requests for evidence, status changes, review outcomes, deadlines, or next actions back into the same case record.\n\nFor the user, this would turn repeated support contact into a visible process: **what the organization has received, what is still missing, who or what is currently waiting, what changed, and what happens next.** For the organization, especially customer service, the same structure could reduce repeated explanation, duplicate evidence requests, inconsistent handoffs, and uncertainty about the current case state.\n\n### A consented analytics model, not silent data extraction\n\nBy default, the individual case would remain private. A separate opt-in would ask whether the user wants to contribute de-identified case signals to aggregate analytics.\n\nThe commercial hypothesis is that linked organizations would pay for those aggregate operational signals, not for access to an identifiable person's case. Useful outputs could include where resolution pathways repeatedly stall, which evidence is most often missing, where customers need repeated contact, how long different states persist, and which handoffs create avoidable recovery burden.\n\nThat creates a different incentive structure from advertising or hidden profiling: the user gets a clearer resolution pathway and can choose whether their de-identified experience contributes to system learning; the organization gets a better view of recurring operational friction; and the product earns from the analytics or integration layer rather than from making identity itself more valuable.\n\n<aside>\n↳\n\n**Future-product boundary**\n\nNone of this channel, identity-minimization, organization-linking, notification, or analytics model is implemented in the completed sample. Production claims about anonymity, encryption, de-identification, consent, or data governance would require a separate architecture and security/privacy validation.\n\n</aside>\n\n## Build and repository\n\nThe public repository contains the runnable application, server boundary, Ledger V3 contract, deterministic proposal application, local persistence, retrieval controls, automated tests, evaluation configuration, and runtime notes.\n\n[Open Explainable-App on GitHub →](https://github.com/Yunero1206/Explainable-App)\n\n[Read the runtime architecture →](https://github.com/Yunero1206/Explainable-App/blob/main/docs/ARCHITECTURE.md) · [Read the public-retrieval boundary →](https://github.com/Yunero1206/Explainable-App/blob/main/docs/AUTHORITATIVE_RETRIEVAL.md)\n\n## Current takeaway\n\nThe prototype is most useful to me as a test of one product assumption: **explainability is not only a better answer. It is the ability to inspect how a changing case reached its current state, what still supports that state, and what remains unresolved.**"
  },
  "/work/vietnam-diamond-market-crisis": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6",
        "fileName": "Vietnam_Diamond_Market_Crisis_Case_Study_2_Full_Paper.docx",
        "label": "📄 Xem trước: Vietnam_Diamond_Market_Crisis_Case_Study_2_Full_Paper.docx ↗",
        "title": "Vietnam Diamond Market Crisis Case Study 2 Full Paper"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6\" data-type=\"paper\" data-title=\"Vietnam Diamond Market Crisis Case Study 2 Full Paper\">📄 Vietnam Diamond Market Crisis Case Study 2 Full Paper (PAPER) ↗</button>\n</asset-bar>\n\n> **The more public records I collected, the less comfortable I was with a single story about “the crisis.” Investigation reporting, company responses, review announcements, buyback policies, and market signals were visible together, but the evidence did not show that they all shared one cause.**\n> \n\n> **Type:** Evidence-First Case Study\n**Stage:** Public working paper with bounded findings\n**Research object:** Vietnam’s diamond-market crisis; PNJ is a focal observation site, not the object itself\n**Evidence cut-off:** 21 July 2026\n**Boundary:** Visibility does not establish representativeness, origin, severity, guilt, product exposure, execution failure, or a market-wide causal chain.\n> \n\n## Reading & Audit Route\n\n**Quick orientation:** The crisis did not become visible in one place → The most important finding is an evidence boundary → What the paper concludes\n\n**Full reconstruction:** Pre-crisis baseline → What changed in 2026 → What the PNJ conjunction reveals\n\n**Audit path:** Main-paper Claim ID → thematic appendix → Source ID → preserved public source\n\n> **Full paper:**\n> \n> \n> <button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1pQxtn0d5nI856gVi3g8BsUPgaglsDKm6\" data-type=\"paper\" data-title=\"Vietnam Diamond Market Crisis Case Study 2 Full Paper\">Vietnam_Diamond_Market_Crisis_Case_Study_2_Full_Paper.docx ↗</button>\n> \n\n---\n\n## The crisis did not become visible in one place\n\nBy 2026, public uncertainty around Vietnam’s diamond market was no longer confined to product quality or technical certification.\n\nInvestigation reporting, questions about provenance and verification, company statements, board-approved external reviews, published buyback policies, and capital-market observation entered the same public information environment.\n\nThese developments did not necessarily share one cause.\n\nThey did not affect every actor in the same way.\n\nAnd their coexistence does not prove guilt, product exposure, a market-wide liquidity event, or a single causal chain.\n\nThe research problem is therefore not simply:\n\n> *Did trust collapse?*\n> \n\nIt is:\n\n> **What can be reconstructed from observable events, stakeholder decisions, enterprise responses, and public records—and where does the evidence stop?**\n> \n\n---\n\n## Research scope\n\nThe research object is the **market crisis**, not PNJ as a company.\n\nPNJ is used as a focal observation site because product, verification, repurchase policy, enterprise response, governance disclosure, and market observation intersect in one unusually dense public record.\n\nThat density makes selected interactions easier to inspect; it does not make PNJ a representative sample of the entire Vietnamese diamond market. **[C-001, C-026, C-027]**\n\n---\n\n## What existed before the crisis\n\nThe public record shows that the arrangements scrutinized in 2026 were not created by the controversy.\n\nThey already existed.\n\n### Diamond was an established business category\n\nPNJ had publicly treated diamond and gemstone jewellery as an important business category since at least 2015. Its observable portfolio subsequently broadened across bridal, premium, gifting, self-purchase, men’s, and lifestyle propositions. **[C-002, C-004]**\n\n### Verification had an institutional presence\n\nPNJ Lab—and later the P-Lab identity—provided a publicly visible technical verification infrastructure before the 2026 controversy. **[C-003, C-010]**\n\nThis establishes that a verification arrangement existed.\n\nIt does **not** establish that every part of the arrangement operated perfectly, that every institutional boundary was independent, or that the arrangement could absorb every later form of scrutiny.\n\n### Buyback and upgrade were part of the ownership journey\n\nPublished policies and promotions show that repurchase and upgrade were established customer-lifecycle mechanisms rather than concepts invented after the crisis. **[C-005]**\n\nBut three dimensions must remain separate:\n\n1. published valuation and eligibility terms;\n2. customer interpretation of those terms;\n3. operational execution under real demand.\n\nThe public record can compare policy architecture. It cannot automatically reconstruct execution. **[C-006, C-007]**\n\n### Scale was visible; resilience was not\n\nPNJ had significant publicly documented retail, manufacturing, data, and customer-service capacity before 2026. **[C-008]**\n\nThat capacity may matter when an enterprise faces operational pressure.\n\nBut the existence of capacity does not prove that it successfully absorbed a particular crisis. **[C-009, C-022]**\n\n---\n\n## What changed in 2026\n\nThe 2026 controversy moved assurance from a technical background function into public scrutiny.\n\nInvestigation reporting and PNJ’s public response changed the information available to customers, investors, media, and other market participants. **[C-011]**\n\nPNJ publicly stated its position regarding the controversy.\n\nThat statement is evidence of **what the company said**. It is not, by itself, independent proof of every underlying factual claim. **[C-012]**\n\nThe board subsequently approved external reviews covering product and diamond quality, the import–production–sales chain, risk management, and tax-related matters. **[C-013]**\n\nAt the research cut-off, however, the public record did not establish the reviewers’ full identity, methods, timing, findings, or effectiveness. **[C-014]**\n\nThis matters because an announced review is simultaneously:\n\n- an enterprise intervention;\n- a governance response;\n- and a new public event available for interpretation.\n\nThe response itself therefore becomes part of the information environment. **[C-020, C-023, C-024]**\n\n---\n\n## The most important finding is an evidence boundary\n\nThe supplied corpus is rich in historical strategy, published policies, verification infrastructure, company statements, and board announcements.\n\nIt is not equally rich in incident-level execution.\n\nThe paper therefore does **not** claim that the reviewed record establishes:\n\n- a 2026 customer sellback surge;\n- a PNJ buyback execution failure;\n- wider retailer liquidity breaks;\n- total repurchase-request volume;\n- processing or payment timing under pressure;\n- completion rates across stores;\n- diamond-specific revenue or inventory exposure;\n- the outcomes of the announced independent reviews;\n- or a causal relationship between the controversy and PNJ’s share-price movements.**[C-015, C-016, C-017, C-018]**\n\nThese are not empty spaces to be filled with a plausible story.\n\nThey are research findings about the limits of the public record.\n\n> **Absence of evidence is not evidence that an event did not occur. It is also not permission to write as though the event has been established.**\n> \n\n---\n\n## What the PNJ conjunction reveals\n\nSeveral patterns are visible even within those limits.\n\n### 1. Integration creates observability\n\nPNJ’s product business, laboratory identity, customer policies, manufacturing network, board disclosures, and listed-company status place multiple domains within one shared public record. **[C-021]**\n\nThis makes cross-domain developments easier to observe.\n\nIt does not prove that PNJ was the origin of the crisis, the most severely affected enterprise, or a complete representation of the market.\n\n### 2. Enterprise responses generate additional information\n\nClarifications and review announcements are not merely events that occur after controversy.\n\nOnce public, they become information that other actors can interpret. **[C-024]**\n\nThat does not predetermine whether the interpretation will be reassuring, concerning, or neutral.\n\n### 3. Technical assurance can become a governance question\n\nBefore the controversy, verification was primarily presented through technical capability and institutional identity.\n\nBy 2026, the response had moved toward board-authorized external product, chain, risk, and tax review.\n\nThe record therefore supports a shift from **technical assurance claims** toward **external governance assurance**. **[C-020, C-023]**\n\n### 4. Visibility is not severity\n\nPNJ is highly observable because it is a prominent listed enterprise with long-running public disclosures.\n\nA less visible private retailer may leave fewer public traces even when experiencing equal or greater stress.\n\nThe density of evidence around PNJ must therefore not be mistaken for proof that PNJ was the most central or most severely affected actor. **[C-027]**\n\n---\n\n## What this paper does differently\n\nThe paper uses a three-layer evidence architecture:\n\n### 1. Main paper\n\nThe narrative explains what the reviewed record supports.\n\nMaterial propositions carry **Claim IDs**, such as `[C-006]` or `[C-023]`.\n\n### 2. Thematic appendices\n\nEach appendix organizes evidence by domain and records:\n\n- the claim;\n- supporting evidence;\n- limitations;\n- alternative explanations;\n- and relevant Source IDs.\n\n### 3. Primary source register and archive\n\nSource IDs direct readers toward the original public source, archived link, PDF, or screenshot where necessary.\n\nThe logic is simple:\n\n> **Paper claim → thematic appendix → Source ID → preserved public source**\n> \n\nNot *“trust me.”*\n\n**Audit me.**\n\n---\n\n## What the paper concludes\n\nThe reviewed public record does not support a simple story in which confidence collapsed at a single moment and produced one linear chain of consequences.\n\nIt supports a narrower—but more defensible—reconstruction:\n\n- PNJ entered 2026 with a long-standing diamond business;\n- verification, repurchase, production, retail, and disclosure arrangements were already publicly visible;\n- the controversy made those arrangements newly contestable;\n- PNJ responded through clarification and board-authorized external review;\n- those responses became additional public information;\n- and several economically important questions remained unobservable at the research cut-off.\n\nPNJ therefore provides a **dense observation window**, not a complete map of Vietnam’s diamond-market crisis. **[C-025, C-026, C-028]**\n\nThe value of the case is not that it resolves every uncertainty.\n\nIt is that it keeps every conclusion proportional to the evidence.\n\n---\n\n## Read the full paper\n\nThe attached full working paper near the top of this page includes:\n\n- the complete empirical reconstruction;\n- evidence-status definitions;\n- the master chronology;\n- pre-crisis baseline synthesis;\n- verification and investigation records;\n- buyback-policy evidence boundaries;\n- enterprise-response records;\n- capital-market evidence requirements;\n- a master Claim Register;\n- remaining questions and deliberately withheld claims;\n- and the primary Source Register.\n\n---\n\n## Suggested citation\n\n> Pham, Phu Thanh. (2026). *Vietnam’s 2026 Diamond-Market Crisis: An Evidence-First Reconstruction Through PNJ as a Focal Publicly Observable Conjunction*. Diamond Trust Architecture. Evidence cut-off: 21 July 2026.\n> \n\n---\n\n## Editorial note\n\nThis page is a public-facing summary of the full working paper.\n\nAll findings are bounded to:\n\n- the supplied public-source corpus;\n- the evidence available at the research cut-off;\n- and the distinction between documented fact, researcher observation, interpretation, and unknown.\n\nNew evidence may change individual assessments without invalidating the evidence-first method.\n\n---\n\n## Next Research Update\n\nA meaningful update would require evidence in at least one of four areas:\n\n1. public findings, methods, or reviewer identity from the announced external reviews;\n2. incident-level evidence about verification, repurchase, processing, payment, or recovery execution;\n3. comparable records from other retailers, laboratories, customers, or market institutions;\n4. sufficiently specific financial or operating disclosures to test claims about material exposure or consequence.\n\nAny new evidence should enter through the same chain: source preservation, evidence classification, Claim Register update, alternative reading, and proportional revision of the main paper.\n\n## Continue Reading\n\n[Diamond Trust Chain Collapse — When Final Proof Needs Proof](https://app.notion.com/p/Diamond-Trust-Chain-Collapse-When-Final-Proof-Needs-Proof-3926210cf1c7818894b6c9917e03fff2?pvs=21) is the companion essay on the diamond as a compressed trust package and the need for decompression capacity when proof becomes uncertain.\n\n[Work Library](https://app.notion.com/p/Work-Library-37d6210cf1c7804b933af056f81215ea?pvs=21) · [Portfolio Home](https://app.notion.com/p/Ph-m-Thanh-Ph-s-Works-37d6210cf1c78052afafd34e27af898b?pvs=21)"
  },
  "/work/diamond-trust-chain-collapse": {
    "assets": [],
    "body": "> **A diamond buyer usually does not re-grade the stone, audit the seller, and reconstruct provenance before every transaction. The certificate works because a large verification chain is compressed into something the next person can rely on. This essay asks what happens when that compressed proof becomes uncertain.**\n> \n\n> **Type:** Research Essay\n**Stage:** Evidence Building\n**Evidence basis:** Public reporting, public market mechanisms, and analytical interpretation\n**Last updated:** July 2026\n**Boundary:** Allegations and investigation status remain attributed. Analytical terms and cross-industry comparisons are not claims of factual or legal equivalence.\n> \n\n## Reading Route\n\n**Quick orientation:** Central question → Working argument → Why this matters → One-sentence summary\n\n**Trust architecture:** Trust-chain reconstruction → Certificate as compressed trust → Reverse proof → Trust stack\n\n**Critical review:** Trigger and factual boundary → Alternative explanations → Open questions\n\n> **Published article:**\n> \n> \n> [When the Final Proof Needs Proof: Diamonds, Certification Risk, and Trust Collapse](https://www.linkedin.com/pulse/when-final-proof-needs-diamonds-certification-risk-trust-pham-thanh-rnjec/)\n> \n\n---\n\n## Central question\n\n> **What happens when a certificate compresses a complex trust chain into one market signal—and that signal itself becomes uncertain?**\n> \n\n## Trigger and factual boundary\n\nThis essay was triggered by public reporting concerning alleged misconduct connected to diamond certification and trading.\n\nThe event is not treated here as a completed factual record.\n\nThis essay does not determine criminal, civil, corporate, or professional responsibility.\n\nIt uses the reported event to examine how trust works when a market depends on certificates, identity markers, seller promises, and future liquidity.\n\n> **Open evidence gap:** I have not completed a primary-source reconstruction of the triggering event. The essay therefore treats the event only as a reported trigger and does not rely on unresolved allegations as established fact. A future update would need the relevant official records, company or laboratory statements, independent reporting, certification references, and commercial terms before making stronger event-specific claims.\n> \n\n## Why diamonds are a useful trust case\n\nA diamond buyer does not evaluate only a physical stone.\n\nThe transaction may depend on a package of signals:\n\n- certificate;\n- grading;\n- laser inscription;\n- seller identity;\n- invoice and ownership record;\n- buyback or exchange promise;\n- market recognition;\n- confidence that another buyer or institution will accept the same proof later.\n\nThe buyer therefore holds more than an object.\n\nThe buyer holds a claim about the object and a set of institutions expected to support that claim.\n\nThis makes diamonds a useful case for studying trust infrastructure.\n\n## What the buyer actually holds\n\nA simplified trust package may include:\n\n> Physical stone\n> \n> - Claimed identity\n> - Certificate and grade\n> - Seller promise\n> - Buyback or exchange expectation\n> - Future market acceptance\n> - Recovery path if any part fails\n\nThe price is partly supported by the belief that these layers remain connected.\n\nIf one layer becomes uncertain, the impact may extend beyond the original transaction.\n\nThe buyer may ask:\n\n- Is the stone the same stone?\n- Is the grading reliable?\n- Is the certificate authentic and valid?\n- Will the seller still honor the promise?\n- Will another institution accept the certificate?\n- Can the asset still be sold or exchanged?\n- Who owns recovery if the proof fails?\n\n## Trust-chain reconstruction\n\nA simplified pathway is:\n\n> Stone origin\n> \n> \n> → Import or acquisition record\n> \n> → Identity and grading\n> \n> → Certificate\n> \n> → Seller representation\n> \n> → Buyer reliance\n> \n> → Buyback or resale belief\n> \n> → Future verification\n> \n> → Recovery or loss\n> \n\nEvery step can preserve, transform, or weaken evidence.\n\nThe certificate is powerful because it compresses much of the earlier chain into a signal that the market can use quickly.\n\nThat compression creates efficiency.\n\nIt also creates concentration.\n\nWhen many later decisions rely on one proof layer, weakness in that layer can spread across transactions that were not originally connected.\n\n## Working argument\n\n> **Certification does not eliminate risk. It relocates and compresses risk into the institutions, records, and recovery mechanisms that support the certificate.**\n> \n\nA certificate may reduce the buyer’s need to inspect the full history.\n\nIt does not remove the need for:\n\n- reliable identity;\n- controlled issuance;\n- traceable records;\n- separation of roles;\n- auditability;\n- correction;\n- revocation or re-verification;\n- recovery when the signal fails.\n\nThe market becomes more efficient by trusting the certificate.\n\nThe market also becomes more dependent on the certificate’s integrity.\n\n## Certificate as compressed trust\n\nA certificate can be understood as compressed trust because it allows many parties to act without re-performing the original verification.\n\nThis has three effects.\n\n### 1. Lower transaction cost\n\nThe buyer does not need to independently reconstruct every step.\n\n### 2. Higher portability\n\nThe proof may travel across stores, buyers, insurers, lenders, and future transactions.\n\n### 3. Concentrated consequence\n\nIf the proof becomes unreliable, uncertainty may spread beyond one seller or one stone.\n\nThe same mechanism appears in other systems:\n\n- professional credentials;\n- inspection records;\n- audit opinions;\n- origin certificates;\n- digital identity;\n- compliance status;\n- credit assessment.\n\nThe analogy is about trust structure, not factual equivalence between industries.\n\n## Data as reverse proof\n\nWhen trust is questioned, the certificate alone may no longer be enough.\n\nThe market may need to reconstruct the pathway backward.\n\nPotential reverse-proof data includes:\n\n- stone identity and inscription;\n- certificate issuance record;\n- grading record;\n- acquisition and import record;\n- seller invoice;\n- transfer history;\n- image or scan;\n- inventory movement;\n- re-verification result;\n- buyback or exchange history;\n- incident and correction log.\n\nThis suggests a working proposition:\n\n> **The stronger the market relies on compressed proof, the more important it becomes to preserve the underlying evidence needed to reconstruct that proof.**\n> \n\nThe goal is not maximum data collection.\n\nIt is sufficient evidence for re-verification, correction, and recovery.\n\n## Guarantee drift\n\nA guarantee may begin as a narrow commercial promise.\n\nOver time, customers may interpret it more broadly.\n\nFor example, a buyback promise may be understood as evidence that:\n\n- the seller trusts the stone;\n- the certificate will remain accepted;\n- liquidity will remain available;\n- the customer can exit later;\n- the transaction is safe.\n\nThis is **guarantee drift**:\n\n> A limited promise gradually becomes a broader trust signal than the original operational system may be able to support.\n> \n\nThe risk is not the existence of a guarantee.\n\nThe risk is a gap between:\n\n- what the customer believes the guarantee covers;\n- what the contract actually covers;\n- what the organization can operationally honor under stress.\n\n## Accumulated guarantee exposure\n\nGuarantees create future obligations.\n\nIf many customers rely on buyback, exchange, or verification promises, the organization may accumulate exposure across:\n\n- liquidity;\n- inventory;\n- verification capacity;\n- dispute handling;\n- customer support;\n- legal responsibility;\n- reputation.\n\nThe promise may appear inexpensive during normal conditions.\n\nIts cost becomes visible during a trust shock.\n\nThis creates a useful question:\n\n> Has the organization measured the operational exposure created by the trust promise, or only the sales benefit?\n> \n\n## Buyback promise as a liquidity signal\n\nA buyback promise may communicate more than customer service.\n\nIt may signal:\n\n- confidence in authenticity;\n- confidence in grading;\n- confidence in future demand;\n- confidence in the seller’s own liquidity;\n- confidence that the certificate will remain recognized.\n\nDuring a trust shock, the promise may be tested by many customers at once.\n\nThe resulting pressure is analytically similar to a liquidity run because many holders may seek exit or re-verification at the same time.\n\nThis is an analogy about synchronized trust withdrawal.\n\nIt is not a claim that diamond retail is legally or economically identical to banking.\n\n## Certification shock and identity risk\n\nIf a certification-linked process is suspected of allowing false, mismatched, or improperly documented items into the market, the risk is not limited to incorrect grading.\n\nA deeper issue may be identity integrity:\n\n- Does the certificate correspond to the correct stone?\n- Can the inscription and record be matched?\n- Can a legitimate proof package be reused or attached incorrectly?\n- Can later owners reconstruct the chain?\n\nOne possible mechanism can be described analytically as **identity laundering**:\n\n> A trusted identity layer can potentially be used to make an uncertain asset appear legitimate.\n> \n\nThe term describes a possible trust-system failure mode, not a finding about the reported case.\n\n## Audit of audit\n\nWhen the verifier becomes part of the uncertainty, the market asks:\n\n> Who verifies the verifier?\n> \n\nA resilient trust system may require separation across:\n\n- grading or certification;\n- commercial sale;\n- inventory control;\n- audit;\n- exception review;\n- incident investigation;\n- customer recovery.\n\nThe answer is not necessarily infinite guarantees.\n\n“Guarantee over guarantee forever” can create complexity without real independence.\n\nThe stronger design question is:\n\n> Which independent evidence, role separation, and recovery process can test the proof without depending entirely on the same institution that created it?\n> \n\n## Owner and process map\n\nA trust pathway may involve:\n\n- source or supplier;\n- importer;\n- laboratory;\n- certificate issuer;\n- retailer;\n- finance and inventory teams;\n- auditor;\n- regulator or law-enforcement body;\n- insurer;\n- customer;\n- secondary buyer;\n- independent re-verifier.\n\nThe exact participants vary.\n\nThe governance question is whether ownership is visible at each stage:\n\n- who creates the evidence;\n- who validates it;\n- who stores it;\n- who can correct or revoke it;\n- who communicates uncertainty;\n- who funds recovery;\n- who accepts the proof in the next transaction.\n\n## Trust stack beyond guarantee\n\nA guarantee alone is not a trust system.\n\nA stronger trust stack may include:\n\n### Identity layer\n\n- unique stone identity;\n- certificate identity;\n- controlled matching;\n- tamper-resistant records where appropriate.\n\n### Evidence layer\n\n- acquisition records;\n- grading data;\n- images or scans;\n- transaction history;\n- re-verification evidence.\n\n### Authority layer\n\n- separation of commercial and verification roles;\n- controlled issuance;\n- exception approval;\n- independent review.\n\n### Visibility layer\n\n- clear certificate status;\n- correction or revocation notice;\n- customer-accessible verification;\n- disclosed guarantee boundary.\n\n### Recovery layer\n\n- re-verification;\n- correction;\n- replacement;\n- refund or buyback where applicable;\n- dispute handling;\n- customer communication;\n- market-wide incident response.\n\n### Learning layer\n\n- incident review;\n- control update;\n- recurring audit;\n- detection of repeated patterns;\n- preservation of evidence for future cases.\n\n## Alternative explanations and challenges\n\nThe essay’s argument would need revision if:\n\n- the reported event did not materially affect certification integrity;\n- the issue was isolated to commercial misconduct rather than the proof system;\n- independent re-verification already provides sufficient recovery;\n- customer reliance is driven mainly by retailer reputation rather than certificates;\n- the buyback promise is narrowly understood and operationally well funded;\n- more data creates privacy, security, or coordination cost without improving recovery;\n- the certificate system has effective revocation and correction mechanisms not visible in current public information.\n\n## Why this matters\n\nTrust infrastructure often succeeds by making complexity disappear.\n\nThe user sees:\n\n- a certificate;\n- a verified badge;\n- a guarantee;\n- an audit result;\n- an approval.\n\nBehind that signal is a pathway of evidence, authority, recordkeeping, and recovery.\n\nThe visible proof becomes dangerous when the market treats it as final while the underlying pathway cannot be reconstructed.\n\nThe general lesson is not that certificates are unreliable.\n\nIt is:\n\n> **Compressed trust needs decompression capacity when something goes wrong.**\n> \n\n## Working propositions\n\nThese remain open to evidence and revision.\n\n- A certificate is compressed trust.\n- Certification relocates rather than eliminates risk.\n- The more portable a trust signal becomes, the larger the consequence of failure.\n- A guarantee can drift beyond its operational boundary.\n- Future promises create accumulated exposure.\n- Trust recovery requires underlying evidence, not only stronger reassurance.\n- The verifier must be reviewable without creating an infinite chain of guarantees.\n- Market trust depends partly on whether proof can be reconstructed after failure.\n\n## Open questions\n\n- What evidence should follow a diamond across ownership changes?\n- Who can independently re-verify identity and grading?\n- How should certificate correction or revocation work?\n- What does a buyback promise legally and operationally cover?\n- Who carries the liquidity burden during a trust shock?\n- What information should be disclosed to current owners?\n- How should the market distinguish one affected item from a wider category?\n- Which recovery mechanism protects customers without creating false certainty?\n- How much underlying evidence can be preserved without creating excessive cost or sensitive-data risk?\n\n## One-sentence summary\n\n> **When final proof becomes uncertain, trust cannot be restored by stronger reassurance alone; the system needs evidence, independent authority, and a credible path to re-verification and recovery.**\n>"
  },
  "/work/adobe-account-restriction": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-",
        "fileName": "Adobe_Account_Restriction_Comparative_Case_Study_2026-08-07.pdf",
        "label": "📄 Xem trước: Adobe_Account_Restriction_Comparative_Case_Study_2026-08-07.pdf ↗",
        "title": "Adobe Account Restriction Comparative Case Study 2026-08-07"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-\" data-type=\"paper\" data-title=\"Adobe Account Restriction Comparative Case Study 2026-08-07\">📄 Adobe Account Restriction Comparative Case Study 2026-08-07 (PAPER) ↗</button>\n</asset-bar>\n\n## When account recovery is not the same as workflow recovery\n\n> **Independent Comparative Case · Evidence-First Research**\n> \n\n> 12 usable public journeys · Adobe Community + Threads · Adobe official terms and appeal baseline\n> \n\n> Research cut: 7 August 2026 · Public evidence only · Not commissioned by Adobe\n> \n\n\n<diagram-card title=\"ChatGPT Image Aug 7, 2026, 12_38_05 PM.png\" driveid=\"1dYr1QQndfAy0tAxgt6vhlJ15uhTdboxB\" caption=\"ChatGPT Image Aug 7, 2026, 12_38_05 PM.png\"></diagram-card>\n\n\n> **For a designer or creator, losing Creative Cloud access can interrupt more than a subscription. It can stop an edit, export, deadline, release, or client delivery. That makes account recovery and workflow recovery two related but different states.**\n> \n\n---\n\n## Executive Summary\n\n- **Question:** Does the post-restriction resolution problem observed in Shopee reappear when enforcement interrupts an already-paid digital work tool?\n- **Evidence:** 12 usable public journeys—7 Adobe Community and 5 Threads—plus current Adobe Terms and Transparency Center material. The sample is purposive and supports pathway comparison, not prevalence or error-rate estimates.\n- **Observed pattern:** Paid or paid-as-reported access → fraud/suspicion state → restriction or cancellation → affected app/service access → support/review → divergent outcomes such as refund, restoration, extra access time, repeated escalation, replacement purchase, or reported file loss.\n- **Comparative finding:** Shopee suggested **platform decision ≠ customer problem resolved**. Adobe adds **access restored ≠ interrupted workflow restored**.\n- **Product hypothesis:** Where risk permits, resolution should run two tracks in parallel: decide the account case while preserving the minimum safe continuity of the customer’s current work and making recovery states visible.\n\n<aside>\n↳\n\n**This page is the portfolio summary.**\n\nThe full 12-page comparative case contains the evidence matrix, Adobe official-source cards, Shopee comparison, revised Explainable Resolution Case, claim-to-source map, and research handoff.\n\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1-2YQr44kv5rAotPw9Eom2EqoZtuK-kZ-\" data-type=\"paper\" data-title=\"Adobe Account Restriction Comparative Case Study 2026-08-07\">Adobe_Account_Restriction_Comparative_Case_Study_2026-08-07.pdf ↗</button>\n\n</aside>\n\n---\n\n## 1. Why Adobe Is a Useful Comparative Case\n\nAdobe removes much of the marketplace complexity in the Shopee case. A customer can pay Adobe directly, use the software inside an active workflow, and then experience enforcement that interrupts access.\n\nThat creates four distinct recovery layers:\n\n| Layer | What can be interrupted | Resolution question |\n| --- | --- | --- |\n| Account / subscription | Restricted, cancelled, inactive, or under review | What happened and can it be contested? |\n| Tool / asset | Apps, paid services, or cloud assets become unavailable or unstable | What remains usable right now? |\n| Customer workflow | Editing, export, creative production, or dependent work stops | How can urgent work continue safely? |\n| Downstream outcome | Deadline, release, client delivery, or submission may be threatened | Can the intended outcome still be recovered? |\n\nThe public corpus includes reported deadline, professional-work, music-release/creative-production, urgent-work, replacement-purchase, and file-loss consequences. These are treated as observed only where explicitly reported.\n\n---\n\n## 2. Evidence and Boundary\n\nThe case uses:\n\n- **7 Adobe Community journeys**;\n- **5 researcher-supplied Threads journeys**;\n- **4 adjacent/context signals** retained for counter-hypotheses but not counted as core journeys;\n- **Adobe General Terms of Use** and **Adobe Transparency Center appeal material** as official baseline.\n\nEight usable journeys are graded Strong and four Medium. Grade reflects pathway completeness—not independent verification of the user’s account history or whether Adobe’s action was correct or incorrect.\n\n- What the evidence cannot determine\n    - the internal fraud trigger or detection logic;\n    - automation versus human decision;\n    - false-positive status;\n    - prevalence or representativeness;\n    - whether an individual action complied with policy or law;\n    - whether platform steps not mentioned publicly actually occurred.\n\n---\n\n## 3. Observed Public Pathway\n\n> **Paid or paid-as-reported access → fraud/suspicion state → restriction/cancellation → affected app/service access → search for explanation/support → review/wait in some cases → outcome → access/payment recovery → possible workflow recovery**\n> \n\nThis is a synthesis of reported states, not an asserted universal Adobe process.\n\nObserved outcomes include:\n\n- refund;\n- restoration;\n- restoration plus extra access time;\n- pending or repeated escalation;\n- replacement access purchased by the customer;\n- reported permanent file loss.\n\nThe important distinction is that **money recovery, access recovery, file recovery, and workflow recovery do not necessarily move together**.\n\n---\n\n## 4. What Transfers from Shopee — and What Adobe Adds\n\n| Dimension | Shopee | Adobe | Comparative reading |\n| --- | --- | --- | --- |\n| Existing customer interest | Orders, refunds, balances, benefits | Paid software/services and cloud work | Both begin after customer commitment. |\n| Platform intervention | Account restriction / enforcement | Fraud-related restriction / cancellation | Enforcement need can coexist with resolution need. |\n| During review | Preserve marketplace interests where appropriate | Preserve minimum safe work continuity where possible | Adobe makes time-sensitive workflow cost more visible. |\n| After decision | Resolve account + affected marketplace interests | Resolve account + access/payment + interrupted work | Customer resolution extends beyond decision closure. |\n| New contribution | Decision ≠ customer problem resolved | Access restored ≠ workflow restored | Workflow recovery becomes a distinct state. |\n\n> **Comparative finding:** the platform can interrupt a tool, the tool can interrupt a workflow, and the workflow can threaten an outcome outside the platform. The resolution object therefore cannot stop at account state or subscription entitlement.\n> \n\n---\n\n## 5. Comparative Product Hypothesis — Resolve the Case and Protect the Work\n\nThe hypothesis is **not** “never suspend a paid user.” Fraud and security controls may require immediate action and may make temporary access unsafe.\n\nThe design question is whether enforcement resolution and workflow continuity can be handled as two connected tracks:\n\n| Track A — Enforcement resolution | Track B — Safe continuity / recovery |\n| --- | --- |\n| Current restriction state and safe-to-disclose reason | What apps, services, files, or functions remain usable |\n| Evidence/action required from the customer | Minimum safe continuity where risk permits |\n| Review stage and next update | Explicit mitigation path if continuity is impossible |\n| Final account/subscription decision | Paid-time, payment, file, or access recovery where permitted |\n| Remaining appeal/remedy | Interruption/recovery timeline for downstream verification |\n\n> **Design question:** What minimum safe continuity can remain while the enforcement decision is unresolved—and, when continuity cannot remain, what information lets the customer mitigate the workflow consequence immediately?\n> \n\nRead-only access, protected download/export, or temporary restricted modes are examples to investigate—not evidence-backed prescriptions. Feasibility depends on Adobe’s architecture, security risk, licensing, and content-storage design.\n\n---\n\n## 6. Explainable Resolution Case — Revised for Workflow Continuity\n\nA customer-facing resolution object would need to answer:\n\n- **Current state:** restricted, under review, evidence required, decision issued, recovery in progress;\n- **Why am I here?** safe-to-disclose reason category and what the customer can respond to;\n- **What is affected?** plan, app, service, cloud asset, function, billing/payment, and access scope;\n- **What still works?** what remains usable, retrievable, viewable, downloadable, or exportable;\n- **What can I do right now?** mitigation or alternate route while review is pending;\n- **What do you need from me?** required evidence/action and submission route;\n- **What is happening now?** acknowledgement, review stage, and case state;\n- **When will I hear back?** next update or resolution window without inventing a clock policy does not promise;\n- **What was decided?** final enforcement/subscription outcome;\n- **What happens to paid value and my work?** refund, access, compensated time, file recovery, and remaining continuity limits;\n- **What can I show someone else?** a portable incident record of timestamps, state changes, submissions, and outcome—without claiming it proves liability.\n\n---\n\n## 7. Evidence-Trail Hypothesis\n\nAdobe also adds a secondary Explainable Trust question: can a platform-generated resolution path leave a verifiable record useful after the platform decision itself?\n\nA credible record would require provenance, timestamps, actor/state identity, version history, evidence/submission status, and an export/share mechanism.\n\n> **Boundary:** such a record may establish sequence and state. It does not automatically establish causation, reasonableness, damages, or legal liability.\n> \n\n---\n\n## What This Case Can and Cannot Conclude\n\n**Supported by the current corpus**\n\n- repeated public reports link paid or paid-as-reported Adobe access with fraud/suspicion enforcement, access interruption, support/review activity, and divergent recovery states;\n- several reports explicitly describe workflow consequences;\n- refund, access restoration, compensated time, file recovery, and downstream workflow recovery are analytically distinct;\n- the evidence is consistent with the Shopee resolution hypothesis and adds workflow continuity/recovery as a separate resolution object.\n\n**Not supported**\n\n- prevalence or error-rate claims;\n- false-positive conclusions;\n- claims that subscription-fraud enforcement is automated;\n- legal findings about breach, causation, damages, or liability;\n- validation of minimum-safe-continuity or portable-record product concepts.\n\n---\n\n## What This Case Demonstrates\n\n**Comparative evidence research · privacy-first journey coding · cross-domain hypothesis testing · customer-resolution design · workflow continuity · enforcement/recovery separation · explainable resolution · evidence boundaries**\n\n---\n\n*Independent comparative work sample · Public evidence only · Research cut: 7 August 2026*"
  },
  "/work/ai-judgment-decisions": {
    "assets": [],
    "body": "> **This inquiry started with a financial-assistant idea. I was trying to improve the recommendation, then realized the more interesting question was what happens to the user’s own judgment after receiving AI help repeatedly.**\n> \n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Research program:** Human–AI–System Evolution\n**Scope:** Consequential decision-support contexts\n**Last updated:** July 2026\n**Boundary:** A working hypothesis—not a validated product framework or a claim about all AI use cases.\n> \n\n## Reading Route\n\n**Quick orientation:** Research question → Working hypothesis → Human outcome under examination → Next evidence\n\n**Concept logic:** Starting observation → Answer-centered vs evidence-centered AI → Possible mechanism\n\n**Research design:** Falsifiers → First evidence-building test → Delayed transfer measures\n\n---\n\n## Research question\n\n> **Does AI help people make better decisions only in the moment, or can it help them develop better judgment over time?**\n> \n\nThis question emerged from a financial-assistant idea.\n\nThe original product question was relatively narrow:\n\n> How can AI help users make better financial decisions instead of maximizing conversion or Buy Now, Pay Later adoption?\n> \n\nBut the deeper issue was not only whether an AI system could produce a better recommendation.\n\nIt was whether repeated interaction with that system would change the user’s own ability to evaluate evidence, recognize uncertainty, and make similar decisions independently.\n\nThat moved the inquiry from immediate product outcome to long-term human outcome.\n\n## Starting observation\n\nMany AI products compress a difficult situation into an answer.\n\nThat can be useful. It can reduce time, organize complexity, and help a person act.\n\nBut compression also changes what remains visible.\n\nWhen evidence, assumptions, uncertainty, trade-offs, and alternative explanations disappear behind a confident recommendation, the user may receive a good answer without learning how the answer was reached.\n\nThe immediate decision may improve while the user’s independent judgment remains unchanged—or becomes more dependent on the system.\n\nThis creates a product question that cannot be answered by conversion, completion rate, satisfaction, or short-term decision quality alone:\n\n> What kind of decision-maker is the product helping the user become?\n> \n\n## Working hypothesis\n\n> **In consequential decision-support contexts, AI that preserves inspectable evidence, communicates uncertainty, and leaves room for human override and recovery may help users develop better judgment over time. AI that compresses complexity into confident answers may improve short-term speed while weakening the user’s ability to assess similar decisions independently.**\n> \n\nThis is not a claim that more explanation is always better.\n\nToo much explanation can create cognitive overload, false reassurance, or the appearance of rigor without better understanding.\n\nThe hypothesis is narrower:\n\n> The recommendation should not become more authoritative than the evidence supporting it.\n> \n\n## Scope\n\nThis inquiry focuses primarily on decisions where the recommendation may affect:\n\n- financial commitments;\n- health-related choices;\n- legal or compliance actions;\n- operational decisions;\n- trust-sensitive relationships;\n- decisions that are difficult or costly to reverse.\n\nThe same evidence requirements may not be necessary for low-consequence tasks such as drafting casual text, generating visual ideas, or reorganizing notes.\n\nEvidence-centered AI is therefore not proposed as a universal interface pattern for every AI interaction.\n\n## Answer-centered AI and evidence-centered AI\n\n### Answer-centered AI\n\nThe product primarily optimizes for:\n\n- speed;\n- completion;\n- decisiveness;\n- reduced cognitive effort;\n- confidence in the recommendation.\n\nA typical interaction is:\n\n> Evidence → AI → Answer\n> \n\nThe user sees the conclusion but may not retain the evidence structure behind it.\n\n### Evidence-centered AI\n\nThe product helps the user inspect how the recommendation is supported.\n\nA possible interaction is:\n\n> Evidence → AI organizes evidence → Recommendation → Evidence remains inspectable\n> \n\nThe AI does not replace evidence. It helps structure evidence so the user can understand what supports the recommendation, what remains uncertain, and what could change the conclusion.\n\n## Possible mechanism\n\nThe hypothesis may depend on five conditions.\n\nThese are mechanism candidates, not a completed framework.\n\n### 1. Evidence remains inspectable\n\nThe user can see which facts, records, calculations, or sources support the recommendation.\n\n### 2. Uncertainty remains visible\n\nThe system distinguishes:\n\n- confirmed information;\n- inference;\n- missing context;\n- outdated evidence;\n- disagreement between sources;\n- conditions that may change the conclusion.\n\n### 3. Intervention is proportional\n\nA strong recommendation against action should require stronger evidence and higher consequence than a light suggestion.\n\nThe system should not use the same authoritative tone for every decision.\n\n### 4. Human reasoning is not bypassed\n\nThe interface gives the user enough structure to understand the decision, question the recommendation, and choose differently.\n\n### 5. Correction and recovery remain possible\n\nWhen the recommendation is wrong, the user can inspect what failed, correct the evidence, and recover without the system hiding behind a final answer.\n\n## Progressive evidence\n\nA possible user experience is:\n\n> Recommendation\n> \n\n> ↓\n> \n\n> Main supporting evidence\n> \n\n> ↓\n> \n\n> Uncertainty and missing context\n> \n\n> ↓\n> \n\n> Expanded reasoning\n> \n\n> ↓\n> \n\n> Supporting calculations\n> \n\n> ↓\n> \n\n> Original evidence\n> \n\nDifferent users may inspect different depths.\n\nThe product question is not whether every user reads everything.\n\nThe question is whether the system preserves an accessible route from recommendation back to evidence.\n\n## Human outcome under examination\n\nThis essay does not attempt to define all Human Outcomes.\n\nIt examines one candidate outcome:\n\n> **Judgment development and independent decision capacity**\n> \n\nPossible signals include:\n\n- Can the user identify which evidence matters?\n- Can the user explain why a recommendation was made?\n- Can the user recognize when evidence is incomplete?\n- Can the user challenge an AI recommendation appropriately?\n- Can the user make a similar decision later without AI support?\n- Does the user’s confidence become better calibrated to evidence quality?\n- Can the user recover when the recommendation is wrong?\n\n## Falsifiers and counter-hypotheses\n\nThe working hypothesis would be weakened if:\n\n- evidence visibility increases cognitive load without improving understanding;\n- users still become dependent even when evidence remains inspectable;\n- users perform better with AI but show no improvement on later decisions without AI;\n- progressive explanation creates false confidence rather than calibrated confidence;\n- users confuse the amount of evidence with the quality of evidence;\n- answer-centered AI produces equal or better long-term judgment development;\n- domain expertise, not interface design, explains the observed improvement;\n- users do not have enough time, incentive, or ability to inspect evidence in real workflows.\n\nA competing hypothesis is:\n\n> Most users do not want to develop judgment through a product. They want reliable delegation, and the product should optimize for safe delegation rather than user learning.\n> \n\nAnother competing hypothesis is:\n\n> Judgment development depends more on feedback after the decision than on evidence visibility before the decision.\n> \n\nBoth alternatives should remain open.\n\n## First evidence-building test\n\nA simple early test could compare two versions of the same consequential decision-support task.\n\n### Version A: Answer-centered\n\nThe user receives:\n\n- a recommendation;\n- a short confidence statement;\n- a concise explanation.\n\n### Version B: Evidence-centered\n\nThe user receives:\n\n- the same recommendation;\n- the main supporting evidence;\n- visible uncertainty;\n- access to expanded reasoning;\n- a clear route to original evidence.\n\n### Immediate measures\n\n- decision quality;\n- time to decision;\n- confidence calibration;\n- ability to identify missing evidence;\n- willingness to challenge the recommendation;\n- perceived cognitive burden.\n\n### Delayed transfer measures\n\nLater, users receive a related decision without AI support.\n\nMeasure:\n\n- decision quality;\n- evidence selection;\n- explanation quality;\n- recognition of uncertainty;\n- confidence calibration;\n- ability to notice when the previous recommendation pattern no longer applies.\n\nThe strongest early evidence would not be that Version B produces more clicks or longer reading time.\n\nIt would be that users become better at evaluating a later decision independently.\n\n## Current working propositions\n\nThese propositions remain open to revision:\n\n- The recommendation should never be more authoritative than the evidence supporting it.\n- AI should not hide complexity behind confidence.\n- AI should organize complexity into evidence humans can inspect.\n- Trust comes from appropriate transparency, not maximum explanation.\n- Strong intervention should be rare, proportional, and evidence-based.\n- Human agency requires more than a final choice button; it requires enough visibility to understand and contest the recommendation.\n- A product can improve immediate outcomes while weakening long-term human capability.\n\n## Relationship to the broader research program\n\nThis hypothesis sits inside **Human–AI–System Evolution**.\n\nThe central program question is:\n\n> What happens to humans after living with AI every day for the next 5–10 years?\n> \n\nThis essay examines one part of that question:\n\n> What happens to human judgment when AI repeatedly participates in consequential decisions?\n> \n\nIt also connects to three existing directions:\n\n- **AI Apprenticeship:** Before AI receives greater authority, it may need to learn local meaning, boundaries, and consequences.\n- **AI workflow governance:** Governance concerns how an output becomes reliance, record, action, or consequence—not only how the model produces it.\n- **The AI Product Question We’re Not Asking:** Product success may need to include who the user becomes through repeated use, not only what the product helps the user complete.\n\n## Current status\n\nThis page preserves a working hypothesis.\n\nIt does not yet establish:\n\n- that evidence-centered AI improves long-term judgment;\n- which evidence interface works best;\n- how much explanation is appropriate;\n- whether users want learning or delegation;\n- whether the result transfers across domains;\n- what governance responsibility the product team should carry.\n\n## Next evidence\n\nThe next step is not to expand the concept into a larger framework.\n\nThe next step is to test whether evidence-centered interaction changes:\n\n1. immediate decision quality;\n2. confidence calibration;\n3. later independent judgment;\n4. appropriate challenge of AI recommendations;\n5. recovery after an incorrect recommendation."
  },
  "/work/ai-apprenticeship": {
    "assets": [],
    "body": "> **Most AI deployment questions start with what the model can automate or execute. I became more interested in the step before that: what the model may still misunderstand about local meaning, authority, evidence, exceptions, and recovery.**\n> \n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Research program:** Human–AI–System Evolution\n**Scope:** AI systems entering recurring organizational or operational workflows\n**Last updated:** July 2026\n**Boundary:** A working hypothesis—not a validated deployment protocol, universal AI architecture, or required path for every AI system.\n> \n\n## Reading Route\n\n**Quick orientation:** Research question → Working hypothesis → Bounded progression of authority → Next step\n\n**System logic:** Formal process / operational reality / local meaning → Observer before actor → Inquiry before action\n\n**Critical review:** Surveillance challenge → Organizational power → Competing hypotheses → Falsifiers\n\n---\n\n## Research question\n\n> **Before an AI system receives authority to act inside an organization, should it first learn how that organization understands its own work?**\n> \n\n## Origin of the inquiry\n\nMany AI discussions begin with action.\n\nThe questions are often:\n\n- What can the AI automate?\n- Which decisions can it make?\n- Which tools can it use?\n- How much human review can be removed?\n- How quickly can it become an agent?\n\nThose questions may begin too late.\n\nBefore an AI acts, it enters a system with:\n\n- local language;\n- informal workarounds;\n- competing incentives;\n- incomplete records;\n- role boundaries;\n- historical decisions;\n- trust relationships;\n- exceptions that are not written in policy;\n- consequences that may appear far from the original action.\n\nA pretrained model may arrive with broad knowledge and strong answer-generation capability.\n\nIt does not automatically understand what a specific organization means by:\n\n- urgent;\n- approved;\n- complete;\n- risky;\n- customer-ready;\n- final;\n- resolved;\n- trusted.\n\nThat led to the working question:\n\n> Should AI first become an apprentice observer before it becomes an operational actor?\n> \n\n## Starting observation\n\nOrganizations rarely operate exactly as their formal process diagrams suggest.\n\nWork is shaped by at least three layers.\n\n### Formal process\n\nWhat policy, procedure, role descriptions, or system design says should happen.\n\n### Operational reality\n\nWhat people actually do to complete the work.\n\n### Local meaning\n\nHow people interpret:\n\n- which exception is acceptable;\n- which signal matters;\n- who has practical authority;\n- when escalation is necessary;\n- what counts as sufficient evidence;\n- what failure is recoverable;\n- what risk is socially or commercially unacceptable.\n\nAn AI system can read the formal process.\n\nIt may still misunderstand operational reality and local meaning.\n\nIf it receives action authority too early, it can scale that misunderstanding.\n\n## Working hypothesis\n\n> **In recurring and consequential workflows, AI may need a supervised apprenticeship period in which it observes, asks questions, identifies uncertainty, and learns local mission, boundaries, authority, evidence, and recovery before receiving broader authority to recommend or act.**\n> \n\nThe hypothesis does not mean that the AI should imitate every existing behavior.\n\nExisting workflows may contain:\n\n- inefficiency;\n- bias;\n- unsafe shortcuts;\n- undocumented power;\n- outdated policy;\n- normalized failure.\n\nThe purpose of apprenticeship is not blind imitation.\n\nIt is to understand the system well enough to distinguish:\n\n- intended process;\n- actual process;\n- local adaptation;\n- unresolved contradiction;\n- behavior that should not be preserved.\n\n## What “system learner” means\n\nThe phrase “system-born AI” can be misleading if taken literally.\n\nMost real systems will use pretrained models rather than an AI created entirely inside one organization.\n\nA more precise idea is:\n\n> **A pretrained model becomes a system learner when it is deliberately contextualized through supervised observation, inquiry, correction, and bounded participation in a specific environment.**\n> \n\nThe useful contrast is therefore:\n\n> A pretrained model enters with broad answers.\n> \n> \n> A system learner should first enter with questions about local meaning.\n> \n\n## Why observer before actor\n\nAn actor changes the system.\n\nAn observer can first learn how the system currently works and where its own understanding is weak.\n\nA supervised observer may help surface:\n\n- repeated handoff failures;\n- missing ownership;\n- inconsistent status language;\n- evidence gaps;\n- recurring exceptions;\n- conflicts between policy and practice;\n- unresolved recovery burden;\n- decisions that depend on one person’s memory.\n\nThe value is not only pattern detection.\n\nThe value is making the system discuss what has previously remained implicit.\n\n## Inquiry before action\n\nUseful questions for an apprenticing AI may include:\n\n### Mission\n\n- What is this workflow meant to achieve?\n- Which outcome matters when speed, cost, trust, and safety conflict?\n- Who is the system ultimately serving?\n\n### Boundary\n\n- What is inside the AI’s role?\n- What must remain a human decision?\n- Which action is prohibited even if technically possible?\n- When should the AI stop and escalate?\n\n### Meaning\n\n- What does “complete” mean in this team?\n- Which signals are trusted?\n- Which exceptions are normal, and which are dangerous?\n- Which language has different meanings across functions?\n\n### Evidence\n\n- What evidence is required before a recommendation?\n- Which data is missing, delayed, inferred, or unreliable?\n- What must be preserved if the decision is later challenged?\n\n### Authority\n\n- Who can approve, reject, override, or reverse?\n- Is formal authority different from practical authority?\n- Which decision requires more than one role?\n\n### Recovery\n\n- What happens when the workflow goes wrong?\n- Can the action be reversed?\n- Who owns correction?\n- Who bears the cost during uncertainty?\n\nThe AI does not need to ask every question in every interaction.\n\nThe apprenticeship should help it learn which questions matter in which context.\n\n## A bounded progression of authority\n\nThe progression below is a research direction, not a universal protocol.\n\n### 1. Observer\n\nThe AI can:\n\n- read permitted workflow records;\n- summarize recurring patterns;\n- identify missing information;\n- ask clarification questions.\n\nIt cannot:\n\n- alter records;\n- send external communication;\n- make operational decisions;\n- execute transactions.\n\n### 2. Interpreter\n\nThe AI can:\n\n- propose a pathway map;\n- distinguish formal and observed workflow;\n- identify possible contradictions;\n- surface uncertainty and alternative explanations.\n\nIts interpretation remains reviewable.\n\n### 3. Reviewer\n\nThe AI can:\n\n- check a draft, record, or workflow against explicit rules;\n- identify missing evidence;\n- flag possible inconsistency;\n- recommend further review.\n\nIt does not become the final authority merely because it can detect a pattern.\n\n### 4. Recommender\n\nThe AI can:\n\n- propose an action;\n- show supporting evidence;\n- communicate uncertainty;\n- identify required approval;\n- state what would change the recommendation.\n\nA human or governed decision process retains authority.\n\n### 5. Actor\n\nThe AI may execute a bounded action only when:\n\n- mission is clear;\n- authority is explicit;\n- evidence is sufficient for the consequence;\n- the action is observable;\n- reversal or recovery exists where required;\n- escalation conditions are defined;\n- performance and failure are reviewed.\n\nThis progression should not be interpreted as an inevitable promotion path.\n\nSome systems should remain observers or recommenders permanently.\n\n## The surveillance challenge\n\nAn observing AI can easily become a surveillance system.\n\nThe distinction does not depend only on whether the AI is “helpful.”\n\nIt depends on governance.\n\nA supervised apprenticeship should clarify:\n\n- what the AI can observe;\n- whose data it can access;\n- why the observation is necessary;\n- whether people know the observation exists;\n- how long information is retained;\n- whether information can be used for performance evaluation;\n- who can inspect the AI’s memory or conclusions;\n- how errors can be corrected;\n- which private or informal spaces remain outside the system.\n\nA system that learns from employees without meaningful boundaries may improve process visibility while damaging trust, autonomy, and psychological safety.\n\nThis creates a central challenge:\n\n> **Can an AI learn the system without turning every human action into organizational evidence?**\n> \n\n## Local learning and organizational power\n\nNot every explanation in an organization is neutral.\n\nDifferent actors may describe the same workflow differently because they have different:\n\n- incentives;\n- authority;\n- exposure to risk;\n- access to information;\n- definitions of success.\n\nAn apprenticing AI may learn the perspective of the most powerful or most documented role and mistake it for system truth.\n\nThe learning process should therefore seek multiple perspectives:\n\n- frontline operator;\n- manager;\n- customer-support role;\n- risk or compliance;\n- partner;\n- affected user;\n- system record;\n- exception history.\n\nThe goal is not to create perfect consensus.\n\nIt is to make disagreement and missing perspective visible.\n\n## What the AI should learn—and what it should challenge\n\nA system learner should attempt to understand:\n\n- workflow sequence;\n- status definitions;\n- ownership;\n- evidence requirements;\n- handoffs;\n- escalation;\n- recovery;\n- local exceptions;\n- recurring failure.\n\nIt should not automatically preserve:\n\n- discriminatory practice;\n- unsafe shortcuts;\n- retaliation;\n- hidden coercion;\n- policy violations;\n- normalized burden on weaker participants;\n- workflows that exist only because the system has failed to fix a known problem.\n\nApprenticeship therefore requires a distinction between:\n\n> **learning the system**\n> \n> \n> and\n> \n> **legitimizing the system.**\n> \n\n## Competing hypotheses\n\nThe working hypothesis may be incomplete.\n\n### Competing hypothesis 1 — apprenticeship slows useful deployment\n\nA long observation period may delay value while people continue doing avoidable manual work.\n\nA bounded pilot with rapid feedback may teach the AI more effectively than observation alone.\n\n### Competing hypothesis 2 — existing workflow is the wrong teacher\n\nIf the organization’s current process is inefficient or harmful, learning it deeply may anchor the AI to the wrong operating model.\n\n### Competing hypothesis 3 — explicit rules are sufficient\n\nIn highly standardized workflows, the AI may not need a broad apprenticeship.\n\nClear rules, constrained tools, testing, and monitoring may be enough.\n\n### Competing hypothesis 4 — humans cannot reliably explain local meaning\n\nPeople may provide inconsistent or self-serving explanations.\n\nObserved behavior, system data, and outcome evidence may be more useful than interviews.\n\n### Competing hypothesis 5 — responsibility should remain with system designers\n\nIt may be misleading to say the AI “learns responsibility.”\n\nResponsibility remains with the people and organization that define access, authority, monitoring, and recovery.\n\nThese competing hypotheses should remain open.\n\n## Falsifiers\n\nThe main hypothesis would be weakened if:\n\n- an apprenticeship period does not reduce meaningful errors or misunderstanding;\n- observation produces better imitation but not better judgment;\n- the AI becomes more confident without becoming more accurate;\n- people change behavior because they know they are being observed, making the learning unreliable;\n- the system learns dominant narratives and ignores weaker stakeholders;\n- bounded pilots with explicit rules outperform apprenticeship;\n- recovery quality does not improve;\n- the cost and privacy burden exceed the operational benefit;\n- the workflow changes too quickly for the learned context to remain useful.\n\n## Evidence needed\n\nThe next step is not to build a universal System Apprenticeship Protocol.\n\nThe next step is to compare bounded learning approaches in real workflows.\n\nUseful evidence would include:\n\n### Workflow selection\n\nChoose a recurring workflow with:\n\n- visible handoffs;\n- meaningful exceptions;\n- moderate consequence;\n- available human review;\n- clear recovery.\n\nAvoid starting with:\n\n- irreversible high-stakes actions;\n- disciplinary decisions;\n- legal determinations;\n- clinical decisions;\n- hidden employee monitoring.\n\n### Baseline\n\nDocument:\n\n- current workflow;\n- formal process;\n- actual exceptions;\n- recurring failures;\n- ownership;\n- evidence gaps;\n- recovery time.\n\n### Apprenticeship behavior\n\nAllow the AI to:\n\n- observe permitted records;\n- ask bounded questions;\n- propose pathway maps;\n- identify uncertainty;\n- receive corrections;\n- maintain an auditable record of what changed in its interpretation.\n\n### Comparison\n\nCompare with:\n\n- rule-only automation;\n- direct recommender deployment;\n- human-only workflow;\n- limited pilot without contextual learning.\n\n### Measures\n\nPossible measures include:\n\n- missing-context detection;\n- quality of clarification questions;\n- false confidence;\n- recommendation quality;\n- appropriate escalation;\n- override rate;\n- recovery time;\n- human trust calibration;\n- perceived surveillance;\n- stakeholder disagreement surfaced;\n- whether repeated corrections improve later performance.\n\n## Human outcome under examination\n\nThis essay is not only about AI accuracy.\n\nIt also asks what happens to humans and organizations when AI learns through prolonged observation.\n\nPossible human outcomes include:\n\n- greater shared understanding;\n- clearer ownership;\n- reduced repetitive explanation;\n- improved decision visibility;\n- increased surveillance pressure;\n- reduced psychological safety;\n- overreliance on AI interpretation;\n- erosion of informal human judgment;\n- stronger or weaker ability to challenge the system.\n\nThe apprenticeship should therefore be evaluated on both:\n\n> **what the AI learns**\n> \n> \n> and\n> \n> **what the learning process does to the people being observed.**\n> \n\n## Relationship to Evidence-Centered AI\n\nThe Evidence-Centered AI hypothesis asks:\n\n> Can AI help people develop better judgment when evidence remains inspectable?\n> \n\nAI Apprenticeship asks an earlier system question:\n\n> Before AI advises or acts, how does it learn which evidence, meanings, boundaries, and consequences matter in this environment?\n> \n\nThe two directions connect but should not be collapsed.\n\nEvidence-Centered AI concerns how the system supports a human decision.\n\nAI Apprenticeship concerns how the AI earns enough contextual understanding to participate in the decision pathway at all.\n\n## Relationship to Pathway Lens\n\nPathway Lens may help examine how an AI output moves from:\n\n> observation\n> \n> \n> → interpretation\n> \n> → recommendation\n> \n> → reliance\n> \n> → record\n> \n> → action\n> \n> → consequence\n> \n> → feedback.\n> \n\nThe lens is useful when authority increases along that route.\n\nIt does not prove that apprenticeship is necessary.\n\nThe hypothesis must be tested through workflow evidence.\n\n## Working propositions\n\nThese remain provisional:\n\n- Action authority should not grow faster than contextual understanding.\n- A system should learn local meaning before treating local data as obvious.\n- Observation without privacy and power boundaries can become surveillance.\n- Learning the current workflow does not make the current workflow legitimate.\n- Broader authority requires stronger evidence, observability, and recovery.\n- Some AI systems should remain observers or recommenders permanently.\n- The organization remains responsible for what the AI is allowed to learn and do.\n- An AI apprenticeship is useful only if it improves both operational understanding and human conditions of responsibility.\n\n## Open questions\n\n- Which workflows benefit most from apprenticeship?\n- How long should an apprenticeship last?\n- Who decides that the AI has learned enough?\n- What evidence justifies movement from observer to recommender?\n- How should conflicting stakeholder explanations be represented?\n- What information should never enter the AI’s learning context?\n- Can the AI forget outdated local practices?\n- How should the system respond when policy and operational reality conflict?\n- Can employees challenge the AI’s interpretation?\n- Who owns correction when the AI learns the wrong lesson?\n- How should organizational change update or invalidate prior learning?\n- Does apprenticeship increase human capability—or make the organization more dependent on AI-mediated understanding?\n\n## Current status\n\nThis page preserves a working hypothesis:\n\n> In recurring and consequential workflows, AI may need supervised inquiry and contextual learning before receiving broader authority.\n> \n\nIt does not yet establish:\n\n- a universal development path;\n- a standard duration;\n- a validated authority ladder;\n- a general deployment protocol;\n- that apprenticeship is superior to constrained automation;\n- that observing a workflow is ethically acceptable by default.\n\n## Next step\n\nThe next step is a bounded comparative study.\n\nSelect one recurring workflow.\n\nCompare:\n\n- direct AI recommendation;\n- rule-constrained automation;\n- supervised apprenticeship;\n- human-only operation.\n\nMeasure not only task performance, but also:\n\n- context understanding;\n- appropriate escalation;\n- false confidence;\n- recovery;\n- surveillance burden;\n- human ability to challenge the system.\n\n> **Before AI becomes an actor, the research question is not only what it can do.\nIt is what the system has allowed it to understand—and whether that learning process is safe for the humans inside the system.**\n>"
  },
  "/work/zalopay-smes-when-paid-not-done": {
    "assets": [],
    "body": "> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public product signals, SME workflow observation, and operational inference\n**Last updated:** July 2026\n**Boundary:** An outside-in hypothesis with no access to ZaloPay’s internal roadmap, merchant data, or operating model.\n> \n\n## Reading Route\n\n**Quick orientation:** Observation → Share of Operations → Practical question\n\n**Concept logic:** Work after payment → Pathway Lens read → operating boundary\n\n**Critical review:** Drift / boundary / governance notes → dependency and permission questions\n\nOriginal LinkedIn post: [Part 1 — My Thesis About the Pattern of Operations: Case Study #1 — ZaloPay & SMEs](https://www.linkedin.com/posts/yunero1206_part-1-my-thesis-about-the-pattern-of-operations-activity-7467241511831810048-nKNH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACt8jYcBICbiEUj4-7vV-Zyfv_Er2TbIssg)\n\n\n<diagram-card title=\"d1c784d3-7486-4349-9b02-acd031099b7d.png\" driveid=\"1WEjVyZBFnMMB-GVTlEMZFD6P1ZzmujCN\" caption=\"d1c784d3-7486-4349-9b02-acd031099b7d.png\"></diagram-card>\n\n\n## Observation\n\nThis case began with a public signal: ZaloPay appeared to be moving closer to SMEs.\n\nAt first, the obvious interpretation was payment expansion. A payment wallet working with small merchants naturally brings up questions about QR adoption, merchant acceptance, settlement, transaction volume, and payment convenience. That reading made sense. ZaloPay is a payment app, and payment is the visible layer.\n\nBut the more I looked at the daily workflow of small merchants and household businesses in Vietnam, the more that explanation felt incomplete. The merchant’s problem did not seem to end at receiving money. In many cases, that was where another layer of work began.\n\nReceiving payment does not end the merchant’s work. It simply marks the point where another layer begins: matching orders, updating inventory, tracking cash flow, remembering returning customers, arranging delivery, following up, and making dozens of small decisions throughout the day. Much of that work still lives across notebooks, spreadsheets, chat groups, memory, and offline conversations.\n\nSo the question started to shift.\n\nAt first, the question seemed to be:\n\n> How can a payment platform help SMEs receive money more easily?\n> \n\nBut after mapping the merchant workflow, the better question became:\n\n> What operational problems do SMEs still face after payment succeeds?\n> \n\nThat was the moment the case became more interesting. Payment was still important, but it began to look less like the whole problem and more like the first visible signal in a much larger operating pathway.\n\nThat was when I realized I was no longer studying only a payment product. I was studying the work that begins after payment.\n\nA payment confirms that something happened. It does not automatically organize the business reality around that event. It does not tell the merchant whether the order was fulfilled, whether inventory changed, whether the customer should be remembered, whether cash flow is improving, or whether today’s sales pattern should affect tomorrow’s decision.\n\nThis led to the core observation of the case:\n\n> SMEs do not struggle only because they lack payment tools. Many operational challenges begin after money enters the business.\n> \n\nFrom there, ZaloPay became interesting not only as a payment app, but as a possible case for thinking about SME operations. If a platform already sits close to payment activity, it may also sit close to signals about orders, customers, cash flow, repeat behavior, inventory movement, and business rhythm.\n\nThe question is not whether every payment platform should become a full business operating system. That would be too simple. The more useful question is whether payment can become the entry point into a calmer operational layer for small merchants.\n\nThat realization led me to a different way of looking at platform businesses. Instead of asking only which feature a company owns, I started asking which part of people’s daily work flows through it.\n\nThis is where I started thinking about **Share of Operations**.\n\nMost platform questions focus on users, transactions, payment volume, or merchant adoption. Those metrics still matter. But for SME infrastructure, another question may be more revealing:\n\n> How much of a merchant’s daily operation flows through the platform?\n> \n\nA company that owns only one feature can be replaced. A company that becomes part of daily operations is harder to remove, not because the merchant is locked in, but because the system has become part of how the merchant works.\n\nA merchant can switch payment providers. A merchant can switch marketing channels. But if a system helps organize orders, customers, cash flow, inventory signals, and daily decisions, then it is no longer only a payment tool. It becomes part of the operating layer.\n\nThe broader lesson is that I no longer look at businesses only by asking what product they offer. I start by asking what people rely on to run their daily operations.\n\nAnd in this case, the question became:\n\n> Who becomes part of the merchant’s daily operating rhythm after payment succeeds?\n> \n\n## Pathway Lens read\n\nThe pathway is not simply **payment → settlement**. It can become:\n\n- payment signal → order record;\n- transaction history → cash-flow view;\n- merchant activity → business recommendation;\n- customer behavior → retention / loyalty workflow;\n- operational data → future system input.\n\nThe visible moment is payment success. The hidden pathway is the merchant work that begins after that moment: recording, matching, remembering, planning, correcting, and deciding.\n\n## Drift / boundary / governance notes\n\n- **Drift:** merchant reality may be reduced to payment data if inventory, labor, informal credit, family operations, offline orders, seasonal demand, or supplier constraints are missing.\n- **Boundary:** payment output can become business advice, business record, credit signal, or platform dependency.\n- **Evidence:** transaction source, merchant action, recommendation basis, record update, and downstream effect should remain reconstructable.\n- **Authority:** ZaloPay should not silently move from payment processor to business operator without clear permission boundaries.\n- **Recovery:** wrong recommendations should be reversible, explainable, and correctable before they affect credit, cash flow, or merchant trust.\n\n## Practical question\n\nCan a local payment platform become a calm commerce infrastructure layer without turning small merchants into dependent data subjects?"
  },
  "/work/metub-creator-economy": {
    "assets": [],
    "body": "### From Share of Operations to Share of Stability\n\n> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public creator/fan journey signals, public company signals, and operational inference\n**Last updated:** August 2026\n**Boundary:** This is not a description of METUB’s internal strategy, roadmap, metrics, or operating model.\n> \n\n---\n\n## Research question\n\n> **What kind of operating infrastructure do creators need when creating becomes a business—and what responsibility does a platform inherit when more of that operation flows through it?**\n> \n\n## Origin of the inquiry\n\nThis started while I was mapping creator and fan journeys across memberships, creator websites, content access, orders, payments, and support. A fan could move from membership to payment, from payment to order, or from community to support, while identity, entitlement, payment context, order history, support records, and relationship history did not necessarily move with them. From outside, it looked like one ecosystem; operationally, the state appeared distributed.\n\nMy first interpretation was fan-side fragmentation. Following the same dependencies back to the creator side made the question wider. If a fan journey already needs coordination across identity, entitlement, commerce, payment, and support, what happens when the creator is also carrying brand commitments, approvals, livestreams, settlement, fulfilment, reporting, rights, and audience expectations?\n\nPublic signals around creator-economy companies include work across operations, commerce, partnerships, analytics, livestream, strategy, and business support. That does not prove a specific company is building an integrated creator operating system. It was enough to make the operating layer worth inspecting.\n\n> **What kind of operating infrastructure starts to matter when creating becomes recurring commercial work?**\n> \n\n## When creator work becomes operating work\n\nOnce several commitments are live at the same time, the job is no longer only to publish content. A creator may have to keep campaign terms and approvals straight, deliver a livestream, track affiliate or store activity, wait for settlement, handle reporting, respect rights and platform rules, and still respond when a fan or customer has a problem.\n\nThe useful part of that list is not its length. It is the way one failure can spill into another area: an unclear approval can become a public claim problem; a fulfilment issue can become a support burden; a delayed payment can interrupt the creator’s ability to keep working; a rights mistake can become a takedown or relationship dispute.\n\nThat gave me a more specific question than “how should creator platforms grow?”: which parts of recurring creator work become easier to coordinate when they move through one platform, and which new dependencies appear at the same time?\n\n## A first working idea: Share of Operations\n\nIf more recurring activities pass through one platform, the value can come from coordination and continuity, not only distribution or monetization. Onboarding, campaign coordination, commerce, livestream operations, settlement, reporting, fan entitlement, support, compliance records, and business history can start to share context instead of being rebuilt in separate places.\n\nThe switching cost in that situation is not only technical. A creator may be able to open another tool tomorrow, while still needing to move unfinished commitments, payment context, partnership history, audience relationships, support records, and prior decisions. That is the mechanism I was trying to describe.\n\nI use **Share of Operations** as shorthand for one question:\n\n> **How much of the creator’s recurring business operation flows through the platform?**\n> \n\nThis is still a working concept, not a validated platform metric. Specialized tools may remain better for many jobs, and fragmentation can sometimes preserve flexibility rather than create unnecessary burden.\n\n## Where that idea starts to break\n\nShare of Operations helps explain why workflow concentration can reduce coordination cost and make a platform harder to replace. It misses something important, though: creator operations carry money, commitments, rights, reputation, and continuity alongside tasks.\n\nA brand brief can become a creator obligation, then an audience-facing claim. A delayed settlement can become a cash-flow problem. A rights mistake can become a takedown dispute. A livestream can be clipped and reframed after the original context is gone. The more of this activity passes through one platform, the closer that platform sits to the points where ordinary operating friction becomes a trust or recovery problem.\n\nThat is where the first idea stopped being enough for me. The useful question was no longer just how much work a platform could coordinate, but what should remain clear and recoverable when that coordination carries consequences.\n\n## A second working idea: Share of Stability\n\nI started using **Share of Stability** as shorthand for a second question:\n\n> **How much of the creator’s continuity, clarity, trust, and recovery capacity is strengthened by the platform?**\n> \n\nThis can show up in fairly boring mechanics: a clear payment status, an owner for an approval, a record of what was agreed, a way to correct an error, an escalation path when support stalls, or enough portability that leaving the platform does not erase business memory. Those mechanics matter more as the platform participates in more recurring work.\n\nThe working hypothesis is:\n\n> **As a platform takes greater Share of Operations, it may also inherit greater responsibility for the stability of the workflows it helps carry.**\n> \n\nI do not mean that the platform should control every creator decision or absorb every risk. In some cases that would create the opposite problem: more centralized authority, less autonomy, and harder appeals.\n\n## The trade-off\n\nDeeper integration can lower coordination cost, preserve history, and make recurring work easier to run. The same integration can concentrate dependency and make one failure affect more of the creator’s business at once.\n\nThat leaves a more useful test than “is integration good?”:\n\n> **Can a platform increase its Share of Operations without weakening the creator’s independent capacity, visibility, portability, and ability to recover?**\n> \n\nFor this inquiry, the areas I would watch are status clarity, ownership, evidence, payment visibility, correction, escalation, dispute handling, continuity, and recovery. The point is not to make the platform responsible for every consequence. It is to see whether deeper participation leaves the creator with a clearer operating position or simply a larger dependency.\n\n- Optional diagnostic — where does operating friction become consequence?\n    \n    I use Pathway Lens here only as a supporting check. A small internal input can travel through approval, execution, audience interpretation, payment, reputation, and later recovery.\n    \n    - Where does an internal task become an audience-facing claim?\n    - Where does a payment status become livelihood risk?\n    - What evidence remains when a disagreement occurs?\n    - Who can correct the pathway before the consequence is amplified?\n\n## What could disprove this\n\nThere are several credible explanations that would weaken or change the hypothesis.\n\n- Broad hiring may reflect normal company growth rather than movement toward creator operating infrastructure.\n- Creators may prefer specialized tools, and fragmentation may preserve useful flexibility.\n- Stability may come mainly from partnerships or services rather than product integration.\n- Creator needs may vary too widely for one operating model.\n- Stronger platform involvement may reduce autonomy even when coordination improves.\n- Share of Operations may increase retention without improving creator outcomes.\n\nAny of those could be true. The public signals I reviewed do not discriminate strongly enough between them yet.\n\n## Evidence I would need next\n\nThe next useful work is empirical rather than conceptual. I would want creator workflow maps across tools and platforms, recurring sources of coordination burden, payment and settlement friction, support and dispute journeys, rights and approval workflows, switching behavior, data portability, record continuity, and creator perceptions of operational stability.\n\nI would also want stronger public evidence for any company-specific direction before attaching this hypothesis to METUB itself. This page is an outside-in inquiry, not a description of METUB’s roadmap or operating model.\n\nThe point of collecting that evidence would be to answer narrower questions: which responsibilities actually move with deeper platform participation, which stay outside, and where integration improves the creator’s position versus simply increasing dependency.\n\n## Current status\n\nI still do not know whether **Share of Operations** and **Share of Stability** will turn out to be useful measures, or only useful ways to frame the problem. For now, they help separate two things that are easy to collapse: how much recurring work passes through a platform, and whether the creator becomes more capable of understanding, continuing, and recovering that work as a result.\n\nThis essay does not claim that either concept is validated, that METUB is pursuing this operating model, or that one platform should control the full creator workflow. The next step is evidence building: map real creator workflows, switching costs, payment and support failures, and see which responsibilities actually change as platform participation deepens.\n\nA few questions stay open for me:\n\n- Which creator operations should a platform own, connect, support, or deliberately leave outside?\n- What records and evidence need to remain portable?\n- At what point does useful integration become unhealthy dependency?\n- Which form of stability matters most in practice: income, workflow, payment, rights, audience trust, or recovery?\n- Does deeper integration strengthen creator independence, or only make leaving harder?\n\nThat is where the evidence stops for now."
  },
  "/work/momo-ai-paylater": {
    "assets": [],
    "body": "> **Type:** Research Essay\n**Stage:** Working Hypothesis\n**Evidence basis:** Public product context, consumer-finance pathway reasoning, and clearly labeled inference\n**Last updated:** July 2026\n**Boundary:** An outside-in hypothesis with no access to MoMo’s internal data, models, underwriting logic, or roadmap.\n> \n\n## Reading Route\n\n**Quick orientation:** Observation → Working thesis → Practical question\n\n**Product logic:** Conversion-first vs trust-first → Pathway Lens read → user outcome after approval\n\n**Critical review:** Drift / boundary / governance notes → affordability, authority, explanation, and recovery\n\nOriginal LinkedIn post: [Case Study #3: MoMo — AI PayLater: Conversion-First vs Trust-First](https://www.linkedin.com/posts/yunero1206_part-4-share-of-stability-trust-angle-activity-7470828786339741696-6E8j?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACt8jYcBICbiEUj4-7vV-Zyfv_Er2TbIssg)\n\n\n<diagram-card title=\"fce5e3cf-d08d-4783-af72-36132d671a18.png\" driveid=\"1-CpczXqsXAzQwgjn_7bbXHiAub-F4GEg\" caption=\"fce5e3cf-d08d-4783-af72-36132d671a18.png\"></diagram-card>\n\n\n## Observation\n\nThis case began while exploring how AI could fit into a consumer finance product inside a daily wallet environment.\n\nThe obvious reading was product growth. When AI appears in a payment or financial product context, the usual discussion quickly moves toward personalization, faster approval, smarter scoring, better recommendations, fraud detection, conversion, and smoother checkout. Those are important areas, and they are easy to understand from a product perspective.\n\nBut the more I looked at PayLater as a user pathway, the more that explanation felt incomplete.\n\nA PayLater approval can look like a clean product success. The user wants to buy something, the app offers PayLater, the user accepts, the merchant gets the conversion, and the platform records usage. From the outside, the pathway looks successful because the transaction happened.\n\nBut consumer finance does not end at approval.\n\nAfter the “yes,” the user still has to live with repayment. They still have to manage cash flow, future bills, emotional spending, repayment timing, possible regret, support issues, and trust in the wallet that helped them borrow.\n\nSo the question started to shift.\n\nAt first, the question seemed to be:\n\n> How can AI help PayLater approve users faster and increase conversion?\n> \n\nBut after looking at the financial pathway after approval, the better question became:\n\n> Can AI help users decide whether they should use PayLater at all?\n> \n\nThat was the moment the case became more interesting. Approval was still important, but it began to look less like the end of the product journey and more like the first visible signal in a much longer trust pathway.\n\nThat was when I realized I was no longer studying only a credit feature. I was studying the consequence that begins after the product says yes.\n\nA successful conversion does not automatically mean a successful financial outcome. It does not tell us whether the user can repay comfortably, whether the purchase created pressure, whether the recommendation matched the user’s real cash-flow situation, or whether the user will trust the product more after repayment.\n\nThis led to the core observation of the case:\n\n> A successful conversion is not always a successful financial outcome.\n> \n\nOr more sharply:\n\n> Risk begins after yes.\n> \n\n## Why this matters\n\nMost people frame PayLater as a credit product. The user wants to buy, the app offers PayLater, the user buys faster, the merchant gets conversion, and the platform monetizes. That pathway makes sense because it follows the visible moment of product success: approval and purchase.\n\nBut PayLater is not only a checkout option. It is a financial decision pathway. The product prompt does not simply change how the user pays. It can change when the user spends, how much they borrow, how they experience repayment, and whether they associate the wallet with help or pressure.\n\nThis matters especially for younger users. Traditional credit cards can feel distant and risky because of annual fees, hidden charges, cancellation friction, repayment pressure, and the habit of spending first and checking later. Embedded PayLater is different. If it sits inside a daily wallet app, the platform may already understand salary patterns, recurring bills, spending behavior, repayment habits, and cash-flow stress better than a traditional credit product used only occasionally.\n\nThat creates two very different pathways.\n\nIn the bad pathway, impulse purchase leads to easy PayLater, delayed pain, repayment stress, and lower trust. The product succeeds at checkout, but the user relationship weakens after the transaction.\n\nIn the better pathway, purchase intent leads to an AI context check, then to a recommendation to buy, delay, reduce the amount, or avoid PayLater. The user makes a better decision, and trust increases because the product protected the relationship instead of only pushing conversion.\n\nThe important point is not that PayLater is always harmful. The point is that the moment of approval does not tell the whole story. A product can create short-term growth while also creating long-term stress, repayment friction, customer regret, support burden, and lower trust.\n\n## Case question\n\nCan AI PayLater define success beyond conversion?\n\n## Working thesis\n\nThe strongest PayLater AI may not be the one that always increases approval. It may be the one users trust when it advises restraint.\n\nA useful system may sometimes say:\n\n> Do not buy this now.\n> \n\nOr:\n\n> Do not use PayLater for this purchase.\n> \n\nThat sounds counterintuitive if the product is measured only by conversion. But if the goal is long-term financial trust, restraint may be part of the value.\n\nThis is the difference between monetizing vulnerability and building financial trust infrastructure.\n\nA conversion-first PayLater system asks:\n\n> Can this user be approved?\n> \n\nA trust-first PayLater system asks:\n\n> Should this user use PayLater in this moment, under this financial context, for this type of purchase?\n> \n\nApproval measures whether the system can say yes. Trust measures whether that yes remains good after the transaction.\n\nThis is where AI becomes more interesting. AI should not only make the product faster, smoother, or more persuasive. It may also help the system understand context: salary timing, recurring bills, spending rhythm, repayment history, cash-flow stress, purchase type, and whether the user is likely to benefit from borrowing now.\n\nThe future of PayLater may not be bigger limits or faster approval. It may be smarter restraint.\n\nThe broader lesson is that I no longer look at financial products only by asking whether they increase adoption. I start by asking what happens to the user after the product succeeds.\n\nAnd in this case, the question became:\n\n> Who protects the user relationship after the product says yes?\n> \n\n## Pathway Lens read\n\nThe pathway is not simply **checkout moment → approval → purchase**. It may become:\n\n- checkout moment → AI context check;\n- payment option → recommendation;\n- recommendation → user financial action;\n- action → debt, budget pressure, or trust reinforcement;\n- repayment outcome → long-term relationship with wallet / credit product.\n\nThe visible moment is approval or conversion. The hidden pathway is repayment, stress, regret, support, trust, and the user’s future relationship with the platform.\n\nPathway Lens asks what approval can become. In this case, approval can become borrowing. Borrowing can become repayment pressure. Repayment pressure can become stress, support need, regret, or trust decline. A better recommendation can become restraint, better timing, or stronger long-term trust.\n\n## Drift / boundary / governance notes\n\n- **Drift:** conversion optimization may interpret user intent as purchase readiness while missing budget pressure, rent timing, recurring bills, emotional spending, or financial fragility.\n- **Boundary:** a payment suggestion can become credit behavior. A checkout option can become a financial decision pathway.\n- **Evidence:** user context, affordability signal, recommendation basis, user choice, and repayment outcome should be reconstructable.\n- **Authority:** AI should not nudge credit use without clear boundaries and user-facing explanation.\n- **Recovery:** users need repayment support, correction paths, and safe alternatives when context was misread.\n\n## Practical question\n\nCan AI credit products optimize for trust and stability, not only conversion?"
  },
  "/work/artist-fandom-page": {
    "assets": [],
    "body": "> **A fan relationship should not break across discovery, membership, commerce, ticketing, support, and community.**\n\n> **Type:** Concept · Concept Exploration\n**Stage:** Concept Exploration\n**Evidence basis:** Role analysis, creator commerce benchmarks, and fandom interaction patterns\n**Last updated:** August 2026\n**Boundary:** An early concept exploration—not an active platform implementation.\n\n---\n\n## Core Question\n\n> **How can fans discover artists, join official communities, receive benefits, buy products, attend events, get support, and return through one clearer relationship layer?**\n\n## Key Concept Pillars\n\n1. **Unified Fan Identity:** Connecting purchases, membership tiers, and event access under one verified identity.\n2. **Transparent Entitlement:** Clear visibility into active benefits, digital collectibles, and exclusive access without platform friction.\n3. **Integrated Commerce & Support:** Directly handling order tracking, ticket verification, and support escalations within the fandom surface."
  },
  "/work/zalo-scam-emergency-mode": {
    "assets": [],
    "body": "> **In a scam flow, the useful moment for product intervention may be only a few seconds before money moves. That is why this concept focuses less on long-form education and more on short, contextual actions before, during, and immediately after a risky transfer.**\n> \n\n> **Type:** Product Concept\n**Stage:** Working Hypothesis\n**Evidence basis:** Public scam patterns, payment-flow reasoning, and product inference\n**Last updated:** July 2026\n**Boundary:** A product hypothesis—not a fraud-classification standard, legal-advice system, or claim that risk signals establish wrongdoing.\n> \n\n## Reading Route\n\n**Quick orientation:** Context → Thesis → Product concept → One-line positioning\n\n**Experience logic:** Before transfer → During transfer → Post-transfer → Pathway lens\n\n**Critical review:** AI role → Success metrics → Risks and guardrails → Open questions\n\n---\n\n## Context\n\nVietnamese users increasingly face scam scenarios that happen inside high-pressure payment moments: fake sellers, urgent family impersonation, fake rewards, fake customer support, fake investment tasks, QR transfers, and social-engineered bank transfers.\n\nMost anti-scam experiences still behave like education tools: they explain what scams are, list warning signs, or ask users to read long guidance pages. That is useful for awareness, but it often appears too early, too late, or too far away from the actual decision point.\n\nThe critical moment is not when the user wants to learn about scams. It is when the user is about to send money, confirming a risky transfer, or trying to recover immediately after sending money.\n\n## Observation\n\nA scam is often not only an information problem. It is a timing, pressure, and workflow problem.\n\nUsers do not need a long AI explanation during a risky payment. They need a short intervention that changes the next action.\n\nTypical failure pattern:\n\n- The user is rushed, threatened, rewarded, or emotionally pressured.\n- The receiver is new, unknown, or not verified.\n- The payment is difficult to reverse once confirmed.\n- The user only realizes the risk after the money has already moved.\n- The product provides generic education instead of an action-first safety path.\n\n## Thesis\n\nAI anti-scam design should not be a chatbot that explains scams at length.\n\nIt should be a real-time payment safety layer that appears before, during, and immediately after risky transfers with short, contextual, action-first guidance.\n\nThe AI role is not to say: “Here is what fraud means.”\n\nThe AI role is to say: “Pause. This transfer has risk signals. Verify this before sending. If you already sent money, do these steps now.”\n\n## Product concept\n\n### 1. Before transfer — Payment Safety Signal\n\nWhen the user enters a receiver, QR code, bank account, or payment request with risk signals, the system shows a short safety prompt before the user commits.\n\nExample prompt:\n\n> Pause for 10 seconds. This receiver has no previous transaction history with you. Verify through another channel before sending money.\n> \n\nPossible triggers:\n\n- New receiver with no previous history.\n- Transfer to a recently added or unknown account.\n- Suspicious payment content such as deposit, reward, urgent support, investment task, verification fee, or account unlock.\n- User arrives from a link, QR code, or chat context that resembles known scam patterns.\n- High-value transfer compared with the user's normal behavior.\n\n### 2. During transfer — Protective friction\n\nAt confirmation, the product should introduce minimal friction for high-risk cases.\n\nExample prompt:\n\n> You are sending money to a new receiver. If this is for a deposit, prize, emergency request, investment task, account unlock, or online seller, verify the receiver independently before continuing.\n> \n\nThe goal is not to block every risky transaction. The goal is to slow down irreversible decisions when the pattern looks risky.\n\n### 3. Immediately after transfer — Post-Transfer Safety Coach\n\nIf the user suspects fraud after sending money, the AI should switch into emergency mode.\n\nExample prompt:\n\n> Already sent money? Act now.\n> \n\n> 1. Save the transfer receipt.\n> \n\n> 2. Do not delete messages, phone numbers, links, QR codes, or account details.\n> \n\n> 3. Contact your bank immediately and request transaction tracing or temporary support if possible.\n> \n\n> 4. Report the suspicious account or chat.\n> \n\n> 5. Prepare a report with time, amount, receiver account, transaction content, and evidence.\n> \n\nThis is not a legal-advice bot. It is an evidence-preservation and next-step guidance layer.\n\n## Pathway lens\n\nThe risk pathway does not start when money is lost. It forms across multiple small steps:\n\n1. Scam message or payment request.\n2. Social pressure or urgency.\n3. Receiver entry or QR scan.\n4. Transfer confirmation.\n5. Money movement.\n6. User realization.\n7. Evidence collection and reporting.\n\nMost products intervene after step 5 or 6. The stronger design is to intervene at steps 3 and 4, then provide emergency guidance at step 6.\n\nThe product question becomes:\n\n> Where can the system add a small safety intervention before the consequence becomes irreversible?\n> \n\n## AI role\n\nAI should be used as a contextual risk translator, not as a long-form explainer.\n\nPotential AI tasks:\n\n- Classify payment context into low, medium, or high-risk patterns.\n- Detect urgency, secrecy, impersonation, reward, deposit, task, or account-unlock language.\n- Translate risk into short user-facing warnings.\n- Generate next-best-action guidance based on whether the user is pre-transfer, mid-transfer, or post-transfer.\n- Summarize evidence into a structured report format for bank or platform support.\n\nAI should not overclaim certainty. The safer wording is:\n\n> This transaction shows risk signals.\n> \n\nNot:\n\n> This is definitely a scam.\n> \n\n## Experience principles\n\n- Short over smart-sounding.\n- Action over explanation.\n- Timed intervention over static education.\n- Friction only when risk is meaningful.\n- Preserve evidence before giving generic advice.\n- Give the user one next step, not a lecture.\n\n## Example safety copy\n\n### Pre-transfer\n\n> This receiver is new. Pause and verify independently before sending.\n> \n\n### Confirmation screen\n\n> This transfer may be difficult to reverse. Continue only if you have verified the receiver outside this chat.\n> \n\n### Post-transfer\n\n> Save evidence first. Then contact your bank. Do not delete messages or payment details.\n> \n\n## Why it matters\n\nPayment safety is not only a fraud-detection problem. It is a user-decision design problem.\n\nA small, well-timed warning can be more useful than a long AI answer because the user is under pressure and near an irreversible action.\n\nFor Zalo/ZaloPay-style ecosystems, this case connects payment, chat context, identity trust, reporting, and civic safety into one product layer.\n\n## Success metrics\n\nPossible metrics:\n\n- Reduction in suspicious transfers completed after warning.\n- Number of users who pause or review receiver details.\n- Report completion rate after suspected scam.\n- Evidence completeness in reported cases.\n- False-positive complaint rate.\n- User trust score after safety intervention.\n- Time from suspected scam to first protective action.\n\n## Risks and guardrails\n\n- Over-warning may create fatigue.\n- Wrongly labeling a transaction as scam can damage trust.\n- AI should not provide legal certainty or accuse a receiver without evidence.\n- Sensitive scam reports should protect user privacy.\n- The system should be transparent that it detects risk signals, not absolute truth.\n\n## Open questions\n\n- Which signals are strong enough to trigger friction without annoying users?\n- Should warnings be different for bank transfer, wallet transfer, QR payment, and marketplace payment?\n- How much chat context can be used safely and privately?\n- When should the system escalate from warning to temporary hold, support flow, or manual review?\n- How can post-transfer evidence collection be standardized for bank/platform support?\n\n## One-line positioning\n\nA payment-safety layer that helps the user pause before a risky transfer, preserve evidence after it, and move quickly into the next protective action."
  },
  "/work/pathway-lens-operational-cycles": {
    "assets": [],
    "body": "> **An AI output is rarely the consequence. The consequence appears after someone trusts it, stores it, reuses it, or lets it change a real workflow.**\n> \n\nResearch lens · Working model · Used in case analysis, stress tests, and operational review\n\nPathway Lens is the working lens I use to trace that movement from output to reliance, record, action, scale, memory, or real-world consequence. It is not a universal AI-risk framework or a substitute for legal, technical, regulatory, or safety review.\n\n## Core question\n\n> **What is this AI output, signal, recommendation, or action allowed to become?**\n> \n\nThe same output may be low-risk as a private draft and high-impact when it becomes an external message, system-of-record entry, decision input, API call, production change, public claim, transaction, or future system memory.\n\n## How I use the lens\n\n1. **Name the output** — What was produced, inferred, recommended, or triggered?\n2. **Trace the pathway** — Who or what may trust, reuse, store, scale, or act on it?\n3. **Mark the boundary** — Where does it become durable, actionable, authority-bearing, amplified, or difficult to reverse?\n4. **Test the consequence** — What evidence, ownership, containment, correction, and recovery are available?\n\n## Supporting tools\n\n<aside>\n↳\n\n**01 / Review the pathway**\n\n[Pathway Governance Starter Kit](https://app.notion.com/p/Pathway-Governance-Starter-Kit-37d6210cf1c7801ea860dde9470ded0a?pvs=21)\n\nTen questions before an AI pathway enters real workflows, records, tools, or transactions.\n\n</aside>\n\n<aside>\n↳\n\n**02 / Place the controls**\n\n[Practical Boundary Controls](https://app.notion.com/p/Practical-Boundary-Controls-Note-3866210cf1c7816e8628f3611d4c94b9?pvs=21)\n\nIdentify where the pathway must remain visible, slowable, stoppable, and recoverable.\n\n</aside>\n\n<aside>\n↳\n\n**03 / Learn and standardize**\n\n[From Pathways to Operational Standards](https://app.notion.com/p/From-Pathways-to-Operational-Standards-39f6210cf1c78128bf6ce687d5c80bbd?pvs=21)\n\nTurn recurring incidents and stress-test findings into reusable categories and review standards.\n\n</aside>\n\n<aside>\n↳\n\n**Related inquiry**\n\n[AI Apprenticeship — Before AI Becomes an Actor](https://app.notion.com/p/AI-Apprenticeship-Before-AI-Becomes-an-Actor-3916210cf1c781f59cfcd49d870b6800?pvs=21)\n\nThe current working hypothesis asks what AI should learn about mission, boundaries, evidence, exceptions, and recovery before it receives operational authority. It informs the lens but is not part of the 01–03 operating sequence.\n\nEarlier concept lineage: [System-Born AI — Inquiry Before Action](https://app.notion.com/p/System-Born-AI-Inquiry-Before-Action-Archived-Precursor-38a6210cf1c781df85a7c569811f3ea3?pvs=21), preserved as the precursor that led to the apprenticeship formulation.\n\n</aside>\n\n- Working paper and project history\n    \n    [Download Pathway Lens working paper](https://drive.google.com/file/d/1kwo1o-f0jO3ny9SVeXWw0gKVYatZWO_w/view?usp=sharing)\n    \n    This page was previously titled **Human–AI–System Evolution Framework v0.3**. That earlier cycle remains a foundation for how reality, interpretation, coordination, execution, amplification, and new reality interact.\n    \n    **Pathway Lens** narrows the working object: how an output, signal, recommendation, or agentic action becomes consequence.\n    \n\n## Figure suite\n\nThe figures below form the working visual vocabulary of the lens. They support investigation and discussion; they are not a compulsory sequence or a claim of universal coverage.\n\n**Figure 1. The Real AI Risk**  \n\n![1.png](1.png)\n\n**Figure 2. Human-AI-System Evolution Cycle**  \n\n![2.png](2.png)\n\n**Figure 3. Core Drift Types**  \n\n![3.png](3.png)\n\n**Figure 4. Reflexive and Dynamic Mechanisms**  \n\n![4.png](4.png)\n\n**Figure 5. Meaning, Translation, and Operational Legibility**  \n\n![5.png](5.png)\n\n**Figure 6. Output Pathway Ladder**  \n\n![6.png](6.png)\n\n**Figure 7. System Impact Diagnostic**  \n\n![7.png](7.png)\n\n**Figure 8. Proportionate Pathway Governance**  \n\n![8.png](8.png)\n\n**Figure 9. Pathway Evidence Chain**  \n\n![9.png](9.png)\n\n**Figure 10. Material Change and Trigger-Based Validation**  \n\n![10.png](10.png)\n\n**Figure 11. Authority Boundary and AAA**  \n\n![11.png](11.png)\n\n**Figure 12. Policy-Based Action Modes**  \n\n![12.png](12.png)\n\n**Figure 13. Recovery Architecture**  \n\n![13.png](13.png)\n\n**Figure 14. Governance Drift Monitoring**  \n\n![14.png](14.png)\n\n**Figure 15. Layered Responsibility Model**  \n\n![15.png](15.png)\n\n**Figure 16. AI-Side Support Conditions**  \n\n![16.png](16.png)\n\n**Figure 17. AI Starter Kit**  \n\n![17.png](17.png)\n\n**Figure 18. Case Pattern and Source-to-Practice Map**  \n\n![18.png](18.png)\n\n## 1. System Lens\n\nThe foundation cycle remains:\n\n**Reality → Interpretation → Shared Working / Meaningful Understanding → Coordination → Translation → Execution → Amplification → Outcome → New Reality**\n\nThis sequence is analytical, not literal. Real systems loop, overlap, and reinterpret. Humans, AI systems, organizations, and institutions repeatedly interpret reality, act on it, change it, and reinterpret the changed reality.\n\nThe system lens matters because AI output is rarely consequential by itself. It becomes consequential when it participates in a human, organizational, technical, legal, financial, or social pathway.\n\n## 2. Drift Lens\n\nDrift describes a gap between reality, interpretation, shared understanding, coordination, translation, execution, amplification, and the new reality produced by the system.\n\nDrift is not only model error. It may begin before a model is called, after an output is produced, or when operational reality changes faster than governance can update.\n\nCore drift types:\n\n1. **Reality / Input Boundary Drift** — the system receives an incomplete, outdated, distorted, over-narrow, over-broad, or poorly bounded reality-slice.\n2. **Interpretation Drift** — humans, AI systems, technical systems, or institutions interpret the same reality-slice differently.\n3. **Shared Understanding Drift** — actors appear to coordinate around the same reference but do not share enough meaning, context, or practical understanding to act responsibly.\n4. **Coordination Drift** — roles, responsibilities, authority, expectations, escalation paths, or handoffs diverge.\n5. **Translation Drift** — meaning changes as it is converted into prompts, fields, tickets, workflows, policies, API calls, code, dashboards, or rules.\n6. **Execution Drift** — output becomes action in a way that exceeds authority, evidence, context, or intended use.\n7. **Amplification Drift** — local output, action, claim, or interpretation is reused, copied, automated, publicized, scaled, or institutionalized beyond its original context.\n8. **Feedback / Reality Drift** — consequences change the reality that later humans, AI systems, or institutions interpret.\n\nDrift is not always harmful. It becomes risky when a system trusts it, stores it, scales it, acts on it, or cannot reverse it in time.\n\n## 3. Pathway Lens\n\nThe Pathway Lens checks what an AI output, signal, recommendation, or action is allowed to become.\n\nPathway is the route.  \n\nDrift is the distortion.  \n\nVariables explain the distortion.  \n\nGovernance responds to the distortion.\n\nExample output destinations:\n\n- Private draft or personal thinking aid\n- Internal note or low-risk summary\n- Internal recommendation or decision support\n- System-of-record entry or official documentation\n- External communication\n- Tool / API action or workflow trigger\n- Financial, legal, HR, medical, safety, or production consequence\n- Future system input, training data, retrieval source, or institutional memory\n\nThe same output can have different risk depending on the pathway it enters.\n\n## 4. Governance Lens\n\nGovernance should be proportionate to the pathway.\n\nThe governance lens asks:\n\n- What evidence exists?\n- Who or what has authority?\n- What action mode is allowed?\n- What recovery capacity exists?\n- What control capacity is needed?\n- What happens when the pathway drifts?\n\nHigh-impact pathways require stronger evidence, clearer authority, stricter action modes, stronger recovery, and more explicit control capacity.\n\n## 5. Evidence\n\nEvidence is not merely stored logs.\n\nEvidence is the ability to reconstruct the pathway: input, prompt, context, output, review, approval, tool call, record change, outcome, incident, and correction.\n\nFor multi-agent workflows, evidence should also reconstruct inter-agent causation, delegated tool calls, subagent permissions, and orchestrator ownership.\n\n## 6. Authority\n\nCapability is not authority.\n\nAn AI system or agent should not automatically inherit the full authority of the human who launched it.\n\nAuthority should be bounded through:\n\n- authentication: who or what is acting;\n- authorization: what it may do;\n- accountability: who answers when consequence occurs.\n\nAuthority boundaries matter most when output can become external communication, record change, transaction, production action, legal consequence, or future system input.\n\n## 7. Action Modes\n\nDifferent pathway conditions should trigger different action modes.\n\nPossible modes include:\n\n- observe;\n- draft;\n- recommend;\n- guide;\n- constrain;\n- require approval;\n- act under bounded conditions;\n- block or escalate.\n\nThe action mode should be chosen by pathway conditions, not by model confidence alone.\n\n## 8. Recovery\n\nA system is not governed just because a policy exists.\n\nIt is governed only if unsafe or incorrect action can be detected, stopped, contained, reconstructed, corrected, and responsibly restarted.\n\nRecovery includes:\n\n- detection;\n- containment;\n- stop / shutdown;\n- tracing the pathway;\n- correction or rollback;\n- communication with affected parties;\n- review;\n- restart approval.\n\nA kill switch is not recovery. Recovery is an architecture.\n\n## 9. Control Capacity\n\nControl Capacity is the ability of an AI-enabled pathway to detect, prevent, interrupt, contain, reconstruct, recover from, and safely restart after unsafe or unauthorized AI-enabled action.\n\nIt includes:\n\n- agent identity;\n- scoped permissions;\n- tool and data access boundaries;\n- monitoring coverage;\n- detection-to-response path;\n- evidence preservation;\n- rollback or correction capacity;\n- containment or shutdown path;\n- restart approval;\n- inter-agent causation logs.\n\nThis concept is a governance refinement, not a replacement for the pathway structure.\n\n## 10. AI-Side Support Conditions\n\nAI-side design can support pathway governance, but it does not replace human and institutional responsibility.\n\nUseful support conditions include:\n\n- scoped task design;\n- tool permission control;\n- context quality;\n- output structuring;\n- fallback / abstention;\n- monitoring hooks;\n- version / change control;\n- human review fit.\n\nThese conditions do not eliminate risk. They make the pathway more observable, constrainable, and recoverable.\n\n## 11. AI Starter Kit\n\nThe AI Starter Kit is a practical first-pass decision aid for users and teams deciding how to use AI responsibly.\n\nIt is included as an AI-assisted practical recommendation synthesis. It is consistent with common recommendations from major general-purpose AI assistants such as ChatGPT, Gemini, Claude, and DeepSeek when asked how users can avoid drifting away from their original goal while using AI.\n\nIt should not be treated as external scientific evidence unless the actual model outputs are preserved and cited separately.\n\nStarter questions:\n\n1. Do you need AI, or would a simpler rule, workflow, or software automation be enough?\n2. What happens if the output is wrong?\n3. Where does the output go?\n4. What controls are needed before it crosses a boundary?\n\n## 12. Pathway-Specific Case Patterns\n\n> **Scope boundary:** Patterns in this section are specific to pathways in which an AI output, signal, recommendation, or action becomes operational consequence. They are not entries in the general [Cross-Case Pattern Library](https://app.notion.com/p/Cross-Case-Pattern-Library-3a76210cf1c781af87c9c7c13136e133?pvs=21). Broader transfer requires separate contextual comparison and explicit promotion.\n> \n\nCase patterns should test whether the lens works in practical settings.\n\nUse this format:\n\n1. Pathway: where does the output go?\n2. Drift: where can distortion appear?\n3. Boundary: where does operational status change?\n4. Evidence: what must be reconstructable?\n5. Authority: who or what is allowed to act?\n6. Recovery: how can the system detect, contain, correct, or compensate?\n7. Practical solution: what should be designed or changed?\n\nExample cases:\n\n- customer communication;\n- system-of-record update;\n- financial transaction or scam prevention;\n- code agent or production change;\n- multi-agent workflow;\n- public narrative or authority signal.\n\n## 13. Working principles\n\n1. Do not govern every AI output equally. Govern the pathway the output is allowed to enter.\n2. Do not treat model confidence as authority.\n3. Do not treat logs as evidence unless the pathway can be reconstructed.\n4. Do not treat human-in-the-loop as meaningful unless the human has time, context, authority, and responsibility.\n5. Do not treat recovery as a button. Recovery requires containment, correction, communication, and restart governance.\n6. Do not let new concepts replace the pathway lens. Reality-slice, meaningful shared understanding, and anchor are diagnostic concepts, not the main pathway spine.\n\n## Status\n\nThis page is the updated Notion overview for **Pathway Lens**. It keeps the original Google Drive link while reframing the project away from a versioned framework and toward the current official working lens.\n\nFurther updates should be added as revision notes, source notes, case notes, or appendix updates, not as a replacement structure.\n\n- Underlying pages\n    \n    [System-Born AI — Inquiry Before Action · Archived Precursor](https://app.notion.com/p/System-Born-AI-Inquiry-Before-Action-Archived-Precursor-38a6210cf1c781df85a7c569811f3ea3?pvs=21)\n    \n    [Pathway Governance Starter Kit](https://app.notion.com/p/Pathway-Governance-Starter-Kit-37d6210cf1c7801ea860dde9470ded0a?pvs=21)\n    \n    [Practical Boundary Controls Note](https://app.notion.com/p/Practical-Boundary-Controls-Note-3866210cf1c7816e8628f3611d4c94b9?pvs=21)\n    \n    [From Pathways to Operational Standards](https://app.notion.com/p/From-Pathways-to-Operational-Standards-39f6210cf1c78128bf6ce687d5c80bbd?pvs=21)"
  }
};

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function editorialSlug(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function renderMarkdownTable(tableText) {
  const lines = tableText.trim().split("\n").filter(l => l.includes("|"));
  if (lines.length < 2) return tableText;

  const headerCells = lines[0].split("|").slice(1, -1).map(c => c.trim());
  const bodyRows = lines.slice(2).map(row => {
    return row.split("|").slice(1, -1).map(c => c.trim());
  });

  let html = '<div class="f-table-wrap"><table class="f-table"><thead><tr>';
  headerCells.forEach(h => {
    html += '<th>' + h + '</th>';
  });
  html += '</tr></thead><tbody>';

  bodyRows.forEach(row => {
    html += '<tr>';
    row.forEach(cell => {
      html += '<td>' + cell + '</td>';
    });
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  return html;
}

function renderEditorialNotion(markdown) {
  if (!markdown) return "";
  
  // 1. Custom <asset-bar> and <diagram-card>
  let html = markdown
    .replace(/<asset-bar>([\s\S]*?)<\/asset-bar>/g, (match, inner) => {
      return `<div class="f-asset-bar"><span class="f-asset-bar-title">📎 Tài liệu đính kèm:</span>${inner}</div>`;
    })
    .replace(/<diagram-card\s+title="([^"]*)"\s+driveid="([^"]*)"\s+caption="([^"]*)"><\/diagram-card>/g, (match, title, driveId, caption) => {
      return `<div class="f-diagram-card">
        <div class="f-diagram-header">
          <span>📊 ${escapeHtml(title)}</span>
          <button class="f-asset-btn f-asset-trigger" data-driveid="${driveId}" data-type="diagram" data-title="${escapeHtml(title)}" style="padding:4px 10px;font-size:11px;">🔍 Phóng to ↗</button>
        </div>
        <div class="f-diagram-body f-asset-trigger" data-driveid="${driveId}" data-type="diagram" data-title="${escapeHtml(title)}">
          <img src="https://drive.google.com/thumbnail?id=${driveId}&sz=w1600" alt="${escapeHtml(title)}" loading="lazy">
          <div class="f-diagram-hint"><span>🔍 Nhấp vào hình để mở toàn màn hình</span></div>
        </div>
        <div class="f-diagram-caption">${escapeHtml(caption)}</div>
      </div>`;
    });

  // 2. Notion Callouts / Asides
  html = html.replace(/<aside>([\s\S]*?)<\/aside>/g, (match, inner) => {
    return `<div class="f-callout">${inner.trim()}</div>`;
  });

  // 3. Markdown Tables
  html = html.replace(/(\|[^\n]+\|\n\|[\s\-:\|]+\|\n(\|[^\n]+\|\n?)+)/g, (match) => {
    return renderMarkdownTable(match);
  });

  // 4. Headings with Anchors
  html = html.replace(/^(#{1,4})\s+(.+)$/gm, (match, hashes, title) => {
    const level = hashes.length;
    const cleanTitle = title.trim();
    const id = editorialSlug(cleanTitle);
    return `<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${cleanTitle}</h${level}>`;
  });

  // 5. Blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // 6. Horizontal Rules
  html = html.replace(/^---$/gm, '<hr class="f-hr">');

  // 7. Details / Summaries
  html = html.replace(/<details><summary>(.*?)<\/summary>/g, '<details class="f-details"><summary>$1</summary><div class="f-details-content">');
  html = html.replace(/<\/details>/g, '</div></details>');

  // 8. Lists
  html = html.replace(/^- \[x\] (.+)$/gm, '<div class="f-bullet">☑ $1</div>');
  html = html.replace(/^- \[ \] (.+)$/gm, '<div class="f-bullet">☐ $1</div>');
  html = html.replace(/^[\*\-]\s+(.+)$/gm, '<div class="f-bullet">$1</div>');
  html = html.replace(/^(\d+)\.\s+(.+)$/gm, '<div class="f-numbered"><b>$1.</b> $2</div>');

  // 9. Paragraphs
  const lines = html.split(/\n\n+/);
  const formatted = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    if (trimmed.startsWith("<h") || trimmed.startsWith("<div") || trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<hr") || trimmed.startsWith("<details") || trimmed.startsWith("</details") ||
        trimmed.startsWith("<table") || trimmed.startsWith("<pre")) {
      return trimmed;
    }
    return `<p>${trimmed}</p>`;
  });

  return formatted.join("\n\n");
}

const siteCss = `
  :root {
    --cm: "CMU Serif", "Latin Modern Roman", "Computer Modern", Georgia, serif;
    --ui: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --navy: #13262f;
    --navy-soft: #1c3540;
    --copper: #c66336;
    --copper-dark: #9e391a;
    --mist: #dfe9e8;
    --paper: #f4f0e7;
    --paper-card: #ffffff;
    --ink: #172126;
    --muted: #5e6666;
    --line: #c8c9c2;
    --line-subtle: rgba(23, 33, 38, 0.14);
    --accent: #b84a2f;
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--cm);
    font-size: 17px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  a { color: inherit; }
  button, input, select { font-family: var(--ui); }
  :focus-visible { outline: 2px solid var(--copper); outline-offset: 4px; }
  
  .f-skip { position: fixed; left: 18px; top: -100px; z-index: 100; background: var(--navy); color: #fff; padding: 10px 16px; font-family: var(--ui); font-size: 0.8rem; font-weight: 700; }
  .f-skip:focus { top: 14px; }
  .f-wrap { width: min(calc(100% - 48px), 1160px); margin-inline: auto; }

  /* Header & Navigation */
  .f-header { position: sticky; top: 0; z-index: 50; background: rgba(244, 240, 231, 0.96); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--ink); }
  .f-nav { min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .f-brand { font-family: var(--cm); font-size: 1.15rem; font-weight: 700; text-decoration: none; color: var(--navy); }
  .f-brand span { margin-left: 10px; color: var(--muted); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
  .f-links { display: flex; align-items: center; gap: 28px; }
  .f-links a { font-family: var(--cm); font-size: 0.88rem; font-weight: 700; letter-spacing: 0.07em; text-decoration: none; text-transform: uppercase; color: var(--ink); transition: color 0.15s ease; }
  .f-links a[aria-current=page], .f-links a:hover { color: var(--copper); }

  /* Reading Progress Bar */
  #f-progress-bar { position: fixed; top: 0; left: 0; height: 3px; background: var(--copper); width: 0%; z-index: 100; transition: width 0.1s ease-out; }

  /* Hero Section */
  .f-home-cover { width: 100%; height: clamp(140px, 20vw, 260px); margin: 0; overflow: hidden; background: #eee7d8; border-bottom: 1px solid var(--ink); }
  .f-home-cover img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }
  
  .f-home-hero, .f-work-hero, .f-about-hero, .f-case-hero {
    position: relative;
    isolation: isolate;
    padding: 48px 0 44px;
    border-bottom: 1px solid var(--ink);
  }
  .f-home-hero:after, .f-work-hero:after, .f-about-hero:after, .f-case-hero:after {
    content: ""; position: absolute; z-index: -2; inset: 0 50%; width: 100vw; transform: translateX(-50%); background: var(--navy);
  }
  .f-home-hero h1, .f-work-hero h1, .f-about-hero h1, .f-case-hero h1 { color: #f7f3ea; margin: 0; font-weight: 600; line-height: 0.94; letter-spacing: -0.035em; }
  .f-home-hero h1 { font-size: clamp(3.2rem, 5.8vw, 5.2rem); }
  .f-work-hero h1, .f-about-hero h1 { font-size: clamp(2.8rem, 4.8vw, 4.2rem); line-height: 1.02; }
  .f-case-hero h1 { font-size: clamp(2.4rem, 4.5vw, 3.9rem); line-height: 1.05; }
  
  .f-home-grid { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr); gap: 48px 64px; align-items: end; }
  .f-home-name, .f-overline { display: block; margin-bottom: 14px; color: #e19768; font-size: 0.74rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; font-family: var(--ui); }
  .f-home-lede { margin: 18px 0 0; color: #e6eceb; font-size: clamp(1.06rem, 1.5vw, 1.26rem); line-height: 1.6; }
  .f-home-aside { border-top: 1px solid rgba(255, 255, 255, 0.35); padding-top: 16px; }
  .f-home-aside p { margin: 0; color: #e1e8e7; font-size: 0.95rem; line-height: 1.65; }
  .f-home-aside p + p { margin-top: 14px; }
  .f-text-link { color: #fff2e8; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }

  /* 2x2 Map Grid used for Research Modes & Selected Works */
  .f-home-modes-section { padding: 42px 0 46px; background: var(--mist); border-bottom: 1px solid var(--ink); }
  .f-home-works-section { padding: 42px 0 46px; background: var(--paper); border-bottom: 1px solid var(--ink); }
  
  .f-home-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 20px; }
  .f-home-section-head h2 { margin: 0; font-size: 1.65rem; font-weight: 700; letter-spacing: -0.02em; color: var(--navy); }
  .f-home-section-head p { max-width: 480px; margin: 0; color: #435155; font-size: 0.9rem; text-align: right; line-height: 1.55; }
  
  .f-map-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--ink); }
  .f-map-item {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 16px;
    min-height: 124px;
    padding: 22px 28px 22px 0;
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    color: inherit;
    transition: background-color 0.15s ease, padding-left 0.15s ease;
  }
  .f-map-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
  .f-map-item:hover { background: rgba(255, 255, 255, 0.45); }
  .f-map-count { color: var(--copper); font-size: 0.84rem; font-weight: 800; letter-spacing: 0.06em; font-family: var(--ui); margin-top: 2px; }
  .f-map-item h3 { margin: 0 0 6px; font-size: clamp(1.2rem, 1.7vw, 1.48rem); font-weight: 700; line-height: 1.2; color: var(--navy); transition: color 0.15s ease; }
  .f-map-item p { margin: 0; color: #445357; font-size: 0.88rem; line-height: 1.52; }
  .f-map-item:hover h3 { color: var(--copper); }
  
  .f-tag-pill { display: inline-block; padding: 2px 7px; background: rgba(19, 38, 47, 0.08); border: 1px solid rgba(19, 38, 47, 0.15); border-radius: 3px; font-family: var(--ui); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--navy); margin-bottom: 6px; }

  /* Work Library Page (/work) - Master Notion Layout */
  .f-work-hero p { margin: 14px 0 0; color: #dce5e4; font-size: 1.08rem; max-width: 780px; line-height: 1.6; }
  .f-work-quote-bar {
    background: #ffffff;
    border-bottom: 1px solid var(--ink);
    padding: 24px 0;
  }
  .f-work-quote-bar blockquote {
    margin: 0;
    font-size: 1.12rem;
    font-weight: 600;
    line-height: 1.65;
    color: var(--navy);
    border-left: 4px solid var(--copper);
    padding-left: 20px;
  }
  .f-work-meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-top: 14px;
    font-size: 0.82rem;
    color: var(--muted);
    font-family: var(--ui);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* Where to start Routes Box */
  .f-routes-section {
    background: var(--mist);
    border-bottom: 1px solid var(--ink);
    padding: 28px 0 32px;
  }
  .f-routes-section h2 {
    margin: 0 0 8px;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--navy);
  }
  .f-routes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 32px;
    margin-top: 16px;
  }
  .f-route-card {
    background: #ffffff;
    border: 1px solid var(--line);
    border-left: 4px solid var(--navy);
    border-radius: 4px;
    padding: 14px 18px;
    font-size: 0.9rem;
    line-height: 1.55;
  }
  .f-route-card strong {
    display: block;
    color: var(--navy);
    font-size: 0.98rem;
    margin-bottom: 4px;
  }
  .f-route-card a {
    color: var(--copper);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  /* Controls & Filter Bar */
  .f-work-controls { padding: 24px 0 16px; border-bottom: 1px solid var(--ink); display: flex; flex-direction: column; gap: 16px; }
  .f-search-row { display: flex; align-items: center; gap: 16px; }
  .f-search-box { position: relative; flex: 1; max-width: 540px; }
  .f-search-input {
    width: 100%;
    padding: 10px 36px 10px 14px;
    border: 1px solid var(--ink);
    background: #fff;
    font-family: var(--ui);
    font-size: 0.9rem;
    color: var(--ink);
    border-radius: 0;
  }
  .f-search-input:focus { outline: 2px solid var(--copper); }
  .f-search-clear { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); border: 0; background: transparent; cursor: pointer; color: var(--muted); font-weight: bold; font-size: 1.1rem; }

  .f-mode-nav { display: flex; align-items: center; gap: 18px; overflow-x: auto; padding-bottom: 8px; }
  .f-mode { flex: none; border: 0; border-bottom: 2px solid transparent; background: transparent; padding: 0 0 6px; color: var(--muted); font-family: var(--cm); font-size: 0.86rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; }
  .f-mode[aria-pressed=true] { border-color: var(--copper); color: var(--ink); }

  .f-results-bar { display: flex; justify-content: space-between; align-items: center; padding: 14px 0 8px; color: var(--muted); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }

  /* Work Catalog Items */
  .f-catalog-section { padding: 28px 0 36px; border-bottom: 1px solid var(--line); }
  .f-catalog-section:last-child { border-bottom: none; }
  .f-catalog-section[hidden] { display: none; }
  .f-section-head { margin-bottom: 14px; }
  .f-section-title { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; }
  .f-section-title h2 { margin: 0; font-size: 1.45rem; font-weight: 700; color: var(--navy); }
  .f-section-title span { color: var(--copper); font-size: 0.78rem; font-weight: 700; }
  .f-section-desc { margin: 0; color: var(--muted); font-size: 0.88rem; line-height: 1.5; max-width: 820px; }

  .f-title-grid { border-top: 1px solid var(--ink); margin-top: 12px; }
  .f-work-item {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
    gap: 24px;
    align-items: center;
    padding: 18px 12px;
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    color: inherit;
    transition: background-color 0.15s ease;
  }
  .f-work-item:hover { background: rgba(255, 255, 255, 0.65); }
  .f-work-item h3 { margin: 0 0 6px; font-size: 1.25rem; font-weight: 700; line-height: 1.18; letter-spacing: -0.015em; color: var(--navy); transition: color 0.15s ease; }
  .f-work-item .f-item-question { margin: 0 0 6px; color: #3b4240; font-size: 0.88rem; line-height: 1.5; }
  .f-work-item .f-item-tags { font-size: 0.74rem; color: var(--muted); font-family: var(--ui); line-height: 1.4; }
  .f-work-item .f-item-meta { text-align: right; font-size: 0.74rem; line-height: 1.5; color: var(--muted); }
  .f-work-item .f-item-meta b { display: block; color: var(--ink); font-weight: 700; font-family: var(--ui); font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; }
  .f-work-item:hover h3 { color: var(--copper); }
  .f-work-item[hidden] { display: none; }

  /* Case Detail Page (/work/[slug]) */
  .f-case-hero .f-crumb { color: #dce5e4; font-size: 0.76rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 20px; }
  .f-case-hero .f-crumb a { color: #fff1e6; text-decoration: none; }
  .f-case-hero .f-crumb span { margin: 0 6px; opacity: 0.6; }
  .f-case-dek { max-width: 820px; margin: 18px 0 0; color: #dce5e4; font-size: 1.15rem; line-height: 1.6; }
  
  .f-case-meta { background: #e7efee; border-bottom: 1px solid var(--ink); }
  .f-case-meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .f-meta-cell { padding: 14px 18px 15px 0; border-right: 1px solid var(--line); }
  .f-meta-cell:last-child { border-right: 0; }
  .f-meta-cell b { display: block; margin-bottom: 4px; color: var(--muted); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-family: var(--ui); }
  .f-meta-cell span { font-size: 0.86rem; line-height: 1.4; color: var(--ink); }

  .f-case-reading { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 64px; padding: 48px 0 80px; align-items: start; }
  
  /* Sticky TOC / Rail */
  .f-case-rail { position: sticky; top: 84px; max-height: calc(100vh - 100px); overflow-y: auto; padding-right: 12px; }
  .f-rail-title { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; font-family: var(--ui); }
  .f-toc-list { list-style: none; padding: 0; margin: 0 0 24px; display: flex; flex-direction: column; gap: 8px; border-left: 2px solid var(--line); }
  .f-toc-item { padding-left: 12px; }
  .f-toc-link { display: block; color: var(--muted); font-size: 0.82rem; line-height: 1.4; text-decoration: none; transition: color 0.15s ease; }
  .f-toc-link:hover, .f-toc-link.is-active { color: var(--copper); font-weight: 700; }
  .f-toc-item.level-3 { padding-left: 20px; font-size: 0.78rem; }
  
  .f-rail-actions { border-top: 1px solid var(--line); padding-top: 16px; display: flex; flex-direction: column; gap: 10px; }
  .f-rail-btn { display: inline-flex; align-items: center; justify-content: center; padding: 9px 12px; border: 1px solid var(--ink); background: var(--paper-card); font-size: 0.74rem; font-weight: 700; text-decoration: none; color: var(--ink); cursor: pointer; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--ui); }
  .f-rail-btn:hover { background: var(--navy); color: #fff; border-color: var(--navy); }

  /* Case Article Prose */
  .f-prose { min-width: 0; font-size: 1.04rem; line-height: 1.75; color: #232a2e; }
  .f-prose h2 { margin: 44px 0 16px; font-size: clamp(1.8rem, 2.8vw, 2.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.03em; color: var(--navy); position: relative; }
  .f-prose h2:first-child { margin-top: 0; }
  .f-prose h3 { margin: 32px 0 12px; font-size: 1.45rem; font-weight: 700; line-height: 1.2; color: var(--navy); position: relative; }
  .f-prose h4 { margin: 24px 0 10px; font-size: 1.12rem; font-weight: 700; }
  .f-prose p { margin: 0 0 16px; }
  .f-anchor { position: absolute; left: -22px; color: var(--line); text-decoration: none; font-weight: 400; opacity: 0; transition: opacity 0.15s ease; }
  .f-prose h2:hover .f-anchor, .f-prose h3:hover .f-anchor { opacity: 1; color: var(--copper); }
  
  .f-prose blockquote { margin: 24px 0; padding: 18px 24px; border-left: 4px solid var(--copper); background: var(--paper-card); font-size: 1.12rem; font-weight: 600; line-height: 1.6; color: #1c272a; }
  .f-prose hr.f-hr { margin: 40px 0; border: 0; border-top: 1px solid var(--line); }
  .f-bullet { position: relative; padding-left: 24px; margin: 8px 0; }
  .f-bullet:before { content: "—"; position: absolute; left: 0; color: var(--copper); font-weight: 700; }
  .f-numbered { padding: 8px 0; border-bottom: 1px solid var(--line-subtle); }

  /* Callouts & Tables */
  .f-callout { margin: 24px 0; padding: 18px 22px; background: #ffffff; border: 1px solid var(--line); border-left: 4px solid var(--navy); border-radius: 4px; font-size: 0.96rem; line-height: 1.65; }
  .f-table-wrap { width: 100%; overflow-x: auto; margin: 28px 0; }
  .f-table { width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid var(--ink); font-size: 0.88rem; line-height: 1.5; }
  .f-table th { background: var(--navy); color: #ffffff; text-align: left; padding: 10px 14px; font-family: var(--ui); font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid var(--ink); }
  .f-table td { padding: 10px 14px; border: 1px solid var(--line); vertical-align: top; }
  .f-table tr:nth-child(even) td { background: #f9f8f5; }

  /* Details Box */
  .f-details { margin: 20px 0; border: 1px solid var(--line); background: var(--paper-card); padding: 14px 18px; border-radius: 4px; }
  .f-details summary { font-weight: 700; cursor: pointer; color: var(--navy); }
  .f-details-content { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line-subtle); font-size: 0.94rem; }

  /* Asset Bar */
  .f-asset-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin: 24px 0 36px;
    padding: 16px 20px;
    background: #ffffff;
    border: 1px solid var(--ink);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(19, 38, 47, 0.06);
  }
  .f-asset-bar-title {
    font-family: var(--ui);
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-right: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .f-asset-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 6px;
    font-family: var(--ui);
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid var(--ink);
    background: var(--paper);
    color: var(--navy);
  }
  .f-asset-btn:hover {
    background: var(--navy);
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(19,38,47,0.15);
  }
  .f-asset-btn.primary {
    background: var(--navy);
    color: #ffffff;
    border-color: var(--navy);
  }
  .f-asset-btn.primary:hover {
    background: var(--copper);
    border-color: var(--copper);
  }
  .f-asset-btn.accent {
    background: var(--copper);
    color: #ffffff;
    border-color: var(--copper);
  }
  .f-asset-btn.accent:hover {
    background: #9e391a;
  }

  /* Inline Diagram Card */
  .f-diagram-card {
    margin: 36px 0;
    background: #ffffff;
    border: 1px solid var(--ink);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(19,38,47,0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .f-diagram-card:hover {
    box-shadow: 0 10px 28px rgba(19,38,47,0.12);
  }
  .f-diagram-header {
    padding: 12px 18px;
    background: var(--navy);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--ui);
    font-size: 12.5px;
    font-weight: 700;
  }
  .f-diagram-body {
    padding: 16px;
    text-align: center;
    background: #fafaf8;
    position: relative;
    cursor: zoom-in;
  }
  .f-diagram-body img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    transition: opacity 0.2s ease;
  }
  .f-diagram-body:hover img {
    opacity: 0.95;
  }
  .f-diagram-hint {
    margin-top: 8px;
    font-family: var(--ui);
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .f-diagram-caption {
    padding: 12px 18px;
    font-size: 13.5px;
    color: var(--muted);
    font-style: italic;
    background: #ffffff;
    border-top: 1px solid var(--line-subtle);
  }

  /* Dialog Asset Modal */
  dialog.f-asset-modal {
    width: 94vw;
    max-width: 1280px;
    height: 90vh;
    max-height: 920px;
    padding: 0;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    background: #0f172a;
    color: #f8fafc;
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  dialog.f-asset-modal::backdrop {
    background: rgba(10, 18, 26, 0.84);
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
  .f-modal-topbar {
    height: 54px;
    min-height: 54px;
    padding: 0 18px;
    background: #1e293b;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .f-modal-title-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  .f-modal-badge {
    padding: 4px 9px;
    border-radius: 4px;
    background: rgba(59, 130, 246, 0.25);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.4);
    font-family: var(--ui);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    flex-shrink: 0;
  }
  .f-modal-title {
    font-family: var(--ui);
    font-size: 14px;
    font-weight: 700;
    color: #f1f5f9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .f-modal-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .f-modal-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 6px;
    color: #cbd5e1;
    font-family: var(--ui);
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .f-modal-btn:hover {
    background: rgba(255,255,255,0.2);
    color: #ffffff;
  }
  .f-modal-btn.close {
    background: rgba(239, 68, 68, 0.18);
    border-color: rgba(239, 68, 68, 0.35);
    color: #fca5a5;
  }
  .f-modal-btn.close:hover {
    background: rgba(239, 68, 68, 0.35);
    color: #ffffff;
  }
  .f-modal-content {
    flex: 1;
    position: relative;
    background: #090d16;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .f-modal-frame {
    width: 100%;
    height: 100%;
    border: 0;
    background: #ffffff;
  }
  .f-modal-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 16px;
  }
  .f-modal-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #94a3b8;
    font-family: var(--ui);
    font-size: 13px;
    pointer-events: none;
  }
  .f-spin-circle {
    width: 32px;
    height: 32px;
    border: 3px solid rgba(255,255,255,0.15);
    border-top-color: #38bdf8;
    border-radius: 50%;
    animation: f-spin 0.8s linear infinite;
  }
  @keyframes f-spin { to { transform: rotate(360deg); } }

  /* Responsive Queries */
  @media (max-width: 920px) {
    .f-home-grid, .f-routes-grid, .f-case-reading { grid-template-columns: 1fr; gap: 36px; }
    .f-case-meta-grid { grid-template-columns: 1fr 1fr; }
    .f-meta-cell:nth-child(2) { border-right: 0; }
    .f-meta-cell:nth-child(3) { border-top: 1px solid var(--line); }
    .f-meta-cell:nth-child(4) { border-top: 1px solid var(--line); border-right: 0; }
    .f-case-rail { position: static; max-height: none; }
    .f-work-item { grid-template-columns: 1fr; gap: 8px; }
    .f-work-item .f-item-meta { text-align: left; }
  }
  @media (max-width: 640px) {
    .f-map-grid { grid-template-columns: 1fr; }
    .f-map-item:nth-child(even) { padding-left: 0; border-left: 0; }
    .f-case-meta-grid { grid-template-columns: 1fr; }
    .f-meta-cell { border-right: 0; border-bottom: 1px solid var(--line); }
    .f-search-row { flex-direction: column; align-items: stretch; }
    .f-search-box { max-width: 100%; }
    .f-work-meta-row { flex-direction: column; align-items: flex-start; gap: 6px; }
  }
`;

function layoutHead(title, description) {
  return `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#13262f">
    <meta name="robots" content="index, follow">
    <title>${escapeHtml(title)}</title>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
    <link rel="preconnect" href="https://drive.google.com" crossorigin>
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/computer-modern@0.1.3/cmu-serif.css">
    <style>${siteCss}</style>
  </head>`;
}

function layoutHeader(active = "") {
  return `<header class="f-header">
    <div id="f-progress-bar"></div>
    <nav class="f-nav f-wrap" aria-label="Primary navigation">
      <a class="f-brand" href="/">Phạm Thanh Phú <span>Work & Research</span></a>
      <div class="f-links">
        <a href="/work"${active === "work" ? ' aria-current="page"' : ""}>Work</a>
        <a href="/apps/explainable-trust"${active === "app" ? ' aria-current="page"' : ""}>Explainable Trust ⚡</a>
        <a href="/about"${active === "about" ? ' aria-current="page"' : ""}>About</a>
      </div>
    </nav>
  </header>`;
}

function layoutFooter(label = "Ho Chi Minh City · 2026") {
  return `<footer class="f-footer">
    <div class="f-wrap f-footer-row">
      <span>Phạm Thanh Phú · ${escapeHtml(label)}</span>
      <span><a href="mailto:phamthanhphu97@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="/work">Work Archive</a></span>
    </div>
  </footer>`;
}

function homePage() {
  const modesHtml = finalModes.map((mode) => {
    return `<a class="f-map-item" href="/work?mode=${mode.id}">
      <span class="f-map-count">${mode.num}</span>
      <div>
        <h3>${escapeHtml(mode.label)}</h3>
        <p>${escapeHtml(mode.description)}</p>
      </div>
    </a>`;
  }).join("");

  const selectedWorks = [
    {
      num: "01",
      path: "/work/shopee-account-restrictions",
      tag: "Product Operations · Marketplaces",
      title: "Shopee Account Restrictions",
      desc: "When a marketplace restricts an account, what minimum resolution pathway must remain visible so customers can understand, preserve assets, contest, and recover?"
    },
    {
      num: "02",
      path: "/work/vinamilk-trusted-nutrition",
      tag: "Product Discovery · Cold-Chain Operations",
      title: "Vinamilk — Trusted Nutrition & Delivery",
      desc: "What trusted nutrition proposition deserves to exist, and how can its valued attributes survive everyday cold-chain delivery, scale, and allocation governance?"
    },
    {
      num: "03",
      path: "/work/datvietvac-fandom-cards",
      tag: "Merchandise Growth · Gated Collectibles",
      title: "DatVietVAC Fandom Cards",
      desc: "How an official 12-card fandom pack turns fleeting attention into an everyday collectible social object, secondary market liquidity, and sustained IP value."
    },
    {
      num: "04",
      path: "/work/pathway-lens-operational-cycles",
      tag: "AI Drift · Decision Governance · Live App",
      title: "Pathway Lens & Explainable Trust",
      desc: "When automated AI systems drift or fail, how to reconstruct the T0 baseline, verify evidence provenance, and execute a structured 10-step recovery cycle."
    }
  ];

  const worksHtml = selectedWorks.map(item => {
    return `<a class="f-map-item" href="${item.path}">
      <span class="f-map-count">${item.num}</span>
      <div>
        <span class="f-tag-pill">${item.tag}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    </a>`;
  }).join("");

  return `<!doctype html>
<html lang="en">
${layoutHead("Phạm Thanh Phú — Work & Research", "Evidence-first portfolio and research monographs across business operations, product strategy, and AI trust systems by Phạm Thanh Phú.")}
<body>
  <a class="f-skip" href="#main">Skip to main content</a>
  ${layoutHeader("home")}
  <main id="main">
    <figure class="f-home-cover">
      <img src="/assets/home-cat.webp" alt="Cat tracing a line across signals.">
    </figure>

    <section class="f-home-hero">
      <div class="f-wrap f-home-grid">
        <div>
          <span class="f-home-name">Business Operations · Product Operations · Product Strategy</span>
          <h1>Phạm Thanh Phú</h1>
          <p class="f-home-lede">I work at the intersection of business, AI, and systems thinking, grounded in real operating problems rather than theory alone.</p>
        </div>
        <aside class="f-home-aside">
          <p>Owner-operator and Business Development & Operations Manager at Phong Phu Stationery since 2019.</p>
          <p>This is my open research library: outside-in case reconstructions, operating mechanisms, and interactive decision tools. Each piece keeps its evidence and boundaries visible.</p>
          <p><a class="f-text-link" href="/about">How I think and operate →</a></p>
        </aside>
      </div>
    </section>

    <!-- 1. Research Modes -->
    <section class="f-home-modes-section">
      <div class="f-wrap">
        <div class="f-home-section-head">
          <div>
            <h2>Research Modes</h2>
            <span class="f-overline" style="color:var(--copper);margin:4px 0 0;">Four lenses for exploring the library</span>
          </div>
          <p>Start with a specific mode below, or explore individual case studies.</p>
        </div>
        <div class="f-map-grid">${modesHtml}</div>
      </div>
    </section>

    <!-- 2. Selected Works -->
    <section class="f-home-works-section">
      <div class="f-wrap">
        <div class="f-home-section-head">
          <div>
            <h2>Selected Works & Research</h2>
            <span class="f-overline" style="color:var(--copper);margin:4px 0 0;">Concrete mechanisms from real tensions</span>
          </div>
          <p>Core working records reconstructed with visible evidence boundaries.</p>
        </div>
        <div class="f-map-grid">${worksHtml}</div>
      </div>
    </section>

    <!-- 3. Operating Principles -->
    <section class="f-wrap f-home-reading">
      <h2>Work grounded in the real conditions of getting things done.</h2>
      <div class="f-home-reading-copy">
        <article class="f-home-reading-block">
          <h3>Start from a concrete tension</h3>
          <p>I start from an observation that does not quite fit: an unexpected account restriction, a quiet store morning, a supplier policy shift, a fan product bottleneck, or an AI output that lacks provenance. Then I map the moving parts behind it.</p>
        </article>
        <article class="f-home-reading-block">
          <h3>Follow the mechanism, not the slogan</h3>
          <p>I look closely at what happens after apparent agreement: the handoff after payment, the owner of an exception, the data quality behind a recommendation, and the recovery pathway when an assumption breaks down.</p>
          <p>That is why this library separates confirmed facts, outside-in inferences, working models, and open hypotheses instead of letting them blur together.</p>
        </article>
      </div>
    </section>
  </main>
  ${layoutFooter()}
</body>
</html>`;
}

function workPage() {
  const sectionsHtml = finalModes.map(mode => {
    const items = finalWorkLibrary.filter(item => item.mode === mode.id && item.path.startsWith("/work/"));
    const itemsHtml = items.map(item => `
      <a class="f-work-item" href="${item.path}" data-mode="${item.mode}" data-title="${escapeHtml(item.title.toLowerCase())}" data-question="${escapeHtml(item.question.toLowerCase())}" data-tags="${escapeHtml((item.tags || '').toLowerCase())}">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="f-item-question">${escapeHtml(item.question)}</p>
          <div class="f-item-tags">${escapeHtml(item.tags || "")}</div>
        </div>
        <div class="f-item-meta">
          <b>${escapeHtml(item.maturity)}</b>
          <span>${escapeHtml(item.type)}</span>
        </div>
      </a>
    `).join("");

    return `
      <section class="f-catalog-section" data-section="${mode.id}">
        <div class="f-section-head">
          <div class="f-section-title">
            <h2>${escapeHtml(mode.num)} · ${escapeHtml(mode.label)}</h2>
            <span>${items.length} works</span>
          </div>
          <p class="f-section-desc">${escapeHtml(mode.description)}</p>
        </div>
        <div class="f-title-grid">${itemsHtml}</div>
      </section>
    `;
  }).join("");

  const modeButtons = [
    `<button class="f-mode" type="button" data-mode="all" aria-pressed="true">All Works (${finalWorkLibrary.length})</button>`,
    ...finalModes.map(mode => {
      const count = finalWorkLibrary.filter(i => i.mode === mode.id).length;
      return `<button class="f-mode" type="button" data-mode="${mode.id}" aria-pressed="false">${escapeHtml(mode.short)} (${count})</button>`;
    })
  ].join("");

  const clientScript = `
    <script>
      (()=>{
        const searchInput = document.getElementById('f-search');
        const clearBtn = document.getElementById('f-search-clear');
        const modeButtons = [...document.querySelectorAll('.f-mode')];
        const items = [...document.querySelectorAll('.f-work-item')];
        const sections = [...document.querySelectorAll('.f-catalog-section')];
        const resultCount = document.getElementById('f-count');

        let currentMode = 'all';
        let currentQuery = '';

        function render(updateUrl = true) {
          let visibleCount = 0;
          items.forEach(item => {
            const matchesMode = currentMode === 'all' || item.dataset.mode === currentMode;
            const textToSearch = (item.dataset.title + ' ' + item.dataset.question + ' ' + item.dataset.tags).toLowerCase();
            const matchesSearch = !currentQuery || textToSearch.includes(currentQuery);

            const isVisible = matchesMode && matchesSearch;
            item.hidden = !isVisible;
            if (isVisible) visibleCount++;
          });

          sections.forEach(sec => {
            const hasChildren = [...sec.querySelectorAll('.f-work-item')].some(item => !item.hidden);
            sec.hidden = !hasChildren;
          });

          modeButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.mode === currentMode)));

          if (resultCount) resultCount.textContent = visibleCount + ' works found';
          if (clearBtn) clearBtn.hidden = !currentQuery;

          if (updateUrl) {
            const params = new URLSearchParams();
            if (currentMode !== 'all') params.set('mode', currentMode);
            if (currentQuery) params.set('q', currentQuery);
            const queryString = params.toString();
            history.replaceState(null, '', '/work' + (queryString ? '?' + queryString : ''));
          }
        }

        modeButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            currentMode = btn.dataset.mode;
            render();
          });
        });

        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            currentQuery = e.target.value.trim().toLowerCase();
            render();
          });
        }

        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentQuery = '';
            render();
          });
        }

        const urlParams = new URLSearchParams(window.location.search);
        const urlMode = urlParams.get('mode');
        const urlQ = urlParams.get('q');
        if (urlMode && ['all', ...finalModes.map(m=>m.id)].includes(urlMode)) currentMode = urlMode;
        if (urlQ) {
          currentQuery = urlQ.toLowerCase();
          if (searchInput) searchInput.value = urlQ;
        }
        render(false);
      })();
    </script>
  `;

  return `<!doctype html>
<html lang="en">
${layoutHead("Work Library — Phạm Thanh Phú", "Complete index of 19 works across 4 research modes by Phạm Thanh Phú.")}
<body>
  <a class="f-skip" href="#catalog">Skip to work catalog</a>
  ${layoutHeader("work")}
  <main>
    <section class="f-work-hero">
      <div class="f-wrap">
        <span class="f-overline">Work Library</span>
        <h1>Cases, operating models, working hypotheses, and tools.</h1>
        <p>A living index of outside-in product and operations cases, evidence reconstructions, working essays, and tools. Each entry separates confirmed evidence, working inferences, and open hypotheses.</p>
      </div>
    </section>

    <!-- Master Notion Quote Bar -->
    <div class="f-work-quote-bar">
      <div class="f-wrap">
        <blockquote>
          The cases look different on the surface, but I keep coming back to a small set of operating questions: what deserves to be built, what breaks after apparent success, what people can safely rely on, and what evidence should earn the next step.
        </blockquote>
        <div class="f-work-meta-row">
          <span>19 works · 4 modes · Updated August 2026</span>
          <span>Independent Outside-In Monograph Library</span>
        </div>
      </div>
    </div>

    <!-- Where to Start Reading Routes -->
    <section class="f-routes-section">
      <div class="f-wrap">
        <h2>Where to start</h2>
        <p style="margin:0 0 16px;color:#4b5250;font-size:0.92rem;">Start with the question closest to what brought you here. These are reading routes, not exclusive categories.</p>
        <div class="f-routes-grid">
          <div class="f-route-card">
            <strong>🚀 Build & Scale</strong>
            <span>What deserves to exist, and what earns the next investment?</span>
            <div style="margin-top:6px;">→ <a href="/work/vinamilk-trusted-nutrition">Vinamilk</a> · <a href="/work/datvietvac-fandom-cards">Fandom Cards</a> · <a href="/work/fanme-controlled-growth">FanMe</a></div>
          </div>
          <div class="f-route-card">
            <strong>⚙️ Operate & Recover</strong>
            <span>What still has to work after launch, payment, signing, or enforcement?</span>
            <div style="margin-top:6px;">→ <a href="/work/shopee-account-restrictions">Shopee</a> · <a href="/work/adobe-account-restriction">Adobe</a> · <a href="/work/post-signing-artist-label-operations">Artist / Label Operations</a></div>
          </div>
          <div class="f-route-card">
            <strong>🔍 Evidence & Trust</strong>
            <span>What can people safely rely on when proof or responsibility becomes uncertain?</span>
            <div style="margin-top:6px;">→ <a href="/work/vietnam-diamond-market-crisis">Diamond Market Crisis</a> · <a href="/work/diamond-trust-chain-collapse">Diamond Trust Chain</a> · <a href="/work/explainable-trust">Explainable Trust</a></div>
          </div>
          <div class="f-route-card">
            <strong>🤖 AI & Human Systems</strong>
            <span>What should AI be allowed to become inside real decisions and workflows?</span>
            <div style="margin-top:6px;">→ <a href="/work/ai-judgment-decisions">AI & Judgment</a> · <a href="/work/ai-apprenticeship">AI Apprenticeship</a> · <a href="/work/pathway-lens-operational-cycles">Pathway Lens</a></div>
          </div>
        </div>

        <details class="f-details" style="margin-top:20px;">
          <summary>📖 How to read maturity and evidence labels</summary>
          <div class="f-details-content">
            <p><strong>Developed:</strong> Substantial outside-in work with a bounded problem, product or operating logic, risks, measures, and a practical path to test or execute.</p>
            <p><strong>Working Model:</strong> A proposed operating architecture that still needs validation against a specific organization and operating reality.</p>
            <p><strong>Working Prototype:</strong> A functional product implementation whose core flows can be demonstrated, while robustness or broader validation remain under active development.</p>
            <p><strong>Working Hypothesis:</strong> A proposition derived from observation and reasoning that remains open to falsification and competing explanations.</p>
            <p><strong>Evidence Building:</strong> The question is bounded, but material factual or comparative evidence is still incomplete.</p>
            <p><strong>Concept Exploration:</strong> An early product or system direction made concrete enough to inspect and test.</p>
            <p><strong>Evidence-First:</strong> A research posture, not a maturity rank: claims are kept proportional to sources, boundaries, alternative readings, and unknowns.</p>
          </div>
        </details>
      </div>
    </section>

    <div class="f-wrap f-work-controls">
      <div class="f-search-row">
        <div class="f-search-box">
          <input type="search" id="f-search" class="f-search-input" placeholder="Search 19 works by title, question, or tag..." aria-label="Search works">
          <button type="button" id="f-search-clear" class="f-search-clear" hidden aria-label="Clear search">✕</button>
        </div>
      </div>
      <div class="f-mode-nav" aria-label="Filter by research mode">
        ${modeButtons}
      </div>
      <div class="f-results-bar">
        <span id="f-count">${finalWorkLibrary.length} works found</span>
        <span>Living Monograph Register</span>
      </div>
    </div>

    <section class="f-wrap" id="catalog">${sectionsHtml}</section>

    <!-- Scope & Boundary Section -->
    <section class="f-wrap" style="padding:48px 0 64px;border-top:1px solid var(--ink);">
      <div style="background:#ffffff;border:1px solid var(--ink);border-radius:6px;padding:24px 28px;">
        <h3 style="margin:0 0 12px;color:var(--navy);font-size:1.25rem;">Scope & Claim Boundary</h3>
        <p style="font-size:0.92rem;line-height:1.65;color:#3b4240;margin:0 0 12px;">
          Unless explicitly stated otherwise, the work is independent and outside-in. It uses public company and product information, public user or market signals, personal operational observation, and clearly labeled inference. It does not claim access to internal strategy, private data, or technical architecture.
        </p>
        <blockquote style="margin:16px 0 0;padding:12px 18px;font-size:0.95rem;">
          The purpose of this library is not to make every idea look complete. It is to make the question, evidence, maturity, limitations, and next validation step visible.
        </blockquote>
      </div>
    </section>
  </main>
  ${layoutFooter("Work Library Archive")}
  ${clientScript}
</body>
</html>`;
}

function casePage(item) {
  const doc = caseDocuments[item.path] || { assets: [], body: "" };
  const renderedProse = renderEditorialNotion(doc.body || "");
  const hasAssets = doc.assets && doc.assets.length > 0;

  // Client TOC and Asset Viewer controller
  const clientScript = `
    <script>
      (()=>{
        // 1. Reading Progress Bar
        const bar = document.getElementById('f-progress-bar');
        window.addEventListener('scroll', () => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          if (total > 0) {
            const pct = (window.scrollY / total) * 100;
            bar.style.width = pct + '%';
          }
        }, { passive: true });

        // 2. Dynamic Table of Contents Generation
        const prose = document.getElementById('record');
        const tocList = document.getElementById('f-toc-list');
        if (prose && tocList) {
          const headings = [...prose.querySelectorAll('h2, h3')];
          headings.forEach(h => {
            if (!h.id) return;
            const li = document.createElement('li');
            li.className = 'f-toc-item' + (h.tagName === 'H3' ? ' level-3' : '');
            const a = document.createElement('a');
            a.className = 'f-toc-link';
            a.href = '#' + h.id;
            a.textContent = h.textContent.replace(/^#\s*/, '');
            li.appendChild(a);
            tocList.appendChild(li);
          });

          // ScrollSpy for TOC
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.f-toc-link').forEach(link => {
                  link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
                });
              }
            });
          }, { rootMargin: '-80px 0px -70% 0px' });

          headings.forEach(h => observer.observe(h));
        }

        // 3. Citation Copier
        const citeBtn = document.getElementById('f-cite-btn');
        if (citeBtn) {
          citeBtn.addEventListener('click', () => {
            const title = citeBtn.dataset.title || document.title;
            const citation = 'Phạm Thanh Phú (2026). ' + title + '. Work & Research. ' + window.location.href;
            navigator.clipboard.writeText(citation).then(() => {
              const original = citeBtn.textContent;
              citeBtn.textContent = '✓ Citation Copied!';
              setTimeout(() => { citeBtn.textContent = original; }, 2500);
            });
          });
        }

        // 4. Asset Viewer Modal Controller
        const modal = document.getElementById('f-asset-modal');
        const modalTitle = document.getElementById('f-modal-title');
        const modalBadge = document.getElementById('f-modal-badge');
        const modalFrame = document.getElementById('f-modal-frame');
        const modalImg = document.getElementById('f-modal-img');
        const modalSpinner = document.getElementById('f-modal-spinner');
        const modalDrive = document.getElementById('f-modal-drive');
        const modalDownload = document.getElementById('f-modal-download');
        const modalFullscreen = document.getElementById('f-modal-fullscreen');
        const modalClose = document.getElementById('f-modal-close');

        window.openAssetViewer = function(opts) {
          if (!modal) return;
          const title = opts.title || 'Tài liệu xem trước';
          const type = opts.type || 'paper';
          const driveId = opts.driveId || '';
          const badge = opts.badge || (type === 'diagram' ? 'DIAGRAM' : (type === 'deck' ? 'SLIDE DECK' : 'DOCUMENT'));

          modalTitle.textContent = title;
          modalBadge.textContent = badge;
          modalDrive.href = driveId ? 'https://drive.google.com/file/d/' + driveId + '/view' : '#';
          modalDownload.href = driveId ? 'https://drive.google.com/uc?export=download&id=' + driveId : '#';

          modalSpinner.style.display = 'flex';
          modalFrame.style.display = 'none';
          modalImg.style.display = 'none';

          if (type === 'diagram' && driveId) {
            modalImg.src = 'https://drive.google.com/thumbnail?id=' + driveId + '&sz=w1600';
            modalImg.onload = () => {
              modalSpinner.style.display = 'none';
              modalImg.style.display = 'block';
            };
          } else if (driveId) {
            modalFrame.src = 'https://drive.google.com/file/d/' + driveId + '/preview';
            modalFrame.onload = () => {
              modalSpinner.style.display = 'none';
              modalFrame.style.display = 'block';
            };
          }

          if (typeof modal.showModal === 'function') {
            modal.showModal();
          } else {
            modal.setAttribute('open', '');
          }
          document.body.style.overflow = 'hidden';
        };

        function closeAssetViewer() {
          if (!modal) return;
          if (typeof modal.close === 'function') {
            modal.close();
          } else {
            modal.removeAttribute('open');
          }
          modalFrame.src = '';
          modalImg.src = '';
          document.body.style.overflow = '';
        }

        if (modalClose) modalClose.addEventListener('click', closeAssetViewer);
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAssetViewer();
          });
          modal.addEventListener('cancel', () => {
            document.body.style.overflow = '';
          });
        }

        if (modalFullscreen) {
          modalFullscreen.addEventListener('click', () => {
            modal.classList.toggle('is-fullscreen');
            modalFullscreen.textContent = modal.classList.contains('is-fullscreen') ? '⛶ Thu nhỏ' : '⛶ Toàn màn hình';
          });
        }

        // Attach listener to all trigger buttons
        document.querySelectorAll('.f-asset-trigger').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            window.openAssetViewer({
              title: target.dataset.title || target.getAttribute('title') || 'Tài liệu đính kèm',
              driveId: target.dataset.driveid,
              type: target.dataset.type || 'paper',
              badge: target.dataset.badge
            });
          });
        });
      })();
    </script>
  `;

  return `<!doctype html>
<html lang="en">
${layoutHead(`${item.title} — Phạm Thanh Phú`, item.question)}
<body>
  <a class="f-skip" href="#record">Skip to monograph text</a>
  ${layoutHeader("work")}
  <main>
    <section class="f-case-hero">
      <div class="f-wrap">
        <div class="f-crumb">
          <a href="/work">Work Library</a>
          <span>/</span>
          <span>${escapeHtml(item.type)}</span>
        </div>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="f-case-dek">${escapeHtml(item.question)}</p>
      </div>
    </section>

    <div class="f-case-meta">
      <div class="f-wrap f-case-meta-grid">
        <div class="f-meta-cell">
          <b>Maturity</b>
          <span>${escapeHtml(item.maturity)}</span>
        </div>
        <div class="f-meta-cell">
          <b>Research Type</b>
          <span>${escapeHtml(item.type)}</span>
        </div>
        <div class="f-meta-cell">
          <b>Operating Status</b>
          <span>Independent Outside-In Analysis</span>
        </div>
        <div class="f-meta-cell">
          <b>Provenance</b>
          <span>Public Evidence & Tested Models</span>
        </div>
      </div>
    </div>

    <div class="f-wrap f-case-reading">
      <aside class="f-case-rail">
        <div class="f-rail-title">Contents</div>
        <ul id="f-toc-list" class="f-toc-list"></ul>
        <div class="f-rail-actions">
          <button type="button" id="f-cite-btn" class="f-rail-btn" data-title="${escapeHtml(item.title)}">Cite this monograph</button>
          <a href="${item.source}" target="_blank" rel="noreferrer" class="f-rail-btn">Open Notion ↗</a>
          <a href="/work" class="f-rail-btn">← All Works</a>
        </div>
      </aside>

      <article class="f-prose" id="record">
        ${renderedProse}
        <div class="f-source-banner">
          <strong>Source Provenance:</strong> This web edition preserves the research question, core analytical framework, and claim boundaries. The full living register is maintained in Notion.
          <br><br>
          <a href="${item.source}" target="_blank" rel="noreferrer" class="f-text-link" style="color:var(--copper);">Open the primary research document in Notion ↗</a>
        </div>
      </article>
    </div>

    <!-- Native Asset Viewer Modal -->
    <dialog id="f-asset-modal" class="f-asset-modal">
      <div class="f-modal-topbar">
        <div class="f-modal-title-wrap">
          <span id="f-modal-badge" class="f-modal-badge">DOCUMENT</span>
          <span id="f-modal-title" class="f-modal-title">Tên tài liệu</span>
        </div>
        <div class="f-modal-actions">
          <button id="f-modal-fullscreen" class="f-modal-btn" title="Toàn màn hình">⛶ Toàn màn hình</button>
          <a id="f-modal-drive" class="f-modal-btn" href="#" target="_blank" rel="noreferrer">↗ Mở Google Drive</a>
          <a id="f-modal-download" class="f-modal-btn" href="#" download>📥 Tải về</a>
          <button id="f-modal-close" class="f-modal-btn close" title="Đóng (Esc)">✕ Đóng</button>
        </div>
      </div>
      <div class="f-modal-content">
        <div id="f-modal-spinner" class="f-modal-spinner">
          <div class="f-spin-circle"></div>
          <span>Đang tải tài liệu xem trước...</span>
        </div>
        <iframe id="f-modal-frame" class="f-modal-frame" allowfullscreen style="display:none;"></iframe>
        <img id="f-modal-img" class="f-modal-img" style="display:none;" alt="Preview">
      </div>
    </dialog>
  </main>
  ${layoutFooter(item.maturity)}
  ${clientScript}
</body>
</html>`;
}

function aboutPage() {
  return `<!doctype html>
<html lang="en">
${layoutHead("About — Phạm Thanh Phú", "About Phạm Thanh Phú, owner-operator and Business Development & Operations Manager working across commercial operations, product systems, and evidence-first research in Ho Chi Minh City.")}
<body>
  <a class="f-skip" href="#about-content">Skip to about content</a>
  ${layoutHeader("about")}
  <main id="about">
    <section class="f-about-hero">
      <div class="f-wrap f-about-hero-wrap">
        <div class="f-about-hero-left">
          <span class="f-overline">Background & Direction</span>
          <h1>Commercial operations first. Product systems next.</h1>
          <p>I am an owner-operator and Business Development & Operations Manager based in Ho Chi Minh City. I spend my time connecting fragmented people, information, suppliers, workflows, incentives, and constraints into reliable operating pathways.</p>
          <div class="f-about-chips">
            <span class="f-about-chip">B2B Commercial Ops</span>
            <span class="f-about-chip">Product Operations</span>
            <span class="f-about-chip">Systems & AI Trust</span>
            <span class="f-about-chip">Commercial Law</span>
            <span class="f-about-chip">Ho Chi Minh City</span>
          </div>
        </div>

        <div class="f-about-profile-card">
          <img src="/assets/phu-portrait.webp" alt="Portrait of Phạm Thanh Phú" class="f-about-profile-img">
          <div class="f-about-profile-info">
            <strong>Phạm Thanh Phú</strong>
            <span>Business Development & Operations Manager<br>Phong Phu Stationery (since 2019)</span>
            <span>📍 Ho Chi Minh City</span>
          </div>
        </div>
      </div>
    </section>

    <div class="f-wrap f-about-layout">
      <aside class="f-about-sidebar">
        <div class="f-sidebar-box">
          <h3>Quick Snapshot</h3>
          <div class="f-sidebar-stat">
            <b>6+ Years</b>
            <span>B2B Commercial Ownership</span>
          </div>
          <div class="f-sidebar-stat">
            <b>~VND 800M</b>
            <span>Avg. Quarterly B2B Revenue</span>
          </div>
          <div class="f-sidebar-stat">
            <b>50+ Accounts</b>
            <span>Recurring Clients (~95% Retention)</span>
          </div>
          <div class="f-sidebar-stat">
            <b>&gt;90%</b>
            <span>Delegated via KiotViet & Team</span>
          </div>
        </div>

        <div class="f-sidebar-box">
          <h3>Navigation</h3>
          <ul class="f-sidebar-nav">
            <li><a href="#operating-grounding">1. Operating Grounding</a></li>
            <li><a href="#how-i-work">2. How I Approach Work</a></li>
            <li><a href="#credentials">3. Credentials & Toolkit</a></li>
            <li><a href="#direction">4. Career Direction</a></li>
          </ul>
        </div>

        <div class="f-sidebar-box">
          <h3>Direct Links</h3>
          <ul class="f-sidebar-nav">
            <li><a href="mailto:phamthanhphu97@gmail.com">Email Phú ↗</a></li>
            <li><a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer">LinkedIn Profile ↗</a></li>
            <li><a href="/work">Work Library Archive ↗</a></li>
            <li><a href="/apps/explainable-trust">Explainable Trust App ⚡</a></li>
          </ul>
        </div>
      </aside>

      <div class="f-about-content" id="about-content">
        <section id="operating-grounding">
          <h2>1. Operating Grounding (Phong Phu Stationery)</h2>
          <p>Since July 2019, I have built and managed an institutional supply business at Phong Phu Stationery. The work is end-to-end: customer discovery, tailored quotations, sourcing, supplier negotiations, fulfillment, payment collection, and account retention.</p>
          
          <div class="f-facts">
            <div class="f-fact">
              <strong>~VND 800M / qtr</strong>
              <span>Average quarterly B2B revenue across 10+ supplier partners with 30-35% operating margin.</span>
            </div>
            <div class="f-fact">
              <strong>50+ Accounts</strong>
              <span>Schools, public-sector units, SMEs, and corporate branches of Olam and Emivest.</span>
            </div>
            <div class="f-fact">
              <strong>~95% Retention</strong>
              <span>Earned through reliable execution, visibility, and direct relationship management.</span>
            </div>
          </div>

          <p>When a key supplier abruptly reduced our discount across an affected product line from 22% to 15%, I confirmed the policy with regional supervisors, avoided ungrounded personal escalation, mobilized five alternative brands, validated samples directly with institutional clients, and replaced over 80% of the affected volume within one week.</p>
          <p>Since summer 2025, I moved pricing, inventory, invoicing, and corporate records into KiotViet and transferred more than 90% of operational work to an experienced bookstore manager, part-time staff, and logistics partners.</p>
        </section>

        <section id="how-i-work">
          <h2>2. How I Approach Work</h2>
          <p><strong>1. Mechanisms over slogans.</strong> I do not stop at calling something a "trust problem" or "engagement drop." I trace the moving parts: what happens after a purchase, what breaks when an account is restricted, or who owns the handoff when an exception arises.</p>
          <p><strong>2. Visible evidence boundaries.</strong> The case monographs on this site are outside-in analytical research based on public records, policy documents, and observable events. I separate confirmed facts, working inferences, and open hypotheses cleanly.</p>
          <p><strong>3. Reversible testing before large commitments.</strong> When organizing acoustic music performances for high school communities in 2024, we ran two free 30-minute pilots before committing to paid three-hour events that generated 400+ drink orders. Test the mechanics small before allocating capital.</p>
        </section>

        <section id="credentials">
          <h2>3. Credentials & Toolkit</h2>
          <div class="f-about-creds">
            <div class="f-cred-box">
              <strong>Commercial Law & Legal Training</strong>
              <span>Bachelor of Commercial Law & Lawyer Training Certificate. Grounding in contract structures, consumer rights, risk transfer, and regulatory boundaries.</span>
            </div>
            <div class="f-cred-box">
              <strong>Value Chain Management (UIUC, Aug 2026)</strong>
              <span>University of Illinois Urbana-Champaign: Operations Management, Managerial Accounting, Strategic Marketing Mix, and Value Chain Design.</span>
            </div>
            <div class="f-cred-box">
              <strong>Analytics, AI & Project Management</strong>
              <span>Google Project Management, Google Data Analytics, IBM Data Science, NYIF Risk Management, and Google AI Specialization.</span>
            </div>
            <div class="f-cred-box">
              <strong>Creator & Community Platforms</strong>
              <span>TikTok @yunero1206 (242K+ likes, 1.2M-view video), Askfm (30K interests), advising indie artists and creators around platform policies, Content ID, and recovery.</span>
            </div>
          </div>
        </section>

        <section id="direction">
          <h2>4. Career Direction</h2>
          <p>I am directing this commercial operations grounding, legal discipline, and systems thinking toward <strong>Business Operations</strong>, <strong>Product Operations</strong>, and <strong>Product Strategy</strong> roles in Ho Chi Minh City.</p>
          <p>My current near-term focus is Amazon Global Selling Vietnam (Business Development Consultant, NSR). The work on this website demonstrates how I diagnose bottlenecks, coordinate partners, and build operational pathways that repeat reliably.</p>
        </section>

        <div class="f-contact">
          <a href="mailto:phamthanhphu97@gmail.com">Email Phú ↗</a>
          <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer">LinkedIn Profile ↗</a>
          <a href="/work">Explore Work Library →</a>
          <a href="/apps/explainable-trust">Try Explainable Trust App →</a>
        </div>
      </div>
    </div>
  </main>
  ${layoutFooter("About")}
</body>
</html>`;
}

// ============================================================================
// Interactive Explainable Trust Intelligence App (Security & Rate Limited)
// ============================================================================

let rateLimitDate = new Date().toISOString().slice(0, 10);
let dailyUsageCount = 0;
const MAX_DAILY_REQUESTS = 100;
const MAX_STATEMENT_CHARS = 10000;
const ipRequestTimestamps = new Map();

function checkRateLimit(clientIp = "anonymous") {
  const today = new Date().toISOString().slice(0, 10);
  if (today !== rateLimitDate) {
    rateLimitDate = today;
    dailyUsageCount = 0;
    ipRequestTimestamps.clear();
  }

  if (dailyUsageCount >= MAX_DAILY_REQUESTS) {
    return { allowed: false, reason: "Đã đạt giới hạn 100 lượt phân tích miễn phí/ngày của hệ thống. Vui lòng nhập Gemini API Key cá nhân của bạn để tiếp tục." };
  }

  const now = Date.now();
  const timestamps = ipRequestTimestamps.get(clientIp) || [];
  const validTimestamps = timestamps.filter(ts => now - ts < 60000);
  
  if (validTimestamps.length >= 10) {
    return { allowed: false, reason: "Tần suất yêu cầu quá nhanh (quá 10 lượt/phút). Vui lòng thử lại sau 1 phút." };
  }

  validTimestamps.push(now);
  ipRequestTimestamps.set(clientIp, validTimestamps);

  return { allowed: true };
}

function incrementRateLimit() {
  dailyUsageCount++;
  return dailyUsageCount;
}

const DEFAULT_SERVER_GEMINI_KEY = "AQ.Ab8RN6LVbYTojcA_vki2Onou_yVbLWtrId4wTz31tRlvWoQpSQ";
const DEFAULT_SERVER_TAVILY_KEY = "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";

async function handleApiAnalyze(request, env = {}) {
  const securityApiHeaders = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  };

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed. Only POST is accepted." }), {
      status: 405,
      headers: securityApiHeaders
    });
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response(JSON.stringify({ error: "Content-Type must be application/json." }), {
      status: 415,
      headers: securityApiHeaders
    });
  }

  let body;
  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid JSON request body." }), {
      status: 400,
      headers: securityApiHeaders
    });
  }

  const { statement, mode = "analysis_only", userKey = "" } = body;

  if (!statement || typeof statement !== "string" || !statement.trim()) {
    return new Response(JSON.stringify({ error: "Vui lòng cung cấp nội dung sự việc cần phân tích." }), {
      status: 400,
      headers: securityApiHeaders
    });
  }

  if (statement.length > MAX_STATEMENT_CHARS) {
    return new Response(JSON.stringify({ error: `Độ dài văn bản vượt quá giới hạn an toàn (${MAX_STATEMENT_CHARS.toLocaleString()} ký tự).` }), {
      status: 413,
      headers: securityApiHeaders
    });
  }

  const validModes = ["analysis_only", "web_assisted"];
  const sanitizedMode = validModes.includes(mode) ? mode : "analysis_only";

  const clientIp = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "client";
  const geminiApiKey = userKey.trim() || env?.GEMINI_API_KEY || DEFAULT_SERVER_GEMINI_KEY;
  const tavilyApiKey = env?.TAVILY_API_KEY || DEFAULT_SERVER_TAVILY_KEY;

  if (!userKey.trim()) {
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return new Response(JSON.stringify({ error: rateCheck.reason }), {
        status: 429,
        headers: securityApiHeaders
      });
    }
  }

  let webContext = "";
  if (sanitizedMode === "web_assisted") {
    try {
      const tavilyRes = await fetch("https://api.tavily.com/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: tavilyApiKey,
          query: statement.slice(0, 280),
          search_depth: "basic",
          include_answer: true,
          max_results: 3
        })
      });
      if (tavilyRes.ok) {
        const tavilyData = await tavilyRes.json();
        if (tavilyData.results && Array.isArray(tavilyData.results) && tavilyData.results.length > 0) {
          webContext = "\n\n[Authoritative Web Search Context]:\n" +
            tavilyData.results.slice(0, 3).map((r, i) => `[${i+1}] ${r.title || "Source"} (${r.url || ""}): ${(r.content || "").slice(0, 300)}`).join("\n");
        }
      }
    } catch (e) {
      console.warn("Authoritative search lookup skipped:", e.message);
    }
  }

  const systemInstruction = `You are Explainable Trust Intelligence Engine (Ledger V3).
Reconstruct the input statement into a structured, contestable case ledger.
Return ONLY valid JSON matching this exact schema:
{
  "goal": "Tóm tắt mục tiêu / quyền lợi cốt lõi của người dùng",
  "summary": "Tóm tắt tình huống khách quan, phân biệt rõ giữa dữ kiện đã báo cáo và suy luận",
  "timeline": [
    { "time": "Thời điểm hoặc ước tính", "event": "Sự kiện xảy ra", "source": "user_report / system_log / policy", "status": "verified / unverified / contested" }
  ],
  "findings": [
    { "claim": "Phát hiện / Nhận định chính", "basis": "Cơ sở chứng cứ", "confidence": "Cao / Trung bình / Cần bổ sung" }
  ],
  "gaps": [
    { "missing": "Thông tin / Chứng cứ còn thiếu", "impact": "Ảnh hưởng đến việc giải quyết", "action": "Hành động đề xuất để bổ sung" }
  ],
  "recoveryPath": [
    { "step": 1, "action": "Bước hành động cụ thể", "owner": "User / Platform / Kháng nghị", "sla": "Thời gian dự kiến" }
  ],
  "provO": {
    "entity": "CaseLedger_V3",
    "activity": "Reconstruction_Run",
    "agent": "ExplainableEngine_Gemini"
  }
}`;

  const prompt = `User Statement:\n${statement}${webContext}\n\nAnalyze and return the structured JSON ledger.`;

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${geminiApiKey}`;
    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: systemInstruction + "\n\n" + prompt }] }
        ],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      return new Response(JSON.stringify({ error: `Lỗi phân tích từ AI Provider (Status ${geminiRes.status}). Vui lòng kiểm tra lại API Key hoặc nội dung input.` }), {
        status: 502,
        headers: securityApiHeaders
      });
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    let ledgerResult;
    try {
      ledgerResult = JSON.parse(rawText);
    } catch (e) {
      ledgerResult = { error: "Không thể trích xuất JSON cấu trúc từ phản hồi mô hình", rawText };
    }

    if (!userKey.trim()) {
      incrementRateLimit();
    }

    return new Response(JSON.stringify({
      success: true,
      mode: sanitizedMode,
      dailyUsed: dailyUsageCount,
      maxDaily: MAX_DAILY_REQUESTS,
      data: ledgerResult
    }), {
      status: 200,
      headers: securityApiHeaders
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Lỗi kết nối máy chủ phân tích: " + err.message }), {
      status: 500,
      headers: securityApiHeaders
    });
  }
}

function explainableAppPage() {
  const appHtml = `<!doctype html>
<html lang="en">
${layoutHead("Explainable Trust — Interactive Intelligence Application", "Interactive workspace for traceable case reconstruction, DAG reasoning, W3C PROV-O audit trails, and live web query verification by Pham Thanh Phu.")}
<body>
  <a class="f-skip" href="#app-root">Skip to application workspace</a>
  ${layoutHeader("app")}
  <main id="app-root">
    <section class="f-case-hero" style="background:var(--navy);padding:40px 0 32px;">
      <div class="f-wrap">
        <div class="f-crumb" style="color:#cbd5e1;">
          <a href="/work" style="color:#f8fafc;">Work Library</a> <span>/</span> <span>Interactive Decision Engine</span>
        </div>
        <h1 style="font-size:clamp(2.2rem, 3.8vw, 3.2rem);color:#f8fafc;">Explainable Trust Intelligence Application</h1>
        <p class="f-case-dek" style="max-width:840px;color:#cbd5e1;">
          Reconstruct situations under uncertainty without losing the distinction between evidence, reported claims, inferences, and open gaps.
        </p>
      </div>
    </section>

    <div class="f-wrap" style="padding:32px 0 64px;">
      <div style="background:#ffffff;border:1px solid var(--ink);border-radius:6px;padding:16px 20px;margin-bottom:24px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;">
        <div>
          <span style="font-family:var(--ui);font-size:0.76rem;font-weight:800;letter-spacing:0.06em;text-transform:uppercase;color:var(--muted);">System Engine Status:</span>
          <strong style="margin-left:8px;color:var(--navy);">Live Google Gemini + Tavily Search Active</strong>
          <span style="display:block;font-size:0.82rem;color:#4b5250;margin-top:2px;">Miễn phí 100 lượt đối soát/ngày qua hệ thống. Bạn có thể nhập Gemini API Key riêng (BYOK) nếu cần.</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <input type="password" id="user-gemini-key" placeholder="Nhập Gemini API Key (Tùy chọn)" style="padding:8px 12px;border:1px solid var(--line);border-radius:4px;font-size:0.82rem;width:220px;" aria-label="Gemini API Key">
          <button id="save-key-btn" style="padding:8px 14px;background:var(--navy);color:#fff;border:none;border-radius:4px;font-size:0.8rem;font-weight:700;cursor:pointer;">Lưu Key</button>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.4fr);gap:32px;align-items:start;">
        <div style="background:#ffffff;border:1px solid var(--ink);border-radius:8px;padding:24px;box-shadow:0 4px 16px rgba(19,38,47,0.05);">
          <h2 style="margin:0 0 12px;font-size:1.35rem;color:var(--navy);">1. Nhập sự việc / Vấn đề cần đối soát</h2>
          <p style="font-size:0.88rem;color:#4b5250;margin:0 0 16px;line-height:1.5;">
            Mô tả tình huống tranh chấp tài khoản, sự cố giao dịch, hoặc quyết định tự động cần bóc tách ranh giới chứng cứ.
          </p>

          <textarea id="app-statement" rows="7" style="width:100%;padding:12px;border:1px solid var(--ink);border-radius:4px;font-family:var(--ui);font-size:0.9rem;line-height:1.5;resize:vertical;" placeholder="Ví dụ: Tài khoản Shopee của tôi bị khóa vĩnh viễn lúc 14:20 ngày 05/08 vì nghi ngờ vi phạm chính sách voucher. Tôi còn 2 đơn hàng đang giao trị giá 1.200.000 VNĐ và số dư Ví ShopeePay 450.000 VNĐ chưa rút được. Nhân viên hỗ trợ báo không thể cung cấp lý do cụ thể..."></textarea>

          <div style="margin:12px 0 18px;display:flex;flex-wrap:wrap;gap:8px;">
            <button class="app-preset-btn" data-preset="shopee" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Khóa tài khoản Shopee</button>
            <button class="app-preset-btn" data-preset="adobe" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Gián đoạn SaaS Adobe</button>
            <button class="app-preset-btn" data-preset="diamond" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Tranh chấp Giám định Kim cương</button>
          </div>

          <div style="margin-bottom:20px;padding:12px;background:var(--paper);border:1px solid var(--line);border-radius:4px;">
            <span style="display:block;font-family:var(--ui);font-size:0.76rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">Chế độ Phân tích:</span>
            <label style="display:flex;align-items:center;gap:8px;font-size:0.86rem;margin-bottom:6px;cursor:pointer;">
              <input type="radio" name="app-mode" value="analysis_only" checked>
              <strong>Analysis Only</strong> — Phân tích nội tại & bóc tách logic từ văn bản cung cấp.
            </label>
            <label style="display:flex;align-items:center;gap:8px;font-size:0.86rem;cursor:pointer;">
              <input type="radio" name="app-mode" value="web_assisted">
              <strong>Web-Assisted (Tavily)</strong> — Tra cứu thêm điều khoản & chính sách công khai thời gian thực.
            </label>
          </div>

          <button id="app-analyze-btn" style="width:100%;padding:12px 20px;background:var(--navy);color:#ffffff;border:none;border-radius:6px;font-family:var(--ui);font-size:0.95rem;font-weight:700;cursor:pointer;transition:background-color 0.15s ease;">
            ⚡ Bắt đầu Phân tích & Tái lập Hồ sơ
          </button>
        </div>

        <div style="background:#ffffff;border:1px solid var(--ink);border-radius:8px;padding:24px;min-height:520px;box-shadow:0 4px 16px rgba(19,38,47,0.05);display:flex;flex-direction:column;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--line);">
            <h2 style="margin:0;font-size:1.35rem;color:var(--navy);">2. Hồ sơ Tái lập (Case Ledger V3)</h2>
            <button id="copy-ledger-btn" style="padding:4px 10px;background:transparent;border:1px solid var(--line);border-radius:4px;font-size:0.75rem;font-weight:700;cursor:pointer;" hidden>📋 Sao chép JSON</button>
          </div>

          <div id="app-output-empty" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--muted);text-align:center;padding:40px 20px;">
            <span style="font-size:2.4rem;margin-bottom:12px;">📊</span>
            <strong style="color:var(--navy);font-size:1.05rem;">Chưa có dữ liệu phân tích</strong>
            <p style="font-size:0.86rem;max-width:320px;margin:6px 0 0;line-height:1.5;">Nhập sự việc ở cột bên trái và bấm Bắt đầu để hệ thống tự động bóc tách sự kiện, phát hiện chứng cứ, và lập chu trình phục hồi.</p>
          </div>

          <div id="app-output-loading" style="display:none;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:40px 20px;">
            <div class="f-spin-circle" style="border-top-color:var(--copper);width:40px;height:40px;"></div>
            <span style="font-family:var(--ui);font-size:0.9rem;font-weight:700;color:var(--navy);">Đang gọi mô hình AI và tái lập hiện trường T0...</span>
          </div>

          <div id="app-output-result" style="display:none;flex-direction:column;gap:18px;font-size:0.9rem;line-height:1.6;">
            <div style="background:var(--mist);padding:14px 16px;border-left:4px solid var(--navy);border-radius:4px;">
              <strong style="display:block;color:var(--navy);font-size:0.95rem;margin-bottom:4px;" id="out-goal">Mục tiêu</strong>
              <p style="margin:0;color:#2b3336;font-size:0.88rem;" id="out-summary">Tóm tắt</p>
            </div>

            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">1. Dòng sự kiện (Timeline Events):</strong>
              <div id="out-timeline" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">2. Nhận định & Ranh giới Chứng cứ:</strong>
              <div id="out-findings" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">3. Khoảng trống Chứng cứ (Evidence Gaps):</strong>
              <div id="out-gaps" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">4. Chu trình Phục hồi Hành động (Recovery Path):</strong>
              <div id="out-recovery" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  ${layoutFooter("Interactive Application")}

  <script>
    (()=>{
      const statementEl = document.getElementById('app-statement');
      const analyzeBtn = document.getElementById('app-analyze-btn');
      const emptyEl = document.getElementById('app-output-empty');
      const loadingEl = document.getElementById('app-output-loading');
      const resultEl = document.getElementById('app-output-result');
      const copyBtn = document.getElementById('copy-ledger-btn');
      const keyInput = document.getElementById('user-gemini-key');
      const saveKeyBtn = document.getElementById('save-key-btn');

      const savedKey = localStorage.getItem('user_gemini_key') || '';
      if (savedKey) keyInput.value = savedKey;

      saveKeyBtn.addEventListener('click', () => {
        const val = keyInput.value.trim();
        localStorage.setItem('user_gemini_key', val);
        alert(val ? 'Đã lưu Gemini API Key vào trình duyệt!' : 'Đã xóa Key lưu trữ.');
      });

      const presets = {
        shopee: "Tài khoản Shopee của tôi bị khóa vĩnh viễn lúc 14:20 ngày 05/08 vì nghi ngờ vi phạm chính sách voucher. Tôi còn 2 đơn hàng đang giao trị giá 1.200.000 VNĐ và số dư Ví ShopeePay 450.000 VNĐ chưa rút được. Nhân viên hỗ trợ báo không thể cung cấp lý do cụ thể và yêu cầu chờ 7 ngày làm việc.",
        adobe: "Gói thuê bao Adobe Creative Cloud của studio bị tạm ngưng đột ngột vào sáng nay do ngân hàng gắn cờ thanh toán định kỳ là giao dịch bất thường. Chúng tôi đang có 3 dự án dựng phim Premiere và Illustrator cần xuất bản giao khách trong 24 giờ tới nhưng không thể mở file đám mây.",
        diamond: "Khách hàng mua viên kim cương 1.2 carat kèm chứng thư kiểm định tại cửa hàng với cam kết thu đổi 95% sau 1 năm. Khi khách mang lại thu đổi, nhân viên từ chối do vết xước nhỏ ở cạnh và yêu cầu gửi đi giám định lại tại trung tâm độc lập với chi phí khách tự chịu."
      };

      document.querySelectorAll('.app-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const type = btn.dataset.preset;
          if (presets[type]) statementEl.value = presets[type];
        });
      });

      let currentLedgerJson = null;

      analyzeBtn.addEventListener('click', async () => {
        const statement = statementEl.value.trim();
        if (!statement) {
          alert('Vui lòng nhập nội dung sự việc cần phân tích.');
          return;
        }

        const mode = document.querySelector('input[name="app-mode"]:checked')?.value || 'analysis_only';
        const userKey = keyInput.value.trim();

        emptyEl.style.display = 'none';
        resultEl.style.display = 'none';
        loadingEl.style.display = 'flex';
        analyzeBtn.disabled = true;

        try {
          const res = await fetch('/api/explainable/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ statement, mode, userKey })
          });

          const resData = await res.json();
          loadingEl.style.display = 'none';
          analyzeBtn.disabled = false;

          if (!res.ok || resData.error) {
            alert('Lỗi: ' + (resData.error || 'Không thể hoàn tất phân tích'));
            emptyEl.style.display = 'flex';
            return;
          }

          currentLedgerJson = resData.data;
          renderLedger(resData.data);
        } catch (err) {
          loadingEl.style.display = 'none';
          analyzeBtn.disabled = false;
          emptyEl.style.display = 'flex';
          alert('Lỗi kết nối máy chủ: ' + err.message);
        }
      });

      function renderLedger(d) {
        document.getElementById('out-goal').textContent = '🎯 Mục tiêu: ' + (d.goal || 'Xác định quyền lợi');
        document.getElementById('out-summary').textContent = d.summary || '';

        const tEl = document.getElementById('out-timeline');
        tEl.innerHTML = '';
        (d.timeline || []).forEach(t => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;display:flex;justify-content:space-between;align-items:center;';
          div.innerHTML = '<span><strong>' + escape(t.time) + ':</strong> ' + escape(t.event) + '</span><span style="font-size:0.72rem;padding:2px 6px;background:#e2e8f0;border-radius:3px;font-weight:700;">' + escape(t.status) + '</span>';
          tEl.appendChild(div);
        });

        const fEl = document.getElementById('out-findings');
        fEl.innerHTML = '';
        (d.findings || []).forEach(f => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;';
          div.innerHTML = '<strong style="color:var(--navy);">' + escape(f.claim) + '</strong><div style="font-size:0.82rem;color:#4b5250;margin-top:2px;">Cơ sở: ' + escape(f.basis) + ' · Độ tin cậy: <b>' + escape(f.confidence) + '</b></div>';
          fEl.appendChild(div);
        });

        const gEl = document.getElementById('out-gaps');
        gEl.innerHTML = '';
        (d.gaps || []).forEach(g => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#fff1f2;border:1px solid #fecdd3;border-radius:4px;';
          div.innerHTML = '<strong style="color:#9f1239;">Thiếu: ' + escape(g.missing) + '</strong><div style="font-size:0.82rem;color:#4c0519;margin-top:2px;">Hành động: ' + escape(g.action) + '</div>';
          gEl.appendChild(div);
        });

        const rEl = document.getElementById('out-recovery');
        rEl.innerHTML = '';
        (d.recoveryPath || []).forEach(r => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;display:flex;justify-content:space-between;align-items:center;';
          div.innerHTML = '<span><b>Bước ' + (r.step || '') + ':</b> ' + escape(r.action) + ' (' + escape(r.owner) + ')</span><span style="font-size:0.75rem;font-weight:700;color:#166534;">SLA: ' + escape(r.sla) + '</span>';
          rEl.appendChild(div);
        });

        copyBtn.hidden = false;
        resultEl.style.display = 'flex';
      }

      function escape(s) {
        return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      copyBtn.addEventListener('click', () => {
        if (!currentLedgerJson) return;
        navigator.clipboard.writeText(JSON.stringify(currentLedgerJson, null, 2)).then(() => {
          copyBtn.textContent = '✓ Đã chép!';
          setTimeout(() => { copyBtn.textContent = '📋 Sao chép JSON'; }, 2000);
        });
      });
    })();
  </script>
</body>
</html>`;
  return appHtml;
}

// ============================================================================
// Main HTTP Request Handler & Router
// ============================================================================

async function handleRequest(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";

  // 1. API Endpoints
  if (path === "/api/explainable/analyze") {
    return handleApiAnalyze(request, env);
  }

  // 2. Comprehensive Security Headers for HTML Pages
  const htmlHeaders = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    "Content-Security-Policy": "default-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com data:; img-src 'self' https://drive.google.com https://*.googleusercontent.com https://ssl.gstatic.com data:; frame-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; object-src 'none'; base-uri 'self'; form-action 'self';",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), camera=(), microphone=(), payment=()",
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    "X-XSS-Protection": "1; mode=block"
  };

  // 3. Static & Dynamic Routes
  if (path === "/") {
    return new Response(homePage(), { headers: htmlHeaders });
  }

  if (path === "/about") {
    return new Response(aboutPage(), { headers: htmlHeaders });
  }

  if (path === "/work") {
    return new Response(workPage(), { headers: htmlHeaders });
  }

  if (path === "/apps/explainable-trust") {
    return new Response(explainableAppPage(), { headers: htmlHeaders });
  }

  // Case Study Monograph Pages
  const matchedItem = finalWorkLibrary.find(item => item.path === path);
  if (matchedItem) {
    return new Response(casePage(matchedItem), { headers: htmlHeaders });
  }

  // Fallback 404
  return new Response(`<!doctype html><html lang="en"><head><title>404 Not Found — Phạm Thanh Phú</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>${siteCss}</style></head><body>${layoutHeader()}<main class="f-wrap" style="padding:80px 0;"><span class="f-overline">404 Error</span><h1 style="color:var(--navy);font-size:2.8rem;margin:8px 0 16px;">Tài liệu nghiên cứu không tồn tại</h1><p style="color:var(--muted);font-size:1.1rem;margin-bottom:24px;">Liên kết bạn đang tìm có thể đã được cập nhật hoặc di chuyển đến một mục mới trong thư viện.</p><a href="/work" class="f-rail-btn" style="display:inline-block;padding:10px 18px;">← Trở về Thư viện Nghiên cứu (Work Library)</a></main>${layoutFooter()}</body></html>`, {
    status: 404,
    headers: htmlHeaders
  });
}

export default {
  fetch: handleRequest
};
