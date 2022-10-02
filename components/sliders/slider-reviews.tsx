import React from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import CardReview from './card-review';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

export default function SliderReviews() {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[Keyboard, FreeMode, Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={false}
        navigation={{
          nextEl: '.slider-reviews-button-next',
          prevEl: '.slider-reviews-button-prev',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        loop={true}
        className="slider-reviews relative"
      >
        <div className="slider-reviews-button-prev absolute top-1/2 -left-[8px] z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-gray-400 cursor-pointer" />
        </div>
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
        <div className="slider-reviews-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}
