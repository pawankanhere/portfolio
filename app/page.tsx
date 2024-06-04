"use client"

import Intro from "./components/views/intro"
import Experience from "./components/views/experience"
import Skills from "./components/views/skills"
import PageContainer from "./components/ui/page-container"
import AnimatedSeparator from "./components/ui/animated-separator"
import Separator from "./components/ui/separator"
import Contact from "./components/views/contact"
import Footer from "./components/views/footer"

export default function Home() {
  return (
    <>
      <PageContainer>
        <Intro />
        <Separator />
        <AnimatedSeparator />
        <Experience />
        <Separator />
        <AnimatedSeparator />
        <Skills />
        <Separator />
        <AnimatedSeparator />
        <Contact />
        <Footer />
      </PageContainer>
    </>
  )
}
