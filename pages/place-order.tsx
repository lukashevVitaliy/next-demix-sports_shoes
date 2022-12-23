import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Cookies = require('js-cookie');
import ChekoutWizard from '../components/chekout-wizard';
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

  const round2 = (num: number) => Math.round(num * 100 + Number.EPSILON) / 100;
  // стоимость товара
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + Number(c.quantity) * Number(c.priceNew), 0)
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

                <div>
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
                        className="border-b md:border-hidden w-[320px] mx-auto"
                      >
                        <table className="min-w-full grid md:hidden text-sm">
                          <tbody className="mx-auto my-2">
                            <tr>
                              <td className="text-gray-400 tracking-wider align-middle pr-5">
                                {theadTable[0].title}
                              </td>
                              <td className="flex justify-center mb-2">
                                <Link href={`${urlGender}${item.slug}`}>
                                  <a className="flex w-[100px]">
                                    <Image
                                      src={item.images[0]}
                                      blurDataURL={
                                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
                                      }
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
                              <td className="text-gray-400 tracking-wider align-top pt-1 pr-5">
                                {theadTable[1].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.name}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-400 tracking-wider align-middle pr-5">
                                {theadTable[2].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.nameColor}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-400 tracking-wider align-middle pr-5">
                                {theadTable[3].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.activeSizes}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-400 tracking-wider align-middle pr-5">
                                {theadTable[4].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {item.quantity}
                              </td>
                            </tr>
                            <tr>
                              <td className="text-gray-400 tracking-wider align-middle pr-5">
                                {theadTable[5].title}
                              </td>
                              <td className="text-gray-600 text-center">
                                {
                                  <div className="">
                                    <p>
                                      {Intl.NumberFormat().format(
                                        Number(item.quantity) *
                                          Number(item.priceNew)
                                      )}{' '}
                                      {item.currency}
                                    </p>
                                    {item.priceOld > 0 && (
                                      <p className="text-gray-400 line-through">
                                        {Intl.NumberFormat().format(
                                          Number(item.quantity) *
                                            Number(item.priceOld)
                                        )}{' '}
                                        {item.currency}
                                      </p>
                                    )}
                                  </div>
                                }
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })}

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
                                    src={item.images[0]}
                                    blurDataURL={
                                      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjYuNjY3IiBoZWlnaHQ9IjI2Ni42NjciIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDUwMCAyMDAiPjxnIGZpbGw9IiNhM2U2MzUiPjxwYXRoIGQ9Ik00MS44IDU3LjJjLS4zLjcgNC44IDkuNiAxMS4zIDE5LjggMTIuOSAyMC4xIDEzLjggMjIuNiA5LjIgMjUuOS00LjcgMy41LTI0LjggMTUuOC0yNS4xIDE1LjYtLjItLjIgMi40LTUgNS43LTEwLjggNS43LTkuOCA1LjktMTAuNiA0LjgtMTMuNi0uNi0xLjctMS43LTMuMS0yLjMtMy4xLTEgMC01LjcgNS4xLTI5LjkgMzIuNEMtMy4yIDE0NC41LTMgMTQ0IDYuNSAxNDRjNS42IDAgOC44LS45IDIzLjMtNi40IDQ3LjctMTguNCA2NS4zLTI1LjQgNjcuNy0yNyAxLjQtLjkgMy4zLTMuMyA0LjItNS4yIDEuNi0zLjMgMS42LTMuNS0uMy02LjItMS4xLTEuNS02LjMtNi4zLTExLjUtMTAuNy01LjItNC40LTE2LTEzLjUtMjQtMjAuMkM1MiA1Ni40IDUxLjMgNTYgNDYuOSA1NmMtMi45IDAtNC45LjUtNS4xIDEuMnpNMTQ2LjIgODQuNWMtMS4yLjktMi45IDMtMy44IDQuNy0zIDUuOC0yLjkgNS44IDI0LjUgNS44IDEzLjcgMCAyNi4xLjQgMjcuNSAxIDMuNyAxLjQgNC42IDMuOCAzLjEgOC40LTEuOSA1LjQtNi40IDEwLjctMTEuMSAxMy4xLTMuMSAxLjYtNi41IDItMTcuNSAyLjNsLTEzLjcuNCA1LjUtMTAuNiA1LjQtMTAuNy0xMS4yLjMtMTEuMi4zLTcuNCAxNGMtNC41IDguNi03LjIgMTUtNy4xIDE2LjVsLjMgMi41IDI0LjUuM2MyNy45LjMgMzQuMy0uNiA0Ni02LjQgOC4yLTQuMiAxNC0xMC4yIDE4LjMtMTkuMiAzLjktOC40IDMuNS0xNC4zLTEuNC0xOC41LTUuNy00LjYtOC41LTUtMzkuNC01LjQtMjUuNC0uMy0yOS4zLS4yLTMxLjMgMS4yek0yMzYuMiA4NC42Yy0yLjkgMi0yMy40IDQyLjgtMjMgNDUuOC4zIDIuMS40IDIuMSAzMS43IDIuNCAzNC42LjMgMzQuNi4zIDM3LjEtNS45IDIuMy01LjUuNy01LjktMjIuNy01LjlIMjM5bDEuNy0zLjUgMS43LTMuNWgxOS4xYzIwLjkgMCAyMi4xLS4zIDI0LjUtNiAyLjMtNS42IDEuMS02LTE5LjEtNi05LjkgMC0xNy45LS4yLTE3LjktLjUgMC0uNC43LTEuOSAxLjUtMy41bDEuNS0yLjkgMjIuNi0uMyAyMi42LS4zIDIuNC0yLjljMS42LTEuOCAyLjQtMy44IDIuMi01LjVsLS4zLTIuNi0zMS41LS4zYy0yNy41LS4yLTMxLjggMC0zMy44IDEuNHpNMzA5LjYgODQuMWMtMSAuNi02LjcgMTEuMy0xMi43IDIzLjYtOC41IDE3LjYtMTAuNyAyMi45LTkuOCAyMy45IDEuNSAxLjggMTUuOSAxLjkgMTguMS4xLjktLjYgNC42LTcuMSA4LjItMTQuMmw2LjUtMTN2MTJjLjEgMTUuNC43IDE2LjUgOS4zIDE2LjVoNi4xbDE0LjQtMTQuMyAxNC40LTE0LjItNi4yIDEyLjdjLTcuNSAxNS41LTcuNCAxNS44IDQgMTUuOCA0LjYgMCA4LjQtLjUgOS40LTEuMyAyLjQtMS44IDIyLjktNDMuNiAyMi41LTQ2LjEtLjMtMi0uOS0yLjEtMTMuMy0yLjQtOC4xLS4yLTE0IC4yLTE1LjcuOS0xLjUuNi04LjMgNi45LTE0LjkgMTQtNi43IDcuMS0xMi41IDEyLjktMTMuMSAxMi45LS41IDAtLjgtNS42LS43LTEzLjEuMS0xMC4xLS4yLTEzLjQtMS4yLTE0LTItMS4yLTIzLjEtMS0yNS4zLjJ6TTQwMy40IDg0LjhjLTMgMy42LTIyLjcgNDUtMjIuMSA0Ni42LjUgMS4zIDIuMyAxLjYgOC42IDEuNiA0LjQgMCA4LjctLjMgOS42LS42IDIuMi0uOSAyMy43LTQ0IDIzLjMtNDYuOC0uMy0xLjktMS0yLjEtOS0yLjQtNy41LS4yLTkgMC0xMC40IDEuNnpNNDM1LjIgODQuMmMtLjcuNy0xLjIgMS42LTEuMiAyIDAgLjUgMi43IDQuOSA2IDkuOHM2IDkuMyA2IDkuOC03LjYgNS41LTE2LjkgMTEuMWMtMTcuOCAxMC43LTE5LjcgMTIuMS0xOC43IDE0LjYuNCAxLjIgMi40IDEuNSA5LjYgMS41IDEwLjEgMCAxMS0uMyAyNS42LTkuMSA0LjUtMi43IDguNC00LjkgOC43LTQuOS4zIDAgMi4zIDIuNiA0LjMgNS43IDIuMSAzLjIgNC40IDYuNCA1LjMgNyAyLjMgMiAxOC41IDEuNyAyMC41LS4zLjktLjggMS42LTEuOCAxLjYtMi4xIDAtLjMtMi45LTUuMS02LjYtMTAuNS0zLjYtNS41LTYuNC0xMC40LTYuMi0xMC44LjItLjUgNi4yLTQuNCAxMy4zLTguN2wxMy03LjkuMy00LjMuMy00LjMtNy44LjRjLTcuNS4zLTguMS41LTE4IDYuNUw0NjQgOTUuOWwtMS41LTIuOWMtLjktMS42LTIuOS00LjYtNC42LTYuNWwtMy4xLTMuNWgtOS4yYy01LjggMC05LjYuNC0xMC40IDEuMnoiLz48L2c+PC9zdmc'
                                    }
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
                                    Number(item.quantity) *
                                      Number(item.priceNew)
                                  )}{' '}
                                  {item.currency}
                                </p>
                                {item.priceOld > 0 && (
                                  <p className="text-gray-400 line-through">
                                    {Intl.NumberFormat().format(
                                      Number(item.quantity) *
                                        Number(item.priceOld)
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
