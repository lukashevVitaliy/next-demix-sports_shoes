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
        <h2>Корзина</h2>
        <button className="block py-2 w-1/6 bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all">
          Очистить корзину
        </button>
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
          <div className="grid grid-cols-1 gap-x-20 gap-y-5 justify-between md:grid-cols-4">
            <div className="col-span-3">
              <table className="w-full">
                <thead className="h-10 border-b-2 border-lime-400 text-sm text-gray-400 tracking-wider uppercase">
                  <tr className="">
                    <th className=""></th>
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
                        key={item.id}
                        className=" h-32 border-b text-xs uppercase tracking text-center "
                      >
                        <td className="text-left">
                          <Link href={`${urlGender}${item.slug}`}>
                            <a className="flex w-[100px]">
                              <Image
                                src={item.imageItem}
                                // src={item.images[0]}
                                // blurDataURL={item.images[0]}
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
                              {Intl.NumberFormat().format(item.priceNew)}{' '}
                              {item.currency}
                            </p>
                            {item.priceOld > 0 && (
                              <p className="text-gray-400 line-through">
                                {Intl.NumberFormat().format(item.priceOld)}{' '}
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
            <div className="">
              <div className="flex flex-col justify-between w-full h-80 p-5 shadow-lg shadow-gray-400 rounded-lg bg-gray-20">
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
                    <p className="text-4xl font-bold text-gray-600 ">
                      {Intl.NumberFormat().format(priceNewItem)}{' '}
                      {product.currency}
                    </p>
                    {/* <p className="text-2xl text-red-600 font-bold line-through ">
                      6 900 p
                    </p> */}
                  </div>
                </div>
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className="block py-2 w-full bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all"
                >
                  Купить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
