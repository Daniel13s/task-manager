import { Router } from "express";
import { makeRegisterUserController } from "../modules/user/register/factory.js";
import { makeLoginUserController } from "../modules/user/login/factory.js";

export const userRoutes = Router()

const registerUserController = makeRegisterUserController()
const loginUserController = makeLoginUserController()

userRoutes.post("/register", registerUserController.execute.bind(registerUserController))
userRoutes.post("/login", loginUserController.execute.bind(loginUserController))