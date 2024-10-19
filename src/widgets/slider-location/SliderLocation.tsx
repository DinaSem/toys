import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Slider } from '@/shared/ui/slider/Slider';
import { IImageSlide } from '@/shared/types/sliders';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import styles from './SliderLocation.module.scss';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';

export const SliderLocation = ({ slidesData }: { slidesData: IImageSlide[] }) => {
  const sliderRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = slidesData.map((slide, index) => (
    <div key={index} className={clsx(isSmallScreen ? styles.slide : styles.center)}>
      <AnimatedImage src={slide.image} className={styles.image} blockRef={isSmallScreen ? undefined : sliderRef} />
      <div className={styles.text}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slide.title?.text) || '' }} />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slide.title?.descriptions?.[0]) || '' }}
        />
      </div>
    </div>
  ));

  return (
    <>
      {slidesData?.length > 0 && !isSmallScreen && (
        <div ref={sliderRef}>
          <Slider slides={slides} color='orange' classNameSlide={styles.slide} classNameArrows={styles.sliderArrows} />
        </div>
      )}
      {slidesData?.length > 0 && isSmallScreen && <div className={styles.cards}>{slides}</div>}
    </>
  );
};
