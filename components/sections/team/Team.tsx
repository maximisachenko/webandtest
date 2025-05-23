'use client';

import { Container, Description, Heading, SectionTitle, Slider } from '@/components/ui'
import React, { useEffect } from 'react';
import MemberCard from './memberCard';
import { TEAM_MEMBERS } from '@/constants/team'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Team = () => {

    useEffect(() => {
        gsap.from(".team-content", {
            scrollTrigger: {
                trigger: ".team-content",
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
        <Container type='default' colorContainer={'white'} className='team-content max-xl:px-24 max-lg:px-16 max-sm:px-6 min-[500px]:px-12 max-md:px-30'>
            <div className='flex flex-col justify-center items-center text-center'>
                <SectionTitle title='Our team' />
                <Heading primaryTitle={'Our'} foregroundTitle={'brilliant team of'} additionalTitle={'Weband'} className='mb-2' />
                <Description text='These people work on making our products best.' />
            </div>
            <div className="
                        w-full 
                        flex flex-wrap justify-center 
                        gap-x-[calc((100%-993px)/2)] gap-y-32 
                        mt-16

                        max-[1140px]:gap-x-15
                        max-[1140px]:gap-y-32 
                        max-[1140px]:[&>*:nth-last-child(1):nth-child(odd)]:col-span-2
                        
                        max-md:hidden
                        ">

                {TEAM_MEMBERS.map((member, index) => (
                    <MemberCard key={index} name={member.name}
                        post={member.post}
                        iconWidth={member.iconWidth}
                        iconHeight={member.iconHeight}
                        iconSrc={member.iconSrc}
                        photoSrc={member.photoSrc}
                    />
                ))}
            </div>
            <Slider>
                {TEAM_MEMBERS.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        post={member.post}
                        iconHeight={member.iconHeight}
                        iconWidth={member.iconWidth}
                        iconSrc={member.iconSrc}
                        photoSrc={member.photoSrc}
                    />
                ))}
            </Slider>
        </Container>
    )
}

export default Team