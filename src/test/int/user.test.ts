import { beforeAll, expect, test } from "vitest";
import request from "supertest"
import { app } from "../../app.js";
import { prisma } from "../../database/prisma.js";

beforeAll(async () => {
    await prisma.user.deleteMany()
})

test("should register user", async() => {
    const response = await request(app)
    .post("/register")
    .send({
        email: "joaosadsd@gmail.com",
        password: "eusoujoaosad"
    })

    expect(response.status).toBe(201)
})