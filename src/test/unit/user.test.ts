import {test, expect, beforeAll} from "vitest"
import { RegisterUserService } from "../../modules/user/register/service.js"
import { RegisterUserRepository } from "../../modules/user/register/repository.js"
import { LoginUserRepository } from "../../modules/user/login/repository.js"
import { LoginUserService } from "../../modules/user/login/service.js"
import { makeServiceTest } from "./in-memory/factory.js"

test("Should register user", async () => {
    const {userRegisterService} = makeServiceTest()

    const response = await userRegisterService.execute("dan@dev.com", "kasjidjaisdijsa")

    expect(response).toBeTruthy()
})

test("should logged user", async () => {
    const {userLoginService, userRegisterService} = makeServiceTest()

    await userRegisterService.execute("dan@dev.com", "kasjidjaisdijsa")

    const response = await userLoginService.execute("dan@dev.com", "kasjidjaisdijsa")

    console.log(response)

    expect(response).toBeTruthy()
})