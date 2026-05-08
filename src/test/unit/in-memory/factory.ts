import { CreateTaskService } from "../../../modules/task/create/service.js";
import { DeleteTaskService } from "../../../modules/task/delete/service.js";
import { UpdateTaskService } from "../../../modules/task/update/service.js";
import { LoginUserService } from "../../../modules/user/login/service.js";
import { RegisterUserService } from "../../../modules/user/register/service.js";
import { InMemoryRepository, InMemoryUserRepository } from "./repository.js";

export function makeServiceTest() {
    const taskRepository = new InMemoryRepository()
    const taskCreateService = new CreateTaskService(taskRepository)
    const taskUpdateService = new UpdateTaskService(taskRepository)
    const taskDeleteService = new DeleteTaskService(taskRepository)
    const userRepository = new InMemoryUserRepository()
    const userRegisterService = new RegisterUserService(userRepository)
    const userLoginService = new LoginUserService(userRepository)

    return {taskCreateService, userRegisterService, userLoginService, taskUpdateService, taskDeleteService}
}