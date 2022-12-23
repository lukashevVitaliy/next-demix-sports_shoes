import React, { memo, useContext, useMemo, useState } from 'react';
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
import Button from '../../components/button';
import { IProducts, IReviews } from '../../types/models';

interface IProps {
  product: IProducts;
  reviews: IReviews[];
}

const FemaleShoesItemPage = memo(({ product, reviews }: IProps) => {
  const [activeSizes, setActiveSizes] = useState<boolean>(false);
  const { state, dispatch } = useContext(Store);
  const [modalReview, setModalReview] = useState<boolean>(false);
  const router = useRouter();

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
  } = product;

  const reviewsItems = useMemo(
    () => reviews.filter((item) => item.slug === slug),
    [reviews, slug]
  );

  if (!product) {
    return (
      <Layout title="Товар не найден...">
        <div className="container mx-auto px-4">
          <h5>Товар не найден...</h5>discommenddiscommend
        </div>
      </Layout>
    );
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? Number(existItem.quantity) + 1 : 1;

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
          rating,
          images,
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
      <Breadcrumbs
        title="Обувь для женщин"
        path="/female-shoes"
        title2={name}
      />
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 grid-flow-row lg:gap-x-10 gap-y-5 lg:grid-cols-3">
          <div className="col-span-2 flex justify-center">
            <SliderItemShoes images={images} />
          </div>
          <div>
            <h3 className="text-xl xl:text-2xl 2xl:text-3xl text-center uppercase mb-2">
              {name}
            </h3>
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
                  {Intl.NumberFormat().format(priceOld)}&nbsp;{currency}
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

            <Button title="В Корзину" onClick={addToCartHandler} addClass="" />

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
        {reviewsItems.length > 0 ? (
          <SliderReviews reviewsItems={reviewsItems} reviews={reviews} />
        ) : (
          <h5 className="text-gray-400">Отзывов пока нет...</h5>
        )}

        <ModalReview
          slug={slug}
          name={name}
          active={modalReview}
          onClose={onClose}
        />

        <Button
          title="Написать отзыв"
          onClick={openModalReview}
          addClass="md:w-1/4"
        />
      </div>
    </Layout>
  );
});

FemaleShoesItemPage.displayName = 'FemaleShoesItemPage';
export default FemaleShoesItemPage;

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
