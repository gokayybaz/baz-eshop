import React from 'react'

function FooterSocialMediaIconButton({ icon }) {
    return (
        <button className='mr-3 p-2 cursor-pointer border border-gray-400 rounded-full'>
            {icon}
        </button>
    )
}

export default FooterSocialMediaIconButton