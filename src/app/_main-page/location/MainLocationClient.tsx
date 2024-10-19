'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { IImageSlide } from '@/shared/types/sliders';
import { bgColors } from '@/shared/consts/constants';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import { useLockBodyScroll } from '@/shared/lib/useLockBodyScroll/useLockBodyScroll';
import IconGeo from '@/shared/assets/icons/geo.svg';
import { Button } from '@/shared/ui/button/Button';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { SliderLocation } from '@/widgets/slider-location/SliderLocation';
import { MainLocationModal } from './location-modal/MainLocationModal';
import { ILocationModal } from './MainLocation';
import styles from './MainLocation.module.scss';

interface MainLocationClientProps {
  title: string;
  description: string;
  onFootSlides: IImageSlide[];
  byCarSlides: IImageSlide[];
  onFootSliderName: string;
  byCarSliderName: string;
  locationModal: ILocationModal;
}
export const MainLocationClient = ({
  title,
  description,
  onFootSlides,
  byCarSlides,
  onFootSliderName,
  byCarSliderName,
  locationModal,
}: MainLocationClientProps) => {
  const [byCar, setByCar] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useLockBodyScroll(isOpenModal);

  const handleToggle = () => {
    setIsFading(true);
    setTimeout(() => {
      setByCar(!byCar);
      setIsFading(false);
    }, 1000); // Длительность анимации должна соответствовать transition в CSS
  };

  return (
    <BackgroundChangeSection colorStart={bgColors.colorStart} colorEnd={bgColors.colorEnd} className={styles.section}>
      <div className={styles.infoBlock} id='location'>
        <div className={styles.titles}>
          <h2 className={styles.title}>Расположение</h2>
          {title && (
            <div className={styles.subtitle}>
              <AnimatedTitle text={title} />
            </div>
          )}
          <button type='button' className={styles.btn} onClick={() => setIsOpenModal(true)}>
            <div className={styles.btnLogo}>
              <IconGeo />
            </div>
            <div className={styles.btnText}>смотреть на карте</div>
          </button>
        </div>
        <div>
          {description && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(description) || '' }}
            />
          )}
          {(onFootSlides?.length > 0 || byCarSlides?.length > 0) && (
            <div className={styles.tabs}>
              {onFootSlides?.length > 0 && (
                <Button
                  type='button'
                  variaton='tab'
                  transparent={byCar}
                  className={styles.tabLeft}
                  onClick={byCar ? handleToggle : undefined}
                >
                  {onFootSliderName || 'пешком'}
                </Button>
              )}
              {byCarSlides?.length > 0 && (
                <Button
                  type='button'
                  variaton='tab'
                  transparent={!byCar}
                  className={styles.tabRight}
                  onClick={!byCar ? handleToggle : undefined}
                >
                  {byCarSliderName || 'на машине'}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {(onFootSlides?.length > 0 || byCarSlides?.length > 0) && (
        <div className={clsx(styles.gallery, isFading && styles.hidden)}>
          <SliderLocation slidesData={byCar ? byCarSlides : onFootSlides} />
        </div>
      )}

      <MainLocationModal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} locationModal={locationModal} />
    </BackgroundChangeSection>
  );
};
