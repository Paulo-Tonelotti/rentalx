import { Router  } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticate);
specificationRoutes.post("/", createSpecificationController.handle);


export { specificationRoutes }