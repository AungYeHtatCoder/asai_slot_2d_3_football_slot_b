import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import carousel1 from '../../assets/img/carousel/carousel1.gif';
import carousel2 from '../../assets/img/carousel/carousel2.gif';
import carousel3 from '../../assets/img/carousel/carousel3.gif';
import carousel4 from '../../assets/img/carousel/carousel4.gif';

const Carouselslidetwo = () => {
    const banners = [carousel1,carousel2,carousel3,carousel4];
  return (
    <Swiper
    className='d-lg-block d-none my-4'
    spaceBetween={50}
    slidesPerView={2}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
  >
    {banners.map((banner,i)=>{
        return  <SwiperSlide key={i}>
            <img className='bannerImg w-100 mx-2' src={banner} />
        </SwiperSlide>

    })}
  </Swiper>
  )
}

export default Carouselslidetwo