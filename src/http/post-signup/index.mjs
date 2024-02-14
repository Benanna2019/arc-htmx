import arc from "@architect/functions";
import { createUser } from "../../lib/models/user.mjs";
import { validateEmail, validatePassword } from "../../lib/validators.mjs";
import {
  signUpErrorResponseForm,
  successfullySignedUp,
} from "@architect/shared/forms.mjs";

export const handler = arc.http.async(signup);

async function signup(req) {
  const { message } = validateEmail(req.body.email);

  const errors = {
    email: {
      submittedEmail: req.body.email,
      message,
    },
    password: validatePassword(req.body.password),
  };

  const emailHasError = errors.email.message !== null;
  const passwordHasError = errors.password.message !== "";

  const hasErrors = emailHasError || passwordHasError;

  if (hasErrors) {
    return {
      html: signUpErrorResponseForm({ errors }),
    };
  }

  let person = await createUser(req.body.email, req.body.password);

  //Signed up with {data.createUser.email} - Please Go Head and Sign in!
  return {
    html: successfullySignedUp({ person }),
  };
}
