'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SocialButtonProps } from '@/types';
import Link from 'next/link';

const SocialButton = ({ title, section }: SocialButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const sectionClasses = section === 'hero' ? 'w-9 h-9' : section === 'team' ? 'w-7 h-7' : '';

    return (
        <div
            className={`relative ${sectionClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href='/'>
                <Image
                    src={`/assets/icons/hero-${title}.svg`}
                    width={24}
                    height={24}
                    alt={title}
                    className={`absolute w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
            </Link>
            <Link href='/'>
                <Image
                    src={`/assets/icons/hero-${title}-hover.svg`}
                    width={24}
                    height={24}
                    alt={`${title} hover`}
                    className={`absolute w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </Link>
        </div>
    );
};

export default SocialButton;
