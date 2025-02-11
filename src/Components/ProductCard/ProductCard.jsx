import React from 'react'

import Clothes1 from '../../assets/clothes-1.svg'
import { useState } from 'react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom'

function ProductCard({ title, starValue, price, newPrice }) {
    const [ratingChanged, setRatingChanged] = useState(starValue)

    return (
        <Link to={"/products/product"} className=''>
            <img src={Clothes1} alt="" />
            <div className='ml-4'>
                <p className='mt-4 text-lg font-semibold '>{title}</p>
                <span className='flex items-center'>
                    <ReactStars
                        count={5}
                        value={ratingChanged}
                        //onChange={setRatingChanged}
                        size={24}
                        color2={'#ffd700'} />
                    <p className='ml-3 mt-1 text-lg'>4/5</p>
                </span>
                <span className='flex items-center'>
                    <p className='text-3xl font-semibold'>{price}</p>
                    <p className='text-3xl font-semibold ml-1'>₺</p>
                </span>
            </div>

        </Link>
    )
}

export default ProductCard