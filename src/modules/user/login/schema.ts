import z from "zod";

export const bodySchema = z.object({
    email: z.email,
    password: z.string
})