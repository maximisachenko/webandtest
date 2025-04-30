'use client';

import { Container, Heading } from '@/components/ui'
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OUR_PROJECTS } from '@/constants/projects'
import CaseCard from './CaseCard';

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {

    useEffect(() => {
        gsap.from(".cases-content", {
            scrollTrigger: {
                trigger: ".cases-content",
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
        <Container type={'center'} colorContainer={'gray'} className='cases-content max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div className='flex justify-betwenn items-center gap-8 max-md:flex-col max-md:text-center max-lg:text-[26px]'>
                <Heading primaryTitle={'Completed'} foregroundTitle={'projects: are the result we are proud of.'} />
                <div className='px-8 py-3 bg-white rounded-[18px] cases-quantity-card-shadow'>
                    <h1 className='text-primary font-bold text-2xl whitespace-nowrap cursor-default'>50+ projects</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-12 mt-12 max-md:flex max-md:flex-col'>
                {OUR_PROJECTS.map((project) => (
                    <CaseCard key={project.id} title={project.title} description={project.description} src={project.src} techIndexes={project.techIndexes} />
                ))}
            </div>
        </Container>
    )
}

export default Cases