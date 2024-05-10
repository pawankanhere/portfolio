"use client";

import React from "react";
import { twJoin } from "tailwind-merge";
import Navigation from "../views/side-navigation";
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
      {/* <GradientBackground */}
      {/*   className={twJoin("h-screen fixed w-[200px]", "lg:fixed lg:w-1/4")} */}
      {/* /> */}
      <div
        className={twJoin(
          "flex items-center justify-center pl-10 bg-slate-950 bg-grid-slate-600/20 [mask-image:radial-gradient(black_75%,transparent_100%)]",
          "lg:flex lg:bg-grid-slate-600/20 lg:items-center lg:justify-start lg:pl-20 lg:fixed lg:[mask-image:radial-gradient(black_75%,transparent_100%)] h-screen",
        )}
      >
        <Navigation />
      </div>
      <div className={twJoin(`lg:min-h-screen lg:col-start-2`)}>{children}</div>
    </div>
  );
};

export default LayoutContainer;
