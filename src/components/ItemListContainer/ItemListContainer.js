import { Text, Paper, Loader } from "@mantine/core";
import { RiEmotionSadFill } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {query, collection, where, getDocs, getFirestore} from "firebase/firestore"
import db from "../Firebase/Firebase";

function ItemListContainer(props) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  return (
    <>
      <StyledContainer>
        {isLoading ? (
          <Loader />
        ) : items.length > 0 ? (
          <ItemList items={items}></ItemList>
        ) : (
          <Paper shadow="sm" p="xl" withBorder>
            <RiEmotionSadFill size={props.iconsSize * 5} />
            <Text>Sorry, something went wrong</Text>
          </Paper>
        )}
      </StyledContainer>
    </>
  );

  async function getProducts(category) {
    setIsLoading(true);
    setItems([]);

    const productsCollection = collection(db, "products")
    const consulta = getDocs(productsCollection)

    consulta
    .then(snapshot=>{
      const allProducts = snapshot.docs.map(doc=>{
        
        return{
          ...doc.data(),
          id: doc.id
        }
      }).filter(p=>p.category == category);
      setItems(allProducts)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err);
    })
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
