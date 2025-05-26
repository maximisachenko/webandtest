import { PARTNERS } from '@/constants/companyinformation';
import React from 'react';
import Image from 'next/image';

const CompaniesCarousel = () => {
    return (
        <div className="bg-second-background py-9 overflow-hidden relative w-full flex items-center">
            <div className="flex w-max animate-scroll gap-16 items-center">
                {PARTNERS.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo.src}
                        alt={`Company ${logo.name}`}
                        className="h-10 object-contain"
                        width={140}
                        height={140}
                    />
                ))}
                {PARTNERS.map((logo, index) => (
                    <Image
                        key={`dup-${index}`}
                        src={logo.src}
                        alt={`Company duplicate ${logo.name}`}
                        className="h-10 object-contain"
                        width={140}
                        height={140}
                    />
                ))}
            </div>
        </div>
    );
};

export default CompaniesCarousel;
