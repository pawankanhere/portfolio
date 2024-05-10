"use client";

import Intro from "./components/views/intro";
import Experience from "./components/views/experience";
import Skills from "./components/views/skills";
import Contact from "./components/views/contact";
import PageContainer from "./components/ui/page-container";
import AnimatedSeparator from "./components/ui/animated-separator";

export default function Home() {
  return (
    <>
      <PageContainer>
        <Intro />
        <AnimatedSeparator />
        <Experience />
        <AnimatedSeparator />
        <Skills />
        <AnimatedSeparator />
        <Contact />
      </PageContainer>
    </>
  );
}
