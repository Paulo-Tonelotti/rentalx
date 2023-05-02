import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import database from "../../../../database";
import { User } from "../../entities/User";

class UsersRespository implements IUsersRepository {
  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    await database.users.create({
      data: {
        name,
        email,
        driver_license,
        password,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await database.users.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await database.users.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  async update(avatar: string, id: string): Promise<void> {
    await database.users.update({
      where: {
        id,
      },
      data: {
        avatar: avatar,
      },
    });
  }
}

export { UsersRespository };
