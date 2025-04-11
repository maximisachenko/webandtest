'use client';

import { Circle, SocialButton } from '@/components/ui';
import { OUR_SOCIALS_TEAM } from '@/constants/socials';
import Image from 'next/image';
import React from 'react';

interface Props {
    name: string;
    post: string;
    photoSrc: string;
    iconWidth: number;
    iconHeight: number;
    iconSrc: string;
}

const MemberCard = ({ name, post, iconHeight, iconWidth, iconSrc, photoSrc }: Props) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='relative w-[291px] rounded-[14px] flex flex-col team-card-shadow max-md:my-10'>
                <div className='relative h-[271px] bg-card hover:bg-card-hover duration-300 rounded-t-[14px] group'>
                    <Image
                        src={photoSrc}
                        height={315}
                        width={185}
                        alt='Man'
                        className='absolute bottom-0 left-1/3 -translate-x-1/2 w-[185px] z-10 rounded-b-[14px] transform group-hover:scale-105 transition-transform duration-300'
                    />
                </div>

                <div className='absolute flex flex-col gap-3 items-center justify-center right-0 top-1/2 -translate-y-1/2 z-20 bg-primary w-13 h-35 rounded-l-[9px] border-[#E23812] border-t-5 border-b-5 border-l-5'>
                    {OUR_SOCIALS_TEAM.map((social, index) => (
                        <SocialButton key={index} title={social.title} section={social.section} />
                    ))}
                </div>

                <div className='h-[76px] bg-white rounded-b-[14px] z-11'>
                    <div className='flex justify-between items-center my-3 mx-6'>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-xl text-black'>{name}</h1>
                            <div className='flex gap-1 items-center'>
                                <Circle />
                                <h2 className='font-bold text-sm text-black/30'>{post}</h2>
                            </div>
                        </div>
                        <Image src={iconSrc} width={iconWidth} height={iconHeight} alt={`${post} icon`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
