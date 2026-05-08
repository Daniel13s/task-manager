import {Request, Response} from "express"
import { querySchema, userSchema } from "./schema.js"
import { ZodError } from "zod"
import { AppError } from "../../../error/appError.js"

export class DeleteTaskController {
    constructor(public service: any) {}
    async execute(req: Request, res: Response) {
        try {
            const {id} = querySchema.parse(req.query)
            const userId = userSchema.parse(req.user)

            await this.service.execute(id, userId.id)

            return res.status(204).end()
        }catch(err) {
            if(err instanceof ZodError) {
                throw new AppError("Campos invalidos", 400)
            }

            throw err
        }
    }
}