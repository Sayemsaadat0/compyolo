"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

// import StateFetch from "@/components/core/fetchData/StateFetch";
// import FetchSwr from "@/components/core/fetchData/FetchSwr";

// import { QueryClient } from "@tanstack/react-query";
// import { ThemeContextProvider } from "@/components/context/ThemeContext";
// import Box from "@/components/context/Box";
// import Zstnd from "@/components/practice/Zstnd";
// import { Child } from "@/components/practice/child/Child";
// import ImageUploadField from "@/components/core/input/ImageUploadField";
// import FramerPractice from "@/components/core/motion/FramerPractice";
// import FirstDiv from "@/components/core/motion/FirstDiv";
// import LandingPage from "@/components/core/motion/LandingPage";
// import SecondDiv from "@/components/core/motion/SecondDiv";
// import ThirDiv from "@/components/core/motion/ThirDiv";
// import CalenderTry from "@/components/calender/CalenderTry";
// import Gradient from "@/components/core/gradient/Gradient";
// import MentorDetailCard from "@/components/core/card/MentorDetailCard";
// import TabTry from "@/components/core/tabtry/TabTry";
// import Buttons from "@/components/core/buttons/Buttons";

// export default function Home() {
//   const client = new QueryClient();
//   return (
//     <main className="py-44 max-w-[1400px]  mx-auto px-20">
//       <Buttons label="sdksd" />
//       <TabTry />
//       <MentorDetailCard />
//       <Gradient />
//       <CalenderTry />
//       <SecondDiv />
//       <ThirDiv />
//       <LandingPage />
//       <LandingPage />
//       <LandingPage />
//       <LandingPage />
//        <QueryClientProvider client={client}>
//         <WithQuery />
//         <AxiosFetch / >
//       </QueryClientProvider>
//       <FetchSwr />
//       <StateFetch />
//     4. wrapp all the children
//      <ThemeContextProvider>
//         <Box />
//       </ThemeContextProvider>
//       <Zstnd />

//       <Child />
//       <FramerPractice />

//       <ImageUploadField  setValue={[]} />

//     </main>
//   );
// }

//  <NewForm />
//  <FileUpload />
//  <FunctionalNavbar />
//  <Slidercustom />
//  <Navigationslider />

export default function Home() {
  const [activeDiv, setActiveDiv] = useState(2);

  const handleHover = (index: any) => {
    setActiveDiv(index);
  };

  const calculateScale = (index: any) => {
    if (activeDiv === index) {
      return 1.2;
    }

    const distance = Math.abs(index - activeDiv);
    return Math.max(0.7, 1.1 - 0.1 * distance);
  };

  const calculateZIndex = (index: any) => {
    if (activeDiv === index) {
      return 5;
    }

    const distance = Math.abs(index - activeDiv);
    return 5 - distance;
  };
  const handleClick = (index: any) => {
    if (activeDiv === index) {
      console.log(`Hello World Index:  ${index}`);
    }
  };

  const data = [
    {
      thumbnail:
        "https://images.pexels.com/photos/12713826/pexels-photo-12713826.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/14539686/pexels-photo-14539686.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/14646692/pexels-photo-14646692.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/14596436/pexels-photo-14596436.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      thumbnail:
        "https://images.pexels.com/photos/14576607/pexels-photo-14576607.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <main className="py-44 max-w-[1200px] mx-auto">
      <div className="flex  items-center justify-center">
        {data?.map((i: any, index) => (
          <div
            key={index}
            className={`${activeDiv === index ? "active" : ""}  `}
            onMouseEnter={() => handleHover(index)}
            style={{
              transform: `scale(${calculateScale(index)})`,
              transition: "0.2s ease-In 0.01s",
              zIndex: calculateZIndex(index),
              position: "relative",
              right: `${-200 + index * 100}px`,
            }}
          >
            <div
              className="cursor-pointer border-4 border-black  w-72"
              onClick={() => handleClick(index)}
            >
              <Image
                className="object-cover transition-all hover:scale-105"
                src={i?.thumbnail || ""}
                alt="thumbnail"
                width={600}
                height={600}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
