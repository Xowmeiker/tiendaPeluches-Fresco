import React from "react";
import { Image, Text } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";

export default function ItemShowCard(props) {
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
        </StyledContainer>
      </StyledContainer>
    </>
  );
}
