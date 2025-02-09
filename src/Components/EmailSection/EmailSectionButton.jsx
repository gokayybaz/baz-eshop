import React from 'react'

function EmailSectionButton({ title }) {
    return (
        <button className='bg-white font-semibold text-base cursor-pointer text-black w-80 p-4 py-2 rounded-full mt-4'>
            {title}
        </button>
    )
}

export default EmailSectionButton