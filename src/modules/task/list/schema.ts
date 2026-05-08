import z from "zod";

export const querySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(50),
    title: z.string().optional(),
    isCompleted: z.coerce.boolean().optional()
})
export const userSchema = z.object({
    id: z.string()
})