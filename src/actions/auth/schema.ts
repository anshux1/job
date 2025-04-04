import z from "zod"

export const signinSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
})

export const signupSchema = signinSchema.extend({
  name: z.string().min(1, { message: "Name is required" }),
})

export const AccessTokenSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  url: z.string().url({ message: "URL is required" }),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
})

export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(1, { message: "New password is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This highlights the error under the confirmPassword field
  })
