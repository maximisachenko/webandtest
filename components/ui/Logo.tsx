'use client'

import React from 'react'
import Image from 'next/image';
import { LogoProps } from '@/types';
import { useImageFadeIn } from '@/hooks/useImageFadeIn';


const Logo = ({ width, height, className, ref }: LogoProps) => {

    return (
        <a href='/' className='cursor-pointer'>
            <Image ref={ref} src="/assets/icons/webandlogo.svg" width={width} height={height} alt="Weband Logo" className={`cursor-pointer ${className}`} />
        </a>
    )
}

export default Logo