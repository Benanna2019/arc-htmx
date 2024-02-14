import { formatMoney } from "../lib/formatMoney.mjs";
import { html } from "./html-helper.mjs";
import { ownerOfProduct } from "../lib/models/product-model.mjs";

export default function productCard(product, session) {
  const {
    key: product_key,
    name: product_name,
    price: product_price,
    photo,
    owner,
    description: product_description,
  } = product;
  const user_email = session?.person?.email;

  const user_can_edit = ownerOfProduct(owner, user_email)
    ? html`<a href=${product_key}>Edit</a>`
    : "";

  return html` <div class="item__styles">
    <img src="${photo.image}" alt="${product_name}" />
    <h3 class="product__title">
      <a href="/${product_key}" hx-boost="true">${product_name}</a>
    </h3>
    <span class="price__tag">${formatMoney(product_price)}</span>
    <p>${product_description}</p>
    <div class="buttonList">
      ${user_can_edit}
      <button
        hx-post="/cart/add"
        id="add_${product_key}_to_cart"
        name="product_id"
        hx-vals='{"product_id": "${product_key}"}'
        hx-trigger="click"
        hx-target=".red__dot"
        hx-swap="innerHTML"
      >
        Add To Cart
      </button>

      <!-- key={product.key} -->
      <!-- <DeleteProduct>Delete</DeleteProduct> -->
    </div>
  </div>`;
}
