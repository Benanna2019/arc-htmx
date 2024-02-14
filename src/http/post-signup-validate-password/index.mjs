// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";
import { validatePassword } from "../../lib/validators.mjs";
import { html } from "../../shared/html-helper.mjs";

export const handler = arc.http.async(validate);

async function validate(req) {
  const errors = {
    password: validatePassword(req.body.password),
  };

  const passwordHasError = errors.password.message !== "";

  const failedValidation = html`
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
    <div id="password__validation__error" class="error__message">
      <p>
        <strong>Shoot!</strong>
        ${errors.password.message}
      </p>
    </div>
  `;

  if (passwordHasError) {
    return {
      html: failedValidation,
    };
  }

  const passedValidation = html`
    <label htmlFor="password">
      Password
      <input
        type="password"
        name="password"
        id="signin__password"
        hx-post="/signup/validate/password"
        hx-target="#password__div"
        hx-swap="innerHTML"
        value="${req.body.password}"
        placeholder="Password"
      />
    </label>
    <p style="color: green; font-size: 1.2rem">Looks good!</p>
  `;

  return {
    html: passedValidation,
  };
}
