import z from "zod";

export const bodySchema = z.object({
    title: z.string().min(5),
    description: z.string().min(10)
})

export const userSchema = z.object({
    userId: z.uuid()
})