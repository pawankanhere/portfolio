import GithubIcon from "./components/icons/GithubIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedinIcon from "./components/icons/LinkedinIcon";

export default function Home() {
  return (
    <main className="container mx-auto p-8 h-full flex-grow">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 text-[2.6rem] font-bold">
        Hi, I am Pawan
      </h1>
      <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100 mt-2 font-bold">
        Full Stack Developer
      </p>
      <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-slate-100">
        UI / UX Designer
      </p>
      <div className="flex gap-5 mt-8">
        <LinkedinIcon />
        <GithubIcon />
        <InstagramIcon />
      </div>
      <p className="text-slate-300 mt-8 leading-6 text-sm">
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
