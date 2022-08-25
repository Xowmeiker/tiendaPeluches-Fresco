import React, {  useContext, useState } from "react";
import { Button, NumberInput } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";
import { context } from "../CustomProvider/CustomProvider";

export default function ItemCount({stock,initial,onAdd}) {
  const [value,setValue] = useState(0)
  const [disabled,setDisabled] = useState(true)
  const {Product} = useContext(context);
  const [productValue,setProductValue] = Product;

  return (
    <>
      <StyledContainer>
        <NumberInput
          value={value}
          max={stock}
          min={0}
          onChange={val=>{
            console.log(val)
            setValue(val)
            productValue.quantity = val
            setProductValue(productValue)
            if(val === 0)
            setDisabled(true)
            else
            setDisabled(false)
          }}
          defaultValue={initial}
          placeholder={0}
          label="Cantidad:"
          variant="filled"
          size="md"
        />
        <Button onClick={()=>{
          if(stock>0)
            onAdd(value,productValue)
        }} variant="outline" color="purple" size="md" disabled={disabled}>
          Agregar al carrito
        </Button>
      </StyledContainer>
    </>
  );
}
