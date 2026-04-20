export class CreateTaskService {
    constructor(public taskRepo: any) {}
    async execute(data:any, userId: string) {
        return await this.taskRepo.create({userId, ...data})
    }
}
