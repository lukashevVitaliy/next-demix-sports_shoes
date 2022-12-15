import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const AmbassadorPage = () => {
  return (
    <Layout title="Ambassador">
      <Breadcrumbs title="Ambassador" path="/ambassador" title2="" />
      <div className="relative w-full mb-5 md:mb-10">
        <Image
          src="/assets/image/photo_site/ambassador-bnr.jpg"
          blurDataURL={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
          }
          width={2720}
          height={840}
          layout="responsive"
          alt="ambassadors"
          priority
          placeholder="blur"
        />
        <p className="absolute bottom-[50%] translate-y-[50%] left-0 right-0 text-center italic sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-white font-bold uppercase">
          Амбассадоры Demix
        </p>
      </div>
      <div className="container mx-auto px-4 mb-0 md:mb-10">
        <div className="grid grid-cols-1 grid-flow-row justify-between gap-y-5 md:gap-y-10 lg:grid-cols-2">
          <div className="flex w-full order-1">
            <Image
              src="/assets/image/photo_site/artur-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-2">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              АРТУР ДАЛАЛОЯН
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Олимпийский чемпион, трёхкратный чемпион мира, пятикратный чемпион
              Европы по спортивной гимнастике, заслуженный мастер спорта России.
              В 2018 году Артур получил премию «Серебряная лань», присуждаемую
              Федерацией спортивных журналистов России лучшим спортсменам. В
              2021 году награждён орденом Дружбы.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239124&hash=68f23c08d19d8bcc&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-4 lg:order-3">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              ЕЛИЗАВЕТА ТУКТАМЫШЕВА
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Чемпионка мира, чемпионка Европы, победительница командного
              чемпионата мира по фигурному катанию, мастер спорта России
              мирового класса, заслуженный мастер спорта России. Принимала
              участие в рекордном количестве чемпионатов России, как и Евгений
              Плющенко. Всего их было 14.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239108&hash=500921a12b0ba526&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex w-full order-3 lg:order-4">
            <Image
              src="/assets/image/photo_site/liza-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="ЕЛИЗАВЕТА ТУКТАМЫШЕВА"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-5">
            <Image
              src="/assets/image/photo_site/daria-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="ДАРЬЯ ТРУБНИКОВА"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-6">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              ДАРЬЯ ТРУБНИКОВА
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Двукратная чемпионка Юношеских Олимпийских игр, двукратная
              чемпионка Европы среди юниоров, призёр Кубка мира, чемпионка
              России по художественной гимнастике, мастер спорта международного
              класса в Российской Федерации, член сборной России.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239229&hash=c09a6deb8e3d72e9&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-8 lg:order-7">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">МАРИЯ ЗОТОВА</h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Чемпионка России по карате, обладательница чёрного пояса, мастер
              спорта России, входит в состав национальной сборной.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239122&hash=1d6f62bd3ffbdf35&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex w-full order-7 lg:order-8">
            <Image
              src="/assets/image/photo_site/maria-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="МАРИЯ ЗОТОВА"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-9">
            <Image
              src="/assets/image/photo_site/denis-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="ДЕНИС САРАТОВ"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-10">
            <h2 className="text-2xl md:text-4xl mb-5 mb:mb-10">
              ДЕНИС САРАТОВ
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Трёхкратный чемпион мира по воркауту, тренер по физической
              подготовке, спортивный блогер. В 2018 году побил мировой рекорд
              Международной федерации стритлифтинга по отжиманию на брусьях.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239114&hash=74c3eaff67f8c190&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-12 lg:order-11">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              ЕКАТЕРИНА НИЛОВА
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Мастер спорта России в беге на короткие дистанции. Победитель
              летнего первенства России по легкой атлетике, неоднократный призер
              и победитель первенств Москвы в беге. В 2021 году Екатерина
              выиграла чемпионат Москвы в беге на 60 м с результатом — 7,44.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239112&hash=0fb557b15eb3f25d&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex w-full order-11 lg:order-12">
            <Image
              src="/assets/image/photo_site/ekaterina-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="ЕКАТЕРИНА НИЛОВА"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-[13]">
            <Image
              src="/assets/image/photo_site/aleksandr-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="АЛЕКСАНДР СЫЧУГОВ"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-[14]">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              АЛЕКСАНДР СЫЧУГОВ
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Мастер спорта России международного класса по спортивной
              гимнастике. Бронзоый призёр чемпионата России. Чемпион Москвы и
              вице-чемпион России по бодибилдингу, рекордсмен книги рекордов
              Гиннеса за выполнение кругов Делласало, в том числе с закрытыми
              глазами. Персональный тренер по физической подготовке и спортивной
              гимнастике.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239110&hash=e0b1be50a3c10046&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-[16] lg:order-[15]">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              ЕЛИЗАВЕТА РУНОВА
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Мастер спорта по чирлидингу, чемпионка Европы, танцовщица, модель.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239116&hash=9537bf0d7ee39c68&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex w-full order-[15] lg:order-[16]">
            <Image
              src="/assets/image/photo_site/elizaveta-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="ЕЛИЗАВЕТА РУНОВА"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-[17]">
            <Image
              src="/assets/image/photo_site/anastasia-bnr_dv.jpg"
              blurDataURL={
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
              }
              width={752}
              height={942}
              alt="АНАСТАСИЯ МАЛЫШЕВА"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-[18]">
            <h2 className="text-2xl md:text-4xl mb-5 md:mb-10">
              АНАСТАСИЯ МАЛЫШЕВА
            </h2>
            <p className="text-base md:text-xl font-light mb-3 md:mb-5">
              Российская легкоатлетка. Многократный призёр чемпионатов России в
              беге на короткие дистанции. Психолог, нутрициолог.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239121&hash=0e59052370c25018&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="relative w-full mt-5 md:mt-10">
          <Image
            src="/assets/image/photo_site/low-bnr_dv.jpg"
            blurDataURL={
              'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
            }
            width={1504}
            height={140}
            alt="welcome to club"
            placeholder="blur"
          />
          <div className="absolute top-[25%] -translate-y-[25%] left-[5%] ">
            <span className="block text-xs md:text-base lg:text-2xl 2xl:text-4xl text-white italic uppercase md:mb-2">
              Присоединяйся
            </span>
            <span className="block text-xs md:text-base lg:text-2xl 2xl:text-4xl text-lime-400 italic font-bold uppercase">
              к команде!
            </span>
          </div>
          <Link href="https://www.demix.ru/loyalty/">
            <a
              target="_blank"
              className="absolute top-[50%] -translate-y-[50%] right-[5%] py-1 px-2 md:py-2 md:px-4 bg-black/60 text-xs md:text-base text-white font-bold uppercase rounded-lg hover:bg-lime-400 hover:text-gray-600 active:bg-lime-500 transition-all "
            >
              Вступить в demix club
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AmbassadorPage;
