import React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface HomeSearchBarProps {
  className?: string
}

export const HomeSearchBar = ({ className }: HomeSearchBarProps) => {
  return (
    <div className={cn("relative", className)}>
      <Input
        className="peer rounded-md rounded-l-none border-none ps-9"
        placeholder="Job Title, Keyword, Company"
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <Search size={16} aria-hidden="true" />
      </div>
    </div>
  )
}
