import React, { useState } from 'react';
import {
  FreeMode,
  Keyboard,
  Navigation,
  Mousewheel,
  EffectFade,
  Thumbs,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';

const images = [
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/1.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/2.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/3.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/4.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/5.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/6.jpg',
  '/assets/image/shoes/male/LARUS_2_NY/dark-blue/7.jpg',
];

const SliderIdShoes = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState({
    el: '#shoes-slider-thumbs',
  });

  return (
    <div className="text-black">
      <div className="flex ">
        <div className="hidden sm:flex sm:flex-col sm:justify-center sm:mr-4 sm:w-1/6">
          <div className="slider-shoes-id-button-prev mx-auto">
            <BsChevronUp className="text-2xl text-gray-400 cursor-pointer" />
          </div>
          <Swiper
            freeMode={true}
            id="shoes-slider-thumbs"
            onSwiper={() => setThumbsSwiper}
            direction="vertical"
            slidesPerView={3}
            navigation={{
              nextEl: '.slider-shoes-id-button-next',
              prevEl: '.slider-shoes-id-button-prev',
            }}
            modules={[Thumbs, Keyboard, FreeMode, Navigation, EffectFade]}
            className="slider-shoes-id-thumbnail w-full h-96 md:h-52 lg:h-96 text-center"
          >
            {images.map((image) => (
              <SwiperSlide
                key={image}
                className="opacity-50 transition-all w-full"
              >
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt="shoes image"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-shoes-id-button-next mx-auto">
            <BsChevronDown className="text-2xl text-gray-400 cursor-pointer" />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          mousewheel={true}
          navigation={{
            nextEl: '.slider-shoes-id-button-next',
            prevEl: '.slider-shoes-id-button-prev',
          }}
          grabCursor={true}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          modules={[Thumbs, Navigation, Mousewheel]}
          className="max-w-[690px] max-h-max slider-shoes-id-image "
        >
          {images.map((image) => (
            <SwiperSlide className="swiper_slide_thumbs" key={image}>
              <Image
                src={image}
                width={690}
                height={690}
                alt="shoes"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderIdShoes;
