import React from "react";
import Heading from "../headings/Heading";
import { twJoin } from "tailwind-merge";
import Skills from "./Skills";
import {
  primaryGradientBottomRight,
  primaryGradientTopLeft,
} from "app/utils/colors";

const SkillsSection = () => {
  return (
    <div className={`${primaryGradientTopLeft} py-10`}>
      <div className={twJoin("container mx-auto px-8 2xl:px-16")}>
        <Heading className="pt-12">Skills</Heading>
        <div className={twJoin("lg:flex lg:gap-20")}>
          <Skills
            heading="Languages"
            skills={["Javascript", "Typescript", "HTML", "CSS", "Node"]}
          />
          <Skills
            heading="Frameworks/Packages"
            skills={["Next.js", "Nest.js", "React", "Express.js"]}
          />
          <Skills
            heading="Design"
            skills={["Figma", "Wireframing", "Prototyping", "Design system"]}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
