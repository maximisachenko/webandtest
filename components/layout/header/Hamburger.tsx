import React from 'react'
import { HamburgerProps } from '@/types'

const Hamburger = ({ onClick, children }: HamburgerProps) => {
    return (
        <div onClick={onClick} className='md:hidden'>
            {children}
        </div>
    );
};

export default Hamburger