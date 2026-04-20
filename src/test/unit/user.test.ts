import {test, expect} from "vitest"
import { RegisterUserService } from "../../modules/user/register/service"
import { RegisterUserRepository } from "../../modules/user/register/repository"
import { LoginUserRepository } from "../../modules/user/login/repository"
import { LoginUserService } from "../../modules/user/login/service"

test("Should register user", async () => {
    const repository = new RegisterUserRepository()
    const service = new RegisterUserService(repository)

    const user = {
        email: "dan@dev.com",
        password: "kasjidjaisdijsa"
    }

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