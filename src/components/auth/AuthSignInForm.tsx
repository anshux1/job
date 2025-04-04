"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { authClient } from "@/lib/auth/auth.config"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { InputField, PasswordField } from "@/components/FormFields"
import { signinSchema } from "@/actions/auth/schema"
import { InputTypeSignIn } from "@/actions/auth/types"

export const AuthSignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<InputTypeSignIn>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (values: InputTypeSignIn) => {
    setIsSubmitting(true)
    try {
      await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
          callbackURL: "/overview",
        },
        {
          onSuccess: () => {
            toast.success("Sign up successfully")
          },
          onError: (error) => {
            toast.error(error.error.message)
          },
        },
      )
    } finally {
      setIsSubmitting(false)
    }
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
        <PasswordField
          className="bg-transparent dark:bg-transparent"
          control={form.control}
          name="password"
          label="Password"
          placeholder="Password"
          showForgotPassword
        />
        <Button
          size="lg"
          type="submit"
          className="mt-1.5 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please wait" : "Sign In"}
        </Button>
      </form>
    </Form>
  )
}
