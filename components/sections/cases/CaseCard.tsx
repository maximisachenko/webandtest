'use client';

import React from 'react'
import Image from 'next/image'
import { TECHNOLOGIES } from '@/constants/technologies'
import TechnologyCircle from './TechnologyCircle'
import { Button } from '@/components/ui'
import { useIsTablet } from '@/hooks/useIsMobile';
import { CaseCardProps } from '@/types';

const CaseCard = ({ title, src, description, techIndexes }: CaseCardProps) => {

    const isTablet = useIsTablet();

    return (
        <div className='p-6 bg-white rounded-3xl cases-card-shadow w-full cursor-default hover:scale-105 transition-all duration-300'>
            <div className='bg-card rounded-3xl w-full'>
                <div className='px-12 pt-6 cases-card-image flex justify-center max-[930px]:px-6 max-[930px]:pt-4'>
                    <Image src={src} width={336} height={205} alt={`${title} preview`} />
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4 ml-1'>
                <h1 className='font-semibold text-2xl text-black max-[1300px]:text-[22px] max-xl:text-2xl max-lg:text-[20px]'>{title}</h1>
                <p className='text-[16px] font-light text-black/40'>{description}</p>
                <div className='flex justify-between max-lg:flex-col max-lg:gap-4'>
                    <div className='flex gap-2'>
                        {techIndexes.map((index: number) => {
                            const technology = TECHNOLOGIES[index];
                            return (
                                <TechnologyCircle
                                    key={index}
                                    name={technology.name}
                                    src={technology.src}
                                    width={technology.width}
                                    height={technology.height}
                                />
                            );
                        })}
                    </div>

                    <Button
                        title={'Check live site'}
                        section='cases'
                        icon={isTablet ? '/assets/icons/right-arrow-white.svg' : '/assets/icons/right-arrow.svg'}
                        iconHeight={16}
                        iconWidth={16}
                    />
                </div>
            </div>
        </div>
    );
};

export default CaseCard