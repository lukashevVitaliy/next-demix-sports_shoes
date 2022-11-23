import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ChekoutWizard from '../components/chekout-wizard';
import Cookies from 'js-cookie';

import { Store } from '../utils/store';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';

const theadTable = [
  { title: 'Фото' },
  { title: 'Название' },
  { title: 'Цвет' },
  { title: 'Размер' },
  { title: 'Количество' },
  { title: 'Цена' },
];

const PlaceOrderPage = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const router = useRouter();

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  // стоимость товара
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.priceNew, 0)
  ); // 123.45
  // стоимость доставки
  const shippingPrice = itemsPrice > 9000 ? 0 : 800;
  // налог
  const taxPrice = round2(itemsPrice * 0.1);
  // итоговая стоимость всего
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment');
    }
  }, [paymentMethod, router]);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('api/orders', {
        ordersItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: 'CART_CLEAR_ITEMS' });
      Cookies.set(
        'cart',
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      );

      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Оформление Заказа">
      <ChekoutWizard activeStep={3} />
      <div className="container mx-auto px-4">
        <h3 className="text-2xl lg:text-3xl text-lime-400 mb-5">
          Оформление Заказа
        </h3>
        {cartItems.length === 0 ? (
          <div>
            Корзина пуста. Перейти на{' '}
            <Link href="/">
              <a className="text-gray-400 font-bold hover:text-lime-400 transition-all">
                Главную страницу
              </a>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-5">
            <div className="overflow-auto md:col-span-3">
              <div className="border border-gray-200 shadow-md rounded py-2 px-4 mb-5 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl mb-5">Адрес Доставки</h5>
                <div className="text-gray-400 mb-2">
                  {shippingAddress.fullName}, {shippingAddress.address},{' '}
                  {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                  {shippingAddress.country}
                </div>
                <div>
                  <Link href="/shipping">
                    <a className="text-lime-400 hover:text-red-500 active:text-red-600 transition-all">
                      Редактировать
                    </a>
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 shadow-md rounded py-2 px-4 mb-5 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl mb-5">Способ Оплаты</h5>
                <div className="text-gray-400 mb-2">{paymentMethod}</div>
                <div>
                  <Link href="/payment">
                    <a className="text-lime-400 hover:text-red-500 active:text-red-600 transition-all">
                      Редактировать
                    </a>
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 shadow-md rounded py-2 px-4 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl mb-5">Ваш Заказ</h5>

                <div className="">
                  <table className="min-w-full grid md:hidden">
                    <thead className="border-b-2 border-lime-400"></thead>
                    <tbody>
                      {cartItems.map((item) => {
                        let urlGender;
                        if (item.gender === 'Мужчины') {
                          urlGender = '/male-shoes/';
                        } else if (item.gender === 'Женщины') {
                          urlGender = '/female-shoes/';
                        }
                        return (
                          <div
                            key={item._id}
                            className="border-b my-5 w-[320px] mx-auto"
                          >
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                                {theadTable[0].title}
                              </td>
                              <td className="flex justify-center">
                                <Link href={`${urlGender}${item.slug}`}>
                                  <a className="flex w-[100px]">
                                    <Image
                                      src={item.imageItem}
                                      blurDataURL={item.imageItem}
                                      width={100}
                                      height={100}
                                      alt={item.name}
                                      placeholder="blur"
                                      className="rounded-tl-[25%] rounded-br-[25%]"
                                    />
                                  </a>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-top pt-1 pr-5">
                                {theadTable[1].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.name}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                                {theadTable[2].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.nameColor}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                                {theadTable[3].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.activeSizes}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                                {theadTable[4].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.quantity}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                                {theadTable[5].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {
                                  <div className="">
                                    <p>
                                      {Intl.NumberFormat().format(
                                        item.quantity * item.priceNew
                                      )}{' '}
                                      {item.currency}
                                    </p>
                                    {item.priceOld > 0 && (
                                      <p className="text-gray-400 line-through">
                                        {Intl.NumberFormat().format(
                                          item.quantity * item.priceOld
                                        )}{' '}
                                        {item.currency}
                                      </p>
                                    )}
                                  </div>
                                }
                              </td>
                            </tr>
                          </div>
                        );
                      })}
                    </tbody>
                  </table>

                  <table className="min-w-full invisible hidden md:visible md:inline-table mb-2">
                    <thead className="h-10 border-b-2 border-lime-400 text-sm text-gray-400 tracking-wider uppercase">
                      <tr className="text-xs xl:text-sm">
                        <th></th>
                        <th>Название</th>
                        <th>Цвет</th>
                        <th>Размер</th>
                        <th>Количество</th>
                        <th>Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        let urlGender;
                        if (item.gender === 'Мужчины') {
                          urlGender = '/male-shoes/';
                        } else if (item.gender === 'Женщины') {
                          urlGender = '/female-shoes/';
                        }
                        return (
                          <tr
                            key={item._id}
                            className=" h-32 border-b text-xs uppercase tracking text-center "
                          >
                            <td className="text-left">
                              <Link href={`${urlGender}${item.slug}`}>
                                <a className="flex w-[100px]">
                                  <Image
                                    src={item.imageItem}
                                    blurDataURL={item.imageItem}
                                    width={100}
                                    height={100}
                                    alt={item.name}
                                    placeholder="blur"
                                    className="rounded-tl-[25%] rounded-br-[25%]"
                                  />
                                </a>
                              </Link>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.nameColor}</td>
                            <td>{item.activeSizes}</td>
                            <td>{item.quantity}</td>
                            <td>
                              <div className="">
                                <p>
                                  {Intl.NumberFormat().format(
                                    item.quantity * item.priceNew
                                  )}{' '}
                                  {item.currency}
                                </p>
                                {item.priceOld > 0 && (
                                  <p className="text-gray-400 line-through">
                                    {Intl.NumberFormat().format(
                                      item.quantity * item.priceOld
                                    )}{' '}
                                    {item.currency}
                                  </p>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div>
                  <Link href="/cart">
                    <a className="text-lime-400 hover:text-red-500 active:text-red-600 transition-all">
                      Редактировать
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-5 border shadow-md border-gray-200 rounded hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
              <h5 className="text-base xl:text-xl mb-5">Итого по заказу:</h5>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Заказ</div>
                    <div>{Intl.NumberFormat().format(itemsPrice)} ₽</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Налог</div>
                    <div>{Intl.NumberFormat().format(taxPrice)} ₽</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Доставка</div>
                    <div>{Intl.NumberFormat().format(shippingPrice)} ₽</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between border-t-2 border-lime-400 font-bold">
                    <div>Итого:</div>
                    <div>{Intl.NumberFormat().format(totalPrice)} ₽</div>
                  </div>
                </li>
                <li className="mt-5 flex justify-center">
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="block py-2 w-1/2 bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all"
                  >
                    {loading ? 'Загрузка...' : 'Заказать'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

PlaceOrderPage.auth = true;
export default PlaceOrderPage;
