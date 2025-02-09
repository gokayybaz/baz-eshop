import React from 'react'
import FooterSocialMediaIconButton from './FooterSocialMediaIconButton'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function FooterSocialMediaIconButtons() {
    return (
        <div className='mt-2'>
            <FooterSocialMediaIconButton icon={<FaInstagram size={24} className='text-gray-900' />} />
            <FooterSocialMediaIconButton icon={<FaFacebook size={24} className='text-gray-900' />} />
            <FooterSocialMediaIconButton icon={<FaTwitter size={24} className='text-gray-900' />} />
            <FooterSocialMediaIconButton icon={<FaLinkedin size={24} className='text-gray-900' />} />
            <FooterSocialMediaIconButton icon={<FaGithub size={24} className='text-gray-900' />} />
        </div>
    )
}

export default FooterSocialMediaIconButtons