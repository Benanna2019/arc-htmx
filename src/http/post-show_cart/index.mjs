import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { cart } from "@architect/shared/cart.mjs";

export const handler = arc.http.async(showCart);

async function showCart(request) {
  let state = await arc.http.session.read(request);
  let isLoggedIn = !!state.person;

  if (!isLoggedIn) {
    return {
      html: null,
    };
  }

  let cartPage = html` ${cart({ person: state.person, show: true })} `;

  let dialog = cartPage;

  return {
    html: dialog,
  };
}
