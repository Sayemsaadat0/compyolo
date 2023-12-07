"use client";
import React, { useEffect, useState } from "react";
import NavMenuList from "./NavMenuList";

const DnavbarOne = () => {
  const [navBg, setNavBg] = useState(false);
  console.log(navBg);

  const ChangeNavBG = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNavBG);
    return window.removeEventListener("scroll", ChangeNavBG);
  }, []);

  return (
    // className="border top-0 left-0 w-full xl:fixed"
    <div
      className={`border top-0 left-0 w-full bg-white ${
        navBg ? "bg-blue-200 fixed top-0" : "bg-green-200"
      }`}
    >
      <div className="max-w-[1500px] mx-auto grid border border-blue-300 xl:grid-cols-3">
        <div>
          <p>logo</p>
        </div>
        <div>
          <NavMenuList />
        </div>
        {/* small device hidden and show hamburger  */}
        <div className="flex w-full gap-4 justify-end">
          <button className="border px-3 py-2 rounded-md">Login</button>
          <button className="border px-3 py-2 rounded-md">Register</button>
        </div>
      </div>
    </div>
  );
};

export default DnavbarOne;
