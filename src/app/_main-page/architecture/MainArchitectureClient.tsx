'use client';
import Image from 'next/image';
import { useRef, useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IButton, IPromoCard } from '@/shared/types/sliders';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import { Button } from '@/shared/ui/button/Button';
import { ArrowButton } from '@/shared/ui/arrow-button/ArrowButton';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { bgColors } from '@/shared/consts/constants';
import { baseUrl } from '@/shared/consts/api';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import styles from './MainArchitecture.module.scss';

interface MainArchitectureClientProps {
  title: string;
  slides: IPromoCard[];
  btn: IButton;
}

export const MainArchitectureClient = ({ title, slides, btn }: MainArchitectureClientProps) => {
  const showBtn = btn && !btn.hide && btn.value && btn.path;
  const sliderRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const isBeginning = swiperInstance?.isBeginning ?? true;
  const isEnd = swiperInstance?.isEnd ?? false;

  const handleSlideChange = (swiper: any) => {
    if (!swiper) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveSlide(swiper.activeIndex);
      setIsFading(false);
    }, 500);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const memoizedSlides = useMemo(
    () =>
      slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <AnimatedImage
            src={`${baseUrl}/static/${slide.background_desktop}`}
            mobileSrc={`${baseUrl}/static/${slide.background_mobile}`}
            tabletSrc={`${baseUrl}/static/${slide.background_tablet}`}
            className={styles.slide}
            blockRef={sliderRef}
            key={index}
          />
        </SwiperSlide>
      )),
    [slides],
  );

  return (
    <BackgroundChangeSection colorStart={bgColors.colorEnd} colorEnd={bgColors.colorStart} className={styles.section}>
      <h2 className={styles.title} id='architecture'>
        Архитектура
      </h2>
      <div className={styles.main}>
        <div className={clsx(styles.info, styles.sticky)}>
          {title && (
            <div className={styles.subtitle}>
              <AnimatedTitle text={title} />
            </div>
          )}
          <div className={styles.content}>
            <div className={clsx(styles.fadeIn, isFading && styles.fadeOut)}>
              <div
                className={styles.authors}
                dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slides[activeSlide]?.title || '') }}
              />
              <div className={styles.logo}>
                {slides[activeSlide]?.img && (
                  <Image src={`${baseUrl}/static/${slides[activeSlide]?.img}`} alt='' fill={true} />
                )}
              </div>
            </div>
            <div className={styles.contentSecond}>
              <div
                className={clsx(styles.description, styles.fadeIn, isFading && styles.fadeOut)}
                dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(slides[activeSlide]?.description || '') }}
              />
              <div className={clsx(styles.btnArrows, 'MainArchitectureSlider-arrows-design')}>
                {showBtn && (
                  <Button link={btn.path} color='blue'>
                    {btn.value}
                  </Button>
                )}
                <div className={clsx(styles.arrows)}>
                  <ArrowButton
                    type='left'
                    onClick={() => swiperInstance?.slidePrev()}
                    disabled={isBeginning}
                    color='blue'
                  />
                  <ArrowButton type='right' onClick={() => swiperInstance?.slideNext()} disabled={isEnd} color='blue' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gallery} ref={sliderRef}>
          <Swiper
            modules={[Navigation, FreeMode]}
            initialSlide={0}
            slidesPerView={isSmallScreen ? 'auto' : 1}
            navigation
            watchOverflow
            mousewheel={{ forceToAxis: true }}
            touchStartPreventDefault={false}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
          >
            {memoizedSlides}
          </Swiper>
        </div>
      </div>
    </BackgroundChangeSection>
  );
};
