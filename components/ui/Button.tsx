import React from 'react'

interface Props {
    title: string;
    section: 'header' | 'about-us' | 'directions' | 'team' | 'cases' | 'form' | 'footer';
    icon?: string
}

const Button = ({ title, icon, section }: Props) => {
    const buttonClass =
        section === 'header' ? 'header-button primary-button' :
            section === 'about-us' ? 'about-us-button' :
                section === 'directions' ? 'directions-button' :
                    section === 'team' ? 'team-button' :
                        section === 'cases' ? 'cases-button' :
                            section === 'form' ? 'form-button' :
                                section === 'footer' ? 'footer-button' : '';

    return (
        <button className={`${buttonClass}`}>
            {icon && <img src={icon} alt="icon" />}
            {title}
        </button>
    );
}

export default Button