import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import data from "@begin/data";

export const handler = arc.http.async(singleProductInfo);

async function singleProductInfo(request) {
  const allProducts = await data.get({ table: "products" });

  const product = allProducts.filter((product) => {
    return product.key === request.query.id;
  });

  const singleProduct = html`
    <div class="single__product__style">
      <img src=${product[0]?.photo?.image} alt=${product[0]?.name} />
      <div class="details">
        <h2>${product[0].name}</h2>
        <p>${product[0].description}</p>
      </div>
    </div>
  `;

  let contents = singleProduct;

  return {
    html: contents,
  };
}
