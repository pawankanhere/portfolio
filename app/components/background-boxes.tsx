"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  // let colors = [
  //   "--sky-300",
  //   "--pink-300",
  //   "--green-300",
  //   "--yellow-300",
  //   "--red-300",
  //   "--purple-300",
  //   "--blue-300",
  //   "--indigo-300",
  //   "--violet-300",
  // ];

  let colors = [
    "--sky-800",
    "--pink-800",
    "--green-800",
    "--yellow-800",
    "--red-800",
    "--purple-800",
    "--blue-800",
    "--indigo-800",
    "--violet-800",
  ];

  // let colors = ["--slate-700", "--slate-600", "--slate-500"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(0deg) skewY(0deg) scaleY(1) scaleX(1) rotate(0deg) translateZ(10)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-16  border-l  border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-8 h-8 border-r border-t border-slate-800 relative"
            >
              {j % 4 === 0 && i % 4 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-blue-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
