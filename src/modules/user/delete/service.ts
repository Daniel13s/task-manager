import { AppError } from "../../../error/appError.js"

export class DeleteUserService{
    constructor(public repository: any) {}
    async execute(id: string){
        const response = await this.repository.execute(id)

        if(!response) throw new AppError("ID does not exist.", 400)
        
        return response
    }
}