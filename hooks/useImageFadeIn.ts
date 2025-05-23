import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useImageFadeIn = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { width: 0, opacity: 0 }, 
      {
        width: '100%', 
        opacity: 1,   
        duration: 2, 
        ease: 'power2.out',
      }
    );
  }, []);

  return imgRef;
};
