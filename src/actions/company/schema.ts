import { z } from "zod"

export const createCompanySchema = z.object({
  logo: z.string(),
  banner: z.string(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  about: z.string().min(1, { message: "About is required" }),
  teamSize: z
    .number()
    .nonnegative({ message: "Team size must be a positive number" }),
  yearOfEstablish: z.date({ message: "Year of establishment is required" }),
  companyWebsite: z.string().url({ message: "Invalid URL" }),
  companyEmail: z.string().email({ message: "Invalid email address" }),
})
