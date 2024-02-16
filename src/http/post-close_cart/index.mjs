import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { cart } from "@architect/shared/cart.mjs";

export const handler = arc.http.async(closeCart);

async function closeCart(request) {
  let state = await arc.http.session.read(request);

  let closeCart = html` ${cart({ person: state.person, show: false })} `;

  let dialog = closeCart;

  return {
    html: dialog,
  };
}
