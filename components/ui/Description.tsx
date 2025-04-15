import React from 'react'

interface Props {
    text: string;
    className?: string;
}

const Description = ({ text, className }: Props) => {
    return (
        <p className={`text-black/40 text-xl text-light max-md:text-[16px] ${className}`}>{text}</p>
    )
}

export default Description