"use client";
import React from "react";
import cardImage from "/public/card.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";

const Slidercustom = () => {
  return (
    <div className="w-full max-w-[1530px] ">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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

{
  /* <div className="">
<div className="mx-auto">
  <Image className="" src={cardImage} alt="" />
</div>
</div> */
}
