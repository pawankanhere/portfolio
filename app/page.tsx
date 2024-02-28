import { twJoin } from "tailwind-merge";
import GithubIcon from "./components/icons/GithubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";
import H1 from "./components/headings/H2";

export default function Home() {
  return (
    <main className="container mx-auto p-8 h-full flex-grow">
      <H1 className="lg:mt-4 xl:mt-6 2xl:mt-16">Hi, I am Pawan</H1>
      <p
        className={twJoin(
          "sm:mt-4 md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-8",
          "text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl",
          "bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100 mt-2 font-bold",
        )}
      >
        Full Stack Developer
      </p>
      <p
        className={twJoin(
          "text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl",
          "bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100 mt-2 font-bold",
        )}
      >
        UI / UX Designer
      </p>
      <div className="flex gap-5 mt-8">
        <LinkedinIcon />
        <GithubIcon />
        <InstagramIcon />
      </div>
      <p
        className={twJoin(
          `text-slate-300 mt-8 leading-6 text-sm max-w-[620px]`,
        )}
      >
        Hey! I am Pawan Kanhere, a full-stack web developer with a passion for
        crafting pixel-perfect interfaces and seamless user experiences. My
        focus lies on the frontend, bringing ideas to life with code that&apos;s
        both beautiful and functional. Dive into my portfolio to explore my
        projects, skills, and what I can bring to the table!
      </p>
      <button className="p-4 bg-slate-950 text-white mt-8 rounded-2xl shadow-md hover:bg-slate-950/90">
        View Resume
      </button>
    </main>
  );
}
