import FunctionalNavbar from "@/components/core/navbar/FunctionalNavbar";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <FunctionalNavbar />
      {children}
    </div>
  );
};

export default template;
