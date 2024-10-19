'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';

export const AnimatedTitle = ({ text }: { text: string }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      if (titleRef.current) {
        const splitText = new SplitType(titleRef.current, { types: 'lines' });
        const lines = splitText.lines;
        lines?.forEach(line => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          line.parentNode?.insertBefore(wrapper, line); // Вставляем wrapper перед line
          wrapper.appendChild(line); // Помещаем строку внутрь обёртки
        });
        lines?.forEach((line, index) => {
          gsap.fromTo(
            line,
            {
              y: 100,
              rotation: -9,
            },
            {
              y: 0,
              rotation: 0,
              duration: 1.5,
              ease: 'power3.out',
              delay: index * 0.2,
              scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 1,
                toggleActions: 'play none none none',
                once: true,
              },
            },
          );
        });
        // ScrollTrigger.refresh();
      }
    }, 100);
  }, [text]);

  return <div ref={titleRef} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(text) || '' }} />;
};
