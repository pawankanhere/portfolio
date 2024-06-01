import React from "react"
import { SectionHeading } from "../ui/section-heading"
import Text from "../ui/text"
import Company from "../ui/company"
import { twJoin } from "tailwind-merge"
import { motion } from "framer-motion"
import { slideAnimation } from "app/utils/animation"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const Experience = () => {
  return (
    <div className="mt-20">
      <motion.div {...slideAnimation()}>
        <SectionHeading>Experience</SectionHeading>
      </motion.div>
      <Company
        className="mt-5"
        company="Konverge AI"
        companyDescription={
          <motion.span>
            Konverge AI is a boutique data science firm focused on empowering businesses with Artificial Intelligence
            (AI) capabilities. It is an end-to-end service provider for all AI solutions. Konverge services include
            enabling AI capabilities for organisations, building data engineering pipelines, enabling cloud migration,
            developing data products to validate AI models, or performing QA, Konverge provides the full spectrum of
            services necessary to succeed in AI plans.
          </motion.span>
        }
        designation="Full Stack Developer"
        duration="Mar 2021 - Present"
        roleDescription={
          <>
            <Text className="leading-6">
              At Konverge AI, my role as a Full Stack Developer involves creating both the frontend and backend
              components of client applications. On the frontend, I leverage React to develop intuitive, responsive, and
              visually appealing user interfaces that enhance user engagement and ensure a seamless experience across
              various devices. My work includes writing clean, maintainable code in HTML, CSS, and JavaScript to
              optimizing performance to deliver fast and efficient applications.
            </Text>
            <Text className="mt-4">
              For the backend, I utilize Express and Nest.js to develop robust REST APIs that handle the business logic
              and facilitate communication between the server and client. This involves designing, implementing, and
              maintaining databases, managing server-side operations, and ensuring scalability and performance
            </Text>
          </>
        }
      />

      <Company
        className="mt-20"
        company="Techture"
        companyDescription="Techture is a consulting firm working to provide collaborative solutions in the field of Architecture, Engineering and Construction (AEC) industry. Techture delivers extensive Virtual Design, Construction and Project Management services leveraging Building Information Modelling (BIM), a technology process which is revolutionizing the entire industry."
        designation="Full Stack Developer"
        duration="May 2019 - Mar 2021"
        roleDescription={
          <Text className="">
            At Techture, I served as a Web Developer, focusing primarily on backend API development and specializing as
            a subject matter expert in Autodesk Forge APIs. My role involved designing, implementing, and maintaining
            robust backend solutions using Python and the Django framework.
          </Text>
        }
      />

      {/* HR Experience*/}
      <motion.div {...slideAnimation("container")} className={twJoin("mt-20 xl:w-2/3")}>
        <motion.div {...slideAnimation("item")}>
          <Text size="large" className="font-semibold">
            Previous Experiences
          </Text>
        </motion.div>
        <motion.div {...slideAnimation("item")}>
          <Text className="mt-2">
            I started my career as a HR professional and then later I decided to follow my passion and made a switch to
            IT Industry as a developer.
          </Text>
        </motion.div>
        <motion.div {...slideAnimation("item")} className="flex items-center gap-4 mt-10">
          <Text>PIX Transmission Ltd</Text>
          <Text size="small" className="mt-0.5">
            Feb 2016 - May 2019
          </Text>
        </motion.div>
      </motion.div>
      <motion.div {...slideAnimation("container")} className="mt-8 w-fit">
        <motion.a
          {...slideAnimation("item")}
          href="/resume.pdf"
          target="_blank"
          className={twJoin(
            "text-base underline underline-offset-4 decoration-zinc-300  text-slate-300 font-medium flex items-center gap-1",
            "hover:decoration-2 hover:decoration-primary-400",
          )}
        >
          View Full Resume
          <ArrowUpRightIcon className="w-3 h-3 stroke-2 transform rotate-1" />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Experience
