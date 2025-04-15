import { Button } from '@/components/ui'
import React from 'react'
import Image from 'next/image'

interface Props {
    firstTitle: string;
    secondTitle: string;
    preTitle: string;
    description: string;
    iconSrc: string;
}

const InfoCard = ({ firstTitle, secondTitle, preTitle, description, iconSrc }: Props) => {
    return (
        <div className='bg-white hover:bg-white duration-300 rounded-tl-[34px] rounded-bl-[34px] px-8 pt-8 pb-4 about-us-card-shadow w-85 max-[420px]:max-w-full'>
            <span className='flex items-center gap-2 mb-8'>
                <h1 className='text-2xl text-black font-bold'>{firstTitle}</h1>
                <h1 className='text-2xl text-primary font-bold'>{secondTitle}</h1>
            </span>
            <div className='flex flex-col gap-4 mb-2 w-61 max-[420px]:max-w-full'>
                <h2 className='text-black text-xl font-semibold'>{preTitle}</h2>
                <p className='text-[16px] font-light text-black/40'>{description}</p>
            </div>
            <div className='flex items-center justify-between'>
                <Button title={'Read more'} section='header' icon='/assets/icons/right-arrow-white.svg' iconHeight={18} iconWidth={18} className='max-[360px]:w-full' />
                <div className='w-[73px] h-[73px] max-[360px]:hidden'>
                    <Image src={iconSrc} width={500} height={500} alt='Creation date' />
                </div>
            </div>
        </div>
    )
}

export default InfoCard