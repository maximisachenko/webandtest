import React from 'react'

interface Props {
    className?: string;
}

const Circle = ({ className }: Props) => {
    return (
        <div className={`bg-primary rounded-full w-4 h-4 border-[4px] border-[#FFD3C9] ${className}`} />
    )
}

export default Circle