import { useRef, useState } from 'react';
import { IMainGalleryTab } from '@/shared/types/mainGallery';
import { Slider } from '@/shared/ui/slider/Slider';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import { formatText } from '@/shared/lib/formatText/formatText';
import { baseUrl } from '@/shared/consts/api';
import { GalleryModal } from '../gallery-modal/GalleryModal';
import styles from './SliderMainGallery.module.scss';

export const SliderMainGallery = ({ slidesData }: { slidesData: IMainGalleryTab }) => {
  const sliderRef = useRef(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const subtitle = slidesData.descriptions?.[0]?.title;
  const description = slidesData.descriptions?.[0]?.description;

  const formattedSlides = slidesData.fileUrl.map(slide => slide);

  const slides = formattedSlides.map((slide, index) => (
    <div key={index}>
      <AnimatedImage
        src={slide}
        alt={`slide-${index}`}
        sizes={'40vw'}
        className={styles.image}
        blockRef={sliderRef}
        onClick={() => {
          setSelectedSlideIndex(index);
          setModalIsOpen(true);
        }}
      />
    </div>
  ));

  return (
    <div className={styles.galleryWrapper} ref={sliderRef}>
      <Slider slides={slides} color='yellow' classNameSlide={styles.slide} classNameArrows={styles.sliderArrows} />
      <div className={styles.text}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && (
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: formatText(description) }} />
        )}
      </div>
      <GalleryModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        slidesData={formattedSlides}
        selectedSlideIndex={selectedSlideIndex}
        setSelectedSlideIndex={setSelectedSlideIndex}
      />
    </div>
  );
};
