import React from "react"
import { motion } from "framer-motion"
import Text from "../ui/text"
import Link from "next/link"
import { AtSymbolIcon, ChatBubbleLeftRightIcon, HomeIcon } from "@heroicons/react/24/outline"
import { Meteors } from "../meteors"
import { twJoin } from "tailwind-merge"
import { slideAnimation } from "app/utils/animation"

const MotionLink = motion(Link)

const Navigation = () => {
  return (
    <>
      <div className={twJoin("[display:none]", "lg:block")}>
        <Meteors number={20} />
      </div>
      <nav
        className={twJoin(
          "relative z-20",
          "lg:p-0 lg:mb-20 lg:ml-[2%] lg:rounded-[50px]",
          "xl:p-10 xl:mb-20 xl:ml-[2%]",
        )}
      >
        <motion.div {...slideAnimation("container", 0, true)}>
          <motion.h2
            {...slideAnimation("item", 0, true)}
            className={twJoin(
              "text-4xl tracking-tight font-bold text-slate-300",
              `lg:text-[64px] lg:tracking-[-0.04em] lg:font-bold lg:-ml-0.5`,
            )}
          >
            Pawan Kanhere
          </motion.h2>
          <Text
            {...slideAnimation("item", 0, true)}
            size="large"
            className={twJoin("mt-2", "lg:font-semibold lg:mt-6 text-primary-500")}
          >
            Full Stack Developer
          </Text>
          <Text
            {...slideAnimation("item", 0, true)}
            className={twJoin("mt-4 w-[80%]", "lg:w-[40ch] lg:mt-4", "xl:w-[56ch] xl:mt-4")}
          >
            Crafting seamless digital experiences from frontend finesse to backend brilliance.
          </Text>
        </motion.div>
        <motion.div {...slideAnimation("container", 0, true)} className={twJoin(`mt-10 -ml-4`)}>
          <MotionLink
            {...slideAnimation("item", 0, true)}
            href="/"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2  pl-3 pr-6 rounded-xl"
          >
            <HomeIcon className="w-6 h-6 text-slate-400" />
            Home
          </MotionLink>

          <MotionLink
            {...slideAnimation("item", 0, true)}
            href="/resume.pdf"
            target="_blank"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2 pl-2 pr-6 rounded-xl"
          >
            <AtSymbolIcon className="w-6 h-6 text-slate-400" />
            View Resume
          </MotionLink>
          <MotionLink
            {...slideAnimation("item", 0, true)}
            href="#contact"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2 pr-6 pl-2 rounded-xl"
          >
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-slate-400" />
            Contact
          </MotionLink>
        </motion.div>
      </nav>
    </>
  )
}

export default Navigation
