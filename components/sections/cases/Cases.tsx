'use client';

import { Container, Heading } from '@/components/ui'
import React from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OUR_PROJECTS } from '@/constants/projects'
import CaseCard from './caseCard';
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {
    const headingRef = useGsapFadeUp({ trigger: ".cases-heading", y: 0, x: -150, opacity: 0, duration: 1.5 });
    const quantityRef = useGsapFadeUp({ trigger: ".cases-quantity", y: 0, x: 150, opacity: 0, duration: 1.5 });
    const cardRef = useGsapFadeUp({ trigger: ".cases-card", y: 100, x: -150, opacity: 0, duration: 1.5 });

    return (
        <Container type={'center'} colorContainer={'gray'} className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div id='cases' className='flex justify-betwenn items-center gap-8 max-md:flex-col max-md:text-center max-lg:text-[26px]'>
                <div ref={headingRef} className='cases-heading'>
                    <Heading primaryTitle={'Completed'} foregroundTitle={'projects: are the result we are proud of.'} />
                </div>
                <div ref={quantityRef} className='px-8 cases-quantity py-3 bg-white rounded-[18px] cases-quantity-card-shadow'>
                    <h1 className='text-primary font-bold text-2xl whitespace-nowrap cursor-default'>50+ projects</h1>
                </div>
            </div>
            <div ref={cardRef} className='grid grid-cols-2 cases-card gap-12 mt-12 max-md:flex max-md:flex-col'>
                {OUR_PROJECTS.map((project) => (
                    <CaseCard key={project.id} title={project.title} description={project.description} src={project.src} techIndexes={project.techIndexes} />
                ))}
            </div>
        </Container>
    )
}

export default Cases