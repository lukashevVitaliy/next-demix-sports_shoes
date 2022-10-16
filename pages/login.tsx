import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';
import { useForm } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitHandler = ({ email, password }: Inputs) => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h3 className="text-center">Авторизация</h3>
        <div className="mb-4">
          <label htmlFor="email" className="text-xs text-gray-400">
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Пожалуйста введите почтовый адрес',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Пожалуйста введите корректный почтовый адрес',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="mb-10">
          <label htmlFor="password" className="text-xs text-gray-400">
            Password
          </label>
          <input
            type="password"
            {...register('password', {
              required: 'Пожалуйства введите пароль',
              minLength: {
                value: 6,
                message: 'Введите минимум 6 символов',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          />
          {errors.password && (
            <div className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </div>
          )}
        </div>
        <div className="mb-4 flex justify-center">
          <button className="block py-2 w-1/4 bg-black/70 ring-2 ring-lime-400 rounded-lg shadow text-white text-sm font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 hover:bg-black/80 transition-all">
            Авторизация
          </button>
        </div>
        <div className="mb-4 text-center text-gray-400">
          У вас нет учетной записи?{' '}
          <Link href="/register">
            <a className="text-gray-400 font-bold hover:text-lime-400 transition-all">
              Регистрация
            </a>
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default LoginPage;
