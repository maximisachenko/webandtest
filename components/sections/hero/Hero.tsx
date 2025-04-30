'use client';

import React, { useEffect } from 'react'
import { Button } from '@/components/ui';
import { gsap } from 'gsap';

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

            <div className="hero-content relative z-10 flex items-center justify-center text-center h-full mx-54 max-md:justify-center max-md:text-center max-xl:mx-24 max-lg:mx-16 max-sm:mx-12 max-md:mx-30">
                <div className='flex flex-col justify-center items-center gap-5 max-md:items-center'>
                    <div className='flex flex-col font-bold'>
                        <span className='text-white text-7xl max-sm:text-4xl max-md:text-5xl max-xl:text-6xl'>AI Fintech Robotics</span>
                        <span className='text-primary text-6xl max-sm:text-4xl max-md:text-5xl max-xl:text-6xl'>we build what others can’t</span>
                    </div >
                    <p className='text-xl text-white/80 max-w-[75%] -max-sm:text-sm max-lg:text-lg max-xl:text-xl'>We build what others can’t
                        (from code to competitive edge) 10+ years engineering disruptive solutions for Fortune 500s and startups
                    </p>
                    <div className='flex justify-center'>
                        <Button section='hero' title='Get free consultation' icon='/assets/icons/mail.svg' iconHeight={20} iconWidth={22} />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Hero
