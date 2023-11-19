import NewForm from "@/components/core/formik/NewForm";
import FunctionalNavbar from "@/components/core/navbar/FunctionalNavbar";
import Navigationslider from "@/components/core/slider/Navigationslider";
import SliderCard from "@/components/core/slider/SliderCard";
import Slidercustom from "@/components/core/slider/Slidercustom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1530px] mx-auto py-20  border-red-500 px-6 ">
      <NewForm />
      {/* <FunctionalNavbar /> */}
      {/* <Slidercustom /> */}
      {/* <Navigationslider /> */}
    </main>
  );
}
