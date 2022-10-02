import React from 'react';
import { Autoplay, FreeMode, Keyboard, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// import { BsChevronCompactLeft } from 'react-icons/bs';
// import { BsChevronCompactRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SliderMainBanner() {
  return (
    <>
      <Swiper
        modules={[Pagination, Keyboard, FreeMode, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        speed={3000}
        freeMode={false}
        // navigation={{
        //   nextEl: '.slider-main-banner-button-next',
        //   prevEl: '.slider-main-banner-button-prev',
        // }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="slider-main-banner relative"
      >
        {/* <div className="slider-main-banner-button-prev absolute top-1/2 left-5 z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-amber-600 cursor-pointer" />
        </div> */}
        <SwiperSlide className="mb-5 md:mb-10">
          <div className="relative w-full h-fit">
            <Image
              src="/assets/image/photo_site/main-banner_1.jpg"
              width={1663}
              height={623}
              alt="banners"
              layout="responsive"
              priority
            />
            <div className="absolute top-1/4 left-[5%]">
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-lime-400 mb-3 ">
                новая
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-lime-400 mb-6 ">
                коллекция
              </p>
              <p className="italic text-2xl text-gray-400 font-semibold tracking-wider uppercase">
                Для активных тренировок
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-5 md:mb-10">
          <div className="relative w-full h-fit">
            <Image
              src="/assets/image/photo_site/main-banner_2.jpg"
              width={1663}
              height={623}
              alt="banners"
              layout="responsive"
              priority
            />
            <div className="absolute top-1/4 left-[5%]">
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-orange-700 mb-3 ">
                новая
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-orange-700 mb-6 ">
                коллекция
              </p>
              <p className="italic text-2xl text-gray-600 font-semibold tracking-wider uppercase">
                Для женщин
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-5 md:mb-10">
          <div className="relative w-full h-fit">
            <Image
              src="/assets/image/photo_site/main-banner_3.jpg"
              width={1663}
              height={623}
              alt="banners"
              layout="responsive"
              priority
            />
            <div className="absolute top-1/4 left-[5%]">
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-amber-500 mb-3 ">
                новая
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-amber-500 mb-6 ">
                коллекция
              </p>
              <p className="italic text-2xl text-gray-400 font-semibold tracking-wider uppercase">
                Для мужчин
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-5 md:mb-10">
          <div className="relative w-full h-fit">
            <Image
              src="/assets/image/photo_site/main-banner_4.jpg"
              width={1663}
              height={623}
              alt="banners"
              layout="responsive"
              priority
            />
            <div className="absolute top-1/4 left-[5%]">
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-3 ">
                Спортивные
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-3 ">
                Технологии
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-3 ">
                Demix
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-5 md:mb-10">
          <div className="relative w-full h-fit">
            <Image
              src="/assets/image/photo_site/main-banner_5.jpg"
              width={1663}
              height={623}
              alt="banners"
              layout="responsive"
              priority
            />
            <div className="absolute top-1/4 left-[5%]">
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-green-300 mb-3 ">
                Оверсайз
              </p>
              <p className="text-5xl font-semibold italic tracking-wider uppercase text-green-300 mb-6 ">
                все еще тренд
              </p>
              <p className="italic text-2xl text-lime-400 font-semibold tracking-wider uppercase">
                Выбирай комфорт и свой любимый цвет
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="slider-main-banner-button-next absolute top-1/2 right-5 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-amber-600 cursor-pointer" />
        </div> */}
      </Swiper>
    </>
  );
}
