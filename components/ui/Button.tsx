import React from 'react'
import Image from 'next/image';

interface Props {
    title: string;
    section: 'header' | 'about-us' | 'directions' | 'team' | 'cases' | 'form' | 'footer' | 'hero';
    icon?: string
    iconWidth?: number;
    iconHeight?: number;
}

const Button = ({ title, icon, section, iconWidth, iconHeight }: Props) => {
    const buttonClass =
        section === 'header' || 'hero' ? 'header-hero-btn primary-button' :
            section === 'about-us' ? 'about-us-button' :
                section === 'directions' ? 'directions-button' :
                    section === 'team' ? 'team-button' :
                        section === 'cases' ? 'cases-button' :
                            section === 'form' ? 'form-button' :
                                section === 'footer' ? 'footer-button' : '';

    return (
        <button className={`${buttonClass}`}>
            {title}
            {icon && <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />}
        </button>
    );
}

export default Button