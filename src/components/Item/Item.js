import React from "react";
import { Button, Image, Text } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";

export default function Item(props) {
  return (
    <>
      <StyledContainer>
        <StyledContainer>
            <Image
              radius="md"
              width="30vw"
              height="30vw"
              src={props.imgUrl}
              alt="Random unsplash image"
            />
            <Text>
                {props.productName}
            </Text>
            <Button onClick={()=>{
          
        }} variant="outline" color="purple" size="md">
          Ver detalles
        </Button>
        </StyledContainer>
      </StyledContainer>
    </>
  );
}
