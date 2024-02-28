import React from "react";

type H1Props = {
  children: React.ReactNode;
  className: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h2
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 text-[2.6rem] font-bold sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-[6rem] ${className}`}
    >
      {children}
    </h2>
  );
};

export default H1;
