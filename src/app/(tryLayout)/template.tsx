import FunctionalNavbar from "@/components/core/navbar/FunctionalNavbar";
import React from "react";
import NavAsideTry from "./comp/NavAsideTry";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-[1530px] mx-auto">
      <FunctionalNavbar />

      <div className="pt-40">
        <div className="py-20 bg-amber-50 text-center">top content</div>
        <div className="pt-20">
          <NavAsideTry />
          <div className="px-96">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default template;
