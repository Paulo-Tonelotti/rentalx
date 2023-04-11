import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  async execute({ description, name }: IResquest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
