import React from 'react'


import Image1 from '../../assets/image-1.svg'
import Image2 from '../../assets/image-2.svg'
import Image3 from '../../assets/image-3.svg'
import Image4 from '../../assets/image-4.svg'

function BrowseSection() {
    return (
        <div className='mx-56 flex flex-col items-center p-20 rounded-2xl bg-[#f2f0f1]'>
      <h1 className='text-5xl text-black font-extrabold'>KIYAFET TARZINIZI KEŞFEDİN</h1>
        <div className='mt-16 grid grid-cols-5 w-full gap-12'>
          <div className='flex items-start relative justify-between bg-white h-56 rounded-xl col-span-2'><div></div><p className='text-3xl top-5 left-7 absolute font-semibold'>Günlük</p> <img  src={Image1} className='h-56 rounded-xl' alt="" /></div>
          <div className='flex items-start relative justify-between bg-white h-56 rounded-xl col-span-3'><div></div><p className='text-3xl top-5 left-7 absolute font-semibold'>Parti</p> <img  src={Image2} className='h-56 rounded-xl' alt="" /></div>
          <div className='flex items-start relative justify-between bg-white h-56 rounded-xl col-span-3'><div></div><p className='text-3xl top-5 left-7 absolute font-semibold'>Ofis</p> <img  src={Image3} className='h-56 rounded-xl' alt="" /></div>
          <div className='flex items-start relative justify-between bg-white h-56 rounded-xl col-span-2'><div></div><p className='text-3xl top-5 left-7 absolute font-semibold'>Sportif</p> <img  src={Image4} className='h-56 rounded-xl' alt="" /></div>
        </div>
      </div>
    )
}

export default BrowseSection