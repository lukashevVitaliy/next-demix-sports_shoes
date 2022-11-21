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

interface IPropsReview {
  reviews: {
    _id: string;
    slug: string;
    name: string;
    aboutProduct: string;
    advantage: string;
    disadvantages: string;
    nameUser: string;
    userCity: string;
    impression: string;
    reliability: string;
    functionality: string;
    quality: string;
    photoMatching: string;
    recommend: boolean;
    discommend: boolean;
    periodOfUseUser: string;
    frequencyOfUseUser: string;
    policyData: boolean;
    createdAt: string;
  }[];
  reviewsItems: {
    _id: string;
    slug: string;
    name: string;
    aboutProduct: string;
    advantage: string;
    disadvantages: string;
    nameUser: string;
    userCity: string;
    impression: string;
    reliability: string;
    functionality: string;
    quality: string;
    photoMatching: string;
    recommend: boolean;
    discommend: boolean;
    periodOfUseUser: string;
    frequencyOfUseUser: string;
    policyData: boolean;
    createdAt: string;
  }[];
}

export default function SliderReviews({ reviewsItems, reviews }: IPropsReview) {
  return (
    <div className="container mx-auto px-4">
      {reviews.length === 0 ? (
        <h5 className="text-lime-500">Отзывов пока нет...</h5>
      ) : (
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
          {reviewsItems.map(
            ({
              _id,
              aboutProduct,
              advantage,
              disadvantages,
              nameUser,
              userCity,
              impression,
              reliability,
              functionality,
              quality,
              photoMatching,
              recommend,
              discommend,
              periodOfUseUser,
              frequencyOfUseUser,
              createdAt,
            }) => (
              <SwiperSlide key={_id}>
                <CardReview
                  aboutProduct={aboutProduct}
                  advantage={advantage}
                  disadvantages={disadvantages}
                  nameUser={nameUser}
                  userCity={userCity}
                  impression={impression}
                  reliability={reliability}
                  functionality={functionality}
                  quality={quality}
                  photoMatching={photoMatching}
                  recommend={recommend}
                  discommend={discommend}
                  periodOfUseUser={periodOfUseUser}
                  frequencyOfUseUser={frequencyOfUseUser}
                  createdAt={createdAt}
                />
              </SwiperSlide>
            )
          )}
          <div className="slider-reviews-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
            <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
          </div>
        </Swiper>
      )}
    </div>
  );
}
