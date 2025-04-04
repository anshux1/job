import Link from "next/link"

import { Auth0Form } from "@/components/auth/Auth0Form"
import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { AuthSignInForm } from "@/components/auth/AuthSignInForm"

export default function page() {
  return (
    <AuthFormLayout
      title="Sign In"
      cardDescription={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-primary font-medium underline-offset-2 hover:underline"
          >
            Create Account
          </Link>
        </>
      }
    >
      <AuthSignInForm />
      <div className="after:border-border relative my-3 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
        <span className="text-muted-foreground bg-card relative z-10 px-2">
          Or continue with
        </span>
      </div>
      <Auth0Form type="Signin" />
    </AuthFormLayout>
  )
}
