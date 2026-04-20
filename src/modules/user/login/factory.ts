import { LoginUserController } from "./controller.js";
import { LoginUserRepository } from "./repository.js";
import { LoginUserService } from "./service.js";

export function makeLoginUserController() {
    const repository = new LoginUserRepository()
    const service = new LoginUserService(repository)
    const controller = new LoginUserController(service)

    return controller
}