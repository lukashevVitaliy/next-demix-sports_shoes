import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/layout';

const Гnauthorized: NextPage = () => {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Неавторизованный Пользователь">
      <div className="container mx-auto px-4">
        <h5>Отказ в доступе</h5>
        {message && <div className="mb-4 text-red-500">{message}</div>}
      </div>
    </Layout>
  );
};

export default Гnauthorized;
