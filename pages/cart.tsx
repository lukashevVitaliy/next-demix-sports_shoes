import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';
import { Store } from '../utils/store';
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Button from '../components/button';

const theadTable = [
  { title: 'Фото' },
  { title: 'Название' },
  { title: 'Цвет' },
  { title: 'Размер' },
  { title: 'Количество' },
  { title: 'Цена' },
  { title: '' },
];

const CartPage: NextPage = () => {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state.cart;
  const router = useRouter();

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity: number = Number(qty);

    // удостовериться о фактическом наличии товара в БД
    const { data } = await axios.get(`/api/products/${item._id}`);
    const { sizesColors } = data;

    const selectedProduct = sizesColors.find(
      (x) => x.size === item.activeSizes
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
  let stockQty: Object;
  let product;
  for (let item of cartItems) {
    stockQty = item.sizesColors.find((x) => x.size === item.activeSizes);
    product = item;
  }

  // предварительная стоимость товара
  const priceNewItem = cartItems.reduce(
    (a, c) => a + c.quantity * c.priceNew,
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
                          <td className="text-sm text-gray-400 tracking-wider uppercase align-top pr-5">
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
                            {
                              <select
                                value={item.quantity}
                                onChange={(e) =>
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
                        <tr>
                          <td className="text-sm text-gray-400 tracking-wider uppercase align-middle pr-5">
                            {theadTable[6].title}
                          </td>
                          <td className="text-gray-600 text-center">
                            {
                              <button onClick={() => removeItemHandler(item)}>
                                <FaTrashAlt className="text-base text-gray-400 hover:text-gray-500 active:text-red-600 transition-all" />
                              </button>
                            }
                          </td>
                        </tr>
                      </div>
                    );
                  })}
                </tbody>
              </table>

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
                        <td>
                          {
                            <select
                              value={item.quantity}
                              onChange={(e) =>
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
