'use client';

import React from 'react';
import Style from '../../components/banner/banner.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperSlider: React.FC = () => {
  return (
    <div>
      
     <div className={Style.sliderWrapper}>

      
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="/kholi.jpg" alt="Slide 1" style={{ width: '100%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/kholi2.jpg" alt="Slide 2" style={{ width: '100%' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/kholi3.png" alt="Slide 3" style={{ width: '100%' }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
