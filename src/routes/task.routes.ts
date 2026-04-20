import { Router } from "express";
import { makeCreateTaskController } from "../modules/task/create/factory";

export const taskRoutes = Router()

const createTaskController = makeCreateTaskController()

taskRoutes.post("/task", createTaskController.execute.bind(createTaskController))