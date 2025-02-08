import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ProductSectionViewAllButton from './ProductSectionViewAllButton'
import ProductSectionBottomLine from './ProductSectionBottomLine'

function ProductsSection({ title }) {
    return (
        <div className='my-24 bg-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl text-black font-extrabold'>{title}</h1>
            <div className='px-40 mt-18 flex items-center w-full justify-between'>
                <ProductCard title={'Basic Tişört'} price={200} starValue={3} />
                <ProductCard title={'Baskılı Tişört'} price={100} starValue={4} />
                <ProductCard title={'Yazılı Tişört'} price={300} starValue={4.5} />
                <ProductCard title={'Siyah Tişört'} price={150} starValue={2} />
            </div>
            <div className='my-14'>
                <ProductSectionViewAllButton />
            </div>
            <ProductSectionBottomLine />
        </div>
    )
}

export default ProductsSection