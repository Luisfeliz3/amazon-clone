import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import HomePage  from './Components/HomePage';
import NavBar  from './Components/NavBar';
import CheckOut  from './Components/CheckOut';
import SearchResults  from './Components/SearchResults';
import ProductPage  from './Components/ProductPage';

const App = () => {
  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route exact path = "/" element={<HomePage/>}/>
    <Route exact path = "/search" element={<SearchResults/>}/>
    <Route exact path = "/product/:id" element={<ProductPage/>}/>
    <Route exact path = "/checkout" element={<CheckOut/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App