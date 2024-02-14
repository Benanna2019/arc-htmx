import arc from "@architect/functions";

export const handler = arc.http.async(logout);

// logout clears the session and redirects home
async function logout() {
  return {
    session: {},
    location: "/",
  };
}
