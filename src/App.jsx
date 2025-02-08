import { IoMdReturnRight } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import HeroSection from './Components/HeroSection/HeroSection';
import BrandSection from './Components/BrandSection/BrandSection';

import { useState } from 'react';
import ProductsSection from './Components/ProductsSection/ProductsSection';

import BrowseSection from './Components/BrowseSection/BrowseSection';




function App() {


  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <BrandSection />
      <ProductsSection title={'YENİ ÜRÜNLER'} />
      <ProductsSection title={'EN ÇOK SATILANLAR'} />
      <BrowseSection />
    </div>
  )
}

export default App
