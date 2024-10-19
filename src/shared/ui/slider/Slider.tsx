'use client';
import React, { useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import '@/app/styles/slider.scss';
import styles from './Slider.module.scss';
import { ArrowButton } from '@/shared/ui/arrow-button/ArrowButton';

SwiperCore.use([Mousewheel]);

interface SliderProps {
  slides: React.ReactNode[];
  color?: 'orange' | 'yellow' | 'blue';
  className?: string;
  classNameSlide?: string;
  classNameArrows?: string;
  selectedSlideIndex?: number;
  onSlideChange?: (currentIndex: number) => void;
  hiddenOnMobile?: boolean;
  slidesPerView?: number | 'auto';
  isRecreated?: boolean;
}

export const Slider = ({
  slides,
  color = 'orange',
  className,
  classNameSlide,
  classNameArrows,
  selectedSlideIndex = 0,
  onSlideChange,
  hiddenOnMobile = true,
  slidesPerView,
  isRecreated = true,
}: SliderProps) => {
  const [swiperKey, setSwiperKey] = useState(0); // Управляемый ключ для пересоздания Swiper
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Обновляем состояния стрелок при смене слайда
  const handleSlideChange = (swiper: any) => {
    if (!swiper) return;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    if (onSlideChange) {
      onSlideChange(swiper.activeIndex);
    }
  };

  // Пересоздаем Swiper при изменении выбранного слайда или переключении вкладки
  useLayoutEffect(() => {
    if (!isRecreated) return;
    setTimeout(() => {
      setSwiperKey(prevKey => prevKey + 1);
    }, 500);

    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
    // Меняем ключ, чтобы пересоздать Swiper
  }, [selectedSlideIndex, slides, isRecreated]);

  return (
    <>
      <Swiper
        key={swiperKey} // Используем ключ для пересоздания Swiper
        speed={900}
        className={clsx(className)}
        modules={[Navigation, FreeMode]}
        initialSlide={selectedSlideIndex}
        slidesPerView={slidesPerView ? slidesPerView : 'auto'}
        navigation
        resizeObserver={true}
        watchOverflow
        mousewheel={{ forceToAxis: true }}
        touchStartPreventDefault={false}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        onReachBeginning={handleSlideChange}
        onReachEnd={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={classNameSlide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={clsx(styles.arrows, classNameArrows, { [styles.hiddenOnMobile]: hiddenOnMobile })}>
        <ArrowButton type='left' onClick={() => swiperInstance?.slidePrev()} disabled={isBeginning} color={color} />
        <ArrowButton type='right' onClick={() => swiperInstance?.slideNext()} disabled={isEnd} color={color} />
      </div>
    </>
  );
};
