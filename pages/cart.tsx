import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import Layout from '../components/layout';

const CartPage: NextPage = () => {
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
                <tr className=" h-32 border-b text-xs uppercase tracking text-center ">
                  <td className="text-left">
                    <Link href="#">
                      <a className="flex w-[100px]">
                        <Image
                          src="/assets/image/shoes/male/ATLANTA_2/beige/1.jpg"
                          width={100}
                          height={100}
                          alt="item shoes"
                          className="rounded-tl-[25%] rounded-br-[25%]"
                        />
                      </a>
                    </Link>
                  </td>
                  <td>КРОССОВКИ МУЖСКИЕ LARUS 2 NY</td>
                  <td>темно-синий</td>
                  <td>43</td>
                  <td>1</td>
                  <td>4 599</td>
                  <td>x</td>
                </tr>
                <tr className=" h-32 border-b text-xs uppercase tracking text-center ">
                  <td className="text-left">
                    <Link href="#">
                      <a className="flex w-[100px]">
                        <Image
                          src="/assets/image/shoes/male/ATLANTA_2/beige/1.jpg"
                          width={100}
                          height={100}
                          alt="item shoes"
                          className="rounded-tl-[25%] rounded-br-[25%]"
                        />
                      </a>
                    </Link>
                  </td>
                  <td>КРОССОВКИ МУЖСКИЕ LARUS 2 NY</td>
                  <td>темно-синий</td>
                  <td>43</td>
                  <td>1</td>
                  <td>4 599</td>
                  <td>x</td>
                </tr>
                <tr className=" h-32 border-b text-xs uppercase tracking text-center ">
                  <td className="text-left">
                    <Link href="#">
                      <a className="flex w-[100px]">
                        <Image
                          src="/assets/image/shoes/male/ATLANTA_2/beige/1.jpg"
                          width={100}
                          height={100}
                          alt="item shoes"
                          className="rounded-tl-[25%] rounded-br-[25%]"
                        />
                      </a>
                    </Link>
                  </td>
                  <td>КРОССОВКИ МУЖСКИЕ LARUS 2 NY</td>
                  <td>темно-синий</td>
                  <td>43</td>
                  <td>1</td>
                  <td>4 599</td>
                  <td>x</td>
                </tr>
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
                <div className="flex flex-col text-right ">
                  <p className="text-4xl font-bold text-gray-600">4 599 p</p>
                  <p className="text-2xl text-red-600 font-bold line-through ">
                    6 900 p
                  </p>
                </div>
              </div>
              <button className="block py-2 w-full bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all">
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
