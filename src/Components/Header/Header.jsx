import React from 'react'
import HeaderText from './HeaderText';
import HeaderRegisterButton from './HeaderRegisterButton';
import HeaderCloseButton from './HeaderCloseButton';


const Header = () => {
    const headerStyle = {
        mainHeader: 'flex items-center justify-between px-56 py-3 bg-black text-white',
        textArea: 'flex items-center'
    }
  return (
    <header className={headerStyle.mainHeader}>
        <div></div>
        <span className={headerStyle.textArea}>
        <HeaderText text={"Kayıt Ol ve İlk Siparişinde %20 İndirim Kazan"}/>
        <HeaderRegisterButton title={"Hemen Kayıt Ol"}/>
        </span>
        <HeaderCloseButton />
    </header>
  )
}

export default Header