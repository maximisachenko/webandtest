'use client'

import React from 'react'
import Image from 'next/image';
import { LogoProps } from '@/types';
import Link from 'next/link';


const Logo = ({ width, height, className, ref }: LogoProps) => {

    return (
        <Link href='/' className='cursor-pointer'>
            <Image ref={ref} src="/assets/icons/webandlogo.svg" width={width} height={height} alt="Weband Logo" className={`cursor-pointer ${className}`} />
        </Link>
    )
}

export default Logo