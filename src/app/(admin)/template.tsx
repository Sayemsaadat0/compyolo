import DFooter from "@/components/core/footer/DFooter";
import DnavbarOne from "@/components/core/navbar/DnavbarOne";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <DnavbarOne /> */}
      {children}
      {/* <DFooter /> */}
    </div>
  );
};

export default template;
