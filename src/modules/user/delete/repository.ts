import { UserWhereUniqueInput } from "../../../../generated/prisma/models.js";
import { prisma } from "../../../database/prisma.js";

export class DeleteUserRepository {
    async execute(id: string){
        const response = await prisma.task.deleteMany({
            where: {
                userId: id
            }
        })

        return response
    }
}