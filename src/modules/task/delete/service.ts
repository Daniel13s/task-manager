import { redis } from "../list/service.js";

export class DeleteTaskService {
  constructor(public repository: any) {}
  async execute(id: any, userId: string) {
    const keys = await redis.keys(`tasks:${userId}:*`);
    if (keys.length > 0) {
      await redis.del(keys);
    }

    return await this.repository.delete(id, userId);
  }
}
