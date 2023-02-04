import React from 'react'
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


const Navbar = () => {
  return (
    < >
    <Container className='nav'>
    <h1>Proyecto Bebidas React E-commerce</h1>
      <Menu isLazy>
  <MenuButton>Categorias</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Bebidas con alcohol</MenuItem>
    <MenuItem>Bebidas sin alcohol</MenuItem>
  </MenuList>
      </Menu>
     
   <CartWidget/>

   </Container>

  </>
  )
}

export default Navbar