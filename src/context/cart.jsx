import { createContext } from "react";
import { useCartReducer } from "../reducers/cart";

export const CartContext = createContext();

export function CartProvider ({ children }) {
  const {
    cart,
    setIsVisible,
    clearCart,
    addProduct,
    removeProduct,
    setProductAmount,
    getProductAmount,
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart,
        setIsVisible,
        clearCart,
        addProduct,
        removeProduct,
        setProductAmount,
        getProductAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}