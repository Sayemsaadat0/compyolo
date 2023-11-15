"use client";
import React from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

import SliderCard from "./SliderCard";

const Slidercustom = () => {
  return (
    <div className="w-full max-w-[1530px] ">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          //   1280: {
          //     slidesPerView: 4,
          //     spaceBetween: 15,
          //   },
        }}
      >
        <SwiperSlide className="text-xl font-bold   ">
          <div className="flex justify-center items-center py-16 ">
            <SliderCard></SliderCard>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-xl font-bold   ">
          <div className="flex justify-center items-center py-16 ">
            <SliderCard></SliderCard>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-xl font-bold   ">
          <div className="flex justify-center items-center py-16 ">
            <SliderCard></SliderCard>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-xl font-bold   ">
          <div className="flex justify-center items-center py-16 ">
            <SliderCard></SliderCard>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slidercustom;
