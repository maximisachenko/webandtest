import { Circle } from '@/components/ui'
import React from 'react'
import Image from 'next/image'

interface Props {
    name: string;
    post: string;
    text: string;
    src: string;
    date: string;
    rating?: number;
}

const ReviewCard = ({ name, post, text, date, rating, src }: Props) => {
    return (
        <div className='bg-white rounded-[20px] reviews-card-shadow pr-12 overflow-hidden my-4 mx-4 max-[1262px]:pr-8 max-md:my-10 max-md:p-6'>
            <div className='flex gap-12 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0'>
                <div className='relative flex flex-col justify-end'>
                    <div className='bg-primary h-44 w-54 rounded-tr-[78px] max-[1281px]:h-44 max-[1281px]:w-48 max-[1344px]:h-58 max-[1247px]:h-44 max-[1247px]:w-48 max-[655px]:h-48 max-md:hidden' />
                    <div className='absolute h-[95%] max-[1344px]:w-[120%] max-[696px]:w-[130%] max-[655px]:w-[120%] max-[655px]:h-[85%] max-md:relative'>
                        <Image
                            src={src}
                            alt={`Reviewer ${name} photo`}
                            width={200}
                            height={262}
                            className='h-full w-auto max-md:hidden'
                        />
                        <div className="w-24 h-24 bg-primary rounded-full relative overflow-hidden">
                            <Image
                                src={src}
                                alt={`Reviewer ${name} photo`}
                                width={200}
                                height={262}
                                className="w-50 h-[262px] object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-12 mb-6 max-md:mt-4 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:mb-0'>
                    <h1 className='font-semibold text-xl text-black'>{name}</h1>
                    <div className='flex gap-1 items-center mb-5 max-md:mb-6'>
                        <Circle className='max-md:hidden' />
                        <h2 className='font-bold text-sm text-black/30 max-md:font-medium'>{post}</h2>
                    </div>
                    <p className='font-light text-[16px] text-black/40 mb-6 max-md:mb-8'>{text}</p>
                    <div className='flex justify-between items-center font-semibold text-[16px] max-[1373px]:text-sm max-[1344px]:flex-col max-[1344px]:text-[16px] max-[1344px]:gap-2 max-[1281px]:flex-row max-[1281px]:justify-between max-md:flex-col'>
                        <div className='flex items-center gap-1'>
                            <Image src='/assets/icons/date.svg' width={16} height={16} alt='Date' />
                            <h2 className='text-primary'>{date}</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-black'>{rating}</h3>
                            <div className='flex gap-[2px] bg-card rounded-[8px] p-2 max-[1344px]:w-full max-[1344px]:py-2 max-[1344px]:px-6 max-[800px]:px-2 max-md:px-9 max-md:py-2'>
                                <Image src='/assets/icons/orange-star.svg' width={14} height={14} alt='Star' className='max-[1247px]:w-4 max-[1247px]:h-4' />
                                <Image src='/assets/icons/orange-star.svg' width={14} height={14} alt='Star' className='max-[1247px]:w-4 max-[1247px]:h-4' />
                                <Image src='/assets/icons/orange-star.svg' width={14} height={14} alt='Star' className='max-[1247px]:w-4 max-[1247px]:h-4' />
                                <Image src='/assets/icons/orange-star.svg' width={14} height={14} alt='Star' className='max-[1247px]:w-4 max-[1247px]:h-4' />
                                <Image src='/assets/icons/orange-star.svg' width={14} height={14} alt='Star' className='max-[1247px]:w-4 max-[1247px]:h-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard