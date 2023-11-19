import NewForm from "@/components/core/formik/NewForm";
import FileUpload from "@/components/core/formik/FileUpload";
import FunctionalNavbar from "@/components/core/navbar/FunctionalNavbar";
import Navigationslider from "@/components/core/slider/Navigationslider";
import SliderCard from "@/components/core/slider/SliderCard";
import Slidercustom from "@/components/core/slider/Slidercustom";
import StateFetch from "@/components/core/fetchData/StateFetch";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between max-w-[1530px] mx-auto py-20  border-red-500 px-6 ">
      <StateFetch />
      <StateFetch />
      {/* <NewForm /> */}
      {/* <FileUpload /> */}
      {/* <FunctionalNavbar /> */}
      {/* <Slidercustom /> */}
      {/* <Navigationslider /> */}
    </main>
  );
}

// min-h-screen
