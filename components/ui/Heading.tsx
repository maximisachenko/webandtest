import { HeadingProps } from '@/types';
import React from 'react'

const Heading = ({ primaryTitle, foregroundTitle, additionalTitle, className }: HeadingProps) => {

    return (
        <div className={`text-[40px] font-semibold ${className} max-md:text-[32px] max-sm:text-[32px]`}>
            <h1>
                <span className='text-primary'>{primaryTitle} </span>
                <span className='text-black'>{foregroundTitle} </span>
                {additionalTitle && <span className='text-primary'>{additionalTitle}</span>}
            </h1>
        </div>
    );
};

export default Heading;
