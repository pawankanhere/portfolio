"use client";

import React from "react";
import { twJoin } from "tailwind-merge";
import SideNavigation from "../views/side-navigation";
import GradientBackground from "./gradient-background";

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div
      className={twJoin(`min-h-screen grid [grid-template-columns:1fr_1fr]`)}
    >
      <GradientBackground className="h-screen fixed w-1/2" />
      <div className="flex bg-grid-slate-300/20 items-center justify-start pl-20 fixed [mask-image:radial-gradient(white_90%,transparent_100%)] h-screen">
        <SideNavigation />
      </div>
      <div className="min-h-screen col-start-2">{children}</div>
    </div>
  );
};

export default LayoutContainer;
