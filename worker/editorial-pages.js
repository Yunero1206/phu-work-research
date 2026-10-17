import { workPreviews } from './work-previews.js';
import { renderWorkStory } from './work-stories.js';

const previewByPath = new Map(workPreviews.map(preview => [preview.path, preview]));
const selectedWorks = [
  { path: '/work/fanme-controlled-growth', title: 'FanMe — Controlled Growth', detail: 'A proposed artist-launch pilot, with ownership, readiness, and scale gates.' },
  { path: '/work/vinamilk-trusted-nutrition', title: 'Vinamilk — Trusted Nutrition', detail: 'Connecting product-service discovery with delivery, scale, and governance.' },
  { path: '/work/shopee-account-restrictions', title: 'Shopee — Account Restrictions', detail: 'From account resolution to preserving the customer’s commerce outcome.' },
  { path: '/work/explainable-trust', title: 'Explainable Trust', detail: 'Making reasoning, sources, and case revisions visible and inspectable.' }
];

// Static editorial page bodies; document shell, navigation and reading tools stay in index.js.
export function homeContent() {
  return `  <main id="main">
    <header class="f-home-hero f-wrap">
      <div class="f-home-identity">
        <p class="f-home-role">Business Operations · Product Operations · Product Strategy</p>
        <h1>I'm drawn to messy operating problems.</h1>
        <p class="f-home-intent">I enjoy exploring how they work, and keep learning how to make systems, ownership, and the next step clearer.</p>
        <p class="f-home-experience">6+ years in founder-side B2B operations.</p>
      </div>
      <figure class="f-home-photo">
        <img src="/assets/editorial-cafe-v2.webp" alt="" width="1400" height="1050" loading="lazy" decoding="async">
      </figure>
    </header>

    <section class="f-home-selected f-wrap" id="selected-work" aria-labelledby="selected-work-title">
      <div class="f-section-head">
        <h2 id="selected-work-title">Selected Work</h2>
        <a class="f-editorial-link" href="/work">View all work <span aria-hidden="true">→</span></a>
      </div>
      <a class="f-home-feature" href="/work/vieworld" aria-labelledby="vieworld-home-title">
        <span class="f-home-feature-media"><img class="f-home-feature-image" src="/assets/vieworld-moments.webp" alt="VieWorld prototype showing past, current and upcoming artist Moments above the shared community meadow" width="1200" height="692" decoding="async"></span>
        <div class="f-home-work-copy">
          <span class="f-home-category">Product &amp; Operations</span>
          <h3 id="vieworld-home-title">VieWorld</h3>
          <p>Designing an independent fandom ecosystem that feels like home.</p>
          <span class="f-editorial-link">View case <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <div class="f-home-work-list">${selectedWorks.map(({ path, ...copy }) => `<article class="f-work-item">${renderWorkStory(previewByPath.get(path), { id: path.slice(6) + '-home', selected: true, ...copy })}</article>`).join('')}</div>
    </section>

    <section class="f-home-approach f-editorial-section f-wrap" aria-labelledby="approach-title">
      <h2 id="approach-title">How I work</h2>
      <div><ul class="f-home-principles">
        <li>Ground truth first</li><li>Clear ownership</li><li>Evidence visible</li>
      </ul>
      <a class="f-editorial-link" href="/about">More about my approach <span aria-hidden="true">→</span></a></div>
    </section>

  </main>
`;
}

export function aboutContent(totalWorks) {
  return `  <main id="about-content">
    <!-- Introduction and contact -->
    <section class="f-about-intro">
      <div class="f-wrap">
        <h1>I learned operations by doing the work.<br><em>I’m still learning how to make it clearer.</em></h1>
        <p class="f-about-dek">
          I’ve spent <strong>6+ years at Phong Phu Stationery in Dong Thap</strong>, working across B2B accounts, suppliers, pricing, and delivery. I learned to follow the whole order: what a customer needs, what we can promise, and what has to happen for that promise to be kept.
        </p>
        <p class="f-about-dek">
          That experience made me curious about the problems that sit between teams and systems. I’m now based in <strong>Ho Chi Minh City</strong>, exploring business and product operations through independent research and prototypes. I enjoy working through the details, testing my assumptions, and learning what would make the next step clearer.
        </p>

        <div class="f-about-coordinates">
          <span class="f-about-coordinate"><strong>BASED:</strong> Ho Chi Minh City</span>
          <span class="f-about-coordinate"><strong>FROM:</strong> Dong Thap</span>
          <span class="f-about-coordinate"><strong>EDUCATION:</strong> HCMUL · Judicial Academy</span>
        </div>

        <div class="f-about-contact">
          <a href="mailto:phamthanhphu97@gmail.com?subject=Contact%20-%20Pham%20Thanh%20Phu" class="f-editorial-link">Email me: phamthanhphu97@gmail.com ✉</a>
          <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer" class="f-editorial-link">LinkedIn ↗</a>
          <a href="mailto:phamthanhphu97@gmail.com?subject=Request%20Full%20CV%20-%20Pham%20Thanh%20Phu" class="f-editorial-link">Request my CV →</a>
        </div>

      </div>
    </section>

    <div class="f-wrap">
      <!-- Operating experience in numbers -->
      <section class="f-about-facts" aria-label="Key Operating Highlights">
        <h2 class="f-sr-only">Operating highlights</h2>
        <div class="f-about-fact">
          <div class="f-about-measure">
            <span class="f-about-number">6+</span>
            <span class="f-about-unit">Years</span>
          </div>
          <div class="f-about-fact-copy"><h3>Running B2B Operations</h3>
          <p>Business Development &amp; Operations Manager at Phong Phu Stationery, Dong Thap (July 2019–present).</p></div>
        </div>

        <div class="f-about-fact">
          <div class="f-about-measure">
            <span class="f-about-number">~800M</span>
            <span class="f-about-unit">VND / Qtr</span>
          </div>
          <div class="f-about-fact-copy"><h3>Quarterly B2B Revenue</h3>
          <p>Average B2B and institutional supply revenue, excluding retail. Operating margin: 30–35% after cost of goods and operating expenses.</p></div>
        </div>

        <div class="f-about-fact">
          <div class="f-about-measure">
            <span class="f-about-number">~95%</span>
            <span class="f-about-unit">Account Retention</span>
          </div>
          <div class="f-about-fact-copy"><h3>50+ Recurring Clients</h3>
          <p>Institutional and corporate clients, with retention measured by account count.</p></div>
        </div>

        <div class="f-about-fact">
          <div class="f-about-measure">
            <span class="f-about-number">&gt;90%</span>
            <span class="f-about-unit">Delegated</span>
          </div>
          <div class="f-about-fact-copy"><h3>Operating Work Delegated</h3>
          <p>Since summer 2025, I’ve handed over most daily operating work, supported by KiotViet, an experienced manager, part-time help, and delivery capacity.</p></div>
        </div>
      </section>

      <!-- Experience and independent work -->
      <section class="f-about-experience" aria-label="Experience and Independent Work">
        <!-- B2B operations -->
        <article class="f-editorial-section">
          <aside class="f-editorial-section-head">
            <span class="f-editorial-kicker">01 · Operating Experience</span>
            <h2>The Work Behind an Order</h2>
            <span class="f-editorial-caption">Dong Thap · 2019 – Present</span>
          </aside>
          <div class="f-editorial-copy">
            <p>
              At Phong Phu Stationery, I worked with <strong>50+ institutional and corporate accounts and 10+ supplier partners</strong>. My day-to-day work connected sourcing, pricing, stock, dispatch, payment collection, and the problems that surfaced between them.
            </p>
            <p>
              Customers ranged from schools, hospitals, courts, and public-sector units to factories, SMEs, and corporate branches, including Olam and Emivest. The challenge was to meet their needs while keeping purchasing, stock, delivery, margin, and cash flow workable.
            </p>
            <div class="f-about-highlights">
              <div class="f-about-example">
                <strong>Replacing an affected product line</strong>
                When a supplier cut the discount on a product line from 22% to 15%, I checked the policy, found five alternative suppliers and brands, and tested samples with customers. More than 80% of the affected line was replaced within one week.
              </div>
              <div class="f-about-example">
                <strong>Making handover possible</strong>
                I moved product, pricing, VAT, invoice, inventory, and account data into KiotViet and recruited an experienced manager, with part-time and delivery support. That made the work easier to hand over.
              </div>
            </div>
          </div>
        </article>

        <!-- Commercial and legal support -->
        <article class="f-editorial-section">
          <aside class="f-editorial-section-head">
            <span class="f-editorial-kicker">02 · Commercial &amp; Legal Support</span>
            <h2>Care With Records and Decisions</h2>
            <span class="f-editorial-caption">Ho Chi Minh City &amp; Dong Thap</span>
          </aside>
          <div class="f-editorial-copy">
            <p>
              I bring a <strong>Bachelor of Commercial Law from Ho Chi Minh City University of Law</strong> and a <strong>Lawyer Training Certificate from the Judicial Academy</strong> to this work. I try to keep the record clear: what was agreed, what happened, and what still needs to be checked.
            </p>
            <p>
              Alongside business operations, I provide independent commercial and legal operations support to 4+ continuing clients. I help organize documents, timelines, options, and next steps, while keeping client details confidential.
            </p>
            <div class="f-about-highlights">
              <div class="f-about-example">
                <strong>Preparing commercial matters</strong>
                For 2+ resolved commercial matters with a combined value above VND 5B, I organized evidence, timelines, obligations, and negotiation preparation.
              </div>
              <div class="f-about-example">
                <strong>Keeping tax documents organized</strong>
                I supported quarterly tax-document workflows for 5+ business households with annual revenue above VND 1B, alongside confidential handling of contract, lease, payment, vendor, and commercial records.
              </div>
            </div>
          </div>
        </article>

        <!-- Independent research and prototypes -->
        <article class="f-editorial-section">
          <aside class="f-editorial-section-head">
            <span class="f-editorial-kicker">03 · Independent Product Work</span>
            <h2>Learning Through Product Work</h2>
            <span class="f-editorial-caption">${totalWorks} Public Research &amp; Applied Works</span>
          </aside>
          <div class="f-editorial-copy">
            <p>
              Earlier creator and community work exposed me to venue activations, short-form content, platform rules, monetization, Content ID, copyright, and account-support issues. Those experiences gave me a closer view of the day-to-day needs of creators and fans.
            </p>
            <p>
              In 2026, I completed the <strong>Value Chain Management Specialization at the University of Illinois Urbana-Champaign</strong>. My ${totalWorks} public works explore HealthTech, fandom commerce, platform governance, and AI decision systems using public sources. They are independent studies and prototypes, with assumptions and unanswered questions kept visible.
            </p>
            <div class="f-about-highlights">
              <div class="f-about-example">
                <strong>Elfie &amp; FanMe: planning what to test</strong>
                Elfie explores activation quality, event taxonomy, user routines, safeguards, and a 0–12-week validation roadmap. FanMe lays out a controlled artist-launch plan covering onboarding, commerce, fulfilment, recovery, metrics, and go/no-go decisions.
              </div>
              <div class="f-about-example">
                <strong>Customer resolution &amp; Explainable Trust</strong>
                The Shopee and Adobe studies map what a customer can understand and do when an account is restricted. Explainable Trust is now a static, interactive showcase: a fictional case makes evidence, revision history, reasoning, and unresolved gaps visible.
              </div>
            </div>
          </div>
        </article>
      </section>

      <!-- Working approach -->
      <section class="f-about-manifesto">
        <span class="f-manifesto-kicker">HOW I TRY TO WORK</span>
        <blockquote>
          “I like to start with what happened, what people need, and what the record actually supports. Then I try to make the next step clearer: who owns it, what they need, and how we’ll know it helped.”
        </blockquote>
        <span class="f-manifesto-author">— Phạm Thanh Phú</span>
      </section>

      <!-- Skills and learning -->
      <section class="f-about-capabilities f-editorial-section" aria-labelledby="skills-title">
        <div class="f-editorial-section-head">
          <h2 id="skills-title">Skills I Use &amp; Topics I’m Developing</h2>
          <span>Built through operating experience, formal study, and independent projects.</span>
        </div>
        <div class="f-about-skills">
          <div class="f-about-skill">
            <h3>Operations &amp; Delivery</h3>
            <ul class="f-about-skill-list">
              <li>Process mapping &amp; SOPs</li>
              <li>Sourcing &amp; supplier coordination</li>
              <li>Inventory &amp; KiotViet workflows</li>
              <li>Cash flow &amp; margin tracking</li>
              <li>Partner coordination &amp; quality checks</li>
              <li>Handling operating exceptions</li>
            </ul>
          </div>
          <div class="f-about-skill">
            <h3>Product &amp; Strategy</h3>
            <ul class="f-about-skill-list">
              <li>Problem framing &amp; user journeys</li>
              <li>Event taxonomy &amp; funnel metrics</li>
              <li>Experiment plans &amp; safeguards</li>
              <li>Value chain management (UIUC)</li>
              <li>Pilot gates &amp; repeatability</li>
              <li>Customer resolution &amp; review paths</li>
            </ul>
          </div>
          <div class="f-about-skill">
            <h3>Data, Legal &amp; AI</h3>
            <ul class="f-about-skill-list">
              <li>Excel, Google Sheets, SQL, Python, Tableau</li>
              <li>Commercial records &amp; legal training</li>
              <li>Generative AI tools (ChatGPT, Claude)</li>
              <li>AI provenance &amp; evaluation studies</li>
              <li>Notion, Asana, Trello</li>
              <li>English (TOEIC 825)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Opportunities and contact -->
      <section class="f-about-outro f-editorial-section">
        <div class="f-editorial-section-head">
          <h2>Let’s talk.</h2>
        </div>
        <div class="f-editorial-copy"><p>Open to roles in Business Operations, Product Operations, and Product Strategy in Ho Chi Minh City.</p>
          <a href="/work" class="f-editorial-link">Browse ${totalWorks} Works <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </div>
  </main>`;
}
