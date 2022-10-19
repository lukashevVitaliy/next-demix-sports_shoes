import React from 'react';
import Head from 'next/head';
import Header from './header/header';
import Footer from './footer/footer';
import { ToastContainer } from 'react-toastify';

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ` - Demix sports shoes` : 'Demix sports shoes'}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
