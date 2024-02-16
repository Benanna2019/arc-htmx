import data from "@begin/data";
import bcrypt from "bcryptjs";
import invariant from "tiny-invariant";

export async function getUserById(email) {
  const user = await data.get({ table: "users", key: email });
  return user;
}

export async function getUserByEmail(email) {
  return getUserById(email);
}

async function getUserPasswordByEmail(email) {
  const res = await data.get({ table: "passwords", key: email });
  if (res) return { hash: res.password };
  return null;
}

export async function createUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await data.set({ table: "passwords", key: email, password: hashedPassword });
  await data.set({ table: "users", key: email, email });

  const user = await getUserByEmail(email);
  invariant(user, `User not found after being created. This should not happen`);

  return user;
}

export async function deleteUser(email) {
  await data.destroy({ table: "passwords", key: email });
  await data.destroy({ table: "users", key: email });
}

export async function verifyLogin(email, password) {
  const userPassword = await getUserPasswordByEmail(email);

  if (!userPassword) {
    return undefined;
  }

  const isValid = bcrypt.compare(password, userPassword.hash);
  if (!isValid) {
    return undefined;
  }

  return getUserByEmail(email);
}

export async function updateUserCart(userId, cart) {
  const user = await getUserById(userId);
  const updatedUser = data.set({
    table: "users",
    key: userId,
    ...user,
    cart,
  });
  return updatedUser;
}
