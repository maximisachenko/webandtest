'use client';

import React, { useEffect } from 'react'
import { Button, SocialButton } from '@/components/ui';
import { gsap } from 'gsap';
import { OUR_SOCIALS_HERO } from '@/constants/socials';

const Hero = () => {
    useEffect(() => {
        gsap.from(".hero-content", {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power2.out",
        });
    }, []);

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

            <div className="hero-content relative z-10 flex items-center justify-between h-full mx-54 max-md:justify-center max-md:text-center max-xl:mx-24 max-lg:mx-16 max-sm:mx-12 max-md:mx-30">
                <div className='flex flex-col gap-5 max-md:items-center'>
                    <div className='flex flex-col text-7xl font-bold max-sm:text-4xl max-md:text-5xl max-xl:text-6xl'>
                        <span className='text-white'>Web solutions</span>
                        <span className='text-primary'>for your business</span>
                    </div >
                    <p className='text-2xl text-white/80 max-sm:text-sm max-lg:text-lg max-xl:text-xl'>We can help you develop your
                        own project, bring your<br />business on a new level or help support you an already<br />
                        functioning web application!</p>
                    <div>
                        <Button section='hero' title='Contact us' icon='/assets/icons/hero-mail.svg' iconWidth={18} iconHeight={18} />
                    </div>
                </div>
                <div className='flex flex-col gap-6 max-md:hidden'>
                    {OUR_SOCIALS_HERO.map((social, index) => (
                        <SocialButton key={index} title={social.title} section={social.section} />
                    ))}
                </div>
            </div >
        </div >
    )
}

export default Hero
