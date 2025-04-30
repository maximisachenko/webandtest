import React from 'react'
import Image from 'next/image'
import { ContactInfoProps } from '@/types';

const ContactInfo = ({ title, src, infoText, section }: ContactInfoProps) => {
    const textColor = section === 'footer' ? 'text-primary' : section === 'contact-form' ? 'text-white' : '';
    return (
        <div className='flex gap-4 items-center max-[360px]:gap-2'>
            <Image src={src} width={24} height={24} alt={`${title} icon`} className='max-[310px]:w-5 max-[310px]:h-5' />
            <h3 className={`${textColor} text-[16px] font-medium max-[360px]:text-sm max-[305px]:text-[12px]`}>{infoText}</h3>
        </div>
    )
}

export default ContactInfo