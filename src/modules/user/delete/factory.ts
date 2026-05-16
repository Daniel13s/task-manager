import { DeleteUserController } from "./controller.js";
import { DeleteUserRepository } from "./repository.js";
import { DeleteUserService } from "./service.js";

export function makeDeleteUserController () {
    const repository = new DeleteUserRepository() 
    const service = new DeleteUserService(repository)
    const controller = new DeleteUserController(service)

    return controller
}