import { Router } from "express";
import { makeRegisterUserController } from "../modules/user/register/factory";

export const userRoutes = Router()

const registerUserController = makeRegisterUserController()

userRoutes.post("/register", registerUserController.execute.bind(registerUserController))