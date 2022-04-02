import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function MobileSlider({ imgs }) {
  
  console.log(imgs);
  return (
    <>
      <Swiper loop pagination={true} modules={[Pagination]} className="mySwiper">
        {imgs.map((img,index)=>(
          <SwiperSlide key={index}><img src={img.logo_url} alt="" /></SwiperSlide>

        ))}
      
      </Swiper>
    </>
  );
}


export default MobileSlider