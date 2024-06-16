import { z } from 'zod'

export const AuthSchema = z.object({
  id:z.string(),
  name:z.string(),
})

export type AuthType = z.infer<typeof AuthSchema>