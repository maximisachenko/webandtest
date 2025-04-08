import Image from 'next/image'
import React from 'react'

interface Props {
    title: 'AI' | 'Robotics' | 'Fintech';
    src: string;
}

const Card = ({ title, src }: Props) => {
    const desctiptionText = title === 'AI' ? 'Modern payment solutions and financial analytics.' : title === 'Robotics' ? 'Modern payment solutions and financial analytics.' : title === 'Fintech' ? 'Modern payment solutions and financial analytics.' : '';
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <div className="directions-card relative w-51 h-51 rounded-[15px] overflow-hidden mb-4">
                <Image
                    src={src}
                    alt={`${title} photo`}
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className='text-xl text-black font-semibold mb-2'>{title}</h1>
            <p className='text-[16px] font-light text-black/40'>{desctiptionText}</p>
        </div>
    )
}

export default Card