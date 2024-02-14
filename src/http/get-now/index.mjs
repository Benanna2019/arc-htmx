// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";

export const handler = arc.http.async(now);

async function now(req) {
  return {
    session: { ...req.session },
    html: `${new Date().toLocaleString()}`,
  };
}
