import React from "react"
import { createCompanyTabs } from "@/constants/company"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function page() {
  return (
    <div className="flex size-full items-center justify-center bg-red-50">
      <Tabs defaultValue="tab-1">
        <ScrollArea>
          <TabsList className="text-foreground mb-3 h-auto gap-2 rounded-none border-b bg-transparent px-0 py-0.5">
            {createCompanyTabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={`tab-${index + 1}`}
                className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative px-5 py-3 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                <tab.Icon
                  className="-ms-0.5 me-1.5 size-5 opacity-60"
                  aria-hidden="true"
                />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="tab-1"></TabsContent>
        <TabsContent value="tab-2">
          <p className="text-muted-foreground pt-1 text-center text-xs">
            Content for Tab 2
          </p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p className="text-muted-foreground pt-1 text-center text-xs">
            Content for Tab 3
          </p>
        </TabsContent>
        <TabsContent value="tab-4">
          <p className="text-muted-foreground pt-1 text-center text-xs">
            Content for Tab 4
          </p>
        </TabsContent>
        <TabsContent value="tab-5">
          <p className="text-muted-foreground pt-1 text-center text-xs">
            Content for Tab 5
          </p>
        </TabsContent>
        <TabsContent value="tab-6">
          <p className="text-muted-foreground pt-1 text-center text-xs">
            Content for Tab 6
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
