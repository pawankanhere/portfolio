import React from "react"
import { twJoin } from "tailwind-merge"
import Text from "../ui/text"
import Link from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { slideAnimation } from "app/utils/animation"

const MotionLink = motion(Link)

const Contact = () => {
  return (
    <motion.div id="contact" {...slideAnimation("container")} className="text-slate-400 pb-10">
      <motion.p
        {...slideAnimation("item")}
        className={twJoin("text-[28px] font-semibold text-slate-200 tracking-tighter")}
      >
        Lets get in touch
      </motion.p>
      <Text {...slideAnimation("item")} size="medium" className={twJoin("mt-1 text-slate-400", "lg:mt-1")}>
        Say hello, I am excited to hear from you :){" "}
      </Text>

      <Text
        {...slideAnimation("item")}
        size="small"
        className={twJoin("mt-4 text-primary-500 font-semibold", "lg:mt-8")}
      >
        Email
      </Text>

      <Text {...slideAnimation("item")} size="medium" className={twJoin("text-slate-100")}>
        kanherepawan@gmail.com
      </Text>

      <Text
        {...slideAnimation("item")}
        size="small"
        className={twJoin("mt-4 text-primary-500 font-semibold", "lg:mt-8")}
      >
        Social
      </Text>

      <MotionLink
        {...slideAnimation("item")}
        className="underline text-slate-100 flex items-center underline-offset-4 gap-1 decoration-zinc-400 hover:decoration-2"
        href="https://www.linkedin.com/in/pawankanhere/"
        target="_blank"
      >
        Linkedin
        <ArrowUpRightIcon className="text-slate-200 h-4 w-4 stroke-2 mt-1" />
      </MotionLink>
    </motion.div>
  )
}

export default Contact
