import React from "react";
import { twJoin } from "tailwind-merge";

type SkillsProps = {
  skills: string[];
  heading: string;
};

const Skills = ({ skills, heading }: SkillsProps) => {
  return (
    <div className={twJoin("flex flex-col")}>
      <h6 className={twJoin("text-lg text-slate-500 lg:mt-8")}>{heading}</h6>
      <div className="mt-4 space-y-3 py-0">
        {skills.map((skill) => (
          <p key={skill} className="text-sm text-slate-300">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
