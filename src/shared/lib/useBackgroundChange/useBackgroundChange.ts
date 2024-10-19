import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useBackgroundChange = (
  triggerElement: { current: HTMLElement | null },
  colorStart: string,
  colorEnd: string,
) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (triggerElement.current) {
      const section = triggerElement.current;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top+=20% top',
        end: 'top+=80% top',
        onUpdate: self => {
          const progress = self.progress;
          const color = gsap.utils.interpolate(colorStart, colorEnd, progress);
          gsap.to('body', { backgroundColor: color, duration: 0 });
        },
      });

      return () => {
        trigger.kill();
      };
    }
  }, [triggerElement, colorStart, colorEnd]);
};
