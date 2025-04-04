import React from "react"
import Link from "next/link"
import { BriefcaseBusiness } from "lucide-react"

import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Link
        href="/"
        className="flex items-center gap-2 self-center text-2xl font-semibold"
      >
        <div className="text-primary flex size-8 items-center justify-center rounded-md">
          <BriefcaseBusiness className="size-8" />
        </div>
        Jiopilot
      </Link>
    </div>
  )
}
