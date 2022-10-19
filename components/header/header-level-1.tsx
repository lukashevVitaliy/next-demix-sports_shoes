import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import { GiShoppingCart } from 'react-icons/gi';
import SocialLink from '../social-link';
import { Store } from '../../utils/store';
import Dropdownlink from '../dropdownlink';
import Cookies from 'js-cookie';

export default function HeaderLevel_1() {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a: number, c: number): number => a + c.quantity, 0)
    );
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="bg-lime-400">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs ">
        <div className="flex items-center justify-between w-1/3">
          <SocialLink hover="hover:bg-gray-600" />
          <Link href="tel:84957777757">
            <a className="text-gray-600 font-light">8 (495) 777-77-57</a>
          </Link>
          <Link href="mailto:support@demix.ru">
            <a className="text-gray-600 font-light" target="_blank">
              support@demix.ru
            </a>
          </Link>
        </div>
        <div className="flex items-end justify-between w-24">
          <Link href="/cart">
            <a className="relative">
              <GiShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-3.5 rounded-full bg-white px-2 py-0.5  text-xs font-bold text-gray-600">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </Link>
          {status === 'loading' ? (
            'Loading'
          ) : session?.user ? (
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="text-gray-600 text-sm font-bold tracking-wider ">
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 origin-top-right bg-black/70 rounded shadow-lg">
                <Menu.Item>
                  <Dropdownlink className="dropdown-link" href="/profile">
                    Профиль
                  </Dropdownlink>
                </Menu.Item>
                <Menu.Item>
                  <Dropdownlink className="dropdown-link" href="/order-history">
                    История Заказов
                  </Dropdownlink>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="dropdown-link"
                    onClick={logoutClickHandler}
                  >
                    Выход
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/login">
              <a className="text-sm text-gray-600">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
