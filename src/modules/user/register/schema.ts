import z from "zod";

export const bodySchema = z.object({
    email: z.email().min(17),
    password: z.string().min(8)
})