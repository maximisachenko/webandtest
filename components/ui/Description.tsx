import { DescriptionProps } from '@/types'
import React from 'react'

const Description = ({ text, className }: DescriptionProps) => {
    return (
        <p className={`text-black/40 text-xl text-light max-md:text-[16px] ${className}`}>{text}</p>
    )
}

export default Description