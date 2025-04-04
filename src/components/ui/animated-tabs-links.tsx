"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type Position = {
  left: number
  width: number
  opacity: number
}

type SetPositon = React.Dispatch<React.SetStateAction<Position>>

interface AnimatedLinkTabsProps {
  links: {
    label: string
    href: string
  }[]
  className?: string
}

export const AnimatedTabLinks = ({
  links,
  className,
}: AnimatedLinkTabsProps) => {
  const pathname = usePathname()
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }))
      }}
      className={cn("relative flex w-fit sm:gap-2", className)}
    >
      {links.map((tab) => (
        <Link href={tab.href} key={tab.label}>
          <LinkItem
            className={`${pathname === tab.href ? "border-primary border-b-2 pb-2" : ""} group`}
            setPosition={setPosition}
          >
            <p
              className={`${pathname === tab.href ? "text-primary font-medium" : "text-muted-foreground group-hover:text-black/80 dark:group-hover:text-white/80"}`}
            >
              {tab.label}
            </p>
          </LinkItem>
        </Link>
      ))}
      <Cursor position={position} />
    </ul>
  )
}

const LinkItem = ({
  children,
  setPosition,
  className,
}: {
  children: React.ReactNode
  setPosition: SetPositon
  className?: string
}) => {
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return
        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className={cn(
        "relative z-10 block cursor-pointer px-3.5 py-1.5 text-sm text-nowrap sm:text-base",
        className,
      )}
    >
      {children}
    </li>
  )
}

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="bg-secondary absolute z-0 h-9 rounded-sm"
    />
  )
}
