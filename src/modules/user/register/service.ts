import { AppError } from "../../../error/appError";
import bcrypt from "bcrypt"

export class RegisterUserService {
    constructor(public repository: any){}
    async execute(email: string, password: string) {
        const validation = await this.repository.findUserEmail(email)
        if(validation) throw new AppError("User already exist", 409)

        const hash = await bcrypt.hash(password, 10)

        const user = {
            email,
            password: hash
        }
            
        return await this.repository.register(user)
    }
}