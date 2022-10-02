import { NextPage } from 'next';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const ShopsPage: NextPage = () => {
  return (
    <Layout title="Shops">
      <Breadcrumbs title="Shops" path="/shops" title2="" />
      <div className="container mx-auto px-4">
        <h3 className="mb-10">контакты магазинов</h3>
        <div className="grid grid-cols-1 grid-flow-row gap-y-3 lg:grid-cols-2">
          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-lime-400">
            <div>
              <h5 className="text-gray-600 mb-5">ТЦ &quot;ВЕГАС&quot;</h5>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Адрес:</span> г. Москва, МКАД 24 км,
                вл.1
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Режим работы:</span> 10:00-23:00
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Метро:</span> Домодедовская
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.9230776510026!2d37.717629716096624!3d55.58594701231562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab1bd723d6891%3A0x553456920f58eda7!2z0JzQmtCQ0JQgMjQg0LrQvCwgMSwg0JzQvtGB0LrQstCwLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MjcxNQ!5e0!3m2!1sru!2s!4v1664178028063!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-black/70">
            <div>
              <h5 className=" lg:text-gray-200 mb-2">
                ТЦ &quot;ГАГАРИНСКИЙ&quot;
              </h5>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Адрес:</span> г. Москва, ул.
                Вавилова, д.3
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Метро:</span> Ленинский проспект,
                Площадь Гагарина (МЦК)
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.9675539504046!2d37.587724136076176!3d55.70693574076186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54c823862e601%3A0xd549a1e8754c37ff!2z0KLQoNCmIMKr0JPQsNCz0LDRgNC40L3RgdC60LjQucK7!5e0!3m2!1sru!2s!4v1664178582914!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-lime-400">
            <div>
              <h5 className="text-gray-600 mb-5">ТЦ &quot;ЛАДЬЯ&quot;</h5>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Адрес:</span> г. Москва, ул.
                Дубравная, д.34/29
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Метро:</span> Митино
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.929584015311!2d37.355917016103916!3d55.84653659222593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54705e12bd91b%3A0xa5e8818f6b7e3e80!2z0KLQoNCmICLQm9Cw0LTRjNGPIg!5e0!3m2!1sru!2s!4v1664181046231!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-black/70">
            <div>
              <h5 className=" lg:text-gray-200 mb-2">
                ТЦ &quot;СИТИ ПЛАЗА&quot;
              </h5>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Адрес:</span> г. Сочи, Адлер, ул.
                Кирова, д.58
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Режим работы:</span> 10:00-21:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.5574776655453!2d39.92489101578864!3d43.428071674976614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5bfc3815e96a5%3A0xd0c4d5577bbee9d1!2z0KLQoNCmIENpdHkgUGxhemE!5e0!3m2!1sru!2s!4v1664181322622!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-lime-400">
            <div>
              <h5 className="text-gray-600 mb-5">ТЦ &quot;OZ МОЛЛ&quot;</h5>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Адрес:</span> г. Краснодар, ул.
                Крылатая, д.2
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.670113287057!2d39.11983391582483!3d45.011320571567914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f05a6cf5612691%3A0xcfdaa733ecd6055e!2zT1og0JzQntCb0Js!5e0!3m2!1sru!2s!4v1664181511073!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-black/70">
            <div>
              <h5 className=" lg:text-gray-200 mb-2">
                ТЦ &quot;АЭРО ПАРК&quot;
              </h5>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Адрес:</span>г. Брянск, ул.
                Объездная, д.30
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.7966440494015!2d34.314806916032914!3d53.275263187734005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412d596dce4aee57%3A0x3738c8f82026d625!2z0JDQrdCg0J4g0J_QkNCg0Jo!5e0!3m2!1sru!2s!4v1664181634729!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-lime-400">
            <div>
              <h5 className="text-gray-600 mb-5">ТЦ &quot;ИЮНЬ&quot;</h5>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Адрес:</span> г. Красногорск, ул.
                Знаменская, д.5
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.52593430565!2d37.34512981610311!3d55.81883009436478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b547611e6628f7%3A0x3602767698dd0b2c!2z0JjRjtC90Yw!5e0!3m2!1sru!2s!4v1664182121344!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-black/70">
            <div>
              <h5 className=" lg:text-gray-200 mb-2">
                ТЦ &quot;КРАСНЫЙ КИТ&quot;
              </h5>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Адрес:</span>г. Мытищи, пр.
                Шараповский, вл. 2, стр. 3
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 lg:text-gray-200 mb-1">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.8931019554752!2d37.75610341610605!3d55.91655388681769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53196e02ed029%3A0x21b07517e9bf2e22!2z0KLQoNCaINCa0YDQsNGB0L3Ri9C5INC60LjRgg!5e0!3m2!1sru!2s!4v1664182251695!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="px-6 py-3 lg:px-20 lg:py-0 lg:flex lg:items-center border-b border-gray-400 lg:border-0 lg:bg-lime-400">
            <div>
              <h5 className="text-gray-600 mb-5">
                ТЦ &quot;СЧАСТЛИВАЯ 7Я&quot;
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Адрес:</span> г. Сергиев Посад, ул.
                Вознесенская, д.32а
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Телефон:</span> +7 (495) 777-77-57
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-bold">Режим работы:</span> 10:00-22:00
              </p>
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.477999610228!2d38.13105261611686!3d56.30432315678694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b4c44d16e3d4c1%3A0x3ad0b97df704b49c!2z0KLQpiDQodGH0LDRgdGC0LvQuNCy0LDRjyA30Y8!5e0!3m2!1sru!2s!4v1664182350822!5m2!1sru!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopsPage;
