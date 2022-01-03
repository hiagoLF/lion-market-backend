import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import AppError from "../../errors/AppError";
import { UserRepository } from "../../repositorires/UserRepository";
import { encrypt } from "../../util/encrypt";

export async function registerUser(
  login: string,
  password: string
): Promise<User | undefined> {
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findByLogin(login);
  if (!!user) throw new AppError("User already exists");
  const encryptedPassword = await encrypt(password)
  const newUser = await userRepository.save({login, password: encryptedPassword})
  if(!newUser) throw new AppError('Não foi possível criar o usuário')
  return newUser
}
