import { AuthSelectUserTypeForm } from "@/components/auth/AuthSelectUserTypeForm"

export default function Component() {
  return (
    <div>
      <div className="my-10 text-center">
        <h1 className="dark:text-secondary-foreground mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to JobPilot
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Let&apos;s get you started with your journey. Tell us who you are and
          we&apos;ll personalize your experience.
        </p>
      </div>
      <AuthSelectUserTypeForm />
    </div>
  )
}
