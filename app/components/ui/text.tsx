import React from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};
const Text = ({ children, className }: TextProps) => {
  return (
    <div
      className={twMerge(
        `tracking-tight text-[18px] font-normal text-slate-600 leading-7 ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Text;
