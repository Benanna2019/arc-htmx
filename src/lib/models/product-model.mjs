import data from "@begin/data";

export function ownerOfProduct(product_owner, email) {
  if (!product_owner || !email) return false;
  if (product_owner === null || undefined || email === null || undefined)
    return false;
  return product_owner === email;
}

export async function findProductById(product_id) {
  const product = await data.get({ table: "products", key: product_id });
  return product;
}
