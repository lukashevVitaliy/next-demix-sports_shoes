import React, { FC } from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import CardShoes from '../card-shoes';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

interface newShoesProps {
  newShoes: {
    id: string | undefined;
    slug: string;
    name: string;
    category: string;
    stockAvailability: boolean;
    novelty: boolean;
    discount: string | undefined;
    rating: string | undefined;
    colors: {
      name: string;
      colorSheme1: string;
      colorSheme2?: string;
      images: string[];
      sizes: {
        size: number;
        countInStock: number;
      }[];
    }[];
    priceNew: number;
    priceOld: number;
    currency: string;
    description?: {
      title_1?: string | undefined;
      text_1?: string | undefined;
      title_2?: string | undefined;
      text_2?: string | undefined;
      title_3?: string | undefined;
      text_3?: string | undefined;
      title_4?: string | undefined;
      text_4?: string | undefined;
      title_5?: string | undefined;
      text_5?: string | undefined;
      title_6?: string | undefined;
      text_6?: string | undefined;
      title_7?: string | undefined;
      text_7?: string | undefined;
      title_8?: string | undefined;
      text_8?: string | undefined;
      title_9?: string | undefined;
      text_9?: string | undefined;
      title_10?: string | undefined;
      text_10?: string | undefined;
    };
    gender: string | undefined;
    sportType?: string | undefined;
    coverage?: string | undefined;
    typeOfTraining?: string | undefined;
    anatomicalInsole?: string | undefined;
    reflectiveDetails?: string | undefined;
    differenceSole?: string | undefined;
    typeOfPronation?: string | undefined;
    reinforcedBumper?: string | undefined;
    season?: string | undefined;
    warrantyPeriod?: string | undefined;
    closure?: string | undefined;
    feature?: string | undefined;
    antibacteriaImpregnation?: string | undefined;
    protectionFromMoisture?: string | undefined;
    materialUpper?: string | undefined;
    materialLining?: string | undefined;
    materialSole?: string | undefined;
    countryOfManufacture?: string | undefined;
    enrblast?: boolean;
    cushfoam?: boolean;
    flexzone360?: boolean;
  }[];
}

const SliderNewShoes: FC<newShoesProps> = ({ newShoes }) => {
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
        {newShoes.map((shoes) => (
          <SwiperSlide key={shoes.id} className="px-10 my-5 md:my-10">
            <CardShoes shoes={shoes} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className="px-10 my-5 md:my-10">
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
        </SwiperSlide> */}
        <div className="slider-new-shoes-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderNewShoes;
