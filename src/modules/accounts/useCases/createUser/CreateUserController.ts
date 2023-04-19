import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const  { name, email, driver_license, password} = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      await createUserUseCase.execute({
        name,  
        email, 
        driver_license, 
        password
      })
  
      return response.status(201).send();
    } catch(error) {
      return response.status(500).json({ error: error.message });
    }
    
  }
}

export { CreateUserController };