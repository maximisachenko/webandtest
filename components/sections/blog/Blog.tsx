'use client'

import { Container, Heading } from '@/components/ui'
import React from 'react'
import { ARTICLES } from '@/constants/articles'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';
import BlogCard from './BlogCard'


gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const headingRef = useGsapFadeUp({ trigger: ".blog-heading", y: 0, x: -150, opacity: 0, duration: 1.5 });
    const cardRef = useGsapFadeUp({ trigger: ".blog-cards", y: 100, x: 0, opacity: 0, duration: 1.5 });

    return (
        <Container type='default' colorContainer='gray' className='max-xl:px-24 max-lg:px-16 max-sm:px-6 max-md:px-30'>
            <div id='blog' className='blog-content max-w-screen-2xl mx-auto'>
                <div ref={headingRef} className='mb-16 blog-heading max-md:text-center max-md:flex max-md:justify-center'>
                    <Heading primaryTitle='The most' foregroundTitle='popular and requested articles that are worth reading' className='w-1/2 max-[978px]:w-[80%] max-[553px]:w-full' />
                </div>
                <div ref={cardRef} className="flex blog-cards justify-between mb-16 items-center w-full gap-x-8 
    max-[880px]:flex-col max-[880px]:items-center max-[880px]:!gap-y-12 
    max-xl:flex-wrap max-xl:gap-y-16 max-xl:mt-16">

                    {/* При разрешении > 1310px показываем всех вместе */}
                    <div className="flex max-xl:hidden justify-between items-center w-full">
                        {ARTICLES.map((article, index) => (
                            <BlogCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                imageSrc={article.imageSrc}
                            />
                        ))}
                    </div>

                    {/* При разрешении <= 1310px делим на группы */}
                    <div className="hidden max-xl:flex w-full justify-between max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-y-12">
                        {ARTICLES.slice(0, 2).map((article, index) => (
                            <BlogCard
                                key={index}
                                title={article.title}
                                description={article.description}
                                imageSrc={article.imageSrc}
                            />
                        ))}
                    </div>

                    <div className="hidden max-xl:flex w-full justify-center">
                        {ARTICLES.slice(2).map((article, index) => (
                            <BlogCard
                                key={index + 2}
                                title={article.title}
                                description={article.description}
                                imageSrc={article.imageSrc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Blog