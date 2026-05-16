import {Redis} from "ioredis"

export const redis = new Redis({
  host: "127.0.0.1", // FORÇA IPv4 (evita o erro ::1)
  port: 6379,
  family: 4,
  lazyConnect: false,
  connectTimeout: 5000,
  reconnectOnError: (err) => {
    const targetError = "READONLY";
    if (err.message.includes(targetError)) return true;
    return false;
  }
});

// Captura erros para não derrubar o PM2
redis.on("error", (err: any) => {
  if (err.code === "ECONNREFUSED") {
    // Apenas loga, não deixa o erro subir sem tratamento
    console.error("Aguardando Redis em 127.0.0.1:6379...");
  }
});

export class ListTaskService {
    constructor(public repository: any){}
    async execute(id: string, limit: number, page: number, isCompleted:boolean, title: string) {
        const cacheKey = `tasks:${id}:p:${page}:l:${limit}`

        const cached = await redis.get(cacheKey)

        if(cached) {
            return JSON.parse(cached)
        }

        // const tasks =  await this.repository.list(id, limit, page, isCompleted, title)
        const tasks = [{id:1, title: "teste de sobrevivencia"}]

        await redis.set(cacheKey, JSON.stringify(tasks), "EX", 300);

        return tasks
    }
}