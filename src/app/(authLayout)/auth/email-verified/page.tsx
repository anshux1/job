import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { AuthFormLayout } from "@/components/auth/AuthFormLayout"

export default async function EmailVerifiedPage() {
  return (
    <AuthFormLayout
      title="Email Verified"
      cardDescription={
        <p className="mb-4 text-gray-600">
          Your email has been successfully verified.
        </p>
      }
    >
      <Link
        href="/"
        className={buttonVariants({
          variant: "default",
        })}
      >
        Go to home
      </Link>
    </AuthFormLayout>
  )
}
