'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { IMainGalleryTab } from '@/shared/types/mainGallery';
import { SliderMainGallery } from '@/widgets/slider-main-gallery/SliderMainGallery';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { Button } from '@/shared/ui/button/Button';
import { useDevice } from '@/shared/lib/useMobile/useMobile';
import styles from './MainGallery.module.scss';


interface MainGalleryClientProps {
  data: IMainGalleryTab[];
  mobileData: IMainGalleryTab[];
}
const galleryDataa = [
  {
    _id: "66deff60f5e180caf14e29a4",
    title: "main_photogallery-landscaping",
    text: "Северные",
    priority: 5,
    fileUrl: [
      '/images/gallery-images/polarBear.jpg',
      '/images/gallery-images/reindeer.jpg',
      '/images/gallery-images/reindeerOnHand.jpg',
      '/images/gallery-images/penguin.jpg'
    ],
    mimeType: [
      "image/jpeg",
      "image/jpeg"
    ],
    slug: "main_photogallery-landscaping",
    page: "main_photogallery",
    hide_in_general: false,
    galleryPage: [],
    descriptions: [],
    __v: 0,
    absolutePath: [

    ]
  },
  {
    _id: "66deff60f5e180caf14e29a4",
    title: "main_photogallery-landscaping",
    text: "Домашние",
    priority: 5,
    fileUrl: [
      '/images/gallery-images/dog.jpg',
      '/images/gallery-images/dogOnHand.jpg',
      '/images/gallery-images/goos.jpg',
      '/images/gallery-images/gooseOnHand.jpg',
      '/images/gallery-images/rabbit.jpg',
      '/images/gallery-images/rabbitOnHand.jpg'
    ],
    mimeType: [
      "image/jpeg",
      "image/jpeg"
    ],
    slug: "main_photogallery-landscaping",
    page: "main_photogallery",
    hide_in_general: false,
    galleryPage: [],
    descriptions: [],
    __v: 0,
    absolutePath: [

    ]
  },
  {
    _id: "66deff60f5e180caf14e29a4",
    title: "main_photogallery-landscaping",
    text: "Африканские",
    priority: 5,
    fileUrl: [
      '/images/gallery-images/elephantOnHand.jpg',
      '/images/gallery-images/flamingo.jpg',
      '/images/gallery-images/flamingoOnHand.jpg',
      '/images/gallery-images/giraffe.jpg',
      '/images/gallery-images/giraffeOnHand.jpg'
    ],
    mimeType: [
      "image/jpeg",
      "image/jpeg"
    ],
    slug: "main_photogallery-landscaping",
    page: "main_photogallery",
    hide_in_general: false,
    galleryPage: [],
    descriptions: [],
    __v: 0,
    absolutePath: [
    ]
  },
]

export const MainGalleryClient = ({ data, mobileData }: MainGalleryClientProps) => {

  const filteredData = galleryDataa.filter(tab => tab);
  const filteredMobileData = galleryDataa.filter(tab => tab);
  const [active, setActive] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { isMobile } = useDevice();

  const handleToggle = (index: number) => {
    setIsFading(true);
    setTimeout(() => {
      setActive(index);
      setIsFading(false);
    }, 1000);
  };

  const currentData = isMobile ? filteredMobileData : filteredData;

  if (currentData.length < 1) {
    return null;
  }

  return (
    <section className={styles.section} id='photogallery'>
      <div className={styles.infoBlock}>
        <div className={styles.titles}>
          <h2 className={styles.title}>Фотогалерея</h2>
          <div className={styles.subtitle}>
            <AnimatedTitle text={'Коллекция ватных игрушек в ретро стиле'} />
          </div>
        </div>
        <div>
          <div className={styles.tabs}>
            {currentData.map((tab, index) => (
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
        </div>
      </div>
      <div className={clsx(styles.gallerySlider, isFading && styles.hidden)}>
        <SliderMainGallery slidesData={currentData[active]} />
      </div>
    </section>
  );
};
