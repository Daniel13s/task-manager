import { Request, Response } from "express"
import { bodySchema } from "./schema.js"
import { AppError } from "../../../error/appError.js"

export class RegisterUserController {
    constructor(public service: any){}
    async execute(req: Request, res: Response) {
        try{
            console.log("deu certo")
            const {email, password} = bodySchema.parse(req.body)
            console.log(email, password)

            await this.service.execute(email, password)

            return res.status(201).json({message: "user registed"})
        }catch(err){
            console.log("deu erro")
            new AppError("Internal server error", 500)
        }
    }
}