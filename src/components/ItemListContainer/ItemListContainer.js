import {  Text, Paper, Loader } from "@mantine/core";
import { RiEmotionSadFill } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ItemListContainer(props) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    getProducts(categoryId);
  },[categoryId])

  return (
    <>
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
    </>
  );

  function getProducts(category) {
    setIsLoading(true);
    setItems([]);
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=3`)
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
