import React from "react";
import { SliderPaginationProps } from '@/types';

const SliderPagination: React.FC<SliderPaginationProps> = ({
    totalSlides,
    currentIndex,
    onDotClick,
}) => {

    return (
        <div className="flex justify-center gap-[10px] items-center">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick?.(index)}
                    className={`rounded-full transition-all duration-500 w-[6px] h-[6px] ${index === currentIndex ? "bg-primary scale-175" : "bg-gray-300 scale-100"
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default SliderPagination;
