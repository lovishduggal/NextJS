'use client';

import { createContext, useState } from 'react';

export const ProductCtx = createContext(null);

const Provider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <ProductCtx.Provider
            value={{ cartItems: cartItems, setCartItems: setCartItems }}>
            {children}
        </ProductCtx.Provider>
    );
};

export default Provider;
