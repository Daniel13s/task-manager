import {test, expect, beforeAll} from "vitest"
import { RegisterUserService } from "../../modules/user/register/service.js"
import { RegisterUserRepository } from "../../modules/user/register/repository.js"
import { LoginUserRepository } from "../../modules/user/login/repository.js"
import { LoginUserService } from "../../modules/user/login/service.js"
import { prisma } from "../../database/prisma.js"

beforeAll(async () => {
    await prisma.user.deleteMany()
})

test("Should register user", async () => {
    const repository = new RegisterUserRepository()
    const service = new RegisterUserService(repository)

    const response = await service.execute("dan@dev.com", "kasjidjaisdijsa")

    expect(response).toBeTruthy()
})

test("should logged user", async () => {
    const repository = new LoginUserRepository()
    const service = new LoginUserService(repository)

    const response = await service.execute("dan@dev.com", "kasjidjaisdijsa")

    console.log(response)

    expect(response).toBeTruthy()
})