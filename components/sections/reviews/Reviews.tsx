'use client';

import { Container, Description, Heading, SectionTitle, Slider } from '@/components/ui';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/Carousel';
import ReviewCard from './ReviewCard';
import { REVIEWERS } from '@/constants/reviewers';

const Reviews = () => {

    return (
        <Container type={'default'} colorContainer={'white'} className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div className='flex flex-col gap-16 max-md:gap-8'>
                <div className='flex flex-col items-center text-center'>
                    <SectionTitle title='Reviews' />
                    <Heading primaryTitle={'Customer'} foregroundTitle={'reviews are proof of our quality.'} className='w-1/2 mb-2 max-md:w-full max-lg:w-[75%]' />
                    <Description text='We’re always ready to collaborate and turn ideas into reality. Drop us a message, and let’s build something great together!'
                        className='hidden max-md:block' />
                </div>
                <div className='max-md:hidden relative'>
                    <Carousel>
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
        </Container>
    );
};

export default Reviews;
