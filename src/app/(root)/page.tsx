"use client";

import StateFetch from "@/components/core/fetchData/StateFetch";
import FetchSwr from "@/components/core/fetchData/FetchSwr";

import { QueryClient } from "@tanstack/react-query";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import Box from "@/components/context/Box";
import Zstnd from "@/components/practice/Zstnd";
import { Child } from "@/components/practice/child/Child";
import ImageUploadField from "@/components/core/input/ImageUploadField";
import FramerPractice from "@/components/core/motion/FramerPractice";
import FirstDiv from "@/components/core/motion/FirstDiv";
import LandingPage from "@/components/core/motion/LandingPage";
import SecondDiv from "@/components/core/motion/SecondDiv";
import ThirDiv from "@/components/core/motion/ThirDiv";

export default function Home() {
  const client = new QueryClient();
  return (
    <main className="">
      <SecondDiv />
      <ThirDiv />
      {/* <LandingPage />
      <LandingPage />
      <LandingPage />
      <LandingPage /> */}
      {/* <QueryClientProvider client={client}>
        <WithQuery />
        <AxiosFetch / >
      </QueryClientProvider> */}
      {/* <FetchSwr />
      <StateFetch /> */}
      {/*4. wrapp all the children */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Zstnd /> */}

      {/* <Child /> */}
      {/* <FramerPractice /> */}

      {/* <ImageUploadField  setValue={[]} /> */}
    </main>
  );
}

{
  /* <NewForm /> */
}
{
  /* <FileUpload /> */
}
{
  /* <FunctionalNavbar /> */
}
{
  /* <Slidercustom /> */
}
{
  /* <Navigationslider /> */
}
