import { Request, Response } from "express";
import { paramSchema } from "./schema.js";
import { AppError } from "../../../error/appError.js";

export class DeleteUserController {
    constructor(public service: any) {}
    async execute(req: Request, res: Response){
        try{const {id} = paramSchema.parse(req.params)
        console.log(id)

        await this.service.execute(id)

        return res.status(200).json({message: 'User deleted successfully.'})
        }catch(err) {
            return new AppError("Internal server error", 500)
        }
    }
}