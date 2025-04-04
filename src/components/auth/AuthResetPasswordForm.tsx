"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { PasswordField } from "@/components/FormFields"
import { resetPasswordSchema } from "@/actions/auth/schema"
import { InputTypeResetPassword } from "@/actions/auth/types"

export const AuthResetPasswordForm = () => {
  const form = useForm<InputTypeResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  })
  const onSubmit = async (values: InputTypeResetPassword) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <PasswordField
          control={form.control}
          type="password"
          name="newPassword"
          label="New Password"
          placeholder="New Password"
        />
        <PasswordField
          control={form.control}
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <Button size="lg" type="submit" className="mt-1.5 w-full">
          Reset Password
        </Button>
      </form>
    </Form>
  )
}
