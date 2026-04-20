import { prisma } from "../../../database/prisma.js";
import bcrypt from "bcrypt"
import { AppError } from "../../../error/appError.js";

export class LoginUserRepository {
    async login(email: string, password: string) {
        const validation = await prisma.user.findUnique({
            where: {email}
        })

        const hashValid = bcrypt.compare(password, validation?.password!)
        if(!hashValid) throw new AppError("Email or password incorrect", 401)

        return validation
    }
}