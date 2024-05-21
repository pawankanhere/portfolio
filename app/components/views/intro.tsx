import React from "react";
import Text from "../ui/text";
import { SectionHeading } from "../ui/section-heading";
import { twJoin } from "tailwind-merge";

const Intro = () => {
  return (
    <div className={twJoin("lg:w-2/3 lg:pb-20")}>
      <SectionHeading>Intro</SectionHeading>
      <Text
        size="large"
        className="mt-4 tracking-[-0.02em] font-medium text-slate-300"
      >
        Hey! I&apos;m Pawan Kanhere, and my passion lies in building software
        that delights users. My journey started a decade ago in HR, but in 2019,
        I pivoted into the exciting world of IT, embarking on a fulfilling path
        as a developer. Right now, I&apos;m wearing the hat of a Full Stack
        Developer at{" "}
        <span className="text-white font-medium underline underline-offset-4 decoration-primary-400 decoration-2">
          Konverge AI
        </span>
        .
      </Text>
    </div>
  );
};

export default Intro;
