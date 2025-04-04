import React, { ReactNode } from "react"

import { Footer } from "@/components/Footer"
import { HomeNav } from "@/components/home/HomeNav"

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HomeNav />
      {children}
      <Footer />
    </>
  )
}
