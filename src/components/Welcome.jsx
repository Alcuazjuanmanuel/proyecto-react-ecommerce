import React from 'react'
import { Heading, Center, Box, Image } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="sm" >
        <Text fontSize='2xl' color='black' as='b'>
  Bienvenido a la tienda de bebidas
</Text>
          <Image
            src="./src/assets/Bebidasportada.jpg"
            alt="bebidas"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;