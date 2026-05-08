import { Router } from "express";
import { makeCreateTaskController } from "../modules/task/create/factory.js";
import { middleware } from "../middleware.js";
import { makeListTaskController } from "../modules/task/list/factory.js";
import { makeUpdateTaskController } from "../modules/task/update/factory.js";
import { makeDeleteTaskController } from "../modules/task/delete/factory.js";

export const taskRoutes = Router()

const createTaskController = makeCreateTaskController()
const listTaskController = makeListTaskController()
const updateTaskController = makeUpdateTaskController()
const deleteTaskController = makeDeleteTaskController()

taskRoutes.post("/task", middleware, createTaskController.execute.bind(createTaskController))
taskRoutes.get("/task", middleware, listTaskController.execute.bind(listTaskController))
taskRoutes.put("/task", middleware, updateTaskController.execute.bind(updateTaskController))
taskRoutes.delete("/task", middleware, deleteTaskController.execute.bind(deleteTaskController))