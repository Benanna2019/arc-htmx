// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";

export const handler = arc.http.async(now);

async function now(req) {
  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: `
      <h1>Server time: ${new Date().toLocaleTimeString()}</h1>
`,
  };
}
