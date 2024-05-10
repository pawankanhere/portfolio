import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { twJoin } from "tailwind-merge";

type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="h-full px-10 pt-44">
      <div className={twJoin("hidden", "lg:fixed h-1/2 inset-0 z-0")}>
        <Canvas>
          <Stars radius={50} count={200} factor={5} fade speed={1} />
        </Canvas>
      </div>
      {children}
    </div>
  );
};

export default PageContainer;
