"use client";
// import NewForm from "@/components/core/formik/NewForm";
// import FileUpload from "@/components/core/formik/FileUpload";
// import FunctionalNavbar from "@/components/core/navbar/FunctionalNavbar";
// import Navigationslider from "@/components/core/slider/Navigationslider";
// import SliderCard from "@/components/core/slider/SliderCard";
// import Slidercustom from "@/components/core/slider/Slidercustom";
import StateFetch from "@/components/core/fetchData/StateFetch";
import AxiosFetch from "@/components/core/fetchData/AxiosFetch";
import FetchSwr from "@/components/core/fetchData/FetchSwr";
import WithQuery from "@/components/core/fetchData/WithQuery";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContextProvider } from "@/components/context/ThemeContext";
import Box from "@/components/context/Box";

export default function Home() {
  const client = new QueryClient();
  return (
    <main className="flex  flex-col items-center justify-between max-w-[1530px] mx-auto py-20  border-red-500 px-6 ">
      {/* <QueryClientProvider client={client}>
        <WithQuery />
        <AxiosFetch / >
      </QueryClientProvider> */}
      {/* <FetchSwr /> */}
      <StateFetch />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </main>
  );
}

// min-h-screen

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
