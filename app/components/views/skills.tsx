import React from "react";
import { SectionHeading } from "../ui/section-heading";
import Text from "../ui/text";
import { twJoin } from "tailwind-merge";

const technologies = [
  {
    heading: "Language",
    skills: ["HTML", "CSS", "Node", "Javascript", "Typescript"],
  },
  {
    heading: "Frameworks",
    skills: ["Next.js", "Nest.js", "Express.js", "React"],
  },
  {
    heading: "Design",
    skills: ["Figma", "Wireframing", "Prototyping", "Design system"],
  },
  {
    heading: "Tools",
    skills: ["HTML", "CSS", "Git", "Javascript", "Typescript"],
  },
];
const Skills = () => {
  return (
    <div className={twJoin("lg:w-2/3 mt-20")}>
      <SectionHeading>Skills</SectionHeading>
      <Text>Things I have worked on during my career</Text>
      <div className="grid grid-cols-2 gap-8 mt-6">
        {technologies.map((technology) => (
          <div key={technology.heading} className="mt-6 flex flex-col gap-3">
            <h5 className="text-base font-medium text-primary-500">
              {technology.heading}
            </h5>
            <ul className="flex flex-col gap-2 -mt-0.5">
              {technology.skills.map((skill) => (
                <li key={skill}>
                  <Text className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 text-slate-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    {skill}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
