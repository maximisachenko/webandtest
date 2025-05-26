'use client';

import React, { useState } from 'react'
import { InputProps } from '@/types';

const Input = ({ type }: InputProps) => {
    const inputPlaceholder = type === 'text' ? 'Enter your position' : type === 'email' ? 'Enter your email' : type === 'tel' ? 'Enter your phone' : '';
    const inputTitle = type === 'text' ? 'Your name' : type === 'email' ? 'Your mail' : type === 'tel' ? 'Your phone' : '';
    const [active, setActive] = useState(false);

    return (
        <div className='flex flex-col gap-2'>
            <h4 className={`font-bold text-[16px] transition-colors duration-300 ${active ? 'text-primary' : 'text-[#BCBCBC]'}`}>
                {inputTitle}
            </h4>
            <input onFocus={() => setActive(true)}
                onBlur={() => setActive(false)} type={type} placeholder={inputPlaceholder} className='w-full px-4 py-3 font-semibold rounded-[10px] border border-[#D9D9D9] bg-white text-[16px] text-black/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200' />
        </div>
    )
}

export default Input