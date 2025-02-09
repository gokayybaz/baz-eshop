import React from 'react'

function FooterTextButtons({ title, buttons, isEnd }) {
    return (
        <div className={`${isEnd == false ? 'mr-32' : null}`}>
            <p className='text-gray-900 font-bold'>{title}</p>
            <ul className='mt-2'>
                {
                    buttons.map((listItem, index) => <li key={index} className='mt-3 cursor-pointer hover:underline text-gray-600 font-semibold'>{listItem}</li>)
                }
            </ul>
        </div>
    )
}

export default FooterTextButtons