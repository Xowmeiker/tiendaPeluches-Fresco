import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Affix, Button, CheckIcon, Image, Loader, Paper, Text, Transition } from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";
import { showNotification } from "@mantine/notifications";
import { useNavigate, useParams } from "react-router-dom";
import { RiEmotionSadFill } from "react-icons/ri";
import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";

class Producto {

  constructor( image, title, price, description, stock){
      this.image = image;
      this.title = title;
      this.price = price;
      this.description = description;
      this.stock = stock;
      this.quantity = 1;
    }

   get image(){
    return this.image;
   }
   get title(){
    return this.title;
   }
   get price(){
    return this.price;
   }
   get description(){
    return this.description;
   }
   get stock(){
    return this.stock;
   }
}

export default function ItemSaleCard(props) {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();
  let navigate = useNavigate();
  const {addProduct} = useContext(context)
  let product;

  const getProduct = (id)=>{
    setIsLoading(true);
    setItem({});
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;

        if (!response.ok || !isJson) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        product = new Producto(
          data.image,
          data.title,
          data.price,
          data.descripcion,
          data.stock
          );
        
        console.log(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }

  const addToCart = (quantity,product) => {
    addProduct(product)
    showNotification({
      message: `Se agregaron al carrito ${quantity} productos`,
      title: "Agregado al carrito",
      color: "purple",
      icon: <CheckIcon />,
    });
  };

  useEffect(() => {
    getProduct(id);
  },[id]);

  return (
    <>
      <StyledContainer dRow>
        <StyledContainer>
          {isLoading ? (
            <Loader />
          ) : item ? (
            <>
              <Image
                radius="md"
                width="30vw"
                src={item.image}
                alt="Random unsplash image"
              />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Text>{item.description}</Text>
              <ItemCount initial={0} onAdd={addToCart} product={product} />
            </>
          ) : (
            <Paper shadow="sm" p="xl" withBorder>
              <RiEmotionSadFill size={props.iconsSize * 5} />
              <Text>Sorry, something went wrong</Text>
            </Paper>
          )}
        </StyledContainer>
      </StyledContainer>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => {
                scrollTo({ y: 0 })
                setTimeout(navigate(`/cart`),6000)
              }}
            >
              Finalizar compra
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
