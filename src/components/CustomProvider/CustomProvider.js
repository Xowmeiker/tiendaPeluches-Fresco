import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import db from "../Firebase/Firebase";

export const context = createContext({});
const { Provider } = context;

export default function CustomProvider(props) {
    
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [dolarPrice,setDolarPrice] = useState(300);

  fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(response => response.json())
  .then(data => setDolarPrice(data.blue.value_avg));

  const createOrder = (orderDetails) => {
    addDoc(collection(db, "orders"), {
      buyer:{
        fullName:orderDetails.name+" "+orderDetails.lastName,
        phone:orderDetails.phoneNumber,
        email:orderDetails.email,
        spam:orderDetails.termsOfService
      },
      items:[...cart],
      date:new Date().toISOString(),
      total:getTotalof(cart)
    });
  }

  const addProduct = (product,quantity) => {
    if (isInCart(product.id)) {
      changeQuantityOf(product.id, quantity);
    } else {
      let newProduct = {...product}
      newProduct.quantity = quantity;
      setCart([...cart, newProduct]);
    }
  };

  const deleteProduct = (product) => {
      remove(cart, indexInCartOf(product.id));
    };

  const emptyCart = () => {
    setCart = [];
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id == id);
  };

  const quantityInCartOf = (id) => {
    let index = indexInCartOf(id);
    return cart[index].quantity;
  };

  const indexInCartOf = (id) => {
    return cart.map((e) => e.id).indexOf(id);
  };

  const changeQuantityOf = (id, quantity) => {
    let productIndex = indexInCartOf(id);
    let updatedCart = [...cart]
    updatedCart[productIndex].quantity += quantity;
    setCart(updatedCart)
  };

  const remove = (cart, index) => {
    return [...cart.slice(0, index), ...cart.slice(index + 1)];
  };

  const getTotalof = (cart) => {
    let total = 0;
    cart.forEach(element => {
      total+= element.price*element.quantity*dolarPrice;
    })
    return total;
  };

  const contextValue = {
    Cart: [cart,setCart],
    addProduct,
    deleteProduct,
    emptyCart,
    isInCart,
    Product: [product, setProduct],
    dolarPrice,
    createOrder
  };

  return <Provider value={contextValue}>{props.children}</Provider>;
}
