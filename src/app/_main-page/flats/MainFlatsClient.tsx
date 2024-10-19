'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import { IMainGalleryTab } from '@/shared/types/mainGallery';
import { Button } from '@/shared/ui/button/Button';
import { SliderMainFlats } from '@/widgets/slider-main-flat/SliderMainFlats';
import styles from './MainFlats.module.scss';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import { IButton } from '@/shared/types/sliders';

interface IMainLifestyleClient {
  flatsInfoImg: string;
  flatsInfoTitleText: string;
  flatsInfoTitleDescription: string;
  flatsGallery: IMainGalleryTab[];
  btn: IButton;
}

export const MainFlatsClient = ({
  flatsInfoImg,
  flatsInfoTitleText,
  flatsInfoTitleDescription,
  flatsGallery,
  btn,
}: IMainLifestyleClient) => {
  const [active, setActive] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const filteredData = flatsGallery.filter(tab => !tab.hide_in_general);
  const showBtn = btn && !btn.hide && btn.value && btn.path;

  const handleToggle = (index: number) => {
    if (active === index) {
      return;
    }

    setIsFading(true);
    setTimeout(() => {
      setActive(index);
      setIsFading(false);
    }, 1000);
  };

  if (filteredData.length < 1) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.infoBlock}>
        <div className={styles.titles}>
          <h2 className={styles.title}>Квартиры</h2>
          <div className={styles.subtitle}>
            <AnimatedTitle text={flatsInfoTitleText} />
          </div>
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(flatsInfoTitleDescription) || '' }}
        />
      </div>
      <div className={styles.contentBlock}>
        <AnimatedImage src={flatsInfoImg} alt={'Квартиры'} className={styles.leftSideContentBlock} />
        <div className={styles.rightSideContentBlock}>
          <div className={styles.tabs}>
            {filteredData.map((tab, index) => (
              <Button
                key={tab._id}
                type='button'
                color='yellow'
                variaton='tab'
                className={styles.tab}
                transparent={active !== index}
                onClick={() => handleToggle(index)}
              >
                {tab.text}
              </Button>
            ))}
          </div>

          <div className={clsx(styles.gallerySlider, isFading && styles.hidden)}>
            <div className={styles.containerForArrows}>
              <SliderMainFlats slidesData={filteredData[active]} />
            </div>
            <div className={styles.buttonsBlock}>
              <Button type='button' color='yellow' onClick={() => {}}>
                {'Оставить заявку'}
              </Button>

              {showBtn && (
                <Button link={btn.path} type={'button'} color={'yellow'} className={styles.btn}>
                  {btn.value}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
