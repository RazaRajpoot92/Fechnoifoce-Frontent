import React from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ContactUsPage from './pages/ContactUsPage'
import ScrollToTop from './components/ScrollToTop'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      
    })
  },[])


  return (
      <BrowserRouter >
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='/products' element = {<ProductsPage />} />
        <Route path='/products/:category' element = {<ProductsPage />} />
        <Route path='/contact' element = {<ContactUsPage />} />
      </Routes>
      <Footer />

      </BrowserRouter>
  )
}

export default App