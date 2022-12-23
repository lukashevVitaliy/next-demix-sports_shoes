import React, { FC, createContext, useReducer } from 'react';
const Cookies = require('js-cookie');
import { ActionTypes, Children, IStore, Action } from '../types/store-types';

// ===== STATE =====
const initialState: IStore = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {} },
  sortProduct: {},
  filterProduct: '',
  searchItem: '',
};

interface IContext {
  state: IStore;
  dispatch: React.Dispatch<Action>;
}

export const Store = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state = initialState, action: Action): IStore => {
  switch (action.type) {
    case ActionTypes.CART_ADD_ITEM: {
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

    case ActionTypes.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        (x) => x.slug !== action.payload.slug
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case ActionTypes.CART_RESET: {
      return {
        ...state,
        cart: { cartItems: [], shippingAddress: {}, paymentMethod: '' },
        // shippingAddress: { location: {} },
        // paymentMethod: '',
      };
    }

    case ActionTypes.CART_CLEAR_ITEMS: {
      return {
        ...state,
        cart: { ...state.cart, cartItems: [] },
      };
    }

    case ActionTypes.SAVE_SHIPPING_ADDRESS: {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: { ...state.cart.shippingAddress, ...action.payload },
        },
      };
    }

    case ActionTypes.SAVE_PAYMENT_METHOD: {
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    }

    case ActionTypes.SORT_METHOD_VALUE: {
      return {
        ...state,
        sortProduct: action.payload,
      };
    }

    case ActionTypes.FILTER_METHOD_VALUE: {
      return {
        ...state,
        filterProduct: action.payload,
      };
    }

    case ActionTypes.RESET_FILTER_METHOD_VALUE: {
      return {
        ...state,
        filterProduct: '',
      };
    }

    case ActionTypes.SEARCH_ITEM: {
      return {
        ...state,
        searchItem: action.payload,
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
