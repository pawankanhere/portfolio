import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

type H1Props = {
  children: React.ReactNode;
  className: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h2
      className={twMerge(
        "sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-[6rem]",
        "tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-slate-300 text-[2.6rem] font-bold",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default H1;
