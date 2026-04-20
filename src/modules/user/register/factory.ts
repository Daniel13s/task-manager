import { RegisterUserController } from "./controller.js";
import { RegisterUserRepository } from "./repository.js";
import { RegisterUserService } from "./service.js";

export function makeRegisterUserController(){
    const repository = new RegisterUserRepository()
    const service = new RegisterUserService(repository)
    const controller = new RegisterUserController(service)

    return controller
}