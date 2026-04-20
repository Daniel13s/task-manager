import { CreateTaskController } from "./controller.js";
import { CreateTaskRepository } from "./repository.js";
import { CreateTaskService } from "./service.js";

export function makeCreateTaskController() {
    const repository = new CreateTaskRepository()
    const service = new CreateTaskService(repository)
    const controller = new CreateTaskController(service)

    return controller
}