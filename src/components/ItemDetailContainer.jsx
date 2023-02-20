import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();


  const bebidaFilter = Data.filter((bebida) => bebida.id == id);

  return <ItemDetail bebidas={Data} />;
};

export default ItemDetailContainer;