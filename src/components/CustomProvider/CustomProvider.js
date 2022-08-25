import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const context = createContext({});
const {Provider} = context;

export default function CustomProvider(props) {
    const [product,setProduct] = useState({});

    const addProduct = (product)=>{

        let productInCartIndex = contextValue.cart.map(e=>e.id).indexOf(product.id);

        if(productInCartIndex !== -1) {
            contextValue.cart[productInCartIndex].quantity++
        }else{
            contextValue.cart.push(product)
        }
    }

    const deleteProduct = (product)=>{

        let productInCartIndex = contextValue.cart.map(e=>e.id).indexOf(product.id);

        if(productInCartIndex !== -1 && contextValue.cart[productInCartIndex].quantity > 1) {
            contextValue.cart[productInCartIndex].quantity--
        }else{
            contextValue.cart.splice(productInCartIndex,1)
        }
    }

    const emptyCart = ()=>{
        contextValue.cart = []
    }

    const isInCart = (id)=>{
        return contextValue.cart.map(e=>e.id).indexOf(id) !== -1? true:false;
    }

    const contextValue = {
        cart:[],
        addProduct,
        deleteProduct,
        emptyCart,
        isInCart,
        Product:[product,
            setProduct]
    }

  return (
    <Provider value={contextValue}>
        {props.children}
    </Provider>
  )
}
