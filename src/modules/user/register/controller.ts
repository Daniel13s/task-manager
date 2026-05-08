import { Request, Response } from "express"
import { bodySchema } from "./schema.js"
import { AppError } from "../../../error/appError.js"

export class RegisterUserController {
    constructor(public service: any){}
    async execute(req: Request, res: Response) {
        try{
            const {email, password} = bodySchema.parse(req.body)

            await this.service.execute(email, password)

            return res.status(201).json({message: "user registed"})
        }catch(err){
            new AppError("Internal server error", 500)
        }
    }
}