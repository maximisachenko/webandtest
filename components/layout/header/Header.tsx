'use client';

import React, { useState } from 'react'
import { Button, Logo } from '../../ui'
import { CloseHamburger, Hamburger, OpenHamburger } from '.'
import Image from 'next/image';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <header className='shadow-xl sticky top-0 z-60 bg-white'>
            <div className='flex items-center justify-between pl-16 pr-8 py-8 max-md:p-6 max-lg:pl-12 max-lg:pr-6 max-lg:py-6 max-xl:pl-14 max-xl:pr-7 max-xl:py-7'>
                <Logo width={181} height={62} className='max-sm:w-[95px] max-sm:h-[28px] max-md:w-[138px] max-md:h-[44px] max-lg:w-[138px] max-lg:h-[44px] max-xl:w-[155px] max-xl:h-[56px]' />
                <div className='flex gap-16 hide-on-mobile max-lg:gap-6 max-xl:gap-12'>
                    <nav className='flex items-center gap-8'>
                        <ul className='text-black font-semibold flex text-lg gap-8 justify-center max-lg:text-sm max-lg:gap-4 max-xl:text-[16px] max-xl:gap-6'>
                            <li>
                                <a href='/'>About us</a>
                            </li>
                            <li>
                                <a href='/'>Directions</a>
                            </li>
                            <li>
                                <a href='/'>Careers</a>
                            </li>
                            <li>
                                <a href='/'>Team</a>
                            </li>
                            <li>
                                <a href='/'>Cases</a>
                            </li>
                            <li>
                                <a href='/'>Reviews</a>
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
                            <a href='/'>About us</a>
                        </li>
                        <li>
                            <a href='/'>Directions</a>
                        </li>
                        <li>
                            <a href='/'>Careers</a>
                        </li>
                        <li>
                            <a href='/'>Team</a>
                        </li>
                        <li>
                            <a href='/'>Cases</a>
                        </li>
                        <li>
                            <a href='/'>Reviews</a>
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