import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {
  Affix,
  Button,
  CheckIcon,
  Image,
  Paper,
  Text,
  Transition,
} from "@mantine/core";
import { StyledContainer } from "../ItemListContainer/ItemListContainer";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { RiEmotionSadFill } from "react-icons/ri";
import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { context } from "../CustomProvider/CustomProvider";

export default function ItemDetailsCard(props) {
  const [scroll, scrollTo] = useWindowScroll();
  let navigate = useNavigate();
  const { addProduct,Product} = useContext(context);
  const [product,setProduct] = Product;
  
  const addToCart = (quantity, product) => {
    addProduct(product);
    showNotification({
      message: `Se agregaron al carrito ${quantity} productos`,
      title: "Agregado al carrito",
      color: "purple",
      icon: <CheckIcon />,
    });
  };

  return (
    <>
      <StyledContainer dRow>
        <StyledContainer>
           {product ? (
            <>
              <Image
                radius="md"
                width="30vw"
                src={product.image}
                alt="Random unsplash image"
              />
              <Text>{product.title}</Text>
              <Text>precio: {product.price}</Text>
              <Text>{product.description}</Text>
              <ItemCount initial={0} stock={5} onAdd={addToCart} />
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
                scrollTo({ y: 0 });
                setTimeout(navigate(`/cart`), 6000);
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
