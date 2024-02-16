import data from "@begin/data";
import { createId } from "@paralleldrive/cuid2";

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

/**
 *
 * @param {import("./types").Product} product
 */
export async function createProduct(product) {
  const newProduct = await data.set({ table: "products", ...product });
  return newProduct;
}

/**
 *
 * @param {{ name: string, description: string, price: number, photo: string, email: string }}
 */
export function buildProductData({ name, description, price, photo, email }) {
  const key = createId();
  const photoId = createId();

  return {
    key,
    name,
    description,
    photo: { id: photoId, image: `/images/${photo}.jpeg` },
    status: "AVAILABLE",
    price,
    owner: email,
    created: new Date().toISOString(),
  };
}
