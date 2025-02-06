import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const NavbarSearchBar = () => {
  return (
    <div className='flex items-center'>
            <span className='p-4 ml-8 py-2 rounded-4xl border-r-0 border-black bg-black text-white rounded-r-none border' >
              <IoMdSearch size={24} />
            </span>
            <input type="text" className='border border-gray-400 p-4 py-2 w-[500px] rounded-l-none rounded-4xl bg-[#f2f0f1]' placeholder='Ürün Adı, Kodu, Türü Giriniz...' />
          </div>
  )
}

export default NavbarSearchBar