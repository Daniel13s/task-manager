import { expect, test } from "vitest";
import { CreateTaskService } from "../../modules/task/create/service.js";
import { CreateTaskRepository } from "../../modules/task/create/repository.js";
import { makeServiceTest } from "./in-memory/factory.js";

test("should create task", async () => {
    const {taskCreateService} = makeServiceTest()

    const response = await taskCreateService.execute({title: "ebaaaaaaa", description: "fodaaaaaaa"}, "user1")

    expect(response).toBeTruthy()
})
test("should update task", async () => {
    const {taskUpdateService, taskCreateService} = makeServiceTest()

    const task = await taskCreateService.execute({title: "ebaaaaaaa", description: "fodaaaaaaa"}, "user2")

    const response = await taskUpdateService.execute(task, {title: "muito foda", description: "ebaaaaa", isCompleted: true}, "user2")

    expect(response).toBeTruthy()
})
test("should delete task", async () => {
    const {taskCreateService, taskDeleteService} = makeServiceTest()

    const task = await taskCreateService.execute({title: "akskajdksajfk", description: "asjdfhsjfydsgyf"}, "user3")

    const response = await taskDeleteService.execute(task, "user3")

    expect(response).toBeTruthy()
})