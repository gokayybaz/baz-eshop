import React from 'react'

function FooterBottomAreaTitle({ title, icon }) {
    return (
        <p className='flex text-gray-600 font-semibold items-center'>{icon}{title}</p>
    )
}

export default FooterBottomAreaTitle