// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";
import data from "@begin/data";
import stripeConfig from "../../lib/stripeConfig.mjs";
import { createId } from "@paralleldrive/cuid2";
import { removeFromCart } from "../../lib/models/cart-model.mjs";

export const handler = arc.http.async(checkout);

async function checkout(req) {
  console.log(req);

  // Step 1 - ✅
  // check session. if no session, redirect to /login -> one day I will be able to throw up toast messages for this or maybe just do partial htmx swapping

  if (!req.session.person) {
    return {
      headers: {
        "HX-Location": "/login",
      },
    };
  }

  // Step 2
  // get the current user by the session.person.email

  const user = await data.get({
    table: "users",
    key: req.session.person.email,
  });

  // Step 3
  // get all products in the cart (cartItems)
  const cartItems = user.cart.filter((cartItem) => cartItem.product);

  // Step 4
  // calculate the total price of the cart

  const amount = cartItems.reduce((tally, cartItem) => {
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);

  // Step 5
  // create the payment intnet
  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: "USD",
      confirm: true,
      payment_method: req.body.token,
      return_url: "http://localhost:3333",
    })
    .catch((err) => {
      console.log("err", err);
      throw new Error(err.message);
    });

  // Step 6
  // create order items for each cartItem
  const orderItems = cartItems.map((cartItem) => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: { image: cartItem.product.photo.image },
    };
    return orderItem;
  });

  console.log("orderItems", orderItems);

  // Step 7
  // add the order items to the user in the database - swap out the below for ddb/begin data functions
  // This should also create the order -> I believe this is a better example of using a separate table for orders and just looking them up by user id
  const buildOrder = {
    key: createId(),
    total: charge.amount,
    charge: charge.id,
    items: orderItems,
    user: req.session.person.email,
  };
  const order = await data.set({ table: "orders", ...buildOrder });

  // Step 8
  // clear the users cart
  const cartItemIds = user.cart.map((cartItem) => cartItem.key);
  console.log("gonna create delete cartItems");
  let updatedUser;
  for (const cartItemId of cartItemIds) {
    updatedUser = await removeFromCart(user.email, cartItemId);
  }
  return {
    session: {
      ...req.session,
      person: { ...updatedUser },
    },
    headers: {
      "HX-Location": "/orders",
    },
  };
}
