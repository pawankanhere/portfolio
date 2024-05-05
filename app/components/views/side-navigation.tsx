import React from "react";
import Text from "../ui/text";
import Link from "next/link";
import {
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const SideNavigation = () => {
  return (
    <nav className="p-10 mb-20 relative z-20 bg-white/30 ml-[12%] rounded-[50px]">
      <div>
        <h2 className="text-[56px] tracking-[-0.06em] font-semibold text-zinc-800 -ml-0.5">
          Pawan Kanhere
        </h2>
        <p className="text-slate-500 font-semibold tracking-[-0.03em] text-[26px]">
          Full Stack Developer
        </p>
        <Text className="w-[56ch] mt-4">
          Crafting seamless digital experiences from frontend finesse to backend
          brilliance.
        </Text>
      </div>
      <div className="mt-10 -ml-4">
        <Link
          href="/"
          className="text-zinc-600 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-zinc-100 w-fit py-2  pl-3 pr-6 rounded-xl"
        >
          <HomeIcon className="w-6 h-6 text-slate-600" />
          Home
        </Link>

        <Link
          href="/about"
          className="text-zinc-600 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-zinc-100 w-fit py-2 pl-2 pr-6 rounded-xl"
        >
          <AtSymbolIcon className="w-6 h-6 text-slate-600" />
          About
        </Link>
        <Link
          href="#contact"
          className="text-zinc-600 font-medium tracking-tight text-lg flex gap-3 items-center hover:bg-zinc-100 w-fit py-2 pr-6 pl-2 rounded-xl"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-slate-600" />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default SideNavigation;
