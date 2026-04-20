import { CreateTaskController } from "./controller";
import { CreateTaskRepository } from "./repository";
import { CreateTaskService } from "./service";

export function makeCreateTaskController() {
    const repository = new CreateTaskRepository()
    const service = new CreateTaskService(repository)
    const controller = new CreateTaskController(service)

    return controller
}