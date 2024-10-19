'use client';
import { FC } from 'react';
import { IImageSlide, IPromoCard } from '@/shared/types/sliders';
import styles from './MainLifestyle.module.scss';
import Image from 'next/image';
import magazine from '../../../../public/images/liffeStyle.jpg';
import { IDescription } from '@/shared/types/lifeStyleTypes';
import { SliderLifeStyle } from '@/widgets/slider-lifeStyle/SliderLifeStyle';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';

interface IMainLifestyleClient {
  lifeStyleIcons: IImageSlide[];
  lifeStyleSlides: IPromoCard[];
  lifeStyleDescriptions: IDescription[];
}

export const MainLifestyleClient = ({
  lifeStyleIcons,
  lifeStyleSlides,
  lifeStyleDescriptions,
}: IMainLifestyleClient) => {
  const showButton = true;

  const Table: FC<{ slides: IImageSlide[] }> = ({ slides }) => (
    <table className={styles.table} border={1} cellSpacing='0' cellPadding='5'>
      <tbody>
        {slides.map((item, index) => (
          <tr key={index}>
            <td className={styles.iconCell}>
              <Image width={15.75} height={15.75} alt={''} src={item.image} />
            </td>
            <td className={styles.textCell}>{item.title.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <section className={styles.section} id='lifestyle'>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            <AnimatedTitle text={'Лайфстайл'} />
          </div>
          <Image src={magazine} alt={'Журнал'} />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideTop}>
            <div className={styles.descriptions}>
              {lifeStyleDescriptions?.map((description, index) => (
                <div className={styles.description} key={index}>
                  {description.description}
                </div>
              ))}
            </div>
            <div className={styles.tables}>
              <Table slides={lifeStyleIcons.slice(0, 3)} />
              <Table slides={lifeStyleIcons.slice(-3)} />
            </div>
          </div>
          <div className={styles.rightSideBottom}>
            {lifeStyleSlides?.length > 0 && (
              <div className={styles.gallery}>
                <SliderLifeStyle slidesData={lifeStyleSlides} showButton={showButton} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
