import arc from "@architect/functions";
import layout from "@architect/shared/layout.mjs";
import { html } from "@architect/shared/html-helper.mjs";

export const handler = arc.http.async(index);

async function index(request) {
  let state = await arc.http.session.read(request);
  let isLoggedIn = !!state.person;
  console.log("session", state);

  const productsPage = html`
    <div
      id="product-section"
      hx-get="/products"
      hx-trigger="load"
      hx-swap="innerHTML"
    ></div>
  `;

  let contents = productsPage;

  return {
    html: layout({
      contents,
      isLoggedIn,
      person: state.person,
      serverTime: state.serverTime ?? null,
    }),
  };
}
