import React from 'react'
import { IoMdClose } from 'react-icons/io'

function HeaderCloseButton() {
  const closeButtonStyle = {
    iconSize: 26,
    buttonStyle: "cursor-pointer"
  }
  return (
    <IoMdClose size={closeButtonStyle.iconSize} className={closeButtonStyle.buttonStyle}/>
  )
}

export default HeaderCloseButton