import React from 'react'
import { OpenHamburgerProps } from '@/types'

const OpenHamburger = ({ onClick }: OpenHamburgerProps) => {
    return (
        <div className='filter hide-on-dekstop' onClick={onClick}>
            <div className='flex flex-col gap-1'>
                <div className='filter-separator' />
                <div className='filter-separator' />
                <div className='filter-separator' />
            </div>
        </div>
    )
}

export default OpenHamburger