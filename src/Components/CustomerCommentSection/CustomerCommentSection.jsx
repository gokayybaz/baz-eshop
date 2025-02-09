import React from 'react'

import CustomerCommentCard from './CustomerCommentCard';
import CustomerCommentSectionTitle from './CustomerCommentSectionTitle';
import CustomerCommentSectionIconButtons from './CustomerCommentSectionIconButtons';


function CustomerCommentSection() {
    return (
        <div className='px-56 my-24 mb-12 w-full'>
            <div className='flex items-center justify-between'>
                <CustomerCommentSectionTitle title={'MÜŞTERİ YORUMLARI'} />
                <CustomerCommentSectionIconButtons />
            </div>
            <div className='flex items-center'>
                <CustomerCommentCard starCount={5} isVerified={true} title={'Gökay B.'} comment={'Gayet güzel bir site, kıyafetlerim hemen deneme dememe deemedşlgkdfşlgkdfşl dlşfgdfşlg ve sağlıklı bir şekilde teslim edildi.'} />
                <CustomerCommentCard starCount={5} isVerified={false} title={'Gökay B.'} comment={'Gayet güzel bir site, kıyafetlerim hemen deneme dememe deemedşlgkdfşlgkdfşl dlşfgdfşlg ve sağlıklı bir şekilde teslim edildi.'} />
                <CustomerCommentCard starCount={5} isVerified={true} title={'Gökay B.'} comment={'Gayet güzel bir site, kıyafetlerim hemen deneme dememe deemedşlgkdfşlgkdfşl dlşfgdfşlg ve sağlıklı bir şekilde teslim edildi.'} />
                <CustomerCommentCard starCount={5} isVerified={false} title={'Gökay B.'} comment={'Gayet güzel bir site, kıyafetlerim hemen deneme dememe deemedşlgkdfşlgkdfşl dlşfgdfşlg ve sağlıklı bir şekilde teslim edildi.'} />
            </div>
        </div>
    )
}

export default CustomerCommentSection