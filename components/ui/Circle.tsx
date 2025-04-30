import { CircleProps } from '@/types'
import React from 'react'

const Circle = ({ className }: CircleProps) => {
    return (
        <div className={`bg-primary rounded-full w-4 h-4 border-[4px] border-[#FFD3C9] ${className}`} />
    )
}

export default Circle