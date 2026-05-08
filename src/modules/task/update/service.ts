import { redis } from "../list/service.js";

export class UpdateTaskService {
  constructor(public repository: any) {}
  async execute(id: number, data: any, userId: string) {
    const keys = await redis.keys(`tasks:${userId}:*`);
    if (keys.length > 0) {
      await redis.del(keys);
    }
    return await this.repository.update(id, data, userId);
  }
}
