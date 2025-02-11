import React from 'react'
import NavbarNavButton from './NavbarNavButton'

const NavbarNavButtons = () => {
    return (
        <ul className='flex items-center font-semibold ml-12'>
           <NavbarNavButton title={"Erkek"}/>
           <NavbarNavButton title={"Kadın"}/>
           <NavbarNavButton title={"Çocuk"}/>
           <NavbarNavButton title={"Yeni Ürünler"}/>
           <NavbarNavButton title={"Günün İndirimleri"}/>
        </ul>
    )
}

export default NavbarNavButtons