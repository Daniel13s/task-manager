import { prisma } from "../../../database/prisma.js";

export class DeleteTaskRepository {
    async delete(id: any, userId: string) {
        const response = await prisma.task.delete({
            where: {
                id,
                userId
            }
        })

        return response
    }
}