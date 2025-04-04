import React from "react"
import Link from "next/link"
import { navLinks } from "@/constants/navLinks"
import { BriefcaseBusiness } from "lucide-react"

import { AnimatedTabLinks } from "@/components/ui/animated-tabs-links"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ModeSwitcher } from "../ModeSwitcher"
import { CityChangeForm } from "./HomeCityChangeForm"
import { HomeSearchBar } from "./HomeSearchBar"

export const HomeNav = () => {
  return (
    <div className="border-grid border-b">
      <div className="border-grid bg-secondary border-b">
        <ScrollArea className="container-wrapper">
          <div className="flex items-center justify-between gap-2">
            <AnimatedTabLinks className="pt-1" links={navLinks.home} />
            <ModeSwitcher />
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>
      <div className="container-wrapper flex h-16 items-center justify-between gap-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="text-primary" size={30} />
            <p className="text-2xl font-semibold">Jobpilot</p>
          </div>
          <div className="hidden gap-[1px] rounded-md border md:flex">
            <CityChangeForm />
            <Separator orientation="vertical" className="h-2" />
            <HomeSearchBar className="hidden md:block lg:min-w-md" />
          </div>
        </div>
        <div className="flex gap-2">
          <Link href="/auth/signin">
            <Button className="h-9 md:h-10" variant="outline">
              Sign In
            </Button>
          </Link>

          <Button className="h-9 md:h-10">Post A Job</Button>
        </div>
      </div>
    </div>
  )
}
