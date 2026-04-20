import { Request, Response } from "express"
import { bodySchema } from "./schema"
import bcrypt from "bcrypt"
import { IUser } from "../../../interfaces/user.interface"
import { AppError } from "../../../error/appError"

export class RegisterUserController {
    constructor(public service: any){}
    async execute(req: Request, res: Response) {
        try{
            const {email, password} = bodySchema.parse(req.body)

            await this.service.execute(email, password)

            return res.status(201).json({message: "user registed"})
        }catch(err){
            return new AppError("Internal server error", 500)
        }
    }
}