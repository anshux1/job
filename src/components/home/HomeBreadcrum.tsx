"use client"

import { usePathname } from "next/navigation"
import { navLinks } from "@/constants/navLinks"
import { HomeIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function HomeBreadcrum() {
  const pathname = usePathname()
  const breadcrumData = navLinks.home.find((item) => item.href === pathname)
  return (
    <>
      <div className="font-medium">{breadcrumData?.label}</div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="flex items-center gap-2" href="/">
              <HomeIcon size={16} aria-hidden="true" />
              <span className="">Home</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={breadcrumData?.href}>
              {breadcrumData?.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}
