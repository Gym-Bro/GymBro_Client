'use client'
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";
import banner5 from "../../public/almendras.png"
import banner6 from '../../public/protein.png'
import banner7 from '../../public/creatina.png'
import CardProducts from './CardProducts'


function Swip() {
  const foto = [banner5,banner6, banner7] 
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
        {foto?.map((e,i)=>
        (<SwiperSlide key={i}>
        <CardProducts  props={e.src}/>
        </SwiperSlide>))}
       
        
      </Swiper>
    </>
  );
}

export default Swip;
