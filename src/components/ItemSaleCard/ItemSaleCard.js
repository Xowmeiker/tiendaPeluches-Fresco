import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CheckIcon, Image, Text } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";
import { showNotification } from "@mantine/notifications";


export default function ItemSaleCard(props) {


  const addToCart = (quantity) => {
    showNotification({
      message:`Se agregaron al carrito ${quantity} productos`,
      title: "Agregado al carrito",
      color: "purple",
      icon: <CheckIcon/>
    })
}
  
  return (
    <>
      <StyledContainer dRow>
        <StyledContainer>
            <Image
              radius="md"
              width="30vw"
              src={props.imgUrl}
              alt="Random unsplash image"
            />
            <Text>
                {props.productName}
            </Text>
        </StyledContainer>
        <ItemCount stock={props.stock} initial={0} onAdd={addToCart}/>
      </StyledContainer>
    </>
  );
}
