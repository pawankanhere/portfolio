import React from "react";
import { twJoin } from "tailwind-merge";
import { Boxes } from "../background-boxes";
import H1 from "../headings/H2";
import InstagramIcon from "../icons/InstagramIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const LandingSection = () => {
  return (
    <div className=" h-[90vh] w-full relative overflow-hidden">
      <div className={twJoin("container mx-auto py-8 px-16")}>
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <H1 className="lg:mt-4 xl:mt-6 2xl:mt-16 relative z-20 ">
          Hi, I am Pawan
        </H1>
        <p
          className={twJoin(
            "relative z-20",
            "sm:mt-4 md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-8",
            "text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl",
            "bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100 mt-2 font-bold",
          )}
        >
          Full Stack Developer
        </p>
        <p
          className={twJoin(
            "relative z-20",
            "text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl",
            "bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100 mt-2 font-bold",
          )}
        >
          UI / UX Designer
        </p>
        <div className={twJoin(`flex gap-5 mt-8 relative z-20`)}>
          <LinkedinIcon />
          <GithubIcon />
          <InstagramIcon />
        </div>
        <p
          className={twJoin(
            `text-slate-300 mt-8 leading-7 text-base max-w-[620px] relative z-20`,
          )}
        >
          Hey! I am Pawan Kanhere, a full-stack web developer with a passion for
          crafting pixel-perfect interfaces and seamless user experiences. My
          focus lies on the frontend, bringing ideas to life with code
          that&apos;s both beautiful and functional. Dive into my portfolio to
          explore my projects, skills, and what I can bring to the table!
        </p>
        <button className="relative z-20 mt-12 px-8 py-4 rounded-full bg-gradient-to-b from-blue-700 to-blue-600 text-white focus:ring-2 focus:ring-blue-600 hover:shadow-xl transition duration-200">
          View Resume
        </button>
      </div>
    </div>
  );
};

export default LandingSection;
