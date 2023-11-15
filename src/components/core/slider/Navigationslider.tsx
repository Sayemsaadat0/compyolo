"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Navigationslider = () => {
  return (
    <div className="w-full max-w-[1530px] border-red-200 border px-10 py-10 relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper border border-blue-200 relative"
      >
        <SwiperSlide className="py-20 text-center ">Slide 1</SwiperSlide>
        <SwiperSlide className="py-20 text-center ">Slide 2</SwiperSlide>
        <SwiperSlide className="py-20 text-center ">Slide 3</SwiperSlide>

        <div className=" flex justify-between ">
          <div className="button-prev-slide py-4 cursor-pointer text-center w-10 sm:w-16 md:w-40 absolute top-20 z-10 bg-red-100">
            prev
          </div>
          <div className="button-next-slide py-4 cursor-pointer text-center absolute top-20 right-0 z-10 w-10 sm:w-16 md:w-40 bg-green-100">
            next
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Navigationslider;
