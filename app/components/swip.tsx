'use client'
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";


function Swip({children}:any) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

        {children}
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
}

export default Swip;
