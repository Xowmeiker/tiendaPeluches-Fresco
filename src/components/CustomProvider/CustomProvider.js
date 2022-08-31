import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const context = createContext({});
const { Provider } = context;

export default function CustomProvider(props) {
  const [product, setProduct] = useState({});

  const addProduct = (product) => {
    if (isInCart(product.id)) {
      changeQuantityOf(product.id, 1);
    } else {
      contextValue.cart = [...contextValue.cart, product];
    }
  };

  const deleteProduct = (product) => {
    if (isInCart(product.id) && quantityInCartOf(product.id) > 1) {
      changeQuantityOf(product.id, 1);
    } else {
        remove(contextValue.cart,indexInCartOf(product.id));
    }
  };

  const emptyCart = () => {
    contextValue.cart = [];
  };

  const isInCart = (id) => {
    return contextValue.cart.some((e) => e.id == id);
  };

  const quantityInCartOf = (id) => {
    let productInCartIndex = contextValue.cart.map((e) => e.id).indexOf(id);
    return contextValue.cart[productInCartIndex].quantity;
  };

  const indexInCartOf = (id) => {
    return contextValue.cart.map((e) => e.id).indexOf(id);
  };

  const changeQuantityOf = (id, quantity) => {
    let productIndex = indexInCartOf(id);
    contextValue.cart[productIndex].quantity += quantity;
  };

  const remove = (cart, index) => {
    return [
      ...cart.slice(0, index),
      ...cart.slice(index + 1),
    ];
  };

  const contextValue = {
    cart: [],
    addProduct,
    deleteProduct,
    emptyCart,
    isInCart,
    Product: [product, setProduct],
  };

  return <Provider value={contextValue}>{props.children}</Provider>;
}
