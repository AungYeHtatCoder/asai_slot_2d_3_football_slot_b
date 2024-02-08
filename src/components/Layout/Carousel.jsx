import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import carousel1 from '../../assets/img/carousel/carousel1.gif';
import carousel2 from '../../assets/img/carousel/carousel2.gif';
import carousel3 from '../../assets/img/carousel/carousel3.gif';
import carousel4 from '../../assets/img/carousel/carousel4.gif';

const Carousel = () => {
  const banners = [carousel1,carousel2,carousel3,carousel4];
    return(
        <>
           <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper d-xl-none d-lg-none d-xs-block"
      >
        {
          banners.map((banner)=>{
            return <SwiperSlide>
            <img src={banner} className="w-100"/>
          </SwiperSlide>
          })
        }
        
      </Swiper>
        </>
    )
}

export default Carousel;