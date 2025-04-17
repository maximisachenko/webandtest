'use client';

import { Container, Description, Heading } from '@/components/ui'
import React, { useEffect } from 'react'
import ContactInfo from '../../ui/ContactInfo'
import { CONTACT_INFO } from '@/constants/info'
import Form from './Form';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {

    useEffect(() => {
        gsap.from(".contact-form-content", {
            scrollTrigger: {
                trigger: ".contact-form-content",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power2.out",
        });
    }, [])

    return (
        <Container type='default' colorContainer='gray' className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div className='flex flex-col gap-16 contact-form-content'>
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                    <Heading primaryTitle='Get' foregroundTitle='in touch' />
                    <Description className='w-125 max-[580px]:max-w-full' text='We’re always ready to collaborate and turn ideas into reality. Drop us a message, and let’s build something great together!' />
                </div>
                <div className="bg-white rounded-[13px] overflow-hidden py-3 pl-3 contact-form-shadow flex gap-24 max-[1335px]:gap-20 max-[1315px]:gap-16 max-[1300px]:gap-12 max-[1085px]:pr-12 max-[915px]:flex-col max-[915px]:px-3 max-[915px]:gap-8">
                    <div className="relative bg-primary pt-8 pl-6 w-101 h-auto pr-6 rounded-[13px] max-[915px]:w-full max-[915px]:h-full max-[915px]:pb-16">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/webandwhite.png')] bg-no-repeat bg-cover opacity-10 pointer-events-none"></div>

                        <div className='relative flex flex-col gap-12 z-10 max-[915px]:gap-8'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold text-2xl text-white'>Contact information</h1>
                                <p className='font-light text-[16px] text-white/60 w-[270px] max-[380px]:max-w-full'>We’re always ready to collaborate
                                    and turn ideas into reality. </p>
                            </div>
                            <div className='flex flex-col gap-8 max-[915px]:gap-4'>
                                {CONTACT_INFO.map((info, index) => (
                                    <ContactInfo key={index} title={info.title} src={info.src} infoText={info.infoText} section={info.section} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </Container>
    )
}

export default ContactForm