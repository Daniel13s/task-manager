import { DeleteTaskController } from "./controller.js";
import { DeleteTaskRepository } from "./repository.js";
import { DeleteTaskService } from "./service.js";

export function makeDeleteTaskController() {
    const repository = new DeleteTaskRepository()
    const service = new DeleteTaskService(repository)
    const controller = new DeleteTaskController(service)

    return controller
}