import { prisma } from "../../../database/prisma.js";
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
        console.log("validando email")
        const emailUser = await prisma.user.findUnique({
            where: {email}
        })

        console.log(emailUser)

        return emailUser
    }
}