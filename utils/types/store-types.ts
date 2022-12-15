import React from 'react';

export enum ActionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  CART_RESET = 'CART_RESET',
  CART_CLEAR_ITEMS = 'CART_CLEAR_ITEMS',
  SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS',
  SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD',
  SORT_METHOD_VALUE = 'SORT_METHOD_VALUE',
  FILTER_METHOD_VALUE = 'FILTER_METHOD_VALUE',
  RESET_FILTER_METHOD_VALUE = 'RESET_FILTER_METHOD_VALUE',
  SEARCH_ITEM = 'SEARCH_ITEM',
}
// ===== Interface Children =====
export interface Children {
  children: React.ReactNode;
}
// ===== Interface Store =====
export interface IStore {
  cart: {
    cartItems: any[];
    shippingAddress: {};
    paymentMethod: string | null;
  };
  sortProduct: {};
  filterProduct: string;
  searchItem: string;
}
// ===== Interface Actions =====
interface CartAddItem {
  type: ActionTypes.CART_ADD_ITEM;
  payload: any[];
}
interface CartRemoveItem {
  type: ActionTypes.CART_REMOVE_ITEM;
  payload: object;
}
interface CartReset {
  type: ActionTypes.CART_RESET;
}
interface CartClearItems {
  type: ActionTypes.CART_CLEAR_ITEMS;
}
interface SaveShippingAddress {
  type: ActionTypes.SAVE_SHIPPING_ADDRESS;
  payload: {};
}
interface SavePaymentMethod {
  type: ActionTypes.SAVE_PAYMENT_METHOD;
  payload: string | null;
}
interface SortMethodValue {
  type: ActionTypes.SORT_METHOD_VALUE;
  payload: {};
}
interface FilterMethodValue {
  type: ActionTypes.FILTER_METHOD_VALUE;
  payload: string;
}
interface ResetFilterMethodValue {
  type: ActionTypes.RESET_FILTER_METHOD_VALUE;
  payload: string;
}
interface SearchItem {
  type: ActionTypes.SEARCH_ITEM;
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
