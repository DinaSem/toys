import { IMainGalleryTab } from '@/shared/types/mainGallery';
import styles from './SliderMainFlats.module.scss';
import Image from 'next/image';
import { Slider } from '@/shared/ui/slider/Slider';
import { formatText } from '@/shared/lib/formatText/formatText';
import { baseUrl } from '@/shared/consts/api';
import clsx from 'clsx';

export const SliderMainFlats = ({ slidesData }: { slidesData: IMainGalleryTab }) => {
  const slides = slidesData.fileUrl.map((slide, index) => (
    <div key={index}>
      <div className={styles.image}>
        <Image
          src={`${baseUrl}/static/${slide}`}
          alt={`slide-${index}`}
          fill={true}
          sizes={'40wv'}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className={clsx(styles.text)}>
        {slidesData.descriptions[index]?.title && (
          <div
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: formatText(slidesData.descriptions?.[index]?.title) }}
          />
        )}
        {slidesData.descriptions[index]?.description && (
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: formatText(slidesData.descriptions?.[index]?.description) }}
          />
        )}
      </div>
    </div>
  ));

  return (
    <div className={styles.sliderWrapper}>
      <Slider
        slides={slides}
        color='yellow'
        classNameSlide={styles.slide}
        classNameArrows={slidesData.absolutePath.length > 1 ? styles.sliderArrows : styles.noSliderArrows}
        hiddenOnMobile={false}
        isRecreated={true}
      />
    </div>
  );
};
