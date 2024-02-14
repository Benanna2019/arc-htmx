import arc from "@architect/functions";
import layout from "@architect/shared/layout.mjs";
import { pleaseSignIn, createProductForm } from "@architect/shared/forms.mjs";

export const handler = arc.http.async(sellPage);

async function sellPage(request) {
  let contents;

  const person = request.session.person;
  console.log("session", request.session);

  if (!person) {
    contents = pleaseSignIn;
    return {
      html: layout({ contents, showNav: true, isLoggedIn: false }),
    };
  }

  contents = createProductForm;

  return {
    html: layout({
      contents,
      showNav: true,
      person,
      isLoggedIn: person.email,
      path: request.path,
    }),
  };
}
