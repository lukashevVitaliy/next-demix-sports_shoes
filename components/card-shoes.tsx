import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface ProductProps {
  shoes: {
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
  };
}

const CardShoes: FC<ProductProps> = ({ shoes }) => {
  const {
    slug,
    name,
    novelty,
    discount,
    rating,
    colors,
    priceNew,
    priceOld,
    currency,
    gender,
  } = shoes;

  let urlGender;
  if (gender === 'Мужчины') {
    urlGender = '/male-shoes/';
  } else if (gender === 'Женщины') {
    urlGender = '/female-shoes/';
  }

  return (
    <div className="w-[288px] shadow-md rounded hover:shadow-lime-400 hover:shadow-lg hover:scale-105 transition-all">
      <Link href={`${urlGender}${slug}`}>
        <a>
          <div className="relative flex">
            <Image
              src={colors[0].images[0]}
              blurDataURL={colors[0].images[0]}
              width={1000}
              height={1000}
              alt={name}
              placeholder="blur"
              className="rounded-t"
            />
            {novelty && (
              <span className="absolute top-2 right-0 w-12  py-1 text-xs text-white font-bold text-center bg-lime-400 rounded-l-sm uppercase">
                new
              </span>
            )}
            {discount && (
              <span className="absolute bottom-4 right-0 w-12 py-1 text-xs text-white font-bold text-center bg-red-600 rounded-l-sm">
                -15%
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between min-h-[172px] bg-gradient-to-bl from-black/60 via-lime-400 to-black/60 text-xs text-gray-600 px-4 pt-0 pb-2 rounded-b">
            <p className="text-center font-semibold my-2 h-8">{name}</p>
            <div className="flex justify-end h-8 mb-2">
              {colors.map(({ name, images, colorSheme1, colorSheme2 }) => (
                <div key={`${name}${images[0]}${colorSheme1}`} className="">
                  <p
                    className="w-4 h-4 rounded ml-2"
                    style={{ background: `${colorSheme1}` }}
                  ></p>
                  {colorSheme2 && (
                    <p
                      className="relative -top-1 w-4 h-4 rounded ml-2"
                      style={{ background: `${colorSheme2}` }}
                    ></p>
                  )}
                </div>
              ))}
            </div>
            <div className="mb-1">
              <p className="text-right text-xl font-bold">
                {priceNew} <span>{currency}</span>
              </p>
              {priceOld > 0 && (
                <p className="text-right text-sm font-bold text-red-700 line-through">
                  {priceOld} <span>{currency}</span>
                </p>
              )}
            </div>
            {rating && (
              <p className="text-base text-amber-400">
                {rating}{' '}
                <span className="text-xs text-gray-600">(0 отзывов)</span>
              </p>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardShoes;
