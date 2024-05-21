import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
};

const textVariants = cva([`tracking-tight font-normal text-slate-300`], {
  variants: {
    size: {
      small: "text-sm",
      medium: ["text-base", "sm:text-base", "lg:text-[16px] lg:leading-7"],
      large: "text-[26px] leading-9",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
const Text = ({ children, className, size = "medium" }: TextProps) => {
  const Comp = `p`;
  return (
    <Comp className={twMerge(textVariants({ size }), className)}>
      {children}
    </Comp>
  );
};

export default Text;
