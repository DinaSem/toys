'use client';
import Madam from '@/shared/assets/icons/WomenForAboutPage.svg';
import styles from './MainAbout.module.scss';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { BackgroundChangeSection } from '@/shared/ui/background-change-section/BackgroundChangeSection';
import { bgColors } from '@/shared/consts/constants';

interface MainAboutClientProps {
  text: string | undefined;
  descriptions: string[] | undefined;
}
export const MainAboutClient = ({ text, descriptions }: MainAboutClientProps) => {
  return (
    <BackgroundChangeSection colorStart={bgColors.colorStart} colorEnd={bgColors.colorEnd} className={styles.container}>
      <div className={styles.contentWrapper} id='about'>
        <div className={styles.madam}>
          <Madam />
        </div>
        <h2 className={styles.aboutTitle}>О проекте</h2>
        {text && (
          <div className={styles.text}>
            <AnimatedTitle text={text} />
          </div>
        )}
        <div className={styles.descriptions}>{descriptions}</div>
      </div>
    </BackgroundChangeSection>
  );
};
