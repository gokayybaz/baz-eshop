import React from 'react'
import NavbarLogoText from './NavbarLogoText'
import NavbarNavButtons from './NavbarNavButtons'
import NavbarSearchBar from './NavbarSearchBar'
import NavbarIconButtons from './NavbarIconButtons'

const Navbar = () => {
  return (
    <nav className='px-20 flex items-center justify-between py-8 bg-[#ffff]'>
        {/* Logo Area */}
        <div>
          <NavbarLogoText />
        </div>
        {/* Nav Buttons Area */}
        <div>
          <NavbarNavButtons />
        </div>
        {/* Search Bar Area */}
        <div>
          <NavbarSearchBar />
        </div>
        {/* Nav Icon Buttons Area */}
        <div>
          <NavbarIconButtons />
        </div>
      </nav>
  )
}

export default Navbar