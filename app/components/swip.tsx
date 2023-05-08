'use client'
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";
import CardProducts from './CardProducts'
import { StaticImageData } from "next/image";
import css from './swip.module.css'

function Swip(props: { props: StaticImageData[] }) { 
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  console.log(props.props)
  return (
    <div className={css.Swiper_Container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {props.props?.map((e,i)=>
        (<SwiperSlide key={i} className={css.swiper_slide}>
        <CardProducts  props={e}/>
        </SwiperSlide>))}
       
        
      </Swiper>
    </div>
  );
}

export default Swip;
