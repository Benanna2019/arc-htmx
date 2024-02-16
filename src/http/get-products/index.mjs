import arc from "@architect/functions";
import productCard from "@architect/shared/product-card.mjs";
import pagination from "@architect/shared/pagination.mjs";
import { html } from "@architect/shared/html-helper.mjs";
import data from "@begin/data";
import take from "lodash/fp/take.js";
import drop from "lodash/fp/drop.js";

export const handler = arc.http.async(products);

async function products(request) {
  const allProducts = await data.get({ table: "products", limit: 25 });
  const PER_PAGE = 2;

  const page = Number(request.query.page) || 1;
  console.log("page", page);
  const skip = page * PER_PAGE - PER_PAGE;

  const products = take(PER_PAGE, drop(skip, allProducts));

  const count = allProducts.length;
  let pageCount = Math.ceil(count / PER_PAGE);

  let productsList = products
    .map((product) => {
      return `
      ${productCard(product)}
    `;
    })
    .join("\n");

  const productItems = html`
    ${pagination({ count, page, pageCount })}
    <div class="product__list__styles">${productsList}</div>
    ${pagination({ count, page, pageCount })}
  `;

  // let contents = isLoggedIn ? loggedInPage : notLoggedInPage

  let contents = productItems;

  return {
    html: contents,
  };
}
