import { html } from "./html-helper.mjs";

export const checkoutForm = html`
  <script>
    var stripe = Stripe(
      "pk_test_51IVMuwCvGFED1fF2B8kb2I27V7Vx8lkFxSAi4yI4nq8dNGVKZuLiO4jvqRarNyUzcOuOzxmDYd7lDmc3o8ZQdAze00aB3z7e5G"
    );

    console.log("stripe", stripe);
    var elements = stripe.elements();
    const card = elements.create("card");
    const form = document.querySelector(".checkout__form");
    console.log("card", card);
    card.mount("#card-element");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("event", event);
      htmx.addClass(htmx.find(".submitting__checkout"), "htmx-indicator");
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      console.log("paymentMethod", paymentMethod);
      console.log("error", error);
      htmx.ajax("POST", "/checkout", { values: { token: paymentMethod.id } });
    });
  </script>
  <form class="checkout__form">
    <div id="card-element"></div>
    <button>Check Out Now</button>
    <div class="submitting__container" style="background: none;">
      <img
        src="_static/css/block-loading.svg"
        class="submitting__checkout"
        style="width: 24px; height: 24px; background: none;"
        alt="loading"
      />
    </div>
  </form>
`;

// async function handleSubmit(e: any) {
//     // 1. Stop the form from submitting and turn the loader one
//     e.preventDefault();
//     setLoading(true);
//     console.log("We gotta do some work..");
//     // 2. Start the page transition - Find another way to have page transitions without using nProgress

//     // 3. Create the payment method via stripe (Token comes back here if successful)
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements?.getElement(CardElement) as any,
//     });
//     console.log(paymentMethod);
//     // 4. Handle any errors from stripe
//     if (error) {
//       setError(error);
//       //   find a replacement to stop page load without using nProgress
//       return; // stops the checkout from happening
//     }
//     // 5. Send the token from step 3 to our keystone server, via a custom mutation!
//     const order = await checkout({
//       variables: {
//         token: paymentMethod.id,
//       },
//     });
//     console.log(`Finished with the order!!`);
//     console.log(order);
//     // 6. Change the page to view the order
//     navigate(`/orders/${order.data.checkout.id}`);
//     // 7. Close the cart
//     closeCart();

//     // 8. turn the loader off
//     setLoading(false);
//     // replace nProgress.done() with something else
//   }
