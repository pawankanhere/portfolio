"use client";

import React from "react";
import { twJoin } from "tailwind-merge";
import Navigation from "../views/navigation";
import GradientBackground from "./gradient-background";

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div
      className={twJoin(
        "bg-slate-950 min-h-screen",
        "lg:min-h-screen lg:grid lg:[grid-template-columns:1fr_1fr]",
      )}
    >
      <GradientBackground
        className={twJoin(
          "w-[200px] h-96 fixed hidden",
          "lg:fixed lg:h-screen lg:w-1/4 lg:block",
        )}
      />
      <div
        className={twJoin(
          "flex items-center justify-center pl-10 bg-slate-950 bg-grid-slate-600/20 [mask-image:radial-gradient(black_75%,transparent_100%)] sticky",
          "lg:justify-start lg:pl-10 lg:fixed lg:[mask-image:radial-gradient(black_75%,transparent_100%)] h-screen",
          "xl:justify-start xl:pl-20",
        )}
      >
        <Navigation />
      </div>
      <div className={twJoin(`lg:min-h-screen lg:col-start-2`)}>{children}</div>
    </div>
  );
};

export default LayoutContainer;
