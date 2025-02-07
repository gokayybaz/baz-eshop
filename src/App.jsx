import { IoMdReturnRight } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

import HeroSection from './Components/HeroSection/HeroSection';


function App() {

  return (
    <div className='bg-[#f2f0f1] w-screen h-screen'>
      <Header />
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
