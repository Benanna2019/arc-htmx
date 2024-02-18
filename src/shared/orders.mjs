import { html } from "./html-helper.mjs";
import { formatMoney } from "../lib/formatMoney.mjs";

function countItemsInAnOrder(order) {
  return order?.items?.reduce((tally, item) => tally + item.quantity, 0);
}

export const ordersPage = (orders) => {
  const orderListItems = orders
    .map((order) => {
      return html` <li class="order__item__styles">
        <a href="/orders/${order.key}">
          <div class="order-meta">
            <p>${countItemsInAnOrder(order)} Items</p>
            <p>
              ${order?.items?.length && order?.items?.length > 1
                ? "Products"
                : "Product"}
            </p>
            <p>${formatMoney(order.total)}</p>
          </div>
          <div class="images">
            ${order?.items
              ?.map((item) => {
                return `<img
                  key=${`image-${item.id}`}
                  src=${item.photo?.image}
                  alt=${item.photo?.altText ?? item.name}
                />`;
              })
              .join("\n")}
          </div>
        </a>
      </li>`;
    })
    .join("\n");

  return html`
    <div>
      <h2>You have ${orders.length} orders!</h2>
      <ul class="order__list__styles">
        ${orderListItems}
      </ul>
    </div>
  `;
};

export const orderIdPage = (order) => {
  return html`
    <div class="order__styles">
      <p>
        <span>Order Id:</span>
        <span>${order.key}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>${order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>${formatMoney(order.total)}</span>
      </p>
      <p>
        <span>ItemCount:</span>
        <span>${order.items?.length}</span>
      </p>
      <div class="items">
        ${order.items?.map((item) => {
          return html`<div class="order-item" key="${item.id}">
            <img src="${item.photo.image}" alt="${item.photo.altText}" />
            <div class="item-details">
              <h2>${item.name}</h2>
              <p>Qty: ${item.quantity}</p>
              <p>Each: ${formatMoney(item.price)}</p>
              <p>Sub Total: ${formatMoney(item.price * item.quantity)}</p>
              <p>${item.description}</p>
            </div>
          </div>`;
        })}
      </div>
    </div>
  `;
};
