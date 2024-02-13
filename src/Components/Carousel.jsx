import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay} from 'swiper/modules'; //this is a librabry for carousel to add arrows for navigation

import 'swiper/css'
import 'swiper/css/navigation'

const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper
        loop={true} // loops the corousel
        spaceBetween= {0}
        className="h-[50%]"
        navigation={true}// activitates arrows in the HTML
        modules={[Navigation, Autoplay]} // adds the navigation module to html MUST be in array
        autoplay={{delay:4500}}
        >
        <SwiperSlide>
            <img
                src={"../images/carousel_1.jpg"}
                alt="carousel"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                src={"../images/carousel_2.jpg"}
                alt="carousel_2"
            />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
           <video controls muted="muted">
             <source
             src={'../images/carousel_vid.mp4'}
             type="video/mp4"
             />
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <img
                src={"../images/carousel_4.jpg"}
                alt="carousel"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                src={"../images/carousel_5.jpg"}
                alt="carousel_2"
            />
        </SwiperSlide>
        </Swiper>
        <div className='h-[50%] bg-gradient-to-b from-stone-900'/>
        </div>
  )
}

export default Carousel