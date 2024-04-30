import React from "react";
import { twJoin } from "tailwind-merge";

type WorkExperienceProps = {
  company: string;
  designation: string;
  duration: string;
};
const WorkExperience = ({
  company,
  designation,
  duration,
}: WorkExperienceProps) => {
  return (
    <div className="text-slate-200 flex flex-col justify-between sm:flex-row sm:items-center lg:w-[640px]">
      <div>
        <h5 className={twJoin("text-xl")}>{company}</h5>
        <p className={twJoin("text-base text-slate-400")}>{designation}</p>
      </div>
      <p className={twJoin("mt-4 text-slate-200")}>{duration}</p>
      <hr className={twJoin("mt-6 border-slate-700 sm:hidden")} />
    </div>
  );
};

export default WorkExperience;
