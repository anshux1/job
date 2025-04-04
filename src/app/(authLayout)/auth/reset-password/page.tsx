import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { AuthResetPasswordForm } from "@/components/auth/AuthResetPasswordForm"

export default function EmailVerifiedPage() {
  return (
    <AuthFormLayout
      title="Reset Password"
      cardDescription={
        <>Almost there! Choose a strong new password to secure your account.</>
      }
    >
      <AuthResetPasswordForm />
    </AuthFormLayout>
  )
}
