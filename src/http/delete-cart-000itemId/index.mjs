import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { getCartCount, removeFromCart } from "../../lib/models/cart-model.mjs";

export const handler = arc.http.async(removeItemFromCart);

async function removeItemFromCart(request) {
  console.log("request", request);

  const person = request.session.person;

  console.log("person", person);
  const cartItemKey = request.params.itemId;
  console.log("cartItemKey", cartItemKey);

  const updatedUser = await removeFromCart(person.email, cartItemKey);

  console.log("updatedUser", updatedUser);

  // eslint-disable-next-line no-unused-vars
  // let { problems: removedProblems, link: removed, ...newSession } = session
  // console.log("updatedUser", updatedUser);

  const count = getCartCount(updatedUser.cart);
  console.log("count", count);

  return {
    session: {
      ...request.session,
      person: { ...updatedUser },
    },
    html: html` <span hx-swap-oob="innerHTML:.red__dot">${count}</span> `,
  };
}
