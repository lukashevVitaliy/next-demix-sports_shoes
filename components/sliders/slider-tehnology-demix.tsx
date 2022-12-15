import React from 'react';
import { FreeMode, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

export default function SliderTehnologyDemix() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl text-center mb-10">
        Спортивные технологии Demix
      </h2>
      <Swiper
        modules={[Keyboard, FreeMode, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        freeMode={false}
        navigation={{
          nextEl: '.slider-tehnology-demix-button-next',
          prevEl: '.slider-tehnology-demix-button-prev',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        loop={true}
        className="slider-tehnology-demix relative"
      >
        <div className="slider-tehnology-demix-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2">
          <BsChevronCompactLeft className="text-3xl text-gray-400 cursor-pointer" />
        </div>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/enrblast.jpg"
              blurDataURL="
							data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              Enrblast{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                Энербласт
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Высококачественный материал подошвы, обеспечивающий возврат
              энергии при беге. Пробежки быстрее, усталости меньше.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              FLEXZONE360{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                ФЛЕКСЗОН360
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Специальная геометрия подошвы с канавками гибкости в зоне сгибания
              стопы обеспечивает свободу движения при беге и функциональных
              тренировках.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/flexzone.jpg"
              blurDataURL="
							data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc
						"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid grid-cols-1 items-center justify-between gap-10 pl-8 pr-8 md:grid-cols-2">
          <div className="w-full">
            <Image
              src="/assets/image/photo_site/cushfoam.jpg"
              blurDataURL="
							data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc
						"
              width={680}
              height={400}
              alt="ernblast"
              placeholder="blur"
            />
          </div>
          <div className="mx-auto text-center">
            <p className="text-3xl text-gray-600 font-semibold italic uppercase mb-5">
              CUSHFOAM{' '}
              <span className="text-base normal pt-1 px-4 uppercase bg-black/70 text-gray-200 ml-2">
                КАШФОАМ
              </span>
            </p>
            <p className="w-3/4 mx-auto text-gray-600 italic">
              Мягкий и амортизирующий полимер подошвы, разработанный для
              высокого уровня комфорта во время длительных и восстановительных
              пробежек.
            </p>
          </div>
        </SwiperSlide>
        <div className="slider-tehnology-demix-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2">
          <BsChevronCompactRight className="text-3xl text-gray-400 cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
}
