import React, { createContext, useContext, useMemo, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('cart', []);

  const addToCart = useCallback(
    (product, quantity) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...prevCart, { ...product, quantity }];
      });
    },
    [setCart]
  );

  const removeFromCart = useCallback(
    (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    },
    [setCart]
  );

  const value = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart, addToCart, removeFromCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
