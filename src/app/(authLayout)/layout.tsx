import { Logo } from "@/components/Logo"
import { ModeSwitcher } from "@/components/ModeSwitcher"

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="container-wrapper flex h-full flex-col items-center">
        <div className="flex w-full items-center justify-between">
          <Logo className="flex h-16 w-full py-3" />
          <ModeSwitcher />
        </div>
        {children}
      </div>
    </div>
  )
}
