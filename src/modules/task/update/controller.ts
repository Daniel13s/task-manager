import { Request, Response } from "express"
import { bodySchema, querySchema, userSchema } from "./schema.js"
import { AppError } from "../../../error/appError.js"
import { ZodError } from "zod"

export class UpdateTaskController {
    constructor(public service: any) {}
    async execute(req: Request, res: Response) {
         try{
            const {id} = querySchema.parse(req.query)
            const { title, description, isCompleted} = bodySchema.parse(req.body)
            const userId = userSchema.parse(req.user)

            const data = {
                title,
                description,
                isCompleted
            }

            const task = await this.service.execute(id, data, userId.id)

            return res.status(200).json({message: "task updated", task})
         } catch(err) {
            if(err instanceof ZodError) {
                throw new AppError("Campos invalidos", 400)
            }

            throw err
         }
    }
}