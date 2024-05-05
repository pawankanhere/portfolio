import React from "react";
import Text from "../ui/text";
import { SectionHeading } from "../ui/section-heading";

const Intro = () => {
  return (
    <div className="w-2/3">
      <SectionHeading>Intro</SectionHeading>
      <Text className="leading-9 text-[26px] mt-4 tracking-[-0.03em] font-medium text-slate-700">
        Hello there, I am Pawan Kanhere. I am passionate about building software
        which makes users happy. I have started my professional journey a decade
        back and have experiences of different industries Currently working at{" "}
        <span className="text-black font-medium underline underline-offset-4 decoration-primary-400 decoration-2">
          Konverge AI
        </span>{" "}
        as a Full Stack Developer.
      </Text>
    </div>
  );
};

export default Intro;
