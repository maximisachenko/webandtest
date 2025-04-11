'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
    title: string;
    section: string;
    src?: string;
}

const SocialButton = ({ title, section, src }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const sectionClasses = section === 'hero' ? 'w-12 h-12' : section === 'team' ? 'w-7 h-7' : '';

    return (
        <div
            className={`relative ${sectionClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href='/'>
                <Image
                    src={`/assets/icons/hero-${title}.svg`}
                    width={48}
                    height={48}
                    alt={title}
                    className={`absolute w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
            </a>
            <a href='/'>
                <Image
                    src={`/assets/icons/hero-${title}-hover.svg`}
                    width={48}
                    height={48}
                    alt={`${title} hover`}
                    className={`absolute w-full h-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </a>
        </div>
    );
};

export default SocialButton;
