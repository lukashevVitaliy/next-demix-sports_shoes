import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Cookies = require('js-cookie');

import ChekoutWizard from '../components/chekout-wizard';
import Layout from '../components/layout';
import { Store } from '../utils/store';
import Button from '../components/button';

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { paymentMethod } = cart;
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error('Способ оплаты не выбран !!!');
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod });
    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        paymentMethod: selectedPaymentMethod,
      })
    );
    router.push('/place-order');
  };

  useEffect(() => {
    setSelectedPaymentMethod(paymentMethod || '');
  }, [paymentMethod]);

  return (
    <Layout title="Способ Оплаты">
      <ChekoutWizard activeStep={2} />
      <form className="mx-auto px-4 max-w-screen-md" onSubmit={submitHandler}>
        <h5 className="text-base lg:text-xl mb-4">Способ Оплаты</h5>
        {['PayPal', 'Оплата курьеру ', 'Оплата при получении заказа'].map(
          (payment) => (
            <div key={payment} className="mb-4">
              <input
                name="paymentMethod"
                type="radio"
                id={payment}
                checked={selectedPaymentMethod === payment}
                className="p-2 outline-none focus:ring-0"
                onChange={() => setSelectedPaymentMethod(payment)}
              />
              <label htmlFor={payment} className="p-2">
                {payment}
              </label>
            </div>
          )
        )}
        <div className="flex justify-between mb-4">
          <button
            className="block mt-10 py-2 w-1/4 bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all"
            onClick={() => router.push('/shipping')}
            type="button"
          >
            Назад
          </button>
          <Button title="Далее" addClass="w-1/4 mx-0 mt-0" />
        </div>
      </form>
    </Layout>
  );
};

PaymentPage.auth = true;
export default PaymentPage;
