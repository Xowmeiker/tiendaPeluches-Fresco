import React from "react";
import { Button, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import styles from "./Item.module.scss"
import "../commonStyles/_styles.scss"

export default function Item(props) {
  let navigate = useNavigate();

  return (
    <>
        <div className="containerColumn">
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
        </div>
    </>
  );
}
