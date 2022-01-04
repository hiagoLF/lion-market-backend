import { EntityRepository, Repository } from "typeorm";
import { User } from "../typeorm/entities/User";

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

  public async findById(id: string){
    const user = this.findOne({
      where: {
        id
      }
    })
    return user
  }
}