import React from 'react'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CustomerCommentSectionIconButton from './CustomerCommentSectionIconButton';


function CustomerCommentSectionIconButtons() {
    return (
        <div className='flex items-center'>
            <CustomerCommentSectionIconButton icon={<FaArrowLeft size={26} />} />
            <span className='mx-2'></span>
            <CustomerCommentSectionIconButton icon={<FaArrowRight size={26} />} />
        </div>
    )
}

export default CustomerCommentSectionIconButtons