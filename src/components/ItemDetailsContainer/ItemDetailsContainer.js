import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsCard from "../ItemDetailsCard/ItemDetailsCard";
import { Loader } from "@mantine/core";
import { useContext } from "react";
import { context } from "../CustomProvider/CustomProvider";
import { doc, getDoc } from "firebase/firestore";
import db from "../Firebase/Firebase";
import "../commonStyles/_styles.scss"


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

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return <div className="containerRow">{isLoading ? <Loader /> : <ItemDetailsCard />}</div>;
}
