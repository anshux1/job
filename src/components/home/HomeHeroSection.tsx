import React from "react"
import Image from "next/image"
import { dummyData } from "@/constants/dummyData"
import { LucideIcon, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const HomeHeroSection = () => {
  return (
    <div className="container-wrapper space-y-10 py-6">
      <div className="grid w-full items-center justify-between md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-medium sm:text-5xl lg:text-6xl">
            Find a job that suits your interest & skills.
          </h2>
          <p className="text-muted-foreground my-3 text-xs lg:my-6 lg:text-sm">
            Explore thousands of opportunities tailored to your skills and
            passion. Start your career journey today!
          </p>
          <Image
            src="/HeroSection.svg"
            width={0}
            height={0}
            className="size-[400px] scale-x-[-1] place-self-center md:hidden"
            alt="HeroBanner"
          />
          <div className="flex flex-col gap-0.5 rounded-md border bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.11)] sm:flex-row sm:gap-1">
            <div className="relative border-b sm:border-r sm:border-b-0">
              <Input
                className="peer border-none ps-9 focus-visible:ring-0"
                placeholder="Job Title, Keyword, Company"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <Search size={16} className="text-primary" aria-hidden="true" />
              </div>
            </div>
            <div className="relative">
              <Input
                className="peer border-none ps-9 focus-visible:ring-0"
                placeholder="Location"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <MapPin size={16} className="text-primary" aria-hidden="true" />
              </div>
            </div>
            <Button size="lg" className="">
              Find Job
            </Button>
          </div>
          <p className="text-muted-foreground mt-3 text-sm lg:mt-5">
            Suggestion:{" "}
            <span className="text-black/90">Designer, Programing, </span>
            <span className="text-primary font-medium">
              Digital marketing,{" "}
            </span>
            <span className="text-black/90">Video, Animation</span>
          </p>
        </div>
        <Image
          src="/HeroSection.svg"
          width={0}
          height={0}
          className="hidden size-[400px] scale-x-[-1] place-self-center md:block lg:size-[500px]"
          alt="HeroBanner"
        />
      </div>
      <div className="grid w-full grid-cols-1 justify-between gap-3 sm:grid-cols-2 md:grid-cols-4">
        {dummyData.analytics.map((item) => (
          <HomeAnalyticsCard
            Icon={item.Icon}
            number={item.number}
            title={item.title}
            key={item.number}
          />
        ))}
      </div>
    </div>
  )
}

interface HomeAnalyticsCardProps {
  Icon: LucideIcon
  number: string
  title: string
}

export const HomeAnalyticsCard = ({
  Icon,
  number,
  title,
}: HomeAnalyticsCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-md bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.11)]">
      <div className="bg-primary/10 rounded-sm p-3">
        <Icon className="text-primary stroke-1" size={35} />
      </div>
      <div>
        <p className="text-xl font-semibold">{number}</p>
        <span className="text-muted-foreground text-sm">{title}</span>
      </div>
    </div>
  )
}
