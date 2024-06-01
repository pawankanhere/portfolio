import React from "react"
import Text from "../ui/text"
import { twJoin, twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import { slideAnimation } from "app/utils/animation"

type CompanyProps = {
  company: string
  companyDescription: string | React.ReactNode
  designation: string
  roleDescription: string | React.ReactNode
  duration: string
  className?: string
}
const Company = ({ company, companyDescription, duration, designation, roleDescription, className }: CompanyProps) => {
  return (
    <motion.div {...slideAnimation("container")} className={twMerge(`${className}`)}>
      <motion.div {...slideAnimation("item")} className="flex items-center gap-4">
        <Text size="large" className="font-semibold">
          {company}
        </Text>
        <Text className="text-slate-500 mt-0.5">{duration}</Text>
      </motion.div>

      <motion.div {...slideAnimation("item")}>
        <Text className="text-primary-500 font-semibold mt-1">{designation}</Text>
      </motion.div>

      <motion.div {...slideAnimation("item")}>
        <Text className={twJoin("mt-4", "xl:w-2/3 lg:mt-3")}>{companyDescription}</Text>
      </motion.div>

      <motion.div {...slideAnimation("item")} className={twJoin("mt-10", "lg:mt-10 xl:w-2/3")}>
        <Text className="text-zinc-50 font-bold">My Role</Text>
        <div className="mt-2">{roleDescription}</div>
      </motion.div>
    </motion.div>
  )
}

export default Company
