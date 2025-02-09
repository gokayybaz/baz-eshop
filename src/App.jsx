import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import BrandSection from './Components/BrandSection/BrandSection';
import ProductsSection from './Components/ProductsSection/ProductsSection';
import BrowseSection from './Components/BrowseSection/BrowseSection';
import CustomerCommentSection from './Components/CustomerCommentSection/CustomerCommentSection';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <BrandSection />
      <ProductsSection title={'YENİ ÜRÜNLER'} />
      <ProductsSection title={'EN ÇOK SATILANLAR'} />
      <BrowseSection />
      <CustomerCommentSection />
      <Footer />
    </div>
  )
}

export default App
