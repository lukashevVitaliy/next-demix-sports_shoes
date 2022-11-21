import React, { FC, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Disclosure, RadioGroup, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import SliderReviews from '../../components/sliders/slider-reviews';
import Breadcrumbs from '../../components/breadcrumbs';
import Layout from '../../components/layout';
import SliderItemShoes from '../../components/sliders/slider-item-shoes';
import { Store } from '../../utils/store';
import db from '../../utils/db';
import Product from '../../models/Product';
import ModalReview from '../../components/modal/modal-review';
import Review from '../../models/Review';
import { enumerate } from '../../components/utils';

interface IProps {
  product: any;
  reviews: {
    _id: string;
    slug: string;
    name: string;
    aboutProduct: string;
    advantage: string;
    disadvantages: string;
    nameUser: string;
    userCity: string;
    impression: string;
    reliability: string;
    functionality: string;
    quality: string;
    photoMatching: string;
    recommend: boolean;
    discommend: boolean;
    periodOfUseUser: string;
    frequencyOfUseUser: string;
    policyData: boolean;
    createdAt: string;
  }[];
}

interface IPropsProduct {
  _id: string | undefined;
  slug: string;
  name: string;
  category: string;
  stockAvailability: boolean;
  novelty: boolean;
  discount: string | undefined;
  rating: string | undefined;
  nameColor: string;
  colorSheme1: string;
  colorSheme2?: string;
  images: string[];
  sizesColors: {
    size: number;
    countInStock: number;
  }[];
  priceNew: number;
  priceOld: number;
  currency: string;
  description?: {
    title_1?: string | undefined;
    text_1?: string | undefined;
    title_2?: string | undefined;
    text_2?: string | undefined;
    title_3?: string | undefined;
    text_3?: string | undefined;
    title_4?: string | undefined;
    text_4?: string | undefined;
    title_5?: string | undefined;
    text_5?: string | undefined;
    title_6?: string | undefined;
    text_6?: string | undefined;
    title_7?: string | undefined;
    text_7?: string | undefined;
    title_8?: string | undefined;
    text_8?: string | undefined;
    title_9?: string | undefined;
    text_9?: string | undefined;
    title_10?: string | undefined;
    text_10?: string | undefined;
  };
  gender: string | undefined;
  sportType?: string | undefined;
  coverage?: string | undefined;
  typeOfTraining?: string | undefined;
  anatomicalInsole?: string | undefined;
  reflectiveDetails?: string | undefined;
  differenceSole?: string | undefined;
  typeOfPronation?: string | undefined;
  reinforcedBumper?: string | undefined;
  season?: string | undefined;
  warrantyPeriod?: string | undefined;
  closure?: string | undefined;
  feature?: string | undefined;
  antibacteriaImpregnation?: string | undefined;
  protectionFromMoisture?: string | undefined;
  materialUpper?: string | undefined;
  materialLining?: string | undefined;
  materialSole?: string | undefined;
  countryOfManufacture?: string | undefined;
  enrblast?: boolean;
  cushfoam?: boolean;
  flexzone360?: boolean;
}

const MaleShoesItemPage: FC<IProps> = ({ product, reviews }) => {
  const [activeSizes, setActiveSizes] = useState(false);
  const { state, dispatch } = useContext(Store);
  const [modalReview, setModalReview] = useState(false);
  const router = useRouter();

  if (!product) {
    return (
      <Layout title="Товар не найден...">
        <div className="container mx-auto px-4">
          <h5>Товар не найден...</h5>discommenddiscommend
        </div>
      </Layout>
    );
  }

  const {
    _id,
    slug,
    name,
    rating,
    nameColor,
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
  }: IPropsProduct = product;

  const reviewsItems = reviews.filter((item) => item.slug === slug);

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find(
      (x: any) => x.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const imageItem = images[0];

    if (!activeSizes) {
      return toast.info('Выберите размер обуви...');
    }
    // удостовериться о фактическом наличии товара в БД
    const { data } = await axios.get(`/api/products/${_id}`);
    const { sizesColors } = data;
    const selectedProduct = sizesColors.find(
      (item: any) => item.size === activeSizes
    );
    const stokModelSize = selectedProduct.countInStock;

    if (!stokModelSize) {
      return toast.info('Данный размер обуви, недоступен...');
    }

    if (activeSizes && stokModelSize) {
      dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
          _id,
          slug,
          name,
          nameColor,
          imageItem,
          sizesColors,
          priceNew,
          priceOld,
          gender,
          currency,
          quantity,
          activeSizes,
        },
      });
    }
    router.push('/cart');
  };

  const onClose = () => {
    setModalReview(false);
  };
  const openModalReview = () => {
    setModalReview(true);
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
                <span>{reviewsItems.length}</span>&nbsp;
                {enumerate(reviewsItems.length, ['отзыв', 'отзыва', 'отзывов'])}
              </p>
            </div>
            <div className="w-4/5 mx-auto flex flex-col  text-left mb-5">
              <p className="text-4xl text-right text-gray-600 font-bold">
                {Intl.NumberFormat().format(priceNew)}&nbsp;{currency}
              </p>
              {priceOld > 0 && (
                <p className="text-2xl text-right font-bold text-red-600 line-through">
                  {Intl.NumberFormat().format(priceNew)}&nbsp;{currency}
                </p>
              )}
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
                          <table className="border-separate border-spacing-y-2 w-full">
                            <tbody>
                              {gender && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Пол
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {gender}
                                  </td>
                                </tr>
                              )}

                              {sportType && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Вид спорта
                                  </td>
                                  {}
                                  <td className="text-right align-bottom w-1/2">
                                    {sportType}
                                  </td>
                                </tr>
                              )}

                              {coverage && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Покрытие
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {coverage}
                                  </td>
                                </tr>
                              )}

                              {typeOfTraining && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Вид тренировки
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {typeOfTraining}
                                  </td>
                                </tr>
                              )}

                              {anatomicalInsole && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Анатомическая стелька
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {anatomicalInsole}
                                  </td>
                                </tr>
                              )}

                              {reflectiveDetails && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Светоотражающие детали
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {reflectiveDetails}
                                  </td>
                                </tr>
                              )}

                              {differenceSole && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Перепад высоты подошвы
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {differenceSole}
                                  </td>
                                </tr>
                              )}

                              {typeOfPronation && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Тип пронации
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {typeOfPronation}
                                  </td>
                                </tr>
                              )}

                              {reinforcedBumper && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Усиленный бампер
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {reinforcedBumper}
                                  </td>
                                </tr>
                              )}

                              {season && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Сезон
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {season}
                                  </td>
                                </tr>
                              )}

                              {warrantyPeriod && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Гарантийный период
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {warrantyPeriod}
                                  </td>
                                </tr>
                              )}

                              {closure && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Застежка
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {closure}
                                  </td>
                                </tr>
                              )}

                              {feature && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Особенность
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {feature}
                                  </td>
                                </tr>
                              )}

                              {antibacteriaImpregnation && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Антибактериальная пропитка
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {antibacteriaImpregnation}
                                  </td>
                                </tr>
                              )}

                              {protectionFromMoisture && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Защита от влаги
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {protectionFromMoisture}
                                  </td>
                                </tr>
                              )}

                              {materialUpper && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Материал верха
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {materialUpper}
                                  </td>
                                </tr>
                              )}

                              {materialLining && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Материал подкладки
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {materialLining}
                                  </td>
                                </tr>
                              )}

                              {materialSole && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Материал подошвы
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {materialSole}
                                  </td>
                                </tr>
                              )}

                              {countryOfManufacture && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Страна производства
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    {countryOfManufacture}
                                  </td>
                                </tr>
                              )}

                              {enrblast && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Enrblast
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    да
                                  </td>
                                </tr>
                              )}

                              {cushfoam && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Cushfoam
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    да
                                  </td>
                                </tr>
                              )}

                              {flexzone360 && (
                                <tr>
                                  <td className="align-top font-bold w-1/2">
                                    Flexzone360
                                  </td>
                                  <td className="text-right align-bottom w-1/2">
                                    да
                                  </td>
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
        <SliderReviews reviewsItems={reviewsItems} reviews={reviews} />

        <ModalReview
          slug={slug}
          name={name}
          active={modalReview}
          onClose={onClose}
        />

        <button
          className="block mx-auto mt-10 py-2 w-1/4 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all"
          onClick={openModalReview}
        >
          Написать отзыв
        </button>
      </div>
    </Layout>
  );
};

export default MaleShoesItemPage;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  const reviews = await Review.find().lean();
  await db.disconnect();

  return {
    props: {
      product: product && JSON.parse(JSON.stringify(product)),
      reviews: reviews && JSON.parse(JSON.stringify(reviews)),
    },
  };
}
