import arc from "@architect/functions";
import { html } from "@architect/shared/html-helper.mjs";
import { defaultSignUpForm, signInForm } from "@architect/shared/forms.mjs";
import layout from "@architect/shared/layout.mjs";

export const handler = arc.http.async(login);

// show the login page
async function login(request) {
  let loginForm = signInForm();

  let signUpSection = defaultSignUpForm({ action: "signup" });

  let contents = html`
    <div class="login__page__grid">
      <div id="login__form__container">${loginForm}</div>
      <div id="signup__form__container">${signUpSection}</div>
    </div>
  `;

  return {
    html: layout({ contents, showNav: true }),
  };
}
