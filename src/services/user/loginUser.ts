import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { UserRepository } from "../../repositorires/UserRepository";
import { generateJWT } from "../../util/generateToken";

export async function loginUser(
  login: string,
  password: string
): Promise<string | undefined> {
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findByLogin(login);
  if (!user) throw new AppError("User does not exists");
  const token = generateJWT(user.id);
  return token;
}
