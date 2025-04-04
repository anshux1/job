import React from "react"
import { footerLinks } from "@/constants/navLinks"
import { BriefcaseBusiness, Github } from "lucide-react"

export const Footer = () => {
  return (
    <div className="border-grid border-t">
      <div className="container-wrapper justify-between gap-5 space-y-5 px-3 py-10 sm:flex sm:space-y-0">
        <div>
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="text-primary" size={30} />
            <p className="text-2xl font-semibold">Jobpilot</p>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            Call Now: <span>+(000) 000-0000</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-16">
          <FooterLink title="Quick Links" links={footerLinks.quickLinks} />
          <FooterLink title="Candidates" links={footerLinks.candidates} />
          <FooterLink title="Employers" links={footerLinks.employers} />
          <FooterLink title="Support" links={footerLinks.support} />
        </div>
      </div>
      <div className="border-grid border-t">
        <div className="container-wrapper flex items-center justify-between py-5">
          <p className="text-muted-foreground text-xs">
            @ 2024 Jobpilot - Job Portal
          </p>
          <Github className="text-muted-foreground size-5" />
        </div>
      </div>
    </div>
  )
}

const FooterLink = ({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) => {
  return (
    <div>
      <h3 className="mb-1.5 text-lg font-medium">{title}</h3>
      {links.map((item, index) => (
        <div key={index} className="text-muted-foreground mb-1 text-sm">
          {item.label}
        </div>
      ))}
    </div>
  )
}
