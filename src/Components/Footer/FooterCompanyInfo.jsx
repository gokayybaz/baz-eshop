import React from 'react'
import FooterCompanyInfoCompanyTitle from './FooterCompanyInfoCompanyTitle'
import FooterCompanyInfoCompanyAddress from './FooterCompanyInfoCompanyAddress'
import FooterCompanyInfoCompanyCity from './FooterCompanyInfoCompanyCity'

function FooterCompanyInfo() {
    return (
        <div className='mt-6'>
            <FooterCompanyInfoCompanyTitle title={'Baz E-Shop'} />
            <FooterCompanyInfoCompanyAddress address={'Prof. Dr. Yusuf Halaçoğlu Cad. No:39/B Kat:4'} />
            <FooterCompanyInfoCompanyCity city={'Kozan / ADANA'} />
        </div>
    )
}

export default FooterCompanyInfo