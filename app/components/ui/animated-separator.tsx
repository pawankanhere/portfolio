"use client"

import { animate, useMotionTemplate, useMotionValue } from "framer-motion"
import React, { useEffect } from "react"
import { COLORS } from "./gradient-background"
import { motion } from "framer-motion"
import { twJoin } from "tailwind-merge"
import { slideAnimation } from "app/utils/animation"

const AnimatedSeparator = () => {
  const color = useMotionValue(COLORS[0])
  const backgroundImageFaded = useMotionTemplate`linear-gradient(90deg,rgba(56,189,248,0) 0%,${color} 32.29%,#2563eb91 67.19%,rgba(236,72,153,0) 100%)`

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [color])

  return (
    <motion.div {...slideAnimation()} className={twJoin("hidden", "lg:relative lg:block")}>
      <div className="absolute top-[-2px] w-96 flex h-1 ml-1">
        <motion.div
          style={{
            backgroundImage: backgroundImageFaded,
          }}
          className={`w-full flex-none blur-sm`}
        />
        <motion.div
          style={{
            backgroundImage: backgroundImageFaded,
          }}
          className={`-ml-[100%] w-full flex-none blur-[1px]`}
        />
      </div>
      <motion.div
        style={{
          backgroundImage: backgroundImageFaded,
        }}
        className="my-20 h-px w-full -ml-20"
      />
    </motion.div>
  )
}

export default AnimatedSeparator
