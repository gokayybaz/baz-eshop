import React from 'react'
import { useState } from 'react';
import CustomerCommentCardStars from './CustomerCommentCardStars';
import CustomerCommentCardTitle from './CustomerCommentCardTitle';
import CustomerCommentCardContent from './CustomerCommentCardContent';

function CustomerCommentCard({ starCount, title, comment, isVerified }) {
    const [ratingChanged, setRatingChanged] = useState(starCount)

    return (
        <div className='w-96 mr-4  border border-gray-200 rounded-xl p-5'>
            <CustomerCommentCardStars starValue={ratingChanged} />
            <CustomerCommentCardTitle title={title} isVerified={isVerified} />
            <CustomerCommentCardContent content={comment} />
        </div>
    )
}

export default CustomerCommentCard