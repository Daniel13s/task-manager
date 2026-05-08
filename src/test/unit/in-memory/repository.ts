import {randomUUID} from "crypto"

export class InMemoryRepository {
    #task = new Map()
    create(data:any) {
        const id = Math.random()*10
        const task = {
            id,
            ...data
        }
        const response = this.#task.set(id, task)
        

        return Array.from(response)[0]![0]
    }
    update(id: any, data: any) {
        const response = this.#task.get(id)

        console.log(response)

        response.title = data.title
        response.description = data.description
        response.isCompleted = data.isCompleted

        return response
    }
    delete(id: any) {
        const response = this.#task.delete(id)
        return response
    }
}

export class InMemoryUserRepository {
    #user = new Map()
    register(data:any) {
        const id = randomUUID()

        const user = {
            id,
            ...data
        }

        const response = this.#user.set(id, user)

        return response
    }
    findUserEmail(email: string){
        const response = this.#user.get(email)

        return response
    }
    login(email:string, password:string) {
        const user = Array.from(this.#user.values())
        const validation = user.find(e => e.email === email)

        if(validation !== password) return false

        return validation
    }
}