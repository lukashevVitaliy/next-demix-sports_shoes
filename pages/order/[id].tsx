import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Layout from '../../components/layout';
import { getError } from '../../utils/error';
import Link from 'next/link';
import Image from 'next/image';

const theadTable = [
  { title: 'Фото' },
  { title: 'Название' },
  { title: 'Цвет' },
  { title: 'Размер' },
  { title: 'Количество' },
  { title: 'Цена' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': {
      return { ...state, loading: true, error: '' };
    }
    case 'FETCH_SUCCESS': {
      return { ...state, loading: false, order: action.payload, error: false };
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

const OrderItemPage = () => {
  const { query } = useRouter();
  const orderId = query.id;

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/${orderId}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (!order._id || order._id !== orderId) {
      fetchOrder();
    }
  }, [order, orderId]);

  const {
    ordersItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    isPaid,
    isDelivered,
    paidAt,
    deliveredAt,
  } = order;

  return (
    <Layout title={`Заказ № ${orderId}`}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl lg:text-3xl text-lime-400 mb-4">{`Заказ № ${orderId}`}</h3>
        {loading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div className="alert-error">{error}</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-5">
            <div className="overflow-x-auto md:col-span-3">
              <div className="border border-gray-200 shadow-md rounded py-2 px-4 mb-5 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl mb-5">Адрес Доставки</h5>
                <div className="text-gray-400 mb-2">
                  {shippingAddress.fullName}, {shippingAddress.address},{' '}
                  {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                  {shippingAddress.country}
                </div>
                {isDelivered ? (
                  <div className="alert-success">Доставлено {deliveredAt}</div>
                ) : (
                  <div className="alert-error">Не доставлено</div>
                )}
              </div>
              <div className="border border-gray-200 shadow-md rounded py-2 px-4 mb-5 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl mb-5">Способ Оплаты</h5>
                <div className="text-gray-400 mb-2">{paymentMethod}</div>
                {isPaid ? (
                  <div className="alert-success">Оплачено {paidAt}</div>
                ) : (
                  <div className="alert-error">Не оплачено</div>
                )}
              </div>
              <div className="border border-gray-200 shadow-md rounded py-2 px-4 pb-1 hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
                <h5 className="text-base lg:text-xl">Ваш Заказ</h5>
                <div className="">
                  <table className="min-w-full grid md:hidden">
                    <thead className="border-b-2 border-lime-400"></thead>
                    <tbody>
                      {ordersItems.map((item) => {
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
                      {ordersItems.map((item) => {
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
              </div>
            </div>
            <div className="p-5 mb-5 border shadow-md border-gray-200 rounded hover:shadow-lime-400 hover:border-lime-400 hover:scale-[99%] transition-all">
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

OrderItemPage.auth = true;
export default OrderItemPage;
