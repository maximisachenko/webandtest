'use client';

import React, { useState } from 'react';

const Textarea = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='flex flex-col gap-2'>
            <h4
                className={`font-bold text-[16px] transition-colors duration-300 ${active ? 'text-primary' : 'text-[#BCBCBC]'
                    }`}
            >
                Message
            </h4>
            <textarea
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                name='postContent'
                rows={8}
                cols={40}
                placeholder='Write here your message'
                className='px-4 py-3 font-semibold rounded-[10px] border border-[#D9D9D9] bg-white text-[16px] text-black/80 
          focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none'
            />
        </div>
    );
};

export default Textarea;
