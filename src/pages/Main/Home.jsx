import React from 'react'
import '../../assets/css/Main/home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import h1 from '../../assets/img/Main/home/h1.png'
import h2 from '../../assets/img/Main/home/h2.png'
import h3 from '../../assets/img/Main/home/h3.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
  const carousel=[h1,h2,h3];
  const btnLinks=[
    {id:1,title:'2D',link:'/lotto/2d/twoD'},
    {id:2,title:'3D',link:'/lotto/3d/threeD'},
    {id:3,title:'ဘောလုံး',link:'/'},
    {id:4,title:'စလော့',link:'/'},
  ]
  return (
    <div className='home px-2 px-sm-0 '>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
      >
        {carousel.map((item)=>{
          return <SwiperSlide>
             <img src={item} />
          </SwiperSlide>
        })}
      </Swiper>
      <marquee>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aliquid facere voluptate modi dolorem, repudiandae commodi ab provident unde temporibus? Sunt nobis fugit unde debitis atque architecto laborum omnis numquam.
      </marquee>
      <div className="my-4 row justify-content-around">
        {btnLinks.map((item)=>{
          return <NavLink className="mb-4 col-5 mainLinkBtn p-2 p-sm-3 "  to={item.link} >
            <button className=''>
            {item.title}
          </button>
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default Home
