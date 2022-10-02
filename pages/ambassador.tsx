import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const AmbassadorPage: NextPage = () => {
  return (
    <Layout title="Ambassador">
      <Breadcrumbs title="Ambassador" path="/ambassador" title2="" />
      <div className="relative w-full mb-10">
        <Image
          src="/assets/image/photo_site/ambassador-bnr.jpg"
          width={2720}
          height={840}
          alt="ambassadors"
          priority
        />
        <p className="absolute bottom-[50%] translate-y-[50%] left-0 right-0 text-center italic text-6xl text-white font-bold uppercase">
          Амбассадоры Demix
        </p>
      </div>
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 grid-flow-row justify-between gap-y-10 lg:grid-cols-2">
          <div className="flex w-full order-1">
            <Image
              src="/assets/image/photo_site/artur-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/artur-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-2">
            <h2 className="mb-10">АРТУР ДАЛАЛОЯН</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-4 lg:order-3">
            <h2 className="mb-10">ЕЛИЗАВЕТА ТУКТАМЫШЕВА</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>
          <div className="flex w-full order-3 lg:order-4">
            <Image
              src="/assets/image/photo_site/liza-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/liza-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-5">
            <Image
              src="/assets/image/photo_site/daria-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/daria-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-6">
            <h2 className="mb-10">ДАРЬЯ ТРУБНИКОВА</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-8 lg:order-7">
            <h2 className="mb-10">МАРИЯ ЗОТОВА</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>
          <div className="flex w-full order-7 lg:order-8">
            <Image
              src="/assets/image/photo_site/maria-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/maria-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-9">
            <Image
              src="/assets/image/photo_site/denis-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/denis-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-10">
            <h2 className="mb-10">ДЕНИС САРАТОВ</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-12 lg:order-11">
            <h2 className="mb-10">ЕКАТЕРИНА НИЛОВА</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>
          <div className="flex w-full order-11 lg:order-12">
            <Image
              src="/assets/image/photo_site/ekaterina-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/ekaterina-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-[13]">
            <Image
              src="/assets/image/photo_site/aleksandr-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/aleksandr-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-[14]">
            <h2 className="mb-10">АЛЕКСАНДР СЫЧУГОВ</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>

          <div className="flex flex-col justify-center w-3/4 mx-auto order-[16] lg:order-[15]">
            <h2 className="mb-10">ЕЛИЗАВЕТА РУНОВА</h2>
            <p className="text-xl font-light mb-5">
              Мастер спорта по чирлидингу, чемпионка Европы, танцовщица, модель.
            </p>
            <iframe
              src="https://vk.com/video_ext.php?oid=-50064307&id=456239116&hash=9537bf0d7ee39c68&hd=2"
              width="100%"
              height="320px"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex w-full order-[15] lg:order-[16]">
            <Image
              src="/assets/image/photo_site/elizaveta-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/elizaveta-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>

          <div className="flex w-full order-[17]">
            <Image
              src="/assets/image/photo_site/anastasia-bnr_dv.jpg"
              blurDataURL="/assets/image/photo_site/anastasia-bnr_dv.jpg"
              width={1360}
              height={1704}
              alt="АРТУР ДАЛАЛОЯН"
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col justify-center w-3/4 mx-auto order-[18]">
            <h2 className="mb-10">АНАСТАСИЯ МАЛЫШЕВА</h2>
            <p className="text-xl font-light mb-5">
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
            ></iframe>
          </div>
        </div>
        <div className="relative w-full mt-10">
          <Image
            src="/assets/image/photo_site/low-bnr_dv.jpg"
            blurDataURL="/assets/image/photo_site/low-bnr_dv.jpg"
            width={2720}
            height={252}
            alt="welcome to club"
            placeholder="blur"
          />
          <div className="absolute top-[25%] -translate-y-[25%] left-[5%] ">
            <span className="block text-4xl text-white italic uppercase mb-2">
              Присоединяйся
            </span>
            <span className="block text-4xl text-lime-400 italic font-bold uppercase">
              к команде!
            </span>
          </div>
          <Link href="https://www.demix.ru/loyalty/">
            <a
              target="_blank"
              className="absolute top-[50%] -translate-y-[50%] right-[5%] py-2 px-4 bg-black/60 text-white font-bold uppercase rounded-lg hover:bg-lime-400 hover:text-gray-600 active:bg-lime-500 transition-all "
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
