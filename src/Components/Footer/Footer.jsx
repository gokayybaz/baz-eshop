import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaCopyright, FaGooglePay, FaX } from 'react-icons/fa6';

import EmailSection from '../EmailSection/EmailSection';
import FooterSocialMediaIconButtons from './FooterSocialMediaIconButtons';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterTextButtons from './FooterTextButtons';
import FooterBottomLine from './FooterBottomLine';
import FooterBottomArea from './FooterBottomArea';

function Footer() {
    return (
        <footer className='relative  w-full mt-32 bg-[#f2f0f1] h-[500px]'>
            <EmailSection />
            <div className='flex flex-col justify-between h-full px-56 py-26'>
                <div className='flex px-20 w-full my-10 mb-12 justify-between'>
                    <div>
                        <FooterSocialMediaIconButtons />
                        <FooterCompanyInfo />
                    </div>
                    <div className='ml-24 flex'>
                        <FooterTextButtons isEnd={false} title={'ŞİRKETİMİZ'} buttons={["Hakkımızda", "Referanslarımız", "Çalışmalarımız", "Kariyer"]} />
                        <FooterTextButtons isEnd={false} title={'YARDIM'} buttons={["Müşteri Desteği", "Sipariş Adımları", "Şartlar ve Koşullar", "Gizlilik Sözleşmesi"]} />
                        <FooterTextButtons isEnd={true} title={'İŞLEMLER'} buttons={["Hesabım", "Sepetim", "Kargo Takip", "Ödeme Yöntemleri"]} />
                    </div>
                </div>
                <div>
                    <FooterBottomLine />
                    <FooterBottomArea />
                </div>
            </div>
        </footer>
    )
}

export default Footer