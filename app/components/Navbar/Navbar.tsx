import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";

const Navbar = () => {
  return (
    <header className="flex w-full p-8 flex-grow-0 text-slate-50 bg-slate-900">
      <nav className="flex justify-between w-full items-center container mx-auto px-16">
        <p>pk.</p>
        <div className={twJoin("flex gap-2 2xl:gap-7")}>
          <Link legacyBehavior passHref href="/">
            <a
              className={twJoin(
                `text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base`,
              )}
            >
              home
            </a>
          </Link>
          <Link legacyBehavior passHref href="/#about">
            <a
              className={twJoin(
                `text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base`,
              )}
            >
              about
            </a>
          </Link>
          <Link legacyBehavior passHref href="/#work">
            <a
              className={twJoin(
                `text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base`,
              )}
            >
              work
            </a>
          </Link>
          <Link legacyBehavior passHref href="/#contact">
            <a
              className={twJoin(
                `text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base`,
              )}
            >
              contact
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
