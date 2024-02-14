import { html } from "./html-helper.mjs";

export function cartCount({ count }) {
  return html` <div class="red__dot">${count}</div> `;
}
