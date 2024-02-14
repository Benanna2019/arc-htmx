import { html } from "./html-helper.mjs";
import { cartItem } from "./cart-item.mjs";
import { formatMoney } from "../lib/formatMoney.mjs";
import { calcTotalPrice } from "../lib/calc-total-price.mjs";

export function cart({ person, show = false }) {
  return html`
    <div id="cart-dialog" class="cart__styles ${show ? "open__dialog" : ""}">
      <header>
        <h3 class="supreme__h3">
          ${person?.name ? person?.name + "'s" : ""} Cart
        </h3>
      </header>
      <button
        class="close__button"
        hx-post="/close-cart"
        hx-trigger="click"
        hx-target="#cart-dialog"
        hx-swap="delete"
      >
        &times;
      </button>
      <ul>
        ${person?.cart
          ?.map((item) => {
            return cartItem(item);
          })
          .join("\n") ?? ""}
      </ul>
      <footer>
        <p>${formatMoney(calcTotalPrice(person?.cart))}</p>
      </footer>
    </div>
  `;
}

// put this under the formatmoney function
{
  /* <Checkout /> */
}
