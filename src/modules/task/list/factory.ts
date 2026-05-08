import { ListTaskController } from "./controller.js";
import { ListTaskRepository } from "./repository.js";
import { ListTaskService } from "./service.js";

export function makeListTaskController() {
    const repository = new ListTaskRepository()
    const service = new ListTaskService(repository)
    const controller = new ListTaskController(service)

    return controller
}