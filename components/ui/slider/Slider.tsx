'use client';

import React, { useState, JSX } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderProps } from '@/types';
import SliderPagination from "./SliderPagination";

export default function Slider({ children }: SliderProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <div>
            <div className="md:hidden">
                <div className="mt-8 flex flex-col items-center justify-center gap-16">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="w-full relative">
                            <Swiper
                                speed={1000}
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                                effect='fade'
                                fadeEffect={{ crossFade: true }}
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {React.Children.map(children, (child, index) => (
                                    <SwiperSlide key={index}>
                                        {child}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <SliderPagination
                                totalSlides={React.Children.count(children)}
                                currentIndex={currentIndex}
                                onDotClick={(index) => {
                                    swiperInstance?.slideToLoop(index);
                                    setCurrentIndex(index);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
