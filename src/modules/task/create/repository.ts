import { prisma } from "../../../database/prisma.js";
import {randomUUID} from "crypto"

export class CreateTaskRepository {
    async create(data: any, userId: string) {
        const createTask = await prisma.task.create({
            data: {
                ...data,
                user:{ connect: {id: userId}}
            }
        })

        return createTask
    }
}