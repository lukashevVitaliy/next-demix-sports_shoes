import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SliderIdShoes from '../../components/sliders/slider-id-shoes';
import SliderReviews from '../../components/sliders/slider-reviews';

const colors = ['черный', 'белый', 'бежевый'];
const sizes = [39, 40, 41, 42, 43, 44, 45, 46, 47];

const MaleShoesItemPage = () => {
  const [activeColors, setActiveColors] = useState(false);
  const [activeSizes, setActiveSizes] = useState(false);

  return (
    <Layout title="Позиция обуви">
      <Breadcrumbs
        title="Обувь для мужчин"
        path="/male-shoes/slug"
        title2="Позиция обуви"
      />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 grid-flow-row gap-x-10 gap-y-5 md:grid-cols-3">
          <div className="col-span-2">
            <SliderIdShoes />
          </div>
          <div className="">
            <h3 className="text-center mb-2">КРОССОВКИ МУЖСКИЕ TSUNAMI 4 NY</h3>
            <div className="w-4/5 mx-auto flex justify-end text-sm text-lime-400  mb-5">
              <p className="mr-2">★★★★★</p>
              <p>
                <span>113</span> отзывов
              </p>
            </div>
            <div className="w-4/5 mx-auto flex flex-col  text-left mb-5">
              <p className="text-4xl text-right text-gray-600 font-bold">
                2 500 P
              </p>
              <p className="text-2xl text-right font-bold text-red-600 line-through">
                3 000 P
              </p>
            </div>
            <div className="w-4/5 mx-auto">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        open
                          ? 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider py-3 uppercase'
                          : 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider border-b py-3 uppercase'
                      }
                    >
                      <span className="w-5/6 tracking-widest">Цвет:</span>
                      <BsChevronDown
                        className={
                          open ? 'rotate-180 transform transition-all' : ''
                        }
                        width={16}
                        height={16}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className=" border-b pb-3">
                        <div className="w-full">
                          <RadioGroup
                            value={activeColors}
                            onChange={setActiveColors}
                          >
                            <div className="space-y-2">
                              {colors.map((item) => (
                                <RadioGroup.Option
                                  key={item}
                                  value={item}
                                  className={({ active, checked }) =>
                                    `${
                                      active
                                        ? 'ring-2 ring-lime-400 ring-offset-1 ring-offset-white'
                                        : ''
                                    }
                  ${
                    checked
                      ? 'bg-gradient-to-r from-black/80 via-gray-200 to-lime-400 text-gray-400'
                      : 'bg-transparent'
                  }
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                                  }
                                >
                                  {({ checked }) => (
                                    <>
                                      <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                          <div className="text-sm">
                                            <RadioGroup.Label
                                              as="p"
                                              className={`font-medium tracking-wider  ${
                                                checked
                                                  ? 'text-gray-200'
                                                  : 'text-gray-400'
                                              }`}
                                            >
                                              {item}
                                            </RadioGroup.Label>
                                          </div>
                                        </div>
                                        {checked && (
                                          <div className="shrink-0 text-gray-700">
                                            <MdCheckCircle className="h-6 w-6" />
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        open
                          ? 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider py-3 uppercase'
                          : 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider border-b py-3 uppercase'
                      }
                    >
                      <span className="w-5/6 tracking-widest">Размер:</span>
                      <BsChevronDown
                        className={
                          open ? 'rotate-180 transform transition-all' : ''
                        }
                        width={16}
                        height={16}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className=" border-b pb-3">
                        <div className="w-full">
                          <RadioGroup
                            value={activeSizes}
                            onChange={setActiveSizes}
                          >
                            <div className="space-y-2">
                              {sizes.map((item) => (
                                <RadioGroup.Option
                                  key={item}
                                  value={item}
                                  className={({ active, checked }) =>
                                    `${
                                      active
                                        ? 'ring-2 ring-lime-400 ring-offset-1 ring-offset-white'
                                        : ''
                                    }
                  ${
                    checked
                      ? 'bg-gradient-to-r from-black/80 via-gray-200 to-lime-400 text-gray-400'
                      : 'bg-transparent'
                  }
                    relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                                  }
                                >
                                  {({ checked }) => (
                                    <>
                                      <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                          <div className="text-sm">
                                            <RadioGroup.Label
                                              as="p"
                                              className={`font-medium tracking-wider  ${
                                                checked
                                                  ? 'text-gray-200'
                                                  : 'text-gray-400'
                                              }`}
                                            >
                                              {item}
                                            </RadioGroup.Label>
                                          </div>
                                        </div>
                                        {checked && (
                                          <div className="shrink-0 text-gray-700">
                                            <MdCheckCircle className="h-6 w-6" />
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <button className="block mx-auto mt-10 py-2 w-1/2 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all">
              В Корзину
            </button>

            <div className="w-4/5 mx-auto mt-10">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        open
                          ? 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider py-3 uppercase'
                          : 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider border-b py-3 uppercase'
                      }
                    >
                      <span className="w-5/6 tracking-widest">Описание</span>
                      <BsChevronDown
                        className={
                          open ? 'rotate-180 transform transition-all' : ''
                        }
                        width={16}
                        height={16}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className=" border-b pb-3">
                        <div className="w-full">
                          <p className="text-sm text-gray-600 mb-2">
                            Для тех, кто хочет сохранить свой стиль и в холодное
                            время года, идеальным вариантом станут кроссовки
                            Unity Mid 2.
                          </p>
                          <h5 className="mb-1">СОХРАНЕНИЕ ТЕПЛА</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Флисовая подкладка обеспечивает надежную защиту от
                            холода.
                          </p>
                          <h5 className="mb-1">АМОРТИЗАЦИЯ</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Промежуточная подошва, изготовленная из упругого
                            материала ЭВА, снижает ударные нагрузки.
                          </p>
                          <h5 className="mb-1">СЦЕПЛЕНИЕ С ПОВЕРХНОСТЬЮ</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Резиновая подметка предотвращает скольжение.
                          </p>
                          <h5 className="mb-1"></h5>
                          <p className="text-sm text-gray-600 mb-2"></p>
                          <h5 className="mb-1"></h5>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={
                        open
                          ? 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider py-3 uppercase'
                          : 'flex items-center justify-between w-full text-xs text-gray-600 text-left tracking-wider border-b py-3 uppercase'
                      }
                    >
                      <span className="w-5/6 tracking-widest">
                        ХАРАКТЕРИСТИКИ
                      </span>
                      <BsChevronDown
                        className={
                          open ? 'rotate-180 transform transition-all' : ''
                        }
                        width={16}
                        height={16}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className=" border-b pb-3">
                        <div className="w-full text-sm text-gray-600">
                          <table className="border-collapse border-separate border-spacing-y-2">
                            <tbody>
                              <tr>
                                <td className="align-top font-bold">Пол</td>
                                <td className="text-right align-bottom">
                                  Мужчины
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Вид спорта
                                </td>
                                <td className="text-right align-bottom">Бег</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Покрытие
                                </td>
                                <td className="text-right align-bottom">
                                  Асфальт
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Вид тренировки
                                </td>
                                <td className="text-right align-bottom">
                                  Комфортный бег
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Анатомическая стелька
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Светоотражающие детали
                                </td>
                                <td className="text-right align-bottom">Да</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Перепад высоты подошвы
                                </td>
                                <td className="text-right align-bottom">
                                  Высокий (Более 9 мм)
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Тип пронации
                                </td>
                                <td className="text-right align-bottom">
                                  Гиперпронация
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Усиленный бампер
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">Сезон</td>
                                <td className="text-right align-bottom">
                                  Осень-зима
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Гарантийный период
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Застежка
                                </td>
                                <td className="text-right align-bottom">
                                  Шнуровка
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Особенность
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Антибактериальная пропитка
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Защита от влаги
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Материал верха
                                </td>
                                <td className="text-right align-bottom">
                                  71% полиэстер, 29% термопластичный полиуретан
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Материал подкладки
                                </td>
                                <td className="text-right align-bottom">
                                  100% полиэстер
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Материал подошвы
                                </td>
                                <td className="text-right align-bottom">
                                  Этиленвинилацетат, искусственная резина
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Страна производства
                                </td>
                                <td className="text-right align-bottom">
                                  Вьетнам
                                </td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Enrblast
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Cushfoam
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                              <tr>
                                <td className="align-top font-bold">
                                  Flexzone360
                                </td>
                                <td className="text-right align-bottom">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <h5 className="my-10 text-center">Отзывы покупателей</h5>
        <SliderReviews />
        <button className="block mx-auto mt-10 py-2 w-1/4 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all">
          Оставить отзыв
        </button>
      </div>
    </Layout>
  );
};

export default MaleShoesItemPage;
