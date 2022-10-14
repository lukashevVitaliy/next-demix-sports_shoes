import React, { createContext, FC, useReducer } from 'react';

interface Children {
  children: React.ReactNode;
}
interface IStore {
  cart: {
    cartItems: [];
  };
}

const initialState: IStore = {
  cart: { cartItems: [] },
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
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (x) => x.slug !== action.payload.slug
      );
      return { ...state, cart: { ...state.cart, cartItems } };
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
