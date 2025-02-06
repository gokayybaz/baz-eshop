import React from 'react'
import { IoMdBasket, IoMdPerson } from 'react-icons/io';
import NavbarIconButton from './NavbarIconButton';


const NavbarIconButtons = () => {
  return (
    <div className='flex items-center'>
          <NavbarIconButton icon={<IoMdBasket size={28} />} />
          <NavbarIconButton icon={<IoMdPerson size={28} /> } />
        </div>
  )
}

export default NavbarIconButtons