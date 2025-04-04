"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { InputField } from "@/components/FormFields"
import { forgotPasswordSchema } from "@/actions/auth/schema"
import { InputTypeForgotPassword } from "@/actions/auth/types"

export const AuthForgotPasswordForm = () => {
  const form = useForm<InputTypeForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  })
  const onSubmit = async (values: InputTypeForgotPassword) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <InputField
          className="bg-transparent dark:bg-transparent"
          control={form.control}
          name="email"
          label="Email"
          placeholder="example@gmail.com"
        />
        <Button size="lg" type="submit" className="mt-1.5 w-full">
          Reset Password
        </Button>
      </form>
    </Form>
  )
}
