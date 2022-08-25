import React, { useContext } from 'react'
import { context } from '../CustomProvider/CustomProvider';
import { StyledContainer } from '../ItemListContainer/ItemListContainer';
import {
  Image,
  Text
} from "@mantine/core";

export default function Cart() {
  const {cart} = useContext(context);

  return (
    
      cart.map(product => {
        return(<>
        <StyledContainer dRow>
           {
            <>
              <Image
                radius="md"
                width="5vw"
                src={product.image}
                alt="Random unsplash image"
              />
              <Text>{product.title}</Text>
              <Text>{product.quantity}</Text>
              <Text>precio: {product.price}</Text>
              <Text>total: {product.quantity*product.price}</Text>
              
            </>
          }
        </StyledContainer>
        </>)
      })
  )
}
