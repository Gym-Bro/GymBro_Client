'use client'
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";
import Image, { StaticImageData } from "next/image";
import css from './Swipers.module.css'

function Swipers( props: { props: StaticImageData[] }) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <div className={css.Swiper_Container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       { 
       props.props?.map((e,i) => (
        
        <SwiperSlide className={css.swiper_slide} key={i}><Image src={e} alt={`${e}`}/></SwiperSlide>))
       }
        
      </Swiper>
    </div>
  );
}

export default Swipers;
