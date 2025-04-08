'use client';

import { Button, Container, Heading } from '@/components/ui'
import React, { useEffect } from 'react'
import { Card } from '.'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Directions = () => {
    useEffect(() => {
        gsap.from(".directions-content", {
            scrollTrigger: {
                trigger: ".directions-content",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power2.out",
        });
    }, []);


    return (
        <Container type={'center'} colorContainer={'gray'} className='flex flex-col gap-16 directions-content'>
            <div className='flex justify-between items-center'>
                <Heading primaryTitle='Our' foregroundTitle='directions are innovations.' />
                <div className='flex items-center gap-6'>
                    <Button title='Learn more' section='directions' icon='/assets/icons/right-arrow.svg' iconWidth={16} iconHeight={16} />
                    <Button title='Contact us' section='directions' icon='/assets/icons/directions-mail.svg' iconHeight={18} iconWidth={18} />
                </div>
            </div>
            <div className='flex justify-between w-full bg-white rounded-[66px] py-16 px-24 directions-shadow'>
                <Card title={'AI'} src='/assets/images/ai.png' />
                <Card title={'Fintech'} src='/assets/images/fintech.png' />
                <Card title={'Robotics'} src='/assets/images/robotics.png' />
            </div>
        </Container>
    )
}

export default Directions