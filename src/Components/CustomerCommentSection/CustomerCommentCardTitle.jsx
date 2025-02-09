import React from 'react'
import CustomerCommentCardTitleVerifiedIcon from './CustomerCommentCardTitleVerifiedIcon'

function CustomerCommentCardTitle({ title, isVerified }) {
    return (
        <div className='flex items-center mt-1 mb-2'>
            <p className='text-lg font-semibold mr-2'>{title}</p>
            {isVerified ? (<CustomerCommentCardTitleVerifiedIcon size={20} />) : null}
        </div>
    )
}

export default CustomerCommentCardTitle