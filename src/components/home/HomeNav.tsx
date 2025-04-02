import React from "react"
import { navLinks } from "@/utils/constants"

import { AnimatedTabLinks } from "@/components/ui/animated-tabs-links"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export const HomeNav = () => {
  return (
    <ScrollArea>
      <AnimatedTabLinks className="pt-1" links={navLinks.home} />
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  )
}
