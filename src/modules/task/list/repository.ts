import { prisma } from "../../../database/prisma.js";

export class ListTaskRepository {
    async list(id: string, limit: number, page: number, isCompleted: boolean, title: string) {
        const tasks = await prisma.task.findMany({
            where: {
                userId: id,
                ...(title&& {
                    title: {
                        contains: title,
                        mode: "insensitive"
                    }
                }),
                ...(isCompleted !== undefined && {
                    isCompleted: isCompleted
                })
            },
            skip: (page - 1) * limit,
            take: limit
        })

        return tasks
    }
}