import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';

const AboutPage: NextPage = () => {
  return (
    <Layout title="About">
      <div className="relative w-full mb-10">
        <Image
          src="/assets/image/photo_site/about-banner.jpg"
          width={1640}
          height={508}
          layout="responsive"
          alt="banner about"
          priority
          className="w-full mb-10"
        />
        <p className="absolute bottom-[32.5%] left-[22.3%] italic text-8xl text-white font-bold">
          МЫ – DEMIX
        </p>
        <p className="absolute bottom-[14%] left-0 right-0 text-center italic text-5xl text-white/80 font-">
          МЫ – СПОРТИВНЫЙ БРЕНД
        </p>
      </div>
      <div className="w-1/2 mx-auto mb-10">
        <p className="italic text-center text-xl mb-5">
          Наша первая коллекция увидела свет в 2008 году. С тех пор мы стремимся
          к тому, чтобы вы испытывали радость от занятий спортом. Наша цель —
          выпускать инновационную и технологичную, но при этом доступную
          продукцию, которая сделает вашу тренировку комфортнее и эффективнее
          вне зависимости от того, где она проходит.
        </p>
        <p className="text-2xl text-center text-gray-600 font-bold uppercase">
          ПОТОМУ ЧТО <span className="text-lime-400">#СПОРТТАМГДЕТЫ.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 justify-between gap-y-5 w-full mb-5 lg:mb-0 lg:h-[100vh] lg:grid-cols-2 lg:bg-[url('/assets/image/photo_site/about-photo_1.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-center">
        <div className="">
          <div className="flex lg:hidden">
            <Image
              src="/assets/image/photo_site/about-photo_1.jpg"
              blurDataURL="/assets/image/photo_site/about-photo_1.jpg"
              width={1920}
              height={940}
              alt="running man"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-10 lg:bg-black/50">
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2008
          </p>
          <p className="italic text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5 mb-10">
            Первая полноценная коллекция Demix представлена покупателям. Бренд
            быстро становится востребованным. Над его развитием работает
            международная команда дизайнеров и бренд-менеджеров со
            штаб-квартирой в Москве.
          </p>
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2013
          </p>
          <p className="italic text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5">
            Начало сотрудничества со спортивной лабораторией Наньянского
            технологического университета в Сингапуре. С помощью сингапурских
            экспертов бренд разрабатывает новые технологии и материалы. Запущено
            производство инновационной и функциональной экипировки для занятий
            спортом.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-5 justify-between mb-5 lg:mb-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-10 order-2 lg:order-1">
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2018
          </p>
          <p className="italic text-xl border-l-2 border-lime-400 pl-5 mb-10">
            Открыт первый розничный магазин Demix. Сейчас магазины брендовой
            сети расположены в Москве, Краснодаре, Екатеринбурге и других
            городах.
          </p>
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2020
          </p>
          <p className="italic text-xl border-l-2 border-lime-400 pl-5">
            Demix выходит на европейский рынок. Теперь товары бренда можно
            купить в Дании, Польше, Германии и Швейцарии.
          </p>
        </div>
        <div className="flex w-full order-1 lg:order-2">
          <Image
            src="/assets/image/photo_site/about-photo_2.jpg"
            blurDataURL="/assets/image/photo_site/about-photo_2.jpg"
            width={961}
            height={940}
            alt="running man"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-5 justify-between mb-5 lg:mb-0 lg:grid-cols-2">
        <div className="flex w-full ">
          <Image
            src="/assets/image/photo_site/about-photo_3.jpg"
            blurDataURL="/assets/image/photo_site/about-photo_2.jpg"
            width={961}
            height={940}
            alt="running man"
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col justify-center px-10 ">
          <p className="italic text-3xl font-black text-lime-400 uppercase tracking-wider mb-1">
            октябрь
          </p>
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2020
          </p>
          <p className="italic text-xl border-l-2 border-lime-400 pl-5">
            Амбассадорами Demix становятся Артур Далалоян, чемпион мира и Европы
            по гимнастике, и Елизавета Туктамышева, чемпионка мира и Европы по
            фигурному катанию. Список спортсменов, поддерживающих бренд,
            постоянно растет: к команде Demix присоединяются атлеты, которые
            профессионально занимаются бегом, легкой атлетикой, карате и многими
            другими дисциплинами.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between gap-y-5 w-full lg:h-[100vh] lg:grid-cols-2 lg:bg-[url('/assets/image/photo_site/about-photo_4.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-center">
        <div className="flex flex-col justify-center px-10 lg:bg-black/50 order-2 lg:order-1">
          <p className="italic text-3xl font-black text-lime-400 uppercase tracking-wider mb-1">
            июль
          </p>
          <p className="italic text-7xl font-black text-lime-400 tracking-wider mb-5">
            2021
          </p>
          <p className="italic text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5">
            Артур Далалоян становится Олимпийским чемпионом по спортивной
            гимнастике. Demix выпускает коллекцию одежды, разработанную вместе с
            Артуром и посвящённую его победам.
          </p>
        </div>
        <div className="order-1">
          <div className="flex lg:hidden">
            <Image
              src="/assets/image/photo_site/about-photo_4.jpg"
              blurDataURL="/assets/image/photo_site/about-photo_4.jpg"
              width={1920}
              height={940}
              alt="Артур Далалоян"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
