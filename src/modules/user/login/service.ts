import jwt from "jsonwebtoken"
import "dotenv/config"

export class LoginUserService {
    constructor(public repository: any) {}
    async execute(email: string, password: string) {
        const validation = await this.repository.login(email, password)

        const token = jwt.sign({
            email: validation.email,
            password: validation.password
        }, process.env.SECRET_KEY!, {
            expiresIn: "15m"
        })

        return token
    }
}