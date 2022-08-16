import React from "react";
import { Button, Image, Text } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";
import { useNavigate } from "react-router-dom";

export default function Item(props) {
  let navigate = useNavigate();

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
          navigate(`/item/${props.id}`)
        }} variant="outline" color="purple" size="md">
          Ver detalles
          
        </Button>
        </StyledContainer>
      </StyledContainer>
    </>
  );
}
