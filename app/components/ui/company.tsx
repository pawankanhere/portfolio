import React from "react";
import Text from "../ui/text";
import { twMerge } from "tailwind-merge";

type CompanyProps = {
  company: string;
  companyDescription: string;
  designation: string;
  roleDescription: string;
  duration: string;
  className?: string;
};
const Company = ({
  company,
  companyDescription,
  duration,
  designation,
  roleDescription,
  className,
}: CompanyProps) => {
  return (
    <div className={twMerge(`${className}`)}>
      <div className="flex items-center gap-4">
        <Text className="font-semibold text-zinc-800 tracking-tight text-[26px]">
          {company}
        </Text>
        <Text className="text-zinc-600 mt-0.5">{duration}</Text>
      </div>
      <Text className="text-primary-500 tracking-tight font-semibold mt-1">
        {designation}
      </Text>
      <Text className="w-2/3 mt-3 text-slate-500">{companyDescription}</Text>
      <div className="mt-10 w-2/3">
        <Text className="tracking-tight text-slate-800 font-medium">
          My Role
        </Text>
        <Text className="mt-1 text-slate-500">{roleDescription}</Text>
      </div>
    </div>
  );
};

export default Company;
