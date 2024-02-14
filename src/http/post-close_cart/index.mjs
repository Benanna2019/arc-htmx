import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { cart } from "@architect/shared/cart.mjs";

export const handler = arc.http.async(closeCart);

async function closeCart() {
  let cartPage = html`<div id="cart-dialog"></div>`;

  let dialog = cartPage;

  return {
    html: dialog,
  };
}
