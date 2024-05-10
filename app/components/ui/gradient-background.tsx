import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type GradientBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

export const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const GradientBackground = ({
  children,
  className,
}: GradientBackgroundProps) => {
  const color = useMotionValue(COLORS[0]);
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at 100%, #fff 10%, ${color} 100%)`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <motion.div
      style={{ backgroundImage: backgroundGradient }}
      className={twMerge(`${className}`)}
    >
      {children}
    </motion.div>
  );
};

export default GradientBackground;
