import { Tabs, Text, Paper, Loader } from "@mantine/core";
import { FaCat } from "react-icons/fa";
import { RiEmotionSadFill, RiGameLine } from "react-icons/ri";
import { GiPillow } from "react-icons/gi";
import styled from "styled-components";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <p>{props.greeting}</p>
      <Tabs color="purple" radius="xs" defaultValue="gallery">
        <Tabs.List position="center">
          <Tabs.Tab 
          onClick={()=>getProducts(1)}
          value="Animales" 
          icon={<FaCat size={props.iconsSize} />}>
            Animales
          </Tabs.Tab>
          <Tabs.Tab
            onClick={()=>getProducts(2)}
            value="Personajes"
            icon={<RiGameLine size={props.iconsSize} />}
          >
            Personajes
          </Tabs.Tab>
          <Tabs.Tab
            onClick={()=>getProducts(3)}
            value="Almohadas"
            icon={<GiPillow size={props.iconsSize} />}
          >
            Almohadas
          </Tabs.Tab>
        </Tabs.List>

        <StyledContainer>
          <Tabs.Panel value="Animales" pt="xs" >
            <StyledContainer>
            {isLoading ? (
                <Loader/>
              ) : items.length > 0 ? (
                <ItemList items={items}></ItemList>
              ) :(
                <Paper shadow="sm" p="xl" withBorder>
                  <RiEmotionSadFill size={props.iconsSize * 5} />
                  <Text>Sorry, something went wrong</Text>
                </Paper>
              )}
            </StyledContainer>
          </Tabs.Panel>
          <Tabs.Panel value="Personajes" pt="xs">
            <StyledContainer>
            {isLoading ? (
                <Loader/>
              ) : items.length > 0 ? (
                <ItemList items={items}></ItemList>
              ) :(
                <Paper shadow="sm" p="xl" withBorder>
                  <RiEmotionSadFill size={props.iconsSize * 5} />
                  <Text>Sorry, something went wrong</Text>
                </Paper>
              )}
            </StyledContainer>
          </Tabs.Panel>
          <Tabs.Panel value="Almohadas" pt="xs">
            <StyledContainer>
            {isLoading ? (
                <Loader/>
              ) : items.length > 0 ? (
                <ItemList items={items}></ItemList>
              ) :(
                <Paper shadow="sm" p="xl" withBorder>
                  <RiEmotionSadFill size={props.iconsSize * 5} />
                  <Text>Sorry, something went wrong</Text>
                </Paper>
              )}
            </StyledContainer>
          </Tabs.Panel>
        </StyledContainer>
      </Tabs>
    </>
  );

  function getProducts(product) {
    setIsLoading(true);
    setItems([]);
    fetch("https://fakestoreapi.com/products?limit=6")
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
        setItems(data);
        console.log(data)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }
}

export const StyledContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 10%; */
  flex-direction: ${(props) => (props.dRow ? "row" : "column")};
  text-overflow: none;
  > * {
    margin: 2%;
  }
`;

export default ItemListContainer;
