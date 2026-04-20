import {Request, Response} from "express"
import { bodySchema, userSchema } from "./schemas.js"
import { AppError } from "../../../error/appError.js"

export class CreateTaskController {
    constructor(public service: any) {}
    async execute(req: Request, res:Response) {
        try {
            const {title, description} = bodySchema.parse(req.body)
            const {userId} = userSchema.parse(req.user)
            
            const task = {
                title,
                description,
                userId
            }

            const response = await this.service.execute(task, userId)

            res.status(201).json({message: "Task created!"})
        } catch(err) {
            return new AppError("Internal server error", 500)
        }
    }
}