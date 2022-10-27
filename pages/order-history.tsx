import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import { getError } from '../utils/error';
import Link from 'next/link';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': {
      return { ...state, loading: true, error: '' };
    }
    case 'FETCH_SUCCESS': {
      return { ...state, loading: false, orders: action.payload, error: false };
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

const OrderHistoryPage = () => {
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchOrders();
  }, []);

  return (
    <Layout title="История заказов">
      <div className="container mx-auto px-4">
        <h5 className="text-lime-400 mb-5">История заказов</h5>
        {loading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div className="alert-error">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr className="text-gray-400 uppercase text-xs">
                  <th className="px-5 text-left">№</th>
                  <th className="px-5 text-left">Дата</th>
                  <th className="px-5 text-left">Сумма</th>
                  <th className="px-5 text-left">Статус оплаты</th>
                  <th className="px-5 text-left">Статус доставки</th>
                  <th className="px-5 text-left">Заказ</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b">
                    <td className="p-5">{order._id.substring(20, 24)}</td>
                    <td className="p-5">{order.createdAt.substring(0, 10)}</td>
                    <td className="p-5">{order.totalPrice} ₽</td>
                    <td className="p-5">
                      {order.isPaid ? (
                        `${order.paidAt.substring(0, 10)}`
                      ) : (
                        <span className="text-red-500">не оплачено</span>
                      )}
                    </td>
                    <td className="p-5">
                      {order.isDelivered ? (
                        `${order.deliveredAt.substring(0, 10)}`
                      ) : (
                        <span className="text-red-500">не доставлено</span>
                      )}
                    </td>
                    <td className="p-5">
                      <Link href={`/order/${order._id}`} passHref>
                        <a>подробности</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

OrderHistoryPage.auth = true;
export default OrderHistoryPage;
