import React from "react"
import Image from "next/image"
import { Bookmark, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface JobCardProps {
  title: string
  type: string
  salary: string
  company: string
  location: string
}

export const JobCard = ({
  title,
  type,
  salary,
  company,
  location,
}: JobCardProps) => {
  return (
    <Card className="cursor-pointer transition-all duration-200 ease-in-out hover:border-black/20 hover:shadow-md">
      <CardHeader className="pb-1.5">
        <CardTitle className="text-[1.38rem] font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-600">{type}</Badge>
          <p className="text-sm opacity-90">Salary: {salary}</p>
        </div>
        <div className="mt-3.5 flex items-center justify-between">
          <div className="icons-center flex gap-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="img"
              className="object-contain"
              width={45}
              height={45}
            />
            <div>
              <p className="text-lg">{company}</p>
              <div className="text-muted-foreground flex items-center gap-1">
                <MapPin size={18} />
                <span>{location}</span>
              </div>
            </div>
          </div>
          <Bookmark className="text-muted-foreground size-7" />
        </div>
      </CardContent>
    </Card>
  )
}
