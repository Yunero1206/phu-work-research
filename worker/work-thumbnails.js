// Small editorial maps for works without a screenshot or approved raster thumbnail.
// They summarize the authored inquiry; they are not source evidence or shipped interfaces.
import { escapeHtml as escape } from './html.js';

export function renderWorkThumbnail(preview) {
  if (preview.thumbnail) {
    return `<div class="f-work-art"${preview.thumbnailCell ? ` data-cell="${preview.thumbnailCell}"` : ''}><img src="${preview.thumbnail}" alt="${escape(preview.thumbnailAlt)}" width="360" height="150" loading="lazy" decoding="async"></div>`;
  }
  const steps = preview.thumbnailSteps || [];
  const colors = ['#e7edf4', '#faead8', '#deefeb'];
  return `<div class="f-work-art"><svg viewBox="0 0 360 150" role="img" aria-label="${escape(preview.label + ': ' + steps.join(' → '))}" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="150" fill="#fcfbf8"/>
    <text x="20" y="28" fill="#0b2348" font-size="13" font-weight="600">${escape(preview.label)}</text>
    ${steps.map((step, index) => {
      const words = step.split(' ');
      const lines = step.length > 15 && words.length > 1 ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')] : [step];
      return `<g transform="translate(${20 + index * 113},50)"><rect width="94" height="56" rx="8" fill="${colors[index % colors.length]}"/>
        <text x="47" y="${lines.length > 1 ? 25 : 32}" fill="#233c58" text-anchor="middle" font-size="11">${lines.map((line, i) => `<tspan x="47" dy="${i ? 14 : 0}">${escape(line)}</tspan>`).join('')}</text>
        ${index < steps.length - 1 ? '<path d="M99 28h10m-4-4 4 4-4 4" fill="none" stroke="#a84626" stroke-width="1.5"/>' : ''}</g>`;
    }).join('')}
    <path d="M20 126h144m10 0h166" stroke="#dfe4e9" stroke-width="3" stroke-linecap="round"/>
  </svg></div>`;
}
