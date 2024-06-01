import React from "react"
import { twMerge } from "tailwind-merge"
import { Caveat } from "next/font/google"

type SectionHeadingProps = {
  children: React.ReactNode
  className?: string
}

const caveat = Caveat({ subsets: ["latin"], display: "swap" })

export const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return <h3 className={twMerge(`font-medium tracking-tight text-xl text-slate-100 ${className}`)}>{children}</h3>
}
