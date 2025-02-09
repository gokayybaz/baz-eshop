import React from 'react'

// ? Bu component kullanıcının kıyafet tarzlarının grid şeklinde listelendiği component'lerden, genişliği çok olan component'dir.
// ? Dışarıdan props olarak başlık metnini ve render edeceği resmi istemektedir.
const BrowseSectionWideCard = ({ title, image }) => {
    return (
        <div className='flex items-start relative justify-between bg-white h-56 rounded-xl col-span-3'>
            <div></div>
            <p className='text-3xl top-5 left-7 absolute font-semibold'>{title}</p>
            <img src={image} className='h-56 rounded-xl' alt="" />
        </div>
    )
}

export default BrowseSectionWideCard