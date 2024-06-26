import { z } from 'zod'

export const AuthUserSchema = z.object({
  id:z.string(),
  name:z.string(),
  email:z.string().email(),
})

export type AuthUserType = z.infer<typeof AuthUserSchema>