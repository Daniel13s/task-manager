import z from "zod";

export const querySchema = z.object({
    id: z.coerce.number()
})

export const userSchema = z.object({
    id: z.string()
})

