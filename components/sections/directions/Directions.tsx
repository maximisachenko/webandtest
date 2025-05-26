'use client';

import { Button, Container, Description, Heading } from '@/components/ui'
import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OUR_DIRECTIONS } from '@/constants/directions';
import DirectionCard from './DirectionCard';
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

gsap.registerPlugin(ScrollTrigger);

const Directions = () => {
    const textRef = useGsapFadeUp({ trigger: ".directions-heading", y: 60, x: -40, opacity: 0, duration: 2 });
    const descriptionRef = useGsapFadeUp({ trigger: ".directions-description", y: 60, x: -40, opacity: 0, duration: 2 });
    const buttonRef = useGsapFadeUp({ trigger: ".directions-button", y: 30, x: 0, opacity: 0, duration: 2 });
    const directionRef = useGsapFadeUp({ trigger: ".directions-content", y: 100, x: 0, opacity: 0, duration: 2 });

    return (
        <Container type={'center'} colorContainer={'gray'} className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div className='flex flex-col gap-16 max-w-screen-2xl mx-auto'>
                <div id='directions' className='flex justify-between items-center max-md:justify-center max-md:flex-col max-md:text-center max-md:gap-4'>
                    <div ref={textRef}>
                        <Heading primaryTitle='Our' foregroundTitle='directions are innovations.' className='directions-heading max-md:text-center max-lg:text-[26px]' />
                    </div>
                    <div ref={buttonRef} className='flex items-center gap-6 max-md:hidden directions-button'>
                        <Button title='Learn more' section='directions' icon='/assets/icons/right-arrow.svg' iconWidth={16} iconHeight={16} />
                        <Button title='Contact us' section='directions' icon='/assets/icons/directions-mail.svg' iconHeight={18} iconWidth={18} />
                    </div>
                    <div ref={descriptionRef} className='md:hidden'>
                        <Description text='Innovative directions are what we strives for. Innovation is a big step towards the future.' className='md:hidden' />
                    </div>
                </div>
                <div ref={directionRef} className='flex justify-center gap-32 bg-white rounded-3xl directions-content directions-shadow py-16 max-md:flex-col directions-shadow max-md:gap-12 max-md:items-center'>
                    {OUR_DIRECTIONS.map((direction, index) => (
                        <DirectionCard key={index} title={direction.title} preTitle={direction.preTitle} description={direction.description} src={direction.src} />
                    ))}
                </div>
                <Button title={'Learn more'} className='flex gap-2 items-center justify-center bg-primary text-[16px] rounded-[9px] w-full py-3 font-semibold text-white max-lg:text-[16px] max-sm:text-[16px] hide-on-dekstop' icon='/assets/icons/right-arrow-white.svg' iconWidth={16} iconHeight={16} />
            </div>
        </Container>
    )
}

export default Directions