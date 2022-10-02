import React from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import CardShoes from '../card-shoes';

export default function SliderNewShoes() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center">Новые модели обуви</h2>
      <Swiper
        modules={[Keyboard, FreeMode, Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={false}
        navigation={{
          nextEl: '.slider-new-shoes-button-next',
          prevEl: '.slider-new-shoes-button-prev',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        loop={true}
        className="slider-new-shoes relative"
      >
        <div className="slider-new-shoes-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-gray-400 cursor-pointer" />
        </div>
        <SwiperSlide className="px-10 my-5 md:my-10">
          <CardShoes />
        </SwiperSlide>
        <SwiperSlide className="px-10 my-5 md:my-10">
          <CardShoes />
        </SwiperSlide>
        <SwiperSlide className="px-10 my-5 md:my-10">
          <CardShoes />
        </SwiperSlide>
        <SwiperSlide className="px-10 my-5 md:my-10">
          <CardShoes />
        </SwiperSlide>
        <SwiperSlide className="px-10 my-5 md:my-10">
          <CardShoes />
        </SwiperSlide>
        <div className="slider-new-shoes-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}
