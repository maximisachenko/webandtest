import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { UseGsapFadeUpProps } from '@/types';

export const useGsapFadeUp = ({ trigger, y, x, opacity, duration }: UseGsapFadeUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          toggleActions: "play none none none",
      },
        y: y,
        x: x,
        duration: duration,
        opacity: opacity,
        ease: 'power3.out',
      });
    }
  }, []);

  return ref;
};
