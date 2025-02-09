import React from 'react'
import ReactStars from 'react-stars';

function CustomerCommentCardStars({ starValue }) {
    return (
        <ReactStars
            count={5}
            value={starValue}
            //onChange={setRatingChanged}
            size={24}
            color2={'#ffd700'}
        />
    )
}

export default CustomerCommentCardStars