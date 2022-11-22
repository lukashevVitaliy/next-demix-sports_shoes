import React from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

export default function SliderTehnologyDemix() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl text-center mb-10">
        Спортивные технологии Demix
      </h2>
      <Swiper
        modules={[Keyboard, FreeMode, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        freeMode={false}
        navigation={{
          nextEl: '.slider-tehnology-demix-button-next',
          prevEl: '.slider-tehnology-demix-button-prev',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        loop={true}
        className="slider-tehnology-demix relative"
      >
        <div className="slider-tehnology-demix-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-gray-400 cursor-pointer" />
        </div>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/enrblast.jpg"
              blurDataURL="/assets/image/photo_site/enrblast.jpg"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              Enrblast{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                Энербласт
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Высококачественный материал подошвы, обеспечивающий возврат
              энергии при беге. Пробежки быстрее, усталости меньше.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              FLEXZONE360{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                ФЛЕКСЗОН360
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Специальная геометрия подошвы с канавками гибкости в зоне сгибания
              стопы обеспечивает свободу движения при беге и функциональных
              тренировках.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/flexzone.jpg"
              blurDataURL="/assets/image/photo_site/flexzone.jpg"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/cushfoam.jpg"
              blurDataURL="/assets/image/photo_site/cushfoam.jpg"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              CUSHFOAM{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                КАШФОАМ
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Мягкий и амортизирующий полимер подошвы, разработанный для
              высокого уровня комфорта во время длительных и восстановительных
              пробежек.
            </p>
          </div>
        </SwiperSlide>
        <div className="slider-tehnology-demix-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}
