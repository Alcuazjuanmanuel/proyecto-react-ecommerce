import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Container,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'



const Navbar = () => {
  return (
    < >
    <Container className='nav' maxW= "250vh" >
<Link to="/">
  <div className='logo-h1'>
    <img src="/src/assets/pizzarra.jpg" alt="pizarra" className='imglogo'/>
    <p className='h1'>Toma 1</p>
  </div>
</Link>

    
    
    
    <Menu>
          <Link to={"/productos"}>
             <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="black"
                m="5"
                >
                  Productos
             </MenuButton>
           </Link>
     </Menu>
   

      <Menu isLazy>
    
  <MenuButton>Categorias</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <Link to={`/category/${"Bebidas con alcohol"}`}>
    <MenuItem>Bebidas con alcohol</MenuItem>

    </Link>
    <Link to={`/category/${"Bebidas sin alcohol"}`}>
    <MenuItem>Bebidas sin alcohol</MenuItem>
    </Link>
  </MenuList>
      </Menu>
     
   <CartWidget/>

   </Container>
   

  </>
  )
}

export default Navbar