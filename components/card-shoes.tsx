import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardShoes() {
  return (
    <div className="w-[288px] shadow-md rounded hover:shadow-lime-400 hover:shadow-lg hover:scale-105 transition-all">
      <Link href="#">
        <a>
          <div className="relative">
            <Image
              src="/assets/image/shoes/male/ALPHA_CUSHFOAM/black/1.jpg"
              blurDataURL="/assets/image/shoes/male/ALPHA_CUSHFOAM/black/1.jpg"
              width={1000}
              height={1000}
              alt="photo"
              placeholder="blur"
              className="rounded-t"
            />
            <span className="absolute top-2 right-0 w-12  py-1 text-xs text-white font-bold text-center bg-lime-400 rounded-l-sm uppercase">
              new
            </span>
            <span className="absolute bottom-4 right-0 w-12 py-1 text-xs text-white font-bold text-center bg-red-600 rounded-l-sm">
              -15%
            </span>
          </div>
          <div className="text-xs text-gray-600 px-4 pt-0 pb-2">
            <p className="text-center font-semibold my-2">
              КРОССОВКИ ВЫСОКИЕ МУЖСКИЕ UNITY MID 2
            </p>
            <p className="text-center mb-5">
              Цвета: <span>черный</span>, <span>синий</span>,{' '}
              <span>бежевый</span>
            </p>
            <div className="mb-1">
              <p className="text-right text-base font-bold">
                5999 <span>руб.</span>
              </p>
              <p className="text-right text-gray-400 line-through">
                0 <span>руб.</span>
              </p>
            </div>
            <p className="text-base text-lime-400">
              ★★★★★ <span className="text-xs text-gray-600">(0 отзывов)</span>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
