import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findByLogin(login: string){
    const user = this.findOne({
      where: {
        login
      }
    })
    return user
  }
}