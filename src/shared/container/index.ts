import "reflect-metadata";
import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationsRespository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository> (
  "CategoriesRepository", CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)