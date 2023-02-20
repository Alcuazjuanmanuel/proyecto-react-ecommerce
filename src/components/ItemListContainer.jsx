import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();


  const catFilter = Data.filter((bebida) => bebida.category === category);
  return (
    <div>
      <Center  h="40px" color="black">
        <Heading as="h2" size="3xl">
          Bebidas
        </Heading>
      </Center>
      {category ? <ItemList bebidas={catFilter} /> : <ItemList bebidas={Data} />}
    </div>
  );
};

export default ItemListContainer;