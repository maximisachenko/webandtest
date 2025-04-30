'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { useIsTablet } from '@/hooks/useIsMobile';
import { BlogCardProps } from '@/types';

const BlogCard = ({ title, description, imageSrc }: BlogCardProps) => {
    const isTablet = useIsTablet();

    return (
        <div className='bg-white rounded-[24px] w-[347px] blog-card-shadow hover:scale-105 transition-all duration-300 cursor-default max-[430px]:w-full'>
            <Image src={imageSrc} alt='Blog card' width={347} height={211} className='rounded-t-[24px] mb-4' />
            <div className='flex flex-col px-6 pt-2 pb-8'>
                <div className='flex items-center justify-center px-2 py-1 bg-primary rounded-[4px] mb-2 w-fit'>
                    <p className='text-white text-sm font-semibold'>Article</p>
                </div>
                <h1 className='text-black text-xl font-semibold mb-2'>{title}</h1>
                <p className='text-black/40 text-[16px] font-light mb-8'>
                    {description}
                </p>
                <Button title='Read more' section='blog' icon={isTablet ? '/assets/icons/right-arrow-white.svg' : '/assets/icons/right-arrow.svg'} iconHeight={16} iconWidth={16} className='w-full' />
            </div>
        </div>
    )
}

export default BlogCard