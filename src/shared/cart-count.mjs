import { html } from "./html-helper.mjs";

export function cartCount({ count }) {
  return html` <div class="count__dot">${count}</div> `;
}
