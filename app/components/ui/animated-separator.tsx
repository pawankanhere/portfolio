import React from "react";

const AnimatedSeparator = () => {
  return (
    <div className="relative">
      <div className="absolute w-80 flex h-0.5 ml-10">
        <div
          className={`w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#3ee90e_32.29%,#2563eb91_67.19%,rgba(236,72,153,0)_100%)]`}
        />
        <div
          className={`-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#3ee90e_32.29%,#2563eb91_67.19%,rgba(236,72,153,0)_100%)]`}
        />
      </div>
      <div className="my-20 h-px w-full bg-zinc-300 bg-gradient-to-r from-zinc-300 via-zinc-200 to-white" />
    </div>
  );
};

export default AnimatedSeparator;
