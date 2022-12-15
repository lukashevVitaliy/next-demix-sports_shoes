import React from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import CardProducts from '../card-products';
import { IProducts, IReviews } from '../../utils/models';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

interface AppendIProducts extends IProducts {
  _id?: string;
}

interface IProps {
  products: AppendIProducts[];
  reviews: IReviews[];
}

const SliderNewShoes = ({ products, reviews }: IProps) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl text-center">
        Новые модели обуви
      </h2>
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
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
        className="slider-new-shoes relative"
      >
        <div className="slider-new-shoes-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-gray-400 cursor-pointer" />
        </div>
        {products.map((product) => (
          <SwiperSlide
            key={product._id}
            className="px-10 my-5 flex justify-center  md:my-10"
          >
            <CardProducts product={product} reviews={reviews} />
          </SwiperSlide>
        ))}
        <div className="slider-new-shoes-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderNewShoes;
