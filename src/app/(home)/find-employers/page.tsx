import React from "react"
import { dummyEmployer } from "@/utils/constants"

import { EmployerCard } from "@/components/employers/EmployerCard"
import { PaginationComp } from "@/components/job/JobPaginatiion"

export default function page() {
  return (
    <div className="container-wrapper py-3">
      <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {dummyEmployer.map((item, index) => (
          <EmployerCard
            location={"Patna, India"}
            name={item.company}
            position={item.openings}
            key={index}
          />
        ))}
      </div>
      <PaginationComp currentPage={1} totalPages={2} link="jobs" />
    </div>
  )
}
