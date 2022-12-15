import Image from 'next/image';
import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="relative w-full mb-5 lg:mb-10">
        <Image
          src="/assets/image/photo_site/about-banner.jpg"
          blurDataURL={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
          }
          width={1519}
          height={470}
          layout="responsive"
          alt="banner about"
          priority
          placeholder="blur"
          className="w-full mb-10"
        />
        <p className="absolute bottom-[32.5%] left-[22.3%] italic text-xl sm:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl text-white font-bold">
          МЫ – DEMIX
        </p>
        <p className="absolute bottom-[14%] left-0 right-0 text-center italic text-xs sm:text-base lg:text-xl xl:text-3xl 2xl:text-5xl text-white/80 font-bold">
          МЫ – СПОРТИВНЫЙ БРЕНД
        </p>
      </div>
      <div className="w-1/2 mx-auto mb-5 lg:mb-10">
        <p className="italic text-center text-base lg:text-xl mb-3 lg:mb-5">
          Наша первая коллекция увидела свет в 2008 году. С тех пор мы стремимся
          к тому, чтобы вы испытывали радость от занятий спортом. Наша цель —
          выпускать инновационную и технологичную, но при этом доступную
          продукцию, которая сделает вашу тренировку комфортнее и эффективнее
          вне зависимости от того, где она проходит.
        </p>
        <p className="text-base lg:text-2xl text-center text-gray-600 font-bold uppercase">
          ПОТОМУ ЧТО <span className="text-lime-400">#СПОРТТАМГДЕТЫ.</span>
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-y-5 w-full mb-5 lg:mb-0 lg:h-[100vh] lg:grid-cols-2 lg:bg-[url('/assets/image/photo_site/about-photo_1.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-center">
          <div className="">
            <div className="flex lg:hidden">
              <Image
                src="/assets/image/photo_site/about-photo_1.jpg"
                blurDataURL={
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
                }
                width={1920}
                height={940}
                alt="running man"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-10 lg:bg-black/50">
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2008
            </p>
            <p className="italic text-base lg:text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5 mb-5 lg:mb-10">
              Первая полноценная коллекция Demix представлена покупателям. Бренд
              быстро становится востребованным. Над его развитием работает
              международная команда дизайнеров и бренд-менеджеров со
              штаб-квартирой в Москве.
            </p>
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2013
            </p>
            <p className="italic text-base lg:text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5">
              Начало сотрудничества со спортивной лабораторией Наньянского
              технологического университета в Сингапуре. С помощью сингапурских
              экспертов бренд разрабатывает новые технологии и материалы.
              Запущено производство инновационной и функциональной экипировки
              для занятий спортом.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-5 justify-between mb-5 lg:mb-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-10 order-2 lg:order-1">
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2018
            </p>
            <p className="italic text-base lg:text-xl border-l-2 border-lime-400 pl-5 mb-5 lg:mb-10">
              Открыт первый розничный магазин Demix. Сейчас магазины брендовой
              сети расположены в Москве, Краснодаре, Екатеринбурге и других
              городах.
            </p>
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2020
            </p>
            <p className="italic text-base lg:text-xl border-l-2 border-lime-400 pl-5">
              Demix выходит на европейский рынок. Теперь товары бренда можно
              купить в Дании, Польше, Германии и Швейцарии.
            </p>
          </div>
          <div className="flex justify-start w-full order-1 lg:order-2">
            <Image
              src="/assets/image/photo_site/about-photo_2.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={961}
              height={940}
              alt="ambassadors"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-5 justify-between mb-5 lg:mb-0 lg:grid-cols-2">
          <div className="flex justify-end w-full ">
            <Image
              src="/assets/image/photo_site/about-photo_3.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={961}
              height={940}
              alt="ambassadors"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center px-10 ">
            <p className="italic text-base lg:text-3xl font-black text-lime-400 uppercase tracking-wider lg:mb-1">
              октябрь
            </p>
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2020
            </p>
            <p className="italic text-base lg:text-xl border-l-2 border-lime-400 pl-5">
              Амбассадорами Demix становятся Артур Далалоян, чемпион мира и
              Европы по гимнастике, и Елизавета Туктамышева, чемпионка мира и
              Европы по фигурному катанию. Список спортсменов, поддерживающих
              бренд, постоянно растет: к команде Demix присоединяются атлеты,
              которые профессионально занимаются бегом, легкой атлетикой, карате
              и многими другими дисциплинами.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-between gap-y-5 w-full lg:h-[100vh] lg:grid-cols-2 lg:bg-[url('/assets/image/photo_site/about-photo_4.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-center">
          <div className="flex flex-col justify-center px-10 lg:bg-black/50 order-2 lg:order-1">
            <p className="italic text-base lg:text-3xl font-black text-lime-400 uppercase tracking-wider lg:mb-1">
              июль
            </p>
            <p className="italic text-3xl lg:text-7xl font-black text-lime-400 tracking-wider mb-3 lg:mb-5">
              2021
            </p>
            <p className="italic text-base lg:text-xl text-black lg:text-white border-l-2 border-lime-400 pl-5">
              Артур Далалоян становится Олимпийским чемпионом по спортивной
              гимнастике. Demix выпускает коллекцию одежды, разработанную вместе
              с Артуром и посвящённую его победам.
            </p>
          </div>
          <div className="order-1">
            <div className="flex lg:hidden">
              <Image
                src="/assets/image/photo_site/about-photo_4.jpg"
                blurDataURL={
                  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
                }
                width={1920}
                height={940}
                alt="Артур Далалоян"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
