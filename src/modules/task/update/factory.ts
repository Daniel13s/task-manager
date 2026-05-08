import { UpdateTaskController } from "./controller.js";
import { UpdateTaskRepository } from "./repository.js";
import { UpdateTaskService } from "./service.js";

export function makeUpdateTaskController() {
    const repository = new UpdateTaskRepository()
    const service = new UpdateTaskService(repository)
    const controller = new UpdateTaskController(service)

    return controller
}