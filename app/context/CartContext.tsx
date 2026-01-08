"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (product: any) =>
        setCart((prev: any[]) => [...prev, product]);

    const removeFromCart = (id: number) =>
        setCart((prev: any[]) => prev.filter((item) => item.id !== id));

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
