import React from 'react';
import { Autoplay, FreeMode, Keyboard, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="slider-main-banner relative"
      >
        <SwiperSlide className="mb-10">
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
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-lime-400 mb-0 sm:mb-1 lg:mb-3 ">
                новая
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-lime-400 mb-1 sm:mb-3 lg:mb-6 ">
                коллекция
              </p>
              <p className="italic text-xs md:text-base lg:text-2xl text-gray-400 font-semibold tracking-wider uppercase">
                Для активных тренировок
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
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
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-orange-700 mb-0 sm:mb-1 lg:mb-3 ">
                новая
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-orange-700 mb-1 sm:mb-3 lg:mb-6 ">
                коллекция
              </p>
              <p className="italic text-xs md:text-base lg:text-2xl text-gray-600 font-semibold tracking-wider uppercase">
                Для женщин
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
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
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-amber-500 mb-0 sm:mb-1 lg:mb-3 ">
                новая
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-amber-500 mb-1 sm:mb-3 lg:mb-6">
                коллекция
              </p>
              <p className="italic text-xs md:text-base lg:text-2xl text-gray-400 font-semibold tracking-wider uppercase">
                Для мужчин
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
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
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-0 sm:mb-1 lg:mb-3 ">
                Спортивные
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-0 sm:mb-1 lg:mb-3 ">
                Технологии
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-white/50 mb-0 sm:mb-1 lg:mb-3 ">
                Demix
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-10">
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
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-green-300 mb-0 sm:mb-1 lg:mb-3 ">
                Оверсайз
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold italic tracking-wider uppercase text-green-300 mb-1 sm:mb-3 lg:mb-6 ">
                все еще тренд
              </p>
              <p className="italic text-xs md:text-base lg:text-2xl text-lime-400 font-semibold tracking-wider uppercase w-4/5 2xl:w-full">
                Выбирай комфорт и свой любимый цвет
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
