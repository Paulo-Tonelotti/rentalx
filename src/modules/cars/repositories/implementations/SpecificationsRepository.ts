import { Specification } from "../../entities/Specification";
import { ISpecificationRepository,ICreateSpecificationDTO } from "../ISpecificationsRespository";
import database from "../../../../database";


class SpecificationsRepository implements ISpecificationRepository {

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = await database.specification.create({
            data: {
                description,
                name
            }
        });

    }
    
    async findByName(name: string): Promise<Specification> {
        const specification = await database.specification.findFirst({
            where: {
                name
            }
        });

        return specification
    }
}


export { SpecificationsRepository }