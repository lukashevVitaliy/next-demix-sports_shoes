import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const CardReview = () => {
  return (
    <div className="max-w-xs text-sm shadow-lg shadow-black/80 rounded-lg bg-gradient-to-bl from-black/60 via-lime-400 to-black/60 m-5">
      <div className="flex flex-col p-4">
        <p className="text-base text-amber-600/90 mb-1">★★★★★</p>
        <p className="text-gray-500 mb-4">06 сентября 2022</p>
        <p className="text-black font-bold tracking-widest uppercase mb-4">
          Сергей
        </p>
        <div className="flex text-xs text-gray-500 mb-2">
          <span className="text-cyan-800 w-1/2">Город:</span>
          <span className="text-cyan-800 w-1/2">Ломоносов</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Частота использования:</span>
          <span className="w-1/2">Несколько раз в неделю</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Срок использования:</span>
          <span className="w-1/2">Около полугода</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Функциональность:</span>
          <span className=" text-amber-600/90  w-1/2">★★★★★</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Соответствие фото:</span>
          <span className="text-amber-600/90 w-1/2">★★★★</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-1">
          <span className="w-1/2">Качество:</span>
          <span className="text-amber-600/90 w-1/2">★★★</span>
        </div>
        <div className="flex text-xs text-cyan-800 mb-4">
          <span className="w-1/2">Надежность:</span>
          <span className="text-amber-600/90 w-1/2">★★</span>
        </div>
        <p className="text-gray-700 mb-4">
          Обувь понравилась сыну и мне , довольно толстая подошва, а
          соответственно аммортизация. Подходят для прохладной погоде ближе к 0
          температуре.
        </p>
        <p className="text-gray-700 mb-4">
          <b>Преимущества:</b> Тёплые,толстая подошва.
        </p>
        <p className="text-gray-700 mb-4">
          <b>Недостатки:</b> Не для активного спорта. Хватило только на весну, а
          рассчитывал и на осень... Подошва молочного цвета, не как на фото,
          отмывается с трудом.
        </p>
        <p className="flex text-xs text-cyan-800 items-center">
          <span className="mr-2">
            <MdCheckCircle className="text-base text-amber-600/90" />
          </span>
          Да, я бы рекомендовал этот товар другу!
        </p>
      </div>
    </div>
  );
};

export default CardReview;
