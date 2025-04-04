import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface AuthFormLayoutProps {
  title: string
  cardDescription: React.ReactNode
  children: React.ReactNode
}

export const AuthFormLayout = ({
  title,
  children,
  cardDescription,
}: AuthFormLayoutProps) => {
  return (
    <Card className="bg-card/25">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm">
          {cardDescription}{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="minw-sm pb-5 sm:min-w-md">{children}</CardContent>
    </Card>
  )
}
