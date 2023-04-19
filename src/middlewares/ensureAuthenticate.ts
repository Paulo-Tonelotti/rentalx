import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRespository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}


export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
 
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new Error("Token missing from request");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "96c920d74568b22fe1c158438ffb1c29") as IPayload;
    
    const usersRepository = new UsersRespository();
    const user = usersRepository.findById(user_id);

    if(!user) {
      throw new Error("User does not exist");
    }

    next();
  } catch (error) {
    throw new Error("Invalid token!");
  }
}