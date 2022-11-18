import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

interface Images {
  images: string[];
}

const SliderItemShoes = ({ images }: Images) => {
  return (
    <div className="w-2/3 mb-5 z-0">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <div className="bg-gradient-to-bl from-lime-400 via-gray-800 to-lime-400 rounded-xl">
                <div className="text-xs text-cyan-800 text-center p-2">
                  <Image
                    src={image}
                    width={288}
                    height={288}
                    alt="photo shoes"
                    layout="responsive"
                    priority
                    className="rounded-tl-[20%] rounded-br-[20%] "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

        {/* <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2 w-full">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/2.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/3.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/4.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/5.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/6.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gradient-to-tl from-lime-800 to-lime-400 rounded-xl">
            <div className="text-xs text-gray-200 text-center p-2">
              <Image
                src="/assets/image/shoes/male/ATLANTA_2/beige/7.jpg"
                width={288}
                height={288}
                alt="photo shoes"
                layout="responsive"
                className="rounded-tl-[20%] rounded-br-[20%] "
              />
              <p className="text-right font-bold uppercase tracking-widest mt-3">
                Бежевый
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SliderItemShoes;
