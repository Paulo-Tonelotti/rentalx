import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const avatar_file = null;

    const updateUserAvatarUseCase = container.resolve(UpdateAvatarUseCase);

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
