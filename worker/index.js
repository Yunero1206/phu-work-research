// ============================================================================
// Pham Thanh Phu — Work & Research Cloudflare Worker (Master Edition)
// ============================================================================

const finalModes = [
  {
    "id": "product-ops",
    "label": "Product & Operating Work",
    "short": "Product & Ops",
    "description": "Observed problems translated into product direction, operating architecture, governance, metrics, and stage gates."
  },
  {
    "id": "evidence-first",
    "label": "Evidence-First Cases & Trust Research",
    "short": "Evidence & Trust",
    "description": "Disputes, market fractures, and trust pathways reconstructed strictly from visible evidence."
  },
  {
    "id": "essays",
    "label": "Research Essays & Hypotheses",
    "short": "Essays & Hypotheses",
    "description": "Propositions from real observations, kept open to falsification."
  },
  {
    "id": "concepts",
    "label": "Concepts & Product Explorations",
    "short": "Concepts",
    "description": "Concrete enough to test, without claiming validation."
  }
];

const finalWorkLibrary = [
  {
    "path": "/work/shopee-account-restrictions",
    "title": "Shopee Account Restrictions — Customer Resolution Under Platform Uncertainty",
    "question": "When a marketplace restricts an account, what minimum resolution pathway must remain visible so customers can understand, preserve assets, contest, and recover?",
    "maturity": "Evidence-First Case",
    "type": "Outside-In Research",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/Shopee-Account-Restrictions-Customer-Resolution-Under-Platform-Uncertainty-39e6210cf1c780e59278fdabe558ff57"
  },
  {
    "path": "/work/vinamilk-trusted-nutrition",
    "title": "Vinamilk — Trusted Nutrition Product-Service Discovery",
    "question": "What trusted nutrition proposition deserves to exist, and how can its valued attributes survive cold-chain delivery, scale, and allocation governance?",
    "maturity": "Developed Outside-In Research",
    "type": "Discovery & Operating Research",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/Vinamilk-Trusted-Nutrition-Product-Service-Discovery-3a16210cf1c780c88ff5cb1a31d22a6e"
  },
  {
    "path": "/work/datvietvac-fandom-cards",
    "title": "DatVietVAC Fandom Cards — Gated Collectibles Product Line",
    "question": "Can an official 12-card fandom pack turn fleeting broadcast attention into an everyday collectible social object and earn the next product-line investment?",
    "maturity": "Operating & Growth Case",
    "type": "IP Commercialization",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/DatVietVAC-Fandom-Cards-From-Official-Fandom-Pack-to-a-Gated-Collectibles-Product-Line-3bb6210cf1c78187817af591d7aced63"
  },
  {
    "path": "/work/datvietvac-ownership-belonging",
    "title": "DatVietVAC — Ownership & Belonging Merchandise Growth Case",
    "question": "How should broadcast entertainment translate cultural attention into durable merchandise revenue, licensed product lines, and community identity?",
    "maturity": "Strategy & Operations Deck",
    "type": "Merchandise Growth",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/DatVietVAC-Ownership-Belonging-Merchandise-Growth-Case-3ba6210cf1c78109b32be340581c11c4"
  },
  {
    "path": "/work/fanme-controlled-growth",
    "title": "FanMe Controlled Growth Pilot — Repeatable Artist-Launch System",
    "question": "How can an early-stage creator platform run a controlled growth pilot that validates unit economics and fan retention before committing infrastructure?",
    "maturity": "Controlled Pilot Report",
    "type": "Platform Pilot",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/FanMe-Controlled-Growth-Pilot-Building-a-Repeatable-Artist-Launch-Operating-System-3b36210cf1c781a7a892d8a5484c3f5a"
  },
  {
    "path": "/work/creator-platform-operating-model",
    "title": "MFan Platform Fragmentation & Trust Chain Integration",
    "question": "When creator platform features fragment across disconnected tools, how does an integrated trust chain restore identity continuity and fulfillment reliability?",
    "maturity": "Operating Model White Paper",
    "type": "Platform Architecture",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/Creator-Platform-Operating-Model-MFan-fandom-commerce-3926210cf1c7808ea5b8ca1f0d975302"
  },
  {
    "path": "/work/post-signing-artist-label-operations",
    "title": "Post-Signing Artist / Label Operations — Invisible Infrastructure",
    "question": "What operational infrastructure must be in place after signing an artist to ensure asset management, release scheduling, and royalty reporting don't collapse?",
    "maturity": "Operations Case Study",
    "type": "Label Operations",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/Post-Signing-Artist-Label-Operations-3926210cf1c780448dfae5e58d79a084"
  },
  {
    "path": "/work/elfie-trust-safe-activation",
    "title": "Elfie HealthTech — Trust-Safe Activation System",
    "question": "In a B2B2C digital health ecosystem, how do you activate users and sustain daily logging habits without compromising clinical trust or data privacy?",
    "maturity": "Product Operations Case",
    "type": "HealthTech Activation",
    "mode": "product-ops",
    "source": "https://app.notion.com/p/yunero1206/Elfie-Product-Case-Trust-Safe-Activation-3926210cf1c780138d3dfb16dba10e43"
  },
  {
    "path": "/work/adobe-account-restriction",
    "title": "Adobe Account Restriction — When Enforcement Interrupts Work",
    "question": "When automated compliance or payment flags restrict professional SaaS accounts, what transparent dispute mechanisms preserve critical client deliverables?",
    "maturity": "Comparative Analysis",
    "type": "SaaS Operations",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/yunero1206/Work-Library-37d6210cf1c7804b933af056f81215ea"
  },
  {
    "path": "/work/vietnam-diamond-market-crisis",
    "title": "Vietnam Diamond Market Crisis — When the Trust Chain Breaks",
    "question": "What happens when seller, verifier, brand guarantor, and listed-company disclosure pathways fracture under market stress?",
    "maturity": "Full Working Paper",
    "type": "Market Governance",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/yunero1206/Work-Library-37d6210cf1c7804b933af056f81215ea"
  },
  {
    "path": "/work/diamond-trust-chain-collapse",
    "title": "Diamond Trust Path — Making Decision Support Visible",
    "question": "How can decision-support systems make asset verification, provenance tracking, and custody handoffs transparent to non-expert buyers?",
    "maturity": "Working Paper v0.2",
    "type": "Trust Architecture",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/yunero1206/Work-Library-37d6210cf1c7804b933af056f81215ea"
  },
  {
    "path": "/work/pathway-lens-operational-cycles",
    "title": "Pathway Lens — AI Risk, Drift, Evidence, and Recovery Cycles",
    "question": "When automated AI systems drift or fail, how to reconstruct the T0 baseline, verify evidence provenance, and execute a structured 10-step recovery cycle?",
    "maturity": "White Paper & Framework",
    "type": "Systems & AI Governance",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/yunero1206/Pathway-Lens-37d6210cf1c780958d76e86daef14258"
  },
  {
    "path": "/work/explainable-trust",
    "title": "Explainable Trust — Traceable Case Reconstruction",
    "question": "Can an AI-assisted workspace help a person reconstruct a situation under uncertainty without losing the distinction between evidence, report, inference, and unknown?",
    "maturity": "Built Product Sample",
    "type": "Interactive Tool",
    "mode": "evidence-first",
    "source": "https://app.notion.com/p/yunero1206/Explainable-Trust-Traceable-Case-Reconstruction-3c06210cf1c781cd87b9edde5f1dfa6c"
  },
  {
    "path": "/apps/explainable-trust",
    "title": "Explainable Trust Intelligence Application",
    "question": "Interactive browser workspace for multi-turn claim reconstruction, evidence DAG visualization, W3C PROV-O audit trails, and live web query verification.",
    "maturity": "Live Web Application",
    "type": "AI Decision Engine",
    "mode": "concepts",
    "source": "https://github.com/Yunero1206/Explainable-App"
  }
];

const caseDocuments = {
  "/work/shopee-account-restrictions": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1D89oUiI7CpYbPJdZ-PEOoLJnlcTLR0n5",
        "label": "📄 Đọc Full Paper (DOCX) ↗",
        "title": "Shopee Account Restrictions — Full Paper"
      },
      {
        "type": "diagram",
        "driveId": "1P4qehFvXVP0zhKND4GOm51rZ6Jeuks13",
        "label": "🗺️ Ma trận Khoảng cách (Gap Matrix) ↗",
        "title": "Shopee Account Restriction Gap Matrix"
      },
      {
        "type": "diagram",
        "driveId": "1kSMoBYC7cK7jO4zHy6mvcqJoTVvJu2s5",
        "label": "📊 Hành trình Giải quyết ↗",
        "title": "Shopee Resolution Journey"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1D89oUiI7CpYbPJdZ-PEOoLJnlcTLR0n5\" data-type=\"paper\" data-title=\"Shopee Account Restrictions — Full Paper (DOCX)\">📄 Đọc Full Paper (DOCX) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1P4qehFvXVP0zhKND4GOm51rZ6Jeuks13\" data-type=\"diagram\" data-title=\"Shopee Gap Matrix\">🗺️ Xem Ma trận Khoảng cách ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1kSMoBYC7cK7jO4zHy6mvcqJoTVvJu2s5\" data-type=\"diagram\" data-title=\"Shopee Resolution Journey\">📊 Xem Hành trình Giải quyết ↗</button>\n<a href=\"/apps/explainable-trust\" class=\"f-asset-btn accent\">⚡ Đối soát trên App Explainable Trust ↗</a>\n</asset-bar>\n\n### Can Customers Still Understand, Preserve, Contest, and Recover?\n\n> **Evidence-Based Product Operations Case**\n\n> A privacy-first analysis of 35 coded Threads narratives, Shopee policy, and Vietnam consumer-protection baselines\n\n> Public evidence only · Research cut: 5 August 2026 · Not commissioned by Shopee\n\n\n<diagram-card title=\"Shopee Account Restriction Journey & Resolution Architecture\" driveid=\"1P4qehFvXVP0zhKND4GOm51rZ6Jeuks13\" caption=\"Sơ đồ tổng hợp các trạng thái hành trình và khoảng cách vận hành khi tài khoản bị khóa trên sàn thương mại điện tử.\"></diagram-card>\n\n> **The restriction is one platform event. The customer may still be waiting on an order, refund, balance, benefit, or explanation after that event has been recorded internally. This case asks what minimum resolution pathway should remain visible without requiring the platform to expose its fraud model.**\n\n---\n\n### Executive Summary\n\n- **Problem:** A restriction can affect more than account access. Orders, refunds, balances, benefits, and future transactions may also become uncertain.\n- **Evidence:** 35 public customer narratives were collected and screened; 22 form the core analytical sample. The corpus is purposive and supports pathway analysis, not prevalence or wrongdoing claims.\n- **Observed issue:** Customers in the sample reported different levels of reason clarity, appeal effort, affected interests, and recovery outcomes.\n- **Proposal:** An **Explainable Resolution Case** — one coherent customer-facing source of truth for the current issue, affected interests, required action, review state, timing, outcome, recovery state, and remaining remedy.\n- **Business hypothesis:** Better resolution quality may improve benefit recovery, customer experience, return, repeat purchase, and retention without weakening enforcement controls. This must be tested with Shopee internal data; the public case does not claim that the solution is proven.\n> ↳ ****\n\n**This page is the portfolio summary.**\n\nThe full 22-page case includes the privacy-first evidence register, detailed gap matrix, policy/legal source cards, claim-to-source map, pilot design, metric definitions, guardrails, and evidence boundaries.\n\n\n[Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf](attachment:1ac6410a-2b28-4c4d-a362-28a0bdc110d5:Shopee_Account_Restriction_Resolution_Portfolio_Final_2026-08-05.pdf)\n\n---\n\n### 1. Case Framing — Restriction interrupts a customer benefit, not just an account\n\nCustomers use a marketplace to achieve a downstream benefit: receive a product, complete a time-sensitive purchase, recover a refund, use stored value, or maintain account continuity.\n\nThe research object is therefore the **post-restriction customer-resolution pathway**, not the restriction decision in isolation.\n\n> **Key distinction:** Internal case closure does not necessarily mean the customer problem is resolved.\n\n---\n\n### 2. Research Question and Scope\n\n> **After a marketplace restricts a customer account, does a usable resolution pathway remain visible and actionable to the customer?**\n\nThe case separates three questions:\n\n1. What customers publicly reported experiencing.\n1. What Shopee publicly states in policy/help and complaint processes.\n1. What current legal or regulator baselines require or make available, subject to applicability.\n**Out of scope:** proving individual restrictions erroneous or unlawful; estimating platform-wide failure rates; reverse-engineering fraud controls; inferring undocumented Shopee operations; or claiming the proposed intervention works before testing.\n\n<details><summary>Evidence and method</summary>\n\n\n</details>\n\n---\n\n### 3. Observed Customer Journey — The path fragments after restriction\n\nDifferent initiating events converged into a partially shared post-restriction resolution problem:\n\n> **Intended benefit → restriction/cancellation → search for explanation/support → appeal/review in some cases → mixed recovery or unresolved outcome**\n\nFour recurring analytical signals matter:\n\n- **Reason opacity** — some customers could not identify a sufficiently specific reason.\n- **Appeal effort** — some reported repeated contact or evidence submission.\n- **Mixed recovery** — outcomes ranged from reopening to delayed recovery, relock, permanent lock, or unresolved/unstated outcomes.\n- **Affected interests beyond access** — orders, purchases, balances, benefits, or account continuity could also be involved.\nThis supports studying **resolution quality**, not concluding that all restrictions share one failure mode.\n\n\n<diagram-card title=\"Shopee Account Restriction Journey & Resolution Architecture\" driveid=\"1P4qehFvXVP0zhKND4GOm51rZ6Jeuks13\" caption=\"Sơ đồ tổng hợp các trạng thái hành trình và khoảng cách vận hành khi tài khoản bị khóa trên sàn thương mại điện tử.\"></diagram-card>\n\n*Caption: Synthesis of reported pathway states across a purposive public evidence sample; not an official Shopee process.*\n\n---\n\n### 4. Minimum Contestable Restriction — What should remain possible\n\nFor this case, operational contestability means preserving four customer functions:\n\n> **UNDERSTAND → PRESERVE → CONTEST → RESOLVE / ESCALATE**\n\nThe customer should be able to determine:\n\n- what is restricted and what is affected;\n- the safe-to-disclose reason or rule at issue;\n- where and how to submit a complaint or evidence;\n- current review state and expected timing;\n- what happens to pending orders, refunds, balances, and benefits;\n- the reasoned outcome and practical recovery consequence;\n- what internal or external remedy remains.\nThis is an operational minimum for the case, not a claim that every element is independently mandated by one law.\n\n<details><summary>Policy and legal baseline</summary>\n\n\n</details>\n\n<details><summary>Observed Gap Matrix</summary>\n\n\n</details>\n\n<details><summary>Customer Remedy Ladder</summary>\n\n\n</details>\n\n---\n\n### 5. Platform Governance Diagnosis — Four interface control problems worth testing\n\n<details><summary>Open diagnosis</summary>\n\n\n</details>\n\n---\n\n### 6. Resolution Pathway Components — Make resolution explainable end to end\n\nThe proposal is one integrated pathway with four connected components:\n\n#### Explainable Resolution Case — Proposed source of truth\n\nThe conceptual case surface answers:\n\n- What is my current state?\n- Why am I here?\n- What is affected — and what remains protected?\n- What supports the issue at a safe-to-disclose level?\n- What do you need from me?\n- What is happening now?\n- When will I hear back?\n- What was decided?\n- What happens to my affected interests?\n- What can I do next?\n> **Design principle:** At any point, the customer should be able to determine where the issue sits, why it is there, what is affected, what information is required, what happens next, and when the next state is expected. Explainable does not mean disclosing everything.\n\n\n<diagram-card title=\"Shopee Account Restriction Journey & Resolution Architecture\" driveid=\"1P4qehFvXVP0zhKND4GOm51rZ6Jeuks13\" caption=\"Sơ đồ tổng hợp các trạng thái hành trình và khoảng cách vận hành khi tài khoản bị khóa trên sàn thương mại điện tử.\"></diagram-card>\n\n*Caption: Conceptual customer-resolution interface; proposed, not an existing Shopee product.*\n\n---\n\n### 7. Recommended Pilot — Test resolution without changing detection rules\n\n**Hypothesis:** For a defined subset of eligible restricted buyer accounts, one coherent Explainable Resolution Case may reduce uncertainty and repeat support effort while improving resolution experience and post-resolution customer return, without materially weakening enforcement controls.\n\nFirst pilot principles:\n\n- define eligible account-restriction types and explicit high-risk exclusions;\n- do not change substantive detection thresholds or enforcement criteria;\n- test the resolution interface and cross-functional handoffs;\n- compare eligible cohorts using random assignment where feasible or a controlled phased rollout;\n- pre-register exclusions, metric definitions, comparison windows, guardrails, and stop conditions;\n- determine sample size from Shopee baseline volume and variance rather than inventing public-case targets.\n<details><summary>Headline metrics and guardrails</summary>\n\n\n</details>\n\n---\n\n### 8. Bounded Findings and Unknowns — What this case can support\n\n#### Evidence supports\n\n- Customer-reported difficulty or uncertainty can occur at multiple points in the post-restriction pathway.\n- Reason opacity appears directly in a subset of core narratives; appeal/contact and recovery outcomes are mixed.\n- Affected interests can extend beyond account access.\n- Public policy and legal sources preserve multiple resolution and remedy mechanisms alongside enforcement discretion.\n#### Evidence does not support\n\n- a Shopee-wide prevalence or failure rate;\n- a common root cause across the core sample;"
  },
  "/work/vinamilk-trusted-nutrition": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1A7Vb3TjqG1XYy-Nqw5NxO5rhmfsusYOk",
        "label": "📄 Paper I: Product-Service Discovery (DOCX) ↗",
        "title": "Vinamilk Paper I — Product-Service Discovery"
      },
      {
        "type": "paper",
        "driveId": "1uqkJrgp5o3suO772U_k_q6IiSqOkOExi",
        "label": "📄 Paper II: Everyday Milk Delivery Operations (DOCX) ↗",
        "title": "Vinamilk Paper II — Everyday Delivery Operations"
      },
      {
        "type": "paper",
        "driveId": "1o7FRVt8I86EWGOQ95_Yr8l4xq_lmBxi9",
        "label": "📄 Paper III: Governance & Allocation (DOCX) ↗",
        "title": "Vinamilk Paper III — Beyond the Market Governance"
      },
      {
        "type": "diagram",
        "driveId": "1wE-p_lVQy-1POQsf5gepFptzVV4GHsyn",
        "label": "🗺️ Sơ đồ Kiến trúc Dinh dưỡng ↗",
        "title": "Vinamilk Trusted Nutrition Architecture"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1A7Vb3TjqG1XYy-Nqw5NxO5rhmfsusYOk\" data-type=\"paper\" data-title=\"Vinamilk Paper I — Product-Service Discovery\">📄 Paper I: Khám phá Dịch vụ (DOCX) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1uqkJrgp5o3suO772U_k_q6IiSqOkOExi\" data-type=\"paper\" data-title=\"Vinamilk Paper II — Everyday Milk Delivery Operations\">📄 Paper II: Vận hành Giao sữa Hàng ngày ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1o7FRVt8I86EWGOQ95_Yr8l4xq_lmBxi9\" data-type=\"paper\" data-title=\"Vinamilk Paper III — Governance & Allocation\">📄 Paper III: Quản trị & Phân bổ Năng lực ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1wE-p_lVQy-1POQsf5gepFptzVV4GHsyn\" data-type=\"diagram\" data-title=\"Vinamilk Architecture Diagram\">🗺️ Sơ đồ Kiến trúc ↗</button>\n</asset-bar>\n\n> **This case started with a quiet-store observation. The first instinct was to redesign the store; the research became more interesting when I asked whether the product and occasion had been proven before the channel was redesigned.**\n\n> **Type:** Product-Service Discovery & Operating Research\n**Stage:** Developed outside-in research\n**Evidence basis:** Direct observation, public company information, comparative product and operating patterns, and clearly labeled hypotheses\n**Last updated:** July 2026\n**Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated. Each later stage depends on evidence produced by the earlier gate.\n\n### Case at a glance\n\n- **Observation:** Some Vinamilk-branded stores appeared quiet, with limited reasons for customers to stay, return, or consume products immediately.\n- **Initial instinct:** Redesign the retail experience with seating, served drinks, takeaway, delivery, and a stronger digital layer.\n- **Reframe:** Before changing the channel, determine whether there is a product and consumption occasion that customers would willingly pay for again.\n- **Core decision:** Discover a repeatable trusted-nutrition proposition first; choose the operating format only after the proposition earns evidence.\n- **Boundary:** Current demand, internal feasibility, and implementation readiness remain unvalidated.\n### Decision path\n\nQuiet-store observation\n        ↓\nProduct architecture\nWhat form is worth testing?\n        ↓\nOccasion & paid repeat\nWho buys, when, why, at what price, and do they return?\n        ↓\nIndustrialization\nCan valued attributes survive simplification?\n        ↓\nChannel choice\nStore / Kiosk / Partner / Other format\n        ↓\nScale decision\nProceed / Narrow / Redirect / Stop\n\n> **Test the product architecture first, the occasion second, the operating model third, and the channel format fourth.**\n\n---\n\n### Why trust changes the problem\n\n> **A nutrition product is not merely a formulation or a drink. It is a trust package whose value depends on the integrity, transparency, and consistency of every step from nutritional science to consumption.**\n\nA beverage chain may primarily compete through taste, convenience, price, and environment. Vinamilk carries a different customer expectation.\n\nCustomers may also ask:\n\n- What is the drink made from?\n- Is it fresh milk, powder, concentrate, or a hybrid?\n- How much sugar and protein does one serving contain?\n- Is the water and ice controlled?\n- Was it prepared to a standard?\n- How long is it safe and enjoyable to consume?\n- Does the process preserve the nutritional promise?\nFor Vinamilk, trust is not a communication layer added after product development. It is an operating outcome that must be designed into the entire product-service system.\n\n---\n\n### Stage 1 — Discover what deserves to exist\n\nThe first decision is:\n\n> **What trusted nutrition proposition deserves to exist?**\n\nIt does not assume that “Everyday Milk,” a particular store format, or even liquid milk is the correct answer.\n\nIt establishes a discovery program for testing:\n\n- Liquid, powder, concentrate, and hybrid product architectures.\n- Taste, texture, ice compatibility, and consumption-window stability.\n- Nutritional, safety, and trust integrity.\n- Customer occasion, willingness to pay, and paid repeat behavior.\n- Premium and everyday propositions.\n- Simplification and industrialization potential.\n- Sustainability implications across ingredients, packaging, waste, water, energy, and cold chain.\nIts purpose is twofold:\n\n1. Produce a decision about the current proposition.\n1. Establish the foundations of a reusable organizational capability for evaluating future trusted-nutrition opportunities through evidence rather than assumption.\nThe discovery program may legitimately conclude that the proposition should stop, remain premium-only, move to a different channel, or advance to operating design.\n\n> **Gate:** Is there a validated Product-Occasion Brief strong enough to justify operating design?\n\n---\n\n### Stage 2 — Preserve what customers valued\n\nThis stage activates only after Stage 1 produces an authoritative, validated Product-Occasion Brief.\n\nThe next decision is:\n\n> **How can Vinamilk deliver, learn from, and scale the validated proposition without losing its nutritional, trust, or operational integrity?**\n\nIt covers:\n\n- Innovation and everyday operating formats.\n- Product industrialization and serving standards.\n- Store, kiosk, partner-channel, and other format choices.\n- Product, recipe, nutrition, and trust master data.\n- SOP, training, QA, audit, and traceability.\n- Make / Buy / Customize / Partner / Reuse decisions.\n- Fulfilment, pickup, delivery, and digital capabilities.\n- KPI, guardrails, stage gates, and replication.\n- Sustainability controls and future circular options.\nThe store remains important, but it is no longer treated as the default solution. It may be a laboratory, a channel, a learning environment, or one format among several.\n\n> **Gate:** Can the proposition survive simplification, repeated delivery, and real operating constraints without losing the attributes that created trust and repeat behavior?\n\n---\n\n### Operating choice — Innovation Store vs. Everyday Format\n\nThe distinction is functional, not decorative.\n\n#### Milk Innovation / Occasion Development Store\n\nIts job is to learn:\n\n- What taste and sensory attributes customers value.\n- Which nutrition and trust signals create confidence.\n- Which occasions generate paid repeat behavior.\n- Which formulations and preparation methods are worth industrializing.\n- Which propositions belong in other channels.\nIt optimizes for **preference and learning**.\n\n#### Everyday / General Format\n\nIts job is to deliver a validated proposition:\n\n- At an accessible price.\n- With acceptable and consistent taste.\n- Through a fast, low-variance workflow.\n- With clear nutritional information.\n- With controlled waste and contribution economics.\nIt optimizes for **repeatability and habit**.\n\nThe key handoff is the Industrialization Gate:\n\n> Can the system simplify the recipe without losing the attributes that caused customers to trust, value, and repeat it?\n\n---\n\n### What this could become strategically\n\nThe largest opportunity may not be opening a new store chain.\n\nVinamilk is already strong in dairy science, manufacturing, quality control, supply chain, and national distribution. The proposed capability extends that chain beyond the retail transaction:\n\nNutrition Science\n        ↓\nProduct Architecture\n        ↓\nIndustrialized Preparation\n        ↓\nConsumption Occasion\n        ↓\nCustomer Behavior and Confidence\n        ↓\nContinuous Product Learning\n        ↺\n\nThis creates a form of **occasion intelligence** that traditional sell-in data cannot provide:\n\n- What customers choose at different times and contexts.\n- Which sensory attributes create repeat.\n- Which nutrition information affects choice.\n- Which products work in premium versus everyday formats.\n- Which occasions belong in stores, gyms, campuses, hospitals, offices, or partner channels.\nThe strategic capability is not an app or a store network. It is the ability to repeatedly create, test, preserve, and distribute trusted nutrition propositions across multiple occasions and channels.\n\n> **Discovery outputs become organizational capability only when they are documented, governed, and designated as the authoritative inputs for subsequent investment decisions.**\n\n---\n\n### Decision, not destination\n\nSuccess is not defined only as proving that an Everyday Milk retail concept should scale.\n\nA disciplined stop decision can also be successful if the evidence shows that:\n\n- Customers prefer consuming milk at home.\n- The proposition is attractive only within a premium niche.\n\n<diagram-card title=\"Vinamilk Trusted Nutrition Product-Occasion Architecture\" driveid=\"1wE-p_lVQy-1POQsf5gepFptzVV4GHsyn\" caption=\"Sơ đồ Kiến trúc Dịp tiêu dùng và Mạng lưới Cung ứng Lạnh Vi mô Vinamilk Trusted Nutrition.\"></diagram-card>"
  },
  "/work/datvietvac-fandom-cards": {
    "assets": [
      {
        "type": "deck",
        "driveId": "1nf4QF8uil2kvsXKZ9Rtabo4YoOZJlvHl",
        "label": "📊 Xem Slide Deck (PPTX) ↗",
        "title": "DatVietVAC Fandom Cards Slide Deck"
      },
      {
        "type": "paper",
        "driveId": "1LxiNT4GnIrg-W5yWLZAqgU-jmWiZICIF",
        "label": "📄 Đọc Case Study Chi tiết (DOCX) ↗",
        "title": "DatVietVAC Fandom Cards Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1nf4QF8uil2kvsXKZ9Rtabo4YoOZJlvHl\" data-type=\"deck\" data-title=\"DatVietVAC Fandom Cards — Slide Deck (PPTX)\">📊 Xem Slide Deck (PPTX) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1LxiNT4GnIrg-W5yWLZAqgU-jmWiZICIF\" data-type=\"paper\" data-title=\"DatVietVAC Fandom Cards — Full Case Study (DOCX)\">📄 Đọc Case Study Chi tiết (DOCX) ↗</button>\n</asset-bar>\n\n### One listing changed the starting question\n\nIn the exploratory Shopee pull for *Anh Trai Say Hi*, one card listing from one seller showed more than 30,000 units sold. The pull was not exhaustive, so I use that number only as a demand signal; it was enough to shift the product question toward what an official 12-card pack would need to do better.\n\n> **Merchandise Initiative / Outside-In Working Case · Developed Work Sample**\n\n> Updated 16 August 2026 · Public evidence only · Not commissioned by DatVietVAC\n\n\n![Diagram / Image](attachment:5917f081-db95-4077-b459-eceb29cd8160:00_cover_ready.png)\n\n> **Core question:** Can DatVietVAC turn already-observed demand for artist cards into an official 12-card product that fans carry, share, display and trade in everyday life — then use repeated drop evidence to earn a gated collectibles product line?\n\n---\n\n### Executive Summary\n\n- **Product promise:** Official enough to trust. Personal enough to carry. Simple enough to share.\n- **Pilot unit:** one IP/program · one launch/drop occasion · one sealed **12-card pack** · one public MSRP.\n- **Working price:** **VND89K preferred working MSRP** when it preserves a visibly better official quality bar; **VND79K** remains a value-engineering sensitivity only if that quality bar survives.\n- **Authentication:** no owner registry, crypto or NFC requirement. Build a reproducible **physical manufacturing signature** across substrate, print, surface, cut and packaging.\n- **Behavior thesis:** 12 cards create enough social inventory to keep, gift, share, carry, display and trade. Event/concert moments can concentrate launch demand; everyday life is where circulation is tested.\n- **Social-object kill rule:** if packs sell but both designed interaction and post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. The card may remain merchandise if its direct economics justify it.\n- **Scale logic:** **prototype → drop pilot → repeated product line → conditional annual box → collectibles pod → selective internalization.** Each stage is an earned option, not a default roadmap.\n> ↳ ****\n\n**Strategic bet**\n\nDatVietVAC does not need to manufacture community. It needs to issue an official object good enough to circulate, give fans enough cards to keep and share, and then observe what actually happens after checkout. Direct card P&L must still stand on its own.\n\n---\n\n### 1. The Human and Business Opportunity\n\nDatVietVAC already has a dense entertainment ecosystem: programs, artists, content moments, concerts, distribution and D2C surfaces. The outside-in problem is therefore not lack of content. It is whether the IP owner can turn visible existing demand for artist cards into an official product that is materially better and worth carrying.\n\nIn the exploratory Shopee pull used for this case, one **Anh Trai Say Hi** card listing from one seller showed more than **30,000 units sold**. Hundreds of other products and sellers were visible, but the pull was not exhaustive across listings, product lines or platforms. This is directional demand evidence, not market size, and it does not by itself establish the authorization status of each seller or listing.\n\nThe observed category is therefore not starting from zero. The product opportunity is to compete with existing outside-channel supply through official content access, stronger material/print/finish, consistent packaging and a recognizable manufacturing signature; seller authorization still needs to be checked rather than assumed.\n\nThe human mechanism is broader than event trading. A 12-card pack gives one buyer enough inventory to keep favorite cards, gift one or two to friends, trade duplicates, carry a card in a phone case or card holder, attach it to a bag, photograph it or post it. Events can concentrate launch attention, but **daily life is the real usage environment**.\n\n> **Working thesis:** the card is an object, a signal and social inventory. The company can make the object trustworthy and easy to circulate; fans decide whether repeated sharing, carrying, display and exchange become belonging.\n\nThe mechanism is plausible, not guaranteed. If the card sells but remains socially inert after checkout, it may still be a valid merchandise SKU. It does not automatically earn a community thesis.\n\n\n![Diagram / Image](attachment:b9089fb5-fd61-41e7-8f2f-f776c02a816a:01_initiative_summary.png)\n\n---\n\n### 2. Product Architecture: Program → Drop Occasion → Pack → Conditional Annual Box\n\nThe architecture fixes four levels:\n\n1. **Program / IP** — provides the year-long content universe, rights framework and common issuer/manufacturing grammar.\n1. **Drop occasion** — creates freshness and a reason to buy now. A concert/event is a strong pilot catalyst, but later drops can also follow program milestones, artist moments or other culturally meaningful releases.\n1. **Pack** — the commercial unit: always **one sealed 12-card pack** in the pilot and base product-line design; its value should continue after the launch occasion through everyday circulation.\n1. **Annual box** — a later program-level archive/collector product: **12 sealed packs × 12 cards + one collectible**, considered only after multi-drop gates pass.\nThis hierarchy prevents two common drifts: redesigning the pack every time the occasion changes, and assuming a box simply because a program is large.\n\n#### Why 12 cards\n\nThe earlier two-card proposition was too thin. Twelve cards create a stronger opening ritual, more visible value-in-hand, room for a clear slot promise and better comparison of physical quality. More importantly, they create **shareable social inventory**: enough cards for one buyer to keep favorites, gift or share one or two, display others and still have duplicates or gaps that make exchange natural.\n\n#### Working pack anatomy\n\nThe slot structure is a working collation hypothesis, not a final odds table. Exact rarity, artist distribution and variants remain production decisions after rights, content and demand review.\n\n\n![Diagram / Image](attachment:d5fc3542-825a-4ee3-b020-3408294dd957:02_benchmark_mechanism_map.png)\n\n---\n\n### 3. Boundary Versus the Event Joining Card\n\n> **Design boundary:** do not bind the everyday Fandom Card to the Event Joining Card history system. One needs controlled provenance; the other needs frictionless circulation.\n\n---\n\n### 4. Authenticity Through a Manufacturing Signature\n\nV2 drops the assumption that every card needs a premium anti-counterfeit device. The pilot instead establishes a **reproducible physical fingerprint** that fans can learn and that the company or a specialist can inspect more deeply when a dispute occurs.\n\nThe signature spans:\n\n- **Substrate:** stock family, thickness/caliper, weight range, opacity, stiffness and internal core.\n- **Print:** color targets, black density, sharpness, halftone/rosette, registration and back alignment.\n- **Surface:** gloss/matte level, texture and coating response.\n- **Cut:** dimensions, corner radius, centering and edge cleanliness.\n- **Packaging:** wrapper film, seal, print, batch/lot mark and official reference.\n#### Fan-facing three-step check\n\n1. **Feel and stack** — compare rigidity, thickness, edge/core, size, cut and surface against a known official card.\n1. **Look under normal and angled light** — compare color, text sharpness, back alignment, print pattern, gloss/texture and wrapper seal.\n1. **Escalate disputed cards** — compare with official references/retained samples or an approved specialist; no account binding is required.\n> **Pilot rule:** no blockchain, crypto or ownership transfer. No NFC requirement. Holo or texture may identify a special content tier, but the official manufacturing signature must exist across the entire product family.\n\n\n![Diagram / Image](attachment:aaf688fc-1e1e-4024-bec3-7d0b8710eb2a:03_card_pack_architecture.png)\n\n---\n\n### 5. Drop Occasion and Everyday Circulation Test\n\nAn event or concert is a useful **launch catalyst** because it supplies fresh cultural content, concentrated demand and a shared context. It is not the only place where the product should create value.\n\nThe operating loop is:\n\n**Select → compose → produce → release → circulate → observe → decide.**\n\nThe pilot can still provide one light and fair exchange opportunity — for example a clearly signed table or short trade hour — without making rewards or attendance contingent on trading. But the broader test continues after the event.\n\nEveryday circulation is observed through behavior: did buyers keep and carry cards, gift or share them with friends, display them in phone cases/card holders/bags, photograph or post them, trade duplicates, trigger conversations, or return for another drop?\n\n> ✕ ****\n\n**Social-object kill rule**\n\nIf packs sell but both the designed interaction opportunity **and** post-drop daily circulation remain weak after one reasonable iteration, kill the broader social-object thesis. Continue only as merchandise if the direct economics justify it.\n\nA weak trade table alone is not enough to kill the idea; Vietnamese fan behavior may express itself through friend-to-friend gifting, school/social-group exchange, carry/display or UGC instead. DatVietVAC should support emergence, not declare a community into existence. A marketplace, grading service, price index, resale guarantee, reseller program or always-on creator network should not be the first move.\n\n\n![Diagram / Image](attachment:4ad7d230-b284-41a6-8852-868b945eb57d:04_physical_auth_fingerprint.png)\n\n---\n\n### 6. Pilot, Measurement and Economics\n\n#### Working 90-day pilot\n\n- **Program / IP:** one active program with visible demand and enough artist/moment variety.\n- **Occasion:** one event or concert-linked launch for the pilot, followed by explicit post-drop daily-circulation observation.\n- **Pack:** one sealed 12-card pack.\n- **Checklist:** approximately 30 outcomes as a starting hypothesis.\n- **Price:** one public MSRP; **VND89K preferred working anchor** when it protects the official quality bar. **VND79K** is a value-engineering sensitivity only if material, print, finish, packaging and rights economics remain credible.\n- **Run:** 3,000 packs + pre-agreed reprint option.\n- **Channel:** VieSHOP + one event touchpoint.\n- **Circulation:** checklist + light creator seeding + one optional exchange touchpoint + sampled post-event observation of carry/share/display/gift/trade behavior.\n- **Technology:** no owner system; physical manufacturing signature first.\n- **Annual box:** excluded from pilot.\n#### Everyday circulation signals\n\nTrack a small set of post-checkout behaviors without building an owner ledger: carry/display, share/gift, trade, organic photo/story/UGC, interaction outside official events, “someone asked me about the card,” and repeat purchase for self or another person. Use sampled surveys, interviews and pilot observation rather than tracking each physical card owner.\n\n#### Five pilot gates\n\n#### Two ledgers, not one blended story\n\n- **Direct Card P&L:** pack revenue; physical card/pack COGS; rights/royalty; payment; handling; delivery subsidy; returns/write-off; pilot/team allocation. It must become economically defensible on its own.\n- **Ecosystem Impact:** organic content, carry/display, gift/share, trade, creator repetition, interaction inside and outside official events, artist/program resurfacing and directional cross-purchase. Measure separately; do not invent VND value to hide weak merchandise economics.\n#### V2 pack-economics sensitivity\n\nThe case uses a planning sensitivity, not a public price ladder. With an illustrative **VND27K physical build**, the planning sensitivity estimates product GM around **59.7% at VND89K** and **55.6% at VND79K**, before payment/handling/delivery subsidy and fixed pilot cost. The higher anchor is preferred only if fans can visibly feel the official quality difference; actual tax treatment, artist contracts, logistics, GM hurdle and supplier quotes remain internal validation dependencies.\n\n\n![Diagram / Image](attachment:a4e5a9e7-a48f-4233-9610-ea82b54c4700:05_exchange_cycle_and_metrics.png)\n\n---\n\n### 7. Operating and Rights Architecture\n\n#### One accountable third party\n\n> **Own the specification and acceptance. Outsource the industrial chain through one accountable lead partner.**\n\nFor the pilot, DatVietVAC should avoid splitting prepress, printing, finishing, collation and pack assembly across loosely coordinated vendors. One lead specialist manufacturer/packer should contract for the full physical delivery under a single SOW, even when it uses disclosed subcontractors.\n\nDatVietVAC retains control of final art, rights approval, physical fingerprint, proof sign-off, substitution approval, collation rules, audit samples, lot traceability requirements, retained references and reject/rework decisions.\n\n#### Rights cannot be outsourced away\n\nLegal/IP must confirm which artist likenesses, lyrics, quotes, memes, episode stills, music-related imagery and sponsor marks may be commercially reproduced. The rights design should distinguish:"
  },
  "/work/datvietvac-ownership-belonging": {
    "assets": [
      {
        "type": "deck",
        "driveId": "1YRySrbBxXeBuBIEqcR4R15Lc8rsR8lK1",
        "label": "📊 Xem Strategy Deck (PPTX) ↗",
        "title": "DatVietVAC Merchandise Strategy Deck"
      },
      {
        "type": "paper",
        "driveId": "1FtCRtuuRxoXEIZOKuj7b9e54Vi4-pn9P",
        "label": "📄 Đọc Case Study Chi tiết (DOCX) ↗",
        "title": "DatVietVAC Ownership & Belonging Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1YRySrbBxXeBuBIEqcR4R15Lc8rsR8lK1\" data-type=\"deck\" data-title=\"DatVietVAC Merchandise Strategy Deck (PPTX)\">📊 Xem Strategy Deck (PPTX) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1FtCRtuuRxoXEIZOKuj7b9e54Vi4-pn9P\" data-type=\"paper\" data-title=\"DatVietVAC Merchandise Growth Case (DOCX)\">📄 Đọc Case Study Chi tiết (DOCX) ↗</button>\n</asset-bar>\n\n### Making verified fan contribution persist beyond a transaction or event\n\n> **Merchandise Growth & IP Commercialization Case · Developed Work Sample**\n\n> Public evidence + Merchandise Manager JD · Outside-in case · August 2026 · Not commissioned by DatVietVAC\n\n\n![Diagram / Image](attachment:e39ae892-d278-44ba-bd9b-5b085470dcc2:Verified_History__Ownership__Belonging.png)\n\n> **This case started from two ideas that look emotionally similar but operate very differently: recognizing past customer contribution with ownership at a corporate milestone, and preserving verified event/card history over time. I keep them separate because the first depends on securities feasibility; the second depends on identity, provenance, event operations, and merchandise economics.**\n\n---\n\n### Executive Summary\n\n- **Question:** Can verified fan contribution persist beyond a purchase or event as ownership, history, or recognition—without turning novelty into uncontrolled cost or operational complexity?\n- **Idea 1 — Ownership:** test whether verified high-value historical customers could be recognized through an opt-in ownership mechanism after listing, subject to securities feasibility, approved transfer structure, budget, identity quality, and Legal/IR review.\n- **Idea 2 — Event Joining Card / History:** bind eligible event-linked physical cards to a verified fan account, preserve the exact digital collection history, separate verified attendance from card ownership, and test optional milestone returns and rewards.\n- **Shared primitive:** **User ID + verified historical action.** One idea uses cumulative paid history; the other uses event/card history.\n- **Decision logic:** treat the two ideas as separate experiments. Either one can fail feasibility without invalidating the other.\n> ↳ ****\n\n**This page is the portfolio summary.**\n\nThe full case contains global benchmarks, behavioral research, ownership models, KPI trees, cost scenarios, risk controls, roadmaps, measurement design, and source links.\n\n\n[DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf](attachment:ab45d1e8-fa43-4ad0-a73e-fcd850c3455e:DatVietVAC_Ownership_Belonging_Merchandise_Growth_Case_Study.pdf)\n\n---\n\n### 1. Why Now\n\nThe public case context combines three signals: DatVietVAC’s transition toward a listed-company era, a stated 2026–2030 emphasis on multi-layer IP monetization and the fandom economy, and a Merchandise Manager scope that spans product portfolio, pricing, B2B/B2C growth, event commercialization, suppliers, inventory, P&L, and cross-functional coordination.\n\nThe portfolio question is therefore not simply how to create two promotions. It is how verified customer history could become a durable commercial asset while keeping feasibility, economics, identity, and ownership explicit.\n\n<details><summary>Evidence boundary</summary>\n\n\n</details>\n\n---\n\n### 2. Two Experiments, Not One Program\n\n\n\n#### Idea 1 — Listed-Era Ownership Concept\n\n**Working proposition:** use a fixed historical snapshot of verified net paid value to identify eligible high-value customers, then test an optional ownership-recognition mechanism after listing.\n\n**Why the historical cutoff matters:** the mechanism recognizes value already created rather than encouraging customers to spend more now to qualify.\n\n**Primary dependency:** securities feasibility. Cohort logic, tier economics, identity quality, budget, claim flow, and communications matter only if an approved transfer structure is executable at the intended scale.\n\n**Merchandise role boundary:** own the customer concept, cohort economics, KPI, budget scenarios, and go/no-go recommendation—not securities execution.\n\n\n#### Idea 2 — Event Joining Card: Fan History + Optional Physical Return\n\n**Working proposition:** give each eligible physical event card a unique identity, bind it to a verified fan account, preserve the exact digital collection history, and let fans optionally return selected physical cards at milestones without deleting the memory.\n\n**Important distinction:** **attendance history ≠ card collection history.** Verified attendance should come only from a reliable ticket/check-in/order source; owning a transferable card does not automatically prove attendance.\n\n**Primary dependency:** reliable identity and card provenance. The pilot can begin inside one IP/event/account system rather than waiting for a perfect enterprise-wide fan ID.\n\n**Merchandise role fit:** direct ownership of mechanics, economics, pilot scope, event handoff, reverse flow, KPI, P&L, and scale decision.\n\n\n![Diagram / Image](attachment:1c6e0249-f2b5-4eb8-85c0-b8d28e058c04:Verified_History__Ownership__Belonging(1).png)\n\n\n![Diagram / Image](attachment:949b986b-1c27-4d65-a059-515976ae28d8:Verified_History__Ownership__Belonging(2).png)\n\n---\n\n### 3. One Shared Primitive\n\n> **User ID + verified historical action**\n\nIdea 1 uses cumulative net paid history to test a one-time ownership-recognition mechanism. Idea 2 uses event/card history to create a persistent collection, progress, and achievement layer.\n\nThe strategic thread is the same: **the platform remembers verified contribution and turns it into ownership, history, or recognition.**\n\n> 🃏 ****\n\n**Related but intentionally separate: Fandom Cards**\n\nA new adjacent case tests the opposite operating condition: an accessible official collectible designed for **free circulation without owner identity tracking**. The Event Joining Card means *“I was there”* and needs controlled provenance; the Fandom Card means *“this is who / what I support”* and needs frictionless circulation across carry, gift, share and trade.\n\n**Design rule:** do not bind the everyday Fandom Card to this event-history system.\n\n[DatVietVAC Fandom Cards — From Official Fandom Pack to a Gated Collectibles Product Line →](https://app.notion.com/p/3bb6210cf1c78187817af591d7aced63)\n\n\n![Diagram / Image](attachment:d0a3e91a-d228-439b-97a8-2b8a5cc34ab9:Verified_History__Ownership__Belonging(3).png)\n\n---\n\n### 4. Pilot Before Scale\n\n#### Idea 1 — Feasibility first\n\n1. Confirm the approved transfer path and transaction-data boundary.\n1. Audit identity and net-paid logic before designing tiers.\n1. Cap the share pool and model claim economics.\n1. Dry-run eligibility, claim, exception, and reconciliation flows before any public announcement.\n1. Measure the claim funnel, friction, data integrity, cost, and post-campaign customer behavior where comparison is feasible.\n> **Go / no-go:** do not announce until eligibility data is stable, transfer is executable at intended volume, budget is capped and reconcilable, and campaign language clearly separates recognition from investment advice or expected return.\n\n#### Idea 2 — One IP, two events\n\n1. Start with one IP/event/account boundary.\n1. Serialize cards and test bind/claim, duplicate handling, history, progress, and recovery.\n1. Use Event 1 to measure activation and operating friction.\n1. Fix the flow, then repeat at Event 2.\n1. Make the scale decision from fan acceptance, archive use, operational load, error rate, repeat behavior, and contribution-margin evidence.\nThe measurement can be staged to separate effects:\n\n- **Phase A:** history only.\n- **Phase B:** history + visible progress.\n- **Phase C:** history + progress + reward.\nThis helps distinguish the value of memory from gamified progress and from discounting.\n\n---\n\n### 5. What Success Should Mean\n\nThe case does not use reach alone as proof of value.\n\n**Idea 1** should be judged through eligibility accuracy, claim completion, friction, budget/reconciliation quality, and downstream customer behavior—not post-listing share price.\n\n**Idea 2** should be judged through card binding, archive revisits, collection depth, milestone behavior, repeat event/purchase behavior, operating errors, CS burden, and contribution-margin evidence.\n\n> **Scale only when behavior, economics, and operating reliability move together.** If only vanity engagement improves, redesign rather than scale.\n\n---\n\n### 6. Ownership Without Role Confusion\n\nThe Merchandise Manager owns the commercial outcome and keeps the right functions connected.\n\nFor **Idea 1**, Group-level IR, Finance/Treasury, Legal/Compliance, Data/CRM, Product/Tech, CS, and an approved securities partner would need explicit responsibilities before launch.\n\nFor **Idea 2**, Product/Tech, Data/CRM, Event Production, Creative/IP/Talent, suppliers, VieSHOP/E-commerce, Logistics, Finance, CS, and Legal/Privacy form the operating chain.\n\n> **Role principle:** protect the outcome → identify the functional owner → support execution → escalate when the issue exceeds authority or capacity.\n\n---\n\n### 7. Bounded Findings and Unknowns\n\n**Supported by the current case**\n\n- comparable public programs show that customer ownership recognition, persistent event memorabilia, and optional physical-return mechanics have real-world precedents;\n- behavioral research provides hypotheses for psychological ownership, goal-gradient effects, and visible progress;\n- the two proposed ideas can be structured as separate experiments around verified historical action;\n- Idea 2 can be piloted inside a narrow identity boundary without first solving enterprise-wide identity.\n**Still requires internal validation**\n\n- identity quality and cross-channel joins;\n- historical spend and card-count distributions;\n- securities-transfer feasibility and approved communication structure;\n- margin, reward economics, supplier/serialization capacity, and reverse-flow cost;\n- fan acceptance and actual post-event card-retention behavior;\n- current team ownership, platform capability, and implementation capacity.\n---\n\n### What This Case Demonstrates\n\n**Merchandise growth · IP commercialization · customer-history mechanics · reward economics · product and event operations · ownership/governance · measurement design · pilot and scale gates**\n\n---\n\n*Independent outside-in work sample · Public evidence only · August 2026*"
  },
  "/work/fanme-controlled-growth": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1e_bzbwLPPUHHiWK7Orc2fwUXiTszIf5g",
        "label": "📄 Đọc Báo cáo Native Editable Final (PDF) ↗",
        "title": "FanMe Controlled Growth — Native Editable Final"
      },
      {
        "type": "paper",
        "driveId": "1xmTAEMaGe3nLKtCxqOc_Oa_LvCz51rOU",
        "label": "📄 Đọc Working Doc Pilot (PDF) ↗",
        "title": "FanMe Controlled Growth Pilot"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1e_bzbwLPPUHHiWK7Orc2fwUXiTszIf5g\" data-type=\"paper\" data-title=\"FanMe Controlled Growth — Native Editable Final (PDF)\">📄 Đọc Báo cáo Native Editable Final (PDF) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1xmTAEMaGe3nLKtCxqOc_Oa_LvCz51rOU\" data-type=\"paper\" data-title=\"FanMe Controlled Growth Pilot (PDF)\">📄 Đọc Working Doc Pilot (PDF) ↗</button>\n</asset-bar>\n\n### Can FanMe turn one artist launch into a repeatable operating capability?\n\n> **Controlled Growth & Launch Operations Case · Developed Work Sample**\n\n> Six-week outside-in operating-readiness and artist-launch plan\n\n> Public evidence and direct product observation only · Not commissioned by DAO or FanMe\n\n\n![Diagram / Image](attachment:d78df09b-28f5-4ae9-b683-e1f9a2a3eb2f:ChatGPT_Image_Aug_10_2026_03_09_18_PM.png)\n\n> **An artist can bring demand into FanMe quickly. The harder test is whether that burst can pass through login, a meaningful fan action, support, fulfilment, and commercial closure without turning the launch into a custom rescue project. The second artist is where I would test whether the operating system actually transfers.**\n\n---\n\n### Executive Summary\n\n- **Current stage:** FanMe is treated as a live early-stage platform whose immediate challenge is formation and operating readiness—not the absence of a long-term vision.\n- **Role outcome:** Create a reliable operating system through which artist initiatives can launch and improve without every campaign becoming a custom rescue project.\n- **Growth lever:** Use controlled fan bursts from artist engagement and offline moments rather than waiting for a fully mature platform or opening traffic without containment.\n- **Pilot:** A six-week sequence from reality mapping and critical-path hardening to one anchor launch, productization, and a second-artist transfer test.\n- **Success test:** The second artist should require adaptation—not a complete rebuild, new tracker, or new emergency workflow.\n> ↳ ****\n\n**This page is the portfolio summary.**\n\nThe full case contains the detailed role model, capability map, technical-delivery controls, operating records, risk matrix, roadmap, scale gates, strategic horizon, and public evidence links.\n\n**Full document here:** \n\n\n[FanMe_Controlled_Growth_Pilot.pdf](attachment:6ae22654-574c-4478-ae1e-8860c1566814:FanMe_Controlled_Growth_Pilot.pdf)\n\n**Attach presentation here:** \n\n\n[FanMe Controlled Growth — Native Editable Final.pdf](attachment:8582aa7e-b821-4e13-83aa-374b6dabe4e6:FanMe_Controlled_Growth__Native_Editable_Final.pdf)\n\n---\n\n### 1. Current-Stage Diagnosis\n\nFanMe should not be approached as a mature-platform integration problem. The immediate question is narrower:\n\n> **What must work first, in what sequence, with which owners and recovery paths, before FanMe expands artist scope or product ambition?**\n\nThe first case should therefore build and test one repeatable launch system rather than design the entire future fandom ecosystem.\n\n#### Evidence boundary\n\nThis is an outside-in case based on public product surfaces, public company information, and direct journey observation. It does not claim access to internal analytics, architecture, staffing, contracts, unit economics, roadmaps, or operating playbooks.\n\n<details><summary>What requires internal validation</summary>\n\n\n</details>\n\n---\n\n### 2. Strategic Lever — Controlled Fan Burst\n\n> **Borrow artist demand, constrain the first fan journey, observe everything, recover quickly, and expand only after the launch system transfers to another artist.**\n\n#### Minimum fan journey\n\n> **Artist push / offline moment → FanMe landing → login → follow or meaningful action → benefit / order / event → status and support → return**\n\nThree conditions must exist before broader traffic:\n\nThe technical workstream supports this operating goal. Operations defines the critical journey, expected traffic shape, unacceptable failure states, visibility, and recovery requirements; Product/Tech selects and implements the architecture.\n\n---\n\n### 3. Role Understanding — Operating Integrator, Not Human Middleware\n\nThe Project & Operations Manager connects artist commitments, Product/Tech delivery, fan-facing execution, commerce and fulfillment, customer support, partner performance, settlement, and management reporting.\n\n> **Protect the outcome → identify the owner → support execution → escalate when the issue exceeds authority or capacity.**\n\nThe role should not personally absorb every task or become the only bridge between functions and vendors.\n\n#### Responsibility lanes\n\n- **Platform & Product Operations:** requirements, release coordination, UAT, incidents, analytics, and backlog visibility.\n- **Artist & Campaign Readiness:** commitments, rights, approvals, assets, fan promise, launch brief, and go/no-go readiness.\n- **Commerce, Fulfillment & Fan Continuity:** order/benefit states, exceptions, partner SLAs, support, and recovery.\n- **Reporting, Commercial Closure & Learning:** reconciliation, settlement, operating effort, post-launch evidence, and next-decision memo.\n---\n\n### 4. Minimum Operating System\n\nThe system should remain simple enough to live inside existing tools. Its purpose is to keep commitments, rights, capacity, delivery, recovery, money, and learning connected.\n\n> **Promise & commitment → rights & approval → capacity & readiness → controlled launch → CS and fulfillment recovery → commercial closure → learning and change**\n\n#### Core records\n\n<details><summary>AI-assisted operating watcher</summary>\n\n\n</details>\n\n---\n\n### 5. Six-Week Controlled Growth Pilot\n\nOffline activation belongs inside the same loop—not as a separate vanity project:\n\n> **Artist / event attention → QR or code → FanMe login → follow / claim / purchase / check-in → account-visible status or benefit → post-event return**\n\n---\n\n### 6. Measurement and Scale Gates\n\n#### Pilot success statement\n\n> **FanMe can launch and support one artist initiative reliably, then transfer the same operating system to a second artist without disproportionate manual rescue.**\n\nHeadline signals:\n\n- login success, session continuity, and Tier 0 error/latency;\n- first meaningful action and post-launch return;\n- payment/order or benefit completion and exception rate;\n- support entry, repeat contact, resolution, and incident closure time;\n- manual hours by workstream and number of custom steps required for Artist Two;\n- partner exceptions, fulfillment ageing, settlement discrepancies, and commercial closure;\n- approval lead time, blocked dependencies, emergency changes, and time to produce a decision-ready post-launch report.\nScale only when:\n\n- the critical journey is stable;\n- artist readiness, permissions, and approval versions are real;\n- the fan promise has an owner, status source, communication trigger, and recovery path;\n- each critical lane has capacity, backup, and a WIP/no-go limit;\n- support can see enough context to resolve the fan problem;\n- fulfillment, settlement, and commercial closure are traceable;\n- manual effort is bounded and the second artist does not recreate the workflow;\n- technical delivery has a named owner, controlled system access, documentation, committed capacity, and incident support.\n<details><summary>Decision rules after the first two artists</summary>\n\n\n</details>"
  },
  "/work/creator-platform-operating-model": {
    "assets": [
      {
        "type": "paper",
        "driveId": "19I_k2JylMG-edAikJInhwXRKLOrCXC14",
        "label": "📄 Đọc White Paper (PDF) ↗",
        "title": "MFan Platform Fragmentation White Paper"
      },
      {
        "type": "paper",
        "driveId": "1_t5G2PN-7UzqgbaKIlWn3zLntOG-iLYs",
        "label": "📄 Đọc Case Study & Lộ trình (DOCX) ↗",
        "title": "MFan Platform Case Study V2.1"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"19I_k2JylMG-edAikJInhwXRKLOrCXC14\" data-type=\"paper\" data-title=\"MFan Platform Fragmentation & Trust Chain Integration (PDF)\">📄 Đọc White Paper (PDF) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1_t5G2PN-7UzqgbaKIlWn3zLntOG-iLYs\" data-type=\"paper\" data-title=\"MFan Case Study & Lộ trình Chi phí (DOCX)\">📄 Đọc Case Study & Lộ trình (DOCX) ↗</button>\n</asset-bar>\n\n> **A fan can move through an artist page, payment flow, ticketing partner, merch order, and support channel without any one of those surfaces being broken. The trouble starts when identity, entitlement, payment, fulfilment, and support stop carrying the same operating truth.**\n\n> **Type:** Outside-in Operating Model\n**Stage:** Working Model\n**Evidence basis:** Public product signals, observed journeys, market patterns, and operational inference\n**Last updated:** August 2026\n**Boundary:** A proposed outside-in model requiring validation against actual workflows, systems, constraints, and incident data.\n\n> **Supporting artifact:** \n\n\n[MFan Platform Fragmentation & Trust Chain Integration.pdf](attachment:c8932069-f795-4938-86d2-f83a4689dfbc:MFan_Platform_Fragmentation__Trust_Chain_Integration.pdf)\n\n---\n\n### The operating problem\n\nA fan may encounter one creator ecosystem through an artist page, membership layer, campaign surface, merch store, ticketing partner, payment provider, logistics provider, and support channel. None of those surfaces has to be broken for the overall journey to become difficult.\n\nThe problem appears when state stops travelling with the fan. Identity may be known in one place, payment in another, entitlement somewhere else, while fulfilment and support each hold their own version of what happened. The same fan can then be asked to prove a purchase or benefit repeatedly because the systems around the journey do not preserve one reliable operating record.\n\nThat matters more in fandom commerce because the transaction may also create access, recognition, membership status, event participation, or another promised benefit. A missing ticket, failed VIP benefit, duplicated account, delayed order, payment mismatch, or unclear refund can therefore affect the fan–artist relationship as well as the transaction itself.\n\nThis case asks a narrower operating question: **what is the minimum shared layer needed so separate surfaces can preserve the same identity, entitlement, transaction state, owner, evidence, and recovery record where those states need to agree?**\n\n### Operating diagnosis\n\nThe fragmentation is easier to inspect by following the state that should remain consistent across each pathway.\n\n### Shared operating layer\n\nA shared operating layer is useful only where separate surfaces need to preserve the same identity, entitlement, transaction state, owner, or recovery record. It does not require replacing every artist page, vendor, payment provider, ticketing partner, or workflow.\n\nThe minimum working model has six capabilities:\n\n#### 1. Central Fan ID\n\nA shared identity reference across membership, commerce, ticketing, events, and support. It links only the identifiers and states needed for continuity, entitlement, service, reporting, and recovery; it is not a reason to centralize every available fan data point.\n\n#### 2. Entitlement Ledger\n\nA shared record of what access, benefit, item, or status was created by a membership, payment, campaign, or partner action, and its current state. The purpose is simple: when a benefit is questioned, different teams should be able to see whether the promise exists, whether it has been used, and whether it is disputed or recovered.\n\n#### 3. Payment and Order Reconciliation\n\nA layer that aligns payment, order, entitlement, fulfilment, and refund states. It is most useful for exceptions such as payment succeeded but no order was created, an order exists without its entitlement, a refund is in progress but invisible to support, or a vendor has no fulfilment instruction.\n\n#### 4. Ticketing and Event Access Sync\n\nA shared view of ticket identity, fan identity, membership eligibility, transfer state, usage, and onsite recovery authority. The operating question is whether an authorized operator can determine what access should exist and recover it quickly when the venue experience fails.\n\n#### 5. Fulfilment and Customer Support Integration\n\nA support record that carries enough fan, order, payment, entitlement, vendor, shipment or event, communication, owner, and next-action context to resolve the issue without asking the fan to reconstruct the pathway.\n\n#### 6. Artist and Campaign Reporting\n\nA partner view that brings campaign demand, benefit delivery, transaction and settlement state, ticket or attendance signals, fulfilment, support incidents, unresolved risk, and recovery outcomes into one operating picture. Confirmed data should remain distinguishable from estimates or incomplete partner feeds.\n\n### Core workflow map\n\nA simplified pathway is:\n\n> Fan enters an artist or campaign surface\n\n→ Identity is recognized or created\n\n→ Fan takes a membership, purchase, or event action\n\n→ Payment and order are reconciled\n\n→ Entitlement is created\n\n→ Vendor, ticketing, or fulfillment action is triggered\n\n→ Status remains visible to support and operator teams\n\n→ Artist or campaign reporting is updated\n\n→ Failure enters a recovery pathway\n\n→ Outcome updates the operating record\n\nThe critical design question is not whether every step uses one tool.\n\nIt is whether the steps preserve shared state, ownership, and evidence.\n\n### Who owns the next action?\n\nThe exact organization structure is unknown, so this is a proposed responsibility split rather than a claim about MFan’s current teams.\n\n> ↪️ ****\n\n**Handoff rule:** Several teams may contribute to one case, but one team should hold the next action until another owner explicitly accepts the handoff.\n\n### Growth logic — hero campaigns and indie density\n\nLarge artist campaigns can create strong demand and visible platform moments.\n\nThey may also create operational peaks, partner-specific customization, and high public consequence.\n\nA scalable creator platform also needs a minimum operating package for smaller or independent creators.\n\n#### Minimum Indie Operating Kit\n\nA possible minimum package includes:\n\n- verified creator profile;\n- basic fan identity;\n- membership or supporter tier;\n- simple entitlement rules;\n- payment and settlement status;\n- campaign or store template;\n- basic support route;\n- standard reporting;\n- clear escalation boundary.\nThe strategic question is not whether every creator receives the same service.\n\nIt is which operating components must remain standard so the platform can scale without multiplying hidden manual work.\n\n### Implementation pathway\n\n#### Phase 0 — Audit and baseline\n\nMap:\n\n- current surfaces;\n- user journeys;\n- identity systems;\n- vendors;\n- payment states;\n- entitlement rules;\n- support channels;\n- reporting flows;\n- recurring failure cases.\nOutput:\n\n- current-state pathway map;\n- shared status definitions;\n- top trust-critical breakdowns;\n- integration and ownership gaps.\n#### Phase 1 — Trust stabilization\n\nPrioritize visible operational failures before building a large architecture.\n\nExamples:\n\n- payment/order mismatch;"
  },
  "/work/post-signing-artist-label-operations": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1inOKQt0C8BG65WnAg742y6SD1wXHI5Ka",
        "label": "📄 Đọc Case Study Vận hành (PDF) ↗",
        "title": "Post-Signing Artist Label Operations"
      },
      {
        "type": "paper",
        "driveId": "15wqsnFzfeKI-Yh8GS52G2Sht_YcQew9I",
        "label": "📄 Đọc Fandom Page Specs (PDF) ↗",
        "title": "Artist Fandom Page Specs"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1inOKQt0C8BG65WnAg742y6SD1wXHI5Ka\" data-type=\"paper\" data-title=\"Post-Signing Artist Label Operations Case Study (PDF)\">📄 Đọc Case Study Vận hành (PDF) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"15wqsnFzfeKI-Yh8GS52G2Sht_YcQew9I\" data-type=\"paper\" data-title=\"Artist Fandom Page Specs (PDF)\">📄 Đọc Fandom Page Specs (PDF) ↗</button>\n</asset-bar>\n\n> **A signed deal looks like an ending from the outside. Operationally, it creates a queue of rights, approvals, campaigns, payments, reporting, fan promises, and exceptions that now have to stay connected.**\n\n> **Type:** Operating Model / Role-Understanding Work Sample\n**Stage:** Working Model\n**Evidence basis:** Public industry patterns, role analysis, and operating inference\n**Last updated:** August 2026\n**Boundary:** An independent synthesis—not an internal label process, official industry standard, or validated universal model.\n\n> **Supporting artifact:** \n\n\n[Post-Signing_Artist_Label_Operations_Case_Study.pdf](attachment:059233fb-599d-4448-85e1-e9b74177b847:Post-Signing_Artist_Label_Operations_Case_Study.pdf)\n\n---\n\n### The operating problem\n\nA signed agreement can settle commercial intent while leaving the operating work unresolved. Rights still need to become approval rules; promises need owners and dates; campaigns need dependencies cleared; payments and reporting need visible states; fan-facing failures still need a route back to the partnership team.\n\nThe useful question is therefore narrower than “how do we manage artists?”:\n\n> **How do we keep commitments visible after signing, especially when several teams, vendors, and fan-facing systems participate in the same promise?**\n\nThis working model treats the agreement as the start of an operating pathway: translate the deal into repeatable work, preserve one source of truth, and make changes and recovery traceable.\n\n### Before signing — standard spine, explicit exceptions\n\nCustomization is normal. The risk begins when basic operating structure is customized too, because every new partnership can then create its own hidden workflow.\n\n> 🧭 ****\n\n**Rule:** Standardize how the work is coordinated; customize the commercial and creative choices that actually need to differ.\n\n### Post-signing lifecycle\n\nThe lifecycle can stay simple as long as each handoff preserves the operating state.\n\n> → ****\n\n**Signed → Setup → Translate commitments → Plan & approve → Execute → Report & settle → Recover → Renew / exit**\n\nAt every transition, three things should remain visible: **current state, next owner, and evidence of what was agreed.**\n\n### Seven operating workstreams\n\nThe workstreams are not seven departments. They are seven kinds of state that can break when ownership, records, or handoffs become unclear.\n\n### Artist Operating File — minimum source of truth\n\nThe Artist Operating File should point people to the current operating truth without becoming a second uncontrolled archive.\n\n> 📌 ****\n\nThe file should preserve **where the authoritative record lives, what state it is in, and who owns the next action**. It does not need to duplicate every raw document or conversation.\n\n### Control Tower maturity — four earned layers\n\nA Control Tower should grow only when coordination burden earns the next layer.\n\n> △ ****\n\n**Foundation → Coordination → Control → Learning**. Each layer adds structure only after the previous layer is no longer enough.\n\nThis is a heuristic maturity path, not a validated numerical threshold.\n\n### Change workflow — one traceable line\n\nChange is normal. The failure happens when authority, downstream impact, or the final state gets separated from the request.\n\n> → ****\n\n**Request → Impact & authority → Update source of truth → Notify & close**\n\n### Trust and crisis recovery — three phases\n\n> ↩️ ****\n\n**Recovery rule:** closing the internal task is not enough. Recovery ends when the affected relationship and operating pathway have been restored as far as reasonably possible.\n\n### What I would validate first\n\n1. Which of these workstreams actually exist, and who holds decision authority in each?\n1. Where do commitments, approvals, and exceptions currently live?\n1. Which handoffs still depend on personal memory or repeated explanation?\n1. Which changes create the largest downstream cost across rights, campaign, finance, support, or fan experience?\n1. How do fan incidents travel back to the partnership team and artist/label relationship?\n1. What is the smallest operating file and coordination layer that would materially reduce burden before a larger Control Tower is justified?\n### Current boundary\n\nThis case does not establish how any specific label, artist-management team, or platform currently operates. It also does not prove that every partnership needs all seven workstreams, a centralized file, or a Control Tower.\n\nThe model is useful only if internal discovery shows that commitments are being lost across handoffs, states are difficult to reconcile, or recovery depends too heavily on individual memory. Where lighter standards or existing systems already preserve that continuity, they should remain in place.\n\n### Final takeaway\n\nSigning gives the relationship a legal and commercial starting point. The operating work keeps later commitments legible: **what was promised, what changed, who owns the next action, what evidence exists, and how the pathway recovers when delivery goes wrong.**\n\nThe next useful test is against one real organization, portfolio, and operating cadence."
  },
  "/work/elfie-trust-safe-activation": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1hgDQhElyST-u8U78in8hwF723rl20Als",
        "label": "📄 Đọc Full Paper V4 (DOCX) ↗",
        "title": "Elfie Product Case — Trust-Safe Activation"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1hgDQhElyST-u8U78in8hwF723rl20Als\" data-type=\"paper\" data-title=\"Elfie Product Case — Trust-Safe Activation V4 (DOCX)\">📄 Đọc Full Paper V4 (DOCX) ↗</button>\n</asset-bar>\n\n> **Elfie’s public product surface spans more than one user role: self-monitoring, sponsored programs, research participation, and professional workflows. That makes activation interesting because reaching first value is only useful if the user still understands which role they are in, what data is moving, and what remains under their control.**\n\n> **Type:** Product Strategy Work Sample\n**Stage:** Developed Work Sample\n**Evidence basis:** Public company materials, reference-product patterns, and product inference\n**Last updated:** July 2026\n**Boundary:** Internal baselines, roadmap, contracts, clinical maturity, regulatory interpretation, and data architecture are unknown; numeric targets and sequencing remain hypotheses.\n\n### Reading Route\n\n**Quick orientation:** Executive summary → Product diagnosis → North-star direction → MVP roadmap\n\n**Product logic:** Trust-Safe Activation pathway → Product components → Metrics and impact hypotheses\n\n**Execution review:** Experiment set → Instrumentation → Roadmap → Risks and validation requirements\n\n**Decision lens:** Improve first value and retained routine without increasing role confusion, coerced consent, dishonest reporting, unsafe sharing, or downstream overclaiming.\n\n---\n\n### Executive summary\n\nPublic materials reviewed for this case present Elfie as more than a free health-rewards application.\n\nThe broader product surface appears to include consumer self-monitoring, sponsor-funded health programs, research or real-world-evidence use cases, and professional or care-related workflows.\n\nThe product challenge is therefore not only user acquisition.\n\nIt is whether the product can turn free access, rewards, self-reported behavior, program participation, research consent, reporting, and professional workflows into a low-friction system that remains understandable and trustworthy to users.\n\nThis case proposes **Trust-Safe Activation** as a product direction:\n\n> Help users reach first health value quickly, make role and data boundaries visible at the moment they matter, improve routine and data quality, and translate retained behavior into useful partner or care outcomes without weakening user control.\n\nThe proposal includes:\n\n- a bounded activation funnel;\n- progressive trust mechanics;\n- event instrumentation;\n- data-quality and reward guardrails;\n- reactivation flows;\n- a patient-controlled health summary;\n- partner-level reporting hypotheses;\n- a 0–12 week MVP roadmap.\nAll numeric targets are directional hypotheses to be replaced by internal baseline data.\n\n### Product context\n\nThe product may need to serve several roles.\n\n\n[Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx](attachment:7fd08a14-d0b1-4051-983d-5256f83930a9:Pham_Thanh_Phu_Elfie_Product_Case_Trust_Safe_Activation_v4.docx)\n\n#### Consumer self-monitoring\n\nPossible needs:\n\n- medication reminders;\n- measurement tracking;\n- symptom or behavior logs;\n- refill reminders;\n- health reports;\n- rewards;\n- family support.\nPrimary product question:\n\n> Can the user reach one useful health action quickly and build a repeatable routine?\n\n#### Sponsor-funded programs\n\nPossible participants:\n\n- pharmaceutical partners;\n- insurers;\n- employers;\n- public-health organizations;\n- hospitals or care partners.\nPrimary product question:\n\n> Can the product create program value without making the user feel that a sponsor is invisibly observing or controlling personal behavior?\n\n#### Research participation\n\nPossible needs:\n\n- separate consent;\n- participation state;\n- withdrawal;\n- data-quality visibility;\n- audit trail;\n- cohort reporting.\nPrimary product question:\n\n> Can research participation remain distinguishable from ordinary app use?\n\n#### Professional or care workflows\n\nPossible public directions include pre-visit support, summaries, documentation, evidence support, or workflow assistance.\n\nPrimary product question:\n\n> Can patient-generated information become useful to a professional without being mistaken for diagnosis, verified clinical truth, or an instruction that bypasses professional review?\n\nThe same person may move between roles.\n\nThey may be:\n\n- a general app user;\n- a participant in a sponsored program;\n- a research participant;\n- a family-sharing user;\n- a patient sharing a report;\n- a person whose self-reported data enters a professional workflow.\nRole clarity is therefore a product requirement, not only a policy requirement.\n\n### Product diagnosis\n\nElfie’s public model can be interpreted as commercially coherent:\n\n- users receive a free health companion;\n- rewards may reinforce engagement;\n- partners support programs;\n- structured behavior may create research, reporting, or care value.\nThe model is also trust-sensitive.\n\nThe main product risk is not necessarily that a privacy policy is absent.\n\nIt is that users may not understand their role, sponsor, data use, or sharing boundary at the exact moment those conditions change.\n\n#### Problem statement\n\n> How might Elfie improve activation quality and downstream program value while helping users understand their role, why the product is free, what data is used, what is not shared, and which actions remain under their control?\n\n### Goals and non-goals\n\n#### Goals\n\n- reduce time to first useful health action;\n- improve D7 and D30 routine formation;\n- preserve honest self-reporting;\n- make role and consent transitions visible;\n- create useful patient-controlled summaries;\n- improve partner-level measurement without exposing unnecessary personal detail;\n- create clear recovery when a user enters the wrong role or shares the wrong information.\n#### Non-goals\n\n- diagnosing or treating a condition;\n- replacing clinician judgment;\n- maximizing consent or data sharing;\n- turning every user into a research participant;\n- treating rewards claimed as the primary success metric;\n- assuming that all public product surfaces are equally mature or integrated.\n### Stakeholder and role-boundary map"
  },
  "/work/adobe-account-restriction": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1AucoQYTdasYLsAyu9ZdzX-Zz8Ah32GE8",
        "label": "📄 Đọc Comparative Paper (DOCX) ↗",
        "title": "Adobe Account Restriction Comparative Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1AucoQYTdasYLsAyu9ZdzX-Zz8Ah32GE8\" data-type=\"paper\" data-title=\"Adobe Account Restriction Comparative Case Study (DOCX)\">📄 Đọc Comparative Paper (DOCX) ↗</button>\n</asset-bar>\n\n### Case Overview\nA comparative study of SaaS account restriction mechanisms, examining what occurs when enforcement interrupts professional workflows, project continuity, and asset access.\n\n### Core Research Questions\n1. **Enforcement vs. Work Continuity:** When an account is locked due to billing anomalies or compliance triggers, how can creative assets and active client deliverables be safely preserved?\n2. **Contestable Resolution:** What transparent dispute channels exist to distinguish automated fraud triggers from legitimate professional use?\n3. **Recovery SLA:** What minimum turnaround time guarantees business continuity for enterprise subscribers?"
  },
  "/work/vietnam-diamond-market-crisis": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1B6R9nYmo093G6lkJNc9l23JDtlw48hUZ",
        "label": "📄 Đọc Full Working Paper (DOCX) ↗",
        "title": "Vietnam Diamond Market Crisis Case Study"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1B6R9nYmo093G6lkJNc9l23JDtlw48hUZ\" data-type=\"paper\" data-title=\"Vietnam Diamond Market Crisis Case Study (DOCX)\">📄 Đọc Full Working Paper (DOCX) ↗</button>\n</asset-bar>\n\n### Case Overview\nA public-evidence study of what happens when seller, verifier, brand guarantor, buyback provider, and listed-company disclosure pathways are stress-tested together in high-value asset markets.\n\n### Key Evidence & Mechanisms\n- **Verification Authority:** How third-party grading certificates (GIA, internal labs) operate under market stress.\n- **Liquidity & Buyback Commitments:** The operational strain on retail balance sheets when customer redemption rates surge.\n- **Disclosure Traceability:** Separating empirical market conjunctions from causal corporate claims."
  },
  "/work/diamond-trust-chain-collapse": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1kC-2lpFzTh1ghVje8FIKFxRjAsFuurQs",
        "label": "📄 Đọc Working Paper v0.2 (DOCX) ↗",
        "title": "Diamond Trust Path Working Paper"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1kC-2lpFzTh1ghVje8FIKFxRjAsFuurQs\" data-type=\"paper\" data-title=\"Diamond Trust Path Working Paper v0.2 (DOCX)\">📄 Đọc Working Paper v0.2 (DOCX) ↗</button>\n<a href=\"/apps/explainable-trust\" class=\"f-asset-btn accent\">⚡ Đối soát trên App Explainable Trust ↗</a>\n</asset-bar>\n\n### Case Overview\nAn analytical framework for mapping trust dependencies across high-value asset verification, custody handoffs, and customer decision pathways.\n\n### The 4 Trust Gates\n1. **Provenance & Ingestion Gate:** Confirming origin and certification lineage.\n2. **Custodian Responsibility Gate:** Traceable ownership across intermediaries.\n3. **Secondary Market Valuation Gate:** Transparent pricing and buyback conditions.\n4. **Remedy & Escrow Gate:** Clear escalation when grading or authenticity is contested."
  },
  "/work/pathway-lens-operational-cycles": {
    "assets": [
      {
        "type": "paper",
        "driveId": "1858xcpoMD0i0x2zkCp5hwAMgh6S_nt92",
        "label": "📄 Đọc Full White Paper (DOCX) ↗",
        "title": "Pathway Lens White Paper"
      },
      {
        "type": "paper",
        "driveId": "1-Hay5or8WaYJ8Jj422C7ZutdwJXocWuH",
        "label": "📄 Đọc Operational Cycles Framework (MD) ↗",
        "title": "Pathway Lens Operational Cycles Framework"
      }
    ],
    "body": "<asset-bar>\n<button class=\"f-asset-btn primary f-asset-trigger\" data-driveid=\"1858xcpoMD0i0x2zkCp5hwAMgh6S_nt92\" data-type=\"paper\" data-title=\"Pathway Lens White Paper (DOCX)\">📄 Đọc Full White Paper (DOCX) ↗</button>\n<button class=\"f-asset-btn f-asset-trigger\" data-driveid=\"1-Hay5or8WaYJ8Jj422C7ZutdwJXocWuH\" data-type=\"paper\" data-title=\"Pathway Lens Operational Cycles (MD)\">📄 Đọc Framework (MD) ↗</button>\n<a href=\"/apps/explainable-trust\" class=\"f-asset-btn accent\">⚡ Trải nghiệm AI Recovery Engine trên App ↗</a>\n</asset-bar>\n\n> **An AI output is rarely the consequence. The consequence appears after someone trusts it, stores it, reuses it, or lets it change a real workflow.**\n\nResearch lens · Working model · Used in case analysis, stress tests, and operational review\n\nPathway Lens is the working lens I use to trace that movement from output to reliance, record, action, scale, memory, or real-world consequence. It is not a universal AI-risk framework or a substitute for legal, technical, regulatory, or safety review.\n\n### Core question\n\n> **What is this AI output, signal, recommendation, or action allowed to become?**\n\nThe same output may be low-risk as a private draft and high-impact when it becomes an external message, system-of-record entry, decision input, API call, production change, public claim, transaction, or future system memory.\n\n### How I use the lens\n\n1. **Name the output** — What was produced, inferred, recommended, or triggered?\n1. **Trace the pathway** — Who or what may trust, reuse, store, scale, or act on it?\n1. **Mark the boundary** — Where does it become durable, actionable, authority-bearing, amplified, or difficult to reverse?\n1. **Test the consequence** — What evidence, ownership, containment, correction, and recovery are available?\n### Supporting tools\n\n\n\n> ↳ ****\n\n**01 / Review the pathway**\n\n[Pathway Governance Starter Kit](https://app.notion.com/p/37d6210cf1c7801ea860dde9470ded0a)\n\nTen questions before an AI pathway enters real workflows, records, tools, or transactions.\n\n\n> ↳ ****\n\n**02 / Place the controls**\n\n[Practical Boundary Controls](https://app.notion.com/p/3866210cf1c7816e8628f3611d4c94b9)\n\nIdentify where the pathway must remain visible, slowable, stoppable, and recoverable.\n\n\n> ↳ ****\n\n**03 / Learn and standardize**\n\n[From Pathways to Operational Standards](https://app.notion.com/p/39f6210cf1c78128bf6ce687d5c80bbd)\n\nTurn recurring incidents and stress-test findings into reusable categories and review standards.\n\n> ↳ ****\n\n**Related inquiry**\n\n[AI Apprenticeship — Before AI Becomes an Actor](https://app.notion.com/p/3916210cf1c781f59cfcd49d870b6800)\n\nThe current working hypothesis asks what AI should learn about mission, boundaries, evidence, exceptions, and recovery before it receives operational authority. It informs the lens but is not part of the 01–03 operating sequence.\n\nEarlier concept lineage: [System-Born AI — Inquiry Before Action](https://app.notion.com/p/38a6210cf1c781df85a7c569811f3ea3), preserved as the precursor that led to the apprenticeship formulation.\n\n<details><summary>Working paper and project history</summary>\n\n\n</details>\n\n### Figure suite\n\nThe figures below form the working visual vocabulary of the lens. They support investigation and discussion; they are not a compulsory sequence or a claim of universal coverage.\n\n**Figure 1. The Real AI Risk**  \n\n\n![Diagram / Image](attachment:066962cd-d6c7-4b27-9efa-b0c22a4a7e27:1.png)\n\n**Figure 2. Human-AI-System Evolution Cycle**  \n\n\n![Diagram / Image](attachment:3481bded-e4c7-4cce-9598-96950915e325:2.png)\n\n**Figure 3. Core Drift Types**  \n\n\n![Diagram / Image](attachment:3e52d6bd-5c83-4cb2-9b75-90e7fccb346d:3.png)\n\n**Figure 4. Reflexive and Dynamic Mechanisms**  \n\n\n![Diagram / Image](attachment:67c99aa4-81e4-4ecf-9a8c-df23a8371ba2:4.png)\n\n**Figure 5. Meaning, Translation, and Operational Legibility**  \n\n\n![Diagram / Image](attachment:36b2340d-d6af-48f7-b583-85aec16acf82:5.png)\n\n**Figure 6. Output Pathway Ladder**  \n\n\n![Diagram / Image](attachment:795c3731-381c-4f5e-b244-86f1c24db666:6.png)\n\n**Figure 7. System Impact Diagnostic**  \n\n\n![Diagram / Image](attachment:698164ac-e182-4e9a-b9d9-7f05b961a1d3:7.png)\n\n**Figure 8. Proportionate Pathway Governance**  \n\n\n![Diagram / Image](attachment:b707015f-71ec-41e0-972c-80e10f8ece0d:8.png)\n\n**Figure 9. Pathway Evidence Chain**  \n\n\n![Diagram / Image](attachment:100b4c7d-3e31-4049-8376-37e13fb2e60b:9.png)\n\n**Figure 10. Material Change and Trigger-Based Validation**  \n\n\n![Diagram / Image](attachment:1f73c2b6-ae0a-43dc-8767-058a637f5b5b:10.png)\n\n**Figure 11. Authority Boundary and AAA**  \n\n\n![Diagram / Image](attachment:bbe0e050-5a9d-48b2-a293-37f125025765:11.png)\n\n**Figure 12. Policy-Based Action Modes**  \n\n\n![Diagram / Image](attachment:6cdff372-414c-4886-8de8-7e443e819281:12.png)\n\n**Figure 13. Recovery Architecture**  \n\n\n![Diagram / Image](attachment:9448d01f-54bc-4c6b-ae6e-bf383e41fb58:13.png)\n\n**Figure 14. Governance Drift Monitoring**  \n\n\n![Diagram / Image](attachment:a1b76fff-5ddc-4e39-a0c6-424d5b4ea210:14.png)\n\n**Figure 15. Layered Responsibility Model**  \n\n\n![Diagram / Image](attachment:d6719915-05b0-41da-b746-b819e4916e45:15.png)\n\n**Figure 16. AI-Side Support Conditions**  \n\n\n![Diagram / Image](attachment:be3dcd91-2c92-4e8a-a2e9-4610c6f57547:16.png)\n\n**Figure 17. AI Starter Kit**  \n\n\n![Diagram / Image](attachment:694d21fd-2daa-4165-976e-3589d43a80ca:17.png)\n\n**Figure 18. Case Pattern and Source-to-Practice Map**  \n\n\n![Diagram / Image](attachment:79694879-985b-4859-a951-fb4e0339a9dd:18.png)\n\n### 1. System Lens\n\nThe foundation cycle remains:\n\n**Reality → Interpretation → Shared Working / Meaningful Understanding → Coordination → Translation → Execution → Amplification → Outcome → New Reality**\n\nThis sequence is analytical, not literal. Real systems loop, overlap, and reinterpret. Humans, AI systems, organizations, and institutions repeatedly interpret reality, act on it, change it, and reinterpret the changed reality.\n\nThe system lens matters because AI output is rarely consequential by itself. It becomes consequential when it participates in a human, organizational, technical, legal, financial, or social pathway.\n\n### 2. Drift Lens\n\nDrift describes a gap between reality, interpretation, shared understanding, coordination, translation, execution, amplification, and the new reality produced by the system.\n\nDrift is not only model error. It may begin before a model is called, after an output is produced, or when operational reality changes faster than governance can update.\n\nCore drift types:\n\n1. **Reality / Input Boundary Drift** — the system receives an incomplete, outdated, distorted, over-narrow, over-broad, or poorly bounded reality-slice.\n1. **Interpretation Drift** — humans, AI systems, technical systems, or institutions interpret the same reality-slice differently.\n1. **Shared Understanding Drift** — actors appear to coordinate around the same reference but do not share enough meaning, context, or practical understanding to act responsibly.\n1. **Coordination Drift** — roles, responsibilities, authority, expectations, escalation paths, or handoffs diverge.\n1. **Translation Drift** — meaning changes as it is converted into prompts, fields, tickets, workflows, policies, API calls, code, dashboards, or rules.\n1. **Execution Drift** — output becomes action in a way that exceeds authority, evidence, context, or intended use.\n1. **Amplification Drift** — local output, action, claim, or interpretation is reused, copied, automated, publicized, scaled, or institutionalized beyond its original context.\n1. **Feedback / Reality Drift** — consequences change the reality that later humans, AI systems, or institutions interpret.\nDrift is not always harmful. It becomes risky when a system trusts it, stores it, scales it, acts on it, or cannot reverse it in time.\n\n### 3. Pathway Lens\n\nThe Pathway Lens checks what an AI output, signal, recommendation, or action is allowed to become.\n\nPathway is the route.  \n\nDrift is the distortion.  \n\nVariables explain the distortion.  \n\nGovernance responds to the distortion.\n\nExample output destinations:\n\n- Private draft or personal thinking aid\n- Internal note or low-risk summary\n- Internal recommendation or decision support\n- System-of-record entry or official documentation\n- External communication\n- Tool / API action or workflow trigger\n- Financial, legal, HR, medical, safety, or production consequence\n- Future system input, training data, retrieval source, or institutional memory\nThe same output can have different risk depending on the pathway it enters.\n\n### 4. Governance Lens\n\nGovernance should be proportionate to the pathway.\n\nThe governance lens asks:\n\n- What evidence exists?\n- Who or what has authority?\n- What action mode is allowed?\n- What recovery capacity exists?\n- What control capacity is needed?\n- What happens when the pathway drifts?\nHigh-impact pathways require stronger evidence, clearer authority, stricter action modes, stronger recovery, and more explicit control capacity.\n\n### 5. Evidence"
  },
  "/work/explainable-trust": {
    "assets": [],
    "body": "<asset-bar>\n<a href=\"/apps/explainable-trust\" class=\"f-asset-btn accent\" style=\"padding:10px 20px;font-size:14px;\">⚡ Khởi chạy Explainable Trust App trên Website ↗</a>\n</asset-bar>\n\n> **When a situation is still vague, people naturally start connecting the missing pieces. Explainable Trust moves that reconstruction out of memory and into an inspectable record: what was reported, what is supported, what is inferred, what changed, and what is still unknown.**\n\n> **Type:** Built Product Sample\n**Stage:** Completed sample app · Runnable locally\n**Evidence basis:** Runnable application, implemented end-to-end case flows, repository behavior, automated tests, and product screenshots\n**Last updated:** August 2026\n**Boundary:** The sample demonstrates case reconstruction, correction, provenance, local persistence, bounded public retrieval, and export. It is not deployed as a production service and does not include shared accounts, cloud collaboration, or an operational verification layer.\n\n---\n\n### Why I built this\n\nThe app started from a simple observation: when information is incomplete, the mind does not like leaving the story unfinished. We connect a message to a screenshot, a remembered detail to a public rule, one person's account to another source. That is useful, but over time it becomes difficult to remember where the evidence ended and the reconstruction began.\n\nThe burden gets heavier when a situation unfolds across messages, files, corrections, public sources, and multiple possible explanations. The person has to keep reconstructing the timeline, evidence, assumptions, unresolved questions, and next step in their head.\n\nI built Explainable Trust to externalize that work. The product does not try to make uncertainty disappear by producing a more confident answer. It keeps the current state inspectable: what is known, what is only reported, what is inferred, what remains open, and how the reasoning changed when new information arrived.\n\nCustomer support and disputes are one use case, but not the boundary. The same problem appears in purchases, public events, personal decisions, and smaller everyday situations where facts arrive gradually and from sources with different strengths.\n\n---\n\n### The product question\n\nAn uncertain situation rarely arrives as a clean set of facts. It arrives as fragments with different strengths: a first-person statement, a document, an image, a public rule, a later correction, or a claim that may still be unsupported. The product needs to help reconstruct the situation without collapsing those differences into one confident narrative.\n\nThe product question is:\n\n> **Can an AI-assisted workspace help a person reconstruct a situation under uncertainty without losing the distinction between evidence, report, inference, and what is still unknown?**\n\nBecause that state can change, a second requirement follows: new information should update the case without erasing how the previous state was constructed.\n\nThe working flow is:\n\n> **Describe → reconstruct → inspect → trace reasoning → correct → reconcile → expose gaps → decide what to check next**\n\n### How the app works\n\nThe core design choice is simple: **the model can propose changes, but the application owns the record.**\n\n1. **Start or import a case.** The application creates a local case ledger in the browser rather than treating the chat transcript as the record.\n1. **Submit a statement and optional files.** A user can add text, PDFs, images, or text-based files, then choose **Analysis only** or **Web-assisted** for that run.\n1. **Preserve the intake before interpreting it.** The original statement remains verbatim. Uploaded files receive case-linked metadata and a SHA-256 fixity hash.\n1. **Let the model propose a change, not rewrite the case.** Gemini returns typed operations for events, claims, evidence relationships, gaps, actions, and reasoning.\n1. **Validate before committing.** Application code allocates canonical IDs, reconciles corrections against existing entities, validates the complete candidate revision, and commits it atomically. If validation fails, the last accepted case remains unchanged and the rejected run is retained for audit.\n1. **Project one ledger into several views.** The same accepted state appears as a readable response, timeline, findings, evidence inventory, gaps and actions, interactive case and reasoning DAGs, and a Toulmin argumentation view. Clickable IDs connect each view back to its sources. Selecting a node highlights the connections leading to it, so a user can trace a claim or finding through the reasoning that supports, qualifies, or leaves it unresolved instead of visually scanning the whole graph.\n1. **Carry the case forward.** A later message creates a child revision. Clear corrections retain stable entity IDs; ambiguous corrections fail closed instead of silently creating a duplicate.\n1. **Export or import through separate paths.** The user can download a case-view JSON, copy a Markdown case report or provenance dossier, and print the case view. The importer separately accepts a valid Ledger V3 JSON; the current export and import formats are not a one-click backup-and-restore pair.\n### Working demo — one case, two messages\n\nThis small test starts with a traffic-accident report. The user describes the collision, suspected drunk driving and leaving the scene, vehicle damage, an X-ray visit, and uncertainty about compensation and legal handling. No official police or medical evidence has been added yet.\n\n#### 1 · The first message becomes a case, not only an answer\n\nThe first intake is projected into a case view with a user goal, timeline events, findings, unresolved gaps, and proposed next actions. The response can still explain the current situation in plain language, but the structured record remains separately inspectable.\n\n\n![Diagram / Image](attachment:00881623-b334-494b-a998-556de40bca39:Screenshot_2026-08-19_at_14-52-05_Explainable_Trust__Traceable_Case_Reconstruction.png)\n\nInitial reconstruction from the first user report. The workspace keeps narrative, structured case state, gaps, and next actions visible at the same time.\n\n#### 2 · A later correction changes the affected state\n\nIn the second message, the user corrects the accident time from **18:30 to 19:15** after checking dashcam data and adds information about the other driver. The correction is kept as a new source statement rather than silently replacing the earlier one.\n\nThe useful behavior is not that the model can notice a correction. It is that the application can reconcile the affected event and claim while preserving the earlier source, the new source, and the revision path between them.\n\n\n![Diagram / Image](attachment:46e0d697-a26f-4d56-8be5-f31d8132cb55:Screenshot_2026-08-19_at_14-58-41_Explainable_Trust__Traceable_Case_Reconstruction.png)\n\nSecond intake after the correction. The current case reflects the updated time while still exposing source IDs and revision change.\n\n#### 3 · Unknowns stay visible instead of being completed by the model\n\nThe case still has no admitted evidence for the official accident record or the medical result. Those remain open gaps, with actions asking for scene images/video and medical documents. A source-linked finding can also preserve its scope and limitation rather than presenting a reported statement as independently verified fact.\n\nThat distinction matters here because the product is not trying to turn a user narrative into a verified legal conclusion. It is trying to make **reported state, supporting evidence, missing evidence, and next action** easier to separate.\n\n\n![Diagram / Image](attachment:c11b7978-b406-4b06-a56b-f3f5faa77758:Screenshot_2026-08-19_at_14-59-09_Explainable_Trust__Traceable_Case_Reconstruction.png)\n\n#### 4 · Provenance can be inspected as a network\n\nThe case graph makes the dependency structure visible: user statements connect to events and claims; those records expose unresolved gaps; gaps connect to proposed actions. A correction can therefore be inspected for what it changed downstream instead of disappearing inside a rewritten summary.\n\n\n![Diagram / Image](attachment:a1a2947e-cb90-4212-bb73-bf3251d279a1:Screenshot_2026-08-19_at_15-00-18_Explainable_Trust__Traceable_Case_Reconstruction.png)\n\n\n![Diagram / Image](attachment:32e347a1-acd8-4e53-b112-97f8f6f61952:Screenshot_2026-08-19_at_15-00-29_Explainable_Trust__Traceable_Case_Reconstruction.png)\n\nCase-wide provenance view: user statements → events / claims → gaps → actions.\n\n### Product decisions\n\n### What the completed sample includes\n\nThe architectural constraint is deliberate: **a provider response is not the case**. A candidate revision becomes authoritative only after application-side reconciliation, full-ledger validation, and successful browser commit.\n\n### What the sample deliberately does not include\n\n- **No truth or legal determination.** It does not independently prove that a user statement is true, decide liability, authenticate an object, determine eligibility, or guarantee that legal or policy analysis is correct.\n- **No automatic access to private systems.** It has no connector to a police, hospital, insurer, marketplace, employer, or customer account. Case-specific confirmation must come from a user-supplied record or a direct response from the responsible organization.\n- **No shared cloud workspace.** There are no user accounts, server-side case database, team permissions, real-time collaboration, or automatic cross-device sync. The authoritative case remains in the current browser.\n- **No round-trip backup package.** The current JSON export is a projected case view for review or downstream use, while import accepts the authoritative Ledger V3 format. They are not yet a single portable backup-and-restore flow.\n- **No fully offline model analysis.** In a live run, the submitted statement and supported files are sent through the application server to the configured Gemini provider. The narrower privacy boundary applies to public-web retrieval: Tavily receives only a validated public query and official-domain filters, not the raw private case.\n- **No unrestricted web research.** Public results are admitted only when a direct first-party or responsible public-authority source can support the specific public claim. Media, forums, social posts, aggregators, and model memory cannot close an evidence gap.\n- **No forced correction matching.** If the target of a correction is ambiguous, the application rejects the candidate change rather than guessing or creating a silent duplicate.\n- **No certified chain of custody.** File hashes help detect content changes, but they are not digital signatures, identity verification, notarization, or independent evidence certification.\n- **No production assurance.** The sample does not claim production-grade authentication, security/privacy audit, monitoring, service availability, regulatory compliance, or readiness for unrestricted high-stakes deployment.\n> 🧪 ****\n\n**Scope statement**\n\nThis is a completed functional sample for testing traceable case reconstruction. Its output remains a structured working record for human inspection, not a legal opinion, verified investigation result, or automated decision.\n\n### If I extended the sample\n\nThe scoped sample is complete, but the original product direction was broader than a standalone case workspace. The longer-term idea is a privacy-preserving resolution channel in which the user keeps control of the case, linked organizations can update the process without taking ownership of the user's record, and the product learns from patterns only when users explicitly allow it.\n\nA real-world pilot would first test the current product behavior:\n\n1. **Correction reliability:** when do users phrase a correction clearly enough for stable-ID reconciliation, and when should the system stop and ask?\n1. **Evidence behavior:** do users understand the difference between reported claims, admitted evidence, inference, and unresolved gaps?\n1. **Recovery burden:** after several revisions, can a user still understand what changed and what they need to do next without reading the full history?\n1. **Transfer:** does the same case structure remain useful outside disputes, for example customer-support escalation, insurance, workplace incidents, or other evidence-heavy pathways?\n#### From case workspace to resolution channel\n\nThe next product step would not be to make the app know more about the user. It would be to let the case move between parties while revealing less identity than a normal support workflow.\n\nThe design goal would be **anonymous at the application layer**: the app would not need a conventional user profile, and the server would operate on opaque case identifiers rather than treating real-world identity as part of the product. A user could choose to link a case to a company, platform, insurer, public body, or other responsible party through a bounded case channel. The linked party could then send requests for evidence, status changes, review outcomes, deadlines, or next actions back into the same case record.\n\nFor the user, this would turn repeated support contact into a visible process: **what the organization has received, what is still missing, who or what is currently waiting, what changed, and what happens next.** For the organization, especially customer service, the same structure could reduce repeated explanation, duplicate evidence requests, inconsistent handoffs, and uncertainty about the current case state.\n\n#### A consented analytics model, not silent data extraction\n\nBy default, the individual case would remain private. A separate opt-in would ask whether the user wants to contribute de-identified case signals to aggregate analytics.\n\nThe commercial hypothesis is that linked organizations would pay for those aggregate operational signals, not for access to an identifiable person's case. Useful outputs could include where resolution pathways repeatedly stall, which evidence is most often missing, where customers need repeated contact, how long different states persist, and which handoffs create avoidable recovery burden.\n\nThat creates a different incentive structure from advertising or hidden profiling: the user gets a clearer resolution pathway and can choose whether their de-identified experience contributes to system learning; the organization gets a better view of recurring operational friction; and the product earns from the analytics or integration layer rather than from making identity itself more valuable.\n\n> ↳ ****\n\n### Build and repository\n\nThe public repository contains the runnable application, server boundary, Ledger V3 contract, deterministic proposal application, local persistence, retrieval controls, automated tests, evaluation configuration, and runtime notes.\n\n[Open Explainable-App on GitHub →](https://github.com/Yunero1206/Explainable-App)\n\n[Read the runtime architecture →](https://github.com/Yunero1206/Explainable-App/blob/main/docs/ARCHITECTURE.md) · [Read the public-retrieval boundary →](https://github.com/Yunero1206/Explainable-App/blob/main/docs/AUTHORITATIVE_RETRIEVAL.md)\n\n### Current takeaway\n\nThe prototype is most useful to me as a test of one product assumption: **explainability is not only a better answer. It is the ability to inspect how a changing case reached its current state, what still supports that state, and what remains unresolved.**"
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

function renderEditorialNotion(markdown) {
  if (!markdown) return "";
  
  // 1. Handle custom <asset-bar> and <diagram-card>
  let html = markdown
    .replace(/<asset-bar>([\s\S]*?)<\/asset-bar>/g, (match, inner) => {
      return `<div class="f-asset-bar"><span class="f-asset-bar-title">📎 Tài nguyên đính kèm:</span>${inner}</div>`;
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

  // 2. Headings with Anchors
  html = html.replace(/^(#{1,4})\s+(.+)$/gm, (match, hashes, title) => {
    const level = hashes.length;
    const cleanTitle = title.trim();
    const id = editorialSlug(cleanTitle);
    return `<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${cleanTitle}</h${level}>`;
  });

  // 3. Blockquotes
  html = html.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // 4. Horizontal Rules
  html = html.replace(/^---$/gm, '<hr class="f-hr">');

  // 5. Details / Summaries
  html = html.replace(/<details><summary>(.*?)<\/summary>/g, '<details class="f-details"><summary>$1</summary><div class="f-details-content">');
  html = html.replace(/<\/details>/g, '</div></details>');

  // 6. Unordered Lists
  html = html.replace(/^- \[x\] (.+)$/gm, '<div class="f-bullet">☑ $1</div>');
  html = html.replace(/^- \[ \] (.+)$/gm, '<div class="f-bullet">☐ $1</div>');
  html = html.replace(/^[\*\-]\s+(.+)$/gm, '<div class="f-bullet">$1</div>');

  // 7. Ordered Lists
  html = html.replace(/^(\d+)\.\s+(.+)$/gm, '<div class="f-numbered"><b>$1.</b> $2</div>');

  // 8. Paragraphs
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

  /* Reading editorial philosophy */
  .f-home-reading { display: grid; grid-template-columns: 0.75fr 1.25fr; gap: 60px; padding: 48px 0 56px; border-bottom: 1px solid var(--ink); }
  .f-home-reading h2 { margin: 0; font-size: clamp(2rem, 3.2vw, 3rem); font-weight: 500; line-height: 1.08; letter-spacing: -0.03em; color: var(--navy); }
  .f-home-reading-copy { display: grid; gap: 26px; }
  .f-home-reading-block { border-top: 1px solid var(--ink); padding-top: 4px; }
  .f-home-reading-block h3 { margin: 12px 0 8px; font-size: 1.4rem; font-weight: 700; color: var(--navy); }
  .f-home-reading-block p { margin: 0; color: #3c403d; font-size: 0.98rem; line-height: 1.7; }
  .f-home-reading-block p + p { margin-top: 12px; }

  /* Work Library Page (/work) */
  .f-work-hero p { margin: 14px 0 0; color: #dce5e4; font-size: 1.08rem; max-width: 720px; line-height: 1.6; }
  .f-work-controls { padding: 24px 0 16px; border-bottom: 1px solid var(--ink); display: flex; flex-direction: column; gap: 16px; }
  
  /* Live Search Box */
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

  /* Filter Navigation */
  .f-mode-nav { display: flex; align-items: center; gap: 18px; overflow-x: auto; padding-bottom: 8px; }
  .f-mode { flex: none; border: 0; border-bottom: 2px solid transparent; background: transparent; padding: 0 0 6px; color: var(--muted); font-family: var(--cm); font-size: 0.86rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; }
  .f-mode[aria-pressed=true] { border-color: var(--copper); color: var(--ink); }

  .f-results-bar { display: flex; justify-content: space-between; align-items: center; padding: 14px 0 8px; color: var(--muted); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }

  /* Work Catalog Items */
  .f-catalog-section { padding: 24px 0 32px; }
  .f-catalog-section[hidden] { display: none; }
  .f-section-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px; }
  .f-section-title { display: flex; align-items: baseline; gap: 10px; }
  .f-section-title h2 { margin: 0; font-size: 1.45rem; font-weight: 700; color: var(--navy); }
  .f-section-title span { color: var(--copper); font-size: 0.78rem; font-weight: 700; }

  .f-title-grid { border-top: 1px solid var(--ink); }
  .f-work-item {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(240px, 0.7fr);
    gap: 20px;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
    text-decoration: none;
    color: inherit;
    transition: background-color 0.15s ease;
  }
  .f-work-item:hover { background: rgba(255, 255, 255, 0.45); }
  .f-work-item h3 { margin: 0 0 6px; font-size: 1.25rem; font-weight: 700; line-height: 1.18; letter-spacing: -0.015em; color: var(--navy); transition: color 0.15s ease; }
  .f-work-item .f-item-question { margin: 0; color: #4b5250; font-size: 0.88rem; line-height: 1.5; }
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

  .f-case-boundary { background: #f2e6df; color: #593c31; border-bottom: 1px solid var(--ink); padding: 12px 0; font-size: 0.84rem; line-height: 1.5; }

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
  .f-caption { color: var(--muted); font-size: 0.84rem; font-style: italic; margin-top: -8px; margin-bottom: 20px; }

  /* Details Box */
  .f-details { margin: 20px 0; border: 1px solid var(--line); background: var(--paper-card); padding: 14px 18px; }
  .f-details summary { font-weight: 700; cursor: pointer; color: var(--navy); }
  .f-details-content { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line-subtle); font-size: 0.94rem; }

  /* Source & Provenance Banner */
  .f-source-banner { margin-top: 54px; padding: 24px; border: 1px solid var(--ink); background: #eee8dc; font-size: 0.86rem; line-height: 1.6; }
  .f-source-banner strong { color: var(--navy); }

  /* About Page */
  .f-about-hero-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
    gap: 48px;
    align-items: center;
  }
  .f-about-hero-left h1 {
    font-size: clamp(2.4rem, 4.2vw, 3.6rem);
    line-height: 1.06;
    margin: 0 0 16px;
    color: #f7f3ea;
  }
  .f-about-hero-left p {
    color: #e0e8e7;
    font-size: 1.08rem;
    line-height: 1.65;
    margin: 0 0 20px;
  }
  .f-about-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }
  .f-about-chip {
    display: inline-block;
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    color: #d1dedc;
    font-family: var(--ui);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .f-about-profile-card {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    backdrop-filter: blur(8px);
  }
  .f-about-profile-img {
    width: 110px;
    height: 110px;
    border-radius: 6px;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.35);
    flex-shrink: 0;
  }
  .f-about-profile-info strong {
    display: block;
    color: #f7f3ea;
    font-size: 1.15rem;
    font-family: var(--cm);
  }
  .f-about-profile-info span {
    display: block;
    color: #cbd7d5;
    font-size: 0.8rem;
    font-family: var(--ui);
    line-height: 1.4;
    margin-top: 4px;
  }

  .f-about-layout {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 56px;
    padding: 54px 0 80px;
    align-items: start;
  }
  .f-about-sidebar {
    position: sticky;
    top: 84px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .f-sidebar-box {
    background: #ffffff;
    border: 1px solid var(--ink);
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(19, 38, 47, 0.04);
  }
  .f-sidebar-box h3 {
    margin: 0 0 12px;
    font-size: 0.76rem;
    font-family: var(--ui);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    border-bottom: 1px solid var(--line-subtle);
    padding-bottom: 6px;
  }
  .f-sidebar-stat {
    margin-bottom: 12px;
  }
  .f-sidebar-stat:last-child {
    margin-bottom: 0;
  }
  .f-sidebar-stat b {
    display: block;
    font-size: 1.25rem;
    color: var(--navy);
    font-family: var(--cm);
    line-height: 1.1;
  }
  .f-sidebar-stat span {
    display: block;
    font-size: 0.78rem;
    color: var(--muted);
    font-family: var(--ui);
    margin-top: 2px;
  }

  .f-sidebar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .f-sidebar-nav a {
    color: var(--navy);
    font-size: 0.88rem;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.15s ease;
  }
  .f-sidebar-nav a:hover {
    color: var(--copper);
  }

  .f-about-content section {
    border-top: 1px solid var(--ink);
    padding-top: 28px;
    margin-bottom: 44px;
  }
  .f-about-content section:first-child {
    border-top: none;
    padding-top: 0;
  }
  .f-about-content h2 {
    margin: 0 0 16px;
    font-size: clamp(1.6rem, 2.4vw, 2.1rem);
    font-weight: 700;
    color: var(--navy);
    line-height: 1.15;
  }
  .f-about-content p {
    font-size: 1.02rem;
    line-height: 1.74;
    color: #2b3336;
    margin: 0 0 16px;
  }

  .f-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0 28px; }
  .f-fact { padding: 18px; background: #ffffff; border: 1px solid var(--ink); border-radius: 4px; box-shadow: 0 2px 6px rgba(19,38,47,0.04); }
  .f-fact strong { display: block; font-size: 1.35rem; font-weight: 700; color: var(--navy); line-height: 1.1; margin-bottom: 6px; }
  .f-fact span { display: block; font-size: 0.8rem; line-height: 1.5; color: #435155; }
  
  .f-about-creds {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }
  .f-cred-box {
    background: #ffffff;
    border: 1px solid var(--line);
    border-left: 4px solid var(--navy);
    border-radius: 4px;
    padding: 16px 18px;
    box-shadow: 0 2px 6px rgba(19, 38, 47, 0.04);
  }
  .f-cred-box strong {
    display: block;
    font-family: var(--cm);
    font-size: 1.05rem;
    color: var(--navy);
    margin-bottom: 4px;
  }
  .f-cred-box span {
    display: block;
    font-size: 0.84rem;
    color: #4b5250;
    line-height: 1.45;
  }

  .f-contact { display: flex; flex-wrap: wrap; gap: 14px 24px; margin-top: 28px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; font-family: var(--ui); }
  .f-contact a { text-decoration: underline; text-underline-offset: 4px; color: var(--navy); }
  .f-contact a:hover { color: var(--copper); }

  /* Footer */
  .f-footer { border-top: 1px solid var(--ink); padding: 22px 0 32px; font-size: 0.78rem; color: var(--muted); letter-spacing: 0.04em; }
  .f-footer-row { display: flex; justify-content: space-between; align-items: center; gap: 24px; }
  .f-footer-row a { text-decoration: underline; text-underline-offset: 4px; }

  /* Asset Viewer Modal & Interactive Triggers */
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
    .f-home-grid, .f-about-hero-wrap, .f-about-layout, .f-home-reading, .f-case-reading { grid-template-columns: 1fr; gap: 36px; }
    .f-case-meta-grid { grid-template-columns: 1fr 1fr; }
    .f-meta-cell:nth-child(2) { border-right: 0; }
    .f-meta-cell:nth-child(3) { border-top: 1px solid var(--line); }
    .f-meta-cell:nth-child(4) { border-top: 1px solid var(--line); border-right: 0; }
    .f-case-rail, .f-about-sidebar { position: static; max-height: none; }
    .f-home-section-head { flex-direction: column; align-items: flex-start; }
    .f-home-section-head p { text-align: left; }
    .f-facts { grid-template-columns: 1fr; }
    .f-about-creds { grid-template-columns: 1fr; }
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
    .f-footer-row { flex-direction: column; align-items: flex-start; gap: 12px; }
    .f-about-profile-card { flex-direction: column; text-align: center; }
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
  const modesHtml = finalModes.map((mode, idx) => {
    const num = "0" + (idx + 1);
    return `<a class="f-map-item" href="/work?mode=${mode.id}">
      <span class="f-map-count">${num}</span>
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

    <!-- Hero Section -->
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

    <!-- 1. Research Modes (Moved Above Selected Works) -->
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

    <!-- 2. Selected Works & Research (Structured 4-Card Grid identical to Modes) -->
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
    const items = finalWorkLibrary.filter(item => item.mode === mode.id);
    const itemsHtml = items.map(item => `
      <a class="f-work-item" href="${item.path}" data-mode="${item.mode}" data-title="${escapeHtml(item.title.toLowerCase())}" data-question="${escapeHtml(item.question.toLowerCase())}">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="f-item-question">${escapeHtml(item.question)}</p>
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
            <h2>${escapeHtml(mode.label)}</h2>
            <span>${items.length}</span>
          </div>
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
            const textToSearch = (item.dataset.title + ' ' + item.dataset.question).toLowerCase();
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
${layoutHead("Work Library — Phạm Thanh Phú", "Complete index of 14 cases, operating models, working essays, and interactive prototypes by Phạm Thanh Phú.")}
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

    <div class="f-wrap f-work-controls">
      <div class="f-search-row">
        <div class="f-search-box">
          <input type="search" id="f-search" class="f-search-input" placeholder="Search works by title, question, or domain..." aria-label="Search works">
          <button type="button" id="f-search-clear" class="f-search-clear" hidden aria-label="Clear search">✕</button>
        </div>
      </div>
      <div class="f-mode-nav" aria-label="Filter by research mode">
        ${modeButtons}
      </div>
      <div class="f-results-bar">
        <span id="f-count">${finalWorkLibrary.length} works found</span>
        <span>Independent Outside-in Research</span>
      </div>
    </div>

    <section class="f-wrap" id="catalog">${sectionsHtml}</section>
  </main>
  ${layoutFooter("Work Library Archive")}
  ${clientScript}
</body>
</html>`;
}

function casePage(item) {
  const doc = caseDocuments[item.path] || { assets: [], body: "" };
  const renderedProse = renderEditorialNotion(doc.body || "");

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
    <!-- Hero Section (Balanced 2-Column Layout) -->
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

    <!-- Main Content Layout (Sticky Sidebar + Narrative) -->
    <div class="f-wrap f-about-layout">
      <!-- Sticky Sidebar -->
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

      <!-- Narrative Column -->
      <div class="f-about-content" id="about-content">
        <!-- 1. Operating Grounding -->
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

        <!-- 2. How I Approach Work -->
        <section id="how-i-work">
          <h2>2. How I Approach Work</h2>
          <p><strong>1. Mechanisms over slogans.</strong> I do not stop at calling something a "trust problem" or "engagement drop." I trace the moving parts: what happens after a purchase, what breaks when an account is restricted, or who owns the handoff when an exception arises.</p>
          <p><strong>2. Visible evidence boundaries.</strong> The case monographs on this site are outside-in analytical research based on public records, policy documents, and observable events. I separate confirmed facts, working inferences, and open hypotheses cleanly.</p>
          <p><strong>3. Reversible testing before large commitments.</strong> When organizing acoustic music performances for high school communities in 2024, we ran two free 30-minute pilots before committing to paid three-hour events that generated 400+ drink orders. Test the mechanics small before allocating capital.</p>
        </section>

        <!-- 3. Credentials & Continuous Learning -->
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

        <!-- 4. Career Direction -->
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

  // 1. Check Global Daily Cap
  if (dailyUsageCount >= MAX_DAILY_REQUESTS) {
    return { allowed: false, reason: "Đã đạt giới hạn 100 lượt phân tích miễn phí/ngày của hệ thống. Vui lòng nhập Gemini API Key cá nhân của bạn để tiếp tục." };
  }

  // 2. Check Per-IP Burst Rate (Max 10 requests / minute)
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

  // Enforce maximum payload size to prevent DOS / token exhaustion
  if (statement.length > MAX_STATEMENT_CHARS) {
    return new Response(JSON.stringify({ error: `Độ dài văn bản vượt quá giới hạn an toàn (${MAX_STATEMENT_CHARS.toLocaleString()} ký tự).` }), {
      status: 413,
      headers: securityApiHeaders
    });
  }

  // Validate allowed modes
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
      // Safe failover: proceed with analysis only
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
      // Mask API key from error output
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
      <!-- Rate Limit & API Configuration Notice -->
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

      <!-- App Workspace (2-Column Layout) -->
      <div style="display:grid;grid-template-columns:minmax(0, 1.1fr) minmax(0, 1.4fr);gap:32px;align-items:start;">
        <!-- Input Column -->
        <div style="background:#ffffff;border:1px solid var(--ink);border-radius:8px;padding:24px;box-shadow:0 4px 16px rgba(19,38,47,0.05);">
          <h2 style="margin:0 0 12px;font-size:1.35rem;color:var(--navy);">1. Nhập sự việc / Vấn đề cần đối soát</h2>
          <p style="font-size:0.88rem;color:#4b5250;margin:0 0 16px;line-height:1.5;">
            Mô tả tình huống tranh chấp tài khoản, sự cố giao dịch, hoặc quyết định tự động cần bóc tách ranh giới chứng cứ.
          </p>

          <textarea id="app-statement" rows="7" style="width:100%;padding:12px;border:1px solid var(--ink);border-radius:4px;font-family:var(--ui);font-size:0.9rem;line-height:1.5;resize:vertical;" placeholder="Ví dụ: Tài khoản Shopee của tôi bị khóa vĩnh viễn lúc 14:20 ngày 05/08 vì nghi ngờ vi phạm chính sách voucher. Tôi còn 2 đơn hàng đang giao trị giá 1.200.000 VNĐ và số dư Ví ShopeePay 450.000 VNĐ chưa rút được. Nhân viên hỗ trợ báo không thể cung cấp lý do cụ thể..."></textarea>

          <!-- Preset Templates -->
          <div style="margin:12px 0 18px;display:flex;flex-wrap:wrap;gap:8px;">
            <button class="app-preset-btn" data-preset="shopee" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Khóa tài khoản Shopee</button>
            <button class="app-preset-btn" data-preset="adobe" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Gián đoạn SaaS Adobe</button>
            <button class="app-preset-btn" data-preset="diamond" style="padding:4px 10px;background:var(--mist);border:1px solid var(--line);border-radius:3px;font-size:0.74rem;font-weight:700;cursor:pointer;">Mẫu: Tranh chấp Giám định Kim cương</button>
          </div>

          <!-- Run Mode Options -->
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

        <!-- Output Column -->
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
            <!-- Goal & Summary -->
            <div style="background:var(--mist);padding:14px 16px;border-left:4px solid var(--navy);border-radius:4px;">
              <strong style="display:block;color:var(--navy);font-size:0.95rem;margin-bottom:4px;" id="out-goal">Mục tiêu</strong>
              <p style="margin:0;color:#2b3336;font-size:0.88rem;" id="out-summary">Tóm tắt</p>
            </div>

            <!-- Timeline DAG -->
            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">1. Dòng sự kiện (Timeline Events):</strong>
              <div id="out-timeline" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <!-- Findings -->
            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">2. Nhận định & Ranh giới Chứng cứ:</strong>
              <div id="out-findings" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <!-- Gaps & Actions -->
            <div>
              <strong style="display:block;font-family:var(--ui);font-size:0.78rem;font-weight:800;text-transform:uppercase;color:var(--muted);margin-bottom:8px;">3. Khoảng trống Chứng cứ (Evidence Gaps):</strong>
              <div id="out-gaps" style="display:flex;flex-direction:column;gap:6px;"></div>
            </div>

            <!-- Recovery Path -->
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

      // Load saved key
      const savedKey = localStorage.getItem('user_gemini_key') || '';
      if (savedKey) keyInput.value = savedKey;

      saveKeyBtn.addEventListener('click', () => {
        const val = keyInput.value.trim();
        localStorage.setItem('user_gemini_key', val);
        alert(val ? 'Đã lưu Gemini API Key vào trình duyệt!' : 'Đã xóa Key lưu trữ.');
      });

      // Preset Templates
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

        // Timeline
        const tEl = document.getElementById('out-timeline');
        tEl.innerHTML = '';
        (d.timeline || []).forEach(t => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;display:flex;justify-content:space-between;align-items:center;';
          div.innerHTML = '<span><strong>' + escape(t.time) + ':</strong> ' + escape(t.event) + '</span><span style="font-size:0.72rem;padding:2px 6px;background:#e2e8f0;border-radius:3px;font-weight:700;">' + escape(t.status) + '</span>';
          tEl.appendChild(div);
        });

        // Findings
        const fEl = document.getElementById('out-findings');
        fEl.innerHTML = '';
        (d.findings || []).forEach(f => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;';
          div.innerHTML = '<strong style="color:var(--navy);">' + escape(f.claim) + '</strong><div style="font-size:0.82rem;color:#4b5250;margin-top:2px;">Cơ sở: ' + escape(f.basis) + ' · Độ tin cậy: <b>' + escape(f.confidence) + '</b></div>';
          fEl.appendChild(div);
        });

        // Gaps
        const gEl = document.getElementById('out-gaps');
        gEl.innerHTML = '';
        (d.gaps || []).forEach(g => {
          const div = document.createElement('div');
          div.style.cssText = 'padding:8px 12px;background:#fff1f2;border:1px solid #fecdd3;border-radius:4px;';
          div.innerHTML = '<strong style="color:#9f1239;">Thiếu: ' + escape(g.missing) + '</strong><div style="font-size:0.82rem;color:#4c0519;margin-top:2px;">Hành động: ' + escape(g.action) + '</div>';
          gEl.appendChild(div);
        });

        // Recovery
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
