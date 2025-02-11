import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/products/product' element={<ProductDetailPage />}/>
        </Routes>
      <Footer />
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
