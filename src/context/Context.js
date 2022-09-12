import React, { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
    const items = [];

    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        cart: [],
    })

  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}