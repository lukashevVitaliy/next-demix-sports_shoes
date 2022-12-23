import React, { memo } from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import CardReview from './card-review';
import { IReviews } from '../../types/models';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

const breakPoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 3,
  },
  1536: {
    slidesPerView: 4,
  },
};

const naviGation = {
  nextEl: '.slider-reviews-button-next',
  prevEl: '.slider-reviews-button-prev',
};

const keyBoard = {
  enabled: true,
  onlyInViewport: true,
  pageUpDown: true,
};

interface IPropsReview {
  reviews: IReviews[];
  reviewsItems: IReviews[];
}

const SliderReviews = memo(({ reviewsItems, reviews }: IPropsReview) => {
  return (
    <div className="container mx-auto px-4 relative overflow-x-auto">
      {reviews.length === 0 ? (
        <h5 className="text-lime-500">Отзывов пока нет...</h5>
      ) : (
        <Swiper
          modules={[Keyboard, FreeMode, Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={false}
          navigation={naviGation}
          keyboard={keyBoard}
          loop={true}
          breakpoints={breakPoints}
          className="slider-reviews"
        >
          <div className="slider-reviews-button-prev absolute top-1/2 -left-[10px] z-10 -translate-y-1/2">
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
              <SwiperSlide key={_id} className="flex justify-center z-0">
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
          <div className="slider-reviews-button-next absolute top-1/2 -right-[10px] z-10 -translate-y-1/2">
            <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
          </div>
        </Swiper>
      )}
    </div>
  );
});

SliderReviews.displayName = 'SliderReviews';
export default SliderReviews;
