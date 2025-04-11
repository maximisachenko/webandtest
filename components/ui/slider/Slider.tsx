'use client';

import React, { useState, JSX } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SwiperPagination from "./SwiperPagination";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Props {
    children: React.ReactNode; // children, которые будут переданы
}

export default function Slider({ children }: Props): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

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

                            <SwiperPagination
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
