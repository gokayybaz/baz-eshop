import React from 'react'

// ? Bu component kullanıcının kıyafet tarzlarının grid şeklinde listelendiği section component'inin başlığıdır.
const BrowseSectionTitle = ({ title }) => {
    return (
        <h1 className='text-5xl text-black font-extrabold'>{title}</h1>

    )
}

export default BrowseSectionTitle