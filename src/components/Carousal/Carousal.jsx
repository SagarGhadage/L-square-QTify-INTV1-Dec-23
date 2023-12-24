import { Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import styles from "./Carousal.module.css"
import Card from '../Card/Card';
import CarousalRightNav from './CarousalRightNav/CarousalRightNav';
import CarousalLeftNav from './CarousalLeftNav/CarousalLeftNav';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
export default function Carousal({data,Component,type}) {

  return (
    <div className={styles.carousalC}>
    <Swiper
      // install Swiper modules
      className={styles.swiper}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={'auto'}
      allowTouchMove
      navigation={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <CarousalRightNav/>
      {data.map((item)=>
          <SwiperSlide key={item.id}>{Component(item)}</SwiperSlide>
          )}   
          <CarousalLeftNav/>
{/* {component} */}
    </Swiper></div>
  );
};