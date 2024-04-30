import React from "react";
import { twJoin } from "tailwind-merge";
import Heading from "../headings/Heading";
import Project from "./Project";
import { primaryGradientTopRight } from "app/utils/colors";

const ProjectsSection = () => {
  return (
    <div className={`${primaryGradientTopRight} py-10 min-h-screen`}>
      <div className={twJoin("container mx-auto  px-16 text-slate-50")}>
        <Heading>Projects</Heading>
        <div className="mt-20 flex flex-col flex-wrap gap-20">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
