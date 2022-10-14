import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import SliderReviews from '../../components/sliders/slider-reviews';
import { useRouter } from 'next/router';
import { products } from '../../utils/products';
import SliderItemShoes from '../../components/sliders/slider-item-shoes';
import { Store } from '../../utils/store';

// interface Product {
//   shoes: {
//     id: string | undefined;
//     slug: string;
//     name: string;
//     category: string;
//     stockAvailability: boolean;
//     novelty: boolean;
//     discount: string | undefined;
//     rating: string | undefined;
//     colors: {
//       nameColor: string;
//       colorSheme1: string;
//       colorSheme2?: string;
//       images: string[];
//       sizesColors: {
//         size: number;
//         countInStock: number;
//       }[];
//     }[];
//     priceNew: number;
//     priceOld: number;
//     currency: string;
//     description?: {
//       title_1?: string | undefined;
//       text_1?: string | undefined;
//       title_2?: string | undefined;
//       text_2?: string | undefined;
//       title_3?: string | undefined;
//       text_3?: string | undefined;
//       title_4?: string | undefined;
//       text_4?: string | undefined;
//       title_5?: string | undefined;
//       text_5?: string | undefined;
//       title_6?: string | undefined;
//       text_6?: string | undefined;
//       title_7?: string | undefined;
//       text_7?: string | undefined;
//       title_8?: string | undefined;
//       text_8?: string | undefined;
//       title_9?: string | undefined;
//       text_9?: string | undefined;
//       title_10?: string | undefined;
//       text_10?: string | undefined;
//     };
//     gender: string | undefined;
//     sportType?: string | undefined;
//     coverage?: string | undefined;
//     typeOfTraining?: string | undefined;
//     anatomicalInsole?: string | undefined;
//     reflectiveDetails?: string | undefined;
//     differenceSole?: string | undefined;
//     typeOfPronation?: string | undefined;
//     reinforcedBumper?: string | undefined;
//     season?: string | undefined;
//     warrantyPeriod?: string | undefined;
//     closure?: string | undefined;
//     feature?: string | undefined;
//     antibacteriaImpregnation?: string | undefined;
//     protectionFromMoisture?: string | undefined;
//     materialUpper?: string | undefined;
//     materialLining?: string | undefined;
//     materialSole?: string | undefined;
//     countryOfManufacture?: string | undefined;
//     enrblast?: boolean;
//     cushfoam?: boolean;
//     flexzone360?: boolean;
//   };
// }

const MaleShoesItemPage = () => {
  // const [activeColors, setActiveColors] = useState(false);
  const [activeSizes, setActiveSizes] = useState(false);

  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;
  const product = products.shoes.find((x) => x.slug === slug);

  if (!product) {
    return (
      <Layout title="Товар не найден...">
        <div className="container mx-auto px-4">
          <h5>Товар не найден...</h5>
        </div>
      </Layout>
    );
  }

  const {
    name,
    // category,
    // stockAvailability,
    // novelty,
    // discount,
    rating,
    // nameColor,
    // colorSheme1,
    // colorSheme2,
    images,
    sizesColors,
    priceNew,
    priceOld,
    currency,
    description,
    gender,
    sportType,
    coverage,
    typeOfTraining,
    anatomicalInsole,
    reflectiveDetails,
    differenceSole,
    typeOfPronation,
    reinforcedBumper,
    season,
    warrantyPeriod,
    closure,
    feature,
    antibacteriaImpregnation,
    protectionFromMoisture,
    materialUpper,
    materialLining,
    materialSole,
    countryOfManufacture,
    enrblast,
    cushfoam,
    flexzone360,
  } = product;

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (activeSizes) {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity, activeSizes },
      });
    }
  };

  return (
    <Layout title="Позиция обуви">
      <Breadcrumbs title="Обувь для мужчин" path="/male-shoes" title2={name} />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 grid-flow-row gap-x-10 gap-y-5 md:grid-cols-3">
          <div className="col-span-2 flex justify-center">
            <SliderItemShoes images={images} />
          </div>
          <div className="">
            <h3 className="text-center uppercase mb-2">{name}</h3>
            <div className="w-4/5 mx-auto flex justify-end text-sm text-lime-400  mb-5">
              <p className="mr-2">{rating}</p>
              <p>
                <span>113</span> отзывов
              </p>
            </div>
            <div className="w-4/5 mx-auto flex flex-col  text-left mb-5">
              <p className="text-4xl text-right text-gray-600 font-bold">
                {priceNew} {currency}
              </p>
              {priceOld > 0 && (
                <p className="text-2xl text-right font-bold text-red-600 line-through">
                  {priceOld} {currency}
                </p>
              )}
            </div>
            <div className="w-4/5 mx-auto">
              {/* <Disclosure>
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
                              {colors.map(({ nameColor }) => (
                                <RadioGroup.Option
                                  key={nameColor}
                                  value={nameColor}
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
                                              {nameColor}
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
              </Disclosure> */}
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
                              {sizesColors.map(({ size, countInStock }) => (
                                <RadioGroup.Option
                                  key={size}
                                  value={size}
                                  disabled={countInStock === 0}
                                  className={({ active, checked, disabled }) =>
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
																${disabled ? 'ring-2 ring-red-100 bg-red-100' : ''}
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
                                                  : 'text-gray-600'
                                              }`}
                                            >
                                              {size}
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

                              {/* {colors.map((item) => {
                                const sizeArr = item.sizesColors.map(
                                  ({ size, countInStock }) => (
                                    <RadioGroup.Option
                                      key={size}
                                      value={size}
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
                                                  {size}
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
                                  )
                                );
                                return sizeArr;
                                // (
                                //   <RadioGroup.Option
                                //     key={i}
                                //     value={sizeArr.length}
                                //     className={({ active, checked }) =>
                                //       `${
                                //         active
                                //           ? 'ring-2 ring-lime-400 ring-offset-1 ring-offset-white'
                                //           : ''
                                //       }
                                // ${
                                //   checked
                                //     ? 'bg-gradient-to-r from-black/80 via-gray-200 to-lime-400 text-gray-400'
                                //     : 'bg-transparent'
                                // }
                                //   relative flex cursor-pointer rounded-lg px-4 py-2 focus:outline-none`
                                //     }
                                //   >
                                //     {({ checked }) => (
                                //       <>
                                //         <div className="flex w-full items-center justify-between">
                                //           <div className="flex items-center">
                                //             <div className="text-sm">
                                //               <RadioGroup.Label
                                //                 as="p"
                                //                 className={`font-medium tracking-wider  ${
                                //                   checked
                                //                     ? 'text-gray-200'
                                //                     : 'text-gray-400'
                                //                 }`}
                                //               >
                                //                 {sizeArr}
                                //               </RadioGroup.Label>
                                //             </div>
                                //           </div>
                                //           {checked && (
                                //             <div className="shrink-0 text-gray-700">
                                //               <MdCheckCircle className="h-6 w-6" />
                                //             </div>
                                //           )}
                                //         </div>
                                //       </>
                                //     )}
                                //   </RadioGroup.Option>
                                // );
                              })} */}
                            </div>
                          </RadioGroup>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>

            <button
              onClick={addToCartHandler}
              className="block mx-auto mt-10 py-2 w-1/2 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all"
            >
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
                      <span className="w-5/6 tracking-widest">
                        {description?.title_1}
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
                        <div className="w-full">
                          <p className="text-sm text-gray-600 mb-2">
                            {description?.text_1}
                          </p>

                          {description?.title_2 && description?.text_2 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_2}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_2}
                              </p>
                            </div>
                          )}
                          {description?.title_3 && description?.text_3 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_3}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_3}
                              </p>
                            </div>
                          )}
                          {description?.title_4 && description?.text_4 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_4}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_4}
                              </p>
                            </div>
                          )}
                          {description?.title_5 && description?.text_5 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_5}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_5}
                              </p>
                            </div>
                          )}
                          {description?.title_6 && description?.text_6 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_6}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_6}
                              </p>
                            </div>
                          )}
                          {description?.title_7 && description?.text_7 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_7}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_7}
                              </p>
                            </div>
                          )}
                          {description?.title_8 && description?.text_8 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_8}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_8}
                              </p>
                            </div>
                          )}
                          {description?.title_9 && description?.text_9 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_9}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_9}
                              </p>
                            </div>
                          )}
                          {description?.title_10 && description?.text_10 && (
                            <div className="mb-2">
                              <h5 className="mb-1">{description?.title_10}</h5>
                              <p className="text-sm text-gray-600">
                                {description?.text_10}
                              </p>
                            </div>
                          )}
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
                              {gender ? (
                                <tr>
                                  <td className="align-top font-bold">Пол</td>
                                  <td className="text-right align-bottom">
                                    {gender}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">Пол</td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {sportType ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Вид спорта
                                  </td>
                                  {}
                                  <td className="text-right align-bottom">
                                    {sportType}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Вид спорта
                                  </td>
                                  {}
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {coverage ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Покрытие
                                  </td>
                                  <td className="text-right align-bottom">
                                    {coverage}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Покрытие
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {typeOfTraining ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Вид тренировки
                                  </td>
                                  <td className="text-right align-bottom">
                                    {typeOfTraining}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Вид тренировки
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {anatomicalInsole ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Анатомическая стелька
                                  </td>
                                  <td className="text-right align-bottom">
                                    {anatomicalInsole}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Анатомическая стелька
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {reflectiveDetails ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Светоотражающие детали
                                  </td>
                                  <td className="text-right align-bottom">
                                    {reflectiveDetails}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Светоотражающие детали
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {differenceSole ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Перепад высоты подошвы
                                  </td>
                                  <td className="text-right align-bottom">
                                    {differenceSole}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Перепад высоты подошвы
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {typeOfPronation ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Тип пронации
                                  </td>
                                  <td className="text-right align-bottom">
                                    {typeOfPronation}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Тип пронации
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {reinforcedBumper ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Усиленный бампер
                                  </td>
                                  <td className="text-right align-bottom">
                                    {reinforcedBumper}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Усиленный бампер
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {season ? (
                                <tr>
                                  <td className="align-top font-bold">Сезон</td>
                                  <td className="text-right align-bottom">
                                    {season}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">Сезон</td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {warrantyPeriod ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Гарантийный период
                                  </td>
                                  <td className="text-right align-bottom">
                                    {warrantyPeriod}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Гарантийный период
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {closure ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Застежка
                                  </td>
                                  <td className="text-right align-bottom">
                                    {closure}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Застежка
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {feature ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Особенность
                                  </td>
                                  <td className="text-right align-bottom">
                                    {feature}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Особенность
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {antibacteriaImpregnation ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Антибактериальная пропитка
                                  </td>
                                  <td className="text-right align-bottom">
                                    {antibacteriaImpregnation}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Антибактериальная пропитка
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {protectionFromMoisture ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Защита от влаги
                                  </td>
                                  <td className="text-right align-bottom">
                                    {protectionFromMoisture}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Защита от влаги
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {materialUpper ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал верха
                                  </td>
                                  <td className="text-right align-bottom">
                                    {materialUpper}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал верха
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {materialLining ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал подкладки
                                  </td>
                                  <td className="text-right align-bottom">
                                    {materialLining}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал подкладки
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {materialSole ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал подошвы
                                  </td>
                                  <td className="text-right align-bottom">
                                    {materialSole}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Материал подошвы
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {countryOfManufacture ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Страна производства
                                  </td>
                                  <td className="text-right align-bottom">
                                    {countryOfManufacture}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Страна производства
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {enrblast ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Enrblast
                                  </td>
                                  <td className="text-right align-bottom">
                                    {enrblast}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Enrblast
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {cushfoam ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Cushfoam
                                  </td>
                                  <td className="text-right align-bottom">
                                    {cushfoam}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Cushfoam
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}

                              {flexzone360 ? (
                                <tr>
                                  <td className="align-top font-bold">
                                    Flexzone360
                                  </td>
                                  <td className="text-right align-bottom">
                                    {flexzone360}
                                  </td>
                                </tr>
                              ) : (
                                <tr>
                                  <td className="align-top font-bold">
                                    Flexzone360
                                  </td>
                                  <td className="text-right align-bottom">-</td>
                                </tr>
                              )}
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
