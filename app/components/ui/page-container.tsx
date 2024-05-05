import React from "react";

type PageContainerProps = {
  children: React.ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="h-full px-10 pt-44">{children}</div>;
};

export default PageContainer;
