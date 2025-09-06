import {z} from 'zod'

export const signupPostRequestSchema=z.object({
    firstname: z.string(),
    lastname: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3)
})

export const loginPostRequestSchema=z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export const shortenPostRequestSchema=z.object({
    url: z.string().url(),
    code: z.string().optional()
})

export const updatePostRequestSchema=z.object({
    oldCode: z.string(),
    newCode:z.string().optional()
})