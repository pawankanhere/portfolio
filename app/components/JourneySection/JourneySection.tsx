import React from "react";
import Heading from "../headings/Heading";
import { twJoin } from "tailwind-merge";
import WorkExperience from "./WorkExperience";
import { primaryGradientTopRight } from "app/utils/colors";

const JourneySection = () => {
  return (
    <div
      className={`h-fit relative min-h-screen py-10 ${primaryGradientTopRight} `}
    >
      <div className={twJoin("container mx-auto px-8 2xl:px-16")}>
        <Heading className="pt-12">My Journey</Heading>
        <p
          className={twJoin(
            "text-slate-300 mt-8, lg:w-[800px] lg:mt-8 lg:leading-7",
          )}
        >
          Lorem ipsum dolor sit amet consectetur. Proin sit mi ultrices arcu.
          Fusce aenean nulla quisque netus enim hendrerit nisi ultrices lorem.
          In consectetur velit sit accumsan massa. Id tristique felis a mi
          pulvinar et tincidunt. Lorem ipsum dolor sit amet consectetur. Proin
          sit mi ultrices arcu. Fusce aenean nulla quisque netus enim hendrerit
          nisi ultrices lorem. In consectetur velit sit accumsan massa. Id
          tristique felis a mi pulvinar et tincidunt. Lorem ipsum dolor sit amet
          consectetur. Proin sit mi ultrices arcu. Fusce aenean nulla quisque
          netus enim hendrerit nisi ultrices lorem. In consectetur velit sit
          accumsan massa. Id tristique felis a mi pulvinar et tincidunt.
        </p>
        <div className="space-y-10 my-8 mt-10 w-full">
          <WorkExperience
            company="Konverge AI"
            duration="2021 - Present"
            designation="Full Stack Developer"
          />

          <WorkExperience
            company="Techture"
            duration="2019 - 2021"
            designation="Software Developer"
          />

          <WorkExperience
            company="PIX Transmissions Ltd"
            duration="2016 - 2019"
            designation="HR Professional"
          />
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
