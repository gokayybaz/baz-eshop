import React from 'react'

function NavbarIconButton({icon}) {
  return (
    <button onClick={() => alert("Hello World!")} className='mr-12 border border-white p-2 rounded-4xl hover:border-black cursor-pointer'>
      {icon}
    </button>
  )
}

export default NavbarIconButton