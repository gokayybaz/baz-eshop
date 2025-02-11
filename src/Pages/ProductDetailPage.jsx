import React from 'react'
import { FaChevronRight } from "react-icons/fa";

import { Link } from 'react-router-dom'



function ProductDetailPage() {
  return (
    <div className='px-28 py-12'>
        <span className='flex items-center'>
            <Link to={"/"}>
            <div className='flex items-center'><p className='text-lg font-semibold text-gray-500 cursor-pointer underline-offset-2 hover:underline'>Anasayfa</p> <FaChevronRight className='ml-4' size={15} /></div>
            </Link>
            <p className='text-lg font-semibold cursor-pointer text-gray-500 underline-offset-2 ml-4 hover:underline'>Günün İndirimleri</p> <FaChevronRight className='ml-4' size={15} />
            <p className='text-lg font-semibold cursor-pointer text-gray-500 underline-offset-2 ml-4 hover:underline'>Erkek</p> <FaChevronRight className='ml-4' size={15} />
            <p className='text-lg font-semibold cursor-pointer underline-offset-2 ml-4 hover:underline'>T-Shirt</p>
        </span>

        <div>
            <div className='flex my-12 items-center w-full h-[480px]'>
                <div className='flex flex-col justify-between items-center h-full'>
                    <div className='w-36 h-36 rounded-2xl bg-red-500'></div>
                    <div className='w-36 mt-4 h-36 rounded-2xl bg-green-500'></div>
                    <div className='w-36 mt-4 h-36 rounded-2xl bg-blue-500'></div>
                </div>
                <div className='h-full ml-6'>
                    <div className='w-[500px] h-full rounded-2xl bg-indigo-500'>
                        
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>

    </div>
  )
}

export default ProductDetailPage