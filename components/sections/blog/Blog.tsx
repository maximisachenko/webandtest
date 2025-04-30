'use client'

import { Container, Heading } from '@/components/ui'
import BlogCard from './BlogCard'
import React, { useEffect } from 'react'
import SubscribeForm from './SubscribeForm'
import { ARTICLES } from '@/constants/articles'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Blog = () => {

    useEffect(() => {
        gsap.from(".blog-content", {
            scrollTrigger: {
                trigger: ".blog-content",
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
            <div className='blog-content'>
                <div className='mb-16 max-md:text-center max-md:flex max-md:justify-center'>
                    <Heading primaryTitle='The most' foregroundTitle='popular and requested articles that are worth reading' className='w-1/2 max-[978px]:w-[80%] max-[553px]:w-full' />
                </div>
                <div className="flex justify-between mb-16 items-center w-full gap-x-8 
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
                <SubscribeForm />
            </div>
        </Container>
    )
}

export default Blog