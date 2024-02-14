import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import data from "@begin/data";

export const handler = arc.http.async(searchResults);

async function searchResults(request) {
  const allProducts = await data.get({ table: "products" });

  const searchTerm = request.body.search;

  const filteredProducts = allProducts.filter((product) => {
    const name = product.name.toLowerCase();

    return name.includes(searchTerm);
  });

  if (searchTerm === "" || filteredProducts.length === 0) {
    return {
      html: null,
    };
  }

  const products = filteredProducts
    .map((product) => {
      return html`
        <a class="dropdown__item" href="/${product.key}" hx-boost="true">
          <img src=${product.photo.image} alt=${product.name} width="50" />
          ${product.name}
        </a>
      `;
    })
    .join("");

  return {
    html: products,
  };
}
