import Image from 'next/image'
import React from 'react'
import { DirectionCardProps } from '@/types';
import { useGsapFadeUp } from '@/hooks/useGsapFadeUp';

const DirectionCard = ({ title, preTitle, description, src }: DirectionCardProps) => {
    const imageCardRef = useGsapFadeUp({ trigger: ".directions-image", y: 50, x: 0, opacity: 100, duration: 3, });

    return (
        <div className='flex flex-col items-center justify-center text-center w-full directions-card-container'>
            <div ref={imageCardRef} className="directions-card directions-image relative w-51 h-51 rounded-[15px] overflow-hidden mb-4 directions-image">
                <Image
                    src={src}
                    alt={`${title} photo`}
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className='text-xl text-black font-semibold mb-2 directions-title'>{title}</h1>
            <h2 className='text-lg text-black/80 font-medium mb-2'>{preTitle}</h2>
            <p className='text-[16px] font-light text-black/40 directions-description mb-4'>{description}</p>
        </div>
    )
}

export default DirectionCard