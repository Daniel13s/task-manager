import { prisma } from "../../../database/prisma.js";

export class CreateTaskRepository {
    async create(data: any) {
        const createTask = await prisma.task.create({
            data: data
        })

        return createTask
    }
}