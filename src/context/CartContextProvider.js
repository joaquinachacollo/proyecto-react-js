import React, { createContext, useState } from "react";

export const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [productsAdded, setProductsAdded] = useState([]);

    function addItem(item, quantity) {
      
    }
  
    function removeItem(itemId) {
      
    }
  
    function clear() {
      
    }
  
    function isInCart(itemId) {
    
    }
  
    return (
      <CartContextProvider
        value={{ addItem, removeItem, clear, isInCart, productsAdded, setProductsAdded}}
      >
        {children}
      </CartContextProvider>
    );
}