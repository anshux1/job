import React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface EmployerCardProps {
  name: string
  location: string
  position: number
}

export const EmployerCard = ({
  name,
  position,
  location,
}: EmployerCardProps) => {
  return (
    <Card className="cursor-pointer transition-all duration-200 ease-in-out hover:border-black/20 hover:shadow-md">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="icons-center flex gap-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
              alt="img"
              className="object-contain"
              width={45}
              height={45}
            />
            <div>
              <p className="text-lg">{name}</p>
              <div className="text-muted-foreground flex items-center gap-1">
                <MapPin size={18} />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="secondary"
          className="bg-primary-foreground hover:bg-primary-foreground text-primary w-full"
          size="lg"
        >
          Open Positions ({position})
        </Button>
      </CardContent>
    </Card>
  )
}
