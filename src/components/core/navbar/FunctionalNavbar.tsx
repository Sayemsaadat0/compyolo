"use client";

import Image from "next/image";
import logo from "/public/images/Logo1.png";
import { useState } from "react";
import Link from "next/link";

const FunctionalNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  

  return (
    <div className="fixed left-0 w-full  z-10">
      <div className="flex max-w-[1530px] mx-auto justify-between items-center px-6  py-6 md:px-10 xl:px-28 bg-white">
        <nav className="w-full ">
          <div className="justify-between px-4 mx-auto  lg:items-center lg:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                {/* logo */}
                {/* <Image
                  className="w-36 md:w-40 lg:w-44"
                  src={logo}
                  alt="logo"
                  height={100}
                  width={200}
                /> */}
                <Link className="text-2xl font-bold" href="/">
                  Logo
                </Link>

                {/* functional  button */}
                <div className="lg:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              {/* content */}
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 lg:flex  md:space-x-4 xl:space-x-8 lg:space-y-0 text-lg font-bold">
                  <li>Home</li>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li>Course</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden inline-block">
                  <div className="">
                    <div className="flex gap-4">
                      <button>login </button>
                      <button>login </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden space-x-2 lg:inline-block">
              <div className="hidden lg:block">
                <div className="flex gap-4">
                  <button>login </button>
                  <button>login </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FunctionalNavbar;
