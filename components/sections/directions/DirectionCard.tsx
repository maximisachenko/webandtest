import Image from 'next/image'
import React from 'react'

interface Props {
    title: string;
    description: string;
    src: string;
}

const DirectionCard = ({ title, description, src }: Props) => {
    return (
        <div className='flex flex-col items-center justify-center text-center w-51 directions-card-container'>
            <div className="directions-card relative w-51 h-51 rounded-[15px] overflow-hidden mb-4 directions-image">
                <Image
                    src={src}
                    alt={`${title} photo`}
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className='text-xl text-black font-semibold mb-2 directions-title'>{title}</h1>
            <p className='text-[16px] font-light text-black/40 directions-description'>{description}</p>
        </div>
    )
}

export default DirectionCard