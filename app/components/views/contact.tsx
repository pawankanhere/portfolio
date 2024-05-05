import React from "react";
import { SectionHeading } from "../ui/section-heading";
import Text from "../ui/text";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="my-20">
      <SectionHeading>Contact Me</SectionHeading>
      <Text>Feel free to drop me an email</Text>

      <p className="mt-5 text-zinc-800 font-medium flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 stroke-2 text-zinc-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        kanherepawan@gmail.com
      </p>
      <div className="mt-5">
        <p className="font-medium text-zinc-800 tracking-tight">Social Media</p>
        <Text>Connect with me :)</Text>
        <div className="mt-4 space-y-2 w-fit">
          {["LinkedIn", "Twitter", "Github"].map((social) => (
            <Link
              href="/"
              key={social}
              className="flex gap-1 items-center underline underline-offset-4 decoration-zinc-400 hover:decoration-2"
            >
              {social}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 stroke-2 text-zinc-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
