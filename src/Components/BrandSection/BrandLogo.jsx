import React from 'react'


// ? Bu component brand section kısmında bulunan logoları props olarak alıp, img etiketi ile render ediyor.
function BrandLogo({ logo }) {
    return (
        <img src={logo} alt="" />
    )
}

export default BrandLogo