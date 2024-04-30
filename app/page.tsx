import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./components/LandingSection/LandingSection";
import JourneySection from "./components/JourneySection/JourneySection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="flex-grow relative">
        <div className="h-screen">
          <LandingSection />
          <JourneySection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </main>
      <div />
    </>
  );
}
