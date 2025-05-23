import React from 'react'
import Image from 'next/image'
import { FooterSocialProps } from '@/types';

const FooterSocialButton = ({ title }: FooterSocialProps) => {
    const socialSrc = title === 'Linkedin' ? '/assets/icons/footerlinkedin.svg' :
        title === 'Facebook' ? '/assets/icons/footerfacebook.svg' :
            title === 'Instagram' ? '/assets/icons/footerinstagram.svg' : '';

    return (
        <div className='p-3 rounded-full cursor-pointer bg-[#E5E5E5] transition hover:bg-[#E5E5E5]/60 hover:duration-300'>
            <Image src={socialSrc} width={24} height={24} alt={`${title} icon`} />
        </div>
    )
}

export default FooterSocialButton