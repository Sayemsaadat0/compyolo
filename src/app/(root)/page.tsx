"use client";

import StateFetch from "@/components/core/fetchData/StateFetch";
import FetchSwr from "@/components/core/fetchData/FetchSwr";

import { QueryClient } from "@tanstack/react-query";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import Box from "@/components/context/Box";
import Zstnd from "@/components/practice/Zstnd";
import { Child } from "@/components/practice/child/Child";

export default function Home() {
  const client = new QueryClient();
  return (
    <main className="flex  flex-col items-center justify-between max-w-[1530px] mx-auto py-20  border-red-500 px-6 ">
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
      <Zstnd />
      <div className="py-20">
        <Child />
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
