import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import layout from "@architect/shared/layout.mjs";

export const handler = arc.http.async(index);

async function index(request) {
  let state = await arc.http.session.read(request);
  let isLoggedIn = !!state.person;

  const queryParams = request.params.productId
    ? request.params.productId
    : request.query.productId;

  const singleProductPage = html`
    <div
      id="product-info"
      hx-get="/single-product"
      hx-vals='{"id": "${queryParams}"}'
      hx-swap="innerHTML"
      hx-trigger="load"
    ></div>
  `;

  let contents = singleProductPage;

  return {
    html: layout({ contents, isLoggedIn }),
  };
}
