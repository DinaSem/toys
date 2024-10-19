'use client';
import { useState } from 'react';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { bgColors } from '@/shared/consts/constants';
import styles from '@/app/_main-page/landscaping/MainLandscaping.module.scss';
import { IImageSlide } from '@/shared/types/sliders';
import { SliderLandscaping } from '@/widgets/slider-landscaping/SliderLandscaping';
import { GalleryModal } from '@/widgets/gallery-modal/GalleryModal';

export const MainLandscapingGallery = ({ slidesData }: { slidesData: IImageSlide[] }) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const imageUrls = slidesData?.map(slide => slide.image);

  const handleClickSlide = (index: number) => {
    setSelectedSlideIndex(index);
    setModalIsOpen(true);
  };

  return (
    <>
      <BackgroundChangeSection
        colorStart={bgColors.colorEnd}
        colorEnd={bgColors.colorStart}
        className={styles.sectionGallery}
      >
        <SliderLandscaping slidesData={slidesData} handleClickSlide={handleClickSlide} />
        <GalleryModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          slidesData={imageUrls}
          selectedSlideIndex={selectedSlideIndex}
          setSelectedSlideIndex={setSelectedSlideIndex}
        />
      </BackgroundChangeSection>
    </>
  );
};
