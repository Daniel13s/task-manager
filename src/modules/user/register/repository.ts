import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../database/prisma";
import { IUser } from "../../../interfaces/user.interface";
import {randomUUID} from "crypto"

export class RegisterUserRepository {
    async register(user:any) {
        const id = randomUUID()

        const registerUser = await prisma.user.create({
            data: {id, ...user}
        })
        return registerUser
    }
    async findUserEmail(email: string) {
        const emailUser = await prisma.user.findUnique({
            where: {email}
        })

        return emailUser
    }
}