'use client';

import { Container, Description, Heading, SectionTitle, Slider } from '@/components/ui';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/sections/reviews/reviewCarousel';
import ReviewCard from './reviewCard';
import { REVIEWERS } from '@/constants/reviewers';
import RewardCard from './rewardCard';
import { CERTIFICATE_INFO } from '@/constants/companyinformation';
import CompaniesCarousel from './companiesCarousel';
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
    const headingRef = useGsapFadeUp({ trigger: ".reviews-heading", y: 50, x: 0, opacity: 0, duration: 1.5 });
    const carouselRef = useGsapFadeUp({ trigger: ".reviews-carousel", y: 0, x: 0, opacity: 0, duration: 2 });
    const sliderRef = useGsapFadeUp({ trigger: ".reviews-slider", y: -50, x: 0, opacity: 0, duration: 2 });
    const rewardRef = useGsapFadeUp({ trigger: ".reviews-reward", y: -50, x: -150, opacity: 0, duration: 1.5 });

    return (
        <div id='reviews' className='pt-16 reviews-content relative'>
            <div ref={headingRef} className='flex flex-col items-center reviews-heading text-center mb-16'>
                <SectionTitle title='Reviews' />
                <Heading primaryTitle={'Customer'} foregroundTitle={'reviews are proof of our quality.'} className='w-1/2 mb-2 max-md:w-full max-lg:w-[75%]' />
                <Description text='We’re always ready to collaborate and turn ideas into reality. Drop us a message, and let’s build something great together!'
                    className='hidden max-md:block' />
            </div>
            <div ref={carouselRef} className='reviews-carousel'>
                <CompaniesCarousel />
            </div>
            <Container type={'default'} colorContainer={'white'} className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
                <div ref={sliderRef} className='flex reviews-slider flex-col gap-16 max-md:gap-8 mb-16'>
                    <div className='max-md:hidden relative'>
                        <Carousel className='mx-11' orientation='horizontal'>
                            <CarouselContent>
                                {REVIEWERS.map((reviewer, index) => (
                                    <CarouselItem key={index} className='basis-1/2 max-[1281px]:basis-1/1'>
                                        <ReviewCard
                                            name={reviewer.name}
                                            post={reviewer.post}
                                            text={reviewer.text}
                                            date={reviewer.date}
                                            src={reviewer.src}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
                <div ref={sliderRef} className='reviews-slider'>
                    <Slider>
                        {REVIEWERS.map((reviewer, index) => (
                            <ReviewCard
                                name={reviewer.name}
                                post={reviewer.post}
                                text={reviewer.text}
                                date={reviewer.date}
                                src={reviewer.src}
                            />
                        ))}
                    </Slider>
                </div>
                <div ref={rewardRef} className="flex reviews-reward justify-between items-center w-full gap-x-8 
    max-[880px]:flex-col max-[880px]:items-center max-[880px]:!gap-y-12 
    max-xl:flex-wrap max-xl:gap-y-16 max-xl:mt-16">

                    {/* При разрешении > 1310px показываем всех вместе */}
                    <div className="flex max-xl:hidden justify-between items-center w-full">
                        {CERTIFICATE_INFO.map((certificate, index) => (
                            <RewardCard
                                key={index}
                                title={certificate.title}
                                description={certificate.description}
                            />
                        ))}
                    </div>

                    {/* При разрешении <= 1310px делим на группы */}
                    <div className="hidden max-xl:flex w-full justify-between max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-y-12">
                        {CERTIFICATE_INFO.slice(0, 2).map((certificate, index) => (
                            <RewardCard
                                key={index}
                                title={certificate.title}
                                description={certificate.description}
                            />
                        ))}
                    </div>

                    <div className="hidden max-xl:flex w-full justify-center">
                        {CERTIFICATE_INFO.slice(2).map((certificate, index) => (
                            <RewardCard
                                key={index + 2}
                                title={certificate.title}
                                description={certificate.description}
                            />
                        ))}
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Reviews;
