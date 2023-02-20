import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react";
  
  import { useParams } from "react-router-dom";

  
  const ItemDetail = ({ bebidas }) => {
    const { id } = useParams();
  
    const bebidaFilter = bebidas.filter((bebida) => bebida.id == id);
  
    return (
      <>
        {bebidaFilter.map((bebida) => (
          <div key={bebida.id}>
            <Center p="1rem">
              <Card className="card1">
                <CardBody>
                  <Image borderRadius="lg" src="/src/assets/bebida1.png" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{bebida.name}</Heading>
                    <Text color="black.800" fontSize="l">
                      Detalles: {bebida.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {bebida.category}
                    </Text>
                    <Text color="black.600" fontSize="l">
                      Stock: {bebida.stock}
                    </Text>
                    <Text color="black.600" fontSize="xl">
                      Precio: $ {bebida.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;