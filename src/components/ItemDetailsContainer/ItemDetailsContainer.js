import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsCard from "../ItemDetailsCard/ItemDetailsCard";
import { Loader } from "@mantine/core";
import { useContext } from "react";
import { context } from "../CustomProvider/CustomProvider";
import { doc, getDoc } from "firebase/firestore";
import db from "../Firebase/Firebase";

export default function ItemDetailsContainer() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const {Product} = useContext(context);
  const [productValue,setProductValue] = Product;

  const getProduct = (id) => {
    setIsLoading(true);

    const docRef = doc(db, "products", id);
    const consulta = getDoc(docRef);
    consulta
    .then(snapshot=>{
      setProductValue({id:snapshot.id,...snapshot.data()})
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err);
    })
  };

  const createProduct = (id,image, title, price, descripcion, stock) => {
    let product = {};
    product.id = id;
    product.image = image;
    product.title = title;
    product.price = price;
    product.description = descripcion;
    product.stock = stock;
    product.quantity = 1;

    return product;
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return <>{isLoading ? <Loader /> : <ItemDetailsCard />}</>;
}
