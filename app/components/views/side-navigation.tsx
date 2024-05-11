import React from "react";
import Text from "../ui/text";
import Link from "next/link";
import {
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Meteors } from "../meteors";
import { twJoin } from "tailwind-merge";

const SideNavigation = () => {
  return (
    <>
      <div className={twJoin("hidden", "lg:block")}>
        <Meteors number={20} />
      </div>
      <nav
        className={twJoin(
          "relative z-20",
          `lg:p-10 lg:mb-20 lg:ml-[12%] lg:rounded-[50px]`,
        )}
      >
        <div>
          <h2
            className={twJoin(
              "text-4xl tracking-tight font-bold text-slate-300",
              `lg:text-[56px] lg:tracking-[-0.06em] 100 lg:-ml-0.5`,
            )}
          >
            Pawan Kanhere
          </h2>
          <Text className={twJoin("mt-2", `lg:font-semibold`)}>
            Full Stack Developer
          </Text>
          <Text className={twJoin("mt-4 w-[80%]", `lg:w-[56ch] lg:mt-4`)}>
            Crafting seamless digital experiences from frontend finesse to
            backend brilliance.
          </Text>
        </div>
        <div className={twJoin(`mt-10 -ml-4`)}>
          <Link
            href="/"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2  pl-3 pr-6 rounded-xl"
          >
            <HomeIcon className="w-6 h-6 text-slate-400" />
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2 pl-2 pr-6 rounded-xl"
          >
            <AtSymbolIcon className="w-6 h-6 text-slate-400" />
            About
          </Link>
          <Link
            href="#contact"
            className="text-slate-300 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-slate-800 w-fit py-2 pr-6 pl-2 rounded-xl"
          >
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-slate-400" />
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default SideNavigation;
