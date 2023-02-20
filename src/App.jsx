import Navbar from './components/NavBar'

import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route exact path='/' element={<Welcome/>}/>
    <Route exact path='/productos'element={ <ItemListContainer  />} />
    <Route exact path='/category/:category' element={<ItemListContainer/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    
   </Routes>
  </BrowserRouter>
    </>
  )
}

export default App


