import React, { createContext, FC, useReducer } from 'react';
import Cookies from 'js-cookie';

interface Children {
  children: React.ReactNode;
}
interface IStore {
  cart: {
    cartItems: [];
    shippingAddress: {};
  };
  sortProduct: {};
  filterProduct: '';
}

const initialState: IStore = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {} },
  sortProduct: {},
  filterProduct: '',
};

export const Store = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (x) => x.slug !== action.payload.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_RESET': {
      return {
        ...state,
        cart: { cartItems: [] },
        shippingAdress: { location: {} },
        paymentMethod: '',
      };
    }
    case 'CART_CLEAR_ITEMS': {
      return {
        ...state,
        cart: { ...state.cart, cartItems: [] },
      };
    }
    case 'SAVE_SHIPPING_ADDRESS': {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: { ...state.shippingAddress, ...action.payload },
        },
      };
    }
    case 'SAVE_PAYMENT_METHOD': {
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    }
    case 'SORT_METHOD_VALUE': {
      return {
        ...state,
        sortProduct: action.payload,
      };
    }
    case 'FILTER_METHOD_VALUE': {
      return {
        ...state,
        filterProduct: action.payload,
      };
    }
    case 'RESET_FILTER_METHOD_VALUE': {
      return {
        ...state,
        filterProduct: '',
      };
    }
    default:
      return state;
  }
};

export const StoreProvider: FC<Children> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
