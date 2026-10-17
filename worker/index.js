import { siteCss } from "./styles.js";
import { finalModes, finalWorkLibrary, caseDocuments, totalWorks } from "./case-library.js";
import { caseReadingGuides, casePrototypes } from "./reading-guides.js";
import { workPreviews } from "./work-previews.js";
import { renderWorkStory } from "./work-stories.js";
import { escapeHtml } from "./html.js";
import { homeContent, aboutContent } from "./editorial-pages.js";

// ============================================================================
// Pham Thanh Phu — Work & Research static page renderer
// Authored case narratives and linked Google Drive source assets
// ============================================================================


// ============================================================================
// Favicon SVG Asset & Constants
// ============================================================================
const SITE_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#14222c"/><text x="16" y="22" font-family="-apple-system,BlinkMacSystemFont,sans-serif" font-weight="800" font-size="18" fill="#faf8f5" text-anchor="middle">P</text><circle cx="24" cy="8" r="3.5" fill="#c25e2e"/></svg>`;
const SITE_FAVICON_DATA_URL = `data:image/svg+xml,${encodeURIComponent(SITE_FAVICON_SVG)}`;


function getReadingStats(text) {
  if (!text) return { words: 0, minutes: 1, time: "1 min read" };
  const clean = String(text).replace(/<[^>]*>/g, ' ').replace(/https?:\/\/\S+/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { words, minutes, time: `${minutes} min read` };
}

const NOTION_URL_MAP = {
  "elfie": "/work/elfie-trust-safe-activation",
  "vinamilk": "/work/vinamilk-trusted-nutrition",
  "creator-platform": "/work/creator-platform-operating-model",
  "artist-fandom-page": "/work/artist-fandom-page",
  "post-signing": "/work/post-signing-artist-label-operations",
  "shopee": "/work/shopee-account-restrictions",
  "fanme": "/work/fanme-controlled-growth",
  "datvietvac-ownership": "/work/datvietvac-ownership-belonging",
  "datvietvac-fandom-cards": "/work/datvietvac-fandom-cards",
  "explainable-trust": "/work/explainable-trust",
  "vietnam-diamond": "/work/vietnam-diamond-market-crisis",
  "diamond-trust": "/work/diamond-trust-chain-collapse",
  "adobe": "/work/adobe-account-restriction",
  "ai-judgment": "/work/ai-judgment-decisions",
  "ai-apprenticeship": "/work/ai-apprenticeship",
  "zalopay": "/work/zalopay-smes-when-paid-not-done",
  "metub": "/work/metub-creator-economy",
  "momo": "/work/momo-ai-paylater",
  "zalo-scam": "/work/zalo-scam-emergency-mode",
  "pathway-lens": "/work/pathway-lens-operational-cycles",
  "human-ai-system": "/work/pathway-lens-operational-cycles",
    "vieworld": "/work/vieworld",
    "vieshop": "/work/vieshop-fan-centred-merchandise-system",
  "fan-promise": "/work/datvietvac-who-owns-the-fan-promise",
  "work-library": "/work"
};

function formatInlineMarkdown(text) {
  if (!text) return "";

  // Keep trusted HTML attributes, URLs, and literal code out of emphasis parsing.
  const protectedParts = [];
  const protect = value => {
    const token = `\u0000${protectedParts.length}\u0000`;
    protectedParts.push(value);
    return token;
  };
  text = text.replace(/<[^>]+>/g, protect);

  // 1. Inline code: `code`
  text = text.replace(/`([^`]+)`/g, (_, code) => protect(`<code class="f-code">${escapeHtml(code)}</code>`));

  // 4. Links: [text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
    let targetUrl = url.trim();
    
    // Check if it's a Notion URL that maps to an internal work
    if (/^https?:\/\/[^/]*\bnotion\.(so|site)\//i.test(targetUrl)) {
      for (const [key, internalPath] of Object.entries(NOTION_URL_MAP)) {
        if (targetUrl.toLowerCase().includes(key)) {
          targetUrl = internalPath;
          break;
        }
      }
    }

    if (linkText.toLowerCase().includes("work library") || targetUrl.includes("work-library")) {
      targetUrl = "/work";
    }
    if (linkText.toLowerCase().includes("portfolio home") || targetUrl.includes("portfolio-home")) {
      targetUrl = "/";
    }

    const isInternal = targetUrl.startsWith("/") || targetUrl.startsWith("#");
    const formattedLabel = formatInlineMarkdown(linkText);
    if (isInternal) {
      return protect(`<a href="${escapeHtml(targetUrl)}" class="f-inline-link">${formattedLabel}</a>`);
    } else {
      return protect(`<a href="${escapeHtml(targetUrl)}" target="_blank" rel="noreferrer" class="f-inline-link">${formattedLabel} ↗</a>`);
    }
  });

  // Emphasis applies only after HTML, code, and links have been protected.
  text = text.replace(/\*\*([\s\S]*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__([\s\S]*?)__/g, '<strong>$1</strong>');
  text = text.replace(/(^|[^\*])\*([^\*]+)\*([^\*]|$)/g, '$1<em>$2</em>$3');
  text = text.replace(/(^|[^_])_([^_]+)_([^_]|$)/g, '$1<em>$2</em>$3');

  // Parts may contain earlier tokens, for example HTML inside a link label.
  for (let i = protectedParts.length - 1; i >= 0; i--) {
    text = text.split(`\u0000${i}\u0000`).join(protectedParts[i]);
  }
  return text;
}

function editorialSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function renderMarkdownTable(tableText) {
  const lines = tableText.trim().split('\n');
  if (lines.length < 2) return tableText;

  const headerLine = lines[0].trim();
  const delimiterLine = lines[1].trim();

  if (!headerLine.startsWith('|') || !delimiterLine.startsWith('|') || !delimiterLine.includes('---')) {
    return tableText;
  }

  const parseRowCells = (lineStr) => {
    const trimmed = lineStr.trim().replace(/^\|/, '').replace(/\|$/, '');
    return trimmed.split('|').map(c => c.trim().replace(/\n/g, '<br>'));
  };

  const headerCells = parseRowCells(headerLine);
  
  const rowStrings = [];
  let currentRow = '';

  for (let i = 2; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) {
      if (currentRow) {
        rowStrings.push(currentRow);
      }
      currentRow = line;
    } else {
      currentRow += '\n' + line;
    }
  }
  if (currentRow) {
    rowStrings.push(currentRow);
  }

  let html = '<div class="f-table-wrap"><table class="f-table"><thead><tr>';
  headerCells.forEach(cell => {
    html += `<th>${formatInlineMarkdown(cell)}</th>`;
  });
  html += '</tr></thead><tbody>';

  rowStrings.forEach(r => {
    const cells = parseRowCells(r);
    html += '<tr>';
    for (let c = 0; c < headerCells.length; c++) {
      const cellContent = cells[c] || '';
      html += `<td>${formatInlineMarkdown(cellContent)}</td>`;
    }
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  return html;
}

function convertMarkdownTables(text) {
  const lines = text.split('\n');
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith('|') && i + 1 < lines.length && lines[i + 1].trim().startsWith('|') && lines[i + 1].includes('---')) {
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length) {
        const cur = lines[i];
        const curTrim = cur.trim();
        if (curTrim === '' || curTrim.startsWith('#') || curTrim.startsWith('<') || curTrim === '---' || curTrim === '***' || curTrim === '___') {
          break;
        }
        tableLines.push(cur);
        i++;
      }
      output.push('\n\n' + renderMarkdownTable(tableLines.join('\n')) + '\n\n');
    } else {
      output.push(line);
      i++;
    }
  }

  return output.join('\n');
}


const KNOWN_ASSET_TITLES = {
  "vinamilk paper 1 trusted nutrition product service discovery": "Vinamilk Paper 1: Trusted Nutrition Product-Service Discovery",
  "vinamilk paper 2 everyday milk delivery operations scale": "Vinamilk Paper 2: Everyday Milk Delivery Operations & Scale",
  "vinamilk paper 3 beyond the market capability allocation governance": "Vinamilk Paper 3: Beyond-the-Market Capability Allocation Governance",
  "MFan Platform Fragmentation & Trust Chain Integration": "MFan Platform Fragmentation & Trust Chain Integration",
  "MFan Platform Fragmentation  Trust Chain Integration": "MFan Platform Fragmentation & Trust Chain Integration",
  "Pham Thanh Phu Elfie Product Case Trust Safe Activation v4": "Elfie Product Case: Trust-Safe Activation (V4)",
  "Post-Signing Artist Label Operations Case Study": "Post-Signing Artist / Label Operations Case Study",
  "Shopee Account Restriction Resolution Portfolio Final 2026-08-05": "Shopee Account Restriction Resolution Case (Aug 2026)",
  "FanMe Controlled Growth  Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "FanMe Controlled Growth Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "FanMe Controlled Growth Pilot": "FanMe Controlled Growth Pilot Monograph",
  "FanMe Controlled Growth — Native Editable Final": "FanMe Controlled Growth: Native Operating Framework",
  "DatVietVAC Ownership Belonging Merchandise Growth Case Study": "DatVietVAC: Ownership & Belonging Merchandise Growth",
  "DatVietVAC Fandom Cards Case Study": "DatVietVAC Fandom Cards: Collectibles Product Line Case",
  "VieSHOP — Fan-Centred Merchandise System": "VieSHOP: Fan-Centred Merchandise System Case",
  "DatVietVAC: Who Owns the Fan Promise? — Full Case": "DatVietVAC: Who Owns the Fan Promise? (Full Case)",
  "DatVietVAC Evidence Pack V1.1": "DatVietVAC Evidence Pack (V1.1 Forensic Audit)",
  "Vietnam Diamond Market Crisis Case Study 2 Full Paper": "Vietnam’s 2026 Diamond-Market Crisis (Forensic Paper)",
  "Adobe Account Restriction Comparative Case Study 2026-08-07": "Adobe Account Restriction: Comparative Case Study"
};

function formatAssetTitle(title) {
  if (!title) return "Document Asset";
  let clean = String(title)
    .replace(/[📄👁️↗]/g, '')
    .replace(/^xem\s+trước:\s*/gi, '')
    .replace(/\.(pdf|docx?|pptx?|xlsx?|png|jpe?g|webp)\b/gi, '')
    .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
    .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
    .replace(/_+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (KNOWN_ASSET_TITLES[clean]) return KNOWN_ASSET_TITLES[clean];

  // Capitalize if fully lowercase
  if (clean === clean.toLowerCase() && clean.length > 2) {
    clean = clean.replace(/\b[a-z]/g, ch => ch.toUpperCase());
  }

  return clean;
}

function assetFormat(asset, fallbackType = '') {
  const extension = asset?.fileName?.match(/\.([a-z0-9]+)$/i)?.[1].toLowerCase();
  const format = extension || asset?.type || fallbackType;
  const documents = { pdf: 'PDF', doc: 'DOC', docx: 'DOCX', ppt: 'PPT', pptx: 'PPTX', xls: 'XLS', xlsx: 'XLSX' };
  if (documents[format]) return { type: format, badge: documents[format] };
  if (/^(image|diagram|png|jpe?g|webp|svg)$/.test(format)) return { type: 'image', badge: 'IMAGE' };
  if (format === 'deck') return { type: 'deck', badge: 'DECK' };
  return { type: 'document', badge: 'DOCUMENT' };
}

function renderEditorialNotion(markdown, assets = []) {
  if (!markdown) return "";

  // Normalize newlines and clean stray .png)
  let text = markdown.replace(/\r\n/g, '\n').replace(/\.png\)\s*/g, '');

  // 1. Asset Bar & standalone buttons — wrap each btn+ext-btn pair into a .f-asset-btn-group and clean labels
  text = text.replace(/<button([^>]*class="[^"]*f-asset-trigger[^"]*"[^>]*)>([\s\S]*?)<\/button>/g, (match, attrs, label) => {
    if (!/\bf-asset-btn\b/.test(attrs)) return match;
    const titleMatch = attrs.match(/data-title="([^"]*)"/);
    const rawTitle = titleMatch ? titleMatch[1] : label;
    const cleanTitle = formatAssetTitle(rawTitle);
    const driveId = attrs.match(/data-driveid="([^"]*)"/)?.[1];
    const metadata = assets.find(asset => asset.driveId === driveId);
    const format = assetFormat(metadata, attrs.match(/data-type="([^"]*)"/)?.[1]);
    let newAttrs = attrs;
    if (titleMatch) {
      newAttrs = newAttrs.replace(/data-title="[^"]*"/, `data-title="${cleanTitle}"`);
    } else {
      newAttrs += ` data-title="${cleanTitle}"`;
    }
    for (const [key, value] of Object.entries({ 'data-type': format.type, 'data-badge': format.badge })) {
      const attribute = new RegExp(`${key}="[^"]*"`);
      newAttrs = attribute.test(newAttrs) ? newAttrs.replace(attribute, `${key}="${value}"`) : newAttrs + ` ${key}="${value}"`;
    }
    return `<button${newAttrs}>📄 ${cleanTitle} <span class="f-asset-format">${format.badge}</span></button>`;
  });

  // Group adjacent button + ext-btn link into a single pill group
  text = text.replace(/(<button(?=[^>]*class="[^"]*\bf-asset-btn\b)[^>]*class="[^"]*f-asset-trigger[^"]*"[^>]*>(?:(?!<\/?button\b)[\s\S])*<\/button>)\s*(<a[^>]*class="[^"]*f-asset-ext-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/g, '<div class="f-asset-btn-group">$1$2</div>');

  // Wrap asset-bar container if present
  text = text.replace(/<asset-bar>([\s\S]*?)<\/asset-bar>/g, (match, inner) => {
    return `\n\n<div class="f-asset-bar">${inner.trim()}</div>\n\n`;
  });

  // 2. Diagram Cards — clean minimalist image card
  text = text.replace(/<diagram-card\s+title="([^"]*)"\s+driveid="([^"]*)"\s+caption="([^"]*)"><\/diagram-card>/g, (match, title, driveId, caption) => {
    const cleanTitle = title.replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/_/g, ' ');
    const isSameCaption = caption.replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/_/g, ' ') === cleanTitle;
    const cleanCaption = (!caption || isSameCaption) ? '' : caption;
    const imgSrc = `https://lh3.googleusercontent.com/d/${driveId}=w1600`;

    return `\n\n<figure class="f-diagram-card">
      <div class="f-diagram-body f-asset-trigger" data-type="image" data-driveid="${driveId}" data-title="${cleanTitle}" title="Click to enlarge">
        <img src="${imgSrc}" alt="${cleanTitle}" loading="lazy">
      </div>
      ${cleanCaption ? `<figcaption class="f-diagram-caption">${cleanCaption}</figcaption>` : ''}
    </figure>\n\n`;
  });

  // 3. Aside / Callouts
  text = text.replace(/<aside>([\s\S]*?)<\/aside>/g, (match, inner) => {
    const formatted = formatInlineMarkdown(inner.trim());
    return `\n\n<div class="f-callout">${formatted}</div>\n\n`;
  });

  // 4. Details
  text = text.replace(/<details><summary>(.*?)<\/summary>([\s\S]*?)<\/details>/g, (match, summary, inner) => {
    return `\n\n<details class="f-details"><summary>${formatInlineMarkdown(summary)}</summary><div class="f-details-content">${inner}</div></details>\n\n`;
  });

  // 5. Robust Markdown Table Pass
  text = convertMarkdownTables(text);

  // 6. Ensure blank lines around headings, hr
  text = text.replace(/^(#{1,4}\s+[^\n]+)/gm, '\n\n$1\n\n');
  text = text.replace(/^(---|\*\*\*|___)$/gm, '\n\n$1\n\n');

  // Split into chunks by 2 or more newlines
  const rawBlocks = text.split(/\n{2,}/);
  const renderedBlocks = [];

  for (let rawBlock of rawBlocks) {
    let b = rawBlock.trim();
    if (!b) continue;

    // Check if it's already an HTML block element
    if (b.startsWith('<div class="f-asset-bar"') || 
        b.startsWith('<figure class="f-diagram-card"') || 
        b.startsWith('<div class="f-callout"') || 
        b.startsWith('<div class="f-table-wrap"') ||
        b.startsWith('<details class="f-details"') ||
        b.startsWith('</div></details>')) {
      renderedBlocks.push(b);
      continue;
    }

    // Horizontal Rule
    if (b === '---' || b === '***' || b === '___') {
      renderedBlocks.push('<hr class="f-hr">');
      continue;
    }

    // Code block
    if (b.startsWith('```') && b.endsWith('```')) {
      const codeLines = b.replace(/^```[^\n]*\n?/, '').replace(/\n?```$/, '');
      renderedBlocks.push(`<pre class="f-code-block"><code>${codeLines}</code></pre>`);
      continue;
    }

    // Headings
    const headingMatch = b.match(/^(#{1,4})\s+([\s\S]+)$/);
    if (headingMatch && !headingMatch[2].includes('\n')) {
      const level = headingMatch[1].length;
      const titleText = headingMatch[2].trim();
      const id = editorialSlug(titleText);
      const formattedTitle = formatInlineMarkdown(titleText);
      renderedBlocks.push(`<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${formattedTitle}</h${level}>`);
      continue;
    }

    // Blockquote
    if (b.startsWith('>')) {
      const quoteLines = b.split('\n').map(l => l.replace(/^>\s*/, '').trim()).filter(l => l.length > 0);
      const quoteContent = quoteLines.map(l => formatInlineMarkdown(l)).join('<br>');
      renderedBlocks.push(`<blockquote>${quoteContent}</blockquote>`);
      continue;
    }

    // Unordered List
    const lines = b.split('\n');
    if (lines.every(l => l.trim().startsWith('- ') || l.trim().startsWith('* '))) {
      const items = lines.map(l => {
        const itemText = l.trim().replace(/^[\*\-]\s+/, '');
        return `<li>${formatInlineMarkdown(itemText)}</li>`;
      });
      renderedBlocks.push(`<ul class="f-list">\n${items.join('\n')}\n</ul>`);
      continue;
    }

    // Ordered List
    if (lines.every(l => /^\d+\.\s+/.test(l.trim()))) {
      const items = lines.map(l => {
        const itemText = l.trim().replace(/^\d+\.\s+/, '');
        return `<li>${formatInlineMarkdown(itemText)}</li>`;
      });
      renderedBlocks.push(`<ol class="f-numbered-list">\n${items.join('\n')}\n</ol>`);
      continue;
    }

    // Mixed lines: check if first line is heading
    if (b.startsWith('#')) {
      const firstLineBreak = b.indexOf('\n');
      if (firstLineBreak !== -1) {
        const firstLine = b.substring(0, firstLineBreak).trim();
        const rest = b.substring(firstLineBreak + 1).trim();
        const hMatch = firstLine.match(/^(#{1,4})\s+(.+)$/);
        if (hMatch) {
          const level = hMatch[1].length;
          const titleText = hMatch[2].trim();
          const id = editorialSlug(titleText);
          const formattedTitle = formatInlineMarkdown(titleText);
          renderedBlocks.push(`<h${level} id="${id}"><a class="f-anchor" href="#${id}">#</a>${formattedTitle}</h${level}>`);
          if (rest) {
            renderedBlocks.push(`<p>${formatInlineMarkdown(rest)}</p>`);
          }
          continue;
        }
      }
    }

    // Regular Paragraph
    renderedBlocks.push(`<p>${formatInlineMarkdown(b)}</p>`);
  }

  return renderedBlocks.join('\n\n');
}


function layoutHead(title, description, nonce, meta = {}) {
  const currentPath = meta.path || "/";
  const canonicalUrl = `https://phamthanhphu.io.vn${currentPath === "/" ? "" : currentPath}`;
  const ogType = meta.ogType || "website";
  const ogImage = meta.ogImage || "https://phamthanhphu.io.vn/assets/phu-portrait.webp";

  // Dynamic JSON-LD Schema
  let schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Phạm Thanh Phú — Work & Research",
    "url": "https://phamthanhphu.io.vn",
    "author": {
      "@type": "Person",
      "name": "Phạm Thanh Phú",
      "jobTitle": "Business & Product Operations / Systems Design",
      "sameAs": [
        "https://www.linkedin.com/in/yunero1206/",
        "/explainable/"
      ]
    },
    "description": description
  };

  if (meta.ogType === "article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": title,
      "description": description,
      "url": canonicalUrl,
      "author": {
        "@type": "Person",
        "name": "Phạm Thanh Phú"
      },
      "inLanguage": "en",
      "keywords": meta.keywords || ""
    };
  } else if (currentPath === "/about") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Phạm Thanh Phú",
        "jobTitle": "Business & Product Operations",
        "worksFor": {
          "@type": "Organization",
          "name": "Phong Phu Stationery"
        },
        "alumniOf": [
          { "@type": "CollegeOrUniversity", "name": "Ho Chi Minh City University of Law" },
          { "@type": "EducationalOrganization", "name": "Judicial Academy" }
        ],
        "knowsAbout": ["Business Operations", "Product Strategy", "AI Decision Systems", "Evidence-First Casework"],
        "url": canonicalUrl
      }
    };
  }

  return `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#14222c" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0e161c" media="(prefers-color-scheme: dark)">
    <meta name="robots" content="index, follow">
    <title>${escapeHtml(title)}</title>

    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" type="image/svg+xml" href="${SITE_FAVICON_DATA_URL}">
    <link rel="apple-touch-icon" href="/assets/phu-portrait.webp">

    <!-- Open Graph / Facebook / LinkedIn / Zalo -->
    <meta property="og:site_name" content="Phạm Thanh Phú — Work & Research">
    <meta property="og:type" content="${ogType}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${ogImage}">

    <link rel="stylesheet" href="/assets/fonts.css">

    <!-- Anti-FOUC Early Theme Script -->
    <script nonce="${nonce}">
      (function(){
        try {
          var t = localStorage.getItem('f-theme');
          if (t === 'sepia') t = 'light';
          if (t === 'dark' || t === 'light') {
            document.documentElement.setAttribute('data-theme', t);
          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        } catch(e){}
      })();
    </script>

    <!-- Structured Data JSON-LD -->
    <script type="application/ld+json" nonce="${nonce}">
      ${JSON.stringify(schemaData)}
    </script>

    <link rel="stylesheet" href="/assets/site.css">
  </head>`;
}

function layoutHeader(active = "", nonce = "") {
  return `<header class="f-header">
    <div id="f-progress-bar"></div>
    <nav class="f-nav f-wrap" aria-label="Primary navigation">
      <a class="f-brand" href="/">Phạm Thanh Phú</a>
      <div class="f-links">
        <div class="f-nav-pages">
        <a href="/work"${active === "work" ? ' aria-current="page"' : ""}>Work</a>
        <a href="/about"${active === "about" ? ' aria-current="page"' : ""}>About</a>
        </div>
        <button type="button" class="f-cmd-trigger" id="f-nav-cmd-trigger" aria-label="Search works and pages" aria-haspopup="dialog" aria-controls="f-cmd-dialog" aria-keyshortcuts="Control+k Meta+k" title="Search works and pages (Ctrl+K / ⌘K)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><span>Search</span><kbd aria-hidden="true">Ctrl K</kbd>
        </button>
        <button type="button" class="f-theme-toggle" id="f-theme-toggle" aria-label="Switch to dark theme" title="Switch to dark theme">
          <svg class="f-theme-icon-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20.5 13.3A8.5 8.5 0 0 1 10.7 3.5a8.5 8.5 0 1 0 9.8 9.8Z"/></svg>
          <svg class="f-theme-icon-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke-linecap="round"/></svg>
          <span data-theme-label>Dark</span>
        </button>
      </div>
    </nav>
  </header>
  <script nonce="${nonce}">
    (function(){
      function syncTheme() {
        var button = document.getElementById('f-theme-toggle');
        if (!button) return;
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
        button.querySelector('[data-theme-label]').textContent = dark ? 'Light' : 'Dark';
        button.title = button.getAttribute('aria-label');
        button.onclick = function() {
          var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', theme);
          try { localStorage.setItem('f-theme', theme); } catch(e) {}
          syncTheme();
        };
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', syncTheme);
      else syncTheme();
    })();
  </script>`;
}

function catGlobalComponent(nonce) {
  return `<!-- Global Cat-in-Tab Companion -->
  <div id="f-cat-dock" class="f-cat-in-tab-dock" title="Cat-in-Tab · Click me to pet or move me!">
    <div class="f-tab-cat-bubble" id="f-cat-bubble">Meow! 🐾</div>
    <svg class="f-tab-cat-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="29" rx="10" ry="2" fill="rgba(20, 28, 34, 0.15)"/>
      <g class="f-c-tail">
        <rect x="23" y="14" width="3" height="3" fill="#141c20"/>
        <rect x="25" y="12" width="3" height="3" fill="#141c20"/>
        <rect x="26" y="9" width="3" height="4" fill="#141c20"/>
        <rect x="24" y="8" width="3" height="2" fill="#141c20"/>
        <rect x="24" y="10" width="2" height="4" fill="#ffffff"/>
      </g>
      <rect x="11" y="16" width="13" height="10" rx="1" fill="#ffffff"/>
      <rect x="10" y="16" width="1" height="10" fill="#141c20"/>
      <rect x="24" y="16" width="1" height="10" fill="#141c20"/>
      <rect x="11" y="26" width="13" height="1" fill="#141c20"/>
      <rect x="11" y="15" width="13" height="1" fill="#141c20"/>
      <rect x="19" y="25" width="4" height="3" fill="#ffffff"/>
      <rect x="19" y="27" width="4" height="1" fill="#141c20"/>
      <rect x="23" y="25" width="1" height="2" fill="#141c20"/>
      <rect x="11" y="25" width="4" height="3" fill="#ffffff"/>
      <rect x="11" y="27" width="4" height="1" fill="#141c20"/>
      <rect x="15" y="25" width="1" height="2" fill="#141c20"/>
      <rect x="6" y="9" width="12" height="10" rx="1" fill="#ffffff"/>
      <rect x="5" y="9" width="1" height="10" fill="#141c20"/>
      <rect x="18" y="9" width="1" height="10" fill="#141c20"/>
      <rect x="6" y="8" width="12" height="1" fill="#141c20"/>
      <rect x="6" y="19" width="12" height="1" fill="#141c20"/>
      <rect x="6" y="4" width="3" height="5" fill="#ffffff"/>
      <rect x="5" y="5" width="1" height="4" fill="#141c20"/>
      <rect x="6" y="3" width="2" height="2" fill="#141c20"/>
      <rect x="8" y="4" width="2" height="4" fill="#141c20"/>
      <rect x="6" y="6" width="2" height="2" fill="#fbcfe8"/>
      <rect x="13" y="4" width="3" height="5" fill="#ffffff"/>
      <rect x="13" y="4" width="1" height="4" fill="#141c20"/>
      <rect x="14" y="3" width="2" height="2" fill="#141c20"/>
      <rect x="16" y="5" width="1" height="4" fill="#141c20"/>
      <rect x="14" y="6" width="2" height="2" fill="#fbcfe8"/>
      <rect class="f-c-eye" x="8" y="12" width="2" height="3" rx="1" fill="#141c20"/>
      <rect class="f-c-eye" x="14" y="12" width="2" height="3" rx="1" fill="#141c20"/>
      <rect x="8" y="12" width="1" height="1" fill="#ffffff"/>
      <rect x="14" y="12" width="1" height="1" fill="#ffffff"/>
      <polygon points="12,15 11,14 13,14" fill="#f43f5e"/>
      <rect x="3" y="14" width="3" height="1" fill="#94a3b8"/>
      <rect x="3" y="16" width="3" height="1" fill="#94a3b8"/>
      <rect x="17" y="14" width="3" height="1" fill="#94a3b8"/>
      <rect x="17" y="16" width="3" height="1" fill="#94a3b8"/>
    </svg>
  </div>

  <script nonce="${nonce}">
    (()=>{
      const dock = document.getElementById('f-cat-dock');
      const bubble = document.getElementById('f-cat-bubble');
      if (!dock || !bubble) return;

      const quotes = [
        "Meow! 🐾",
        "Tracking operational drift in VieSHOP... 🐟",
        "Checking cold-chain milk at Vinamilk... 🥛",
        "Tracing W3C PROV-O audit trails... 🔍",
        "Restoring customer rights on Shopee... 📦",
        "Purrr... 100% verified research! ✨",
        "Following the mechanism, not the slogan! 🧶"
      ];

      let quoteIdx = 0;
      let hideTimer = null;
      let onRight = true;

      function showBubble(text) {
        bubble.textContent = text;
        bubble.classList.add('visible');
        dock.classList.add('petted');
        
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
          bubble.classList.remove('visible');
          dock.classList.remove('petted');
        }, 3200);
      }

      dock.addEventListener('click', () => {
        quoteIdx = (quoteIdx + 1) % quotes.length;
        showBubble(quotes[quoteIdx]);

        if (quoteIdx % 3 === 0) {
          onRight = !onRight;
          dock.classList.toggle('is-left', !onRight);
        }
      });

      dock.addEventListener('mouseenter', () => {
        if (!bubble.classList.contains('visible')) {
          showBubble(quotes[quoteIdx]);
        }
      });
    })();
  </script>`;
}

function layoutFooter(label = "Ho Chi Minh City · 2026", nonce = '', showCompanion = false) {
  return `<footer class="f-footer">
    <div class="f-wrap f-footer-row">
      <span>Phạm Thanh Phú · ${escapeHtml(label)}</span>
      <span><a href="mailto:phamthanhphu97@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/yunero1206/" target="_blank" rel="noreferrer">LinkedIn</a></span>
    </div>
  </footer>
  <div id="f-global-toast" class="f-toast-msg" role="status" aria-live="polite"></div>
  
  <!-- Universal Command Palette Modal -->
  <dialog id="f-cmd-dialog" class="f-cmd-dialog" aria-label="Command Palette">
    <div class="f-cmd-top">
      <span class="f-cmd-icon">🔍</span>
      <input type="text" id="f-cmd-input" class="f-cmd-input" aria-label="Search works and pages" placeholder="Search ${totalWorks} works, tags, lenses, or pages..." autocomplete="off" spellcheck="false">
      <button type="button" id="f-cmd-close" class="f-cmd-esc" aria-label="Close search" title="Close (Esc)">×</button>
    </div>
    <div id="f-cmd-results" class="f-cmd-results"></div>
    <div class="f-cmd-footer">
      <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
      <span><kbd>↵</kbd> select</span>
      <span><kbd>ESC</kbd> dismiss</span>
    </div>
  </dialog>

  
  <script nonce="${nonce}">
    (function(){
      
  const SEARCH_ITEMS = ${JSON.stringify([
    { title: `Work Library: All ${totalWorks} Works`, path: "/work", type: "Page", badge: "Archive" },
    { title: "About Phạm Thanh Phú: Operating Principles & Horizon", path: "/about", type: "Page", badge: "Profile" },
    ...finalModes.map(mode => ({ title: mode.label, path: `/work?mode=${mode.id}`, type: "Lens", badge: "Research Mode" })),
    ...finalWorkLibrary.map(item => {
      const preview = workPreviews.find(preview => preview.path === item.path);
      return { title: item.title, path: item.path, type: item.type, badge: `Case ${item.index}`, keywords: [item.tags, item.question, preview?.label, preview?.hook, preview?.detail].filter(Boolean).join(' ') };
    })
  ]).replace(/</g, '\\u003c')};

      var cmdDialog = document.getElementById('f-cmd-dialog');
      var cmdInput = document.getElementById('f-cmd-input');
      var cmdResults = document.getElementById('f-cmd-results');
      var cmdTrigger = document.getElementById('f-nav-cmd-trigger');
      var cmdClose = document.getElementById('f-cmd-close');
      var selectedIdx = 0;
      var currentFiltered = [];

      function escapeText(value) {
        var el = document.createElement('span');
        el.textContent = value;
        return el.innerHTML;
      }

      function renderItems(items) {
        currentFiltered = items;
        selectedIdx = 0;
        if (!items || items.length === 0) {
          cmdResults.innerHTML = '<div class="f-cmd-empty">No monographs or pages found matching your query.</div>';
          return;
        }

        var html = '';
        var lastType = '';
        items.forEach(function(item, idx) {
          if (item.type !== lastType) {
            html += '<div class="f-cmd-section-label">' + escapeText(item.type) + '</div>';
            lastType = item.type;
          }
          var isSel = (idx === selectedIdx) ? ' is-selected' : '';
          var extIcon = item.ext ? ' ↗' : '';
          html += '<a href="' + item.path + '"' + (item.ext ? ' target="_blank" rel="noreferrer"' : '') + ' class="f-cmd-item' + isSel + '" data-idx="' + idx + '">' +
            '<div class="f-cmd-item-left">' +
              '<span class="f-cmd-item-icon">' + (item.type === 'Live App' ? '⚡' : (item.type === 'Page' ? '📄' : '📖')) + '</span>' +
              '<span class="f-cmd-item-title">' + escapeText(item.title) + extIcon + '</span>' +
            '</div>' +
            '<span class="f-cmd-item-badge">' + item.badge + '</span>' +
          '</a>';
        });
        cmdResults.innerHTML = html;
      }

      function openPalette() {
        if (!cmdDialog) return;
        if (typeof cmdDialog.showModal === 'function') {
          cmdDialog.showModal();
        } else {
          cmdDialog.setAttribute('open', '');
        }
        cmdInput.value = location.pathname === '/work' ? new URLSearchParams(location.search).get('q') || '' : '';
        searchItems();
        setTimeout(function(){ cmdInput.focus(); }, 50);
      }

      function closePalette() {
        if (!cmdDialog) return;
        if (typeof cmdDialog.close === 'function') {
          cmdDialog.close();
        } else {
          cmdDialog.removeAttribute('open');
        }
      }

      if (cmdTrigger) {
        cmdTrigger.addEventListener('click', openPalette);
      }
      if (cmdClose) cmdClose.addEventListener('click', closePalette);

      // Shortcut: Ctrl+K or Cmd+K
      document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          if (cmdDialog && cmdDialog.open) {
            closePalette();
          } else {
            openPalette();
          }
        }
        if (e.key === 'Escape' && cmdDialog && cmdDialog.open) {
          closePalette();
        }
      });

      if (cmdDialog) {
        cmdDialog.addEventListener('click', function(e) {
          if (e.target === cmdDialog) closePalette();
        });
      }

      function searchItems() {
        var q = cmdInput.value.trim().toLowerCase();
        if (!q) {
          renderItems(SEARCH_ITEMS);
          return;
        }
        var terms = q.split(/\\s+/);
        var matched = SEARCH_ITEMS.filter(function(item) {
          var text = [item.title, item.badge, item.keywords || ''].join(' ').toLowerCase();
          return terms.every(function(term) { return text.includes(term); });
        });
        var resultsUrl = new URL('/work', location.origin);
        if (location.pathname === '/work') {
          var params = new URLSearchParams(location.search);
          ['mode', 'topic', 'type', 'sort', 'saved'].forEach(function(key) { if (params.has(key)) resultsUrl.searchParams.set(key, params.get(key)); });
        }
        resultsUrl.searchParams.set('q', cmdInput.value.trim());
        matched.unshift({title: 'View matching works', path: resultsUrl.pathname + resultsUrl.search, type: 'Search', badge: 'Results'});
        renderItems(matched);
      }

      if (cmdInput) {
        cmdInput.addEventListener('input', searchItems);
        cmdInput.addEventListener('keydown', function(e) {
          if (!currentFiltered || currentFiltered.length === 0) return;
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIdx = (selectedIdx + 1) % currentFiltered.length;
            updateSelectionUi();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIdx = (selectedIdx - 1 + currentFiltered.length) % currentFiltered.length;
            updateSelectionUi();
          } else if (e.key === 'Enter') {
            e.preventDefault();
            var target = currentFiltered[selectedIdx];
            if (target) {
              if (target.ext) {
                window.open(target.path, '_blank', 'noreferrer');
              } else {
                window.location.href = target.path;
              }
              closePalette();
            }
          }
        });
      }

      function updateSelectionUi() {
        var items = cmdResults.querySelectorAll('.f-cmd-item');
        items.forEach(function(el, i) {
          el.classList.toggle('is-selected', i === selectedIdx);
          if (i === selectedIdx) {
            el.scrollIntoView({ block: 'nearest' });
          }
        });
      }
    })();
  </script>

  ${showCompanion ? catGlobalComponent(nonce) : ""}
  <script nonce="${nonce}">
    (function(){
      var toast = document.getElementById('f-global-toast');
      var toastTimer = null;
      window.showToast = function(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function() {
          toast.classList.remove('is-visible');
        }, 2600);
      };
    })();
  </script>`;
}

function homePage(nonce) {
  return `<!DOCTYPE html>
<html lang="en">
${layoutHead("Phạm Thanh Phú — Business & Product Operations", "Business Operations, Product Operations, and Product Strategy — selected work and an evidence-first operating approach.", nonce)}
<body>
  <a class="f-skip" href="#main">Skip to main content</a>
  ${layoutHeader("home", nonce)}
  ${homeContent()}
  ${layoutFooter("Ho Chi Minh City · 2026", nonce, false)}
</body>
</html>`;
}

function workPage(nonce) {
  const previewByPath = new Map(workPreviews.map(preview => [preview.path, preview]));
  const works = finalWorkLibrary.filter(item => item.path.startsWith('/work/')).sort((a, b) => {
    const ad = previewByPath.get(a.path)?.updated || '';
    const bd = previewByPath.get(b.path)?.updated || '';
    return Number(!ad) - Number(!bd) || bd.localeCompare(ad) || b.index - a.index;
  });
  const topicGroups = [
    { id: 'demo', label: 'Public Demo', paths: ['explainable-trust', 'vieworld'] },
    { id: 'fandom', label: 'Fandom & Commerce', paths: ['creator-platform-operating-model', 'post-signing-artist-label-operations', 'fanme-controlled-growth', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system', 'datvietvac-who-owns-the-fan-promise', 'vieworld', 'metub-creator-economy', 'artist-fandom-page', 'shopee-account-restrictions'] },
    { id: 'trust', label: 'AI & Trust', paths: ['elfie-trust-safe-activation', 'explainable-trust', 'vietnam-diamond-market-crisis', 'diamond-trust-chain-collapse', 'pnj-after-the-diamond-shock', 'pathway-lens-operational-cycles', 'ai-judgment-decisions', 'ai-apprenticeship', 'momo-ai-paylater', 'zalo-scam-emergency-mode'] },
    { id: 'policy', label: 'Platform Policy', paths: ['shopee-account-restrictions', 'adobe-account-restriction', 'elfie-trust-safe-activation', 'momo-ai-paylater', 'zalo-scam-emergency-mode'] },
    { id: 'supply', label: 'Supply Chain', paths: ['vinamilk-trusted-nutrition', 'fanme-controlled-growth', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system'] },
    { id: 'discovery', label: 'Product Discovery', paths: ['vinamilk-trusted-nutrition', 'elfie-trust-safe-activation', 'datvietvac-ownership-belonging', 'datvietvac-fandom-cards', 'vieshop-fan-centred-merchandise-system', 'vieworld', 'artist-fandom-page', 'zalo-scam-emergency-mode'] }
  ];
  const bookmarkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/></svg>';
  const storiesHtml = works.map(item => {
    const preview = previewByPath.get(item.path) || { label: item.title, hook: item.question, detail: item.type, stage: item.maturity };
    const topics = topicGroups.filter(topic => topic.paths.includes(item.path.slice(6))).map(topic => topic.id).join(' ');
    const storyId = 'work-story-' + item.index;
    return `<article class="f-work-item" data-path="${item.path}" data-index="${item.index}" data-title="${escapeHtml(preview.label)}" data-updated="${preview.updated || ''}" data-type="${preview.format}" data-mode="${item.mode}" data-topics="${topics}" data-search="${escapeHtml([item.title, item.question, item.tags, item.type, item.maturity, preview.label, preview.hook, preview.detail].join(' ').toLowerCase())}">
      ${renderWorkStory(preview, { id: storyId })}
      <button class="f-work-save" type="button" data-save-path="${item.path}" data-save-title="${escapeHtml(item.title)}" aria-pressed="false" aria-label="Save ${escapeHtml(item.title)}">${bookmarkIcon}</button>
    </article>`;
  }).join('');
  return `<!doctype html>
<html lang="en">
${layoutHead('Work Library — Phạm Thanh Phú', `Research, operating case studies, essays, and product prototypes. Browse all ${totalWorks} works.`, nonce, { path: '/work' })}
<body>
  <a class="f-skip" href="#main">Skip to catalog</a>
  ${layoutHeader('work', nonce)}
  <main id="main" class="f-work-page">
    <h1 class="f-sr-only">Work collection</h1>
    <section class="f-wrap f-work-toolbar" aria-label="Find work">
      <div class="f-work-results"><span id="work-count" role="status" aria-live="polite">${works.length} works</span>
        <button type="button" id="btn-filter-saved" class="f-work-saved" aria-pressed="false">${bookmarkIcon}<span>Saved (0)</span></button>
      </div>
      <div class="f-work-controls">
        <label class="f-work-select"><span>Topic:</span><select id="work-topic" aria-label="Filter by topic"><option value="all">All topics</option>${topicGroups.map(topic => `<option value="${topic.id}">${escapeHtml(topic.label)}</option>`).join('')}</select></label>
        <label class="f-work-select"><span>Type:</span><select id="work-type" aria-label="Filter by type"><option value="all">All types</option><option value="case">Case studies</option><option value="prototype">Prototypes</option><option value="essay">Essays</option><option value="concept">Concepts</option></select></label>
        <label class="f-work-select"><span>Sort:</span><select id="work-sort" aria-label="Sort works"><option value="newest">Latest updated</option><option value="oldest">Earliest updated</option><option value="title">Title A–Z</option></select></label>
      </div>
      <div class="f-work-active" id="work-active-filters" hidden><span id="work-mode-label" hidden></span><button type="button" id="work-query-clear" class="f-work-query" hidden><span></span><span aria-hidden="true">×</span></button><button type="button" id="work-clear-filters" class="f-work-clear" hidden>Clear filters</button></div>
    </section>
    <section class="f-wrap f-work-stories" id="catalog-container" aria-label="Work collection">${storiesHtml}</section>
    <div class="f-wrap"><div id="work-empty" class="f-work-empty" hidden><h2>No works found</h2><p id="work-empty-message">Try another keyword or clear the filters.</p><button type="button" id="work-reset-filters" class="f-editorial-link">Reset filters <span aria-hidden="true">→</span></button></div></div>
  </main>
  ${layoutFooter('Ho Chi Minh City · 2026', nonce, false)}
  <script nonce="${nonce}">
    (() => {
      const searchTrigger = document.getElementById('f-nav-cmd-trigger');
      const clearQuery = document.getElementById('work-query-clear');
      const clearFilters = document.getElementById('work-clear-filters');
      const topic = document.getElementById('work-topic');
      const type = document.getElementById('work-type');
      const sort = document.getElementById('work-sort');
      const savedToggle = document.getElementById('btn-filter-saved');
      const catalog = document.getElementById('catalog-container');
      const modes = ${JSON.stringify(Object.fromEntries(finalModes.map(mode => [mode.id, mode.short])))};
      const items = Array.from(document.querySelectorAll('.f-work-item'));
      const saveButtons = Array.from(document.querySelectorAll('.f-work-save'));
      const knownPaths = new Set(items.map(item => item.dataset.path));
      let savedOnly = false;
      let mode = '';
      let displayedSort = 'newest';
      let query = '';
      function bookmarks() {
        try { const value = JSON.parse(localStorage.getItem('f-bookmarks') || '[]'); return Array.isArray(value) ? value.filter(path => typeof path === 'string') : []; }
        catch { return []; }
      }
      function readUrl() {
        const params = new URLSearchParams(location.search);
        for (const [select, key, fallback] of [[topic, 'topic', 'all'], [type, 'type', 'all'], [sort, 'sort', 'newest']]) select.value = Array.from(select.options).some(option => option.value === params.get(key)) ? params.get(key) : fallback;
        mode = Object.hasOwn(modes, params.get('mode')) ? params.get('mode') : '';
        query = params.get('q') || '';
        savedOnly = params.get('saved') === '1';
      }
      function writeUrl(replace) {
        const url = new URL(location.href);
        const values = {mode, topic: topic.value === 'all' ? '' : topic.value, type: type.value === 'all' ? '' : type.value, sort: sort.value === 'newest' ? '' : sort.value, q: query.trim(), saved: savedOnly ? '1' : ''};
        url.searchParams.delete('view');
        for (const [key, value] of Object.entries(values)) value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
        if (url.href !== location.href) history[replace ? 'replaceState' : 'pushState']({}, '', url);
      }
      function render() {
        const saved = new Set(bookmarks());
        const terms = query.trim().toLowerCase().split(/\\s+/).filter(Boolean);
        const activeFilters = Number(Boolean(mode)) + Number(topic.value !== 'all') + Number(type.value !== 'all') + Number(savedOnly);
        const filtered = activeFilters > 0 || terms.length > 0;
        const matches = new Set(items.filter(item => (!mode || item.dataset.mode === mode) && (topic.value === 'all' || item.dataset.topics.split(' ').includes(topic.value)) && (type.value === 'all' || item.dataset.type === type.value) && (!savedOnly || saved.has(item.dataset.path)) && terms.every(term => item.dataset.search.includes(term))));
        for (const item of items) item.hidden = !matches.has(item);
        if (displayedSort !== sort.value) {
          const ordered = items.slice().sort((a, b) => {
            if (sort.value === 'title') return a.dataset.title.localeCompare(b.dataset.title, 'en') || Number(b.dataset.index) - Number(a.dataset.index);
            const ad = a.dataset.updated, bd = b.dataset.updated;
            return Number(!ad) - Number(!bd) || (sort.value === 'oldest' ? ad.localeCompare(bd) : bd.localeCompare(ad)) || Number(b.dataset.index) - Number(a.dataset.index);
          });
          catalog.append(...ordered);
          displayedSort = sort.value;
        }
        for (const button of saveButtons) {
          const active = saved.has(button.dataset.savePath);
          button.setAttribute('aria-pressed', String(active));
          button.setAttribute('aria-label', (active ? 'Remove from saved: ' : 'Save ') + button.dataset.saveTitle);
        }
        savedToggle.setAttribute('aria-pressed', String(savedOnly));
        savedToggle.querySelector('span').textContent = 'Saved (' + Array.from(saved).filter(path => knownPaths.has(path)).length + ')';
        clearQuery.hidden = !query.trim();
        clearQuery.querySelector('span').textContent = '“' + query.trim() + '”';
        clearQuery.setAttribute('aria-label', 'Clear search: ' + query.trim());
        document.getElementById('work-active-filters').hidden = !filtered;
        const modeLabel = document.getElementById('work-mode-label');
        modeLabel.hidden = !mode;
        modeLabel.textContent = modes[mode] || '';
        clearFilters.hidden = !activeFilters;
        const visibleCount = matches.size;
        document.getElementById('work-count').textContent = visibleCount + (visibleCount === items.length ? ' works' : ' of ' + items.length + ' works');
        document.getElementById('work-empty').hidden = visibleCount > 0;
        document.getElementById('catalog-container').hidden = !visibleCount;
        document.getElementById('work-empty-message').textContent = savedOnly && !bookmarks().some(path => knownPaths.has(path)) ? 'Saved works stay in this browser. Save a work with its bookmark button to find it here.' : 'Try another keyword, or clear the filters to browse all ' + items.length + ' works.';
      }
      function update(replace = false) { writeUrl(replace); render(); }
      function reset() { mode = ''; topic.value = 'all'; type.value = 'all'; query = ''; savedOnly = false; update(); searchTrigger.focus(); }
      for (const select of [topic, type, sort]) select.addEventListener('change', () => update());
      savedToggle.addEventListener('click', () => { savedOnly = !savedOnly; update(); });
      clearQuery.addEventListener('click', () => { query = ''; update(); searchTrigger.focus(); });
      clearFilters.addEventListener('click', reset);
      document.getElementById('work-reset-filters').addEventListener('click', reset);
      for (const button of saveButtons) button.addEventListener('click', () => {
        const saved = new Set(bookmarks());
        saved.has(button.dataset.savePath) ? saved.delete(button.dataset.savePath) : saved.add(button.dataset.savePath);
        try { localStorage.setItem('f-bookmarks', JSON.stringify(Array.from(saved))); } catch { return; }
        render();
      });
      window.addEventListener('popstate', () => { readUrl(); render(); });
      window.addEventListener('pageshow', () => { readUrl(); render(); });
      window.addEventListener('storage', event => { if (event.key === 'f-bookmarks') render(); });
      document.addEventListener('keydown', event => {
        if (document.querySelector('dialog[open]') || event.ctrlKey || event.metaKey || event.altKey) return;
        if (event.target.isContentEditable || event.target.closest?.('input, textarea, select')) return;
        if (event.key === '/') { event.preventDefault(); searchTrigger.click(); }
      });
      readUrl(); render();
    })();
  </script>
</body>
</html>`;
}


function splitCaseOpening(body) {
  const tag = /^\s*<asset-bar>/.test(body) ? 'asset-bar' : /^\s*<div class="f-asset-bar">/.test(body) ? 'div' : '';
  if (!tag) return { sources: '', narrative: body };
  const tags = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'g');
  let depth = 0;
  for (const match of body.matchAll(tags)) {
    depth += match[1] ? -1 : 1;
    if (depth === 0) {
      const end = match.index + match[0].length;
      return { sources: body.slice(0, end), narrative: body.slice(end) };
    }
  }
  return { sources: '', narrative: body };
}

function casePage(item, nonce) {
  const doc = caseDocuments[item.path] || { assets: [], body: "" };
  // Keep the opening source links available in the toolbar, before the narrative.
  const opening = splitCaseOpening(doc.body || '');
  const sourceLinks = renderEditorialNotion(opening.sources, doc.assets || []);
  const renderedProse = renderEditorialNotion(opening.narrative, doc.assets || []);
  const guide = caseReadingGuides[item.path];
  const prototype = casePrototypes[item.path];

  // Reading time estimate (avg 220 wpm)
  const { words: wordCount, minutes: readMinutes } = getReadingStats(doc.body || "");

  // Asset count from doc
  const assetCount = (doc.assets || []).length;

  // Mode label for meta
  const modeObj = finalModes.find(m => m.id === item.mode);
  const modeLabel = modeObj ? modeObj.label : item.mode;

  // All case monographs for cross-referencing
  const allWorks = finalWorkLibrary.filter(w => w.path.startsWith("/work/"));

  // Related Case Studies calculation (2 highest relevance matches)
  const itemTagList = typeof item.tags === 'string' ? item.tags.split('·').map(t => t.trim().toLowerCase()) : [];
  const relatedWorks = allWorks
    .filter(w => w.path !== item.path)
    .map(w => {
      let score = 0;
      if (w.mode === item.mode) score += 3;
      if (w.type === item.type) score += 2;
      const wTagList = typeof w.tags === 'string' ? w.tags.split('·').map(t => t.trim().toLowerCase()) : [];
      const sharedTags = wTagList.filter(t => itemTagList.includes(t));
      score += sharedTags.length * 2;
      return { work: w, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(x => x.work);

  const relatedHtml = `
    <div class="f-related-section">
      <div class="f-related-head">
        <span class="f-related-eyebrow">Related Evidence &amp; Frameworks</span>
        <span class="f-related-hint">Connected across research lenses</span>
      </div>
      <div class="f-related-grid">
        ${relatedWorks.map(rw => `
          <a href="${rw.path}" class="f-related-card">
            <div class="f-related-card-top">
              <span class="f-related-mode">${escapeHtml(finalModes.find(mode => mode.id === rw.mode)?.label || rw.mode)}</span>
              <span class="f-related-read">${getReadingStats(caseDocuments[rw.path]?.body || '').minutes} min read</span>
            </div>
            <h4>${escapeHtml(rw.title)}</h4>
            <p class="f-related-question">“${escapeHtml(rw.question)}”</p>
            <div class="f-related-foot">
              <span>Read case monograph →</span>
            </div>
          </a>
        `).join("")}
      </div>
    </div>
  `;

  // Valid Drive IDs whitelist (server-side rendered, trusted)
  const validDriveIds = JSON.stringify([...new Set([
    ...(doc.assets || []).map(asset => asset.driveId).filter(Boolean),
    ...[...(doc.body || '').matchAll(/(?:data-driveid|driveid)="([A-Za-z0-9_-]+)"/g)].map(match => match[1])
  ])]);


  const compactToolbar = `    <div class="f-wrap f-case-toolbar" role="group" aria-label="Reading controls">
      <span class="f-case-read-time">${readMinutes} min<span class="f-read-label"> read</span></span>
      ${sourceLinks ? `<details class="f-case-sources"><summary>${assetCount > 0 ? assetCount + ' artifact' + (assetCount > 1 ? 's' : '') : 'Source links'}</summary><div class="f-case-sources-panel">${sourceLinks}</div></details>` : assetCount > 0 ? `<span class="f-case-read-time">${assetCount} artifact${assetCount > 1 ? 's' : ''}</span>` : ''}
      <details class="f-mobile-toc">
        <summary>Contents</summary>
        <ul id="f-mobile-toc-list" class="f-mobile-toc-list"></ul>
      </details>
      <details class="f-reading-tools"><summary aria-label="Reading tools"><span class="f-reading-tools-label">Reading tools</span><span class="f-reading-tools-short" aria-hidden="true">Tools</span></summary><div class="f-reading-tools-panel">
          <div class="f-case-action-left">
            <button type="button" id="f-btn-bookmark" class="f-action-pill" data-path="${escapeHtml(item.path)}" aria-pressed="false"><span class="bm-text">Save</span></button>
            <button type="button" id="f-btn-copy-url" class="f-action-pill">Copy link</button>
            <button type="button" id="f-cite-btn" class="f-action-pill" data-title="${escapeHtml(item.title)}">Cite</button>
          </div>
          <div class="f-case-action-right">
            <button type="button" id="f-btn-font-dec" class="f-action-pill" aria-label="Decrease text size">A−</button>
            <button type="button" id="f-btn-font-reset" class="f-action-pill f-reading-size" aria-label="Reset text size" title="Reset text size">18px</button>
            <button type="button" id="f-btn-font-inc" class="f-action-pill" aria-label="Increase text size">A+</button>
          </div>
          ${prototype ? `<a class="f-case-prototype" href="${prototype.href}" target="_blank" rel="noreferrer">${escapeHtml(prototype.label)} <span aria-hidden="true">↗</span></a>` : ''}
          <details class="f-case-info"><summary>About this case</summary>
    ${guide ? `<section class="f-case-brief" aria-label="Case overview">
      <dl><div><dt>Problem</dt><dd>${escapeHtml(guide.problem)}</dd></div><div><dt>Approach</dt><dd>${escapeHtml(guide.approach)}</dd></div><div><dt>Output &amp; next test</dt><dd>${escapeHtml(guide.output)}</dd></div></dl>
      <p class="f-case-brief-boundary"><strong>Evidence boundary</strong> ${escapeHtml(guide.boundary)}</p>
    </section>` : ''}

    <div class="f-case-meta">
      <dl class="f-case-meta-grid">
        <div class="f-meta-cell">
          <dt>Maturity</dt>
          <dd>${escapeHtml(item.maturity)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Research Type</dt>
          <dd>${escapeHtml(item.type)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Research Mode</dt>
          <dd>${escapeHtml(modeLabel)}</dd>
        </div>
        <div class="f-meta-cell">
          <dt>Evidence Basis</dt>
          <dd>${escapeHtml(item.evidenceBasis || 'Outside-In · Public Evidence')}</dd>
        </div>
      </dl>
    </div>

    </details>
          </div></details>
    </div>`;

  const clientScript = `
    <script nonce="${nonce}">
      (()=>{
        const bar = document.getElementById('f-progress-bar');
        const prose = document.getElementById('record');
        const readingMenus = [...document.querySelectorAll('.f-case-toolbar > details')];
        readingMenus.forEach(menu => menu.addEventListener('toggle', () => {
          if (menu.open) readingMenus.forEach(other => { if (other !== menu) other.open = false; });
        }));
        document.addEventListener('click', event => {
          if (event.target.closest?.('dialog')) return;
          readingMenus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
        });
        document.addEventListener('keydown', event => {
          if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
          readingMenus.forEach(menu => {
            if (menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
          });
        });
        const tocList = document.getElementById('f-toc-list');
        if (prose && tocList) {
          const mainHeadings = [...prose.querySelectorAll('h1[id], h2[id]')];
          const headings = mainHeadings.length ? mainHeadings : [...prose.querySelectorAll('h3[id]')];
          headings.forEach(h => {
            if (!h.id) return;
            const li = document.createElement('li');
            li.className = 'f-toc-item' + (h.tagName === 'H1' ? ' level-1' : (h.tagName === 'H3' ? ' level-3' : ''));
            const a = document.createElement('a');
            a.className = 'f-toc-link';
            a.href = '#' + h.id;
            a.textContent = h.textContent.replace(/^#\\s*/, '');
            li.appendChild(a);
            tocList.appendChild(li);
            const mobileToc = document.getElementById('f-mobile-toc-list');
            if (mobileToc) mobileToc.appendChild(li.cloneNode(true));
          });

          const tocLinks = [...document.querySelectorAll('.f-toc-link')];
          function updateReadingPosition() {
            const visibleHeadings = headings.filter(h => h.getClientRects().length);
            let active = visibleHeadings[0];
            for (const heading of visibleHeadings) {
              if (heading.getBoundingClientRect().top <= 140) active = heading;
              else break;
            }
            tocLinks.forEach(link => {
              const selected = !!active && link.hash === '#' + active.id;
              link.classList.toggle('is-active', selected);
              if (selected) link.setAttribute('aria-current', 'location');
              else link.removeAttribute('aria-current');
            });
            if (bar) {
              const bounds = prose.getBoundingClientRect();
              const total = Math.max(1, bounds.height - window.innerHeight + 100);
              bar.style.width = Math.max(0, Math.min(100, (100 - bounds.top) / total * 100)) + '%';
            }
          }
          let readingFrame;
          function scheduleReadingPosition() {
            if (readingFrame) return;
            readingFrame = requestAnimationFrame(() => { readingFrame = null; updateReadingPosition(); });
          }
          window.addEventListener('scroll', scheduleReadingPosition, { passive: true });
          window.addEventListener('resize', scheduleReadingPosition);
          new ResizeObserver(scheduleReadingPosition).observe(prose);
          function revealSection(hash) {
            let id;
            try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
            const heading = document.getElementById(id);
            if (!heading || !prose.contains(heading)) return;
            let ancestor = heading.parentElement;
            while (ancestor && ancestor !== prose) {
              if (ancestor.tagName === 'DETAILS') ancestor.open = true;
              ancestor = ancestor.parentElement;
            }
            heading.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
            scheduleReadingPosition();
          }
          tocLinks.forEach(link => link.addEventListener('click', e => {
            e.preventDefault();
            const hash = link.hash;
            const mobileToc = link.closest('.f-mobile-toc');
            if (mobileToc) mobileToc.open = false;
            history.pushState(null, '', hash);
            revealSection(hash);
          }));
          window.addEventListener('hashchange', () => revealSection(location.hash));
          if (location.hash) revealSection(location.hash);
          updateReadingPosition();
        }

        
        // Font sizing controls
        const recordEl = document.getElementById('record');
        const decBtn = document.getElementById('f-btn-font-dec');
        const incBtn = document.getElementById('f-btn-font-inc');
        const resetSizeBtn = document.getElementById('f-btn-font-reset');
        if (recordEl && decBtn && incBtn && resetSizeBtn) {
          const defaultSize = parseFloat(getComputedStyle(recordEl).getPropertyValue('--reading-size')) || 18;
          let readingSize = defaultSize;
          try {
            const savedSize = Number(localStorage.getItem('f-reading-size'));
            if (savedSize >= 15 && savedSize <= 25) readingSize = savedSize;
          } catch {}
          function updateSize(save = false) {
            recordEl.style.setProperty('--reading-size', readingSize + 'px');
            resetSizeBtn.textContent = readingSize + 'px';
            decBtn.disabled = readingSize <= 15;
            incBtn.disabled = readingSize >= 25;
            if (save) { try { localStorage.setItem('f-reading-size', String(readingSize)); } catch {} }
          }
          decBtn.addEventListener('click', () => { readingSize = Math.max(15, readingSize - 1); updateSize(true); });
          incBtn.addEventListener('click', () => { readingSize = Math.min(25, readingSize + 1); updateSize(true); });
          resetSizeBtn.addEventListener('click', () => {
            readingSize = defaultSize;
            try { localStorage.removeItem('f-reading-size'); } catch {}
            updateSize();
          });
          updateSize();
        }

        // Bookmark toggle
        const bmBtn = document.getElementById('f-btn-bookmark');
        if (bmBtn) {
          const path = bmBtn.dataset.path;
          let bookmarks = [];
          function readBookmarks() {
            try {
              const saved = JSON.parse(localStorage.getItem('f-bookmarks') || '[]');
              bookmarks = Array.isArray(saved) ? saved.filter(value => typeof value === 'string') : [];
            } catch { bookmarks = []; }
          }
          function updateBmUi() {
            const isSaved = bookmarks.includes(path);
            bmBtn.classList.toggle('is-saved', isSaved);
            bmBtn.setAttribute('aria-pressed', String(isSaved));
            const label = bmBtn.querySelector('.bm-text');
            if (label) label.textContent = isSaved ? 'Saved ✓' : 'Save';
          }
          readBookmarks();
          updateBmUi();
          window.addEventListener('pageshow', () => { readBookmarks(); updateBmUi(); });
          window.addEventListener('storage', e => { if (e.key === 'f-bookmarks') { readBookmarks(); updateBmUi(); } });

          bmBtn.addEventListener('click', () => {
            readBookmarks();
            const idx = bookmarks.indexOf(path);
            if (idx === -1) {
              bookmarks.push(path);
              window.showToast && window.showToast('Monograph saved to your reading list 🔖');
            } else {
              bookmarks.splice(idx, 1);
              window.showToast && window.showToast('Removed from reading list');
            }
            try { localStorage.setItem('f-bookmarks', JSON.stringify(bookmarks)); } catch(e){}
            updateBmUi();
          });
        }

        // Copy Direct Heading Anchor Link
        document.querySelectorAll('.f-anchor').forEach(anchor => {
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = anchor.getAttribute('href');
            const fullUrl = window.location.origin + window.location.pathname + hash;
            window.history.pushState(null, '', hash);
            const targetEl = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (targetEl) targetEl.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(fullUrl).then(() => {
                window.showToast && window.showToast('Direct section link copied to clipboard 🔗');
              }).catch(() => {
                window.showToast && window.showToast('Section anchor linked');
              });
            } else {
              window.showToast && window.showToast('Section anchor linked');
            }
          });
        });

        // Copy Article URL
        async function copyText(text) {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch {
            window.showToast && window.showToast('Could not copy. You can copy the page address from your browser.');
            return false;
          }
        }
        const copyUrlBtn = document.getElementById('f-btn-copy-url');
        if (copyUrlBtn) {
          copyUrlBtn.addEventListener('click', async () => {
            if (await copyText(window.location.href)) {
              window.showToast && window.showToast('Article link copied to clipboard! 🔗');
            }
          });
        }

        const citeBtn = document.getElementById('f-cite-btn');
        if (citeBtn) {
          citeBtn.addEventListener('click', async () => {
            const title = citeBtn.dataset.title || document.title;
            const citation = 'Ph\u1ea1m Thanh Ph\u00fa (2026). ' + title + '. Work & Research. ' + window.location.href;
            if (await copyText(citation)) {
              const original = citeBtn.textContent;
              citeBtn.textContent = '\u2714 Citation Copied!';
              setTimeout(() => { citeBtn.textContent = original; }, 2500);
            }
          });
        }

        const modal = document.getElementById('f-asset-modal');
        const modalTitle = document.getElementById('f-modal-title');
        const modalBadge = document.getElementById('f-modal-badge');
        const modalFrame = document.getElementById('f-modal-frame');
        const modalImg = document.getElementById('f-modal-img');
        const modalSpinner = document.getElementById('f-modal-spinner');
        const modalError = document.getElementById('f-modal-error');
        const modalErrorLink = document.getElementById('f-modal-error-link');
        const modalDrive = document.getElementById('f-modal-drive');
        const modalDownload = document.getElementById('f-modal-download');
        const modalFullscreen = document.getElementById('f-modal-fullscreen');
        const modalClose = document.getElementById('f-modal-close');

        const VALID_DRIVE_IDS = new Set(${validDriveIds});

        window.openAssetViewer = function(opts) {
          if (!modal) return;
          const rawTitle = opts.title || 'Document';
          let title = rawTitle
            .replace(/[📄👁️↗]/g, '')
            .replace(/\.(pdf|docx?|pptx?|xlsx?|png|jpe?g|webp)\b/gi, '')
            .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
            .replace(/\s*\((PDF|DOCX?|PPTX?|DECK|SHEET)\)/gi, '')
            .replace(/_+/g, ' ')
            .trim();
          const titleMap = {"vinamilk paper 1 trusted nutrition product service discovery":"Vinamilk Paper 1: Trusted Nutrition Product-Service Discovery","vinamilk paper 2 everyday milk delivery operations scale":"Vinamilk Paper 2: Everyday Milk Delivery Operations & Scale","vinamilk paper 3 beyond the market capability allocation governance":"Vinamilk Paper 3: Beyond-the-Market Capability Allocation Governance","MFan Platform Fragmentation & Trust Chain Integration":"MFan Platform Fragmentation & Trust Chain Integration","MFan Platform Fragmentation Trust Chain Integration":"MFan Platform Fragmentation & Trust Chain Integration","Pham Thanh Phu Elfie Product Case Trust Safe Activation v4":"Elfie Product Case: Trust-Safe Activation (V4)","Post-Signing Artist Label Operations Case Study":"Post-Signing Artist / Label Operations Case Study","Shopee Account Restriction Resolution Portfolio Final 2026-08-05":"Shopee Account Restriction Resolution Case (Aug 2026)","FanMe Controlled Growth Native Editable Final":"FanMe Controlled Growth: Native Operating Framework","FanMe Controlled Growth Pilot":"FanMe Controlled Growth Pilot Monograph","FanMe Controlled Growth — Native Editable Final":"FanMe Controlled Growth: Native Operating Framework","DatVietVAC Ownership Belonging Merchandise Growth Case Study":"DatVietVAC: Ownership & Belonging Merchandise Growth","DatVietVAC Fandom Cards Case Study":"DatVietVAC Fandom Cards: Collectibles Product Line Case","VieSHOP — Fan-Centred Merchandise System":"VieSHOP: Fan-Centred Merchandise System Case","DatVietVAC: Who Owns the Fan Promise? — Full Case":"DatVietVAC: Who Owns the Fan Promise? (Full Case)","DatVietVAC Evidence Pack V1.1":"DatVietVAC Evidence Pack (V1.1 Forensic Audit)","Vietnam Diamond Market Crisis Case Study 2 Full Paper":"Vietnam’s 2026 Diamond-Market Crisis (Forensic Paper)","Adobe Account Restriction Comparative Case Study 2026-08-07":"Adobe Account Restriction: Comparative Case Study"};
          if (titleMap[title]) title = titleMap[title];
          else if (title === title.toLowerCase() && title.length > 2) {
            title = title.replace(/\b[a-z]/g, ch => ch.toUpperCase());
          }
          const type = opts.type || 'paper';
          const driveId = opts.driveId || '';
          const isImage = (type === 'image' || type === 'diagram');
          const badge = opts.badge || ({ pdf: 'PDF', doc: 'DOC', docx: 'DOCX', ppt: 'PPT', pptx: 'PPTX', xls: 'XLS', xlsx: 'XLSX', deck: 'DECK' }[type]) || (isImage ? 'IMAGE' : 'DOCUMENT');

          if (driveId && !VALID_DRIVE_IDS.has(driveId)) return;

          // Image mode vs document mode
          modal.classList.toggle('is-image-mode', isImage);
          modal.classList.remove('is-fullscreen');
          modalFullscreen.textContent = '\\u26f6';
          modal.setAttribute('aria-label', title + ' preview');
          modalFrame.title = title + ' preview';

          if (!isImage) {
            modalTitle.textContent = title;
            modalTitle.title = title;
            modalBadge.textContent = badge;
            modalDrive.href = driveId ? 'https://drive.google.com/file/d/' + driveId + '/view' : '#';
            modalDownload.href = driveId ? 'https://drive.google.com/uc?export=download&id=' + driveId : '#';
          }

          modalSpinner.style.display = 'flex';
          modalError.hidden = true;
          modalErrorLink.href = 'https://drive.google.com/file/d/' + driveId + '/view';
          modalFrame.style.display = 'none';
          modalImg.style.display = 'none';

          if (isImage && driveId) {
            let triedThumbnail = false;
            modalImg.alt = title;
            // Click image to open full-res in new tab
            modalImg.onclick = () => window.open('https://drive.google.com/file/d/' + driveId + '/view', '_blank', 'noreferrer');
            modalImg.onload = () => {
              modalSpinner.style.display = 'none';
              modalImg.style.display = 'block';
            };
            modalImg.onerror = () => {
              if (!triedThumbnail) {
                triedThumbnail = true;
                modalImg.src = 'https://drive.google.com/thumbnail?id=' + driveId + '&sz=w1600';
              } else {
                modalSpinner.style.display = 'none';
                modalError.hidden = false;
              }
            };
            modalImg.src = 'https://lh3.googleusercontent.com/d/' + driveId + '=w1600';
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
          modalFrame.removeAttribute('src');
          modalImg.onload = null;
          modalImg.onerror = null;
          modalImg.removeAttribute('src');
          document.body.style.overflow = '';
        }

        if (modalClose) modalClose.addEventListener('click', closeAssetViewer);
        const modalImgClose = document.getElementById('f-modal-img-close');
        if (modalImgClose) modalImgClose.addEventListener('click', closeAssetViewer);
        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAssetViewer();
          });
          modal.addEventListener('cancel', e => {
            e.preventDefault();
            closeAssetViewer();
          });
        }

        if (modalFullscreen) {
          modalFullscreen.addEventListener('click', () => {
            modal.classList.toggle('is-fullscreen');
            modalFullscreen.textContent = modal.classList.contains('is-fullscreen') ? '\u2715' : '\u26f6';
          });
        }

        document.querySelectorAll('.f-asset-trigger').forEach(btn => {
          if (btn.tagName !== 'BUTTON' && btn.tagName !== 'A') {
            btn.setAttribute('role', 'button');
            btn.tabIndex = 0;
            btn.setAttribute('aria-label', 'Enlarge ' + (btn.dataset.title || 'image'));
            btn.addEventListener('keydown', e => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
            });
          }
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            window.openAssetViewer({
              title: target.dataset.title || target.getAttribute('title') || 'Attached Document',
              driveId: target.dataset.driveid,
              type: target.dataset.type || 'paper',
              badge: target.dataset.badge
            });
          });
        });
        document.querySelectorAll('.f-table-wrap').forEach(table => {
          table.tabIndex = 0;
          table.setAttribute('role', 'region');
          table.setAttribute('aria-label', 'Scrollable table');
          const hint = document.createElement('p');
          hint.className = 'f-table-hint';
          hint.textContent = 'Scroll to see the full table →';
          table.before(hint);
          const updateTableHint = () => { hint.hidden = table.scrollWidth <= table.clientWidth + 1; };
          new ResizeObserver(updateTableHint).observe(table);
          updateTableHint();
        });
        document.querySelectorAll('.f-diagram-body img').forEach(img => {
          const driveId = img.closest('[data-driveid]')?.dataset.driveid;
          if (!driveId || !VALID_DRIVE_IDS.has(driveId)) return;
          let triedThumbnail = false;
          const recoverImage = () => {
            if (!triedThumbnail) {
              triedThumbnail = true;
              img.src = 'https://drive.google.com/thumbnail?id=' + driveId + '&sz=w1600';
            } else {
              img.hidden = true;
              const hint = img.parentElement.querySelector('.f-diagram-zoom-hint');
              if (hint) hint.textContent = 'Image unavailable here. Open the preview or Google Drive source.';
            }
          };
          img.addEventListener('error', recoverImage);
          if (img.complete && !img.naturalWidth) recoverImage();
        });
        document.querySelectorAll('.f-anchor').forEach(anchor => {
          const headingText = anchor.parentElement.textContent.replace(/^#\\s*/, '');
          anchor.setAttribute('aria-label', 'Copy link to ' + headingText);
          anchor.parentElement.setAttribute('aria-label', headingText);
        });
        document.querySelectorAll('.f-asset-ext-btn').forEach(link => {
          if (!link.getAttribute('aria-label')) link.setAttribute('aria-label', 'Open document in Google Drive');
        });
      })();
    </script>
  `;

  return `<!doctype html>
<html lang="en">
${layoutHead(`${item.title} — Phạm Thanh Phú`, item.question, nonce, { path: item.path, ogType: 'article', keywords: item.tags })}
<body>
  <a class="f-skip" href="#record">Skip to monograph text</a>
  ${layoutHeader("work", nonce)}
  <main>
    <section class="f-case-hero">
      <div class="f-wrap">
        <h1>${escapeHtml(item.title)}</h1>
        <p class="f-case-dek">${escapeHtml(item.question)}</p>

      </div>
    </section>

${compactToolbar}

    <div class="f-wrap f-case-reading">
      <aside class="f-case-rail" aria-label="Table of contents">
        <div class="f-rail-title">Contents</div>
        <ul id="f-toc-list" class="f-toc-list"></ul>
        <div class="f-rail-actions">
          <a href="/work" class="f-rail-btn">← All Works</a>
        </div>
      </aside>

      <article class="f-prose" id="record">

        ${renderedProse}

        ${relatedHtml}

      </article>
    </div>

    <dialog id="f-asset-modal" class="f-asset-modal" aria-label="Artifact preview">
      <div class="f-modal-topbar">
        <div class="f-modal-title-wrap">
          <span id="f-modal-badge" class="f-modal-badge">PDF</span>
          <span id="f-modal-title" class="f-modal-title">Document</span>
        </div>
        <div class="f-modal-actions">
          <button id="f-modal-fullscreen" class="f-modal-btn" aria-label="Toggle fullscreen" title="Toggle fullscreen">&#x26F6;</button>
          <a id="f-modal-drive" class="f-modal-btn" href="#" target="_blank" rel="noreferrer" aria-label="Open in Google Drive" title="Open in Google Drive">&#x2197;</a>
          <a id="f-modal-download" class="f-modal-btn" href="#" download aria-label="Download document" title="Download">&#x2913;</a>
          <button id="f-modal-close" class="f-modal-btn close" aria-label="Close preview" title="Close (Esc)">&#x2715;</button>
        </div>
      </div>
      <div class="f-modal-content">
        <div id="f-modal-spinner" class="f-modal-spinner">
          <div class="f-spin-circle"></div>
          <span>Loading preview&hellip;</span>
        </div>
        <iframe id="f-modal-frame" class="f-modal-frame" title="Document preview" allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups allow-forms" style="display:none;"></iframe>
        <img id="f-modal-img" class="f-modal-img" style="display:none;" alt="Preview">
        <div id="f-modal-error" hidden role="status" style="padding:24px;text-align:center;">
          <p>Preview could not be loaded.</p>
          <a id="f-modal-error-link" class="f-document-link" target="_blank" rel="noreferrer">Open in Google Drive ↗</a>
        </div>
        <button id="f-modal-img-close" class="f-modal-img-close" aria-label="Close preview" title="Close">&#x2715;</button>
      </div>
    </dialog>
  </main>
  ${layoutFooter(item.maturity, nonce, false)}
  ${clientScript}
</body>
</html>`;
}

function aboutPage(nonce) {
  return `<!doctype html>
<html lang="en">
${layoutHead("About — Phạm Thanh Phú", "Phạm Thanh Phú — 6+ years in B2B operations, with independent work in product strategy and AI trust. Based in Ho Chi Minh City.", nonce, { path: "/about" })}
<body>
  <a class="f-skip" href="#about-content">Skip to about content</a>
  ${layoutHeader("about", nonce)}
  ${aboutContent(totalWorks)}
  ${layoutFooter("Ho Chi Minh City · 2026", nonce, true)}
</body>
</html>`;
}

// ============================================================================
// Worker Request Routing & Response Handlers
// ============================================================================

async function handleRequest(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";

  if (path === "/assets/site.css") {
    return new Response(siteCss, { headers: { "Content-Type": "text/css; charset=utf-8" } });
  }

  if (path === "/favicon.ico" || path === "/favicon.svg") {
    return new Response(SITE_FAVICON_SVG, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }

  // Generate cryptographic nonce per-request for CSP
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes));

  // Security Headers for HTML Pages
  const htmlHeaders = {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    "Content-Security-Policy": `default-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' https://drive.google.com https://*.googleusercontent.com https://ssl.gstatic.com data:; frame-src 'self' https://drive.google.com https://docs.google.com https://accounts.google.com; connect-src 'self' https://drive.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;`,
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), camera=(), microphone=(), payment=()",
    "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
  };

  if (path === "/") {
    return new Response(homePage(nonce), { headers: htmlHeaders });
  }

  if (path === "/about") {
    return new Response(aboutPage(nonce), { headers: htmlHeaders });
  }

  if (path === "/work") {
    return new Response(workPage(nonce), { headers: htmlHeaders });
  }

  // Redirect legacy app subpaths to the integrated showcase
  if (path === "/apps/explainable-trust" || path === "/apps/explainable-trust/" || path === "/apps/explainable-trust_old" || path.startsWith("/apps/explainable-trust/")) {
    return Response.redirect(new URL("/explainable/", request.url).href, 301);
  }

  // Case Study Monograph Pages
  const matchedItem = finalWorkLibrary.find(item => item.path === path);
  if (matchedItem) {
    return new Response(casePage(matchedItem, nonce), { headers: htmlHeaders });
  }

  // Fallback 404
  return new Response(`<!doctype html>
<html lang="en">
${layoutHead("404 Not Found — Phạm Thanh Phú", "Research monograph not found or has been moved in the Work Library.", nonce)}
<body>
  ${layoutHeader("", nonce)}
  <main class="f-wrap" style="padding:80px 0;">
    <span class="f-overline" style="color:var(--copper);font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--fw-bold);letter-spacing:var(--tracking-wide);text-transform:uppercase;">404 Error</span>
    <h1 style="color:var(--navy);font-family:var(--font-display);font-size:var(--text-3xl);margin:8px 0 16px;">Research Document Not Found</h1>
    <p style="color:var(--muted);font-family:var(--font-sans);font-size:var(--text-md);margin-bottom:24px;">The document link you are looking for may have been updated or moved to a new section in the archive.</p>
    <a href="/work" class="f-rail-btn" style="display:inline-block;padding:10px 18px;">← Trở về Thư viện Nghiên cứu (Work Library)</a>
  </main>
  ${layoutFooter("Ho Chi Minh City · 2026", nonce)}
</body>
</html>`, {
    status: 404,
    headers: htmlHeaders
  });
}

export default {
  fetch: handleRequest
};

export const portfolioRoutes = ['/', '/work', '/about', ...finalWorkLibrary.map(item => item.path)];
