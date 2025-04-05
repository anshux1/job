import { Logo } from "@/components/Logo"

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <div className="container-wrapper flex h-full flex-col items-center">
        <Logo className="flex h-16 w-full py-3" />
        {children}
      </div>
    </div>
  )
}
