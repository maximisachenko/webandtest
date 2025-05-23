'use client';

import React, { useState } from 'react'
import { Button, Logo } from '../../ui'
import Image from 'next/image';
import OpenHamburger from './openHamburger';
import CloseHamburger from './closeHamburger';
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';
import { useImageFadeIn } from '@/hooks/useImageFadeIn';
import Link from 'next/link';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const handleNavbar = () => {
        setNavbar(!navbar);
    }

    const headerRef = useGsapFadeUp({ trigger: ".header", y: 0, x: 0, opacity: 0, duration: 1.5 });
    const navRef = useGsapFadeUp({ trigger: ".nav", y: 0, x: 150, opacity: 0, duration: 1.5 });
    const imageRef = useImageFadeIn();

    return (
        <header ref={headerRef} className='shadow-xl header sticky top-0 z-60 bg-white'>
            <div className='flex items-center justify-between pl-16 pr-8 py-8 max-md:p-6 max-lg:pl-12 max-lg:pr-6 max-lg:py-6 max-xl:pl-14 max-xl:pr-7 max-xl:py-7'>
                <Logo ref={imageRef} width={181} height={62} className='max-sm:w-[95px] max-sm:h-[28px] max-md:w-[138px] max-md:h-[44px] max-lg:w-[138px] max-lg:h-[44px] max-xl:w-[155px] max-xl:h-[56px]' />
                <div ref={navRef} className='flex nav gap-16 hide-on-mobile max-lg:gap-6 max-xl:gap-12'>
                    <nav className='flex items-center gap-8'>
                        <ul className='text-black font-semibold flex text-lg gap-8 justify-center max-lg:text-sm max-lg:gap-4 max-xl:text-[16px] max-xl:gap-6'>
                            <li>
                                <Link href='#about-us'>About us</Link>
                            </li>
                            <li>
                                <Link href='#directions'>Directions</Link>
                            </li>
                            <li>
                                <Link href='#cases'>Cases</Link>
                            </li>
                            <li>
                                <Link href='#reviews'>Reviews</Link>
                            </li>
                            <li>
                                <Link href='#blog'>Our blog</Link>
                            </li>
                        </ul>
                    </nav>
                    <Button title={'Contact us'} section={'header'} />
                </div>
                <OpenHamburger onClick={handleNavbar} />
            </div>
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-30 hide-on-dekstop
                    ${navbar ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={handleNavbar}
            />
            <div className={`fixed h-screen w-[50%] bg-second-background right-0 top-0 
                pr-6 py-8 max-md:p-6 max-lg:pl-12 max-lg:pr-6 max-lg:py-6 
                transition-transform duration-300 ease-in-out 
                z-40 hide-on-dekstop ${navbar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex justify-end'>
                    <CloseHamburger onClick={handleNavbar} />
                </div>
                <div className='mt-10 flex flex-col gap-12 text-black font-semibold text-lg max-sm:text-[16px]'>
                    <ul className='flex flex-col items-center gap-4 justify-center'>
                        <li>
                            <Link href='/'>About us</Link>
                        </li>
                        <li>
                            <Link href='/'>Directions</Link>
                        </li>
                        <li>
                            <Link href='/'>Careers</Link>
                        </li>
                        <li>
                            <Link href='/'>Team</Link>
                        </li>
                        <li>
                            <Link href='/'>Cases</Link>
                        </li>
                        <li>
                            <Link href='/'>Reviews</Link>
                        </li>
                    </ul>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src='/assets/icons/linkedin.svg' width={0} height={0} alt="Linkedin" className='max-sm:w-9 max-sm:h-9 w-12 h-12' />
                        <Image src='/assets/icons/instagram.svg' width={0} height={0} alt="Linkedin" className='max-sm:w-9 max-sm:h-9 w-12 h-12' />
                        <Image src='/assets/icons/facebook.svg' width={0} height={0} alt="Linkedin" className='max-sm:w-9 max-sm:h-9 w-12 h-12' />
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header