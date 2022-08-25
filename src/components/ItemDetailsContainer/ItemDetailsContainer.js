import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsCard from "../ItemDetailsCard/ItemDetailsCard";
import { Loader } from "@mantine/core";
import { useContext } from "react";
import { context } from "../CustomProvider/CustomProvider";

export default function ItemDetailsContainer() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const {Product} = useContext(context);
  const [productValue,setProductValue] = Product;

  const getProduct = (id) => {
    setIsLoading(true);
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
        setProductValue(createProduct(
          id,
          data.image,
          data.title,
          data.price,
          data.descripcion,
          data.stock
        ));

      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
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
