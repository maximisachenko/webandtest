import { ContactInfo, Container, Logo } from '@/components/ui'
import React from 'react'
import FooterSocial from './FooterSocial'
import { CONTACT_INFO_PRIMARY } from '@/constants/info'

const Footer = () => {
    return (
        <Container type='default' colorContainer='white' className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30 max-md:pb-6'>
            <div className='flex flex-col gap-8 max-md:gap-16'>
                <div className='flex justify-between 
                                max-[915px]:gap-x-15
                                max-[915px]:gap-y-16 
                                max-[915px]:[&>*:nth-last-child(1):nth-child(odd)]:col-span-2
                                
                                max-md:flex-wrap max-md:gap-16'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-4'>
                            <Logo width={181} height={62} />
                            <p className='font-medium text-[16px] text-black/40 w-100 max-[1145px]:w-50 max-[460px]:w-full'>We can help develop your project, elevate your business, or support your existing web application!</p>
                        </div>
                        <div className='flex gap-3'>
                            <FooterSocial title='Linkedin' />
                            <FooterSocial title='Facebook' />
                            <FooterSocial title='Instagram' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-black text-xl font-semibold'>Company</h3>
                        <ul className='text-black font-medium text-[16px] flex flex-col gap-6'>
                            <li className='cursor-pointer'>
                                <a>About us</a>
                            </li>
                            <li className='cursor-pointer'>
                                <a>Our services</a>
                            </li>
                            <li className='cursor-pointer'>
                                <a>Our values</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-black text-xl font-semibold'>Contacts</h3>
                        {CONTACT_INFO_PRIMARY.map((info, index) => (
                            <ContactInfo key={index} title={info.title} src={info.src} infoText={info.infoText} section={info.section} />
                        ))}
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#ECECEC] max-md:hidden' />
                <div className='flex justify-between max-md:flex-col max-md:text-center max-md:items-center max-md:gap-3'>
                    <div className='flex flex-col gap-1'>
                        <h5 className='text-[16px] font-semibold text-black max-md:text-sm max-sm:text-[12px]'>© 2025 Weband ltd. All Rights Reserved </h5>
                        <p className='text-[12px] font-medium text-[#737373] w-104 max-md:w-80 max-sm:w-full'>
                            Unauthorized use of our intellectual property for machine learning purposes is strictly prohibited.
                            Violators will be subject to legal action.</p>
                    </div>
                    <a href='/' className='text-black text-[16px] font-semibold cursor-pointer max-md:text-sm max-sm:text-[12px]'>Privacy & Police</a>
                </div>
            </div>
        </Container>
    )
}

export default Footer