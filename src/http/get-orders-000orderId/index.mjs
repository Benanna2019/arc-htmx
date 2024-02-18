import arc from "@architect/functions";
import layout from "@architect/shared/layout.mjs";
import { orderIdPage } from "@architect/shared/orders.mjs";
import data from "@begin/data";

export const handler = arc.http.async(getOrderById);

async function getOrderById(request) {
  const { orderId } = request.params;
  console.log("orderId", orderId);

  const order = await data.get({ table: "orders", key: orderId });

  let contents = orderIdPage(order);

  return {
    html: layout({
      contents,
      isLoggedIn: true,
      person: request.session.person,
    }),
  };
}
