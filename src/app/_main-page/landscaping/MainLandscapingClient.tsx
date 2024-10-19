'use client';
import Image from 'next/image';
import coverImage from '../../../../public/images/landscaping.png';
import coverImageMobile from '../../../../public/images/landscaping-mob.png';
import coverImageTablet from '../../../../public/images/landscaping-tablet.png';
import { sanitizeTextOnly } from '@/shared/lib/sanitizeTextOnly/sanitizeTextOnly';
import { IButton } from '@/shared/types/sliders';
import { Button } from '@/shared/ui/button/Button';
import { AnimatedTitle } from '@/shared/ui/animated-title/AnimatedTitle';
import { AnimatedImage } from '@/shared/ui/animated-image/AnimatedImage';
import styles from './MainLandscaping.module.scss';

interface MainLandscapingClientProps {
  title: string;
  descriptions: { description: string }[];
  image: string;
  btn: IButton;
}

export const MainLandscapingClient = ({ title, descriptions, image, btn }: MainLandscapingClientProps) => {
  const showBtn = btn && !btn.hide && btn.value && btn.path;
  return (
    <>
      <section className={styles.section} id='landscaping'>
        <AnimatedImage
          src={coverImage.src}
          mobileSrc={coverImageMobile.src}
          tabletSrc={coverImageTablet.src}
          className={styles.coverImage}
        />
        <div className={styles.info}>
          <div className={styles.image}>
            <Image
              src={image}
              alt=''
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <h2 className={styles.title}>благоустройство</h2>
          {title && (
            <div className={styles.subtitle}>
              <AnimatedTitle text={title} />
            </div>
          )}
          {descriptions?.length > 0 && (
            <div className={styles.descriptions}>
              {descriptions.map((el, index) => (
                <div
                  key={index}
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: sanitizeTextOnly(el.description) || '' }}
                />
              ))}
            </div>
          )}
          {showBtn && (
            <Button link={btn.path} color='blue' className={styles.btn}>
              {btn.value}
            </Button>
          )}
        </div>
      </section>
    </>
  );
};
