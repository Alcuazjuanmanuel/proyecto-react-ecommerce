import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ bebidas }) => {
  return (
    <>
      <Container maxW="container.sm" className="catalogo">
        {bebidas?.map((bebida) => (
          <Item
            key={bebida.id}
            id={bebida.id}
            img={bebida.img}
            name={bebida.name}
            description={bebida.description}
            price={bebida.price}
            stock={bebida.stock}
            category={bebida.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;