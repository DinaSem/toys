import { Fragment } from 'react';
import { useRef } from 'react';
import { Slider } from '@/shared/ui/slider/Slider';
import { IImageSlide } from '@/shared/types/sliders';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import styles from './SliderLandscaping.module.scss';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import clsx from 'clsx';

interface SliderLandscapinglProps {
  slidesData: IImageSlide[];
  handleClickSlide?: (index: number) => void;
}

export const SliderLandscaping = ({ slidesData, handleClickSlide }: SliderLandscapinglProps) => {
  const sliderRef = useRef(null);
  const areFiveSlides = slidesData.length % 4 === 1;
  const areSixSlides = slidesData.length % 4 === 2;
  const slides = slidesData.map((slide, index) => (
    <Fragment key={index}>
      <AnimatedImage
        src={slide.image}
        className={styles.image}
        blockRef={sliderRef}
        onClick={() => (handleClickSlide ? handleClickSlide(index) : undefined)}
      />
      <div className={styles.textWrapper}>
        <div className={styles.text} onClick={() => (handleClickSlide ? handleClickSlide(index) : undefined)}>
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slide.title?.text) || '' }}
          />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slide.title?.descriptions?.[0]) || '' }}
          />
        </div>
      </div>
    </Fragment>
  ));

  return (
    <>
      {slidesData?.length > 0 && (
        <div ref={sliderRef} className={styles.sliderWrapper}>
          <Slider
            slides={slides}
            color='blue'
            classNameSlide={clsx(styles.slide, areFiveSlides && styles.fiveSlides, areSixSlides && styles.sixSlides)}
            classNameArrows={styles.sliderArrows}
          />
        </div>
      )}
    </>
  );
};
