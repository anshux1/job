import React from "react"

import { Footer } from "@/components/Footer"
import { HomeNav } from "@/components/home/HomeNav"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeNav />
      {children}
      <Footer />
    </>
  )
}
