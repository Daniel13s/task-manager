import { RegisterUserController } from "./controller";
import { RegisterUserRepository } from "./repository";
import { RegisterUserService } from "./service";

export function makeRegisterUserController(){
    const repository = new RegisterUserRepository()
    const service = new RegisterUserService(repository)
    const controller = new RegisterUserController(service)

    return controller
}