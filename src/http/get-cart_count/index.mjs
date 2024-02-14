import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";

export const handler = arc.http.async(cartCount);

async function cartCount(request) {
  let state = await arc.http.session.read(request);
  console.log("session", state);

  const cart = state?.person?.cart;

  const count =
    cart?.reduce(
      (
        tally,
        cartItem // replace with Product type
      ) => tally + (cartItem?.quantity ?? 0),
      0
    ) || 0;

  return {
    html: html`<span style="width: 1.5rem; height: 1.5rem; font-size: 1.5rem;"
      >${count}</span
    >`,
  };
}
