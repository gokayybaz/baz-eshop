import { IoMdReturnRight } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import HeroSection from './Components/HeroSection/HeroSection';
import BrandSection from './Components/BrandSection/BrandSection';

import { useState } from 'react';
import ProductsSection from './Components/ProductsSection/ProductsSection';




function App() {


  return (
    <div className=''>
      <Header />
      <Navbar />
      <HeroSection />
      <BrandSection />
      <ProductsSection title={'YENİ ÜRÜNLER'} />
      <ProductsSection title={'EN ÇOK SATILANLAR'} />
    </div>
  )
}

export default App
