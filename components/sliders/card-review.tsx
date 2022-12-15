import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

interface IProps {
  aboutProduct: string;
  advantage: string;
  disadvantages: string;
  nameUser: string;
  userCity: string;
  impression: number;
  reliability: number;
  functionality: number;
  quality: number;
  photoMatching: number;
  recommend: boolean;
  discommend: boolean;
  periodOfUseUser: string;
  frequencyOfUseUser: string;
  createdAt: string;
}

const CardReview = ({
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
}: IProps) => {
  let ratingImpression = '';
  for (let i = 0; i < impression; i++) {
    ratingImpression += '★';
  }
  let ratingReliability = '';
  for (let i = 0; i < reliability; i++) {
    ratingReliability += '★';
  }
  let ratingFunctionality = '';
  for (let i = 0; i < functionality; i++) {
    ratingFunctionality += '★';
  }
  let ratingQuality = '';
  for (let i = 0; i < quality; i++) {
    ratingQuality += '★';
  }
  let ratingPhotoMatching = '';
  for (let i = 0; i < photoMatching; i++) {
    ratingPhotoMatching += '★';
  }

  const formateDate = createdAt.slice(0, 10).split('-').reverse().join('.');

  return (
    <div className="relative overflow-hidden w-[320px] h-[690px] text-sm shadow-lg shadow-black/80 rounded-lg bg-gradient-to-bl from-black/60 via-lime-400 to-black/60 my-5">
      <div className="flex flex-col p-4">
        <p className="text-base text-amber-600/90 mb-1">{ratingImpression}</p>
        <p className="text-gray-500 mb-4">{formateDate}</p>
        <p className="text-black font-bold tracking-widest uppercase mb-4">
          {nameUser}
        </p>
        <div className="flex text-xs text-gray-500 mb-2">
          <span className="text-cyan-800 w-1/2">Город:</span>
          <span className="text-cyan-800 w-1/2">{userCity}</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Частота использования:</span>
          <span className="w-1/2">{frequencyOfUseUser}</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Срок использования:</span>
          <span className="w-1/2">{periodOfUseUser}</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Функциональность:</span>
          <span className=" text-amber-600/90  w-1/2">
            {ratingFunctionality}
          </span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Соответствие фото:</span>
          <span className="text-amber-600/90 w-1/2">{ratingPhotoMatching}</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Качество:</span>
          <span className="text-amber-600/90 w-1/2">{ratingQuality}</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-4">
          <span className="w-1/2">Надежность:</span>
          <span className="text-amber-600/90 w-1/2">{ratingReliability}</span>
        </div>
        <p className="text-gray-700 mb-4">{aboutProduct}</p>
        <p className="text-gray-700 mb-4">
          <b>Преимущества:</b> {advantage}
        </p>
        <p className="text-gray-700 mb-4">
          <b>Недостатки:</b> {disadvantages}
        </p>
        {recommend && (
          <p className="absolute bottom-4 left-4 flex text-xs text-cyan-800 items-center">
            <span className="mr-2">
              <MdCheckCircle className="text-base text-amber-600/90" />
            </span>
            Да, я бы рекомендовал этот товар другу!
          </p>
        )}
        {discommend && (
          <p className="absolute bottom-4 left-4 flex text-xs text-cyan-800 items-center">
            <span className="mr-2">
              <MdCheckCircle className="text-base text-red-600/90" />
            </span>
            Нет, я бы не рекомендовал этот товар другу!
          </p>
        )}
      </div>
    </div>
  );
};

export default CardReview;
