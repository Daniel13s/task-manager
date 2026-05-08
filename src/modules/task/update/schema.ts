import z from "zod";

export const bodySchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    isCompleted: z.coerce.boolean().optional()
})

export const querySchema = z.object({
    id: z.coerce.number()
})

export const userSchema = z.object({
    id: z.string()
})