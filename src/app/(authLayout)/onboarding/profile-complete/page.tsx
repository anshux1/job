import React from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { CheckCheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default async function page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams
  console.log("Type: ", searchParams.type)
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-3">
      <div className="flex size-20 items-center justify-center rounded-full bg-blue-200/80 p-4 dark:bg-blue-800/20">
        <CheckCheckIcon className="text-primary" />
      </div>
      <h1 className="text-xl font-medium">
        🎉 Congratulations, Your profile is 100% complete!{" "}
      </h1>
      <p className="text-muted-foreground w-3/5 text-center">
        Your company profile is now 100% complete and live on the platform.
        You’re all set to start discovering amazing talent and post your first
        job!
      </p>
      <div className="space-x-2">
        {searchParams.type === "candidate" ? (
          <RedirectButton href="/candidate/dashboard" />
        ) : (
          <RedirectButton href="/employer/dashboard" />
        )}
        {searchParams.type === "employer" && (
          <Link href="/employer/post-job">
            <Button size="lg">
              Post a Job <ArrowRightIcon />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

const RedirectButton = (props: { href: string }) => {
  return (
    <Link href={props.href}>
      <Button
        size="lg"
        className="bg-blue-200/60 text-blue-700 hover:bg-blue-200/70 dark:bg-blue-800/20 dark:text-blue-500 dark:hover:bg-blue-800/30"
      >
        View Dashboard
      </Button>
    </Link>
  )
}
