import arc from "@architect/functions";
import data from "@begin/data";
import { ordersPage } from "@architect/shared/orders.mjs";
import layout from "@architect/shared/layout.mjs";

export const handler = arc.http.async(getOrders);

async function getOrders(request) {
  //   console.log("request", request);

  const allOrders = await data.get({ table: "orders" });
  console.log("allOrders", allOrders);
  const userOrders = allOrders.filter(
    (order) => order.user === request.session.person.email
  );

  let contents = ordersPage(userOrders);

  console.log("userOrders", userOrders);
  return {
    html: layout({
      contents,
      isLoggedIn: true,
      person: request.session.person,
    }),
  };
}
