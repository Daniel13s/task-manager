import {Request, Response} from "express"
import { bodySchema } from "./schema.js"
import { AppError } from "../../../error/appError.js"

export class LoginUserController {
    constructor(public service: any) {}
    async execute(req:Request, res:Response){
        try{
            const {email, password} = bodySchema.parse(req.body)

            const {token, id} = await this.service.execute(email, password)
            console.log('login realizado')

            return res.status(200).json({message: "user logged", id, token})
        }catch(err) {
            console.log("erro")
            return new AppError("Internal server error", 500)
        }
    }
}