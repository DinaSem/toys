'use client';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { bgColors } from '@/shared/consts/constants';
import Image from 'next/image';
import { baseUrl } from '@/shared/consts/api';
import { IRiverfrontItem } from '@/shared/types/riverfront';
import { Button } from '@/shared/ui/button/Button';
import { useState } from 'react';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import styles from './MainRiverfront.module.scss';
import { PanoramaModal } from '@/widgets/panorama-modal/PanoramaModal';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';

interface MainRiverfrontClientProps {
  title: string;
  data: IRiverfrontItem;
}

export const MainRiverfrontClient = ({ title, data }: MainRiverfrontClientProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const bgImage = data?.img;

  return (
    <BackgroundChangeSection colorStart={bgColors.colorStart} colorEnd={bgColors.colorEnd}>
      <div className={styles.wrapper} id='riverfront'>
        <div className={styles.riverfrontContent}>
          <div className={styles.bgImageWrapper}>
            <AnimatedImage alt='riverfront background' src={`${baseUrl}/static/${bgImage}`} />
          </div>
          <div className={styles.title}>
            <AnimatedTitle text={title} />
          </div>
          <div className={styles.card}>
            <div className={styles.cardImgWrapper}>
              <Image
                alt='riverfront card image'
                src={`${baseUrl}/static/${data?.background_desktop}`}
                fill
                sizes='(max-width: 540px) 70vw, (max-width: 768px) 40vw, 20vw'
              />
            </div>
            <Button transparent onClick={() => setModalIsOpen(true)}>
              смотреть Галерею
            </Button>
          </div>
          <div className={styles.line} />
          <p className={styles.description}>{data?.description}</p>
        </div>
        <PanoramaModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          imageUrl={`${baseUrl}/static/${data?.img_max}`}
        />
      </div>
    </BackgroundChangeSection>
  );
};
