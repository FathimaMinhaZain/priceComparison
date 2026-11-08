import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { ProductCard } from './components/ProductCard.jsx'
import { ProductList } from './components/ProductList.jsx'

function App() {

  return (
    <>
      <Navbar />
      <ProductList />
    </>
  )
}

export default App
