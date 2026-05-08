import { beforeAll, expect, test } from "vitest";
import request from "supertest"
import { app } from "../../app.js";
import { prisma } from "../../database/prisma.js";

let token

beforeAll(async() => {
    await prisma.task.deleteMany()
    await prisma.user.deleteMany()

    await request(app)
    .post("/register")
    .send({
        email: "dandevjhknm@gmail.com",
        password: "skaskakskkaks"
    })

    const response = await request(app)
    .post("/login")
    .send({
        email: "dandevjhknm@gmail.com",
        password: "skaskakskkaks"
    })
    console.log(response.body.token)

    token = response.body.token
})

test("should create task", async() => {
    const response = await request(app)
    .post("/task")
    .set("Authorization", `Bearer ${token!}`)
    .send({
        title: "ebdasdasa",
        description: "sadjaskdjkasjdk"
    })

    console.log(response.body)

    expect(response.status).toBe(201)
})
test("showd show all tasks", async () => {
    const response = await request(app)
    .get("/task?limit=10&page=1")
    .set("Authorization", `Bearer ${token!}`)

    console.log(response.body)

    expect(response.status).toBe(200)
})

test("should update task", async() => {
    const task = await request(app)
    .post("/task")
    .set("Authorization", `Bearer ${token!}`)
    .send({
        title: "ebdasdasa",
        description: "sadjaskdjkasjdk"
    })
    console.log(task.body.task)
    const response = await request(app)
    .put(`/task?id=${task.body.task}`)
    .set("Authorization", `Bearer ${token!}`)
    .send({
        title: "ebdadsdadsfdfdg",
        description: "sadhghjgjghjk",
        isCompleted: true
    })

    console.log(response.body)

    expect(response.status).toBe(200)
})

test("should delete task", async() => {
    const task = await request(app)
    .post("/task")
    .set("Authorization", `Bearer ${token!}`)
    .send({
        title: "ebdasdasa",
        description: "sadjaskdjkasjdk"
    })
    console.log(task.body.task)
    const response = await request(app)
    .delete(`/task?id=${task.body.task}`)
    .set("Authorization", `Bearer ${token!}`)

    console.log(response.body)

    expect(response.status).toBe(204)
})