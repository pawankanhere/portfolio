import React from "react"
import { twJoin } from "tailwind-merge"
import { motion } from "framer-motion"
import { slideAnimation } from "app/utils/animation"

const Separator = () => {
  return (
    <motion.div {...slideAnimation()} className={twJoin("relative", "lg:hidden")}>
      <div className="absolute w-full lg:w-80 flex h-1 -top-0.5 ml-5">
        <div
          className={`w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#3ee90e_32.29%,#2563eb91_67.19%,rgba(236,72,153,0)_100%)]`}
        />
        <div
          className={`-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#3ee90e_32.29%,#2563eb91_67.19%,rgba(236,72,153,0)_100%)]`}
        />
      </div>
      <div className="my-20 h-px w-full bg-zinc-700 bg-gradient-to-r from-green-500 via-zinc-600 to-blue-500" />
    </motion.div>
  )
}

export default Separator
