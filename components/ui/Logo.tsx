import React from 'react'
import Image from 'next/image';
import { LogoProps } from '@/types';

const Logo = ({ width, height, className }: LogoProps) => {
    return (
        <a href='/' className='cursor-pointer'>
            <Image src="/assets/icons/webandlogo.svg" width={width} height={height} alt="Weband Logo" className={`cursor-pointer ${className}`} />
        </a>
    )
}

export default Logo