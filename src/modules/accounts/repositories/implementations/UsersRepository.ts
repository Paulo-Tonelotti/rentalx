import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import database from "../../../../database";
import { User } from "../../entities/User";

class UsersRespository implements IUsersRepository {
  async create({ name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
    await database.users.create({
      data: {
        name,
        email,
        driver_license,
        password
      }

    })
  }

  async findByEmail(email: string): Promise<User> {
    const user = await database.users.findFirst({
      where: {
        email
      }
    })

    return user;
  }

}

export { UsersRespository };