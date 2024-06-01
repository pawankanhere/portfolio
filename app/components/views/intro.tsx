import React from "react"
import Text from "../ui/text"
import { SectionHeading } from "../ui/section-heading"
import { twJoin } from "tailwind-merge"
import { motion } from "framer-motion"
import { slideAnimation } from "app/utils/animation"

const Intro = () => {
  return (
    <motion.div {...slideAnimation("container")} className={twJoin("lg:pb-20 xl:w-2/3")}>
      <motion.div {...slideAnimation("item")}>
        <SectionHeading>Intro</SectionHeading>
      </motion.div>
      <motion.div {...slideAnimation("item")}>
        <Text size="large" className="mt-4 tracking-[-0.02em] font-medium text-slate-300">
          Hey! I&apos;m Pawan Kanhere, and my passion lies in building software that delights users. My journey started
          a decade ago in HR, but in 2019, I pivoted into the exciting world of IT, embarking on a fulfilling path as a
          developer. Right now, I&apos;m wearing the hat of a Full Stack Developer at{" "}
          <span className="text-white font-medium underline underline-offset-4 decoration-primary-400 decoration-2">
            Konverge AI
          </span>
          .
        </Text>
      </motion.div>
    </motion.div>
  )
}

export default Intro
