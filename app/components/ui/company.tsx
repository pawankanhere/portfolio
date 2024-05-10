import React from "react";
import Text from "../ui/text";
import { twJoin, twMerge } from "tailwind-merge";

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
        <Text size="large" className="font-semibold">
          {company}
        </Text>
        <Text className="text-slate-500 mt-0.5">{duration}</Text>
      </div>
      <Text className="text-primary-500 font-semibold mt-1">{designation}</Text>
      <Text className={twJoin("mt-4", "lg:w-2/3 lg:mt-3 lg:text-slate-400")}>
        {companyDescription}
      </Text>
      <div className={twJoin("mt-10", "lg:mt-10 lg:w-2/3")}>
        <Text className="text-slate-300 font-medium">My Role</Text>
        <Text className="mt-2 text-slate-400">{roleDescription}</Text>
      </div>
    </div>
  );
};

export default Company;
