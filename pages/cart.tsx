import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import { Store } from '../utils/store';
import Button from '../components/button';
import { FaTrashAlt } from 'react-icons/fa';
import { IProducts } from '../types/models';

const theadTable = [
  { title: 'Фото' },
  { title: 'Название' },
  { title: 'Цвет' },
  { title: 'Размер' },
  { title: 'Количество' },
  { title: 'Цена' },
  { title: '' },
];

const CartPage = () => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state.cart;
  const router = useRouter();

  const removeItemHandler = (item: IProducts) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item: IProducts, qty: number) => {
    const quantity = qty;

    // удостовериться о фактическом наличии товара в БД
    const { data } = await axios.get(`/api/products/${item._id}`);
    const { sizesColors } = data;

    const selectedProduct: { size: number; countInStock: number } =
      sizesColors.find(
        (x: { size: number; countInStock: number }) =>
          x.size === item.activeSizes
      );
    const stokModelSize = selectedProduct.countInStock;

    if (!stokModelSize) {
      toast.info('Данный размер обуви, недоступен...');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    toast.success('Данные в корзине обновлены...');
  };

  const clearCart = () => {
    if (cartItems.length > 0) {
      dispatch({ type: 'CART_RESET' });
      toast.success('Корзина очищена...');
    }
  };

  // достаем данные из нашего продукта
  let stockQty: any;
  let product: any;
  for (let item of cartItems) {
    stockQty = item.sizesColors.find((x) => x.size === item.activeSizes);
    product = item;
  }

  // предварительная стоимость товара
  const priceNewItem = cartItems.reduce(
    (a, c) => a + Number(c.quantity) * Number(c.priceNew),
    0
  );

  return (
    <Layout title="Корзина товаров">
      <Breadcrumbs title="Корзина товаров" path="/cart" title2="" />
      <div className="container mx-auto mb-10 px-4 flex items-end justify-between">
        <h2 className="text-xl md:text-3xl lg:text-4xl">Корзина</h2>
        <Button
          title="Очистить корзину"
          onClick={clearCart}
          addClass="mx-0 w-1/2 md:w-1/4"
        />
      </div>
      <div className="container mx-auto px-4">
        {cartItems.length === 0 ? (
          <h5>
            Ваша корзина пуста!!! Перейти на{' '}
            <Link href="/">
              <a className="text-gray-400 hover:text-lime-400 transition-all">
                Главную страницу
              </a>
            </Link>
          </h5>
        ) : (
          <div className="grid grid-cols-1 lg:gap-x-5 xl:gap-x-20 gap-y-5 justify-between lg:grid-cols-4">
            <div className="col-span-3">
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
                          <td className="text-gray-400 tracking-wider align-top pr-5">
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
                            {
                              <select
                                value={item.quantity}
                                onChange={(e: any) =>
                                  updateCartHandler(item, e.target.value)
                                }
                                className="p-1 my-5 overflow-y-auto"
                              >
                                {[...Array(stockQty.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            }
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
                                    Number(item.quantity) * item.priceNew
                                  )}{' '}
                                  {item.currency}
                                </p>
                                {item.priceOld > 0 && (
                                  <p className="text-gray-400 line-through">
                                    {Intl.NumberFormat().format(
                                      Number(item.quantity) * item.priceOld
                                    )}{' '}
                                    {item.currency}
                                  </p>
                                )}
                              </div>
                            }
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-gray-400 tracking-wider align-middle pr-5">
                            {theadTable[6].title}
                          </td>
                          <td className="text-gray-600 text-right">
                            {
                              <button onClick={() => removeItemHandler(item)}>
                                <FaTrashAlt className="text-base text-gray-400 hover:text-gray-500 active:text-red-600 transition-all" />
                              </button>
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              })}

              <table className="min-w-full invisible hidden md:visible md:inline-table">
                <thead className="h-10 border-b-2 border-lime-400 text-sm text-gray-400 tracking-wider uppercase">
                  <tr className="text-xs xl:text-sm">
                    <th></th>
                    <th>Название</th>
                    <th>Цвет</th>
                    <th>Размер</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    // {cartItems.map((item: ItemCart) => {
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
                        <td>
                          {
                            <select
                              value={item.quantity}
                              onChange={(e: any) =>
                                updateCartHandler(item, e.target.value)
                              }
                              className="p-1 my-5 overflow-y-auto"
                            >
                              {[...Array(stockQty.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          }
                        </td>

                        <td>
                          <div className="">
                            <p>
                              {Intl.NumberFormat().format(
                                Number(item.quantity) * item.priceNew
                              )}{' '}
                              {item.currency}
                            </p>
                            {item.priceOld > 0 && (
                              <p className="text-gray-400 line-through">
                                {Intl.NumberFormat().format(
                                  Number(item.quantity) * item.priceOld
                                )}{' '}
                                {item.currency}
                              </p>
                            )}
                          </div>
                        </td>
                        <td>
                          <button onClick={() => removeItemHandler(item)}>
                            <FaTrashAlt className="text-base text-gray-400 hover:text-gray-500 active:text-red-600 transition-all" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-between w-full sm:w-1/2  lg:w-full h-60 p-5 shadow-lg shadow-gray-400 rounded-lg bg-gray-20">
                <div className="mx-auto">
                  <Link href="/">
                    <a>
                      <Image
                        src="/assets/icons/logo-demiks.svg"
                        width={130}
                        height={50}
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-2xl text-gray-400 font-bold text-center tracking-wider mb-5">
                    Итого:
                  </p>
                  <div className="flex flex-col">
                    <p className="text-2xl xl:text-4xl font-bold text-gray-600 ">
                      {Intl.NumberFormat().format(priceNewItem)}{' '}
                      {product.currency}
                    </p>
                  </div>
                </div>
                <Button
                  title="Купить"
                  onClick={() => router.push('login?redirect=/shipping')}
                  addClass="mt-0 mx-0 min-w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
