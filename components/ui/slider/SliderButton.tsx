import React from 'react';
import Image from 'next/image';
import { SliderButtonProps } from '@/types';

const SliderButton: React.FC<SliderButtonProps> = ({ type, swiper, className }) => {

    const handleClick = () => {
        if (type === 'prev') {
            swiper?.slidePrev();
        } else if (type === 'next') {
            swiper?.slideNext();
        }
    }

    return (
        <button
            className={`custom-${type} ${className}`}
            onClick={handleClick}
            aria-label={`Go to ${type === 'prev' ? 'previous' : 'next'} slide`}
        >
            <Image
                src={`/assets/icons/${type === 'prev' ? 'left' : 'right'}slider.svg`}
                width={36}
                height={36}
                alt={`${type === 'prev' ? 'Previous' : 'Next'} slide button`}
            />
        </button>
    );
};

export default SliderButton;
