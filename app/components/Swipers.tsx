'use client'
import React, { Children } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";
import Image, { StaticImageData } from "next/image";

function Swipers( props: { props: StaticImageData[] }) {
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
       { 
       props.props?.map((e,i) => (
        
        <SwiperSlide key={i}><Image src={e} alt={`${e}`}/></SwiperSlide>))
       }
        
      </Swiper>
    </>
  );
}

export default Swipers;
