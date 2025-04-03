import { dummyData } from "@/utils/data"

import { cn } from "@/lib/utils"
import { Footer } from "@/components/Footer"
import { HomeHeroSection } from "@/components/home/HomeHeroSection"
import { HomeNav } from "@/components/home/HomeNav"

export default function Home() {
  return (
    <div className="border-grid">
      <HomeNav />
      <HomeHeroSection />
      <div className="border-grid border-y">
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
      <Footer />
    </div>
  )
}
