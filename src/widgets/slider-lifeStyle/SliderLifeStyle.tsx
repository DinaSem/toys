import { useRef } from 'react';
import { Slider } from '@/shared/ui/slider/Slider';
import { IPromoCard } from '@/shared/types/sliders';
import { baseUrl } from '@/shared/consts/api';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import { Button } from '@/shared/ui/button/Button';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import styles from './SliderLifeStyle.module.scss';

export const SliderLifeStyle = ({ slidesData, showButton }: { slidesData: IPromoCard[]; showButton: boolean }) => {
  const sliderRef = useRef(null);

  const slides = slidesData.map((slide, index) => (
    <div key={index} className={styles.center}>
      <AnimatedImage
        src={`${baseUrl}/static/${slide.background_desktop}`}
        className={styles.image}
        alt='Слайд'
        blockRef={sliderRef}
      />
      <div className={styles.text}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slide.title) }} />
        <div className={styles.description}>{slide.description}</div>
      </div>
    </div>
  ));

  return (
    <div ref={sliderRef}>
      {slidesData?.length > 0 && (
        <Slider
          slides={slides}
          color='orange'
          classNameSlide={styles.slide}
          classNameArrows={showButton ? styles.arrows : styles.arrowsWithoutButton}
          slidesPerView={3}
        />
      )}
      <div className={styles.bottom}>
        {showButton && (
          <Button type='button' className={styles.button}>
            Лайфстайл
          </Button>
        )}
      </div>
    </div>
  );
};
