import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
};

const Heading = ({ children, className, variant = "h2" }: HeadingProps) => {
  if (variant === "h1") {
    return (
      <h2
        className={twMerge(
          "sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-[6rem]",
          "tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-slate-300 text-[2.6rem] font-bold",
          className,
        )}
      >
        {children}
      </h2>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={twMerge(
          "sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-[4rem]",
          "tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-slate-300 text-[2.6rem] font-bold",
          className,
        )}
      >
        {children}
      </h2>
    );
  }
};

export default Heading;
