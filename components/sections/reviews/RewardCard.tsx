import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui'
import { RewardCardProps } from '@/types'

const RewardCard = ({ title, description }: RewardCardProps) => {
    return (
        <div className='relative bg-white rounded-[22px] px-6 pt-12 flex justify-center items-center flex-col w-[351px] text-center reward-card-shadow pb-9 hover:scale-105 transition-all duration-300 cursor-default max-[430px]:w-full'>
            <Image src='/assets/images/card-fon.svg' alt='Reward Card Background' className='absolute top-0 left-0 rounded-t-[22px]' width={351} height={351} />
            <Image src="/assets/images/medal.svg" alt="Medal" width={156} height={154} className='mb-6 z-10' />
            <h1 className='font-semibold text-[24px] text-black mb-2'>{title}</h1>
            <p className='font-light text-[16px] text-black/40 mb-4'>
                {description}
            </p>
            <Button title={'View this'} section='reward-card' icon='/assets/icons/right-arrow-white.svg' iconHeight={14} iconWidth={14} />
        </div>
    )
}

export default RewardCard