import Link from 'next/link';
import React, { useContext } from 'react';
import SocialLink from '../social-link';
import { GiShoppingCart } from 'react-icons/gi';
import { Store } from '../../utils/store';

export default function HeaderLevel_1() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

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
        <div
          className="flex items-center justify-between w-24
				"
        >
          <Link href="/login">
            <a className="text-sm text-gray-600">Login</a>
          </Link>
          <Link href="/cart">
            <a className="relative">
              <GiShoppingCart className="w-6 h-6 text-gray-600" />
              {cart.cartItems.length > 0 && (
                <span className="absolute -top-1 -right-3.5 rounded-full bg-white px-2 py-0.5  text-xs font-bold text-gray-600">
                  {cart.cartItems.reduce(
                    (a: number, c: number): number => a + c.quantity,
                    0
                  )}
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
