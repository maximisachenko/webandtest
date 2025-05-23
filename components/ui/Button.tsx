import React from 'react'
import Image from 'next/image';
import { ButtonProps } from '@/types';

const Button = ({ title, icon, section, iconWidth, iconHeight, className }: ButtonProps) => {
    const buttonClass =
        section === 'header' ? 'header-hero-btn primary-button' : section === 'hero' ? 'header-hero-btn primary-button' :
            section === 'about-us' ? 'about-us-button' :
                section === 'directions' ? 'directions-btn' :
                    section === 'team' ? 'team-button' :
                        section === 'cases' ? 'cases-btn' :
                            section === 'form' ? 'form-button primary-button' :
                                section === 'footer' ? 'footer-button' :
                                    section === 'reward-card' ? 'reward-card-button' :
                                        section === 'blog' ? 'blog-btn' : '';

    return (
        <button className={`${buttonClass} ${className}`}>
            {title}
            {icon && <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
        </button>
    );
}

export default Button