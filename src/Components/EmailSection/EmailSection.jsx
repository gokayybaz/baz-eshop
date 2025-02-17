import React from 'react'


import EmailSectionTitle from './EmailSectionTitle';
import EmailSectionInput from './EmailSectionInput';
import EmailSectionInputIcon from './EmailSectionInputIcon';
import EmailSectionButton from './EmailSectionButton';


function EmailSection() {
    return (
        <div className='absolute -top-20 mx-56 rounded-2xl justify-between bg-black p-10 py-7 flex items-center'>
            <EmailSectionTitle title={'YENİ EKLENEN ÜRÜNLERDEN ANINDA HABERDAR OLMAK İÇİN E-POSTA BÜLTENİNE ABONE OLABİLİRSİNİZ'} />
            <div className='ml-14'>
                <div className='bg-white flex items-center w-80 p-4 rounded-full py-2'>
                    <EmailSectionInputIcon size={20} />

                    <EmailSectionInput placeholderText={'E-posta adresinizi giriniz...'} />
                </div>
                <EmailSectionButton title={'E-posta Bültenine Abone Ol'} />
            </div >
        </div >
    )
}

export default EmailSection