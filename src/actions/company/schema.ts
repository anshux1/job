import { z } from "zod"

export const createCompanyInfoSchema = z.object({
  logo: z.string(),
  banner: z.string(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  about: z.string().min(1, { message: "About is required" }),
})
