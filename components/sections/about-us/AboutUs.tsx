'use client';

import { Container, Description, Heading, SectionTitle } from '@/components/ui'
import React from 'react'
import InfoCard from './AboutUsCard'
import { COMPANY_INFORMATION } from '@/constants/companyinformation'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

gsap.registerPlugin(ScrollTrigger);


const AboutUs = () => {
    const headingRef = useGsapFadeUp({ trigger: ".about-us-heading", y: 0, x: -150, opacity: 0, duration: 1.5 });
    const secondHeadingRef = useGsapFadeUp({ trigger: ".about-us-second-heading", y: 0, x: 150, opacity: 0, duration: 1.5 });
    const descriptionRef = useGsapFadeUp({ trigger: ".about-us-description", y: 0, x: -150, opacity: 0, duration: 1.5 });
    const cardRef = useGsapFadeUp({ trigger: ".about-us-cards", y: 150, x: -150, opacity: 0, duration: 1.5 });

    return (
        <Container type={'default'} colorContainer={'gray'} className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div id='about-us' className='about-us-content max-w-screen-2xl mx-auto'>
                <div ref={headingRef} className='flex about-us-heading max-[1130px]:justify-center'>
                    <SectionTitle title='About company' />
                </div>
                <div className='flex justify-between items-center mb-12 max-[1130px]:flex-col max-[1130px]:text-center max-[1130px]:gap-8 max-[1130px]:justify-center'>
                    <div ref={secondHeadingRef} className='about-us-second-heading'>
                        <Heading className='w-[575px] max-xl:w-[455px] max-[1130px]:max-w-full' primaryTitle='Our story:' foregroundTitle='Shaping the Future of Web Development.' />
                    </div>
                    <div ref={descriptionRef} className='about-us-description'>
                        <Description className='w-[461px] max-[1130px]:max-w-full' text='From our humble beginnings to becoming a leading provider of 
                    web solutions, our journey has been defined by innovation, 
                    creativity, and a commitment to excellence. ' />
                    </div>
                </div>
                <div ref={cardRef} className='flex about-us-cards justify-between items-center w-full gap-x-8 
                                max-[880px]:flex-col max-[880px]:items-center max-[880px]:!gap-y-12 max-xl:flex-wrap max-xl:gap-y-16 max-xl:mt-16 
                                '>

                    <div className='hidden max-xl:flex w-full justify-between max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-y-12'>
                        {COMPANY_INFORMATION.slice(0, 2).map((info, index) => (
                            <InfoCard
                                key={index}
                                firstTitle={info.firstTitle}
                                secondTitle={info.secondTitle}
                                preTitle={info.preTitle}
                                description={info.description}
                                iconSrc={info.iconSrc}
                            />
                        ))}
                    </div>

                    <div className='hidden max-xl:flex w-full justify-center'>
                        {COMPANY_INFORMATION.slice(2).map((info, index) => (
                            <InfoCard
                                key={index + 2}
                                firstTitle={info.firstTitle}
                                secondTitle={info.secondTitle}
                                preTitle={info.preTitle}
                                description={info.description}
                                iconSrc={info.iconSrc}
                            />
                        ))}
                    </div>

                    <div className='flex max-xl:hidden justify-between items-start w-full'>
                        {COMPANY_INFORMATION.map((info, index) => (
                            <InfoCard
                                key={index}
                                firstTitle={info.firstTitle}
                                secondTitle={info.secondTitle}
                                preTitle={info.preTitle}
                                description={info.description}
                                iconSrc={info.iconSrc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutUs