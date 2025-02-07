import { IoMdReturnRight } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import HeroSection from './Components/HeroSection/HeroSection';
import BrandSection from './Components/BrandSection/BrandSection';




function App() {

  return (
    <div className='bg-[#f2f0f1]'>
      <Header />
      <Navbar />
      <HeroSection />
      <BrandSection />
    </div>
  )
}

export default App
