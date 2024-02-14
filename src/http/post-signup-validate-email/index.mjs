// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";
import { validateEmail } from "../../lib/validators.mjs";
import { html } from "@architect/shared/html-helper.mjs";

export const handler = arc.http.async(validate);

async function validate(req) {
  const { message } = validateEmail(req.body.email);

  const errors = {
    email: {
      submittedEmail: req.body.email,
      message,
    },
  };

  const emailHasError = errors.email.message !== null;

  const failedValidation = html`
    <label htmlFor="email">
      Email
      <input
        type="email"
        name="email"
        id="signin__email"
        hx-post="/signup/validate/email"
        hx-target="#email__div"
        hx-swap="innerHTML"
        value="${errors.email ? errors.email.submittedEmail : ""}"
        placeholder="Your Email Address"
      />
    </label>
    <div id="email__validation__error" class="error__message">
      <p>
        <strong>Shoot!</strong>
        ${errors.email.message}.
      </p>
    </div>
  `;

  if (emailHasError) {
    return {
      html: failedValidation,
    };
  }

  const passedValidation = html`
    <label htmlFor="email">
      Email
      <input
        type="email"
        name="email"
        id="signin__email"
        hx-post="/signup/validate/email"
        hx-target="#email__div"
        hx-swap="innerHTML"
        value="${req.body.email}"
        placeholder="Your Email Address"
      />
    </label>
    <p style="color: green; font-size: 1.2rem">Looks good!</p>
  `;

  return {
    html: passedValidation,
  };
}
