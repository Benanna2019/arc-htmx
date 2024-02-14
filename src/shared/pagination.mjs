import { html } from "./html-helper.mjs";

export default function pagination({ count, page, pageCount }) {
  const prevClass = page <= 1 ? "disabled" : "";
  const nextClass = page >= pageCount ? "disabled" : "";

  return html`<div class="pagination__styles">
    <a
      class="${prevClass}"
      hx-get="/products/?page=${page - 1}"
      hx-target="#product-section"
      hx-swap="innerHTML transition:true"
    >
      <span aria-disabled=${page <= 1}>Prev</span>
    </a>
    <p>Page ${page} of ${pageCount}</p>
    <p>${count} Items Total</p>
    <a
      class="${nextClass}"
      hx-get="/products/?page=${page + 1}"
      hx-target="#product-section"
      hx-swap="innerHTML transition:true"
    >
      <span aria-disabled=${nextClass}>Next</span>
    </a>
  </div>`;
}
