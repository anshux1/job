import React from "react"
import { dummyJobs } from "@/utils/constants"
import { MapPin, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { JobCard } from "@/components/job/JobCard"
import { PaginationComp } from "@/components/job/JobPaginatiion"

export default function page() {
  return (
    <div className="container-wrapper px-3 py-3">
      <div className="flex w-full flex-col justify-between gap-0.5 rounded-md border p-2 sm:flex-row sm:gap-1">
        <div className="relative border-b sm:w-2/5 sm:border-r sm:border-b-0">
          <Input
            className="peer border-none ps-10 focus-visible:ring-0"
            placeholder="Job Title, Keyword, Company"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <Search size={20} className="text-primary" aria-hidden="true" />
          </div>
        </div>
        <div className="relative sm:w-2/5">
          <Input
            className="peer border-none ps-10 focus-visible:ring-0"
            placeholder="Location"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <MapPin size={20} className="text-primary" aria-hidden="true" />
          </div>
        </div>
        <div className="flex gap-2 self-end">
          <Button size="lg" variant="secondary" className="">
            <SlidersHorizontal />
            <span>Filter</span>
          </Button>
          <Button size="lg" className="">
            Find Job
          </Button>
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dummyJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <PaginationComp currentPage={1} totalPages={2} link="jobs" />
    </div>
  )
}
