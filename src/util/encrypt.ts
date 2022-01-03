import { genSalt, hash } from "bcrypt";

export async function encrypt(text: string) {
  const salt = await genSalt(10)
  const hashed = await hash(text, salt)
  return hashed
}
