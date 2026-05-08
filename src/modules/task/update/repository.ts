import { prisma } from "../../../database/prisma.js";

export class UpdateTaskRepository {
    async update(id: any, data: any, userId: string) {
        const response = await prisma.task.update({
            where: {
                id,
                userId
            },
            data: {
                ...data
            }
        })

        return response
    }
}