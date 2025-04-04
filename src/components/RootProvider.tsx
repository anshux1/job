"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "sonner"

import { EdgeStoreProvider } from "@/lib/services/edgestore"

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableColorScheme
        enableSystem
        disableTransitionOnChange
      >
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <Toaster richColors position="top-center" />
      </ThemeProvider>
    </>
  )
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
