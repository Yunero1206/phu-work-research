import { escapeHtml } from './html.js';
import { renderWorkThumbnail } from './work-thumbnails.js';

const dateFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

// The same thumbnail, type hierarchy and source status follow a work between pages.
export function renderWorkStory(preview, { id, selected = false, title = preview.hook, detail = preview.detail } = {}) {
  const heading = selected ? 'h3' : 'h2';
  const date = preview.updated
    ? `Updated <time datetime="${escapeHtml(preview.updated)}">${dateFormat.format(new Date(preview.updated))}</time>`
    : 'Source date not recorded';
  return `<a class="f-work-story${selected ? ' f-work-story-selected' : ''}" href="${escapeHtml(preview.path)}" aria-labelledby="${selected ? '' : id + '-label '}${id}-title">
    ${renderWorkThumbnail(preview)}
    <div class="f-work-story-copy"><div class="f-work-story-heading">
      ${selected ? '' : `<p class="f-work-story-label" id="${id}-label">${escapeHtml(preview.label)}</p>`}
      <${heading} class="f-work-hook" id="${id}-title">${escapeHtml(title)}</${heading}>
      </div>
      <p class="f-work-teaser">${escapeHtml(detail)}</p>
      <div class="f-work-story-meta"><span>${escapeHtml(preview.stage)}</span>${selected ? '' : `<span>${date}</span>`}</div>
    </div>
  </a>`;
}
