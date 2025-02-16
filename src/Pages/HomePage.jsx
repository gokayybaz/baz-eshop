import BrandSection from '@/Components/BrandSection/BrandSection'
import BrowseSection from '@/Components/BrowseSection/BrowseSection'
import CustomerCommentSection from '@/Components/CustomerCommentSection/CustomerCommentSection'
import HeroSection from '@/Components/HeroSection/HeroSection'
import ProductsSection from '@/Components/ProductsSection/ProductsSection'
import React, { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <BrandSection />
      <ProductsSection title={'YENİ ÜRÜNLER'} />
      <ProductsSection title={'EN ÇOK SATILANLAR'} />
      <BrowseSection />
      <CustomerCommentSection />
    </div>
  )
}

export default HomePage