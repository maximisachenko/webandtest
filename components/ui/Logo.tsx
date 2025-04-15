import React from 'react'
import Image from 'next/image';

interface Props {
    width: number;
    height: number;
    className?: string;
}

const Logo = ({ width, height, className }: Props) => {
    return (
        <a href='/' className='cursor-pointer'>
            <Image src="/assets/icons/webandlogo.svg" width={width} height={height} alt="Weband Logo" className={`cursor-pointer ${className}`} />
        </a>
    )
}

export default Logo