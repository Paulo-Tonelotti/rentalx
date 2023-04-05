import { Router  } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationRoutes = Router();

const scpecificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(scpecificationsRepository);

    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});


export { specificationRoutes }