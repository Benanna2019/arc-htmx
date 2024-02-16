import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import {
  getCartCount,
  buildCartItemDataObject,
  upsertCartItem,
} from "../../lib/models/cart-model.mjs";

export const handler = arc.http.async(incrementCart);

async function incrementCart(request) {
  const cartItem = buildCartItemDataObject(request);
  // let { problems, item } = await validateCartItem.create(cartItem);

  // console.log("problems", problems);
  // if (problems) {
  //   // fix return value for htmx
  //   return {
  //     session: { ...session, problems, item },
  //     json: { problems, item },
  //     location: "/sell",
  //   };
  // }

  const updatedUser = await upsertCartItem(cartItem);
  // eslint-disable-next-line no-unused-vars
  // let { problems: removedProblems, link: removed, ...newSession } = session
  console.log("updatedUser", updatedUser);

  const count = getCartCount(updatedUser.cart);
  console.log("count", count);

  return {
    session: {
      ...request.session,
      person: { ...updatedUser },
    },
    html: html`<span hx-swap-oob="innerHTML:.red__dot">${count}</span>`,
  };
}
