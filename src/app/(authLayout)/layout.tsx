import { cn } from "@/lib/utils"
import { Logo } from "@/components/Logo"

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full gap-6">
      <div className="container-wrapper flex h-full flex-col items-center gap-6 p-6">
        <Logo className="flex h-16 w-full" />
        <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-4">
          <div className={cn("flex flex-col gap-6")}>{children}</div>
        </div>
      </div>
    </div>
  )
}
