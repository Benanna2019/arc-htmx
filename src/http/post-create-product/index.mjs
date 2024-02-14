import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { createId } from "@paralleldrive/cuid2";

export const handler = arc.http.async(createProduct);

async function createProduct(req) {
  const session = req.session;

  // I need to create a model for creating a product to validate the incoming request
  // I need an additional created at attribute
  // set the user id as the session.person.email since the email is the ddb key
  // need to add a key with createId()
  // set status to available. Need to figure out how I would handle the status of the product.
  // Probably need to make the 'edit product' page where a user who owns the product can change the status.

  // if there is no product image on the req body, return an error message.
  // maybe I need to have a default input for the image that is required so if the user doesn't upload an image, the form will not submit.

  // swap out 'main', so if there is an error we can send back the full form.

  let processedImageHTML = html`
    <div id="processedImageDiv">
      <img
        src="/images/${filename}.jpeg"
        alt="product picture"
        class="uploadedImage"
      />
      <input
        type="hidden"
        name="productImage"
        id="uploadedProductImageUrl"
        value="${filename}"
      />
    </div>
  `;

  return {
    // session: { ...newSession },
    html: processedImageHTML,
  };
}
