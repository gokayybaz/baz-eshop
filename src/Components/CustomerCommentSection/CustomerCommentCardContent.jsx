import React from 'react'

function CustomerCommentCardContent({ content }) {
    return (
        <p className='text-gray-500'>{`"${content}"`}</p>
    )
}

export default CustomerCommentCardContent