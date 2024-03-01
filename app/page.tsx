import { twJoin } from "tailwind-merge";
import GithubIcon from "./components/icons/GithubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import H1 from "./components/headings/H2";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-slate-950 to-slate-800 relative">
        <div className="container mx-auto py-8 px-16 bg-grid-slate-800 h-[90vh]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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
              `text-slate-300 mt-8 leading-6 text-sm max-w-[620px] relative z-20`,
            )}
          >
            Hey! I am Pawan Kanhere, a full-stack web developer with a passion
            for crafting pixel-perfect interfaces and seamless user experiences.
            My focus lies on the frontend, bringing ideas to life with code
            that&apos;s both beautiful and functional. Dive into my portfolio to
            explore my projects, skills, and what I can bring to the table!
          </p>
          {/* <button className="p-4 bg-slate-950 text-white mt-12 rounded-2xl shadow-md hover:bg-slate-950/90 relative z-20"> */}
          {/*   View Resume */}
          {/* </button> */}

          <button className="relative z-20 mt-12 px-8 py-4 rounded-full bg-gradient-to-b from-blue-700 to-blue-600 text-white focus:ring-2 focus:ring-blue-600 hover:shadow-xl transition duration-200">
            View Resume
          </button>
        </div>
      </main>
      <div />
    </>
  );
}
