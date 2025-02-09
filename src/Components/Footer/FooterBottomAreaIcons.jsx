import React from 'react'
import FooterBottomAreaIcon from './FooterBottomAreaIcon'
import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaGooglePay } from 'react-icons/fa6'

function FooterBottomAreaIcons() {
    return (
        <div className='flex items-center'>
            <FooterBottomAreaIcon icon={<FaCcVisa className='mr-4' size={36} />} />
            <FooterBottomAreaIcon icon={<FaCcMastercard className='mr-4' size={36} />} />
            <FooterBottomAreaIcon icon={<FaCcPaypal className='mr-4' size={36} />} />
            <FooterBottomAreaIcon icon={<FaCcApplePay className='mr-4' size={36} />} />
            <FooterBottomAreaIcon icon={<FaGooglePay className='mr-4' size={36} />} />
        </div>
    )
}

export default FooterBottomAreaIcons