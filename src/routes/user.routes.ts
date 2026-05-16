import { Router } from "express";
import { makeRegisterUserController } from "../modules/user/register/factory.js";
import { makeLoginUserController } from "../modules/user/login/factory.js";
import { makeDeleteUserController } from "../modules/user/delete/factory.js";
import { middleware } from "../middleware.js";

export const userRoutes = Router()

const registerUserController = makeRegisterUserController()
const loginUserController = makeLoginUserController()
const deleteUserController = makeDeleteUserController()

userRoutes.post("/register", registerUserController.execute.bind(registerUserController))
userRoutes.post("/login", loginUserController.execute.bind(loginUserController))
userRoutes.delete("/user/:id", middleware, deleteUserController.execute.bind(deleteUserController))