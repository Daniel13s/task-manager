import { redis } from "../list/service.js"

export class CreateTaskService {
    constructor(public taskRepo: any) {}
    async execute(data:any, userId: string) {
        const keys = await redis.keys(`tasks:${userId}:*`)
        if(keys.length > 0) {
            await redis.del(keys)
        }
        return await this.taskRepo.create(data, userId)
    }
}
