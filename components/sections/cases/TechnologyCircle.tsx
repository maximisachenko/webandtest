import React from 'react'
import Image from 'next/image';

interface Props {
    name: string;
    src: string;
    width: number;
    height: number;
}

const TechnologyCircle = ({ name, src, width, height }: Props) => {
    return (
        <div className='
            w-9 h-9 
            bg-card flex items-center justify-center rounded-full 
            transition-colors duration-300 ease-out 
            hover:bg-card-hover

            max-xl:w-9 max-xl:h-9
            max-[1335px]:w-8 max-[1335px]:h-8
            '>
            <Image src={src} width={width} height={height} alt={`${name} icon`} className='max-xl:scale-100 hover:scale-110 transform group-hover:scale-120 transition-transform duration-200' />
        </div>
    )
}

export default TechnologyCircle