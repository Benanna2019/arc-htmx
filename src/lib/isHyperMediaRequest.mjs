export async function isHyperMediaRequest(request) {
  return request.headers["hx-request"] === "true";
}
