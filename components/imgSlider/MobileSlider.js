import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function MobileSlider({imgs}) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {imgs.map((img)=>(
          <SwiperSlide><img src={img} alt="" /></SwiperSlide>

        ))}
      
      </Swiper>
    </>
  );
}


export default MobileSlider