import {Request, Response} from "express"
import { bodySchema } from "./schema"
import { AppError } from "../../../error/appError"

export class LoginUserController {
    constructor(public service: any) {}
    async execute(req:Request, res:Response){
        try{
            const {email, password} = bodySchema.parse(req.body)

            const token = await this.service.execute(email, password)

            return res.status(200).json({message: "user logged", token})
        }catch(err) {
            return new AppError("Internal server error", 500)
        }
    }
}