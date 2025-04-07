import React from 'react'
import Image from 'next/image';

interface Props {
    width: number;
    height: number;
}

const Logo = ({ width, height }: Props) => {
    return (
        <Image src="/assets/icons/webandlogo.svg" width={width} height={height} alt="Weband Logo" className='cursor-pointer' />
    )
}

export default Logo