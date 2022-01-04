import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { UserRepository } from "../../repositorires/UserRepository";
import { generateJWT } from "../../util/generateToken";
import { compare } from "bcrypt";

export async function loginUser(
  login: string,
  password: string
): Promise<string | undefined> {
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findByLogin(login);
  if (!user) throw new AppError("User does not exists");
  const isMatch = await compare(password, user.password);
  if(!isMatch) throw new AppError('Wrong password', 403)
  const token = generateJWT(user.id);
  return token;
}
