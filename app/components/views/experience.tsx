import React from "react";
import { SectionHeading } from "../ui/section-heading";
import Text from "../ui/text";
import Company from "../ui/company";

const Experience = () => {
  return (
    <div className="mt-20">
      <SectionHeading>Experience</SectionHeading>
      <Company
        className="mt-5"
        company="Konverge AI"
        companyDescription="Konverge AI is a boutique data science firm focused on empowering businesses with Artificial Intelligence (AI) capabilities. It is an end-to-end service provider for all AI solutions. Konverge services include enabling AI capabilities for organisations, building data engineering pipelines, enabling cloud migration, developing data products to validate AI models, or performing QA, Konverge provides the full spectrum of services necessary to succeed in AI plans."
        designation="Full Stack Developer"
        duration="Mar 2021 - Present"
        roleDescription="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint 
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />

      <Company
        className="mt-20"
        company="Techture"
        companyDescription="Techture is a consulting firm working to provide collaborative solutions in the field of Architecture, Engineering and Construction (AEC) industry. Techture delivers extensive Virtual Design, Construction and Project Management services leveraging Building Information Modelling (BIM), a technology process which is revolutionizing the entire industry."
        designation="Full Stack Developer"
        duration="May 2019 - Mar 2021"
        roleDescription="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint 
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />

      {/* HR Experience*/}
      <div className="mt-20 w-2/3">
        <Text className="text-slate-800 font-medium">Previous Experiences</Text>
        <Text className="mt-2">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Text>
        <div className="flex items-center gap-4 mt-4">
          <p className="font-semibold text-zinc-800 tracking-tight text-base">
            PIX Transmission Ltd
          </p>
          <p className="text-sm text-zinc-600 mt-0.5">Feb 2016 - May 2019</p>
        </div>
      </div>
      <div className="mt-8">
        <button className="text-sm underline underline-offset-4 decoration-zinc-300 hover:decoration-2 text-zinc-800 font-medium flex items-center gap-1">
          View Full Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 stroke-2 transform rotate-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Experience;
