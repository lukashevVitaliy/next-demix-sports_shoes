import { NextPage } from 'next';
import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout';
import CheckoutWizard from '../components/chekout-wizard';
import { useForm } from 'react-hook-form';
import { Store } from '../utils/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const ShippingPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;
  const router = useRouter();
  // получение информации по доставке из Корзины
  useEffect(() => {
    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [
    setValue,
    shippingAddress.address,
    shippingAddress.city,
    shippingAddress.country,
    shippingAddress.fullName,
    shippingAddress.postalCode,
  ]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );
    router.push('/payment');
  };

  return (
    <Layout title="Адрес Доставки">
      <CheckoutWizard activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h5 className="mb-4">Адрес Доставки</h5>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="text-xs text-gray-400 tracking-wider"
          >
            Полное Имя
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full"
            autoFocus
            {...register('fullName', {
              required: 'Введите полное имя',
              minLength: {
                value: 2,
                message: 'Введите минимум 2 символa',
              },
            })}
          />
          {errors.fullName && (
            <div className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="text-xs text-gray-400 tracking-wider"
          >
            Адрес Доставки
          </label>
          <input
            type="text"
            id="address"
            className="w-full"
            {...register('address', {
              required: 'Введите адрес доставки',
              maxLength: {
                value: 100,
                message: 'Введите максимум 100 символов',
              },
            })}
          />
          {errors.address && (
            <div className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="text-xs text-gray-400 tracking-wider"
          >
            Город
          </label>
          <input
            type="text"
            id="city"
            className="w-full"
            {...register('city', {
              required: 'Введите город доставки',
              maxLength: {
                value: 100,
                message: 'Введите максимум 100 символов',
              },
            })}
          />
          {errors.city && (
            <div className="text-red-500 text-xs mt-1">
              {errors.city.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="text-xs text-gray-400 tracking-wider"
          >
            Почтовый Индекс
          </label>
          <input
            type="text"
            id="postalCode"
            className="w-full"
            {...register('postalCode', {
              required: 'Введите почтовый индекс доставки',
              maxLength: {
                value: 10,
                message: 'Введите максимум 10 символов',
              },
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500 text-xs mt-1">
              {errors.postalCode.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="text-xs text-gray-400 tracking-wider"
          >
            Страна
          </label>
          <input
            type="text"
            id="country"
            className="w-full"
            {...register('country', {
              required: 'Введите страну доставки',
              maxLength: {
                value: 100,
                message: 'Введите максимум 100 символов',
              },
            })}
          />
          {errors.country && (
            <div className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </div>
          )}
        </div>

        <div className="mb-4 flex justify-end">
          <button className="block py-2 w-1/4 bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all">
            Далее
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ShippingPage;

ShippingPage.auth = true;