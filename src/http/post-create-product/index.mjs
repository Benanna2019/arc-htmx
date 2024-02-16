import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import {
  buildProductData,
  createProduct,
} from "../../lib/models/product-model.mjs";

export const handler = arc.http.async(newProduct);

async function newProduct(req) {
  const session = req.session;
  const { productImage, productName, description, price } = req.body;
  console.log("req.body", req.body);

  let formWithData = html`
    <div id="imageUploadForm" class="upload__product__image__form">
      <label for="productImage"> Upload Image </label>
      <input
        hidden
        id="productImage"
        type="file"
        name="productImage"
        hx-encoding="multipart/form-data"
        hx-post="/create/product/image"
        hx-target="#imageUploadForm"
        hx-swap="outerHTML transition:true"
      />
    </div>
    ${!productImage
      ? html`<p class="error__message">
          Please upload an image for the product
        </p>`
      : ""}
    <fieldset>
      <label for="productName">
        Name:
        <input
          type="text"
          name="productName"
          value="${productName ? productName : ""}"
          placeholder="Product Name"
          required
        />
      </label>
      <label for="price">
        Price:
        <input
          type="number"
          name="price"
          value="${price ? price : ""}"
          placeholder="Product Price"
          required
        />
      </label>
      <label for="description">
        Description:
        <textarea
          type="text"
          name="description"
          value="${description ? description : ""}"
          placeholder="Product Description"
        ></textarea>
      </label>
      <button type="submit">+ Add Product</button>
    </fieldset>
  `;

  if (!productImage || !productName || !price) {
    return {
      html: formWithData,
    };
  }

  // build product data

  const builtProduct = buildProductData({
    name: productName,
    description,
    price,
    photo: productImage,
    email: session.person.email,
  });

  const product = await createProduct(builtProduct);

  return {
    headers: {
      //prettier-ignore
      "HX-Location": `/${product.key}`,
    },
  };
}
