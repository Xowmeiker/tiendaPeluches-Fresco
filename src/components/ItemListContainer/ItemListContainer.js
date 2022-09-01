import { Text, Paper, Loader } from "@mantine/core";
import { RiEmotionSadFill } from "react-icons/ri";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import db from "../Firebase/Firebase";
import "../commonStyles/_styles.scss"
import styles from "../ItemListContainer/ItemListContainer.module.scss"


function ItemListContainer(props) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  return (
      <div className={`containerColumn ${styles.fullVerticalSize}`}>
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
      </div>
  );

  async function getProducts(category) {
    setIsLoading(true);
    setItems([]);

    const productsCollection = collection(db, "products");
    let q = null;

    if(typeof category !== 'undefined' ){
     q = query(productsCollection, where("category", "==", category));
    }else{
     q = query(productsCollection);
    }
    const querySnapshot = await getDocs(q)
      .then((snapshot) => {
        const allProducts = snapshot.docs
          .map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        setItems(allProducts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default ItemListContainer;
