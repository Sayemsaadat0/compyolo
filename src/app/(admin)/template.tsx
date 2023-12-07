import DnavbarOne from "@/components/core/navbar/DnavbarOne";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div  >
      <DnavbarOne />
      {children}
    </div>
  );
};

export default template;
