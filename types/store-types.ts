import React from 'react';
import { IProducts } from './models';

// ===== Сократил код, через объект с константами =====
export const ActionTypes = {
  CART_ADD_ITEM: 'CART_ADD_ITEM' as const,
  CART_REMOVE_ITEM: 'CART_REMOVE_ITEM' as const,
  CART_RESET: 'CART_RESET' as const,
  CART_CLEAR_ITEMS: 'CART_CLEAR_ITEMS' as const,
  SAVE_SHIPPING_ADDRESS: 'SAVE_SHIPPING_ADDRESS' as const,
  SAVE_PAYMENT_METHOD: 'SAVE_PAYMENT_METHOD' as const,
  SORT_METHOD_VALUE: 'SORT_METHOD_VALUE' as const,
  FILTER_METHOD_VALUE: 'FILTER_METHOD_VALUE' as const,
  RESET_FILTER_METHOD_VALUE: 'RESET_FILTER_METHOD_VALUE' as const,
  SEARCH_ITEM: 'SEARCH_ITEM' as const,
};
// ===== Через каждую константу =====
// export const CART_ADD_ITEM = 'CART_ADD_ITEM';
// export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
// export const CART_RESET = 'CART_RESET';
// export const CART_CLEAR_ITEMS = 'CART_CLEAR_ITEMS';
// export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS';
// export const SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD';
// export const SORT_METHOD_VALUE = 'SORT_METHOD_VALUE';
// export const FILTER_METHOD_VALUE = 'FILTER_METHOD_VALUE';
// export const RESET_FILTER_METHOD_VALUE = 'RESET_FILTER_METHOD_VALUE';
// export const SEARCH_ITEM = 'SEARCH_ITEM';

// ===== Interface Children =====
export interface Children {
  children: React.ReactNode;
}
// ===== Interface Store =====
export interface IStore {
  cart: {
    cartItems: IProducts[];
    shippingAddress: {
      fullName?: string | undefined;
      address?: string | undefined;
      city?: string | undefined;
      postalCode?: string | undefined;
      country?: string | undefined;
    };
    paymentMethod: string | null;
  };
  sortProduct: {
    name?: string;
  };
  filterProduct: string;
  searchItem: string;
}
// ===== Interface Actions =====
interface CartAddItem {
  type: typeof ActionTypes.CART_ADD_ITEM;
  payload: IProducts;
}
interface CartRemoveItem {
  type: typeof ActionTypes.CART_REMOVE_ITEM;
  payload: IProducts;
}
interface CartReset {
  type: typeof ActionTypes.CART_RESET;
}
interface CartClearItems {
  type: typeof ActionTypes.CART_CLEAR_ITEMS;
}
interface SaveShippingAddress {
  type: typeof ActionTypes.SAVE_SHIPPING_ADDRESS;
  payload: {
    fullName: string | undefined;
    address: string | undefined;
    city: string | undefined;
    postalCode: string | undefined;
    country: string | undefined;
  };
}
interface SavePaymentMethod {
  type: typeof ActionTypes.SAVE_PAYMENT_METHOD;
  payload: string | null;
}
interface SortMethodValue {
  type: typeof ActionTypes.SORT_METHOD_VALUE;
  payload: {
    name?: string;
  };
}
interface FilterMethodValue {
  type: typeof ActionTypes.FILTER_METHOD_VALUE;
  payload: string;
}
interface ResetFilterMethodValue {
  type: typeof ActionTypes.RESET_FILTER_METHOD_VALUE;
}
interface SearchItem {
  type: typeof ActionTypes.SEARCH_ITEM;
  payload: string;
}

// ===== Interface Total Actions =====
export type Action =
  | CartAddItem
  | CartRemoveItem
  | CartReset
  | CartClearItems
  | SaveShippingAddress
  | SavePaymentMethod
  | SortMethodValue
  | FilterMethodValue
  | ResetFilterMethodValue
  | SearchItem;
