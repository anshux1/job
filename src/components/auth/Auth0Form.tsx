"use client"

import Image from "next/image"
import { toast } from "sonner"

import { authClient } from "@/lib/auth.config"
import { Button } from "@/components/ui/button"

export interface Auth0FormProps {
  type: "Signin" | "Signup"
}

export const Auth0Form = ({ type }: Auth0FormProps) => {
  const handleAuth = async (provider: "google" | "github" | "twitter") => {
    await authClient.signIn.social(
      {
        provider,
        callbackURL: "/overview",
      },
      {
        onSuccess: () => {
          toast.success("Sign up successfully")
        },
        onError: (error) => {
          console.log(error)
          toast.error(error.error.message)
        },
      },
    )
  }

  return (
    <div className="grid gap-6">
      <div className="flex gap-4">
        <Button
          size="lg"
          type="submit"
          variant="outline"
          className="w-full"
          onClick={() => handleAuth("google")}
        >
          <Image
            src="/social/google.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
          {type === "Signin" ? "Sign In " : "Continue "}
          with Google
        </Button>
        <Button
          size="lg"
          type="submit"
          variant="outline"
          className="w-full"
          onClick={() => handleAuth("twitter")}
        >
          <Image
            src="/social/twitter.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
          {type === "Signin" ? "Sign In " : "Continue "} with X
        </Button>
      </div>
    </div>
  )
}
