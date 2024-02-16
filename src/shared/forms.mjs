import { html } from "./html-helper.mjs";

export function defaultSignUpForm({ action }) {
  const h2Text =
    action === "login" ? "Log In to Your Account" : "Sign Up For an Account";
  const buttonText = action === "login" ? "Sign In!" : "Sign Up!";

  return html`
    <form
      class="login__form__styles"
      hx-post="/${action}"
      hx-target="#${action}__form__container"
      hx-swap="innerHTML"
    >
      <h2>${h2Text}</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autocomplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="password"
          />
        </label>
        <button type="submit">${buttonText}</button>
      </fieldset>
    </form>
  `;
}

export function signUpErrorResponseForm({ errors }) {
  const emailErrorMessage = errors.email.message
    ? html` <div id="email__validation__error" class="error__message">
        <p>
          <strong>Shoot!</strong>
          ${errors.email.message}.
        </p>
      </div>`
    : "";

  const passwordErrorMessage = errors.password.message
    ? html` <div id="password__validation__error" class="error__message">
        <p>
          <strong>Shoot!</strong>
          ${errors.password.message}
        </p>
      </div>`
    : "";

  return html`
    <form
      class="login__form__styles"
      hx-post="/signup"
      hx-target="#signup__form__container"
      hx-swap="innerHTML"
    >
      <h2>Sign Up For an Account</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value="${errors.email ? errors.email.submittedEmail : ""}"
            placeholder="Your Email Address"
            autocomplete="email"
          />
        </label>
        ${emailErrorMessage}
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="password"
          />
        </label>
        ${passwordErrorMessage}
        <button type="submit">Sign In!</button>
      </fieldset>
    </form>
  `;
}

export function successfullySignedUp({ person }) {
  return html`
    <form class="login__form__styles" hx-post="/signup">
      <h2>Successfully Signed Up</h2>
      <fieldset>
        <p id="sign__up__success">
          Signed up with ${person.email} - Please Go Head and Sign in!
        </p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autocomplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="password"
          />
        </label>
        <button disabled type="submit">Sign In!</button>
      </fieldset>
    </form>
  `;
}

export function signInForm() {
  return html`
    <form
      action="/login"
      method="post"
      hx-boost="true"
      class="login__form__styles"
    >
      <h2>Log In to Your Account</h2>
      <fieldset>
        <div id="email__div">
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="signin__email"
              hx-post="/signup/validate/email"
              hx-target="#email__div"
              hx-swap="innerHTML"
              placeholder="Your Email Address"
            />
          </label>
        </div>
        <div id="password__div">
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="signin__password"
              hx-post="/signup/validate/password"
              hx-target="#password__div"
              hx-swap="innerHTML"
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit">Sign In!</button>
      </fieldset>
    </form>
  `;
}

//  onchange="${onFileSelected()}"

export const pleaseSignIn = html` <a href="/login" hx-boost="true">
  SignIn
</a>`;

const imageUpload = html`
  <div id="imageUploadForm" class="upload__product__image__form">
    <label for="productImage"> Upload Image </label>
    <input
      hidden
      id="productImage"
      type="file"
      name="productImage"
      hx-encoding="multipart/form-data"
      hx-post="/create/product/image"
      hx-target="#imageUploadForm"
      hx-swap="outerHTML transition:true"
    />
  </div>
`;

export const createProductForm = html`
  <form
    class="create__product__form"
    hx-post="/create/product"
    hx-swap="innerHTML"
  >
    <div id="imageUploadForm" class="upload__product__image__form">
      <label for="productImage"> Upload Image </label>
      <input
        hidden
        id="productImage"
        type="file"
        name="productImage"
        hx-encoding="multipart/form-data"
        hx-post="/create/product/image"
        hx-target="#imageUploadForm"
        hx-swap="outerHTML transition:true"
      />
    </div>
    <fieldset>
      <label for="productName">
        Name:
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          required
        />
      </label>
      <label for="price">
        Price:
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          required
        />
      </label>
      <label for="description">
        Description:
        <textarea
          type="text"
          name="description"
          placeholder="Product Description"
        ></textarea>
      </label>
      <button type="submit">+ Add Product</button>
    </fieldset>
  </form>
`;
// <img alt="product photo" src={imageUrl} />
