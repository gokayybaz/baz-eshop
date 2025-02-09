import React from 'react'

import VersaceLogo from "../../assets/versace-logo.svg"
import ZaraLogo from "../../assets/zara-logo.svg"
import GucciLogo from "../../assets/gucci-logo.svg"
import PradaLogo from "../../assets/prada-logo.svg"
import CalvinKleinLogo from "../../assets/calvin-klein-logo.svg"
import BrandLogo from './BrandLogo'

// ? Bu component brand logolarının listelendiği component'dir.
function BrandSection() {
    return (
        <div className='bg-black h-31 flex items-center px-28 justify-between'>
            <BrandLogo logo={VersaceLogo} />
            <BrandLogo logo={ZaraLogo} />
            <BrandLogo logo={GucciLogo} />
            <BrandLogo logo={PradaLogo} />
            <BrandLogo logo={CalvinKleinLogo} />
        </div>
    )
}

export default BrandSection