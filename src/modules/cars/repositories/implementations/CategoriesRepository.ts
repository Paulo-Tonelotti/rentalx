import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

import database from "../../../../database";

class CategoriesRepository implements ICategoriesRepository {

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = await database.category.create({ data: {
      description,
      name,
    }
    });
  }

  async list(): Promise<Category[]> {
    const categories = await database.category.findMany();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await database.category.findFirst({
      where: {
        name
      }
    });
    return category;
  }
}

export { CategoriesRepository };
