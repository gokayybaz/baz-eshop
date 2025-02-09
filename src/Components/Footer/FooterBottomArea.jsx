import React from 'react'
import FooterBottomAreaTitle from './FooterBottomAreaTitle'
import { FaCopyright } from 'react-icons/fa6'
import FooterBottomAreaIcons from './FooterBottomAreaIcons'

function FooterBottomArea() {
    return (
        <div className='flex items-center justify-between'>
            <FooterBottomAreaTitle icon={<FaCopyright className='mx-2' />} title={'Baz E-Shop 2025 Tüm Hakları Gökay Baz Tarafından Saklıdır.'} />
            <FooterBottomAreaIcons />
        </div>
    )
}

export default FooterBottomArea