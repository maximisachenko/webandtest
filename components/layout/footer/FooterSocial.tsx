import React from 'react'
import Image from 'next/image'

interface Props {
    title: 'Linkedin' | 'Instagram' | 'Facebook';
}

const FooterSocial = ({ title }: Props) => {
    const socialSrc = title === 'Linkedin' ? '/assets/icons/footerlinkedin.svg' :
        title === 'Facebook' ? '/assets/icons/footerfacebook.svg' :
            title === 'Instagram' ? '/assets/icons/footerinstagram.svg' : '';

    return (
        <div className='p-3 rounded-full bg-[#E5E5E5] transition hover:bg-primary hover:duration-300'>
            <Image src={socialSrc} width={24} height={24} alt={`${title} icon`} />
        </div>
    )
}

export default FooterSocial