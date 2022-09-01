import React, {  useContext, useState } from "react";
import { Button, NumberInput } from "@mantine/core";
import { context } from "../CustomProvider/CustomProvider";
import "./ItemCount.module.scss"


export default function ItemCount({stock,onAdd}) {
  const [value,setValue] = useState(0)
  const [disabled,setDisabled] = useState(true)
  const {Product} = useContext(context);
  const [productValue,setProductValue] = Product;

  return (
    <>
      <div className="containerColumn">
        <NumberInput
          value={value}
          max={stock}
          min={0}
          onChange={val=>{
            setValue(val)
            if(val === 0)
            setDisabled(true)
            else
            setDisabled(false)
          }}
          placeholder={0}
          label="Cantidad:"
          variant="filled"
          size="md"
        />
        <Button onClick={()=>{
          if(stock>0)
            onAdd(productValue,value)
            setValue(1)
        }} variant="outline" color="purple" size="md" disabled={disabled}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
