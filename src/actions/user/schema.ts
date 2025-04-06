import { z } from "zod"

export const changeLocationSchema = z.object({
  city: z.string(),
})

export const userTypeSchema = z.object({
  type: z.enum(["candidate", "employer"], {
    message: "Please select a user type",
  }),
})
