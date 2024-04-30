"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

type Link = {
  id: string;
  name: string;
  link: string;
};
const Navbar = () => {
  const links: Link[] = [
    {
      id: "1",
      name: "home",
      link: "/",
    },
    {
      id: "2",
      name: "about",
      link: "/",
    },
    {
      id: "3",
      name: "work",
      link: "/",
    },
    {
      id: "4",
      name: "contact",
      link: "/",
    },
  ];
  const [selected, setSelected] = useState<Link>(links[0]);
  return (
    <header className="flex justify-between w-full p-8 flex-grow-0 bg-black">
      <nav
        className={twJoin(
          "px-8 2xl:px-16",
          `flex justify-between w-full items-center container mx-auto px-16 text-white`,
        )}
      >
        <p>pk.</p>
        <AnimatePresence mode="wait">
          <div className={twJoin("flex gap-2 2xl:gap-7")}>
            {links.map((link) => {
              return (
                <motion.a
                  style={{ cursor: "pointer" }}
                  key={link.id}
                  onMouseEnter={() => setSelected(link)}
                  className={twJoin(
                    `relative block text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base px-3 py-2`,
                  )}
                >
                  <motion.span className={`relative z-20 `}>
                    {link.name}
                  </motion.span>
                  {selected.name === link.name ? (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-1  z-0  w-full rounded-xl  bg-gradient-to-r from-violet-700 to-violet-300  "
                    />
                  ) : null}
                </motion.a>
              );
            })}
          </div>
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
