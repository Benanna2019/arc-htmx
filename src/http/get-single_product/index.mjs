import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import data from "@begin/data";

export const handler = arc.http.async(singleProductInfo);

async function singleProductInfo(request) {
  const product = await data.get({ table: "products", key: request.query.id });
  console.log("product", product);
  //   const product = allProducts.filter((product) => {
  //     return product.key === request.query.id;
  //   });

  const singleProduct = html`
    <div class="single__product__style">
      <img src=${product?.photo?.image} alt=${product?.name} />
      <div class="details">
        <h2>${product?.name}</h2>
        <p>${product?.description}</p>
      </div>
    </div>
  `;

  let contents = singleProduct;

  return {
    html: contents,
  };
}
