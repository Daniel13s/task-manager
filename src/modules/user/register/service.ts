import { AppError } from "../../../error/appError.js";
import bcrypt from "bcrypt"

export class RegisterUserService {
    constructor(public repository: any){}
    async execute(email: string, password: string) {
        console.log("Chegou no service")
        const validation = await this.repository.findUserEmail(email)
        console.log(validation)
        if(validation) throw new AppError("User already exist", 409)

        console.log("validou")

        const hash = await bcrypt.hash(password, 10)

        const user = {
            email,
            password: hash
        }
            
        return await this.repository.register(user)
    }
}