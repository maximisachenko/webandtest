import React from 'react'
import { Circle } from '.'

const SectionTitle = () => {
    return (
        <div className='w-[153px] h-[38px] bg-transparent border-[1px] rounded-[18px] border-black/30 flex items-center mb-12'>
            <div className='flex items-center gap-1 px-5 py-[6px]'>
                <Circle />
                <h1 className='font-semibold text-xl'>Our team</h1>
            </div>
        </div>
    )
}

export default SectionTitle