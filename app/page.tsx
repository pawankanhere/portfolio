import Navbar from "./components/Navbar/Navbar";
import LandingSection from "./components/LandingSection/LandingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-slate-950 to-slate-800 relative">
        <div className="h-screen">
          <LandingSection />
          <h2>hello journey</h2>
        </div>
      </main>
      <div />
    </>
  );
}
