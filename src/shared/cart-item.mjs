import { html } from "./html-helper.mjs";
import { formatMoney } from "../lib/formatMoney.mjs";

export function removeFromCart({ id }) {
  if (!id) {
    return null;
  }

  return html`
    <button
      class="big__button"
      hx-delete="/cart/${id}"
      hx
      title="Remove This Item from Cart"
    >
      &times;
    </button>
  `;
}

export function cartItem(item, show = false) {
  const product = item?.product;

  //   console.log("This is the cartItem", item);
  return html`
    <li id="cart_item_${product?.key}" class="cart__item__styles">
      <img
        style="width: 100;"
        src="${product?.photo?.image}"
        alt="${product?.name}"
      />
      <div>
        <h3>${product?.name}</h3>
        <p class="cart_item_${product?.key}_quantity_price">
          ${item?.quantity && formatMoney(product?.price * item?.quantity)}-
          <em>
            ${item?.quantity} &times; ${formatMoney(product?.price)} each
          </em>
        </p>
      </div>
      <button
        class="big__button"
        hx-delete="/cart/${item.key}"
        hx-target="#cart_item_${product?.key}"
        hx-swap="delete"
        title="Remove This Item from Cart"
      >
        &times;
      </button>
    </li>
  `;
}
