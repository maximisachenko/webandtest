import React from 'react'

interface Props {
    primaryTitle: string;
    foregroundTitle: string;
}

const Heading = ({ primaryTitle, foregroundTitle }: Props) => {
    return (
        <div className='text-[40px] font-semibold flex gap-2'>
            <h1 className='text-primary'>{primaryTitle}</h1>
            <h2 className='text-black'>{foregroundTitle}</h2>

        </div>
    )
}

export default Heading