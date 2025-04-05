import { z } from "zod"

export const createCompanyInfoSchema = z.object({
  logo: z.string(),
  banner: z.string(),
  companyName: z.string().min(1, { message: "Company name is required" }),
  about: z.string().min(1, { message: "About is required" }),
  teamSize: z
    .number()
    .nonnegative({ message: "Team size must be a positive number" }),
  yearOfEstablish: z.date({ message: "Year of establishment is required" }),
  companyWebsite: z.string().url({ message: "Invalid URL" }),
  companyVision: z.string().min(1, { message: "Company vision is required" }),
  companyEmail: z.string().email({ message: "Invalid email address" }),
})

export const conpanyFoundingSchema = z.object({})
