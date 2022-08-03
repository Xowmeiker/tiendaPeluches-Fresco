import React, { useState } from "react";
import { Button, NumberInput } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";

export default function ItemCount({stock,initial,onAdd}) {
  const [value,setValue] = useState(0)
  const [disabled,setDisabled] = useState(false)

  function updateButtons(val){
    setValue(val)
    if(value=0){
      setDisabled(true)
    }
  }

  return (
    <>
      <StyledContainer>
        <NumberInput
          value={value}
          max={stock}
          min={0}
          onChange={val=>updateButtons(val)}
          defaultValue={initial}
          placeholder="1"
          label="Cantidad:"
          variant="filled"
          size="md"
        />
        <Button onClick={()=>{
          if(stock>0)
            onAdd(value)
        }} variant="outline" color="purple" size="md" disabled={disabled}>
          Agregar al carrito
        </Button>
      </StyledContainer>
    </>
  );
}
