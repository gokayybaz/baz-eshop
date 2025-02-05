import React from 'react'

function HeaderRegisterButton({title}) {
  const registerButtonStyle = {
    buttonStyle: "ml-4 mb-1 underline underline-offset-8 cursor-pointer"
  }  
  return (
    <a className={registerButtonStyle.buttonStyle}>{title}</a>
  )
}

export default HeaderRegisterButton