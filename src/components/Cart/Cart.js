import React, { useContext } from "react";
import { context } from "../CustomProvider/CustomProvider";
import { Image, Text, Table, Button } from "@mantine/core";
import styles from "../Cart/Cart.module.scss";
import "../commonStyles/_styles.scss";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { Cart,dolarPrice } = useContext(context);
  const [cart, setCart] = Cart;
  const navigate = useNavigate();
  let total = 0;
  const rows = cart.map((product) => {
    total += product.price * product.quantity * dolarPrice;
    return (
      <tr key={product.id}>
        <td>
          <Image
            radius="md"
            width="5vw"
            src={product.image}
            alt="Random unsplash image"
          />
        </td>
        <td>
          <Text onClick={()=>{navigate(`/item/${product.id}`)}}>{product.title}</Text>
        </td>
        <td>
          ${product.price*dolarPrice}
        </td>
        <td>
          {product.quantity}
        </td>
        <td>
          ${product.quantity * product.price * dolarPrice}
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>nombre</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <div className="containerRow">
      <Text>Total a pagar: ${total}</Text>
      <Button onClick={()=>{navigate("/checkout")}}>Pagar</Button>
      </div>
    </>
  );
}
