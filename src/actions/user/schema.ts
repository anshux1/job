import { z } from "zod"

export const changeLocationSchema = z.object({
  city: z.string(),
})
