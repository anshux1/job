"use client"

import React from "react"

import { HomeBreadcrum } from "@/components/home/HomeBreadcrum"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-secondary/70 border-grid flex border-b">
        <div className="container-wrapper flex items-center justify-between gap-2 py-4">
          <HomeBreadcrum />
        </div>
      </div>
      {children}
    </>
  )
}
