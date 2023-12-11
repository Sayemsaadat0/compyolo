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

export default function Home() {
  const client = new QueryClient();
  return (
    <main className="flex  flex-col items-center justify-between max-w-[1530px] mx-auto  border-red-500 px-6">
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
      <div className="pt-20  ">
        {/* <Child /> */}
        {/* <FramerPractice /> */}

        {/* <ImageUploadField  setValue={[]} /> */}
      </div>
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
