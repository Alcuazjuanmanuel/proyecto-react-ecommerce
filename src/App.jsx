import Navbar from './components/NavBar'

import React from 'react'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = "Descripcion" />
    </>
  )
}

export default App


