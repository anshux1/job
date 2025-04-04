import { dummyData } from "@/constants/dummyData"

import { cn } from "@/lib/utils"
import { HomeHeroSection } from "@/components/home/HomeHeroSection"

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <div className="border-grid border-t">
        <div className="container-wrapper space-y-4 py-6">
          <h2 className="text-3xl font-medium sm:text-4xl lg:text-3xl">
            Most Popular Vacancies
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {dummyData.popularVacancies.map((item, index) => (
              <div key={index}>
                <p
                  className={cn(
                    "text-lg font-medium",
                    index === 7 && "text-primary underline",
                  )}
                >
                  {item.title}
                </p>
                <span className="text-muted-foreground text-xs">
                  {item.numbers} Open Positions
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
